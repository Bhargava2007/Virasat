<template>
  <div class="three-scene-container">
    <canvas
      ref="canvasEl"
      class="three-canvas"
      :style="{ opacity: isLoaded ? 1 : 0 }"
    />
    <div v-if="!isLoaded && showFallback" class="three-fallback">
      <div class="fallback-content">
        <q-icon name="monument" size="48px" class="fallback-icon" />
        <p>Heritage Scene</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'
import * as THREE from 'three'
import gsap from 'gsap'

const props = defineProps({
  geometry: {
    type: Object,
    default: () => ({
      type: 'torus',
      scale: 1.5
    })
  },
  colors: {
    type: Object,
    default: () => ({
      primary: 0xc4632a,
      secondary: 0x2d3a7c,
      accent: 0xd4a843,
      glow: 0xffffff
    })
  },
  enableHover: {
    type: Boolean,
    default: true
  },
  showFallback: {
    type: Boolean,
    default: true
  }
})

const emit = defineEmits(['loaded', 'hover'])

const canvasEl = ref(null)
const isLoaded = ref(false)
const scene = ref(null)
const camera = ref(null)
const renderer = ref(null)
const mesh = ref(null)
const isHovering = ref(false)
const animationId = ref(null)
const raycaster = new THREE.Raycaster()
const mouse = new THREE.Vector2()

const prefersReducedMotion = computed(() => {
  if (typeof window === 'undefined') return false
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
})

const initScene = () => {
  if (!canvasEl.value) return

  const w = canvasEl.value.clientWidth
  const h = canvasEl.value.clientHeight

  scene.value = new THREE.Scene()
  scene.value.background = new THREE.Color(0xfdf8f5)
  scene.value.fog = new THREE.Fog(0xfdf8f5, 10, 50)

  camera.value = new THREE.PerspectiveCamera(75, w / h, 0.1, 1000)
  camera.value.position.z = 3

  renderer.value = new THREE.WebGLRenderer({
    canvas: canvasEl.value,
    antialias: true,
    alpha: true
  })

  const pixelRatio = Math.min(window.devicePixelRatio, 2)
  renderer.value.setPixelRatio(pixelRatio)
  renderer.value.setSize(w, h)

  createGeometry()
  addLighting()
  addParticles()

  isLoaded.value = true
  emit('loaded')
}

const createGeometry = () => {
  let geometry
  const { type, scale } = props.geometry

  switch (type) {
    case 'torus':
      geometry = new THREE.TorusGeometry(1, 0.4, 32, 100)
      break
    case 'icosahedron':
      geometry = new THREE.IcosahedronGeometry(1, 4)
      break
    case 'octahedron':
      geometry = new THREE.OctahedronGeometry(1)
      break
    default:
      geometry = new THREE.TorusGeometry(1, 0.4, 32, 100)
  }

  const material = new THREE.MeshPhongMaterial({
    color: props.colors.primary,
    emissive: 0x332211,
    shininess: 100,
    wireframe: false
  })

  mesh.value = new THREE.Mesh(geometry, material)
  mesh.value.scale.set(scale, scale, scale)
  scene.value.add(mesh.value)

  if (!prefersReducedMotion.value) {
    gsap.to(mesh.value.rotation, {
      x: Math.PI * 2,
      y: Math.PI * 2,
      duration: 20,
      repeat: -1,
      ease: 'none'
    })
  }
}

const addLighting = () => {
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.6)
  scene.value.add(ambientLight)

  const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8)
  directionalLight.position.set(5, 5, 7)
  directionalLight.castShadow = true
  scene.value.add(directionalLight)

  const pointLight = new THREE.PointLight(props.colors.accent, 0.5, 10)
  pointLight.position.set(-2, 2, 3)
  scene.value.add(pointLight)

  const glowLight = new THREE.PointLight(props.colors.glow, 0.3)
  glowLight.position.set(0, 0, 3)
  scene.value.add(glowLight)
}

const addParticles = () => {
  const particleCount = prefersReducedMotion.value ? 0 : 20
  const geometry = new THREE.BufferGeometry()
  const positions = new Float32Array(particleCount * 3)

  for (let i = 0; i < particleCount * 3; i += 3) {
    positions[i] = (Math.random() - 0.5) * 10
    positions[i + 1] = (Math.random() - 0.5) * 10
    positions[i + 2] = (Math.random() - 0.5) * 10
  }

  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))

  const material = new THREE.PointsMaterial({
    color: props.colors.accent,
    size: 0.05,
    sizeAttenuation: true,
    opacity: 0.3,
    transparent: true
  })

  const particles = new THREE.Points(geometry, material)
  scene.value.add(particles)

  if (!prefersReducedMotion.value) {
    gsap.to(particles.rotation, {
      x: Math.PI * 2,
      y: Math.PI,
      duration: 40,
      repeat: -1,
      ease: 'none'
    })
  }
}

const onMouseMove = event => {
  if (!props.enableHover || !mesh.value) return

  const rect = canvasEl.value.getBoundingClientRect()
  mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1
  mouse.y = (-(event.clientY - rect.top) / rect.height) * 2 + 1

  raycaster.setFromCamera(mouse, camera.value)
  const intersects = raycaster.intersectObject(mesh.value)

  if (intersects.length > 0 && !isHovering.value) {
    isHovering.value = true
    emit('hover', true)

    if (!prefersReducedMotion.value) {
      gsap.to(mesh.value, {
        scale: 1.2,
        duration: 0.4,
        ease: 'power2.out'
      })

      gsap.to(mesh.value.material, {
        emissive: props.colors.accent,
        duration: 0.4,
        ease: 'power2.out'
      })
    }
  } else if (intersects.length === 0 && isHovering.value) {
    isHovering.value = false
    emit('hover', false)

    if (!prefersReducedMotion.value) {
      gsap.to(mesh.value, {
        scale: props.geometry.scale,
        duration: 0.4,
        ease: 'power2.out'
      })

      gsap.to(mesh.value.material, {
        emissive: 0x332211,
        duration: 0.4,
        ease: 'power2.out'
      })
    }
  }
}

const onMouseLeave = () => {
  if (isHovering.value) {
    isHovering.value = false
    emit('hover', false)

    if (!prefersReducedMotion.value && mesh.value) {
      gsap.to(mesh.value, {
        scale: props.geometry.scale,
        duration: 0.4,
        ease: 'power2.out'
      })

      gsap.to(mesh.value.material, {
        emissive: 0x332211,
        duration: 0.4,
        ease: 'power2.out'
      })
    }
  }
}

const animate = () => {
  animationId.value = requestAnimationFrame(animate)

  if (renderer.value && scene.value && camera.value) {
    renderer.value.render(scene.value, camera.value)
  }
}

const handleResize = () => {
  if (!canvasEl.value || !camera.value || !renderer.value) return

  const w = canvasEl.value.clientWidth
  const h = canvasEl.value.clientHeight

  camera.value.aspect = w / h
  camera.value.updateProjectionMatrix()

  const pixelRatio = Math.min(window.devicePixelRatio, 2)
  renderer.value.setPixelRatio(pixelRatio)
  renderer.value.setSize(w, h)
}

const dispose = () => {
  if (animationId.value) {
    cancelAnimationFrame(animationId.value)
  }

  if (renderer.value) {
    renderer.value.dispose()
  }

  if (scene.value) {
    scene.value.traverse(object => {
      if (object.geometry) object.geometry.dispose()
      if (object.material) {
        if (Array.isArray(object.material)) {
          object.material.forEach(mat => mat.dispose())
        } else {
          object.material.dispose()
        }
      }
    })
  }

  window.removeEventListener('mousemove', onMouseMove)
  window.removeEventListener('mouseleave', onMouseLeave)
  window.removeEventListener('resize', handleResize)
}

onMounted(() => {
  initScene()
  animate()

  window.addEventListener('mousemove', onMouseMove)
  window.addEventListener('mouseleave', onMouseLeave)
  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  dispose()
})
</script>

<style scoped>
.three-scene-container {
  width: 100%;
  height: 100%;
  position: relative;
}

.three-canvas {
  width: 100%;
  height: 100%;
  display: block;
  transition: opacity 0.6s ease;
}

.three-fallback {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #fdf8f5 0%, #fff3ec 100%);
}

.fallback-content {
  text-align: center;
  color: #c4632a;
}

.fallback-icon {
  margin-bottom: 12px;
  opacity: 0.6;
}
</style>
