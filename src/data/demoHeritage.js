/**
 * Demo Heritage Records — PLACEHOLDER DATA for UI testing.
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
    city: null,
    shortDescription: '[DEMO] Placeholder record for UI testing',
    description: null,
    history: null,
    culturalSignificance: null,
    architecture: null,
    historicalPeriod: null,
    image,
    images: image ? [image] : [],
    latitude: null,
    longitude: null,
    unescoStatus: null,
    conservationInfo: null,
    sources: [],
    lastUpdated: null,
    relatedHeritageIds: [],
    relatedCultureIds: [],
    trailIds: []
  }
}

export const demoHeritage = [
  createRecord('dh-1', 'hampi', 'Hampi', 'unesco-heritage-sites', 'karnataka', '/images/hampi.png'),
  createRecord('dh-2', 'mysore-palace', 'Mysore Palace', 'palaces', 'karnataka'),
  createRecord('dh-3', 'badami-cave-temples', 'Badami Cave Temples', 'archaeological-sites', 'karnataka'),
  createRecord('dh-4', 'amber-fort', 'Amber Fort', 'forts', 'rajasthan', '/images/amber-fort.png'),
  createRecord('dh-5', 'hawa-mahal', 'Hawa Mahal', 'traditional-architecture', 'rajasthan'),
  createRecord('dh-6', 'albert-hall-museum', 'Albert Hall Museum', 'museums', 'rajasthan'),
  createRecord('dh-7', 'brihadeeswarar-temple', 'Brihadeeswarar Temple', 'historic-religious-structures', 'tamil-nadu', '/images/brihadeeswarar-temple.png'),
  createRecord('dh-8', 'mahabalipuram', 'Mahabalipuram', 'monuments', 'tamil-nadu'),
  createRecord('dh-9', 'fort-st-george', 'Fort St. George', 'historic-places', 'tamil-nadu')
]
