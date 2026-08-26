/**
 * Verified Heritage Coordinates Dataset — Stage 4
 * Authoritative coordinates sourced from UNESCO World Heritage Centre & ASI.
 * Precision: 'site' (exact site) or 'city' (city monument precinct).
 */

export const heritageCoordinates = [
  // KARNATAKA HERITAGE
  {
    id: 'ka-heritage-hampi',
    latitude: 15.335,
    longitude: 76.46,
    precision: 'site',
    locationLabel: 'Hampi Archaeological Complex',
    sourceName: 'UNESCO World Heritage Centre',
    sourceUrl: 'https://whc.unesco.org/en/list/241/'
  },
  {
    id: 'ka-heritage-mysuru-palace',
    latitude: 12.3052,
    longitude: 76.6552,
    precision: 'site',
    locationLabel: 'Mysuru Palace Grounds',
    sourceName: 'Mysuru Palace Board / Karnataka Tourism',
    sourceUrl: 'https://mysorepalace.karnataka.gov.in/'
  },
  {
    id: 'ka-heritage-badami',
    latitude: 15.9184,
    longitude: 75.6806,
    precision: 'site',
    locationLabel: 'Badami Cave Temples',
    sourceName: 'Archaeological Survey of India (ASI)',
    sourceUrl: 'https://asi.nic.in/'
  },
  {
    id: 'ka-heritage-pattadakal',
    latitude: 15.9486,
    longitude: 75.8156,
    precision: 'site',
    locationLabel: 'Group of Monuments at Pattadakal',
    sourceName: 'UNESCO World Heritage Centre',
    sourceUrl: 'https://whc.unesco.org/en/list/239/'
  },
  {
    id: 'ka-heritage-aihole',
    latitude: 16.02,
    longitude: 75.882,
    precision: 'site',
    locationLabel: 'Aihole Temple Complex',
    sourceName: 'Archaeological Survey of India (ASI)',
    sourceUrl: 'https://asi.nic.in/'
  },
  {
    id: 'ka-heritage-belur-channakeshava',
    latitude: 13.1623,
    longitude: 75.8596,
    precision: 'site',
    locationLabel: 'Belur Channakeshava Temple',
    sourceName: 'UNESCO World Heritage Centre',
    sourceUrl: 'https://whc.unesco.org/en/list/1670/'
  },
  {
    id: 'ka-heritage-halebidu-hoysalesvara',
    latitude: 13.2132,
    longitude: 75.9937,
    precision: 'site',
    locationLabel: 'Halebidu Hoysalesvara Temple',
    sourceName: 'UNESCO World Heritage Centre',
    sourceUrl: 'https://whc.unesco.org/en/list/1670/'
  },
  {
    id: 'ka-heritage-bidar-fort',
    latitude: 17.9234,
    longitude: 77.5312,
    precision: 'site',
    locationLabel: 'Bidar Fort Precinct',
    sourceName: 'Karnataka Tourism / ASI',
    sourceUrl: 'https://karnatakatourism.org/'
  },
  {
    id: 'ka-heritage-gol-gumbaz',
    latitude: 16.8307,
    longitude: 75.7361,
    precision: 'site',
    locationLabel: 'Gol Gumbaz, Vijayapura',
    sourceName: 'Archaeological Survey of India (ASI)',
    sourceUrl: 'https://asi.nic.in/'
  },

  // RAJASTHAN HERITAGE
  {
    id: 'rj-heritage-amber-fort',
    latitude: 26.9855,
    longitude: 75.8513,
    precision: 'site',
    locationLabel: 'Amber Fort, Jaipur',
    sourceName: 'UNESCO World Heritage Centre',
    sourceUrl: 'https://whc.unesco.org/en/list/247/'
  },
  {
    id: 'rj-heritage-jaipur-city',
    latitude: 26.926,
    longitude: 75.8235,
    precision: 'site',
    locationLabel: 'Jaipur Walled City',
    sourceName: 'UNESCO World Heritage Centre',
    sourceUrl: 'https://whc.unesco.org/en/list/1605/'
  },
  {
    id: 'rj-heritage-chittorgarh-fort',
    latitude: 24.8879,
    longitude: 74.6455,
    precision: 'site',
    locationLabel: 'Chittorgarh Fort',
    sourceName: 'UNESCO World Heritage Centre',
    sourceUrl: 'https://whc.unesco.org/en/list/247/'
  },
  {
    id: 'rj-heritage-jaisalmer-fort',
    latitude: 26.9124,
    longitude: 70.9126,
    precision: 'site',
    locationLabel: 'Jaisalmer Fort',
    sourceName: 'UNESCO World Heritage Centre',
    sourceUrl: 'https://whc.unesco.org/en/list/247/'
  },
  {
    id: 'rj-heritage-kumbhalgarh-fort',
    latitude: 25.1478,
    longitude: 73.5826,
    precision: 'site',
    locationLabel: 'Kumbhalgarh Fort',
    sourceName: 'UNESCO World Heritage Centre',
    sourceUrl: 'https://whc.unesco.org/en/list/247/'
  },
  {
    id: 'rj-heritage-mehrangarh-fort',
    latitude: 26.2978,
    longitude: 73.0186,
    precision: 'site',
    locationLabel: 'Mehrangarh Fort, Jodhpur',
    sourceName: 'Mehrangarh Museum Trust / Rajasthan Tourism',
    sourceUrl: 'https://www.mehrangarh.org/'
  },
  {
    id: 'rj-heritage-junagarh-fort',
    latitude: 28.016,
    longitude: 73.3175,
    precision: 'site',
    locationLabel: 'Junagarh Fort, Bikaner',
    sourceName: 'Rajasthan Tourism',
    sourceUrl: 'https://www.tourism.rajasthan.gov.in/'
  },

  // TAMIL NADU HERITAGE
  {
    id: 'tn-heritage-mahabalipuram',
    latitude: 12.6269,
    longitude: 80.1927,
    precision: 'site',
    locationLabel: 'Group of Monuments at Mahabalipuram',
    sourceName: 'UNESCO World Heritage Centre',
    sourceUrl: 'https://whc.unesco.org/en/list/249/'
  },
  {
    id: 'tn-heritage-brihadisvara-thanjavur',
    latitude: 10.7828,
    longitude: 79.1318,
    precision: 'site',
    locationLabel: 'Brihadisvara Temple, Thanjavur',
    sourceName: 'UNESCO World Heritage Centre',
    sourceUrl: 'https://whc.unesco.org/en/list/250/'
  },
  {
    id: 'tn-heritage-gangaikondacholapuram',
    latitude: 11.2057,
    longitude: 79.4475,
    precision: 'site',
    locationLabel: 'Gangaikondacholapuram Temple',
    sourceName: 'UNESCO World Heritage Centre',
    sourceUrl: 'https://whc.unesco.org/en/list/250/'
  },
  {
    id: 'tn-heritage-airavatesvara-darasuram',
    latitude: 10.947,
    longitude: 79.356,
    precision: 'site',
    locationLabel: 'Airavatesvara Temple, Darasuram',
    sourceName: 'UNESCO World Heritage Centre',
    sourceUrl: 'https://whc.unesco.org/en/list/250/'
  },
  {
    id: 'tn-heritage-nilgiri-mountain-railway',
    latitude: 11.353,
    longitude: 76.7959,
    precision: 'site',
    locationLabel: 'Nilgiri Mountain Railway, Coonoor/Ooty',
    sourceName: 'UNESCO World Heritage Centre',
    sourceUrl: 'https://whc.unesco.org/en/list/944/'
  },
  {
    id: 'tn-heritage-srirangam',
    latitude: 10.8622,
    longitude: 78.6901,
    precision: 'site',
    locationLabel: 'Sri Ranganathaswamy Temple, Srirangam',
    sourceName: 'Tamil Nadu Tourism / ASI',
    sourceUrl: 'https://www.tamilnadutourism.tn.gov.in/'
  },
  {
    id: 'tn-heritage-vellore-fort',
    latitude: 12.9231,
    longitude: 79.1325,
    precision: 'site',
    locationLabel: 'Vellore Fort',
    sourceName: 'Archaeological Survey of India (ASI)',
    sourceUrl: 'https://asi.nic.in/'
  },
  {
    id: 'tn-heritage-gingee-fort',
    latitude: 12.2514,
    longitude: 79.4014,
    precision: 'site',
    locationLabel: 'Gingee Fort',
    sourceName: 'Archaeological Survey of India (ASI)',
    sourceUrl: 'https://asi.nic.in/'
  }
]
