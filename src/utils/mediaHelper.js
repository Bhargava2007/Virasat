import { heritageImages, cultureImages } from '@/data/imageUrls.js'

const imageUrlsMap = {
  ...heritageImages,
  ...cultureImages
}

// Local approved images mapping (kept for safety)
const LOCAL_IMAGE_MAP = {
  hampi: '/images/hampi.png',
  'amber-fort': '/images/amber-fort.png',
  'brihadisvara-temple-thanjavur': '/images/brihadeeswarar-temple.png',
  yakshagana: '/images/yakshagana.png',
  ghoomar: '/images/ghoomar.png',
  bharatanatyam: '/images/bharatanatyam.png'
}

/**
 * Resolves record image URL or returns null if no valid photograph is available
 */
export function getRecordImage(record) {

  // 1. Check imageUrlsMap by id
  if (record.id && imageUrlsMap[record.id]) {
    const urls = imageUrlsMap[record.id]
    if (Array.isArray(urls) && urls.length > 0) return urls[0]
    if (typeof urls === 'string' && urls.trim() !== '') return urls
  }

  // 2. Check local mapped images by slug
  if (record.slug && LOCAL_IMAGE_MAP[record.slug]) {
    return LOCAL_IMAGE_MAP[record.slug]
  }

  // 3. Check explicitly provided record image string
  if (record.image && typeof record.image === 'string' && record.image.trim() !== '') {
    return record.image
  }

  // 4. Check record images array
  if (Array.isArray(record.images) && record.images.length > 0) {
    const first = record.images[0]
  }

  return null
}

/**
 * Resolves gallery images array for a record
 */
export function getRecordGalleryImages(record) {

  if (record.id && imageUrlsMap[record.id]) {
    const urls = imageUrlsMap[record.id]
    if (Array.isArray(urls) && urls.length > 0) {
    }
  }

  if (Array.isArray(record.images) && record.images.length > 0) {
    return record.images
      .map(img => (typeof img === 'string' ? img : img?.url))
      .filter(Boolean)
  }

  return []
}

/**
 * Returns visual fallback gradient & icon details based on category slug and record type
 */
export function getCategoryVisualTheme(categorySlug, recordType = 'heritage') {
  const themeMap = {
    // Heritage Categories
    'unesco-heritage-sites': { bg: 'linear-gradient(135deg, #1A237E 0%, #283593 50%, #3F51B5 100%)', accent: '#9FA8DA', icon: 'public', label: 'UNESCO Site' },
    forts: { bg: 'linear-gradient(135deg, #3E2723 0%, #4E342E 50%, #8D6E63 100%)', accent: '#D7CCC8', icon: 'fort', label: 'Fortress' },
    palaces: { bg: 'linear-gradient(135deg, #4A148C 0%, #6A1B9A 50%, #AB47BC 100%)', accent: '#E1BEE7', icon: 'villa', label: 'Palace' },
    'historic-religious-structures': { bg: 'linear-gradient(135deg, #7B1FA2 0%, #8E24AA 50%, #BA68C8 100%)', accent: '#F3E5F5', icon: 'temple_hindu', label: 'Sacred Architecture' },
    'traditional-architecture': { bg: 'linear-gradient(135deg, #4E342E 0%, #6D4C41 50%, #A1887F 100%)', accent: '#D7CCC8', icon: 'architecture', label: 'Traditional Architecture' },
    'archaeological-sites': { bg: 'linear-gradient(135deg, #3E2723 0%, #5D4037 50%, #8D6E63 100%)', accent: '#E0D0C1', icon: 'foundation', label: 'Archaeological Site' },
    'museums-galleries': { bg: 'linear-gradient(135deg, #004D40 0%, #00695C 50%, #00897B 100%)', accent: '#B2DFDB', icon: 'museum', label: 'Museum & Gallery' },
    'heritage-cities-towns': { bg: 'linear-gradient(135deg, #311B92 0%, #4527A0 50%, #5E35B1 100%)', accent: '#D1C4E9', icon: 'location_city', label: 'Heritage City' },
    'heritage-parks-gardens': { bg: 'linear-gradient(135deg, #1B5E20 0%, #2E7D32 50%, #43A047 100%)', accent: '#C8E6C9', icon: 'park', label: 'Park & Garden' },

    // Culture Categories
    'performing-arts': { bg: 'linear-gradient(135deg, #880E4F 0%, #AD1457 50%, #C2185B 100%)', accent: '#F8BBD0', icon: 'theater_comedy', label: 'Performing Arts' },
    'visual-crafts': { bg: 'linear-gradient(135deg, #E65100 0%, #EF6C00 50%, #F57C00 100%)', accent: '#FFE0B2', icon: 'brush', label: 'Visual Art & Craft' },
    'festivals-rituals': { bg: 'linear-gradient(135deg, #4A148C 0%, #7B1FA2 50%, #9C27B0 100%)', accent: '#E1BEE7', icon: 'festival', label: 'Festival & Ritual' },
    'culinary-traditions': { bg: 'linear-gradient(135deg, #E65100 0%, #EF6C00 50%, #F57C00 100%)', accent: '#FFE0B2', icon: 'restaurant', label: 'Culinary Heritage' },
    'folklore-oral-traditions': { bg: 'linear-gradient(135deg, #3E2723 0%, #4E342E 50%, #6D4C41 100%)', accent: '#D7CCC8', icon: 'auto_stories', label: 'Folklore & Storytelling' },
    'local-customs': { bg: 'linear-gradient(135deg, #1A1A2E 0%, #16213E 50%, #0F3460 100%)', accent: '#E2E8F0', icon: 'groups', label: 'Local Custom' }
  }

  if (themeMap[categorySlug]) return themeMap[categorySlug]

  // Default Fallbacks
  if (recordType === 'heritage') {
    return {
      bg: 'linear-gradient(135deg, #4A2C1E 0%, #7A331C 50%, #B84B2A 100%)',
      accent: '#FFCCBC',
      icon: 'account_balance',
      label: 'Heritage'
    }
  }

  return {
    bg: 'linear-gradient(135deg, #3C245C 0%, #2C3E73 50%, #6C4BA0 100%)',
    accent: '#E1BEE7',
    icon: 'palette',
    label: 'Culture'
  }
}
