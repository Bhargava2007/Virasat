/**
 * Geographic Data Consolidation Layer — Stage 4
 * Combines verified heritage/culture datasets with coordinate metadata.
 */

import { allHeritage } from '@/data/heritage.js'
import { allCulture } from '@/data/culture.js'
import { heritageCoordinates } from './heritageCoordinates.js'
import { cultureCoordinates } from './cultureCoordinates.js'

// Quick lookup maps
const heritageGeoMap = new Map(heritageCoordinates.map(c => [c.id, c]))
const cultureGeoMap = new Map(cultureCoordinates.map(c => [c.id, c]))

/**
 * Returns mapped heritage records (records with verified coordinates)
 */
export function getMappedHeritage() {
  return allHeritage
    .filter(h => heritageGeoMap.has(h.id))
    .map(h => {
      const geo = heritageGeoMap.get(h.id)
      return {
        ...h,
        recordType: 'heritage',
        latitude: geo.latitude,
        longitude: geo.longitude,
        precision: geo.precision,
        locationLabel: geo.locationLabel,
        geoSourceName: geo.sourceName,
        geoSourceUrl: geo.sourceUrl
      }
    })
}

/**
 * Returns mapped culture records (records with verified city/venue coordinates)
 */
export function getMappedCulture() {
  return allCulture
    .filter(c => cultureGeoMap.has(c.id))
    .map(c => {
      const geo = cultureGeoMap.get(c.id)
      return {
        ...c,
        recordType: 'culture',
        latitude: geo.latitude,
        longitude: geo.longitude,
        precision: geo.precision,
        locationLabel: geo.locationLabel,
        geoSourceName: geo.sourceName,
        geoSourceUrl: geo.sourceUrl
      }
    })
}

/**
 * Returns all mapped records (Heritage + Culture combined)
 */
export function getAllMappedRecords() {
  return [...getMappedHeritage(), ...getMappedCulture()]
}

/**
 * Classifies unmapped records into distinct categories:
 * - "statewide": Statewide tradition
 * - "regional": Regional tradition
 * - "unverified": Precise location not yet verified
 */
export function getUnmappedRecords() {
  const unmappedHeritage = allHeritage
    .filter(h => !heritageGeoMap.has(h.id))
    .map(h => ({
      ...h,
      recordType: 'heritage',
      isMapped: false,
      unmappedType: 'unverified',
      unmappedBadgeLabel: 'Precise location not yet verified'
    }))

  const unmappedCulture = allCulture
    .filter(c => !cultureGeoMap.has(c.id))
    .map(c => {
      let type = 'unverified'
      let label = 'Precise location not yet verified'

      const text = `${c.name} ${c.shortDescription} ${c.region || ''} ${c.culturalSignificance || ''}`.toLowerCase()

      if (text.includes('statewide') | text.includes('across rajasthan') | text.includes('across tamil nadu') | text.includes('across karnataka') | text.includes('state-wide')) {
        type = 'statewide'
        label = 'Statewide tradition'
      } else if (c.region || text.includes('coastal') | text.includes('region') | text.includes('district') | text.includes('belt')) {
        type = 'regional'
        label = 'Regional tradition'
      }

      return {
        ...c,
        recordType: 'culture',
        isMapped: false,
        unmappedType: type,
        unmappedBadgeLabel: label
      }
    })

  return [...unmappedHeritage, ...unmappedCulture]
}
