/**
 * Verified Heritage Coordinates Dataset — Odisha Showcase State
 * Authoritative coordinates sourced from UNESCO World Heritage Centre, ASI & Odisha Tourism.
 * Precision: 'site' (exact site) or 'city' (city monument precinct).
 */

export const heritageCoordinates = [
  // TEMPLES — BHUBANESWAR
  {
    id: 'od-heritage-lingaraja',
    latitude: 20.2373,
    longitude: 85.8348,
    precision: 'site',
    locationLabel: 'Lingaraja Temple, Old Town Bhubaneswar',
    sourceName: 'Archaeological Survey of India / Odisha Tourism',
    sourceUrl:
      'https://odishatourism.gov.in/content/tourism/en/discover/attractions/temples/lingaraj-temple.html'
  },
  {
    id: 'od-heritage-rajarani',
    latitude: 20.2446,
    longitude: 85.8479,
    precision: 'site',
    locationLabel: 'Rajarani Temple, Bhubaneswar',
    sourceName: 'Archaeological Survey of India',
    sourceUrl: 'https://asi.nic.in/'
  },
  {
    id: 'od-heritage-mukteswar',
    latitude: 20.2363,
    longitude: 85.8338,
    precision: 'site',
    locationLabel: 'Mukteswar Temple, Bhubaneswar',
    sourceName: 'Archaeological Survey of India',
    sourceUrl: 'https://asi.nic.in/'
  },
  {
    id: 'od-heritage-parasuramesvara',
    latitude: 20.2371,
    longitude: 85.8344,
    precision: 'site',
    locationLabel: 'Parasuramesvara Temple, Bhubaneswar',
    sourceName: 'Archaeological Survey of India',
    sourceUrl: 'https://asi.nic.in/'
  },

  // UNESCO — KONARK
  {
    id: 'od-heritage-konark',
    latitude: 19.8876,
    longitude: 86.0945,
    precision: 'site',
    locationLabel: 'Konark Sun Temple, Puri district',
    sourceName: 'UNESCO World Heritage Centre',
    sourceUrl: 'https://whc.unesco.org/en/list/246/'
  },

  // PURI — JAGANNATH TEMPLE
  {
    id: 'od-heritage-jagannath-puri',
    latitude: 19.8047,
    longitude: 85.8179,
    precision: 'site',
    locationLabel: 'Jagannath Temple, Puri',
    sourceName: 'Shree Jagannath Temple Administration / ASI',
    sourceUrl: 'https://www.shreejagannath.org/'
  },
  {
    id: 'od-heritage-puri-town',
    latitude: 19.7986,
    longitude: 85.8245,
    precision: 'city',
    locationLabel: 'Puri Sacred Town Centre',
    sourceName: 'Odisha Tourism',
    sourceUrl: 'https://odishatourism.gov.in/'
  },
  {
    id: 'od-heritage-jagannath-temple-puri-natamandap',
    latitude: 19.8047,
    longitude: 85.8179,
    precision: 'site',
    locationLabel: 'Ananda Bazar & Mukti Mandapa, Jagannath Temple',
    sourceName: 'Shree Jagannath Temple Administration',
    sourceUrl: 'https://www.shreejagannath.org/'
  },

  // ARCHAEOLOGICAL SITES
  {
    id: 'od-heritage-udayagiri-khandagiri',
    latitude: 20.2648,
    longitude: 85.7764,
    precision: 'site',
    locationLabel: 'Udayagiri & Khandagiri Caves, Bhubaneswar',
    sourceName: 'Archaeological Survey of India / Odisha Tourism',
    sourceUrl:
      'https://odishatourism.gov.in/content/tourism/en/discover/attractions/art-and-archeological-sites/udayagiri-and-khandagiri.html'
  },
  {
    id: 'od-heritage-dhauligiri',
    latitude: 20.1918,
    longitude: 85.8488,
    precision: 'site',
    locationLabel: 'Dhauligiri Rock Edicts & Shanti Stupa',
    sourceName: 'Archaeological Survey of India / Odisha Tourism',
    sourceUrl:
      'https://odishatourism.gov.in/content/tourism/en/discover/attractions/art-and-archeological-sites/dhauli.html'
  },
  {
    id: 'od-heritage-lalitgiri',
    latitude: 20.4667,
    longitude: 85.9167,
    precision: 'site',
    locationLabel: 'Lalitgiri Buddhist Complex, Cuttack district',
    sourceName: 'Archaeological Survey of India / Odisha Tourism',
    sourceUrl:
      'https://odishatourism.gov.in/content/tourism/en/discover/attractions/art-and-archeological-sites/lalitgiri.html'
  },
  {
    id: 'od-heritage-ratnagiri',
    latitude: 20.5333,
    longitude: 86.1667,
    precision: 'site',
    locationLabel: 'Ratnagiri Buddhist Complex, Jajpur district',
    sourceName: 'Archaeological Survey of India / Odisha Tourism',
    sourceUrl:
      'https://odishatourism.gov.in/content/tourism/en/discover/attractions/art-and-archeological-sites/ratnagiri.html'
  },
  {
    id: 'od-heritage-udayagiri-boudh',
    latitude: 20.5499,
    longitude: 86.0993,
    precision: 'site',
    locationLabel: 'Udayagiri Buddhist Complex, Jajpur district',
    sourceName: 'Archaeological Survey of India',
    sourceUrl: 'https://asi.nic.in/'
  },

  // FORTS
  {
    id: 'od-heritage-barabati-fort',
    latitude: 20.4686,
    longitude: 85.8791,
    precision: 'site',
    locationLabel: 'Barabati Fort, Cuttack',
    sourceName: 'Archaeological Survey of India / Odisha Tourism',
    sourceUrl:
      'https://odishatourism.gov.in/content/tourism/en/discover/attractions/forts-and-palaces/barabati-fort.html'
  },
  {
    id: 'od-heritage-khandagiri-jain',
    latitude: 20.2634,
    longitude: 85.776,
    precision: 'site',
    locationLabel: 'Khandagiri Hill Jain Caves, Bhubaneswar',
    sourceName: 'Archaeological Survey of India',
    sourceUrl: 'https://asi.nic.in/'
  },

  // NATURAL HERITAGE
  {
    id: 'od-heritage-chilika-lake',
    latitude: 19.7167,
    longitude: 85.3167,
    precision: 'site',
    locationLabel: 'Chilika Lake — Satpara Visitor Centre',
    sourceName: 'Chilika Development Authority',
    sourceUrl: 'http://www.chilika.com/'
  },
  {
    id: 'od-heritage-simlipal',
    latitude: 21.8396,
    longitude: 86.3105,
    precision: 'site',
    locationLabel: 'Simlipal National Park — Pithabata Gate',
    sourceName: 'Odisha Forest Department / UNESCO',
    sourceUrl: 'https://en.unesco.org/biosphere/aspac/simlipal'
  },
  {
    id: 'od-heritage-bhitarkanika',
    latitude: 20.7833,
    longitude: 86.8833,
    precision: 'site',
    locationLabel: 'Bhitarkanika National Park — Rajnagar',
    sourceName: 'Odisha Forest Department / Ramsar',
    sourceUrl: 'https://rsis.ramsar.org/ris/1208'
  },

  // PILGRIMAGE TOWNS
  {
    id: 'od-heritage-bhubaneswar-temple-city',
    latitude: 20.2961,
    longitude: 85.8245,
    precision: 'city',
    locationLabel: 'Bhubaneswar Old Town (Ekamra Kshetra)',
    sourceName: 'Odisha Tourism',
    sourceUrl:
      'https://odishatourism.gov.in/content/tourism/en/discover/destinations/heritage-destinations/bhubaneswar.html'
  },

  // MUSEUMS
  {
    id: 'od-heritage-odisha-state-museum',
    latitude: 20.2701,
    longitude: 85.8316,
    precision: 'site',
    locationLabel: 'Odisha State Museum, Bhubaneswar',
    sourceName: 'Odisha State Museum',
    sourceUrl: 'https://odishamuseum.nic.in/'
  },
  {
    id: 'od-heritage-handicrafts-museum',
    latitude: 20.2695,
    longitude: 85.8426,
    precision: 'site',
    locationLabel: 'Odisha Handicrafts Museum (Kala Bhoomi), Bhubaneswar',
    sourceName: 'Odisha Tourism',
    sourceUrl: 'https://odishatourism.gov.in/'
  },

  // TEMPLES — OUTSTATION
  {
    id: 'od-heritage-tara-tarini',
    latitude: 19.3667,
    longitude: 84.9333,
    precision: 'site',
    locationLabel: 'Tara Tarini Shrine, Ganjam district',
    sourceName: 'Odisha Tourism',
    sourceUrl:
      'https://odishatourism.gov.in/content/tourism/en/discover/attractions/temples/tara-tarini.html'
  },
  {
    id: 'od-heritage-kapilash-temple',
    latitude: 20.9333,
    longitude: 85.6,
    precision: 'site',
    locationLabel: 'Kapilash Temple, Dhenkanal district',
    sourceName: 'Odisha Tourism',
    sourceUrl:
      'https://odishatourism.gov.in/content/tourism/en/discover/attractions/temples/kapilash-temple.html'
  },
  {
    id: 'od-heritage-nrusinghanath',
    latitude: 21.3167,
    longitude: 83.5667,
    precision: 'site',
    locationLabel: 'Nrusinghanath Temple, Bargarh district',
    sourceName: 'Odisha Tourism',
    sourceUrl:
      'https://odishatourism.gov.in/content/tourism/en/discover/attractions/temples/nrusinghanath-temple.html'
  }
]
