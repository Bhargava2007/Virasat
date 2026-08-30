<template>
  <component
    :is="iconComponent"
    :size="size"
    :stroke-width="strokeWidth"
    :color="color"
    v-bind="attrs"
  />
</template>

<script setup>
import {
  Banknote,
  Palette,
  Search,
  ArrowRight,
  ArrowLeft,
  ChevronRight,
  MapPin,
  Map,
  X,
  Home as HomeIcon,
  Check,
  CheckCircle,
  Book,
  Clock,
  Globe,
  Image
} from '@lucide/vue'
import { computed } from 'vue'
import { useAttrs } from 'vue'

const props = defineProps({
  name: { type: String, required: true },
  size: { type: [String, Number], default: 20 },
  strokeWidth: { type: [String, Number], default: 1.5 },
  color: { type: String, default: 'currentColor' }
})

const attrs = useAttrs()

const ICONS = {
  bank: Banknote,
  account_balance: Banknote,
  palette: Palette,
  search: Search,
  search_off: Search,
  'arrow-right': ArrowRight,
  arrow_forward: ArrowRight,
  arrow_back: ArrowLeft,
  chevron_right: ChevronRight,
  chevronRight: ChevronRight,
  place: MapPin,
  location_on: MapPin,
  map: Map,
  close: X,
  monument: HomeIcon,
  verified: Check,
  verified_user: CheckCircle,
  auto_stories: Book,
  schedule: Clock,
  public: Globe,
  collections: Image,
  east: ArrowRight
}

const iconComponent = computed(() => {
  const key = props.name
  return ICONS[key] || ICONS[key.toLowerCase()] || null
})
</script>

<style scoped>
/* Icons inherit color from parent by default */
</style>
