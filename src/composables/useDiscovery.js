import { ref, computed, watch, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { allHeritage } from '@/data/heritage.js'
import { allCulture } from '@/data/culture.js'
import { heritageCategories } from '@/data/heritageCategories.js'
import { cultureCategories } from '@/data/cultureCategories.js'
import { states } from '@/data/states.js'

// Normalize records by appending record_type safely without mutating original objects
const unifiedCatalogue = [
  ...allHeritage.map(item => ({ ...item, record_type: 'heritage' })),
  ...allCulture.map(item => ({ ...item, record_type: 'culture' }))
]

export function useDiscovery(config = {}) {
  const { fixedType = null, syncRoute = false } = config

  const route = useRoute()
  const router = useRouter()

  const searchQuery = ref('')
  const selectedType = ref(fixedType || 'all') // 'all', 'heritage', 'culture'
  const selectedState = ref('')
  const selectedCategory = ref('')

  // Valid states for routing protection
  const validStateSlugs = new Set(states.map(s => s.slug))

  // Compute available categories dynamically from existing verified data based on current type filter
  const availableCategories = computed(() => {
    let activeCategories = []

    if (selectedType.value === 'heritage') {
      activeCategories = heritageCategories
    } else if (selectedType.value === 'culture') {
      activeCategories = cultureCategories
    } else {
      activeCategories = [
        ...heritageCategories.map(c => ({ ...c, type: 'heritage' })),
        ...cultureCategories.map(c => ({ ...c, type: 'culture' }))
      ]
    }

    // Sort or filter if needed, but the original lists are already structured
    return activeCategories
  })

  // Ensure category is valid when type changes
  watch(selectedType, () => {
    if (selectedCategory.value) {
      const isValid = availableCategories.value.some(
        c => c.slug === selectedCategory.value
      )
      if (!isValid) {
        selectedCategory.value = ''
      }
    }
  })

  // Parse URL query on mount if sync is enabled
  if (syncRoute) {
    onMounted(() => {
      const q = route.query
      if (q.search && typeof q.search === 'string') searchQuery.value = q.search

      if (!fixedType && q.type && ['heritage', 'culture'].includes(q.type)) {
        selectedType.value = q.type
      }

      if (q.state && validStateSlugs.has(q.state)) {
        selectedState.value = q.state
      }

      if (q.category) {
        selectedCategory.value = q.category
      }
    })

    // Watchers to update URL
    watch(
      [searchQuery, selectedType, selectedState, selectedCategory],
      () => {
        const query = { ...route.query }

        if (searchQuery.value) query.search = searchQuery.value
        else delete query.search

        if (!fixedType) {
          if (selectedType.value !== 'all') query.type = selectedType.value
          else delete query.type
        }

        if (selectedState.value) query.state = selectedState.value
        else delete query.state

        if (selectedCategory.value) query.category = selectedCategory.value
        else delete query.category

        router.replace({ query })
      },
      { deep: true }
    )
  }

  // Core Search Logic
  const filteredResults = computed(() => {
    return unifiedCatalogue.filter(record => {
      // 1. Type Filter
      if (
        selectedType.value !== 'all' &&
        record.record_type !== selectedType.value
      ) {
        return false
      }

      // 2. State Filter
      if (selectedState.value && record.state !== selectedState.value) {
        return false
      }

      // 3. Category Filter
      if (
        selectedCategory.value &&
        record.category !== selectedCategory.value
      ) {
        return false
      }

      // 4. Search Query (Case Insensitive)
      if (searchQuery.value.trim()) {
        const queryStr = searchQuery.value.toLowerCase().trim()

        const matchesName =
          record.name?.toLowerCase().includes(queryStr) ||
          record.title?.toLowerCase().includes(queryStr)
        const matchesState = record.state?.toLowerCase().includes(queryStr)
        const matchesCategory = record.category
          ?.toLowerCase()
          .includes(queryStr)
        const matchesLocation =
          record.district?.toLowerCase().includes(queryStr) ||
          record.region?.toLowerCase().includes(queryStr)
        const matchesDesc =
          record.shortDescription?.toLowerCase().includes(queryStr) ||
          record.summary?.toLowerCase().includes(queryStr)
        const matchesTags = record.tags?.some(tag =>
          tag.toLowerCase().includes(queryStr)
        )

        if (
          !matchesName &&
          !matchesState &&
          !matchesCategory &&
          !matchesLocation &&
          !matchesDesc &&
          !matchesTags
        ) {
          return false
        }
      }

      return true
    })
  })

  const resultCount = computed(() => filteredResults.value.length)

  const hasActiveFilters = computed(() => {
    return (
      searchQuery.value.trim() !== '' ||
      (!fixedType && selectedType.value !== 'all') ||
      selectedState.value !== '' ||
      selectedCategory.value !== ''
    )
  })

  const resetFilters = () => {
    searchQuery.value = ''
    if (!fixedType) selectedType.value = 'all'
    selectedState.value = ''
    selectedCategory.value = ''
  }

  return {
    searchQuery,
    selectedType,
    selectedState,
    selectedCategory,
    availableCategories,
    filteredResults,
    resultCount,
    hasActiveFilters,
    resetFilters,
    unifiedCatalogue
  }
}
