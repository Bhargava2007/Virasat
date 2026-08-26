/**
 * Verified Heritage Dataset — Stage 2B (Karnataka Batches 1-5, Rajasthan Batches 1-2, Tamil Nadu Batches 1-2)
 * Factually verified records with exact source attribution.
 */
export const verifiedHeritage = [
  // KARNATAKA VERIFIED (29 Records)
  {
    id: 'ka-heritage-hampi',
    slug: 'hampi',
    name: 'Hampi',
    recordType: 'heritage',
    state: 'karnataka',
    stateName: 'Karnataka',
    districtOrRegion: 'Vijayanagara region / Tungabhadra basin',
    category: 'unesco-heritage-sites',
    categoryName: 'UNESCO Heritage Site',
    shortDescription: 'A vast monumental landscape containing the remains of the capital city of the Vijayanagara Empire.',
    history: 'Hampi preserves the remains of the capital city of the Vijayanagara Empire, which flourished between the 14th and 16th centuries.',
    culturalSignificance: 'The site preserves an extensive sacred, royal, civil and military landscape and provides exceptional testimony to the Vijayanagara civilization.',
    architecture: 'Vijayanagara architecture at Hampi includes large Dravidian temple complexes, pillared halls and mandapas, gateways, royal and secular structures, water systems and fortifications. UNESCO also notes Indo-Islamic architectural elements in some secular buildings.',
    historicalPeriod: '14th–16th centuries',
    unescoStatus: 'World Heritage Site',
    latitude: null,
    longitude: null,
    images: [],
    media: [],
    conservationInfo: null,
    relatedHeritageIds: [],
    relatedCultureIds: [],
    trailIds: [],
    verificationStatus: 'verified',
    sources: [
      {
        sourceName: 'UNESCO World Heritage Centre — Group of Monuments at Hampi',
        sourceType: 'UNESCO',
        sourceUrl: 'https://whc.unesco.org/en/list/241'
      }
    ],
    lastVerified: '2026-08-26'
  },
  {
    id: 'ka-heritage-mysuru-palace',
    slug: 'mysuru-palace',
    name: 'Mysuru Palace',
    recordType: 'heritage',
    state: 'karnataka',
    stateName: 'Karnataka',
    districtOrRegion: 'Mysuru',
    category: 'palaces',
    categoryName: 'Palace',
    shortDescription: 'A major royal palace in Mysuru and an iconic symbol of Karnataka’s royal heritage.',
    history: 'Mysuru Palace is associated with the Wodeyar royal legacy of Mysuru and remains one of the city’s principal historical and cultural landmarks.',
    culturalSignificance: 'The palace is closely associated with Mysuru Dasara and contains royal artifacts, paintings and ceremonial spaces that reflect Mysuru’s royal cultural heritage.',
    architecture: 'Karnataka Tourism describes the palace as Indo-Saracenic, with a blend of Mughal, Hindu and Gothic architectural influences.',
    historicalPeriod: null,
    unescoStatus: null,
    latitude: null,
    longitude: null,
    images: [],
    media: [],
    conservationInfo: null,
    relatedHeritageIds: [],
    relatedCultureIds: ['ka-culture-mysuru-dasara'],
    trailIds: [],
    verificationStatus: 'verified',
    sources: [
      {
        sourceName: 'Karnataka Tourism — Mysore Palace (Amba Vilas Palace), Mysuru',
        sourceType: 'Government tourism',
        sourceUrl: 'https://karnatakatourism.org/en/experiences/mysore-palace-amba-vilas-palace-mysuru'
      },
      {
        sourceName: 'Karnataka Tourism — Mysuru Palace',
        sourceType: 'Government tourism',
        sourceUrl: 'https://karnatakatourism.org/en/attractions/mysuru-palace'
      }
    ],
    lastVerified: '2026-08-26'
  },
  {
    id: 'ka-heritage-badami',
    slug: 'badami',
    name: 'Badami',
    recordType: 'heritage',
    state: 'karnataka',
    stateName: 'Karnataka',
    districtOrRegion: 'Bagalkot district',
    category: 'historic-places',
    categoryName: 'Historic Place',
    shortDescription: 'A historic town known for its sandstone cave temples and Chalukya-period heritage.',
    history: 'Known historically as Vatapi, Badami served as the capital of the Chalukya dynasty from the 6th to the 8th century.',
    culturalSignificance: 'Badami is an important centre for understanding early Chalukya art, rock-cut architecture and the temple-building traditions of the Deccan.',
    architecture: 'The Badami cave temples are rock-cut sanctuaries carved into red sandstone cliffs and represent important early temple architecture of the Deccan.',
    historicalPeriod: '6th–8th centuries',
    unescoStatus: null,
    latitude: null,
    longitude: null,
    images: [],
    media: [],
    conservationInfo: null,
    relatedHeritageIds: [],
    relatedCultureIds: [],
    trailIds: [],
    verificationStatus: 'verified',
    sources: [
      {
        sourceName: 'Karnataka Tourism — Badami',
        sourceType: 'Government tourism',
        sourceUrl: 'https://karnatakatourism.org/en/destinations/badami'
      }
    ],
    lastVerified: '2026-08-26'
  },
  {
    id: 'ka-heritage-pattadakal',
    slug: 'group-of-monuments-at-pattadakal',
    name: 'Group of Monuments at Pattadakal',
    recordType: 'heritage',
    state: 'karnataka',
    stateName: 'Karnataka',
    districtOrRegion: 'Bagalkot district',
    category: 'unesco-heritage-sites',
    categoryName: 'UNESCO Heritage Site',
    shortDescription: 'A Chalukya-period temple complex where northern and southern Indian architectural forms were brought together in an exceptional ensemble.',
    history: 'Pattadakal represents the high point of temple art developed under the Chalukya dynasty during the 7th and 8th centuries.',
    culturalSignificance: 'The complex is an important testimony to the artistic and architectural achievements of the Early Chalukyas and to the interaction of northern and southern temple-building traditions.',
    architecture: 'UNESCO describes Pattadakal as achieving a harmonious blend of architectural forms from northern and southern India. The group includes nine Hindu temples and a Jain sanctuary.',
    historicalPeriod: '7th–8th centuries',
    unescoStatus: 'World Heritage Site',
    images: [],
    media: [],
    relatedHeritageIds: ['ka-heritage-badami', 'ka-heritage-aihole'],
    relatedCultureIds: [],
    trailIds: [],
    verificationStatus: 'verified',
    sources: [
      {
        sourceName: 'UNESCO World Heritage Centre — Group of Monuments at Pattadakal',
        sourceType: 'UNESCO',
        sourceUrl: 'https://whc.unesco.org/en/list/239/'
      }
    ],
    lastVerified: '2026-08-26'
  },
  {
    id: 'ka-heritage-aihole',
    slug: 'aihole',
    name: 'Aihole',
    recordType: 'heritage',
    state: 'karnataka',
    stateName: 'Karnataka',
    districtOrRegion: 'Bagalkot district',
    category: 'historic-places',
    categoryName: 'Historic Place',
    shortDescription: 'An ancient temple town with more than a hundred shrines and major examples of experimentation in early Chalukya temple architecture.',
    history: 'Aihole contains temples and shrines dating across several centuries and played an important role in the formative development of temple architecture in the Malaprabha valley.',
    culturalSignificance: 'The concentration of temples, inscriptions and early architectural experiments makes Aihole an important place for understanding the development of Chalukya art and architecture.',
    architecture: 'Karnataka Tourism highlights more than 125 temples and notes the apsidal Durga Temple, Lad Khan Temple, Meguti Jain Temple and Ravana Phadi Cave among the major monuments.',
    historicalPeriod: null,
    unescoStatus: null,
    images: [],
    media: [],
    relatedHeritageIds: ['ka-heritage-badami', 'ka-heritage-pattadakal'],
    relatedCultureIds: [],
    trailIds: [],
    verificationStatus: 'verified',
    sources: [
      {
        sourceName: 'Karnataka Tourism — Aihole',
        sourceType: 'Government tourism',
        sourceUrl: 'https://karnatakatourism.org/en/destinations/aihole/'
      },
      {
        sourceName: 'UNESCO World Heritage Centre — Evolution of Temple Architecture: Aihole-Badami-Pattadakal',
        sourceType: 'UNESCO Tentative List',
        sourceUrl: 'https://whc.unesco.org/en/tentativelists/5972/'
      }
    ],
    lastVerified: '2026-08-26'
  },
  {
    id: 'ka-heritage-belur-channakeshava',
    slug: 'channakeshava-temple-belur',
    name: 'Channakeshava Temple, Belur',
    recordType: 'heritage',
    state: 'karnataka',
    stateName: 'Karnataka',
    districtOrRegion: 'Belur, Hassan district',
    category: 'unesco-heritage-sites',
    categoryName: 'UNESCO Heritage Site',
    shortDescription: 'One of the three component temple complexes of the UNESCO-listed Sacred Ensembles of the Hoysalas.',
    history: 'The Channakeshava Temple at Belur is one of the representative Hoysala temple complexes dating to the 12th–13th-century Hoysala cultural era.',
    culturalSignificance: 'The temple is part of the serial World Heritage property that demonstrates the distinctive Hoysala architectural and sculptural tradition. UNESCO notes continuity of worship, rituals and festivals at Belur since the temple\'s inception in 1117 CE.',
    architecture: 'Characteristic Hoysala features include a stellate plan, circumambulatory platform, multi-tiered friezes, extensive sculptural galleries and densely carved exterior surfaces.',
    historicalPeriod: '12th–13th centuries',
    unescoStatus: 'Component of the Sacred Ensembles of the Hoysalas World Heritage Site',
    images: [],
    media: [],
    relatedHeritageIds: ['ka-heritage-halebidu-hoysalesvara', 'ka-heritage-somanathapura-keshava'],
    relatedCultureIds: [],
    trailIds: [],
    verificationStatus: 'verified',
    sources: [
      {
        sourceName: 'UNESCO World Heritage Centre — Sacred Ensembles of the Hoysalas',
        sourceType: 'UNESCO',
        sourceUrl: 'https://whc.unesco.org/en/list/1670/'
      }
    ],
    lastVerified: '2026-08-26'
  },
  {
    id: 'ka-heritage-halebidu-hoysalesvara',
    slug: 'hoysalesvara-temple-halebidu',
    name: 'Hoysalesvara Temple, Halebidu',
    recordType: 'heritage',
    state: 'karnataka',
    stateName: 'Karnataka',
    districtOrRegion: 'Halebidu, Hassan district',
    category: 'unesco-heritage-sites',
    categoryName: 'UNESCO Heritage Site',
    shortDescription: 'A major Hoysala temple complex at Halebidu and a component of the UNESCO-listed Sacred Ensembles of the Hoysalas.',
    history: 'The Hoysalesvara Temple is one of the three representative Hoysala temple complexes dating to the 12th–13th centuries included in the Sacred Ensembles of the Hoysalas.',
    culturalSignificance: 'The temple forms part of a serial property recognized for its exceptional testimony to the Hoysala style and its significance in the historical development of Hindu temple architecture.',
    architecture: 'UNESCO identifies Hoysala architecture through features such as stellate sanctums, circumambulatory platforms, multi-tiered friezes, sculptural galleries and extensive stone carving.',
    historicalPeriod: '12th–13th centuries',
    unescoStatus: 'Component of the Sacred Ensembles of the Hoysalas World Heritage Site',
    images: [],
    media: [],
    relatedHeritageIds: ['ka-heritage-belur-channakeshava', 'ka-heritage-somanathapura-keshava'],
    relatedCultureIds: [],
    trailIds: [],
    verificationStatus: 'verified',
    sources: [
      {
        sourceName: 'UNESCO World Heritage Centre — Sacred Ensembles of the Hoysalas',
        sourceType: 'UNESCO',
        sourceUrl: 'https://whc.unesco.org/en/list/1670/'
      }
    ],
    lastVerified: '2026-08-26'
  },
  {
    id: 'ka-heritage-somanathapura-keshava',
    slug: 'keshava-temple-somanathapura',
    name: 'Keshava Temple, Somanathapura',
    recordType: 'heritage',
    state: 'karnataka',
    stateName: 'Karnataka',
    districtOrRegion: 'Somanathapura, Mysuru district',
    category: 'unesco-heritage-sites',
    categoryName: 'UNESCO Heritage Site',
    shortDescription: 'A Hoysala temple complex at Somanathapura and one of the three components of the Sacred Ensembles of the Hoysalas.',
    history: 'The Keshava Temple at Somanathapura is one of the representative Hoysala temple complexes dating to the 12th–13th centuries included in the UNESCO serial property.',
    culturalSignificance: 'Together with the temples at Belur and Halebidu, it illustrates the richness and development of the Hoysala architectural and sculptural tradition.',
    architecture: 'The UNESCO property is characterized by stellate forms, sculptural friezes, carved exterior surfaces, thematic galleries and other distinctive Hoysala features.',
    historicalPeriod: '12th–13th centuries',
    unescoStatus: 'Component of the Sacred Ensembles of the Hoysalas World Heritage Site',
    images: [],
    media: [],
    relatedHeritageIds: ['ka-heritage-belur-channakeshava', 'ka-heritage-halebidu-hoysalesvara'],
    relatedCultureIds: [],
    trailIds: [],
    verificationStatus: 'verified',
    sources: [
      {
        sourceName: 'UNESCO World Heritage Centre — Sacred Ensembles of the Hoysalas',
        sourceType: 'UNESCO',
        sourceUrl: 'https://whc.unesco.org/en/list/1670/'
      }
    ],
    lastVerified: '2026-08-26'
  },
  {
    id: 'ka-heritage-bidar-fort',
    slug: 'bidar-fort',
    name: 'Bidar Fort',
    recordType: 'heritage',
    state: 'karnataka',
    stateName: 'Karnataka',
    districtOrRegion: 'Bidar',
    category: 'forts',
    categoryName: 'Forts',
    shortDescription: 'A major medieval fort complex associated with the Bahmani Sultanate and the historic city of Bidar.',
    history: 'Bidar became the Bahmani capital in the 15th century, and the fort was rebuilt and developed under Sultan Ahmad Shah Wali Bahmani.',
    culturalSignificance: 'The fort complex preserves royal, religious and defensive structures that reflect the Deccan\'s medieval political and cultural history.',
    architecture: 'Karnataka Tourism highlights its bastions, gateways, palaces, mosques, Persian-influenced gardens and decorative tile work.',
    historicalPeriod: '15th century and later',
    unescoStatus: null,
    images: [],
    media: [],
    relatedHeritageIds: [],
    relatedCultureIds: [],
    trailIds: [],
    verificationStatus: 'verified',
    sources: [
      {
        sourceName: 'Karnataka Tourism — Bidar Fort',
        sourceType: 'Government tourism',
        sourceUrl: 'https://karnatakatourism.org/en/attractions/bidar-fort/'
      }
    ],
    lastVerified: '2026-08-26'
  },
  {
    id: 'ka-heritage-gol-gumbaz',
    slug: 'gol-gumbaz',
    name: 'Gol Gumbaz',
    recordType: 'heritage',
    state: 'karnataka',
    stateName: 'Karnataka',
    districtOrRegion: 'Vijayapura',
    category: 'monuments',
    categoryName: 'Monuments',
    shortDescription: 'The monumental mausoleum of Sultan Muhammad Adil Shah and one of Vijayapura\'s defining Indo-Islamic heritage landmarks.',
    history: 'Gol Gumbaz is the mausoleum of Sultan Muhammad Adil Shah of the Adil Shahi dynasty in Vijayapura.',
    culturalSignificance: 'The monument is a defining part of Vijayapura\'s Adil Shahi architectural heritage and the city\'s historic identity.',
    architecture: 'The monument is renowned for its immense dome and whispering gallery and is a major example of Deccan Indo-Islamic architecture.',
    historicalPeriod: 'Adil Shahi period',
    unescoStatus: null,
    images: [],
    media: [],
    relatedHeritageIds: [],
    relatedCultureIds: [],
    trailIds: [],
    verificationStatus: 'verified',
    sources: [
      {
        sourceName: 'Karnataka Tourism — Vijayapura',
        sourceType: 'Government tourism',
        sourceUrl: 'https://karnatakatourism.org/en/destinations/vijayapura'
      }
    ],
    lastVerified: '2026-08-26'
  },
  {
    id: 'ka-heritage-chitradurga-fort',
    slug: 'chitradurga-fort',
    name: 'Chitradurga Fort',
    recordType: 'heritage',
    state: 'karnataka',
    stateName: 'Karnataka',
    districtOrRegion: 'Chitradurga',
    category: 'forts',
    categoryName: 'Forts',
    shortDescription: 'A sprawling hill fortress integrated with Chitradurga\'s rugged granite landscape and known for its layered defenses and water systems.',
    history: 'Chitradurga Fort developed over centuries and is strongly associated with the Nayakas of Chitradurga, who expanded it into a major stronghold.',
    culturalSignificance: 'The fort is an important symbol of regional military history and is closely associated with the remembered story of Onake Obavva.',
    architecture: 'Its defensive landscape includes concentric fortification walls, gateways, watchtowers, passages, temples and an interconnected rainwater-harvesting system.',
    historicalPeriod: null,
    unescoStatus: null,
    images: [],
    media: [],
    relatedHeritageIds: [],
    relatedCultureIds: [],
    trailIds: [],
    verificationStatus: 'verified',
    sources: [
      {
        sourceName: 'Karnataka Tourism — Chitradurga Fort',
        sourceType: 'Government tourism',
        sourceUrl: 'https://karnatakatourism.org/en/attractions/chitradurga-fort'
      }
    ],
    lastVerified: '2026-08-26'
  },
  {
    id: 'ka-heritage-srirangapatana',
    slug: 'srirangapatana',
    name: 'Srirangapatana',
    recordType: 'heritage',
    state: 'karnataka',
    stateName: 'Karnataka',
    districtOrRegion: 'Mandya district',
    category: 'historic-places',
    categoryName: 'Historic Place',
    shortDescription: 'A historic island town on the River Cauvery associated with the Kingdom of Mysore, Tipu Sultan, major religious sites and the Anglo-Mysore Wars.',
    history: 'Srirangapatana served as an important capital of the Kingdom of Mysore and played a pivotal role in the Anglo-Mysore Wars.',
    culturalSignificance: 'The town preserves Hindu and Islamic heritage, including the Ranganathaswamy Temple, structures associated with Tipu Sultan and the Gumbaz mausoleum.',
    architecture: 'Its heritage landscape includes temple architecture, fortifications, palatial structures and Indo-Islamic monuments.',
    images: [],
    media: [],
    relatedHeritageIds: ['ka-heritage-daria-daulat-bagh'],
    relatedCultureIds: [],
    trailIds: [],
    verificationStatus: 'verified',
    sources: [
      {
        sourceName: 'Karnataka Tourism — Srirangapatana',
        sourceType: 'Government tourism',
        sourceUrl: 'https://karnatakatourism.org/en/destinations/srirangapatana'
      }
    ],
    lastVerified: '2026-08-26'
  },
  {
    id: 'ka-heritage-daria-daulat-bagh',
    slug: 'daria-daulat-bagh',
    name: 'Daria Daulat Bagh (Tipu Sultan’s Summer Palace)',
    recordType: 'heritage',
    state: 'karnataka',
    stateName: 'Karnataka',
    districtOrRegion: 'Srirangapatana, Mandya district',
    category: 'palaces',
    categoryName: 'Palace',
    shortDescription: 'Tipu Sultan’s summer palace at Srirangapatana, set within a garden and noted for its timber construction and painted interiors.',
    history: 'Karnataka Tourism states that the palace was built in 1784 and served as Tipu Sultan’s summer retreat.',
    culturalSignificance: 'Its painted interiors depict subjects including battles, royal processions and court life and contribute to the surviving material heritage of the Mysore kingdom.',
    architecture: 'The palace uses extensive timber construction, including teakwood columns and wooden structural elements, with richly painted walls and interiors.',
    historicalPeriod: 'Late 18th century',
    images: [],
    media: [],
    relatedHeritageIds: ['ka-heritage-srirangapatana'],
    relatedCultureIds: [],
    trailIds: [],
    verificationStatus: 'verified',
    sources: [
      {
        sourceName: 'Karnataka Tourism — Tipu Sultan’s Summer Palace',
        sourceType: 'Government tourism',
        sourceUrl: 'https://karnatakatourism.org/en/attractions/tipu-sultans-summer-palace'
      }
    ],
    lastVerified: '2026-08-26'
  },
  {
    id: 'ka-heritage-bengaluru-palace',
    slug: 'bengaluru-palace',
    name: 'Bengaluru Palace',
    recordType: 'heritage',
    state: 'karnataka',
    stateName: 'Karnataka',
    districtOrRegion: 'Bengaluru',
    category: 'palaces',
    categoryName: 'Palace',
    shortDescription: 'A 19th-century royal residence in Bengaluru associated with the Wadiyar dynasty and known for Tudor-inspired architecture.',
    history: 'Karnataka Tourism identifies Bengaluru Palace as a 19th-century royal residence built for the Wadiyar dynasty of Mysore.',
    culturalSignificance: 'The palace preserves royal interiors, paintings, photographs and other material associated with Bengaluru’s royal heritage.',
    architecture: 'Karnataka Tourism describes Tudor and Scottish Gothic influences, including fortified towers, battlements and turrets.',
    historicalPeriod: '19th century',
    images: [],
    media: [],
    relatedHeritageIds: [],
    relatedCultureIds: [],
    trailIds: [],
    verificationStatus: 'verified',
    sources: [
      {
        sourceName: 'Karnataka Tourism — Bengaluru',
        sourceType: 'Government tourism',
        sourceUrl: 'https://karnatakatourism.org/en/destinations/bengaluru'
      },
      {
        sourceName: 'Karnataka Tourism — Experience Bangalore Palace',
        sourceType: 'Government tourism',
        sourceUrl: 'https://karnatakatourism.org/en/experiences/experience-bangalore-palace'
      }
    ],
    lastVerified: '2026-08-26'
  },
  {
    id: 'ka-heritage-melukote',
    slug: 'melukote',
    name: 'Melukote',
    recordType: 'heritage',
    state: 'karnataka',
    stateName: 'Karnataka',
    districtOrRegion: 'Mandya district',
    category: 'historic-religious-structures',
    categoryName: 'Religious Heritage',
    shortDescription: 'A historic hilltop pilgrimage town known for the Cheluvanarayana Swamy Temple and Vaishnavite religious traditions.',
    history: 'Karnataka Tourism associates Melukote with Sri Ramanujacharya and longstanding Vaishnavite scholarly and devotional traditions.',
    culturalSignificance: 'The town remains a centre of temple worship and Kannada and Tamil Vaishnavite culture.',
    architecture: 'Its heritage landscape includes temple architecture, hilltop shrines and the Kalyani temple tank.',
    images: [],
    media: [],
    relatedHeritageIds: [],
    relatedCultureIds: [],
    trailIds: [],
    verificationStatus: 'verified',
    sources: [
      {
        sourceName: 'Karnataka Tourism — Melukote',
        sourceType: 'Government tourism',
        sourceUrl: 'https://karnatakatourism.org/en/destinations/melkote'
      }
    ],
    lastVerified: '2026-08-26'
  },
  {
    id: 'ka-heritage-kavaledurga-fort',
    slug: 'kavaledurga-fort',
    name: 'Kavaledurga Fort',
    recordType: 'heritage',
    state: 'karnataka',
    stateName: 'Karnataka',
    districtOrRegion: 'Shivamogga district',
    category: 'forts',
    categoryName: 'Forts',
    shortDescription: 'A forested hill fort associated with the Keladi Nayakas, preserving fortifications, shrines and palace remains.',
    history: 'Karnataka Tourism describes Kavaledurga as a stronghold of the Keladi Nayakas during the 16th century.',
    culturalSignificance: 'The site preserves evidence of a regional political centre together with religious structures representing a layered historic landscape.',
    architecture: 'The fort has three rounds of rock-wall fortifications and contains remains of a palace, guard rooms, weapon-storage spaces, shrines and a mosque.',
    historicalPeriod: '16th century and later',
    images: [],
    media: [],
    relatedHeritageIds: [],
    relatedCultureIds: [],
    trailIds: [],
    verificationStatus: 'verified',
    sources: [
      {
        sourceName: 'Karnataka Tourism — Kavaledurga Fort',
        sourceType: 'Government tourism',
        sourceUrl: 'https://karnatakatourism.org/en/attractions/kavaledurga-fort'
      }
    ],
    lastVerified: '2026-08-26'
  },
  {
    id: 'ka-heritage-mirjan-fort',
    slug: 'mirjan-fort',
    name: 'Mirjan Fort',
    recordType: 'heritage',
    state: 'karnataka',
    stateName: 'Karnataka',
    districtOrRegion: 'Uttara Kannada district',
    category: 'forts',
    categoryName: 'Forts',
    shortDescription: 'A historic coastal-region fort in Uttara Kannada, recognized by Karnataka Tourism as one of the state’s heritage attractions.',
    history: null,
    culturalSignificance: 'Mirjan Fort contributes to the network of historic fortified sites along Karnataka’s western region.',
    architecture: null,
    images: [],
    media: [],
    relatedHeritageIds: [],
    relatedCultureIds: [],
    trailIds: [],
    verificationStatus: 'verified',
    sources: [
      {
        sourceName: 'Karnataka Tourism — Heritage Sites',
        sourceType: 'Government tourism',
        sourceUrl: 'https://karnatakatourism.org/en/destinations/heritage-sites/'
      }
    ],
    lastVerified: '2026-08-26'
  },
  {
    id: 'ka-heritage-kittur-fort',
    slug: 'kittur-fort',
    name: 'Kittur Fort',
    recordType: 'heritage',
    state: 'karnataka',
    stateName: 'Karnataka',
    districtOrRegion: 'Belagavi district',
    category: 'forts',
    categoryName: 'Forts',
    shortDescription: 'A historic fortress strongly associated with Queen Kittur Chennamma and her 1824 resistance against British rule.',
    history: 'Karnataka Tourism states that Kittur Fort was built by Allappa Gowda Sardesai in the 17th century and became famous through Queen Kittur Chennamma’s resistance against the British in 1824.',
    culturalSignificance: 'The fort is an important site of regional memory connected with Queen Kittur Chennamma and resistance to British rule.',
    architecture: 'Karnataka Tourism describes the fort as built using black basalt, with Peshwa-Islamic architectural features and the remains of a three-storeyed palace.',
    historicalPeriod: '17th century and later',
    images: [],
    media: [],
    relatedHeritageIds: [],
    relatedCultureIds: [],
    trailIds: [],
    verificationStatus: 'verified',
    sources: [
      {
        sourceName: 'Karnataka Tourism — Kittur Fort',
        sourceType: 'Government tourism',
        sourceUrl: 'https://karnatakatourism.org/en/destinations/kittur-fort'
      }
    ],
    lastVerified: '2026-08-26'
  },
  {
    id: 'ka-heritage-manjarabad-fort',
    slug: 'manjarabad-fort',
    name: 'Manjarabad Fort',
    recordType: 'heritage',
    state: 'karnataka',
    stateName: 'Karnataka',
    districtOrRegion: 'Sakleshpur, Hassan district',
    category: 'forts',
    categoryName: 'Forts',
    shortDescription: 'A star-shaped hill fort built by Tipu Sultan in the late 18th century near Sakleshpur.',
    history: 'Karnataka Tourism states that Manjarabad Fort was constructed by Tipu Sultan in 1792.',
    culturalSignificance: 'The fort forms part of the surviving military heritage associated with Tipu Sultan and the Kingdom of Mysore.',
    architecture: 'Karnataka Tourism describes it as a star-shaped fort built in a European style, using granite and lime mortar externally and fired brick in the interiors.',
    historicalPeriod: '1792',
    images: [],
    media: [],
    relatedHeritageIds: [],
    relatedCultureIds: [],
    trailIds: [],
    verificationStatus: 'verified',
    sources: [
      {
        sourceName: 'Karnataka Tourism — Manjarabad Fort',
        sourceType: 'Government tourism',
        sourceUrl: 'https://karnatakatourism.org/en/attractions/manjarabad-fort'
      }
    ],
    lastVerified: '2026-08-26'
  },
  {
    id: 'ka-heritage-sanganakallu',
    slug: 'sanganakallu',
    name: 'Sanganakallu',
    recordType: 'heritage',
    state: 'karnataka',
    stateName: 'Karnataka',
    districtOrRegion: 'Ballari region',
    category: 'archaeological-sites',
    categoryName: 'Archaeological Site',
    shortDescription: 'A prehistoric settlement landscape in Karnataka recognized by Karnataka Tourism as an important heritage destination.',
    history: null,
    culturalSignificance: 'Sanganakallu represents Karnataka’s prehistoric human past and broadens the state’s heritage story beyond its historic dynasties and monuments.',
    architecture: null,
    historicalPeriod: 'Prehistoric',
    images: [],
    media: [],
    relatedHeritageIds: [],
    relatedCultureIds: [],
    trailIds: [],
    verificationStatus: 'verified',
    sources: [
      {
        sourceName: 'Karnataka Tourism — Heritage Sites',
        sourceType: 'Government tourism',
        sourceUrl: 'https://karnatakatourism.org/en/destinations/heritage-sites/?type%5B%5D=experience'
      }
    ],
    lastVerified: '2026-08-26'
  },
  {
    id: 'ka-heritage-barkur',
    slug: 'barkur',
    name: 'Barkur',
    recordType: 'heritage',
    state: 'karnataka',
    stateName: 'Karnataka',
    districtOrRegion: 'Udupi district',
    category: 'historic-places',
    categoryName: 'Historic Place',
    shortDescription: 'An ancient heritage town in coastal Karnataka remembered for its historic role as a port and regional centre.',
    history: null,
    culturalSignificance: 'Karnataka Tourism presents Barkur as an ancient heritage town and a lesser-known part of coastal Karnataka’s historical landscape.',
    architecture: null,
    images: [],
    media: [],
    relatedHeritageIds: [],
    relatedCultureIds: [],
    trailIds: [],
    verificationStatus: 'verified',
    sources: [
      {
        sourceName: 'Karnataka Tourism — Heritage, History and Culture',
        sourceType: 'Government tourism',
        sourceUrl: 'https://karnatakatourism.org/en/experiences/heritage-history'
      }
    ],
    lastVerified: '2026-08-26'
  },
  {
    id: 'ka-heritage-basavakalyana',
    slug: 'basavakalyana',
    name: 'Basavakalyana',
    recordType: 'heritage',
    state: 'karnataka',
    stateName: 'Karnataka',
    districtOrRegion: 'Bidar region',
    category: 'historic-places',
    categoryName: 'Historic Place',
    shortDescription: 'A historic Karnataka town presented by Karnataka Tourism as a seat of social reform and royal power.',
    history: null,
    culturalSignificance: 'Basavakalyana is important to Karnataka’s historical and social-reform heritage.',
    architecture: null,
    images: [],
    media: [],
    relatedHeritageIds: [],
    relatedCultureIds: [],
    trailIds: [],
    verificationStatus: 'verified',
    sources: [
      {
        sourceName: 'Karnataka Tourism — Heritage, History and Culture',
        sourceType: 'Government tourism',
        sourceUrl: 'https://karnatakatourism.org/en/experiences/heritage-history'
      }
    ],
    lastVerified: '2026-08-26'
  },
  {
    id: 'ka-heritage-talakadu',
    slug: 'talakadu',
    name: 'Talakadu',
    recordType: 'heritage',
    state: 'karnataka',
    stateName: 'Karnataka',
    districtOrRegion: 'Mysuru district / Cauvery river region',
    category: 'historic-places',
    categoryName: 'Historic Place',
    shortDescription: 'A historic temple town on the banks of the River Cauvery known for its sand-covered landscape and religious heritage.',
    history: null,
    culturalSignificance: 'Karnataka Tourism presents Talakadu as a historic settlement whose temple heritage and distinctive sand-covered landscape form an important part of the Cauvery region’s cultural history.',
    architecture: null,
    images: [],
    media: [],
    relatedHeritageIds: [],
    relatedCultureIds: [],
    trailIds: [],
    verificationStatus: 'verified',
    sources: [
      {
        sourceName: 'Karnataka Tourism — Heritage, History and Culture',
        sourceType: 'Government tourism',
        sourceUrl: 'https://karnatakatourism.org/en/experiences/heritage-history'
      }
    ],
    lastVerified: '2026-08-26'
  },
  {
    id: 'ka-heritage-shravanabelagola',
    slug: 'shravanabelagola',
    name: 'Shravanabelagola',
    recordType: 'heritage',
    state: 'karnataka',
    stateName: 'Karnataka',
    districtOrRegion: 'Hassan district',
    category: 'historic-religious-structures',
    categoryName: 'Religious Heritage',
    shortDescription: 'A major Jain pilgrimage town known for the monumental Gommateshwara (Bahubali) statue on Vindhyagiri Hill.',
    history: 'Karnataka Tourism states that the Gommateshwara statue was erected in 981 CE by Chavundaraya.',
    culturalSignificance: 'Shravanabelagola is a major centre of Jain heritage, with historic basadis, inscriptions and the Mahamastakabhisheka ceremony.',
    architecture: 'The site includes the monolithic Bahubali statue, Jain basadis, memorials, inscriptions and sacred hill landscapes.',
    historicalPeriod: 'Historic Jain centre; Gommateshwara statue erected in 981 CE',
    images: [],
    media: [],
    relatedHeritageIds: [],
    relatedCultureIds: ['ka-culture-mahamastakabhisheka'],
    trailIds: [],
    verificationStatus: 'verified',
    sources: [
      {
        sourceName: 'Karnataka Tourism — Shravanabelagola',
        sourceType: 'Government tourism',
        sourceUrl: 'https://karnatakatourism.org/en/attractions/shravanabelagola/'
      }
    ],
    lastVerified: '2026-08-26'
  },
  {
    id: 'ka-heritage-sringeri',
    slug: 'sringeri',
    name: 'Sringeri',
    recordType: 'heritage',
    state: 'karnataka',
    stateName: 'Karnataka',
    districtOrRegion: 'Chikkamagaluru district / Tunga River',
    category: 'historic-religious-structures',
    categoryName: 'Religious Heritage',
    shortDescription: 'A major spiritual centre on the banks of the Tunga River associated with Advaita Vedanta and Adi Shankaracharya.',
    history: 'Karnataka Tourism states that Sringeri was founded in the 8th century by Adi Shankaracharya.',
    culturalSignificance: 'Sringeri remains an important centre of spiritual learning, temple worship and Advaita Vedanta tradition.',
    architecture: 'Karnataka Tourism highlights the Sharada Peetham and Vidyashankara Temple, including the latter’s zodiacal stone pillars.',
    historicalPeriod: 'Founded in the 8th century',
    images: [],
    media: [],
    relatedHeritageIds: [],
    relatedCultureIds: [],
    trailIds: [],
    verificationStatus: 'verified',
    sources: [
      {
        sourceName: 'Karnataka Tourism — Sringeri',
        sourceType: 'Government tourism',
        sourceUrl: 'https://karnatakatourism.org/en/destinations/sringeri/'
      }
    ],
    lastVerified: '2026-08-26'
  },
  {
    id: 'ka-heritage-keladi',
    slug: 'keladi',
    name: 'Keladi',
    recordType: 'heritage',
    state: 'karnataka',
    stateName: 'Karnataka',
    districtOrRegion: 'Shivamogga district',
    category: 'historic-places',
    categoryName: 'Historic Place',
    shortDescription: 'The first capital of the Keladi Nayakas, preserving dynastic heritage in the Western Ghats region.',
    history: 'Karnataka Tourism identifies Keladi as the first capital of the Keladi Nayakas, who ruled after the fall of Vijayanagara.',
    culturalSignificance: 'Keladi preserves an important regional chapter of Karnataka’s post-Vijayanagara dynastic history.',
    architecture: 'The Keladi Rameshwara Temple is described by Karnataka Tourism as combining Dravidian and Kadamba architectural styles.',
    historicalPeriod: null,
    images: [],
    media: [],
    relatedHeritageIds: ['ka-heritage-kavaledurga-fort'],
    relatedCultureIds: [],
    trailIds: [],
    verificationStatus: 'verified',
    sources: [
      {
        sourceName: 'Karnataka Tourism — Keladi',
        sourceType: 'Government tourism',
        sourceUrl: 'https://karnatakatourism.org/en/destinations/keladi'
      }
    ],
    lastVerified: '2026-08-26'
  },
  {
    id: 'ka-heritage-nanjangudu',
    slug: 'nanjangudu',
    name: 'Nanjangudu',
    recordType: 'heritage',
    state: 'karnataka',
    stateName: 'Karnataka',
    districtOrRegion: 'Mysuru district',
    category: 'historic-religious-structures',
    categoryName: 'Religious Heritage',
    shortDescription: 'A prominent religious destination in Karnataka presented by Karnataka Tourism as \'South Kashi\'.',
    history: null,
    culturalSignificance: 'Nanjangudu forms part of Karnataka’s major spiritual and religious heritage landscape.',
    architecture: null,
    historicalPeriod: null,
    images: [],
    media: [],
    relatedHeritageIds: [],
    relatedCultureIds: [],
    trailIds: [],
    verificationStatus: 'verified',
    sources: [
      {
        sourceName: 'Karnataka Tourism — Spiritual & Religious Sites',
        sourceType: 'Government tourism',
        sourceUrl: 'https://karnatakatourism.org/en/destinations/spiritual-religious-sites/'
      }
    ],
    lastVerified: '2026-08-26'
  },
  {
    id: 'ka-heritage-harihara',
    slug: 'harihara',
    name: 'Harihara',
    recordType: 'heritage',
    state: 'karnataka',
    stateName: 'Karnataka',
    districtOrRegion: 'Davanagere district / Tungabhadra region',
    category: 'historic-places',
    categoryName: 'Historic Place',
    shortDescription: 'A Karnataka heritage destination on the Tungabhadra presented by Karnataka Tourism as a place of intertwined cultural traditions.',
    history: null,
    culturalSignificance: 'Harihara broadens the catalogue’s representation of central Karnataka and the Tungabhadra cultural landscape.',
    architecture: null,
    historicalPeriod: null,
    images: [],
    media: [],
    relatedHeritageIds: [],
    relatedCultureIds: [],
    trailIds: [],
    verificationStatus: 'verified',
    sources: [
      {
        sourceName: 'Karnataka Tourism — Heritage Sites',
        sourceType: 'Government tourism',
        sourceUrl: 'https://karnatakatourism.org/en/destinations/heritage-sites/'
      }
    ],
    lastVerified: '2026-08-26'
  },
  {
    id: 'ka-heritage-magadi',
    slug: 'magadi',
    name: 'Magadi',
    recordType: 'heritage',
    state: 'karnataka',
    stateName: 'Karnataka',
    districtOrRegion: 'Ramanagara district',
    category: 'historic-places',
    categoryName: 'Historic Place',
    shortDescription: 'A historic Karnataka destination associated by Karnataka Tourism with the legacy of Kempegowda.',
    history: null,
    culturalSignificance: 'Magadi contributes to the historical landscape associated with Kempegowda’s legacy in southern Karnataka.',
    architecture: null,
    historicalPeriod: null,
    images: [],
    media: [],
    relatedHeritageIds: [],
    relatedCultureIds: [],
    trailIds: [],
    verificationStatus: 'verified',
    sources: [
      {
        sourceName: 'Karnataka Tourism — Heritage Sites',
        sourceType: 'Government tourism',
        sourceUrl: 'https://karnatakatourism.org/en/destinations/heritage-sites/'
      }
    ],
    lastVerified: '2026-08-26'
  },

  // RAJASTHAN VERIFIED (24 Records)
  {
    id: 'rj-heritage-amber-fort',
    slug: 'amber-fort',
    name: 'Amber Fort',
    recordType: 'heritage',
    state: 'rajasthan',
    stateName: 'Rajasthan',
    districtOrRegion: 'Jaipur',
    category: 'unesco-heritage-sites',
    categoryName: 'UNESCO Heritage Site',
    shortDescription: 'A major Rajput hill-fort and palace complex near Jaipur and one of the six components of the UNESCO-listed Hill Forts of Rajasthan.',
    history: 'Amber represents an important phase in the development of Rajput court architecture and was expanded by successive rulers.',
    culturalSignificance: 'UNESCO identifies Amber as representative of a key phase in the development of a shared Rajput-Mughal court style.',
    architecture: 'The complex includes fortified walls, gates, courtyards, palaces, temples, halls and gardens, with Rajput and Mughal architectural influences.',
    unescoStatus: 'Component of the Hill Forts of Rajasthan World Heritage Site',
    images: [],
    media: [],
    relatedHeritageIds: ['rj-heritage-jaipur-city', 'rj-heritage-jaigarh-fort'],
    relatedCultureIds: [],
    trailIds: [],
    verificationStatus: 'verified',
    sources: [
      {
        sourceName: 'UNESCO World Heritage Centre — Hill Forts of Rajasthan',
        sourceType: 'UNESCO',
        sourceUrl: 'https://whc.unesco.org/en/list/247'
      },
      {
        sourceName: 'Rajasthan Tourism — Jaipur travel diary / Amber Fort',
        sourceType: 'Government tourism',
        sourceUrl: 'https://www.tourism.rajasthan.gov.in/travel-diaries/vikramsthan.html'
      }
    ],
    lastVerified: '2026-08-26'
  },
  {
    id: 'rj-heritage-chittorgarh-fort',
    slug: 'chittorgarh-fort',
    name: 'Chittorgarh Fort',
    recordType: 'heritage',
    state: 'rajasthan',
    stateName: 'Rajasthan',
    districtOrRegion: 'Chittorgarh',
    category: 'unesco-heritage-sites',
    categoryName: 'UNESCO Heritage Site',
    shortDescription: 'A vast Rajput hill fort strongly associated with Mewar history and one of the six UNESCO-listed Hill Forts of Rajasthan.',
    history: 'UNESCO identifies Chittorgarh as a former capital of the Sisodia clan and as a fort strongly associated with major historical sieges.',
    culturalSignificance: 'The fort holds a central place in Rajput history and folklore and preserves extensive religious, royal and military remains.',
    architecture: 'Its large fortified landscape contains palaces, towers, temples, water structures and defensive works spanning several centuries.',
    unescoStatus: 'Component of the Hill Forts of Rajasthan World Heritage Site',
    images: [],
    media: [],
    relatedHeritageIds: [],
    relatedCultureIds: [],
    trailIds: [],
    verificationStatus: 'verified',
    sources: [
      {
        sourceName: 'UNESCO World Heritage Centre — Hill Forts of Rajasthan',
        sourceType: 'UNESCO',
        sourceUrl: 'https://whc.unesco.org/en/list/247'
      }
    ],
    lastVerified: '2026-08-26'
  },
  {
    id: 'rj-heritage-kumbhalgarh-fort',
    slug: 'kumbhalgarh-fort',
    name: 'Kumbhalgarh Fort',
    recordType: 'heritage',
    state: 'rajasthan',
    stateName: 'Rajasthan',
    districtOrRegion: 'Rajsamand district',
    category: 'unesco-heritage-sites',
    categoryName: 'UNESCO Heritage Site',
    shortDescription: 'A major 15th-century Mewar hill fort in the Aravalli landscape and a component of the UNESCO-listed Hill Forts of Rajasthan.',
    history: 'Rajasthan Tourism states that Kumbhalgarh was built in the 15th century by Rana Kumbha.',
    culturalSignificance: 'The fort is an important expression of Mewar’s fortified heritage and is associated with Maharana Pratap.',
    architecture: 'The fortress is known for its extensive ramparts, bastions, gates, temples and adaptation to the surrounding mountain terrain.',
    historicalPeriod: '15th century',
    unescoStatus: 'Component of the Hill Forts of Rajasthan World Heritage Site',
    images: [],
    media: [],
    relatedHeritageIds: [],
    relatedCultureIds: ['rj-culture-kumbhalgarh-festival'],
    trailIds: [],
    verificationStatus: 'verified',
    sources: [
      {
        sourceName: 'UNESCO World Heritage Centre — Hill Forts of Rajasthan',
        sourceType: 'UNESCO',
        sourceUrl: 'https://whc.unesco.org/en/list/247'
      },
      {
        sourceName: 'Rajasthan Tourism — The Prodigious Fort of Kumbhalgarh',
        sourceType: 'Government tourism',
        sourceUrl: 'https://www.tourism.rajasthan.gov.in/travel-diaries/irasthan.html'
      }
    ],
    lastVerified: '2026-08-26'
  },
  {
    id: 'rj-heritage-ranthambore-fort',
    slug: 'ranthambore-fort',
    name: 'Ranthambore Fort',
    recordType: 'heritage',
    state: 'rajasthan',
    stateName: 'Rajasthan',
    districtOrRegion: 'Sawai Madhopur',
    category: 'unesco-heritage-sites',
    categoryName: 'UNESCO Heritage Site',
    shortDescription: 'A forest hill fort at Ranthambore and one of the six components of the UNESCO-listed Hill Forts of Rajasthan.',
    history: 'UNESCO identifies Ranthambore as an established example of a forest hill fort and notes surviving early palace remains.',
    culturalSignificance: 'The site demonstrates how Rajput fortifications adapted to dense forest terrain and supported royal, sacred and military functions.',
    architecture: 'The fort uses the natural defenses of the forested hill landscape and contains fortifications, palace remains, sacred buildings and water structures.',
    unescoStatus: 'Component of the Hill Forts of Rajasthan World Heritage Site',
    images: [],
    media: [],
    relatedHeritageIds: [],
    relatedCultureIds: [],
    trailIds: [],
    verificationStatus: 'verified',
    sources: [
      {
        sourceName: 'UNESCO World Heritage Centre — Hill Forts of Rajasthan',
        sourceType: 'UNESCO',
        sourceUrl: 'https://whc.unesco.org/en/list/247'
      }
    ],
    lastVerified: '2026-08-26'
  },
  {
    id: 'rj-heritage-gagron-fort',
    slug: 'gagron-fort',
    name: 'Gagron Fort',
    recordType: 'heritage',
    state: 'rajasthan',
    stateName: 'Rajasthan',
    districtOrRegion: 'Jhalawar',
    category: 'unesco-heritage-sites',
    categoryName: 'UNESCO Heritage Site',
    shortDescription: 'A river-protected Rajput fort at Jhalawar and one of the six components of the UNESCO-listed Hill Forts of Rajasthan.',
    history: null,
    culturalSignificance: 'UNESCO recognizes Gagron as an important example of a fort whose defense relies on its river and hill setting and strategic position on trade routes.',
    architecture: 'Gagron exemplifies a river-protected hill fort integrated with its surrounding natural defenses.',
    unescoStatus: 'Component of the Hill Forts of Rajasthan World Heritage Site',
    images: [],
    media: [],
    relatedHeritageIds: [],
    relatedCultureIds: [],
    trailIds: [],
    verificationStatus: 'verified',
    sources: [
      {
        sourceName: 'UNESCO World Heritage Centre — Hill Forts of Rajasthan',
        sourceType: 'UNESCO',
        sourceUrl: 'https://whc.unesco.org/en/list/247'
      }
    ],
    lastVerified: '2026-08-26'
  },
  {
    id: 'rj-heritage-jaisalmer-fort',
    slug: 'jaisalmer-fort',
    name: 'Jaisalmer Fort',
    recordType: 'heritage',
    state: 'rajasthan',
    stateName: 'Rajasthan',
    districtOrRegion: 'Jaisalmer',
    category: 'unesco-heritage-sites',
    categoryName: 'UNESCO Heritage Site',
    shortDescription: 'A living desert hill fort in Jaisalmer and one of the six components of the UNESCO-listed Hill Forts of Rajasthan.',
    history: 'Rajasthan Tourism states that the fort was initially constructed by Rajput ruler Jaisal in 1156 and later reinforced by subsequent rulers.',
    culturalSignificance: 'UNESCO highlights Jaisalmer as an important example of a sacred and secular urban fort, with an inhabited township and Jain temples within its defenses.',
    architecture: 'The fort is adapted to desert terrain and includes defensive walls, gateways, residential streets, temples and urban spaces.',
    unescoStatus: 'Component of the Hill Forts of Rajasthan World Heritage Site',
    images: [],
    media: [],
    relatedHeritageIds: [],
    relatedCultureIds: ['rj-culture-desert-festival'],
    trailIds: [],
    verificationStatus: 'verified',
    sources: [
      {
        sourceName: 'UNESCO World Heritage Centre — Hill Forts of Rajasthan',
        sourceType: 'UNESCO',
        sourceUrl: 'https://whc.unesco.org/en/list/247'
      },
      {
        sourceName: 'Rajasthan Tourism — Famous Monuments in Rajasthan',
        sourceType: 'Government tourism',
        sourceUrl: 'https://www.tourism.rajasthan.gov.in/travel-diaries/rumisthan.html'
      }
    ],
    lastVerified: '2026-08-26'
  },
  {
    id: 'rj-heritage-jaipur-city',
    slug: 'jaipur-city',
    name: 'Jaipur City',
    recordType: 'heritage',
    state: 'rajasthan',
    stateName: 'Rajasthan',
    districtOrRegion: 'Jaipur',
    category: 'unesco-heritage-sites',
    categoryName: 'UNESCO Heritage Site',
    shortDescription: 'The historic walled city of Jaipur, founded in the 18th century and inscribed as a UNESCO World Heritage Site.',
    history: 'Jaipur was founded in 1727 by Sawai Jai Singh II and was planned as a new capital.',
    culturalSignificance: 'UNESCO recognizes Jaipur for its planned urban form, living craft traditions, markets and continuing role as a centre of trade, arts and culture.',
    architecture: 'The city plan combines a grid-based urban layout with traditional architectural principles, broad streets, public squares, markets and monumental gateways.',
    historicalPeriod: 'Founded in 1727',
    unescoStatus: 'World Heritage Site',
    images: [],
    media: [],
    relatedHeritageIds: ['rj-heritage-amber-fort', 'rj-heritage-jantar-mantar-jaipur', 'rj-heritage-hawa-mahal'],
    relatedCultureIds: ['rj-culture-blue-pottery', 'rj-culture-sanganeri-block-printing', 'rj-culture-gangaur', 'rj-culture-teej'],
    trailIds: [],
    verificationStatus: 'verified',
    sources: [
      {
        sourceName: 'UNESCO World Heritage Centre — Jaipur City, Rajasthan',
        sourceType: 'UNESCO',
        sourceUrl: 'https://whc.unesco.org/en/list/1605'
      }
    ],
    lastVerified: '2026-08-26'
  },
  {
    id: 'rj-heritage-jantar-mantar-jaipur',
    slug: 'jantar-mantar-jaipur',
    name: 'Jantar Mantar, Jaipur',
    recordType: 'heritage',
    state: 'rajasthan',
    stateName: 'Rajasthan',
    districtOrRegion: 'Jaipur',
    category: 'unesco-heritage-sites',
    categoryName: 'UNESCO Heritage Site',
    shortDescription: 'An early-18th-century astronomical observation site in Jaipur containing a major collection of monumental masonry instruments.',
    history: 'The Jantar Mantar at Jaipur was created under Sawai Jai Singh II in the early 18th century.',
    culturalSignificance: 'UNESCO recognizes the site as an outstanding expression of astronomical skill and cosmological concepts at the end of the Mughal period.',
    architecture: 'The ensemble consists of large-scale fixed observational instruments designed for naked-eye astronomical measurement.',
    historicalPeriod: 'Early 18th century',
    unescoStatus: 'World Heritage Site',
    images: [],
    media: [],
    relatedHeritageIds: ['rj-heritage-jaipur-city'],
    relatedCultureIds: [],
    trailIds: [],
    verificationStatus: 'verified',
    sources: [
      {
        sourceName: 'UNESCO World Heritage Centre — The Jantar Mantar, Jaipur',
        sourceType: 'UNESCO',
        sourceUrl: 'https://whc.unesco.org/en/list/1338'
      }
    ],
    lastVerified: '2026-08-26'
  },
  {
    id: 'rj-heritage-hawa-mahal',
    slug: 'hawa-mahal',
    name: 'Hawa Mahal',
    recordType: 'heritage',
    state: 'rajasthan',
    stateName: 'Rajasthan',
    districtOrRegion: 'Jaipur',
    category: 'traditional-architecture',
    categoryName: 'Traditional Architecture',
    shortDescription: 'A distinctive five-storey Jaipur landmark known for its pink façade and honeycombed arrangement of screened windows.',
    history: null,
    culturalSignificance: 'Hawa Mahal is one of Jaipur’s most recognizable architectural landmarks and forms part of the historic city’s royal urban heritage.',
    architecture: 'Rajasthan Tourism describes the building as a five-storey pink-painted, honeycombed structure with numerous screened windows.',
    images: [],
    media: [],
    relatedHeritageIds: ['rj-heritage-jaipur-city'],
    relatedCultureIds: [],
    trailIds: [],
    verificationStatus: 'verified',
    sources: [
      {
        sourceName: 'Rajasthan Tourism — Famous Monuments in Rajasthan',
        sourceType: 'Government tourism',
        sourceUrl: 'https://www.tourism.rajasthan.gov.in/travel-diaries/rumisthan.html'
      }
    ],
    lastVerified: '2026-08-26'
  },
  {
    id: 'rj-heritage-city-palace-jaipur',
    slug: 'city-palace-jaipur',
    name: 'City Palace, Jaipur',
    recordType: 'heritage',
    state: 'rajasthan',
    stateName: 'Rajasthan',
    districtOrRegion: 'Jaipur',
    category: 'palaces',
    categoryName: 'Palace',
    shortDescription: 'A major royal palace complex in the heart of Jaipur’s historic city.',
    history: null,
    culturalSignificance: 'The palace complex preserves royal spaces and museum collections connected with Jaipur’s courtly heritage.',
    architecture: 'Official Rajasthan government material describes the complex as a blend of traditional Rajasthani and Mughal art and architecture, containing palaces, halls and courtyards.',
    images: [],
    media: [],
    relatedHeritageIds: ['rj-heritage-jaipur-city'],
    relatedCultureIds: [],
    trailIds: [],
    verificationStatus: 'verified',
    sources: [
      {
        sourceName: 'Government of Rajasthan — Jaipur District Environment Plan, heritage section',
        sourceType: 'Government document',
        sourceUrl: 'https://www.tourism.rajasthan.gov.in/content/dam/environment/Env/District%20Environment%20Plan/DEP_Jaipur.pdf'
      }
    ],
    lastVerified: '2026-08-26'
  },
  {
    id: 'rj-heritage-jaigarh-fort',
    slug: 'jaigarh-fort',
    name: 'Jaigarh Fort',
    recordType: 'heritage',
    state: 'rajasthan',
    stateName: 'Rajasthan',
    districtOrRegion: 'Jaipur',
    category: 'forts',
    categoryName: 'Forts',
    shortDescription: 'A heavily fortified hilltop stronghold overlooking Amber near Jaipur.',
    history: null,
    culturalSignificance: 'Jaigarh forms part of Jaipur’s interconnected defensive and royal landscape with Amber.',
    architecture: 'Rajasthan Tourism notes thick walls, watchtowers and gateways and describes its defensive relationship with Amber Fort.',
    images: [],
    media: [],
    relatedHeritageIds: ['rj-heritage-amber-fort'],
    relatedCultureIds: [],
    trailIds: [],
    verificationStatus: 'verified',
    sources: [
      {
        sourceName: 'Rajasthan Tourism — Jaipur travel diary',
        sourceType: 'Government tourism',
        sourceUrl: 'https://www.tourism.rajasthan.gov.in/travel-diaries/vikramsthan.html'
      }
    ],
    lastVerified: '2026-08-26'
  },
  {
    id: 'rj-heritage-nahargarh-fort',
    slug: 'nahargarh-fort',
    name: 'Nahargarh Fort',
    recordType: 'heritage',
    state: 'rajasthan',
    stateName: 'Rajasthan',
    districtOrRegion: 'Jaipur',
    category: 'forts',
    categoryName: 'Forts',
    shortDescription: 'A historic fort on the edge of the Aravalli Hills overlooking Jaipur.',
    history: 'Rajasthan Tourism notes that Nahargarh was originally built to defend Jaipur against invasion.',
    culturalSignificance: 'The fort forms part of Jaipur’s historic defensive landscape and provides a strong visual relationship with the walled city.',
    architecture: 'The fort occupies the Aravalli ridge above Jaipur and contains fortified structures adapted to the hill terrain.',
    images: [],
    media: [],
    relatedHeritageIds: ['rj-heritage-jaipur-city'],
    relatedCultureIds: [],
    trailIds: [],
    verificationStatus: 'verified',
    sources: [
      {
        sourceName: 'Rajasthan Tourism — Jaipur travel diary',
        sourceType: 'Government tourism',
        sourceUrl: 'https://www.tourism.rajasthan.gov.in/travel-diaries/vikramsthan.html'
      }
    ],
    lastVerified: '2026-08-26'
  },
  {
    id: 'rj-heritage-mehrangarh-fort',
    slug: 'mehrangarh-fort',
    name: 'Mehrangarh Fort',
    recordType: 'heritage',
    state: 'rajasthan',
    stateName: 'Rajasthan',
    districtOrRegion: 'Jodhpur',
    category: 'forts',
    categoryName: 'Forts',
    shortDescription: 'A monumental hill fort dominating the historic skyline of Jodhpur.',
    history: null,
    culturalSignificance: 'Mehrangarh is one of Jodhpur’s defining heritage landmarks and remains closely connected with Marwar’s royal and cultural identity.',
    architecture: 'The fortress rises above Jodhpur with massive defensive walls, gateways, palatial interiors and museum collections.',
    images: [],
    media: [],
    relatedHeritageIds: ['rj-heritage-umaid-bhawan-palace'],
    relatedCultureIds: ['rj-culture-marwar-festival'],
    trailIds: [],
    verificationStatus: 'verified',
    sources: [
      {
        sourceName: 'Rajasthan Tourism — Rajasthan travel material / Jodhpur',
        sourceType: 'Government tourism',
        sourceUrl: 'https://www.tourism.rajasthan.gov.in/tourist-destinations.html'
      }
    ],
    lastVerified: '2026-08-26'
  },
  {
    id: 'rj-heritage-umaid-bhawan-palace',
    slug: 'umaid-bhawan-palace',
    name: 'Umaid Bhawan Palace',
    recordType: 'heritage',
    state: 'rajasthan',
    stateName: 'Rajasthan',
    districtOrRegion: 'Jodhpur',
    category: 'palaces',
    categoryName: 'Palace',
    shortDescription: 'A major royal palace of Jodhpur and one of the city’s defining architectural landmarks.',
    history: null,
    culturalSignificance: 'The palace forms part of Jodhpur’s continuing royal heritage and contains museum and hospitality functions.',
    architecture: 'Rajasthan Tourism identifies Umaid Bhawan Palace among the state’s major royal structures.',
    images: [],
    media: [],
    relatedHeritageIds: ['rj-heritage-mehrangarh-fort'],
    relatedCultureIds: ['rj-culture-marwar-festival'],
    trailIds: [],
    verificationStatus: 'verified',
    sources: [
      {
        sourceName: 'Rajasthan Tourism — Best Time to Visit Rajasthan',
        sourceType: 'Government tourism',
        sourceUrl: 'https://www.tourism.rajasthan.gov.in/best-time-to-visit.html'
      }
    ],
    lastVerified: '2026-08-26'
  },
  {
    id: 'rj-heritage-city-palace-udaipur',
    slug: 'city-palace-udaipur',
    name: 'City Palace, Udaipur',
    recordType: 'heritage',
    state: 'rajasthan',
    stateName: 'Rajasthan',
    districtOrRegion: 'Udaipur',
    category: 'palaces',
    categoryName: 'Palace',
    shortDescription: 'A large royal palace complex overlooking Lake Pichola in Udaipur.',
    history: 'Rajasthan Tourism states that construction began in 1599 under Maharana Udai Singh II and that later rulers continued to add structures.',
    culturalSignificance: 'The palace is a major expression of Mewar’s royal heritage and Udaipur’s historic identity.',
    architecture: 'The complex developed as a group of interconnected palaces while maintaining an overall visual unity.',
    historicalPeriod: 'Construction began in 1599',
    images: [],
    media: [],
    relatedHeritageIds: [],
    relatedCultureIds: ['rj-culture-mewar-festival'],
    trailIds: [],
    verificationStatus: 'verified',
    sources: [
      {
        sourceName: 'Rajasthan Tourism — Famous Monuments in Rajasthan',
        sourceType: 'Government tourism',
        sourceUrl: 'https://www.tourism.rajasthan.gov.in/travel-diaries/rumisthan.html'
      }
    ],
    lastVerified: '2026-08-26'
  },
  {
    id: 'rj-heritage-junagarh-fort',
    slug: 'junagarh-fort',
    name: 'Junagarh Fort',
    recordType: 'heritage',
    state: 'rajasthan',
    stateName: 'Rajasthan',
    districtOrRegion: 'Bikaner',
    category: 'forts',
    categoryName: 'Forts',
    shortDescription: 'A major fortified royal complex in Bikaner and an important landmark of the city’s historic identity.',
    history: null,
    culturalSignificance: 'Junagarh represents Bikaner’s royal and military heritage.',
    architecture: 'The fort complex contains palaces, courtyards and richly decorated interiors.',
    images: [],
    media: [],
    relatedHeritageIds: [],
    relatedCultureIds: ['rj-culture-bikaner-camel-festival'],
    trailIds: [],
    verificationStatus: 'verified',
    sources: [
      {
        sourceName: 'Rajasthan Tourism — Tourist Destinations / Bikaner',
        sourceType: 'Government tourism',
        sourceUrl: 'https://www.tourism.rajasthan.gov.in/tourist-destinations.html'
      }
    ],
    lastVerified: '2026-08-26'
  },
  {
    id: 'rj-heritage-chand-baori',
    slug: 'chand-baori',
    name: 'Chand Baori, Abhaneri',
    recordType: 'heritage',
    state: 'rajasthan',
    stateName: 'Rajasthan',
    districtOrRegion: 'Abhaneri, Dausa district',
    category: 'traditional-architecture',
    categoryName: 'Traditional Architecture',
    shortDescription: 'A monumental historic stepwell at Abhaneri and one of Rajasthan’s most recognizable water-architecture sites.',
    history: null,
    culturalSignificance: 'The stepwell is a defining heritage landmark of Abhaneri and provides an important example of Rajasthan’s traditional water architecture.',
    architecture: 'Rajasthan Tourism describes Chand Baori as one of the largest stepwells and notes that it was built more than a thousand years ago.',
    images: [],
    media: [],
    relatedHeritageIds: [],
    relatedCultureIds: ['rj-culture-abhaneri-festival'],
    trailIds: [],
    verificationStatus: 'verified',
    sources: [
      {
        sourceName: 'Rajasthan Tourism — Abhaneri Festival',
        sourceType: 'Government tourism',
        sourceUrl: 'https://www.tourism.rajasthan.gov.in/fairs-and-festivals.html'
      }
    ],
    lastVerified: '2026-08-26'
  },
  {
    id: 'rj-heritage-dilwara-jain-temples',
    slug: 'dilwara-jain-temples',
    name: 'Dilwara Jain Temples',
    recordType: 'heritage',
    state: 'rajasthan',
    stateName: 'Rajasthan',
    districtOrRegion: 'Mount Abu, Sirohi district',
    category: 'historic-religious-structures',
    categoryName: 'Historic Religious Structures',
    shortDescription: 'A celebrated Jain temple complex at Mount Abu and one of Rajasthan’s major religious heritage attractions.',
    history: null,
    culturalSignificance: 'The temples form an important centre of Jain pilgrimage and religious heritage in Rajasthan.',
    architecture: 'Rajasthan Tourism identifies the Dilwara Jain temples among the state’s significant religious and architectural attractions.',
    images: [],
    media: [],
    relatedHeritageIds: [],
    relatedCultureIds: [],
    trailIds: [],
    verificationStatus: 'verified',
    sources: [
      {
        sourceName: 'Rajasthan Tourism — Best Time to Visit Rajasthan',
        sourceType: 'Government tourism',
        sourceUrl: 'https://www.tourism.rajasthan.gov.in/best-time-to-visit.html'
      }
    ],
    lastVerified: '2026-08-26'
  },
  {
    id: 'rj-heritage-ranakpur-jain-temple',
    slug: 'ranakpur-jain-temple',
    name: 'Ranakpur Jain Temple',
    recordType: 'heritage',
    state: 'rajasthan',
    stateName: 'Rajasthan',
    districtOrRegion: 'Ranakpur, Pali district',
    category: 'historic-religious-structures',
    categoryName: 'Historic Religious Structures',
    shortDescription: 'A major Jain pilgrimage and temple heritage destination in Rajasthan.',
    history: null,
    culturalSignificance: 'Ranakpur is one of Rajasthan’s important centres of Jain religious heritage.',
    architecture: 'The temple complex is known for elaborate marble architecture and richly carved structural elements.',
    images: [],
    media: [],
    relatedHeritageIds: [],
    relatedCultureIds: ['rj-culture-ranakpur-festival'],
    trailIds: [],
    verificationStatus: 'verified',
    sources: [
      {
        sourceName: 'Rajasthan Tourism — Ranakpur search / festival listings',
        sourceType: 'Government tourism',
        sourceUrl: 'https://www.tourism.rajasthan.gov.in/content/rajasthan-tourism/en/search.html?q=ranakpur'
      }
    ],
    lastVerified: '2026-08-26'
  },
  {
    id: 'rj-heritage-ajmer-sharif-dargah',
    slug: 'ajmer-sharif-dargah',
    name: 'Ajmer Sharif Dargah',
    recordType: 'heritage',
    state: 'rajasthan',
    stateName: 'Rajasthan',
    districtOrRegion: 'Ajmer',
    category: 'historic-religious-structures',
    categoryName: 'Historic Religious Structures',
    shortDescription: 'A major Sufi pilgrimage destination in Ajmer and one of Rajasthan’s most important living religious heritage sites.',
    history: null,
    culturalSignificance: 'The dargah is central to Ajmer’s identity as a major pilgrimage city.',
    architecture: null,
    images: [],
    media: [],
    relatedHeritageIds: [],
    relatedCultureIds: [],
    trailIds: [],
    verificationStatus: 'verified',
    sources: [
      {
        sourceName: 'Rajasthan Tourism — Tourist Destinations / Ajmer',
        sourceType: 'Government tourism',
        sourceUrl: 'https://www.tourism.rajasthan.gov.in/tourist-destinations.html'
      }
    ],
    lastVerified: '2026-08-26'
  },
  {
    id: 'rj-heritage-bundi-palace',
    slug: 'bundi-palace',
    name: 'Bundi Palace',
    recordType: 'heritage',
    state: 'rajasthan',
    stateName: 'Rajasthan',
    districtOrRegion: 'Bundi',
    category: 'palaces',
    categoryName: 'Palace',
    shortDescription: 'A historic palace complex in Bundi, a town widely recognized for palaces, forts and stepwells.',
    history: null,
    culturalSignificance: 'Bundi’s palace heritage contributes to the town’s distinctive architectural and artistic character.',
    architecture: 'The palace complex forms part of Bundi’s dense historic landscape of palaces, forts and traditional urban architecture.',
    images: [],
    media: [],
    relatedHeritageIds: ['rj-heritage-bundi-stepwells'],
    relatedCultureIds: ['rj-culture-bundi-festival'],
    trailIds: [],
    verificationStatus: 'verified',
    sources: [
      {
        sourceName: 'Rajasthan Tourism — Tourist Destinations / Bundi',
        sourceType: 'Government tourism',
        sourceUrl: 'https://www.tourism.rajasthan.gov.in/tourist-destinations.html'
      }
    ],
    lastVerified: '2026-08-26'
  },
  {
    id: 'rj-heritage-bundi-stepwells',
    slug: 'bundi-stepwell-heritage',
    name: 'Bundi Stepwell Heritage',
    recordType: 'heritage',
    state: 'rajasthan',
    stateName: 'Rajasthan',
    districtOrRegion: 'Bundi',
    category: 'traditional-architecture',
    categoryName: 'Traditional Architecture',
    shortDescription: 'The historic stepwells of Bundi form a distinctive part of the town’s traditional water architecture.',
    history: null,
    culturalSignificance: 'Rajasthan Tourism promotes Bundi as the \'city of stepwells\', highlighting this water architecture as a defining feature of the town.',
    architecture: 'Stepwells combine access to water with carefully constructed descending architectural forms suited to Rajasthan’s environment.',
    images: [],
    media: [],
    relatedHeritageIds: ['rj-heritage-bundi-palace'],
    relatedCultureIds: ['rj-culture-bundi-festival'],
    trailIds: [],
    verificationStatus: 'verified',
    sources: [
      {
        sourceName: 'Rajasthan Tourism — Tourist Destinations / Bundi',
        sourceType: 'Government tourism',
        sourceUrl: 'https://www.tourism.rajasthan.gov.in/tourist-destinations.html'
      }
    ],
    lastVerified: '2026-08-26'
  },
  {
    id: 'rj-heritage-albert-hall-museum',
    slug: 'albert-hall-museum',
    name: 'Albert Hall Museum',
    recordType: 'heritage',
    state: 'rajasthan',
    stateName: 'Rajasthan',
    districtOrRegion: 'Jaipur',
    category: 'museums',
    categoryName: 'Museums',
    shortDescription: 'A major museum landmark in Jaipur included among the historic city’s prominent cultural attractions.',
    history: null,
    culturalSignificance: 'The museum contributes to Jaipur’s institutional heritage and public presentation of art, history and material culture.',
    architecture: null,
    images: [],
    media: [],
    relatedHeritageIds: ['rj-heritage-jaipur-city'],
    relatedCultureIds: [],
    trailIds: [],
    verificationStatus: 'verified',
    sources: [
      {
        sourceName: 'Rajasthan Tourism — Rajasthan travel diary / Jaipur',
        sourceType: 'Government tourism',
        sourceUrl: 'https://www.tourism.rajasthan.gov.in/travel-diaries/rodiesthan.html'
      }
    ],
    lastVerified: '2026-08-26'
  },
  {
    id: 'rj-heritage-pushkar',
    slug: 'pushkar',
    name: 'Pushkar',
    recordType: 'heritage',
    state: 'rajasthan',
    stateName: 'Rajasthan',
    districtOrRegion: 'Ajmer district',
    category: 'historic-places',
    categoryName: 'Historic Place',
    shortDescription: 'A historic pilgrimage town centred on Pushkar Lake and strongly associated with fairs, festivities and religious traditions.',
    history: null,
    culturalSignificance: 'Rajasthan Tourism describes Pushkar as one of India’s oldest existing cities and as a town of fairs and festivities.',
    architecture: 'The cultural landscape includes ghats, temples and the historic settlement around Pushkar Lake.',
    images: [],
    media: [],
    relatedHeritageIds: [],
    relatedCultureIds: ['rj-culture-pushkar-fair'],
    trailIds: [],
    verificationStatus: 'verified',
    sources: [
      {
        sourceName: 'Rajasthan Tourism — Tourist Destinations / Pushkar',
        sourceType: 'Government tourism',
        sourceUrl: 'https://www.tourism.rajasthan.gov.in/tourist-destinations.html'
      }
    ],
    lastVerified: '2026-08-26'
  },

  // TAMIL NADU VERIFIED (20 Records)
  {
    id: 'tn-heritage-mahabalipuram',
    slug: 'group-of-monuments-at-mahabalipuram',
    name: 'Group of Monuments at Mahabalipuram',
    recordType: 'heritage',
    state: 'tamil-nadu',
    stateName: 'Tamil Nadu',
    districtOrRegion: 'Chengalpattu district / Coromandel Coast',
    category: 'unesco-heritage-sites',
    categoryName: 'UNESCO Heritage Site',
    shortDescription: 'A Pallava-period ensemble of rock-cut caves, monolithic rathas, open-air reliefs and structural temples on the Coromandel Coast.',
    history: 'UNESCO states that the monuments were created under the Pallava rulers in the 7th and 8th centuries.',
    culturalSignificance: 'The site is an exceptional testimony to Pallava civilization and to experimentation in rock-cut and structural temple architecture.',
    architecture: 'The ensemble includes mandapas, monolithic rathas, large rock reliefs such as the Descent of the Ganges, structural temples including the Shore Temple, and excavated remains.',
    historicalPeriod: '7th–8th centuries',
    unescoStatus: 'World Heritage Site',
    images: [],
    media: [],
    relatedHeritageIds: [],
    relatedCultureIds: ['tn-culture-mahabalipuram-stone-sculpture'],
    trailIds: [],
    verificationStatus: 'verified',
    sources: [
      {
        sourceName: 'UNESCO World Heritage Centre — Group of Monuments at Mahabalipuram',
        sourceType: 'UNESCO',
        sourceUrl: 'https://whc.unesco.org/en/list/249/'
      }
    ],
    lastVerified: '2026-08-26'
  },
  {
    id: 'tn-heritage-brihadisvara-thanjavur',
    slug: 'brihadisvara-temple-thanjavur',
    name: 'Brihadisvara Temple, Thanjavur',
    recordType: 'heritage',
    state: 'tamil-nadu',
    stateName: 'Tamil Nadu',
    districtOrRegion: 'Thanjavur',
    category: 'unesco-heritage-sites',
    categoryName: 'UNESCO Heritage Site',
    shortDescription: 'A monumental Chola temple at Thanjavur and one of the three components of UNESCO’s Great Living Chola Temples.',
    history: 'UNESCO states that the temple was inaugurated under Chola king Rajaraja I and consecrated in 1009–1010 CE.',
    culturalSignificance: 'The temple is a living place of worship and an outstanding testimony to Chola architecture, sculpture, painting and Tamil cultural traditions.',
    architecture: 'The complex includes a massive vimana, enclosure, gopura, sculptural decoration and mural paintings.',
    historicalPeriod: 'Early 11th century',
    unescoStatus: 'Component of the Great Living Chola Temples World Heritage Site',
    images: [],
    media: [],
    relatedHeritageIds: ['tn-heritage-gangaikondacholapuram', 'tn-heritage-airavatesvara-darasuram'],
    relatedCultureIds: ['tn-culture-bharatanatyam', 'tn-culture-thanjavur-painting'],
    trailIds: [],
    verificationStatus: 'verified',
    sources: [
      {
        sourceName: 'UNESCO World Heritage Centre — Great Living Chola Temples',
        sourceType: 'UNESCO',
        sourceUrl: 'https://whc.unesco.org/en/list/250'
      }
    ],
    lastVerified: '2026-08-26'
  },
  {
    id: 'tn-heritage-gangaikondacholapuram',
    slug: 'brihadisvara-temple-gangaikondacholapuram',
    name: 'Brihadisvara Temple, Gangaikondacholapuram',
    recordType: 'heritage',
    state: 'tamil-nadu',
    stateName: 'Tamil Nadu',
    districtOrRegion: 'Ariyalur region',
    category: 'unesco-heritage-sites',
    categoryName: 'UNESCO Heritage Site',
    shortDescription: 'A major Chola temple built by Rajendra I and one of the three Great Living Chola Temples.',
    history: 'UNESCO states that the temple built by Rajendra I was completed in 1035.',
    culturalSignificance: 'The temple forms part of the UNESCO ensemble that demonstrates the development of Chola architecture and Tamil civilization.',
    architecture: 'UNESCO notes its 53-metre vimana with recessed corners and a graceful upward curve, along with major sculpture and bronze traditions.',
    historicalPeriod: '11th century',
    unescoStatus: 'Component of the Great Living Chola Temples World Heritage Site',
    images: [],
    media: [],
    relatedHeritageIds: ['tn-heritage-brihadisvara-thanjavur', 'tn-heritage-airavatesvara-darasuram'],
    relatedCultureIds: [],
    trailIds: [],
    verificationStatus: 'verified',
    sources: [
      {
        sourceName: 'UNESCO World Heritage Centre — Great Living Chola Temples',
        sourceType: 'UNESCO',
        sourceUrl: 'https://whc.unesco.org/en/list/250'
      }
    ],
    lastVerified: '2026-08-26'
  },
  {
    id: 'tn-heritage-airavatesvara-darasuram',
    slug: 'airavatesvara-temple-darasuram',
    name: 'Airavatesvara Temple, Darasuram',
    recordType: 'heritage',
    state: 'tamil-nadu',
    stateName: 'Tamil Nadu',
    districtOrRegion: 'Darasuram / Thanjavur region',
    category: 'unesco-heritage-sites',
    categoryName: 'UNESCO Heritage Site',
    shortDescription: 'A highly ornate Chola temple at Darasuram and one of the three Great Living Chola Temples.',
    history: 'UNESCO states that Airavatesvara was built by Chola king Rajaraja II in the 12th century.',
    culturalSignificance: 'The temple forms part of the UNESCO ensemble documenting the mature development of Chola architecture and Tamil culture.',
    architecture: 'UNESCO highlights its ornate sculptural execution and chariot-like front mandapa.',
    historicalPeriod: '12th century',
    unescoStatus: 'Component of the Great Living Chola Temples World Heritage Site',
    images: [],
    media: [],
    relatedHeritageIds: ['tn-heritage-brihadisvara-thanjavur', 'tn-heritage-gangaikondacholapuram'],
    relatedCultureIds: [],
    trailIds: [],
    verificationStatus: 'verified',
    sources: [
      {
        sourceName: 'UNESCO World Heritage Centre — Great Living Chola Temples',
        sourceType: 'UNESCO',
        sourceUrl: 'https://whc.unesco.org/en/list/250'
      }
    ],
    lastVerified: '2026-08-26'
  },
  {
    id: 'tn-heritage-nilgiri-mountain-railway',
    slug: 'nilgiri-mountain-railway',
    name: 'Nilgiri Mountain Railway',
    recordType: 'heritage',
    state: 'tamil-nadu',
    stateName: 'Tamil Nadu',
    districtOrRegion: 'The Nilgiris',
    category: 'unesco-heritage-sites',
    categoryName: 'UNESCO Heritage Site',
    shortDescription: 'A historic mountain railway in Tamil Nadu and one of the three components of UNESCO’s Mountain Railways of India.',
    history: 'UNESCO states that work began in 1891 and the railway was completed in 1908.',
    culturalSignificance: 'The operating railway is a living example of late-19th and early-20th-century mountain railway engineering.',
    architecture: 'The 45.88-km metre-gauge line uses a rack-and-pinion traction arrangement to negotiate steep gradients.',
    historicalPeriod: 'Completed in 1908',
    unescoStatus: 'Component of the Mountain Railways of India World Heritage Site',
    images: [],
    media: [],
    relatedHeritageIds: [],
    relatedCultureIds: [],
    trailIds: [],
    verificationStatus: 'verified',
    sources: [
      {
        sourceName: 'UNESCO World Heritage Centre — Mountain Railways of India',
        sourceType: 'UNESCO',
        sourceUrl: 'https://whc.unesco.org/en/list/944/'
      }
    ],
    lastVerified: '2026-08-26'
  },
  {
    id: 'tn-heritage-srirangam',
    slug: 'sri-ranganathaswamy-temple-srirangam',
    name: 'Sri Ranganathaswamy Temple, Srirangam',
    recordType: 'heritage',
    state: 'tamil-nadu',
    stateName: 'Tamil Nadu',
    districtOrRegion: 'Tiruchirappalli',
    category: 'historic-religious-structures',
    categoryName: 'Historic Religious Structures',
    shortDescription: 'A vast living temple complex at Srirangam and one of Tamil Nadu’s major religious heritage centres.',
    history: 'The Tiruchirappalli City Municipal Corporation notes that the temple was expanded by multiple dynasties including Cholas, Cheras, Pandyas, Hoysalas, Vijayanagara rulers and Madurai Nayaks.',
    culturalSignificance: 'Srirangam is a major Vaishnavite pilgrimage centre and remains an active religious complex.',
    architecture: 'The municipal source describes 21 gopurams, including a 72-metre, 13-tiered Rajagopuram.',
    images: [],
    media: [],
    relatedHeritageIds: [],
    relatedCultureIds: [],
    trailIds: [],
    verificationStatus: 'verified',
    sources: [
      {
        sourceName: 'Tiruchirappalli City Municipal Corporation — Places of Interest',
        sourceType: 'Government municipal',
        sourceUrl: 'https://www.tnurbantree.tn.gov.in/trichy/en/places-of-interest/'
      }
    ],
    lastVerified: '2026-08-26'
  },
  {
    id: 'tn-heritage-rockfort-trichy',
    slug: 'rockfort-tiruchirappalli',
    name: 'Rockfort, Tiruchirappalli',
    recordType: 'heritage',
    state: 'tamil-nadu',
    stateName: 'Tamil Nadu',
    districtOrRegion: 'Tiruchirappalli',
    category: 'historic-places',
    categoryName: 'Historic Place',
    shortDescription: 'A prominent rock outcrop and historic religious-military landmark in Tiruchirappalli.',
    history: 'The Tiruchirappalli City Municipal Corporation notes that the site’s Ucchi Pillayar Temple was also used as a military fort by the Nayaks for a period.',
    culturalSignificance: 'Rockfort is a defining landmark of Tiruchirappalli and combines sacred and military heritage.',
    architecture: 'The 83-metre rock carries temples, while Pallava-period cave temples are located on its southern face.',
    images: [],
    media: [],
    relatedHeritageIds: [],
    relatedCultureIds: [],
    trailIds: [],
    verificationStatus: 'verified',
    sources: [
      {
        sourceName: 'Tiruchirappalli City Municipal Corporation — How to Reach / Rock Fort',
        sourceType: 'Government municipal',
        sourceUrl: 'https://www.tnurbantree.tn.gov.in/trichy/en/how-to-reach/'
      }
    ],
    lastVerified: '2026-08-26'
  },
  {
    id: 'tn-heritage-kallanai',
    slug: 'kallanai-grand-anicut',
    name: 'Kallanai (Grand Anicut)',
    recordType: 'heritage',
    state: 'tamil-nadu',
    stateName: 'Tamil Nadu',
    districtOrRegion: 'Tiruchirappalli region / Cauvery',
    category: 'traditional-architecture',
    categoryName: 'Traditional Architecture',
    shortDescription: 'An ancient stone water-diversion structure across the Cauvery that remains in use.',
    history: 'The Tiruchirappalli City Municipal Corporation attributes the Grand Anicut to Karikala Chola in the 2nd century CE.',
    culturalSignificance: 'Kallanai represents the long continuity of water management and engineering traditions in the Cauvery delta.',
    architecture: 'The municipal source describes the stone structure as approximately 329 metres long and 20 metres wide.',
    historicalPeriod: '2nd century CE tradition',
    images: [],
    media: [],
    relatedHeritageIds: [],
    relatedCultureIds: [],
    trailIds: [],
    verificationStatus: 'verified',
    sources: [
      {
        sourceName: 'Tiruchirappalli City Municipal Corporation — Places of Interest',
        sourceType: 'Government municipal',
        sourceUrl: 'https://www.tnurbantree.tn.gov.in/trichy/en/places-of-interest/'
      }
    ],
    lastVerified: '2026-08-26'
  },
  {
    id: 'tn-heritage-vellore-fort',
    slug: 'vellore-fort',
    name: 'Vellore Fort',
    recordType: 'heritage',
    state: 'tamil-nadu',
    stateName: 'Tamil Nadu',
    districtOrRegion: 'Vellore',
    category: 'forts',
    categoryName: 'Forts',
    shortDescription: 'A 16th-century granite fort surrounded by a deep moat in the heart of Vellore.',
    history: 'Vellore Corporation states that the fort was built in the 16th century by Bommi and Thimma Reddy during the Vijayanagara period and later passed through several rulers before British control.',
    culturalSignificance: 'The fort is associated with multiple phases of South Indian political history and later British rule.',
    architecture: 'The municipal source describes it as an excellent example of military architecture built in granite and protected by a deep moat.',
    historicalPeriod: '16th century',
    images: [],
    media: [],
    relatedHeritageIds: [],
    relatedCultureIds: [],
    trailIds: [],
    verificationStatus: 'verified',
    sources: [
      {
        sourceName: 'Vellore Corporation — Places of Interest',
        sourceType: 'Government municipal',
        sourceUrl: 'https://www.tnurbantree.tn.gov.in/vellore/places-of-interest/'
      }
    ],
    lastVerified: '2026-08-26'
  },
  {
    id: 'tn-heritage-kanchipuram-kailasanathar',
    slug: 'kailasanathar-temple-kanchipuram',
    name: 'Kailasanathar Temple, Kanchipuram',
    recordType: 'heritage',
    state: 'tamil-nadu',
    stateName: 'Tamil Nadu',
    districtOrRegion: 'Kanchipuram',
    category: 'historic-religious-structures',
    categoryName: 'Historic Religious Structures',
    shortDescription: 'An 8th-century Pallava temple in Kanchipuram and an important example of early Dravidian temple architecture.',
    history: 'Kanchipuram City Municipal Corporation identifies the temple as a Pallava construction of the 8th century.',
    culturalSignificance: 'The temple forms part of Kanchipuram’s long religious and architectural heritage.',
    architecture: 'The municipal source notes affinities between its architecture and the Shore Temple at Mamallapuram.',
    historicalPeriod: '8th century',
    images: [],
    media: [],
    relatedHeritageIds: ['tn-heritage-mahabalipuram'],
    relatedCultureIds: [],
    trailIds: [],
    verificationStatus: 'verified',
    sources: [
      {
        sourceName: 'Kancheepuram City Municipal Corporation — Places of Interest',
        sourceType: 'Government municipal',
        sourceUrl: 'https://www.tnurbantree.tn.gov.in/kancheepuram/places-of-interest/'
      }
    ],
    lastVerified: '2026-08-26'
  },
  {
    id: 'tn-heritage-kanchipuram-city',
    slug: 'kanchipuram-historic-city',
    name: 'Kanchipuram',
    recordType: 'heritage',
    state: 'tamil-nadu',
    stateName: 'Tamil Nadu',
    districtOrRegion: 'Kanchipuram',
    category: 'historic-places',
    categoryName: 'Historic Place',
    shortDescription: 'A historic Tamil city with long-standing importance in religion, learning, temple architecture and silk weaving.',
    history: 'Kancheepuram City Municipal Corporation states that the city served as the Pallava capital from the 6th to 8th centuries and later came under Chola, Vijayanagara, Mughal and British rule.',
    culturalSignificance: 'The city has been a centre of Tamil learning, culture and religious life for centuries.',
    architecture: 'Its historic identity is strongly expressed through major temples representing Dravidian architecture.',
    images: [],
    media: [],
    relatedHeritageIds: ['tn-heritage-kanchipuram-kailasanathar'],
    relatedCultureIds: ['tn-culture-kanchipuram-silk'],
    trailIds: [],
    verificationStatus: 'verified',
    sources: [
      {
        sourceName: 'Kancheepuram City Municipal Corporation — About Us',
        sourceType: 'Government municipal',
        sourceUrl: 'https://www.tnurbantree.tn.gov.in/kancheepuram/about-us/'
      }
    ],
    lastVerified: '2026-08-26'
  },
  {
    id: 'tn-heritage-rameswaram',
    slug: 'rameswaram',
    name: 'Rameswaram',
    recordType: 'heritage',
    state: 'tamil-nadu',
    stateName: 'Tamil Nadu',
    districtOrRegion: 'Ramanathapuram district',
    category: 'historic-religious-structures',
    categoryName: 'Historic Religious Structures',
    shortDescription: 'One of Tamil Nadu’s major pilgrimage destinations, centred on the Ramanathaswamy Temple and island sacred landscape.',
    history: null,
    culturalSignificance: 'Tamil Nadu government tourism planning identifies Rameswaram among the state’s leading pilgrimage centres.',
    architecture: null,
    images: [],
    media: [],
    relatedHeritageIds: [],
    relatedCultureIds: [],
    trailIds: [],
    verificationStatus: 'verified',
    sources: [
      {
        sourceName: 'Vision Tamil Nadu 2023 — Tourism destinations',
        sourceType: 'Government planning document',
        sourceUrl: 'https://www.tnbudget.tn.gov.in/tnweb_files/vision23/TN%20VISION%202023%28PHASE%202%29.pdf'
      }
    ],
    lastVerified: '2026-08-26'
  },
  {
    id: 'tn-heritage-madurai',
    slug: 'madurai-heritage-city',
    name: 'Madurai',
    recordType: 'heritage',
    state: 'tamil-nadu',
    stateName: 'Tamil Nadu',
    districtOrRegion: 'Madurai',
    category: 'historic-places',
    categoryName: 'Historic Place',
    shortDescription: 'A major historic and pilgrimage city repeatedly identified in Tamil Nadu government tourism planning as a key cultural destination.',
    history: null,
    culturalSignificance: 'Government tourism-planning material places Madurai among Tamil Nadu’s principal pilgrimage and heritage destinations.',
    architecture: null,
    images: [],
    media: [],
    relatedHeritageIds: [],
    relatedCultureIds: ['tn-culture-chithirai-festival', 'tn-culture-madurai-sungudi', 'tn-culture-jallikattu'],
    trailIds: [],
    verificationStatus: 'verified',
    sources: [
      {
        sourceName: 'Vision Tamil Nadu 2023 — Tourism',
        sourceType: 'Government planning document',
        sourceUrl: 'https://tnbudget.tn.gov.in/tnweb_files/vision23/TN%20VISION%202023%28PHASE%202%29.pdf'
      }
    ],
    lastVerified: '2026-08-26'
  },
  {
    id: 'tn-heritage-chidambaram',
    slug: 'chidambaram',
    name: 'Chidambaram',
    recordType: 'heritage',
    state: 'tamil-nadu',
    stateName: 'Tamil Nadu',
    districtOrRegion: 'Cuddalore district',
    category: 'historic-religious-structures',
    categoryName: 'Historic Religious Structures',
    shortDescription: 'A major Tamil Nadu pilgrimage centre associated with the Nataraja temple and the state’s temple heritage.',
    history: null,
    culturalSignificance: 'Tamil Nadu government tourism planning identifies Chidambaram among the state’s important pilgrimage centres.',
    architecture: null,
    images: [],
    media: [],
    relatedHeritageIds: [],
    relatedCultureIds: ['tn-culture-bharatanatyam'],
    trailIds: [],
    verificationStatus: 'verified',
    sources: [
      {
        sourceName: 'Vision Tamil Nadu 2023 — Tourism destinations',
        sourceType: 'Government planning document',
        sourceUrl: 'https://www.tnbudget.tn.gov.in/tnweb_files/vision23/TN%20VISION%202023%28PHASE%202%29.pdf'
      }
    ],
    lastVerified: '2026-08-26'
  },
  {
    id: 'tn-heritage-gingee-fort',
    slug: 'gingee-fort',
    name: 'Gingee Fort',
    recordType: 'heritage',
    state: 'tamil-nadu',
    stateName: 'Tamil Nadu',
    districtOrRegion: 'Viluppuram region',
    category: 'forts',
    categoryName: 'Forts',
    shortDescription: 'One of the four major forts of Tamil Nadu identified in official state educational material.',
    history: null,
    culturalSignificance: 'Gingee Fort forms part of Tamil Nadu’s major military-heritage landscape.',
    architecture: null,
    images: [],
    media: [],
    relatedHeritageIds: [],
    relatedCultureIds: [],
    trailIds: [],
    verificationStatus: 'verified',
    sources: [
      {
        sourceName: 'Government of Tamil Nadu — Tourism/Environmental Studies syllabus: Forts of Tamil Nadu',
        sourceType: 'Government educational source',
        sourceUrl: 'https://www.trb.tn.gov.in/admin/pdf/1447547983ESSP1.pdf'
      }
    ],
    lastVerified: '2026-08-26'
  },
  {
    id: 'tn-heritage-fort-st-george',
    slug: 'fort-st-george',
    name: 'Fort St. George',
    recordType: 'heritage',
    state: 'tamil-nadu',
    stateName: 'Tamil Nadu',
    districtOrRegion: 'Chennai',
    category: 'forts',
    categoryName: 'Forts',
    shortDescription: 'A major historic fort in Chennai and one of the four principal forts highlighted in Tamil Nadu government educational material.',
    history: 'Government medical-college historical material notes the construction of Fort St. George in 1640 following the founding of Madras.',
    culturalSignificance: 'The fort is closely associated with the early colonial history of Chennai and today remains part of the state’s administrative landscape.',
    architecture: null,
    historicalPeriod: '17th century',
    images: [],
    media: [],
    relatedHeritageIds: [],
    relatedCultureIds: [],
    trailIds: [],
    verificationStatus: 'verified',
    sources: [
      {
        sourceName: 'Government of Tamil Nadu — Tourism/Environmental Studies syllabus: Forts of Tamil Nadu',
        sourceType: 'Government educational source',
        sourceUrl: 'https://www.trb.tn.gov.in/admin/pdf/1447547983ESSP1.pdf'
      },
      {
        sourceName: 'Madras Medical College / Government General Hospital — History',
        sourceType: 'Government institutional',
        sourceUrl: 'https://www.mmcrgggh.tn.gov.in/ords/r/wsmmc/mmc12055555/home'
      }
    ],
    lastVerified: '2026-08-26'
  },
  {
    id: 'tn-heritage-keezhadi',
    slug: 'keezhadi-archaeological-site',
    name: 'Keezhadi Archaeological Site',
    recordType: 'heritage',
    state: 'tamil-nadu',
    stateName: 'Tamil Nadu',
    districtOrRegion: 'Sivaganga district',
    category: 'archaeological-sites',
    categoryName: 'Archaeological Site',
    shortDescription: 'A major archaeological excavation site in Sivaganga district central to current research on early Tamil settlement history.',
    history: null,
    culturalSignificance: 'Tamil Nadu government budget documents identify Keezhadi as a major excavation site and describe plans for museums and an open-air presentation of excavated structures.',
    architecture: 'Government budget material specifically refers to excavated brick structures, ring wells and factory zones.',
    images: [],
    media: [],
    relatedHeritageIds: [],
    relatedCultureIds: [],
    trailIds: [],
    verificationStatus: 'verified',
    sources: [
      {
        sourceName: 'Government of Tamil Nadu — Budget Speech 2024–25',
        sourceType: 'Government budget document',
        sourceUrl: 'https://tnbudget.tn.gov.in/tnweb_files/BS_2024_25_ENG_FINAL.pdf'
      },
      {
        sourceName: 'Government of Tamil Nadu — Budget Speech 2025–26',
        sourceType: 'Government budget document',
        sourceUrl: 'https://tnbudget.tn.gov.in/tnweb_files/BS_2025_26_ENG_FINAL.pdf'
      }
    ],
    lastVerified: '2026-08-26'
  },
  {
    id: 'tn-heritage-adichanallur',
    slug: 'adichanallur',
    name: 'Adichanallur',
    recordType: 'heritage',
    state: 'tamil-nadu',
    stateName: 'Tamil Nadu',
    districtOrRegion: 'Thoothukudi district',
    category: 'archaeological-sites',
    categoryName: 'Archaeological Site',
    shortDescription: 'A major archaeological site of Tamil Nadu associated with the state’s Iron Age and archaeological research.',
    history: null,
    culturalSignificance: 'Tamil Nadu government educational and budget documents identify Adichanallur as an important archaeological site and connect its excavated material with the planned Porunai Museum.',
    architecture: null,
    images: [],
    media: [],
    relatedHeritageIds: [],
    relatedCultureIds: [],
    trailIds: [],
    verificationStatus: 'verified',
    sources: [
      {
        sourceName: 'Government of Tamil Nadu — TNTET/History syllabus',
        sourceType: 'Government educational source',
        sourceUrl: 'https://www.trb.tn.gov.in/admin/pdf/6585818267TNTET%20Paper%20II.pdf'
      },
      {
        sourceName: 'Governor’s Address 2023 — archaeological museums',
        sourceType: 'Government document',
        sourceUrl: 'https://www.tnbudget.tn.gov.in/tnweb_files/GA_Eng_2023.pdf'
      }
    ],
    lastVerified: '2026-08-26'
  },
  {
    id: 'tn-heritage-government-museum-chennai',
    slug: 'government-museum-chennai',
    name: 'Government Museum, Chennai',
    recordType: 'heritage',
    state: 'tamil-nadu',
    stateName: 'Tamil Nadu',
    districtOrRegion: 'Egmore, Chennai',
    category: 'museums',
    categoryName: 'Museums',
    shortDescription: 'A major state museum in Chennai with important collections including extensive bronze sculpture holdings.',
    history: null,
    culturalSignificance: 'Tamil Nadu government budget material notes that the Egmore Museum houses more than two thousand bronze statues and is being further developed to showcase Tamil sculptural heritage.',
    architecture: null,
    images: [],
    media: [],
    relatedHeritageIds: [],
    relatedCultureIds: ['tn-culture-swamimalai-bronze'],
    trailIds: [],
    verificationStatus: 'verified',
    sources: [
      {
        sourceName: 'Government of Tamil Nadu — Budget Speech 2025–26',
        sourceType: 'Government budget document',
        sourceUrl: 'https://tnbudget.tn.gov.in/tnweb_files/BS_2025_26_ENG_FINAL.pdf'
      }
    ],
    lastVerified: '2026-08-26'
  },
  {
    id: 'tn-heritage-chettinad',
    slug: 'chettinad-heritage',
    name: 'Chettinad Heritage',
    recordType: 'heritage',
    state: 'tamil-nadu',
    stateName: 'Tamil Nadu',
    districtOrRegion: 'Sivaganga / Karaikudi–Devakottai region',
    category: 'traditional-architecture',
    categoryName: 'Traditional Architecture',
    shortDescription: 'A distinctive regional heritage landscape known for Chettiar mansions, traditional architecture, craft traditions and cuisine.',
    history: null,
    culturalSignificance: 'Tamil Nadu government material has promoted Chettinad heritage tourism and identifies the region’s distinctive architecture and lifestyle as a cultural asset.',
    architecture: 'Karaikudi and Devakottai municipal sources highlight large Chettiar mansions and distinctive regional building traditions.',
    images: [],
    media: [],
    relatedHeritageIds: [],
    relatedCultureIds: ['tn-culture-chettinad-cuisine', 'tn-culture-kandangi-saree'],
    trailIds: [],
    verificationStatus: 'verified',
    sources: [
      {
        sourceName: 'Government of Tamil Nadu — Governor’s Address 2006',
        sourceType: 'Government document',
        sourceUrl: 'https://tnbudget.tn.gov.in/tnweb_files/Bud_gov_speeches/Governor%27s%20Address%202006-English.pdf'
      },
      {
        sourceName: 'Karaikudi Municipality — Brief History',
        sourceType: 'Government municipal',
        sourceUrl: 'https://tnurbantree.tn.gov.in/karaikudi/wp-content/uploads/sites/33/2020/06/Brief-of-History_.pdf'
      }
    ],
    lastVerified: '2026-08-26'
  }
]

// All 3 showcase states (Karnataka, Rajasthan, Tamil Nadu) are now 100% verified.
export const allHeritage = [...verifiedHeritage]
