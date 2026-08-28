<template>
  <div
    class="related-card"
    :class="`related-card--${type}`"
    role="button"
    tabindex="0"
    @click="navigateToDetail"
    @keydown.enter="navigateToDetail"
  >
    <div class="related-card__media">
      <img
        v-if="imageUrl && !imageError"
        :src="imageUrl"
        :alt="item.name"
        class="related-card__img"
        @error="handleImageError"
      />
      <CategoryFallbackArt
        v-else
        :category-slug="item.category"
        :record-type="type"
      />
    </div>

    <div class="related-card__content">
      <div class="related-card__badge" :class="`related-card__badge--${type}`">
        <q-icon :name="typeIcon" size="12px" class="q-mr-xs" />
        {{ type.toUpperCase() }}
      </div>

      <h4 class="related-card__title">{{ item.name }}</h4>

      <p class="related-card__meta">
        <span>{{ categoryName }}</span>
        <span class="related-card__dot">•</span>
        <span>{{ stateName }}</span>
      </p>

      <p v-if="item.shortDescription" class="related-card__desc">
        {{ item.shortDescription }}
      </p>
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
const typeIcon = computed(() =>
  props.type === 'heritage' ? 'account_balance' : 'palette'
)

const handleImageError = () => {
  imageError.value = true
}

const navigateToDetail = () => {
  if (props.item.slug) {
    router.push(`/${props.type}/${props.item.slug}`)
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
  () => props.item.categoryName || categoryObj.value.name || ''
)
const stateName = computed(
  () => props.item.stateName || stateObj.value.name || 'India'
)
</script>

<style scoped lang="scss">
.related-card {
  background: #ffffff;
  border-radius: 16px;
  border: 1px solid rgba(74, 44, 30, 0.08);
  box-shadow: 0 4px 16px rgba(74, 44, 30, 0.05);
  overflow: hidden;
  display: flex;
  flex-direction: row;
  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  min-height: 110px;

  &:hover,
  &:focus-visible {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(74, 44, 30, 0.12);
    outline: none;
  }

  &:active {
    transform: scale(0.98);
  }

  &__media {
    width: 100px;
    min-width: 100px;
    position: relative;
    overflow: hidden;
    background: #fdf8f5;
  }

  &__img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &__content {
    flex: 1;
    min-width: 0;
    padding: 12px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  &__badge {
    display: inline-flex;
    align-items: center;
    font-family: var(--font-heading);
    font-size: 0.625rem;
    font-weight: 700;
    letter-spacing: 0.05em;
    padding: 2px 8px;
    border-radius: 4px;
    margin-bottom: 4px;
    align-self: flex-start;

    &--heritage {
      background: #fff3ec;
      color: #b84b2a;
      border: 1px solid rgba(184, 75, 42, 0.2);
    }

    &--culture {
      background: #f3eef8;
      color: #6c4ba0;
      border: 1px solid rgba(108, 75, 160, 0.2);
    }
  }

  &__title {
    font-family: var(--font-heading);
    font-size: 0.875rem;
    font-weight: 700;
    color: var(--color-text);
    margin: 0 0 2px 0;
    line-height: 1.25;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  &__meta {
    font-family: var(--font-body);
    font-size: 0.75rem;
    color: var(--color-text-secondary);
    margin: 0 0 4px 0;
  }

  &__dot {
    margin: 0 4px;
    opacity: 0.4;
  }

  &__desc {
    font-family: var(--font-body);
    font-size: 0.6875rem;
    color: #7a685d;
    line-height: 1.35;
    margin: 0;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
}
</style>
