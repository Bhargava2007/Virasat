/**
 * Media Helper Utility — Stage 3A
 * Resolves images, attributions and generates elegant category-specific visual fallbacks.
 */

// Local approved images mapping
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
  if (!record) return null

  // 1. Check local mapped images by slug
  if (record.slug && LOCAL_IMAGE_MAP[record.slug]) {
    return LOCAL_IMAGE_MAP[record.slug]
  }

  // 2. Check explicitly provided record image string
  if (
    record.image &&
    typeof record.image === 'string' &&
    record.image.trim() !== ''
  ) {
    return record.image
  }

  // 3. Check record images array
  if (Array.isArray(record.images) && record.images.length > 0) {
    const first = record.images[0]
    if (typeof first === 'string') return first
    if (first && first.url) return first.url
  }

  return null
}

/**
 * Returns visual fallback gradient & icon details based on category slug and record type
 */
export function getCategoryVisualTheme(categorySlug, recordType = 'heritage') {
  const themeMap = {
    // Heritage Categories
    'unesco-heritage-sites': {
      bg: 'linear-gradient(135deg, #1A237E 0%, #283593 50%, #3F51B5 100%)',
      accent: '#9FA8DA',
      icon: 'public',
      label: 'UNESCO Site'
    },
    forts: {
      bg: 'linear-gradient(135deg, #3E2723 0%, #4E342E 50%, #8D6E63 100%)',
      accent: '#D7CCC8',
      icon: 'fort',
      label: 'Fortress'
    },
    palaces: {
      bg: 'linear-gradient(135deg, #4A148C 0%, #6A1B9A 50%, #AB47BC 100%)',
      accent: '#E1BEE7',
      icon: 'villa',
      label: 'Palace'
    },
    'historic-religious-structures': {
      bg: 'linear-gradient(135deg, #7B1FA2 0%, #8E24AA 50%, #BA68C8 100%)',
      accent: '#F3E5F5',
      icon: 'temple_hindu',
      label: 'Sacred Architecture'
    },
    'traditional-architecture': {
      bg: 'linear-gradient(135deg, #4E342E 0%, #6D4C41 50%, #A1887F 100%)',
      accent: '#D7CCC8',
      icon: 'architecture',
      label: 'Traditional Architecture'
    },
    'archaeological-sites': {
      bg: 'linear-gradient(135deg, #3E2723 0%, #5D4037 50%, #8D6E63 100%)',
      accent: '#E0D0C1',
      icon: 'foundation',
      label: 'Archaeological Site'
    },
    museums: {
      bg: 'linear-gradient(135deg, #1A237E 0%, #303F9F 50%, #5C6BC0 100%)',
      accent: '#C5CAE9',
      icon: 'museum',
      label: 'Museum'
    },
    'historic-places': {
      bg: 'linear-gradient(135deg, #4A2C1E 0%, #7A331C 50%, #B84B2A 100%)',
      accent: '#FFCCBC',
      icon: 'location_city',
      label: 'Historic Place'
    },
    monuments: {
      bg: 'linear-gradient(135deg, #3E2723 0%, #7A331C 50%, #B84B2A 100%)',
      accent: '#FFCCBC',
      icon: 'account_balance',
      label: 'Monument'
    },

    // Culture Categories
    'classical-folk-dance': {
      bg: 'linear-gradient(135deg, #4A148C 0%, #7B1FA2 50%, #AB47BC 100%)',
      accent: '#F3E5F5',
      icon: 'self_improvement',
      label: 'Dance & Performance'
    },
    music: {
      bg: 'linear-gradient(135deg, #311B92 0%, #4527A0 50%, #673AB7 100%)',
      accent: '#D1C4E9',
      icon: 'music_note',
      label: 'Musical Heritage'
    },
    festivals: {
      bg: 'linear-gradient(135deg, #BF360C 0%, #E65100 50%, #F57C00 100%)',
      accent: '#FFE0B2',
      icon: 'celebration',
      label: 'Festival & Fair'
    },
    handicrafts: {
      bg: 'linear-gradient(135deg, #004D40 0%, #00695C 50%, #00897B 100%)',
      accent: '#B2DFDB',
      icon: 'handyman',
      label: 'Handicraft'
    },
    'traditional-arts': {
      bg: 'linear-gradient(135deg, #1A237E 0%, #283593 50%, #3949AB 100%)',
      accent: '#C5CAE9',
      icon: 'palette',
      label: 'Traditional Art'
    },
    'clothing-textiles': {
      bg: 'linear-gradient(135deg, #880E4F 0%, #AD1457 50%, #D81B60 100%)',
      accent: '#F8BBD0',
      icon: 'checkroom',
      label: 'Textiles & Handloom'
    },
    'regional-cuisine': {
      bg: 'linear-gradient(135deg, #E65100 0%, #EF6C00 50%, #F57C00 100%)',
      accent: '#FFE0B2',
      icon: 'restaurant',
      label: 'Culinary Heritage'
    },
    'folklore-oral-traditions': {
      bg: 'linear-gradient(135deg, #3E2723 0%, #4E342E 50%, #6D4C41 100%)',
      accent: '#D7CCC8',
      icon: 'auto_stories',
      label: 'Folklore & Storytelling'
    },
    'local-customs': {
      bg: 'linear-gradient(135deg, #1A1A2E 0%, #16213E 50%, #0F3460 100%)',
      accent: '#E2E8F0',
      icon: 'groups',
      label: 'Local Custom'
    }
  }

  if (themeMap[categorySlug]) {
    return themeMap[categorySlug]
  }

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
