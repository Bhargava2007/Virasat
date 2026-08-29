<template>
  <div class="living-map-container">
    <div ref="mapElement" class="living-map-element"></div>

    <!-- Map Legend Badge -->
    <div class="map-legend">
      <div class="legend-item">
        <span class="legend-dot legend-dot--heritage"></span>
        <span>Heritage</span>
      </div>
      <div class="legend-item">
        <span class="legend-dot legend-dot--culture"></span>
        <span>Culture</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, watch, nextTick } from 'vue'
import L from 'leaflet'

// Fix Leaflet's broken default icon URLs in Vite bundlers
delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: new URL(
    'leaflet/dist/images/marker-icon-2x.png',
    import.meta.url
  ).href,
  iconUrl: new URL('leaflet/dist/images/marker-icon.png', import.meta.url).href,
  shadowUrl: new URL('leaflet/dist/images/marker-shadow.png', import.meta.url)
    .href
})

const props = defineProps({
  records: {
    type: Array,
    default: () => []
  },
  selectedState: {
    type: String,
    default: ''
  },
  selectedRecordId: {
    type: String,
    default: ''
  }
})

const emit = defineEmits(['marker-click'])

const mapElement = ref(null)
let mapInstance = null
let markerGroup = null
let resizeObserver = null

// State Bounding Boxes for Smooth Camera Focus
const STATE_BOUNDS = {
  odisha: [
    [17.5, 81.0],
    [22.8, 87.5]
  ]
}

// Multiple tile providers for fallback
const TILE_PROVIDERS = [
  {
    name: 'CartoDB Voyager',
    url: 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
    options: {
      maxZoom: 20,
      subdomains: 'abcd',
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
    }
  },
  {
    name: 'OpenStreetMap',
    url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    options: {
      maxZoom: 19,
      subdomains: 'abc',
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }
  }
]

// Custom SVG Icons for Leaflet Markers
function createCustomIcon(recordType, isSelected = false) {
  const isHeritage = recordType === 'heritage'
  const bgColor = isHeritage ? '#B84B2A' : '#6C4BA0'
  const strokeColor = isSelected ? '#D4A017' : '#FFFFFF'
  const size = isSelected ? 38 : 32

  const svg = `
    <svg width="${size}" height="${size}" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="18" cy="18" r="16" fill="${bgColor}" stroke="${strokeColor}" stroke-width="${isSelected ? 3 : 2}" />
      ${
        isHeritage
          ? '<path d="M12 24V21H24V24H12ZM13 19.5V13.5H15V19.5H13ZM17 19.5V13.5H19V19.5H17ZM21 19.5V13.5H23V19.5H21ZM12 12V10.5L18 7.5L24 10.5V12H12Z" fill="white"/>'
          : '<circle cx="15" cy="14" r="1.5" fill="white"/><circle cx="21" cy="14" r="1.5" fill="white"/><circle cx="18" cy="21" r="1.5" fill="white"/><path d="M18 10C13.58 10 10 13.58 10 18C10 22.42 13.58 26 18 26C19.38 26 20.5 24.88 20.5 23.5C20.5 22.86 20.25 22.28 19.84 21.85C19.43 21.42 19.2 20.85 19.2 20.2C19.2 18.99 20.19 18 21.4 18H23.5C24.88 18 26 16.88 26 15.5C26 12.46 22.42 10 18 10Z" stroke="white" stroke-width="1.2" fill="none"/>'
      }
    </svg>
  `

  return L.divIcon({
    html: svg,
    className: 'custom-leaflet-marker',
    iconSize: [size, size],
    iconAnchor: [size / 2, size / 2]
  })
}

function updateMarkers() {
  if (!mapInstance || !markerGroup) return

  markerGroup.clearLayers()

  const validLatLngs = []

  props.records.forEach(rec => {
    if (typeof rec.latitude === 'number' && typeof rec.longitude === 'number') {
      const isSelected = rec.id === props.selectedRecordId
      const icon = createCustomIcon(rec.recordType, isSelected)
      const marker = L.marker([rec.latitude, rec.longitude], { icon })

      marker.on('click', () => {
        emit('marker-click', rec)
      })

      markerGroup.addLayer(marker)
      validLatLngs.push([rec.latitude, rec.longitude])
    }
  })

  // Smoothly adjust map view based on state bounds or active markers
  if (props.selectedState && STATE_BOUNDS[props.selectedState]) {
    mapInstance.fitBounds(STATE_BOUNDS[props.selectedState], {
      padding: [30, 30],
      maxZoom: 9
    })
  } else if (validLatLngs.length > 0) {
    const bounds = L.latLngBounds(validLatLngs)
    mapInstance.fitBounds(bounds, { padding: [40, 40], maxZoom: 8 })
  }

  nextTick(() => {
    if (mapInstance) mapInstance.invalidateSize()
  })
}

function tryLoadTiles(providerIndex = 0) {
  if (!mapInstance || providerIndex >= TILE_PROVIDERS.length) return

  const provider = TILE_PROVIDERS[providerIndex]
  const tileLayer = L.tileLayer(provider.url, provider.options)

  // If first tile errors, try next provider
  tileLayer.on('tileerror', () => {
    console.warn(
      `[Map] Tile provider "${provider.name}" failed, trying next...`
    )
    tileLayer.remove()
    tryLoadTiles(providerIndex + 1)
  })

  tileLayer.addTo(mapInstance)
}

onMounted(() => {
  if (!mapElement.value) return

  // Center on India
  mapInstance = L.map(mapElement.value, {
    center: [20.5937, 78.9629],
    zoom: 5,
    zoomControl: false
  })

  // Try loading tiles from preferred provider with fallback
  tryLoadTiles(0)

  // Zoom control in top right
  L.control.zoom({ position: 'topright' }).addTo(mapInstance)

  markerGroup = L.layerGroup().addTo(mapInstance)

  updateMarkers()

  // Setup ResizeObserver for responsive sizing
  if (window.ResizeObserver && mapElement.value) {
    resizeObserver = new ResizeObserver(() => {
      if (mapInstance) mapInstance.invalidateSize()
    })
    resizeObserver.observe(mapElement.value)
  }

  // Delayed invalidateSize for layout settling
  setTimeout(() => {
    if (mapInstance) mapInstance.invalidateSize()
  }, 300)
})

onBeforeUnmount(() => {
  if (resizeObserver && mapElement.value) {
    resizeObserver.unobserve(mapElement.value)
    resizeObserver = null
  }
  if (mapInstance) {
    mapInstance.remove()
    mapInstance = null
  }
})

watch(
  () => [props.records, props.selectedState, props.selectedRecordId],
  () => {
    updateMarkers()
  },
  { deep: true }
)
</script>

<style lang="scss">
.living-map-container {
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 400px;
}

.living-map-element {
  width: 100%;
  height: 100%;
  background: #eef0f2;
}

/* Leaflet tile images must not be constrained by any global img rules */
.leaflet-container img {
  max-width: none !important;
  max-height: none !important;
}

.custom-leaflet-marker {
  background: none !important;
  border: none !important;

  &:hover {
    transform: scale(1.15);
    transition: transform 0.2s ease;
  }
}

.map-legend {
  position: absolute;
  bottom: 24px;
  left: 16px;
  z-index: 800;
  background: rgba(255, 255, 255, 0.92);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-radius: 12px;
  padding: 8px 14px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);
  border: 1px solid rgba(74, 44, 30, 0.1);
  display: flex;
  gap: 14px;
  font-family: var(--font-body);
  font-size: 0.75rem;
  font-weight: 600;
  color: #4a2c1e;

  .legend-item {
    display: flex;
    align-items: center;
    gap: 6px;
  }

  .legend-dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;

    &--heritage {
      background: #b84b2a;
    }

    &--culture {
      background: #6c4ba0;
    }
  }
}
</style>
