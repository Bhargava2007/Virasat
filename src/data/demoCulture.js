/**
 * Demo Culture Records — PLACEHOLDER DATA for UI testing.
 * Every record is clearly marked [DEMO].
 * Real names are used as public-knowledge proper nouns only.
 * No unverified descriptions, dates, histories, or cultural claims.
 *
 * Full schema fields are declared but set to null until verified data is provided.
 */

function createRecord(id, slug, name, category, state, image = null) {
  return {
    id,
    slug,
    name,
    category,
    state,
    region: null,
    community: null,
    shortDescription: '[DEMO] Placeholder record for UI testing',
    description: null,
    originHistory: null,
    culturalSignificance: null,
    image,
    media: image ? [image] : [],
    relatedPlaces: [],
    relatedFestivals: [],
    sources: [],
    lastUpdated: null,
    relatedHeritageIds: [],
    relatedCultureIds: [],
    trailIds: []
  }
}

export const demoCulture = [
  createRecord('dc-1', 'yakshagana', 'Yakshagana', 'classical-folk-dance', 'karnataka', '/images/yakshagana.png'),
  createRecord('dc-2', 'bidriware', 'Bidriware', 'handicrafts', 'karnataka'),
  createRecord('dc-3', 'mysore-dasara', 'Mysore Dasara', 'festivals', 'karnataka'),
  createRecord('dc-4', 'ghoomar', 'Ghoomar', 'classical-folk-dance', 'rajasthan', '/images/ghoomar.png'),
  createRecord('dc-5', 'rajasthani-miniature-painting', 'Rajasthani Miniature Painting', 'traditional-arts', 'rajasthan'),
  createRecord('dc-6', 'bandhani', 'Bandhani', 'clothing-textiles', 'rajasthan'),
  createRecord('dc-7', 'bharatanatyam', 'Bharatanatyam', 'classical-folk-dance', 'tamil-nadu', '/images/bharatanatyam.png'),
  createRecord('dc-8', 'tanjore-painting', 'Tanjore Painting', 'traditional-arts', 'tamil-nadu'),
  createRecord('dc-9', 'pongal', 'Pongal', 'festivals', 'tamil-nadu')
]
