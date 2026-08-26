<template>
  <div
    class="culture-card"
    role="button"
    tabindex="0"
    @click="navigateToDetail"
    @keydown.enter="navigateToDetail"
  >
    <!-- Visual Thumbnail / Fallback -->
    <div class="culture-card__media">
      <img
        v-if="imageUrl && !imageError"
        :src="imageUrl"
        :alt="item.name"
        class="culture-card__img"
        @error="handleImageError"
      />
      <CategoryFallbackArt
        v-else
        :category-slug="item.category"
        record-type="culture"
      />
      <div v-if="isVerified" class="culture-card__verified-badge">
        <q-icon name="verified" size="11px" class="q-mr-xs" />VERIFIED
      </div>
    </div>

    <!-- Content -->
    <div class="culture-card__content">
      <div class="culture-card__top">
        <h3 class="culture-card__name">{{ item.name }}</h3>
      </div>

      <div class="culture-card__meta">
        <span class="culture-card__category" :style="{ color: categoryColor }">
          <q-icon :name="categoryIcon" size="14px" class="q-mr-xs" />
          {{ categoryName }}
        </span>
        <span class="culture-card__sep">•</span>
        <span class="culture-card__state">{{ stateName }}</span>
      </div>

      <p class="culture-card__description">{{ item.shortDescription }}</p>

      <div class="culture-card__footer">
        <span class="culture-card__explore-btn">
          Explore Culture
          <q-icon name="arrow_forward" size="14px" class="q-ml-xs" />
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { cultureCategories } from '@/data/cultureCategories.js'
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
    router.push(`/culture/${props.item.slug}`)
  }
}

const categoryObj = computed(() => {
  return cultureCategories.find(c => c.slug === props.item.category) || {}
})

const stateObj = computed(() => {
  return states.find(s => s.slug === props.item.state) || {}
})

const categoryName = computed(() => props.item.categoryName || categoryObj.value.name || 'Culture')
const categoryIcon = computed(() => categoryObj.value.icon || 'palette')
const categoryColor = computed(() => categoryObj.value.color || '#6C4BA0')
const stateName = computed(() => props.item.stateName || stateObj.value.name || 'India')
</script>

<style scoped lang="scss">
.culture-card {
  background-color: #ffffff;
  border-radius: 18px;
  box-shadow: 0 4px 18px rgba(74, 44, 30, 0.06);
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
    box-shadow: 0 8px 24px rgba(108, 75, 160, 0.14);
    border-color: rgba(108, 75, 160, 0.25);
    outline: none;

    .culture-card__explore-btn {
      color: #6c4ba0;

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
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
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
