<template>
  <div v-if="item" class="marker-sheet-overlay" @click.self="$emit('close')">
    <div class="marker-sheet">
      <button
        class="marker-sheet__close-btn"
        aria-label="Close details"
        @click="$emit('close')"
      >
        <q-icon name="close" size="18px" />
      </button>

      <div class="marker-sheet__card">
        <!-- Media / Fallback -->
        <div class="marker-sheet__media">
          <img
            v-if="imageUrl && !imageError"
            :src="imageUrl"
            :alt="item.name"
            class="marker-sheet__img"
            @error="imageError = true"
          />
          <CategoryFallbackArt
            v-else
            :category-slug="item.category"
            :record-type="item.recordType"
          />
          <div v-if="isVerified" class="marker-sheet__verified-badge">
            <q-icon name="verified" size="10px" class="q-mr-xs" />VERIFIED
          </div>
        </div>

        <!-- Content -->
        <div class="marker-sheet__content">
          <div class="marker-sheet__type-bar">
            <span class="type-pill" :class="`type-pill--${item.recordType}`">
              <q-icon :name="typeIcon" size="12px" class="q-mr-xs" />
              {{ item.recordType.toUpperCase() }}
            </span>
            <span class="category-text" :style="{ color: categoryColor }">
              {{ categoryName }}
            </span>
          </div>

          <h3 class="marker-sheet__title">{{ item.name }}</h3>

          <!-- Location & City Centre Notice -->
          <div class="marker-sheet__location">
            <q-icon name="place" size="14px" class="q-mr-xs opacity-70" />
            <span class="location-label">{{
              item.locationLabel || item.districtOrRegion || item.stateName
            }}</span>
          </div>

          <!-- City Centre Discovery Note -->
          <div v-if="item.precision === 'city'" class="city-discovery-note">
            <q-icon name="info" size="13px" class="q-mr-xs text-blue-8" />
            <span
              >Marker pin represents the city centre hub for geographic
              discovery</span
            >
          </div>

          <p class="marker-sheet__desc">{{ item.shortDescription }}</p>

          <div class="marker-sheet__actions">
            <q-btn
              unelevated
              no-caps
              :color="item.recordType === 'heritage' ? 'primary' : 'secondary'"
              class="full-width rounded-btn"
              @click="navigateToDetail"
            >
              <span
                >View
                {{
                  item.recordType === 'heritage'
                    ? 'Heritage Site'
                    : 'Culture Record'
                }}</span
              >
              <q-icon name="arrow_forward" size="16px" class="q-ml-sm" />
            </q-btn>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { heritageCategories } from '@/data/heritageCategories.js'
import { cultureCategories } from '@/data/cultureCategories.js'
import { states } from '@/data/states.js'
import { getRecordImage } from '@/utils/mediaHelper.js'
import CategoryFallbackArt from '@/components/common/CategoryFallbackArt.vue'

const props = defineProps({
  item: {
    type: Object,
    default: null
  }
})

defineEmits(['close'])

const router = useRouter()
const imageError = ref(false)

const imageUrl = computed(() => getRecordImage(props.item))
const isVerified = computed(() => props.item?.verificationStatus === 'verified')
const typeIcon = computed(() =>
  props.item?.recordType === 'heritage' ? 'account_balance' : 'palette'
)

const categoryObj = computed(() => {
  if (!props.item) return {}
  const cats =
    props.item.recordType === 'heritage'
      ? heritageCategories
      : cultureCategories
  return cats.find(c => c.slug === props.item.category) || {}
})

const stateObj = computed(() => {
  if (!props.item) return {}
  return states.find(s => s.slug === props.item.state) || {}
})

const categoryName = computed(
  () => props.item?.categoryName || categoryObj.value.name || ''
)
const categoryColor = computed(
  () =>
    categoryObj.value.color ||
    (props.item?.recordType === 'heritage' ? '#B84B2A' : '#6C4BA0')
)

const navigateToDetail = () => {
  if (props.item?.slug) {
    router.push(`/${props.item.recordType}/${props.item.slug}`)
  }
}
</script>

<style scoped lang="scss">
.marker-sheet-overlay {
  position: absolute;
  inset: 0;
  z-index: 1000;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  pointer-events: auto;
}

.marker-sheet {
  position: relative;
  width: 100%;
  max-width: 520px;
  margin: 12px;
  background: #ffffff;
  border-radius: 20px;
  box-shadow: 0 -4px 30px rgba(0, 0, 0, 0.22);
  border: 1px solid rgba(74, 44, 30, 0.12);
  overflow: hidden;
  animation: slideUp 0.25s cubic-bezier(0.4, 0, 0.2, 1);

  &__close-btn {
    position: absolute;
    top: 10px;
    right: 10px;
    z-index: 10;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.9);
    backdrop-filter: blur(8px);
    border: 1px solid rgba(0, 0, 0, 0.1);
    color: #4a2c1e;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);

    &:active {
      transform: scale(0.92);
    }
  }

  &__card {
    display: flex;
    flex-direction: row;

    @media (max-width: 480px) {
      flex-direction: column;
    }
  }

  &__media {
    width: 140px;
    min-width: 140px;
    position: relative;
    overflow: hidden;
    background: #fdf8f5;

    @media (max-width: 480px) {
      width: 100%;
      min-width: 100%;
      height: 140px;
    }
  }

  &__img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &__verified-badge {
    position: absolute;
    top: 8px;
    left: 8px;
    z-index: 2;
    background: rgba(46, 125, 50, 0.9);
    backdrop-filter: blur(6px);
    color: #ffffff;
    font-size: 0.5625rem;
    font-weight: 700;
    padding: 2px 6px;
    border-radius: 6px;
    display: flex;
    align-items: center;
  }

  &__content {
    flex: 1;
    min-width: 0;
    padding: 14px 16px;
    display: flex;
    flex-direction: column;
  }

  &__type-bar {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 4px;
  }

  &__title {
    font-family: var(--font-heading);
    font-size: 1rem;
    font-weight: 700;
    color: var(--color-text);
    margin: 0 0 4px 0;
    line-height: 1.25;
  }

  &__location {
    display: flex;
    align-items: center;
    font-family: var(--font-body);
    font-size: 0.75rem;
    font-weight: 600;
    color: var(--color-text-secondary);
    margin-bottom: 6px;
  }

  &__desc {
    font-family: var(--font-body);
    font-size: 0.75rem;
    color: #6e5d54;
    line-height: 1.4;
    margin: 0 0 12px 0;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  &__actions {
    margin-top: auto;
  }
}

.type-pill {
  font-family: var(--font-heading);
  font-size: 0.625rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  padding: 2px 8px;
  border-radius: 4px;
  display: inline-flex;
  align-items: center;

  &--heritage {
    background: #fff3ec;
    color: #b84b2a;
  }

  &--culture {
    background: #f3eef8;
    color: #6c4ba0;
  }
}

.category-text {
  font-family: var(--font-body);
  font-size: 0.75rem;
  font-weight: 600;
}

.city-discovery-note {
  background: #e3f2fd;
  border: 1px solid rgba(21, 101, 192, 0.2);
  border-radius: 6px;
  padding: 4px 8px;
  font-family: var(--font-body);
  font-size: 0.6875rem;
  color: #1565c0;
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  line-height: 1.3;
}

.rounded-btn {
  border-radius: 10px;
}

@keyframes slideUp {
  from {
    transform: translateY(100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
</style>
