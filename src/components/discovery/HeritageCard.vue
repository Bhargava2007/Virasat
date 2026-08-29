<template>
  <div
    class="heritage-card"
    role="button"
    tabindex="0"
    @click="navigateToDetail"
    @keydown.enter="navigateToDetail"
  >
    <!-- Visual Thumbnail / Fallback -->
    <div class="heritage-card__media">
      <img loading="lazy"
        v-if="imageUrl && !imageError"
        :src="imageUrl"
        :alt="item.name"
        class="heritage-card__img"
        @error="handleImageError"
      />
      <CategoryFallbackArt
        v-else
        :category-slug="item.category"
        record-type="heritage"
      />
      <div v-if="isVerified" class="heritage-card__verified-badge">
        <q-icon name="verified" size="11px" class="q-mr-xs" />VERIFIED
      </div>
    </div>

    <!-- Content -->
    <div class="heritage-card__content">
      <div class="heritage-card__top">
        <h3 class="heritage-card__name">{{ item.name }}</h3>
      </div>

      <div class="heritage-card__meta">
        <span class="heritage-card__category" :style="{ color: categoryColor }">
          <q-icon :name="categoryIcon" size="14px" class="q-mr-xs" />
          {{ categoryName }}
        </span>
        <span class="heritage-card__sep">•</span>
        <span class="heritage-card__state">{{ stateName }}</span>
      </div>

      <p class="heritage-card__description">{{ item.shortDescription }}</p>

      <div class="heritage-card__footer">
        <span class="heritage-card__explore-btn">
          Explore Heritage
          <q-icon name="arrow_forward" size="14px" class="q-ml-xs" />
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { heritageCategories } from '@/data/heritageCategories.js'
import { states } from '@/data/states.js'
import { getRecordImage } from '@/utils/mediaHelper.js'
import CategoryFallbackArt from '@/components/common/CategoryFallbackArt.vue'

const props = defineProps({
  item: {
    type: Object,
    required: true
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
    router.push(`/heritage/${props.item.slug}`)
  }
}

const categoryObj = computed(() => {
  return heritageCategories.find(c => c.slug === props.item.category) || {}
})

const stateObj = computed(() => {
  return states.find(s => s.slug === props.item.state) || {}
})

const categoryName = computed(
  () => props.item.categoryName || categoryObj.value.name || 'Heritage'
)
const categoryIcon = computed(() => categoryObj.value.icon || 'account_balance')
const categoryColor = computed(() => categoryObj.value.color || '#B84B2A')
const stateName = computed(
  () => props.item.stateName || stateObj.value.name || 'India'
)
</script>

<style scoped lang="scss">
.heritage-card {
  background-color: #ffffff;
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-soft);
  border: 1px solid rgba(74, 44, 30, 0.08);
  display: flex;
  flex-direction: row;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  min-height: 125px;

  &:hover,
  &:focus-visible {
    transform: translateY(-3px);
    box-shadow: var(--shadow-soft);
    border-color: rgba(184, 75, 42, 0.25);
    outline: none;

    .heritage-card__explore-btn {
      color: #b84b2a;

      .q-icon {
        transform: translateX(3px);
      }
    }
  }

  &:active {
    transform: scale(0.98);
  }

  &__media {
    width: 120px;
    min-width: 120px;
    position: relative;
    overflow: hidden;
    background: #fdf8f5;

    @media (max-width: 380px) {
      width: 105px;
      min-width: 105px;
    }
  }

  &__img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
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
    letter-spacing: 0.04em;
    box-shadow: var(--shadow-soft);
  }

  &__content {
    flex: 1;
    min-width: 0;
    padding: 14px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  &__name {
    font-family: var(--font-heading);
    font-size: 0.9375rem;
    font-weight: 700;
    color: var(--color-text);
    margin: 0 0 4px 0;
    line-height: 1.3;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  &__meta {
    display: flex;
    align-items: center;
    gap: 6px;
    font-family: var(--font-body);
    font-size: 0.75rem;
    font-weight: 600;
    color: var(--color-text-secondary);
    margin-bottom: 6px;
  }

  &__category {
    display: flex;
    align-items: center;
  }

  &__sep {
    opacity: 0.4;
  }

  &__state {
    color: #7a685d;
  }

  &__description {
    font-family: var(--font-body);
    font-size: 0.75rem;
    color: #6e5d54;
    line-height: 1.4;
    margin: 0 0 8px 0;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  &__footer {
    display: flex;
    justify-content: flex-end;
    margin-top: auto;
  }

  &__explore-btn {
    font-family: var(--font-heading);
    font-size: 0.6875rem;
    font-weight: 700;
    color: var(--color-text-secondary);
    display: inline-flex;
    align-items: center;
    transition: all 0.2s ease;

    .q-icon {
      transition: transform 0.2s ease;
    }
  }
}
</style>
