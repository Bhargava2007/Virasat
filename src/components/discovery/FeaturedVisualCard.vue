<template>
  <div
    class="featured-visual-card"
    :class="`featured-visual-card--${type}`"
    role="button"
    tabindex="0"
    @click="navigateToDetail"
    @keydown.enter="navigateToDetail"
  >
    <!-- Image / Placeholder Canvas -->
    <div class="featured-visual-card__image-container" :style="containerStyle">
      <img loading="lazy"
        v-if="imageUrl && !imageError"
        :src="imageUrl"
        :alt="item.name"
        class="featured-visual-card__bg-img"
        @error="handleImageError"
      />
      <!-- Fallback SVG Artwork pattern when image is missing -->
      <CategoryFallbackArt
        v-else
        :category-slug="item.category"
        :record-type="type"
      />

      <div v-if="isVerified" class="verified-badge-card">
        <q-icon name="verified" size="10px" class="q-mr-xs" />VERIFIED
      </div>

      <!-- Gradient Overlay for Text Readability -->
      <div class="featured-visual-card__gradient"></div>

      <!-- Text Content -->
      <div class="featured-visual-card__content">
        <h4 class="featured-visual-card__title">{{ item.name }}</h4>
        <div class="featured-visual-card__meta">
          <span>{{ categoryName }}</span>
          <span v-if="stateName" class="featured-visual-card__bullet"
            >• {{ stateName }}</span
          >
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
    required: true
  },
  type: {
    type: String,
    default: 'heritage' // 'heritage' | 'culture'
  }
})

const router = useRouter()
const imageError = ref(false)

const imageUrl = computed(() => getRecordImage(props.item))
const isVerified = computed(() => props.item.verificationStatus === 'verified')

const handleImageError = () => {
  imageError.value = true
}

const navigateToDetail = () => {
  if (props.item.slug) {
    const routePrefix = props.type === 'culture' ? '/culture' : '/heritage'
    router.push(`${routePrefix}/${props.item.slug}`)
  }
}

const categoryObj = computed(() => {
  const cats =
    props.type === 'heritage' ? heritageCategories : cultureCategories
  return cats.find(c => c.slug === props.item.category) || {}
})

const stateObj = computed(() => {
  return states.find(s => s.slug === props.item.state) || {}
})

const categoryName = computed(
  () =>
    props.item.categoryName ||
    categoryObj.value.shortName ||
    categoryObj.value.name ||
    ''
)
const stateName = computed(
  () => props.item.stateName || stateObj.value.name || ''
)

const containerStyle = computed(() => {
  if (props.type === 'heritage') {
    return {
      background:
        'linear-gradient(160deg, #7A331C 0%, #4A2C1E 50%, #2C1E18 100%)'
    }
  }
  return {
    background: 'linear-gradient(160deg, #3C245C 0%, #2C3E73 60%, #1A1A2E 100%)'
  }
})
</script>

<style scoped lang="scss">
.featured-visual-card {
  width: 145px;
  height: 180px;
  flex-shrink: 0;
  border-radius: var(--radius-md);
  overflow: hidden;
  position: relative;
  box-shadow: var(--shadow-soft);
  cursor: pointer;
  transition: all 0.25s ease;

  &:hover,
  &:focus-visible {
    transform: translateY(-3px) scale(1.02);
    box-shadow: var(--shadow-soft);
    outline: none;
  }

  &:active {
    transform: scale(0.97);
  }

  &__image-container {
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  &__bg-img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }


  .verified-badge-card {
    position: absolute;
    top: 10px;
    right: 10px;
    z-index: 2;
    background: rgba(46, 125, 50, 0.9);
    backdrop-filter: blur(8px);
    color: #ffffff;
    border-radius: 4px;
    font-size: 0.5625rem;
    font-weight: 700;
    padding: 2px 6px;
    display: flex;
    align-items: center;
    letter-spacing: 0.3px;
  }

  &__gradient {
    position: absolute;
    inset: 0;
    background: linear-gradient(
      to top,
      rgba(0, 0, 0, 0.95) 0%,
      rgba(0, 0, 0, 0.6) 70%,
      rgba(0, 0, 0, 0) 100%
    );
    z-index: 1;
  }

  &__content {
    position: relative;
    z-index: 2;
    padding: 10px 10px 12px;
    margin-top: auto;
  }

  &__title {
    font-family: var(--font-heading);
    font-size: 0.875rem;
    font-weight: 700;
    color: #ffffff;
    margin: 0 0 2px 0;
    line-height: 1.2;
    text-shadow: 0 1px 3px rgba(0, 0, 0, 0.6);

    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  &__meta {
    font-family: var(--font-body);
    font-size: 0.6875rem;
    color: rgba(255, 255, 255, 0.85);
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  &__bullet {
    margin-left: 2px;
  }
}
</style>
