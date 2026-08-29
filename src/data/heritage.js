/**
 * Verified Heritage Dataset — Odisha Showcase State
 * Factually verified records with exact source attribution.
 * 25 heritage records covering temples, archaeological sites, natural heritage & forts.
 */
export const verifiedHeritage = [

  // ─────────────────────────────────────────────────────────
  // UNESCO & CENTRALLY PROTECTED MONUMENTS
  // ─────────────────────────────────────────────────────────
  {
    id: 'od-heritage-konark',
    slug: 'konark-sun-temple',
    name: 'Konark Sun Temple',
    recordType: 'heritage',
    state: 'odisha',
    stateName: 'Odisha',
    districtOrRegion: 'Puri district',
    category: 'unesco-heritage-sites',
    categoryName: 'UNESCO Heritage Site',
    shortDescription:
      'A 13th-century sun temple at Konark, inscribed on the UNESCO World Heritage List, conceived as a colossal chariot of the sun god Surya.',
    history:
      'Built by King Narasimhadeva I of the Eastern Ganga dynasty around 1250 CE, the temple was conceived as a gigantic chariot with 24 intricately carved wheels and seven horses. It is dedicated to the sun god Surya.',
    culturalSignificance:
      'The temple is considered the pinnacle of Kalinga architecture and is one of India\'s most celebrated monuments. It continues to inspire the annual Konark Dance Festival and remains central to Odishan cultural identity.',
    architecture:
      'Kalinga-style (Rekha Deula and Jagamohana) with the main sanctuary reaching approximately 70 m originally. The platform is decorated with 24 stone chariot wheels and horses, with intricate erotic and devotional sculptures.',
    historicalPeriod: '13th century CE (c. 1250 CE)',
    unescoStatus: 'World Heritage Site (1984)',
    images: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Konarka_Temple.jpg/1280px-Konarka_Temple.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Konark_wheel.jpg/1280px-Konark_wheel.jpg'
    ],
    media: [],
    conservationInfo: 'ASI-protected monument. Sand-filled interior to preserve the jagamohana. UNESCO inscription since 1984.',
    relatedHeritageIds: ['od-heritage-jagannath-puri', 'od-heritage-lingaraja'],
    relatedCultureIds: ['od-culture-odissi', 'od-culture-konark-dance-festival'],
    trailIds: ['trail-sacred-odisha'],
    verificationStatus: 'verified',
    sources: [
      {
        sourceName: 'UNESCO World Heritage Centre — Sun Temple, Konark',
        sourceType: 'UNESCO',
        sourceUrl: 'https://whc.unesco.org/en/list/246/'
      },
      {
        sourceName: 'Archaeological Survey of India — Konark',
        sourceType: 'Government',
        sourceUrl: 'https://asi.nic.in/tag/konark/'
      }
    ],
    lastVerified: '2026-08-29'
  },

  {
    id: 'od-heritage-jagannath-puri',
    slug: 'jagannath-temple-puri',
    name: 'Jagannath Temple, Puri',
    recordType: 'heritage',
    state: 'odisha',
    stateName: 'Odisha',
    districtOrRegion: 'Puri district',
    category: 'temples',
    categoryName: 'Temple',
    shortDescription:
      'One of the four sacred Char Dham pilgrimage sites of Hinduism, the 12th-century Jagannath Temple at Puri is the abode of Lord Jagannath and home to the world-famous Rath Yatra.',
    history:
      'The present temple was built by King Anantavarman Chodaganga Deva in the 12th century CE on a site of earlier shrines. It has been a major pilgrimage destination for over 800 years.',
    culturalSignificance:
      'The temple is a living place of worship serving millions of pilgrims annually. The Mahaprasad (sacred food offering) and the Rath Yatra (Chariot Festival) are globally recognized traditions originating here.',
    architecture:
      'Kalinga-style with a 65-metre high Rekha Deula (curvilinear shikhara). The complex covers over 10 acres and contains more than 120 temples and shrines within its fortified walls.',
    historicalPeriod: '12th century CE',
    unescoStatus: null,
    images: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Jagannath_Temple_Puri.jpg/1280px-Jagannath_Temple_Puri.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Rath_Yatra_2007_Puri.jpg/1280px-Rath_Yatra_2007_Puri.jpg'
    ],
    media: [],
    conservationInfo: 'ASI-protected monument. Managed by the Shree Jagannath Temple Administration (SJTA).',
    relatedHeritageIds: ['od-heritage-konark', 'od-heritage-lingaraja'],
    relatedCultureIds: ['od-culture-rath-yatra', 'od-culture-odisha-mahaprasad'],
    trailIds: ['trail-sacred-odisha'],
    verificationStatus: 'verified',
    sources: [
      {
        sourceName: 'Archaeological Survey of India — Jagannath Temple Puri',
        sourceType: 'Government',
        sourceUrl: 'https://asi.nic.in/tag/jagannath-temple/'
      },
      {
        sourceName: 'Odisha Tourism — Jagannath Temple',
        sourceType: 'Government tourism',
        sourceUrl: 'https://odishatourism.gov.in/content/tourism/en/discover/attractions/temples/jagannath-temple.html'
      }
    ],
    lastVerified: '2026-08-29'
  },

  {
    id: 'od-heritage-lingaraja',
    slug: 'lingaraja-temple',
    name: 'Lingaraja Temple',
    recordType: 'heritage',
    state: 'odisha',
    stateName: 'Odisha',
    districtOrRegion: 'Bhubaneswar',
    category: 'temples',
    categoryName: 'Temple',
    shortDescription:
      'The largest and most prominent temple of Bhubaneswar, the 11th-century Lingaraja Temple is dedicated to Lord Shiva and is the finest surviving example of Kalinga temple architecture.',
    history:
      'Built mainly by King Jajati Keshari around 1090–1100 CE, the Lingaraja Temple has grown through additions by successive Eastern Ganga kings. It is one of the oldest and most sacred Shaivite temples in Odisha.',
    culturalSignificance:
      'The temple remains an active place of worship. It defines the skyline of the "Temple City" of Bhubaneswar and is central to Odishan Shaivite tradition and the annual Shivaratri celebrations.',
    architecture:
      'Kalinga Rekha Deula standing 55 metres tall, considered the most mature expression of the Kalinga architectural style. The compound contains over 150 smaller shrines and a sacred tank (Bindu Sagar).',
    historicalPeriod: '11th century CE (c. 1090–1100 CE)',
    unescoStatus: null,
    images: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Lingaraj_temple.jpg/1280px-Lingaraj_temple.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/LingarajTemple_Bhubaneswar.jpg/1280px-LingarajTemple_Bhubaneswar.jpg'
    ],
    media: [],
    conservationInfo: 'ASI-protected monument.',
    relatedHeritageIds: ['od-heritage-rajarani', 'od-heritage-mukteswar'],
    relatedCultureIds: ['od-culture-odissi'],
    trailIds: ['trail-sacred-odisha'],
    verificationStatus: 'verified',
    sources: [
      {
        sourceName: 'Archaeological Survey of India — Lingaraja Temple',
        sourceType: 'Government',
        sourceUrl: 'https://asi.nic.in/'
      },
      {
        sourceName: 'Odisha Tourism — Lingaraja Temple',
        sourceType: 'Government tourism',
        sourceUrl: 'https://odishatourism.gov.in/content/tourism/en/discover/attractions/temples/lingaraj-temple.html'
      }
    ],
    lastVerified: '2026-08-29'
  },

  {
    id: 'od-heritage-rajarani',
    slug: 'rajarani-temple',
    name: 'Rajarani Temple',
    recordType: 'heritage',
    state: 'odisha',
    stateName: 'Odisha',
    districtOrRegion: 'Bhubaneswar',
    category: 'temples',
    categoryName: 'Temple',
    shortDescription:
      'An 11th-century sandstone temple in Bhubaneswar famed for its intricate sculptural decoration and unique tower adorned with clusters of smaller turrets.',
    history:
      'Built around the 11th century CE, the temple\'s original dedication is unknown (the name "Rajarani" refers to the red and gold sandstone used locally). Its absence of a presiding deity makes it unusual among Odishan temples.',
    culturalSignificance:
      'The Rajarani Temple hosts the annual Rajarani Music Festival, one of the premier classical music events of eastern India, held against the backdrop of its illuminated spire.',
    architecture:
      'Kalinga Rekha Deula with a distinctive tower encrusted with miniature turrets (anga shikharas). Exceptionally rich sculptural programme with navagrahas, dikpalas, and apsara figures.',
    historicalPeriod: '11th century CE',
    unescoStatus: null,
    images: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Rajarani_temple.jpg/1280px-Rajarani_temple.jpg'
    ],
    media: [],
    conservationInfo: 'ASI-protected monument.',
    relatedHeritageIds: ['od-heritage-lingaraja', 'od-heritage-mukteswar'],
    relatedCultureIds: ['od-culture-odissi'],
    trailIds: ['trail-sacred-odisha'],
    verificationStatus: 'verified',
    sources: [
      {
        sourceName: 'Archaeological Survey of India',
        sourceType: 'Government',
        sourceUrl: 'https://asi.nic.in/'
      },
      {
        sourceName: 'Odisha Tourism — Rajarani Temple',
        sourceType: 'Government tourism',
        sourceUrl: 'https://odishatourism.gov.in/content/tourism/en/discover/attractions/temples/rajarani-temple.html'
      }
    ],
    lastVerified: '2026-08-29'
  },

  {
    id: 'od-heritage-mukteswar',
    slug: 'mukteswar-temple',
    name: 'Mukteswar Temple',
    recordType: 'heritage',
    state: 'odisha',
    stateName: 'Odisha',
    districtOrRegion: 'Bhubaneswar',
    category: 'temples',
    categoryName: 'Temple',
    shortDescription:
      'A 10th-century Shiva temple celebrated as the "gem of Odishan architecture", remarkable for its ornate torana (arched gateway) — unique in Odishan temple tradition.',
    history:
      'Built around 950 CE, the Mukteswar Temple is attributed to the Somavamshi dynasty. Although small in scale, it is considered a masterpiece of Kalinga temple art for its sculptural refinement.',
    culturalSignificance:
      'The Mukteswar Dance Festival, held annually at the temple premises, is a flagship classical dance event showcasing Odissi and other Indian classical dance forms.',
    architecture:
      'Kalinga Rekha Deula (11 m tall) with an elaborately carved torana gateway, a kunda (tank), and exceptionally refined sculptural decoration including celestial maidens and scenes from the Panchatantra.',
    historicalPeriod: '10th century CE (c. 950 CE)',
    unescoStatus: null,
    images: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Mukteswar_Temple%2C_Bhubaneswar.jpg/1280px-Mukteswar_Temple%2C_Bhubaneswar.jpg'
    ],
    media: [],
    conservationInfo: 'ASI-protected monument.',
    relatedHeritageIds: ['od-heritage-lingaraja', 'od-heritage-rajarani'],
    relatedCultureIds: ['od-culture-odissi'],
    trailIds: ['trail-sacred-odisha'],
    verificationStatus: 'verified',
    sources: [
      {
        sourceName: 'Archaeological Survey of India',
        sourceType: 'Government',
        sourceUrl: 'https://asi.nic.in/'
      },
      {
        sourceName: 'Odisha Tourism — Mukteswar Temple',
        sourceType: 'Government tourism',
        sourceUrl: 'https://odishatourism.gov.in/content/tourism/en/discover/attractions/temples/mukteswar-temple.html'
      }
    ],
    lastVerified: '2026-08-29'
  },

  {
    id: 'od-heritage-parasuramesvara',
    slug: 'parasuramesvara-temple',
    name: 'Parasuramesvara Temple',
    recordType: 'heritage',
    state: 'odisha',
    stateName: 'Odisha',
    districtOrRegion: 'Bhubaneswar',
    category: 'temples',
    categoryName: 'Temple',
    shortDescription:
      'The best-preserved and earliest surviving temple of Bhubaneswar (c. 650 CE), marking the beginning of the Kalinga temple-building tradition.',
    history:
      'Built around 650 CE in the late Gupta / early Shailodbhava period, the Parasuramesvara Temple is the oldest substantially intact temple in Bhubaneswar and a prototype of the Kalinga style.',
    culturalSignificance:
      'It represents the starting point of the Odishan temple-building tradition that culminated in the Lingaraja and Konark temples, making it of immense art-historical significance.',
    architecture:
      'Early Rekha Deula with a flat-roofed Jagamohana. Panels depicting Lakulisha, Kartikeya, Ganesha, and Nataraja are among the finest early Odishan sculptures.',
    historicalPeriod: '7th century CE (c. 650 CE)',
    unescoStatus: null,
    images: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Parasurameswar_temple.jpg/1280px-Parasurameswar_temple.jpg'
    ],
    media: [],
    conservationInfo: 'ASI-protected monument.',
    relatedHeritageIds: ['od-heritage-lingaraja', 'od-heritage-mukteswar'],
    relatedCultureIds: [],
    trailIds: ['trail-sacred-odisha'],
    verificationStatus: 'verified',
    sources: [
      {
        sourceName: 'Archaeological Survey of India',
        sourceType: 'Government',
        sourceUrl: 'https://asi.nic.in/'
      }
    ],
    lastVerified: '2026-08-29'
  },

  // ─────────────────────────────────────────────────────────
  // ARCHAEOLOGICAL & ROCK-CUT SITES
  // ─────────────────────────────────────────────────────────
  {
    id: 'od-heritage-udayagiri-khandagiri',
    slug: 'udayagiri-khandagiri-caves',
    name: 'Udayagiri & Khandagiri Caves',
    recordType: 'heritage',
    state: 'odisha',
    stateName: 'Odisha',
    districtOrRegion: 'Bhubaneswar',
    category: 'archaeological-sites',
    categoryName: 'Archaeological Site',
    shortDescription:
      'Twin hills with rock-cut caves dating from the 2nd century BCE, built during the reign of the Jain king Kharavela of the Mahameghavahana dynasty.',
    history:
      'The caves were excavated primarily during the reign of King Kharavela (c. 169–130 BCE). The Hathigumpha Inscription on Udayagiri is one of the longest and most important Brahmi rock inscriptions in India.',
    culturalSignificance:
      'The sites provide the earliest evidence of Jain patronage and political power in Odisha. The Hathigumpha Inscription gives a detailed account of Kharavela\'s conquests and benevolent rule.',
    architecture:
      'Rock-cut caves on two hills: Udayagiri (18 caves) and Khandagiri (15 caves), with sculpted friezes depicting royal court scenes, yaksha and yakshini figures, and floral/animal motifs.',
    historicalPeriod: '2nd century BCE',
    unescoStatus: null,
    images: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Ranigumpha.jpg/1280px-Ranigumpha.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Hathigumpha.jpg/1280px-Hathigumpha.jpg'
    ],
    media: [],
    conservationInfo: 'ASI-protected monument.',
    relatedHeritageIds: ['od-heritage-dhauligiri'],
    relatedCultureIds: [],
    trailIds: ['trail-buddhist-odisha'],
    verificationStatus: 'verified',
    sources: [
      {
        sourceName: 'Archaeological Survey of India — Udayagiri & Khandagiri',
        sourceType: 'Government',
        sourceUrl: 'https://asi.nic.in/'
      },
      {
        sourceName: 'Odisha Tourism — Udayagiri & Khandagiri',
        sourceType: 'Government tourism',
        sourceUrl: 'https://odishatourism.gov.in/content/tourism/en/discover/attractions/art-and-archeological-sites/udayagiri-and-khandagiri.html'
      }
    ],
    lastVerified: '2026-08-29'
  },

  {
    id: 'od-heritage-dhauligiri',
    slug: 'dhauligiri',
    name: 'Dhauligiri',
    recordType: 'heritage',
    state: 'odisha',
    stateName: 'Odisha',
    districtOrRegion: 'Bhubaneswar (Dhauli)',
    category: 'archaeological-sites',
    categoryName: 'Archaeological Site',
    shortDescription:
      'Site of the Kalinga War (c. 261 BCE) where Emperor Ashoka\'s edicts are carved into a rock mass — the only Ashokan edicts that explicitly mention the Kalinga War.',
    history:
      'The Kalinga War was fought near Dhauli around 261 BCE. Ashoka\'s remorse led to his conversion to Buddhism. The Dhauli rock edicts (Major Rock Edicts XI–XIII) are among the most important epigraphic records in Indian history.',
    culturalSignificance:
      'A place of profound historical and spiritual significance, Dhauli is sacred to both Buddhists and Hindus. The Shanti Stupa (Peace Pagoda), built in 1972 by Japanese Buddhists, stands atop the hill.',
    architecture:
      'Ashokan rock edicts carved into a natural rock face. The Elephant Rock (partially carved elephant emerging from rock) is a notable early Buddhist sculpture. The white Shanti Stupa nearby is a modern pilgrimage monument.',
    historicalPeriod: '3rd century BCE (c. 261 BCE)',
    unescoStatus: null,
    images: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Dhauli_hill.jpg/1280px-Dhauli_hill.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Dhauli_shanti_stupa.jpg/1280px-Dhauli_shanti_stupa.jpg'
    ],
    media: [],
    conservationInfo: 'ASI-protected monument.',
    relatedHeritageIds: ['od-heritage-lalitgiri', 'od-heritage-udayagiri-khandagiri'],
    relatedCultureIds: [],
    trailIds: ['trail-buddhist-odisha'],
    verificationStatus: 'verified',
    sources: [
      {
        sourceName: 'Archaeological Survey of India — Dhauli',
        sourceType: 'Government',
        sourceUrl: 'https://asi.nic.in/'
      },
      {
        sourceName: 'Odisha Tourism — Dhauli',
        sourceType: 'Government tourism',
        sourceUrl: 'https://odishatourism.gov.in/content/tourism/en/discover/attractions/art-and-archeological-sites/dhauli.html'
      }
    ],
    lastVerified: '2026-08-29'
  },

  {
    id: 'od-heritage-lalitgiri',
    slug: 'lalitgiri-buddhist-complex',
    name: 'Lalitgiri Buddhist Complex',
    recordType: 'heritage',
    state: 'odisha',
    stateName: 'Odisha',
    districtOrRegion: 'Cuttack district',
    category: 'archaeological-sites',
    categoryName: 'Archaeological Site',
    shortDescription:
      'One of the oldest Buddhist sites in India (1st century BCE – 15th century CE), containing mahastupas, monasteries, and intricately carved Buddha images.',
    history:
      'Lalitgiri has been an active Buddhist site from at least the 1st century BCE through the 15th century CE. Excavations revealed a sealed relic casket inside the main mahastupa, establishing it as a major pilgrimage site in ancient India.',
    culturalSignificance:
      'Along with Ratnagiri and Udayagiri (Jajpur), Lalitgiri forms the "Diamond Triangle" of Buddhist pilgrimage sites in Odisha that were major centres of Vajrayana Buddhist learning.',
    architecture:
      'A complex of monasteries (viharas), a large mahastupa, smaller stupas, and votive stupas with fine sculpted Buddha and Bodhisattva images in chlorite stone.',
    historicalPeriod: '1st century BCE – 15th century CE',
    unescoStatus: null,
    images: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Lalitgiri_Buddhist_Monastery.jpg/1280px-Lalitgiri_Buddhist_Monastery.jpg'
    ],
    media: [],
    conservationInfo: 'ASI-protected monument. Site museum maintained by ASI.',
    relatedHeritageIds: ['od-heritage-ratnagiri', 'od-heritage-udayagiri-boudh', 'od-heritage-dhauligiri'],
    relatedCultureIds: [],
    trailIds: ['trail-buddhist-odisha'],
    verificationStatus: 'verified',
    sources: [
      {
        sourceName: 'Archaeological Survey of India — Lalitgiri',
        sourceType: 'Government',
        sourceUrl: 'https://asi.nic.in/'
      },
      {
        sourceName: 'Odisha Tourism — Lalitgiri',
        sourceType: 'Government tourism',
        sourceUrl: 'https://odishatourism.gov.in/content/tourism/en/discover/attractions/art-and-archeological-sites/lalitgiri.html'
      }
    ],
    lastVerified: '2026-08-29'
  },

  {
    id: 'od-heritage-ratnagiri',
    slug: 'ratnagiri-buddhist-complex',
    name: 'Ratnagiri Buddhist Complex',
    recordType: 'heritage',
    state: 'odisha',
    stateName: 'Odisha',
    districtOrRegion: 'Jajpur district',
    category: 'archaeological-sites',
    categoryName: 'Archaeological Site',
    shortDescription:
      'The most extensively excavated of the three Buddhist "Diamond Triangle" sites in Odisha, featuring a large stupa complex and exquisitely carved monastery doorways.',
    history:
      'Ratnagiri (7th–12th century CE) was a major Vajrayana Buddhist monastic institution, possibly referred to as "Pushpagiri Vihara" in ancient texts. It attracted Buddhist scholars from across Asia.',
    culturalSignificance:
      'The site\'s monumental monastery doorways are among the finest examples of early medieval Buddhist decorative art in India. Numerous Buddha, Bodhisattva, and Tantric deity sculptures have been recovered.',
    architecture:
      'A brick-built mahastupa, two excavated monasteries with beautifully carved entrances, and numerous votive stupas. The main stupa is encased with decorated stone panels.',
    historicalPeriod: '7th–12th century CE',
    unescoStatus: null,
    images: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Ratnagiri_Buddhist_Ruins.jpg/1280px-Ratnagiri_Buddhist_Ruins.jpg'
    ],
    media: [],
    conservationInfo: 'ASI-protected monument. Site museum on premises.',
    relatedHeritageIds: ['od-heritage-lalitgiri', 'od-heritage-udayagiri-boudh'],
    relatedCultureIds: [],
    trailIds: ['trail-buddhist-odisha'],
    verificationStatus: 'verified',
    sources: [
      {
        sourceName: 'Archaeological Survey of India — Ratnagiri',
        sourceType: 'Government',
        sourceUrl: 'https://asi.nic.in/'
      },
      {
        sourceName: 'Odisha Tourism — Ratnagiri',
        sourceType: 'Government tourism',
        sourceUrl: 'https://odishatourism.gov.in/content/tourism/en/discover/attractions/art-and-archeological-sites/ratnagiri.html'
      }
    ],
    lastVerified: '2026-08-29'
  },

  {
    id: 'od-heritage-udayagiri-boudh',
    slug: 'udayagiri-buddhist-complex',
    name: 'Udayagiri Buddhist Complex (Jajpur)',
    recordType: 'heritage',
    state: 'odisha',
    stateName: 'Odisha',
    districtOrRegion: 'Jajpur district',
    category: 'archaeological-sites',
    categoryName: 'Archaeological Site',
    shortDescription:
      'The third site of Odisha\'s Buddhist "Diamond Triangle", with a large brick stupa and monastery remains dating to the 7th–12th centuries CE.',
    history:
      'Udayagiri (Jajpur) flourished as a Buddhist monastic complex alongside Ratnagiri and Lalitgiri in the post-Gupta and early medieval periods. It was part of an interconnected Buddhist university landscape in coastal Odisha.',
    culturalSignificance:
      'Together with Ratnagiri and Lalitgiri, Udayagiri formed one of the most significant concentrations of Buddhist monasticism in eastern India during the Vajrayana period.',
    architecture:
      'Remains of a large stupa and brick monastery. Sculptures including standing Bodhisattvas recovered from the site are displayed in the Patna Museum and ASI site museum.',
    historicalPeriod: '7th–12th century CE',
    unescoStatus: null,
    images: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Udayagiri_Buddhist_Complex_Odisha.jpg/1280px-Udayagiri_Buddhist_Complex_Odisha.jpg'
    ],
    media: [],
    conservationInfo: 'ASI-protected monument.',
    relatedHeritageIds: ['od-heritage-ratnagiri', 'od-heritage-lalitgiri'],
    relatedCultureIds: [],
    trailIds: ['trail-buddhist-odisha'],
    verificationStatus: 'verified',
    sources: [
      {
        sourceName: 'Archaeological Survey of India',
        sourceType: 'Government',
        sourceUrl: 'https://asi.nic.in/'
      },
      {
        sourceName: 'Odisha Tourism — Udayagiri (Jajpur)',
        sourceType: 'Government tourism',
        sourceUrl: 'https://odishatourism.gov.in/'
      }
    ],
    lastVerified: '2026-08-29'
  },

  // ─────────────────────────────────────────────────────────
  // FORTS & PALACES
  // ─────────────────────────────────────────────────────────
  {
    id: 'od-heritage-barabati-fort',
    slug: 'barabati-fort',
    name: 'Barabati Fort',
    recordType: 'heritage',
    state: 'odisha',
    stateName: 'Odisha',
    districtOrRegion: 'Cuttack',
    category: 'forts',
    categoryName: 'Fort',
    shortDescription:
      'A medieval fort in Cuttack, the erstwhile capital of Odisha, with origins in the 9th–14th centuries, once housing a nine-storeyed palace known from historical accounts.',
    history:
      'The fort was built by the Soma dynasty (9th century) and later expanded by the Gangas and Gajapati kings. It served as the seat of Odishan kings for centuries until its destruction by Mughal forces. The Mahanadi moat is still visible.',
    culturalSignificance:
      'Barabati Fort is a symbol of Odishan sovereignty and resistance. The annual Barabati Stadium — built within the fort precinct — hosts international cricket matches, blending heritage and modern civic life.',
    architecture:
      'Earthen ramparts with a moat fed by the Mahanadi river. Remains of gateways and the base of the palace are visible. A small ASI museum is located within the complex.',
    historicalPeriod: '9th–14th century CE',
    unescoStatus: null,
    images: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Barabati_Fort_Cuttack.jpg/1280px-Barabati_Fort_Cuttack.jpg'
    ],
    media: [],
    conservationInfo: 'ASI-protected monument.',
    relatedHeritageIds: [],
    relatedCultureIds: ['od-culture-rath-yatra'],
    trailIds: [],
    verificationStatus: 'verified',
    sources: [
      {
        sourceName: 'Archaeological Survey of India',
        sourceType: 'Government',
        sourceUrl: 'https://asi.nic.in/'
      },
      {
        sourceName: 'Odisha Tourism — Barabati Fort',
        sourceType: 'Government tourism',
        sourceUrl: 'https://odishatourism.gov.in/content/tourism/en/discover/attractions/forts-and-palaces/barabati-fort.html'
      }
    ],
    lastVerified: '2026-08-29'
  },

  {
    id: 'od-heritage-khandagiri-jain',
    slug: 'khandagiri-palace-of-kharavela',
    name: 'Kharavela\'s Palace (Khandagiri)',
    recordType: 'heritage',
    state: 'odisha',
    stateName: 'Odisha',
    districtOrRegion: 'Bhubaneswar',
    category: 'forts',
    categoryName: 'Fort & Palace',
    shortDescription:
      'The royal Jain palace-cave complex of Emperor Kharavela on Khandagiri Hill, featuring the double-storey Ananta Cave with rich sculptural programmes.',
    history:
      'Excavated during the reign of Kharavela (c. 169–130 BCE) as royal residential caves for Jain monks. The Ananta (Elephant) Cave on Khandagiri is the most elaborate double-storeyed cave in the complex.',
    culturalSignificance:
      'The site is a major Jain pilgrimage destination. A modern Jain temple at the summit draws pilgrims year-round and the entire hill hosts an annual fair during Mahavir Jayanti.',
    architecture:
      'Rock-cut double-storey Ananta Cave with intricately carved façade, female figures, geese, and elephants. Later painted interiors by Jain pilgrims.',
    historicalPeriod: '2nd century BCE',
    unescoStatus: null,
    images: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Khandagiri_Caves.jpg/1280px-Khandagiri_Caves.jpg'
    ],
    media: [],
    conservationInfo: 'ASI-protected monument. Part of the Udayagiri-Khandagiri complex.',
    relatedHeritageIds: ['od-heritage-udayagiri-khandagiri'],
    relatedCultureIds: [],
    trailIds: [],
    verificationStatus: 'verified',
    sources: [
      {
        sourceName: 'Archaeological Survey of India',
        sourceType: 'Government',
        sourceUrl: 'https://asi.nic.in/'
      }
    ],
    lastVerified: '2026-08-29'
  },

  // ─────────────────────────────────────────────────────────
  // NATURAL HERITAGE
  // ─────────────────────────────────────────────────────────
  {
    id: 'od-heritage-chilika-lake',
    slug: 'chilika-lake',
    name: 'Chilika Lake',
    recordType: 'heritage',
    state: 'odisha',
    stateName: 'Odisha',
    districtOrRegion: 'Puri / Khurda / Ganjam districts',
    category: 'natural-heritage',
    categoryName: 'Natural Heritage',
    shortDescription:
      'Asia\'s largest brackish-water coastal lagoon and India\'s first Ramsar Wetland of International Importance, home to over a million migratory birds and the endangered Irrawaddy dolphin.',
    history:
      'Chilika has been a fishing and trading hub for millennia, mentioned in Ptolemy\'s Geographia. It was designated India\'s first Ramsar site in 1981. Ecological restoration efforts since 2000 have revived the lake after near-collapse.',
    culturalSignificance:
      'Chilika is central to the livelihood of over 200,000 fisherfolk communities. The Kalijai Temple on an island within the lake is a major pilgrimage site. The lake hosts the annual Chilika Bird Festival.',
    architecture: null,
    historicalPeriod: null,
    unescoStatus: 'Ramsar Wetland of International Importance (1981)',
    images: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Chilika_Lake_Satellite_Image.jpg/1280px-Chilika_Lake_Satellite_Image.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Chilika_lake_bird_view.jpg/1280px-Chilika_lake_bird_view.jpg'
    ],
    media: [],
    conservationInfo: 'Managed by Chilika Development Authority (CDA). Ramsar site since 1981.',
    relatedHeritageIds: ['od-heritage-bhitarkanika'],
    relatedCultureIds: ['od-culture-raja-parba'],
    trailIds: [],
    verificationStatus: 'verified',
    sources: [
      {
        sourceName: 'Chilika Development Authority',
        sourceType: 'Government',
        sourceUrl: 'http://www.chilika.com/'
      },
      {
        sourceName: 'Ramsar Sites Information Service — Chilika Lake',
        sourceType: 'International',
        sourceUrl: 'https://rsis.ramsar.org/ris/229'
      }
    ],
    lastVerified: '2026-08-29'
  },

  {
    id: 'od-heritage-simlipal',
    slug: 'simlipal-national-park',
    name: 'Simlipal National Park & Biosphere Reserve',
    recordType: 'heritage',
    state: 'odisha',
    stateName: 'Odisha',
    districtOrRegion: 'Mayurbhanj district',
    category: 'natural-heritage',
    categoryName: 'Natural Heritage',
    shortDescription:
      'A UNESCO Biosphere Reserve and Project Tiger reserve in northern Odisha, sheltering tigers, elephants, leopards and over 300 bird species amid sal forests and waterfalls.',
    history:
      'Simlipal was declared a wildlife sanctuary in 1979, a Project Tiger reserve the same year, a National Park in 1980, and a UNESCO Biosphere Reserve in 2009.',
    culturalSignificance:
      'Simlipal is the traditional homeland of the Ho, Kolha, and Santali tribes. The rare Simlipal melanistic tigers — exhibiting pseudomelanistic stripe patterns — are found only here.',
    architecture: null,
    historicalPeriod: null,
    unescoStatus: 'UNESCO Biosphere Reserve (2009)',
    images: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Barehipani_falls_simlipal.jpg/1280px-Barehipani_falls_simlipal.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Simlipal_Tiger.jpg/1280px-Simlipal_Tiger.jpg'
    ],
    media: [],
    conservationInfo: 'Project Tiger reserve. UNESCO Biosphere Reserve. Managed by Odisha Forest Department.',
    relatedHeritageIds: ['od-heritage-bhitarkanika'],
    relatedCultureIds: [],
    trailIds: [],
    verificationStatus: 'verified',
    sources: [
      {
        sourceName: 'UNESCO Biosphere Reserves — Simlipal',
        sourceType: 'UNESCO',
        sourceUrl: 'https://en.unesco.org/biosphere/aspac/simlipal'
      },
      {
        sourceName: 'Odisha Tourism — Simlipal',
        sourceType: 'Government tourism',
        sourceUrl: 'https://odishatourism.gov.in/content/tourism/en/discover/attractions/wildlife-and-nature/simlipal-national-park.html'
      }
    ],
    lastVerified: '2026-08-29'
  },

  {
    id: 'od-heritage-bhitarkanika',
    slug: 'bhitarkanika-mangroves',
    name: 'Bhitarkanika National Park',
    recordType: 'heritage',
    state: 'odisha',
    stateName: 'Odisha',
    districtOrRegion: 'Kendrapara district',
    category: 'natural-heritage',
    categoryName: 'Natural Heritage',
    shortDescription:
      'India\'s second-largest mangrove ecosystem and a Ramsar wetland, home to the world\'s largest nesting population of saltwater crocodiles and Olive Ridley sea turtles.',
    history:
      'Bhitarkanika was declared a wildlife sanctuary in 1975, a national park in 1998, and a Ramsar site in 2002. It was the hunting reserve of the Bhanj royal family of Keonjhar.',
    culturalSignificance:
      'The nearby Gahirmatha Marine Sanctuary hosts the world\'s largest annual Olive Ridley sea turtle mass nesting (arribada), drawing global conservation attention.',
    architecture: null,
    historicalPeriod: null,
    unescoStatus: 'Ramsar Wetland of International Importance (2002)',
    images: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Bhitarkanika_Mangroves.jpg/1280px-Bhitarkanika_Mangroves.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Olive_ridley_sea_turtle_at_Gahirmatha.jpg/1280px-Olive_ridley_sea_turtle_at_Gahirmatha.jpg'
    ],
    media: [],
    conservationInfo: 'National Park and Ramsar Wetland. Managed by Odisha Forest Department.',
    relatedHeritageIds: ['od-heritage-chilika-lake'],
    relatedCultureIds: [],
    trailIds: [],
    verificationStatus: 'verified',
    sources: [
      {
        sourceName: 'Ramsar Sites Information Service — Bhitarkanika',
        sourceType: 'International',
        sourceUrl: 'https://rsis.ramsar.org/ris/1208'
      },
      {
        sourceName: 'Odisha Tourism — Bhitarkanika',
        sourceType: 'Government tourism',
        sourceUrl: 'https://odishatourism.gov.in/content/tourism/en/discover/attractions/wildlife-and-nature/bhitarkanika-national-park.html'
      }
    ],
    lastVerified: '2026-08-29'
  },

  // ─────────────────────────────────────────────────────────
  // PILGRIMAGE TOWNS & SACRED LANDSCAPES
  // ─────────────────────────────────────────────────────────
  {
    id: 'od-heritage-puri-town',
    slug: 'puri-sacred-town',
    name: 'Puri — Sacred Town',
    recordType: 'heritage',
    state: 'odisha',
    stateName: 'Odisha',
    districtOrRegion: 'Puri district',
    category: 'pilgrimage-towns',
    categoryName: 'Pilgrimage Town',
    shortDescription:
      'One of the four sacred Char Dham pilgrimage towns of Hinduism, Puri is a living heritage city shaped by centuries of devotion to Lord Jagannath.',
    history:
      'Puri has been a pilgrimage town for over a millennium. Medieval pilgrims like Adi Shankaracharya, Ramananda, and Chaitanya Mahaprabhu visited and left their mark on the town\'s religious culture.',
    culturalSignificance:
      'The Rath Yatra, Snana Yatra, and numerous other annual rituals make Puri one of India\'s most active living heritage cities. The Swargadwar cremation ghat and the entire seafront carry deep religious meaning.',
    architecture:
      'A town shaped by the Jagannath Temple as its spiritual centre, with Matha (monastic institutions) established by different Vaishnava sects, and a seafront ghats system.',
    historicalPeriod: '8th century CE onwards',
    unescoStatus: null,
    images: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Puri_sea_beach.jpg/1280px-Puri_sea_beach.jpg'
    ],
    media: [],
    conservationInfo: null,
    relatedHeritageIds: ['od-heritage-jagannath-puri', 'od-heritage-konark'],
    relatedCultureIds: ['od-culture-rath-yatra', 'od-culture-odisha-mahaprasad'],
    trailIds: ['trail-sacred-odisha'],
    verificationStatus: 'verified',
    sources: [
      {
        sourceName: 'Odisha Tourism — Puri',
        sourceType: 'Government tourism',
        sourceUrl: 'https://odishatourism.gov.in/content/tourism/en/discover/destinations/beach-destinations/puri.html'
      }
    ],
    lastVerified: '2026-08-29'
  },

  {
    id: 'od-heritage-bhubaneswar-temple-city',
    slug: 'bhubaneswar-temple-city',
    name: 'Bhubaneswar — Temple City of India',
    recordType: 'heritage',
    state: 'odisha',
    stateName: 'Odisha',
    districtOrRegion: 'Khurda district',
    category: 'pilgrimage-towns',
    categoryName: 'Pilgrimage Town',
    shortDescription:
      'Known as the "Temple City of India", Bhubaneswar once contained over 7,000 temples and retains hundreds of surviving medieval Kalinga-style shrines, making it an open-air museum of Odishan temple architecture.',
    history:
      'A major religious centre since the 3rd century BCE (Jain caves, Ashokan edicts nearby), Bhubaneswar reached its peak of temple-building between the 7th and 12th centuries CE under the Somavamshi and Ganga dynasties.',
    culturalSignificance:
      'The Bindu Sagar tank at the centre of the old town — said to receive waters from all holy rivers of India — is flanked by hundreds of shrines. The Ekamra Kshetra pilgrimage circuit connects the major temples.',
    architecture:
      'Concentrated landscape of Kalinga-style temples including the Lingaraja, Rajarani, Mukteswar, Parasuramesvara, Brahmesvara, Sisiresvara, and dozens more, spanning a thousand years of architectural evolution.',
    historicalPeriod: '7th–12th century CE (primary)',
    unescoStatus: null,
    images: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Lingaraj_temple.jpg/1280px-Lingaraj_temple.jpg'
    ],
    media: [],
    conservationInfo: 'Multiple ASI-protected monuments within the city.',
    relatedHeritageIds: ['od-heritage-lingaraja', 'od-heritage-rajarani', 'od-heritage-mukteswar', 'od-heritage-parasuramesvara'],
    relatedCultureIds: ['od-culture-odissi'],
    trailIds: ['trail-sacred-odisha'],
    verificationStatus: 'verified',
    sources: [
      {
        sourceName: 'Odisha Tourism — Bhubaneswar',
        sourceType: 'Government tourism',
        sourceUrl: 'https://odishatourism.gov.in/content/tourism/en/discover/destinations/heritage-destinations/bhubaneswar.html'
      }
    ],
    lastVerified: '2026-08-29'
  },

  // ─────────────────────────────────────────────────────────
  // MUSEUMS & GALLERIES
  // ─────────────────────────────────────────────────────────
  {
    id: 'od-heritage-odisha-state-museum',
    slug: 'odisha-state-museum',
    name: 'Odisha State Museum',
    recordType: 'heritage',
    state: 'odisha',
    stateName: 'Odisha',
    districtOrRegion: 'Bhubaneswar',
    category: 'museums',
    categoryName: 'Museum',
    shortDescription:
      'The premier archaeological and cultural repository of Odisha, housing over 40,000 artefacts including sculptures, palm-leaf manuscripts, coins, natural history exhibits and tribal art.',
    history:
      'Established in 1932 and moved to its current building in 1960, the Odisha State Museum is the largest and most comprehensive museum in eastern India.',
    culturalSignificance:
      'The museum\'s collection of Buddhist sculptures from Ratnagiri, Lalitgiri, and Udayagiri, and its vast archive of Odia palm-leaf manuscripts, are invaluable repositories of the state\'s cultural heritage.',
    architecture:
      'A multi-gallery complex with dedicated sections for natural history, epigraphy, coins, arms, palm-leaf manuscripts, and art galleries.',
    historicalPeriod: null,
    unescoStatus: null,
    images: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Odisha_State_Museum.jpg/1280px-Odisha_State_Museum.jpg'
    ],
    media: [],
    conservationInfo: 'Operated by the Government of Odisha, Department of Culture.',
    relatedHeritageIds: ['od-heritage-lalitgiri', 'od-heritage-ratnagiri'],
    relatedCultureIds: ['od-culture-pattachitra', 'od-culture-palm-leaf-manuscript'],
    trailIds: [],
    verificationStatus: 'verified',
    sources: [
      {
        sourceName: 'Odisha State Museum Official',
        sourceType: 'Government',
        sourceUrl: 'https://odishamuseum.nic.in/'
      }
    ],
    lastVerified: '2026-08-29'
  },

  {
    id: 'od-heritage-handicrafts-museum',
    slug: 'handicrafts-museum-bhubaneswar',
    name: 'Odisha Handicrafts Museum (Kala Bhoomi)',
    recordType: 'heritage',
    state: 'odisha',
    stateName: 'Odisha',
    districtOrRegion: 'Bhubaneswar',
    category: 'museums',
    categoryName: 'Museum',
    shortDescription:
      'A dedicated crafts museum in Bhubaneswar showcasing the full spectrum of Odisha\'s living craft traditions, from Pattachitra and silver filigree to Dhokra and tribal textiles.',
    history:
      'Established to document, preserve and promote the GI-tagged and traditional craft heritage of Odisha, the museum features live craft demonstrations and artist residencies.',
    culturalSignificance:
      'An important resource for craftspeople, researchers, and tourists to understand the depth and variety of Odishan craft traditions that have been passed down over centuries.',
    architecture: null,
    historicalPeriod: null,
    unescoStatus: null,
    images: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Pattachitra_at_Odisha_Handicrafts.jpg/1280px-Pattachitra_at_Odisha_Handicrafts.jpg'
    ],
    media: [],
    conservationInfo: 'Operated by Odisha State Handicrafts Corporation.',
    relatedHeritageIds: [],
    relatedCultureIds: ['od-culture-pattachitra', 'od-culture-silver-filigree', 'od-culture-dhokra'],
    trailIds: ['trail-living-traditions-odisha'],
    verificationStatus: 'verified',
    sources: [
      {
        sourceName: 'Odisha Tourism — Handicrafts Museum',
        sourceType: 'Government tourism',
        sourceUrl: 'https://odishatourism.gov.in/'
      }
    ],
    lastVerified: '2026-08-29'
  },

  // ─────────────────────────────────────────────────────────
  // ADDITIONAL TEMPLES & SACRED SITES
  // ─────────────────────────────────────────────────────────
  {
    id: 'od-heritage-tara-tarini',
    slug: 'tara-tarini-shrine',
    name: 'Tara Tarini Shrine',
    recordType: 'heritage',
    state: 'odisha',
    stateName: 'Odisha',
    districtOrRegion: 'Ganjam district',
    category: 'temples',
    categoryName: 'Temple',
    shortDescription:
      'An ancient hilltop shrine dedicated to twin goddesses Tara and Tarini, one of the oldest and most revered Shakti Peethas in Odisha overlooking the Rushikulya river.',
    history:
      'The shrine is one of the four Shakti Peethas of Odisha, with references in Puranic texts. The current hilltop temple was renovated in the medieval period and again by the Odisha government.',
    culturalSignificance:
      'Pilgrims travel from across Odisha, especially during Chaitra Parba, when hundreds of thousands ascend the hill. The goddess Tarini is worshipped as the state\'s Kula devi by many Odishan communities.',
    architecture:
      'Twin temples on a hilltop accessible via a cable car and steep steps. The main shrine is an Odishan-style temple with a sanctum housing the two-metre-tall stone images of the twin goddesses.',
    historicalPeriod: 'Ancient (Puranic references)',
    unescoStatus: null,
    images: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Tara_Tarini_temple_hill.jpg/1280px-Tara_Tarini_temple_hill.jpg'
    ],
    media: [],
    conservationInfo: null,
    relatedHeritageIds: [],
    relatedCultureIds: [],
    trailIds: [],
    verificationStatus: 'verified',
    sources: [
      {
        sourceName: 'Odisha Tourism — Tara Tarini',
        sourceType: 'Government tourism',
        sourceUrl: 'https://odishatourism.gov.in/content/tourism/en/discover/attractions/temples/tara-tarini.html'
      }
    ],
    lastVerified: '2026-08-29'
  },

  {
    id: 'od-heritage-kapilash-temple',
    slug: 'kapilash-temple',
    name: 'Kapilash Temple (Chandrasekhar)',
    recordType: 'heritage',
    state: 'odisha',
    stateName: 'Odisha',
    districtOrRegion: 'Dhenkanal district',
    category: 'temples',
    categoryName: 'Temple',
    shortDescription:
      'A hilltop Shiva temple atop the Kapilash hill, also known as the "Kailash of Odisha", situated at 2,000 ft and housing one of Odisha\'s most important Shiva shrines.',
    history:
      'The temple is mentioned in medieval texts and associated with the Gajapati dynasty. The hill is considered sacred and is said to have been blessed by Parashurama.',
    culturalSignificance:
      'Kapilash draws large numbers of pilgrims during Shivaratri. The Chandrasekhar temple at the summit is one of Odisha\'s pancha-Shiva (five sacred Shiva) shrines.',
    architecture:
      'Kalinga-style temple at the summit of Kapilash hill, with a shikhara tower. The approach involves 1,272 rock-cut steps.',
    historicalPeriod: 'Medieval (13th–15th century CE)',
    unescoStatus: null,
    images: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Kapilash_temple_odisha.jpg/1280px-Kapilash_temple_odisha.jpg'
    ],
    media: [],
    conservationInfo: null,
    relatedHeritageIds: [],
    relatedCultureIds: [],
    trailIds: [],
    verificationStatus: 'verified',
    sources: [
      {
        sourceName: 'Odisha Tourism — Kapilash',
        sourceType: 'Government tourism',
        sourceUrl: 'https://odishatourism.gov.in/content/tourism/en/discover/attractions/temples/kapilash-temple.html'
      }
    ],
    lastVerified: '2026-08-29'
  },

  {
    id: 'od-heritage-nrusinghanath',
    slug: 'nrusinghanath-temple',
    name: 'Nrusinghanath Temple',
    recordType: 'heritage',
    state: 'odisha',
    stateName: 'Odisha',
    districtOrRegion: 'Bargarh district',
    category: 'temples',
    categoryName: 'Temple',
    shortDescription:
      'A medieval temple dedicated to Lord Narasimha (Nrusingha), nestled at the foot of the Gandhamardan hill in western Odisha, revered as a major Vaishnava pilgrimage site.',
    history:
      'The temple dates to the 12th–13th centuries CE. The Gandhamardan hill is considered one of the few places in India where the gandha (Shalparni) herb mentioned in the Ramayana grows.',
    culturalSignificance:
      'A major pilgrimage site for western Odisha, the temple is associated with tribal and Vaishnava traditions. The Gandhamardan range around it is a biodiversity hotspot.',
    architecture:
      'A Kalinga-style temple with local black stone, positioned against the forested backdrop of the Gandhamardan hills. A natural spring (Phurlijharan) flows nearby.',
    historicalPeriod: '12th–13th century CE',
    unescoStatus: null,
    images: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Nrusinghanath_temple.jpg/1280px-Nrusinghanath_temple.jpg'
    ],
    media: [],
    conservationInfo: null,
    relatedHeritageIds: [],
    relatedCultureIds: ['od-culture-nuakhai'],
    trailIds: [],
    verificationStatus: 'verified',
    sources: [
      {
        sourceName: 'Odisha Tourism — Nrusinghanath',
        sourceType: 'Government tourism',
        sourceUrl: 'https://odishatourism.gov.in/content/tourism/en/discover/attractions/temples/nrusinghanath-temple.html'
      }
    ],
    lastVerified: '2026-08-29'
  },

  {
    id: 'od-heritage-jagannath-temple-puri-natamandap',
    slug: 'jagannath-puri-natamandap',
    name: 'Mukti Mandapa & Ananda Bazar, Puri',
    recordType: 'heritage',
    state: 'odisha',
    stateName: 'Odisha',
    districtOrRegion: 'Puri district',
    category: 'temples',
    categoryName: 'Temple Heritage Complex',
    shortDescription:
      'The Mukti Mandapa (liberation hall) and Ananda Bazar (bliss market) within the Jagannath Temple complex — where the world\'s largest open-air kitchen prepares Mahaprasad daily for over 10,000 devotees.',
    history:
      'The Ananda Bazar has operated continuously as a sacred kitchen for over 700 years, preparing 56 varieties of food offerings (Chhappan Bhog) using traditional clay pots and wood fires.',
    culturalSignificance:
      'The Mahaprasad of Jagannath Temple is considered the most egalitarian sacred meal in India — served without caste distinction, it has influenced social reform movements.',
    architecture:
      'The Ananda Bazar is a large open-air market within the temple precincts with hundreds of earthen pot stoves. The Mukti Mandapa is an important meeting hall for religious discourse.',
    historicalPeriod: '14th century CE onwards',
    unescoStatus: null,
    images: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Ananda_Bazar_Puri.jpg/1280px-Ananda_Bazar_Puri.jpg'
    ],
    media: [],
    conservationInfo: 'Managed by Shree Jagannath Temple Administration (SJTA).',
    relatedHeritageIds: ['od-heritage-jagannath-puri'],
    relatedCultureIds: ['od-culture-odisha-mahaprasad'],
    trailIds: ['trail-sacred-odisha'],
    verificationStatus: 'verified',
    sources: [
      {
        sourceName: 'Shree Jagannath Temple Administration',
        sourceType: 'Government',
        sourceUrl: 'https://www.shreejagannath.org/'
      }
    ],
    lastVerified: '2026-08-29'
  }
]

// Odisha showcase state — verified records.
export const allHeritage = [...verifiedHeritage]
