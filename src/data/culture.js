/**
 * Verified Culture Dataset — Stage 2B (Karnataka Batches 1-5, Rajasthan Batches 1-2, Tamil Nadu Batches 1-2)
 * Factually verified records with exact source attribution.
 */
export const verifiedCulture = [
  // KARNATAKA VERIFIED (29 Records)
  {
    id: 'ka-culture-yakshagana',
    slug: 'yakshagana',
    name: 'Yakshagana',
    recordType: 'culture',
    state: 'karnataka',
    stateName: 'Karnataka',
    region: 'Coastal Karnataka',
    community: null,
    category: 'classical-folk-dance',
    categoryName: 'Classical & Folk Dance',
    shortDescription:
      'A traditional dance-drama form of coastal Karnataka combining dance, music, song, dialogue, storytelling and elaborate costumes.',
    originHistory:
      'Yakshagana is a traditional folk performance form associated especially with the coastal districts of Karnataka.',
    culturalSignificance:
      'Performances combine dance, music, song, dialogue and elaborate costume, and commonly stage episodes drawn from the Ramayana, Mahabharata and other traditional narratives.',
    keyElements: [
<<<<<<< Updated upstream
      'Dance',
      'Music',
      'Song',
      'Dialogue',
      'Storytelling',
      'Elaborate costumes',
      'Drumming'
    ],
    images: [],
    media: [],
    relatedPlaces: ['Udupi', 'Dakshina Kannada', 'Uttara Kannada'],
=======
      'Tribhanga (three-body-bend)',
      'Chauka (square stance)',
      'Mudras (hand gestures)',
      'Abhinaya (expressive mime)',
      'Mangalacharan (invocation)',
      'Pallavi (pure dance)',
      'Thumri (light classical)'
    ],
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Odissi_dance_at_Nishagandi_Dance_Festival_2024_%28207%29.jpg/1280px-Odissi_dance_at_Nishagandi_Dance_Festival_2024_%28207%29.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Odissi_Performance_DS.jpg/1280px-Odissi_Performance_DS.jpg"
],
    media: [],
    relatedPlaces: ['Bhubaneswar', 'Puri', 'Konark'],
    relatedFestivals: ['Konark Dance Festival', 'Mukteswar Dance Festival'],
    relatedHeritageIds: ['od-heritage-konark', 'od-heritage-jagannath-puri', 'od-heritage-mukteswar'],
    relatedCultureIds: ['od-culture-gotipua', 'od-culture-konark-dance-festival'],
    trailIds: ['trail-living-traditions-odisha'],
    verificationStatus: 'verified',
    sources: [
      {
        sourceName: 'Sangeet Natak Akademi — Odissi',
        sourceType: 'Government cultural body',
        sourceUrl: 'https://sangeetnatak.gov.in/performances/dance/odissi'
      },
      {
        sourceName: 'Odisha Tourism — Odissi',
        sourceType: 'Government tourism',
        sourceUrl: 'https://odishatourism.gov.in/content/tourism/en/explore/art-and-culture/dance-forms/odissi.html'
      }
    ],
    lastVerified: '2026-08-29'
  },

  {
    id: 'od-culture-chhau',
    slug: 'chhau-dance',
    name: 'Chhau Dance (Mayurbhanj)',
    recordType: 'culture',
    state: 'odisha',
    stateName: 'Odisha',
    region: 'Mayurbhanj district',
    community: 'Tribal and indigenous communities',
    category: 'classical-folk-dance',
    categoryName: 'Classical & Folk Dance',
    shortDescription:
      'A semi-classical Indian dance with martial, tribal and folk traditions, the Mayurbhanj Chhau style is performed without masks and is inscribed on the UNESCO Intangible Cultural Heritage list.',
    originHistory:
      'Chhau dance traditions are found in Odisha (Mayurbhanj), Jharkhand (Seraikela), and West Bengal (Purulia). The Mayurbhanj style, practiced by the royal family and tribal communities, is performed without masks and emphasises vigorous martial movements.',
    culturalSignificance:
      'Inscribed on UNESCO\'s Representative List of Intangible Cultural Heritage in 2010 (jointly with Seraikela and Purulia Chhau). The Chaitra Parba festival is the primary context for Chhau performances.',
    keyElements: [
      'Martial acrobatics',
      'Inverted spins',
      'Vigorous jumps',
      'Episodes from Ramayana and Mahabharata',
      'Tribal rhythms (dhol, mahuri)',
      'No masks (Mayurbhanj style)'
    ],
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/1/1d/Chhau_Nritya_%281%29.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Mayurbhanj_Chhau_music_troupe_performing.jpg/1280px-Mayurbhanj_Chhau_music_troupe_performing.jpg"
],
    media: [],
    relatedPlaces: ['Mayurbhanj', 'Baripada'],
    relatedFestivals: ['Chaitra Parba'],
    relatedHeritageIds: ['od-heritage-simlipal'],
    relatedCultureIds: ['od-culture-odissi'],
    trailIds: [],
    verificationStatus: 'verified',
    sources: [
      {
        sourceName: 'UNESCO ICH — Chhau Dance',
        sourceType: 'UNESCO',
        sourceUrl: 'https://ich.unesco.org/en/RL/chhau-dance-00337'
      },
      {
        sourceName: 'Sangeet Natak Akademi — Chhau',
        sourceType: 'Government cultural body',
        sourceUrl: 'https://sangeetnatak.gov.in/performances/dance/chhau'
      }
    ],
    lastVerified: '2026-08-29'
  },

  {
    id: 'od-culture-gotipua',
    slug: 'gotipua',
    name: 'Gotipua Dance',
    recordType: 'culture',
    state: 'odisha',
    stateName: 'Odisha',
    region: 'Puri district',
    community: 'Young male performers',
    category: 'classical-folk-dance',
    categoryName: 'Classical & Folk Dance',
    shortDescription:
      'A traditional dance form where young boys dressed as women perform acrobatic and devotional dance in the tradition of the Jagannath temple — considered the precursor to classical Odissi.',
    originHistory:
      'Gotipua emerged as a temple art form around the 16th century when the king of Puri promoted it as a parallel to the Mahari tradition. Boys trained in dance and acrobatics perform in honour of Lord Jagannath.',
    culturalSignificance:
      'Gotipua is considered the seed from which Odissi classical dance grew. The acrobatic sequences (bandha nrutya) are a distinctive feature not found in classical Odissi. Several Gotipua performers have become distinguished Odissi gurus.',
    keyElements: [
      'Boys dressed as women',
      'Acrobatic bandha nrutya (human pyramids)',
      'Devotional bhajans',
      'Traditional costumes with floral headdress',
      'Palm-leaf jewellery'
    ],
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/b/b5/Gotipua_dance_in_Raghurajpur_ei2-39.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Gotipua_Dance_1.jpg/1280px-Gotipua_Dance_1.jpg"
],
    media: [],
    relatedPlaces: ['Puri', 'Raghurajpur'],
    relatedFestivals: ['Rath Yatra'],
    relatedHeritageIds: ['od-heritage-jagannath-puri'],
    relatedCultureIds: ['od-culture-odissi'],
    trailIds: ['trail-living-traditions-odisha'],
    verificationStatus: 'verified',
    sources: [
      {
        sourceName: 'Odisha Tourism — Gotipua',
        sourceType: 'Government tourism',
        sourceUrl: 'https://odishatourism.gov.in/content/tourism/en/explore/art-and-culture/dance-forms/gotipua.html'
      }
    ],
    lastVerified: '2026-08-29'
  },

  // ─────────────────────────────────────────────────────────
  // FESTIVALS
  // ─────────────────────────────────────────────────────────
  {
    id: 'od-culture-rath-yatra',
    slug: 'rath-yatra',
    name: 'Rath Yatra (Chariot Festival)',
    recordType: 'culture',
    state: 'odisha',
    stateName: 'Odisha',
    region: 'Puri (observed statewide)',
    community: null,
    category: 'festivals',
    categoryName: 'Festival',
    shortDescription:
      'The world\'s largest chariot festival, held annually in Puri, where the three towering wooden chariots of Lord Jagannath, Balabhadra, and Subhadra are drawn by hundreds of thousands of devotees.',
    originHistory:
      'The Rath Yatra has been held at Puri for over a millennium and is considered one of the oldest surviving festivals in India. Historical accounts by travellers like Marco Polo (14th century) and Ibn Battuta describe the festival.',
    culturalSignificance:
      'The festival is the origin of the English word "juggernaut". The three chariots (Nandighosa, Taladhwaja, Darpadalana) are built fresh each year from specific wood species. Over one million pilgrims attend the annual procession.',
    keyElements: [
      'Three massive wooden chariots built fresh annually',
      'Chherapanhara ritual (king sweeps chariot)',
      'Pahandi (procession of deities)',
      'Pulling of chariots by devotees',
      'Adapa Mandapa (chariot rest ceremony)'
    ],
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/2/20/Rath_Yatra_Puri_07-11027.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Puri_Ratha_Yatra.jpg/1280px-Puri_Ratha_Yatra.jpg"
],
    media: [],
    relatedPlaces: ['Puri'],
    relatedFestivals: [],
    relatedHeritageIds: ['od-heritage-jagannath-puri', 'od-heritage-puri-town'],
    relatedCultureIds: ['od-culture-odisha-mahaprasad'],
    trailIds: ['trail-sacred-odisha', 'trail-living-traditions-odisha'],
    verificationStatus: 'verified',
    sources: [
      {
        sourceName: 'Shree Jagannath Temple Administration — Rath Yatra',
        sourceType: 'Government',
        sourceUrl: 'https://www.shreejagannath.org/'
      },
      {
        sourceName: 'Odisha Tourism — Rath Yatra',
        sourceType: 'Government tourism',
        sourceUrl: 'https://odishatourism.gov.in/content/tourism/en/explore/festivals-and-events/rath-yatra.html'
      }
    ],
    lastVerified: '2026-08-29'
  },

  {
    id: 'od-culture-konark-dance-festival',
    slug: 'konark-dance-festival',
    name: 'Konark Dance Festival',
    recordType: 'culture',
    state: 'odisha',
    stateName: 'Odisha',
    region: 'Konark',
    community: null,
    category: 'festivals',
    categoryName: 'Festival',
    shortDescription:
      'An annual five-day classical dance festival held against the backdrop of the UNESCO-listed Konark Sun Temple, showcasing India\'s eight classical dance forms.',
    originHistory:
      'The Konark Dance Festival was inaugurated in 1986 by the Odisha Tourism Development Corporation. It is held every year from December 1–5 against the moonlit backdrop of the Konark Sun Temple.',
    culturalSignificance:
      'The festival is one of India\'s premier classical dance events, drawing performers and audiences from across India and internationally. The temple setting enhances the spiritual resonance of the performances.',
    keyElements: [
      'Five-day programme',
      'All eight classical dance forms of India',
      'Open-air stage facing Konark temple',
      'December 1–5 annually'
    ],
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Odissi_Performance_DS.jpg/1280px-Odissi_Performance_DS.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/4/47/Konarka_Temple.jpg"
],
    media: [],
    relatedPlaces: ['Konark'],
    relatedFestivals: [],
    relatedHeritageIds: ['od-heritage-konark'],
    relatedCultureIds: ['od-culture-odissi'],
    trailIds: ['trail-living-traditions-odisha'],
    verificationStatus: 'verified',
    sources: [
      {
        sourceName: 'Odisha Tourism — Konark Dance Festival',
        sourceType: 'Government tourism',
        sourceUrl: 'https://odishatourism.gov.in/content/tourism/en/explore/festivals-and-events/konark-dance-festival.html'
      }
    ],
    lastVerified: '2026-08-29'
  },

  {
    id: 'od-culture-raja-parba',
    slug: 'raja-parba',
    name: 'Raja Parba',
    recordType: 'culture',
    state: 'odisha',
    stateName: 'Odisha',
    region: 'Statewide',
    community: null,
    category: 'festivals',
    categoryName: 'Festival',
    shortDescription:
      'A three-day festival celebrating the onset of the agricultural year and the menstruation of the earth goddess (Bhudevi), when the earth rests and all agricultural work stops.',
    originHistory:
      'Raja Parba is an ancient Odishan festival rooted in the agrarian and fertility traditions of eastern India, coinciding with the summer solstice in mid-June. The festival predates written records and is associated with the worship of the earth as mother.',
    culturalSignificance:
      'During Raja, women observe a holiday from all work, children play on swings (doli), and special foods (Poda Pitha) are prepared. The festival celebrates womanhood and feminine energy across Odisha.',
    keyElements: [
      'Three-day earth goddess celebration',
      'Swings (doli) for women and children',
      'Special Odishan sweets and foods',
      'No ploughing or agricultural activity',
      'Chilika and Mahanadi boat races nearby'
    ],
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/b/b3/Raja_Doli_khela_Odia_festival.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Chennapoda.jpg/1280px-Chennapoda.jpg"
],
    media: [],
    relatedPlaces: ['Across Odisha'],
    relatedFestivals: [],
    relatedHeritageIds: [],
    relatedCultureIds: ['od-culture-odisha-cuisine'],
    trailIds: [],
    verificationStatus: 'verified',
    sources: [
      {
        sourceName: 'Odisha Tourism — Raja Parba',
        sourceType: 'Government tourism',
        sourceUrl: 'https://odishatourism.gov.in/content/tourism/en/explore/festivals-and-events/raja-festival.html'
      }
    ],
    lastVerified: '2026-08-29'
  },

  {
    id: 'od-culture-nuakhai',
    slug: 'nuakhai',
    name: 'Nuakhai',
    recordType: 'culture',
    state: 'odisha',
    stateName: 'Odisha',
    region: 'Western Odisha (Sambalpur, Bargarh, Bolangir, Sundargarh)',
    community: 'Western Odishan communities',
    category: 'festivals',
    categoryName: 'Festival',
    shortDescription:
      'The most important agrarian festival of western Odisha, celebrating the first harvest of the new rice crop with offerings to the village goddess and communal feasting.',
    originHistory:
      'Nuakhai (Nua = new, Khai = eating) is an ancient harvest festival observed in western Odisha a day after Ganesh Chaturthi. The festival brings communities together to share the new rice crop with the goddess before consuming it themselves.',
    culturalSignificance:
      'Nuakhai is declared a public holiday in Odisha. It is central to the cultural identity of western Odisha and celebrates the bond between humans and the earth. The Nuakhai Bhetghat (greeting ceremony) is a major social event.',
    keyElements: [
      'New rice offering to village goddess',
      'Nuakhai Bhetghat (communal greeting)',
      'Sambalpuri folk songs and dance',
      'Community feasting',
      'First taste of new crop after goddess'
    ],
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Artists_Performing_%27Bhaijiuntia%27-_Dalkhai_in_the_NUAKHAI_BHETGHAT_occasion_at_Burla.jpg/1280px-Artists_Performing_%27Bhaijiuntia%27-_Dalkhai_in_the_NUAKHAI_BHETGHAT_occasion_at_Burla.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/5/5b/Sambalpuri_saree1.jpg"
],
    media: [],
    relatedPlaces: ['Sambalpur', 'Bargarh', 'Bolangir', 'Sundargarh'],
    relatedFestivals: [],
    relatedHeritageIds: ['od-heritage-nrusinghanath'],
    relatedCultureIds: ['od-culture-sambalpuri-weave'],
    trailIds: [],
    verificationStatus: 'verified',
    sources: [
      {
        sourceName: 'Odisha Tourism — Nuakhai',
        sourceType: 'Government tourism',
        sourceUrl: 'https://odishatourism.gov.in/content/tourism/en/explore/festivals-and-events/nuakhai.html'
      }
    ],
    lastVerified: '2026-08-29'
  },

  {
    id: 'od-culture-durga-puja-odisha',
    slug: 'durga-puja-odisha',
    name: 'Durga Puja (Odisha)',
    recordType: 'culture',
    state: 'odisha',
    stateName: 'Odisha',
    region: 'Statewide',
    community: null,
    category: 'festivals',
    categoryName: 'Festival',
    shortDescription:
      'Odisha\'s unique celebration of Durga Puja, marked by elaborate locally crafted idols, distinctive Odishan puja rituals, and spectacular Kumari (virgin girl) worship traditions.',
    originHistory:
      'Durga Puja has been celebrated in Odisha for centuries, with the Cuttack Mahanadi Ghats hosting some of the oldest and most spectacular celebrations. Cuttack is particularly famed for its silver filigree decorations on the goddess\'s idol.',
    culturalSignificance:
      'The Cuttack Durga Puja, famous for its massive silver ornament (Chandanis) on the idols, draws millions of visitors. The Khudurukuni Osha (a separate Odishan goddess ritual) is observed alongside Durga Puja by Odishan women.',
    keyElements: [
      'Silver filigree (Chandani) idol decorations (Cuttack)',
      'Khudurukuni Osha women\'s ritual',
      'Kumari Puja (virgin worship)',
      'Magnificent puja pandals',
      'Odishan bhog (sacred food offerings)'
    ],
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Cuttack_Durga_Puja_2017_1.jpg/1280px-Cuttack_Durga_Puja_2017_1.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Cuttack_Durga_Puja_2017_3.jpg/1280px-Cuttack_Durga_Puja_2017_3.jpg"
],
    media: [],
    relatedPlaces: ['Cuttack', 'Bhubaneswar'],
    relatedFestivals: [],
    relatedHeritageIds: [],
    relatedCultureIds: ['od-culture-silver-filigree'],
    trailIds: [],
    verificationStatus: 'verified',
    sources: [
      {
        sourceName: 'Odisha Tourism — Durga Puja',
        sourceType: 'Government tourism',
        sourceUrl: 'https://odishatourism.gov.in/content/tourism/en/explore/festivals-and-events/durga-puja.html'
      }
    ],
    lastVerified: '2026-08-29'
  },

  // ─────────────────────────────────────────────────────────
  // ARTS & CRAFTS
  // ─────────────────────────────────────────────────────────
  {
    id: 'od-culture-pattachitra',
    slug: 'pattachitra',
    name: 'Pattachitra',
    recordType: 'culture',
    state: 'odisha',
    stateName: 'Odisha',
    region: 'Raghurajpur (Puri district)',
    community: 'Chitrakara community',
    category: 'arts-crafts',
    categoryName: 'Arts & Crafts',
    shortDescription:
      'A traditional cloth-based scroll painting of Odisha, characterised by intricate brushwork, natural colours, and mythological narratives depicting Jagannath, Ramayana, Mahabharata and Dashavatara themes.',
    originHistory:
      'Pattachitra (Patta = cloth/canvas, Chitra = picture) dates back to at least the 12th century CE and was intimately connected with the Jagannath Temple cult. The Raghurajpur village near Puri is designated a heritage craft village.',
    culturalSignificance:
      'Pattachitra paintings are intimately tied to the religious life of the Jagannath temple. The Tahia (ritual flower crown) for Lord Jagannath and the Chaturdha Murti (four deities) panels are among the most sacred Pattachitra forms. Holds GI Tag.',
    keyElements: [
      'Natural canvas prepared with tamarind paste and chalk',
      'Natural pigments (stone, conch, lamp soot)',
      'Fine brush of squirrel/mouse hair',
      'Intricate border (Lia) of floral motifs',
      'Mythological narratives',
      'GI-tagged craft'
    ],
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/7/7d/Odisha_Pattachitara_Depicting_Unconditional_Love_between_Radha_Krushna.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Pattachitra_Painting_%2817042344385%29.jpg/1280px-Pattachitra_Painting_%2817042344385%29.jpg"
],
    media: [],
    relatedPlaces: ['Raghurajpur', 'Puri'],
    relatedFestivals: ['Rath Yatra'],
    relatedHeritageIds: ['od-heritage-jagannath-puri', 'od-heritage-handicrafts-museum'],
    relatedCultureIds: ['od-culture-palm-leaf-manuscript'],
    trailIds: ['trail-living-traditions-odisha'],
    verificationStatus: 'verified',
    sources: [
      {
        sourceName: 'GI Registry India — Pattachitra',
        sourceType: 'Government',
        sourceUrl: 'https://ipindia.gov.in/'
      },
      {
        sourceName: 'Odisha Tourism — Raghurajpur Craft Village',
        sourceType: 'Government tourism',
        sourceUrl: 'https://odishatourism.gov.in/content/tourism/en/discover/attractions/art-and-archeological-sites/raghurajpur.html'
      }
    ],
    lastVerified: '2026-08-29'
  },

  {
    id: 'od-culture-silver-filigree',
    slug: 'silver-filigree-tarakasi',
    name: 'Silver Filigree (Tarakasi)',
    recordType: 'culture',
    state: 'odisha',
    stateName: 'Odisha',
    region: 'Cuttack',
    community: 'Karigar (silversmith) community',
    category: 'arts-crafts',
    categoryName: 'Arts & Crafts',
    shortDescription:
      'Cuttack\'s world-renowned filigree craft — delicate ornamental work made by twisting and weaving fine silver wire into elaborate jewellery, ornaments and decorative objects. Holds GI Tag.',
    originHistory:
      'Cuttack\'s silver filigree craft dates back to the 5th century CE. It reached its pinnacle under the Gajapati kings. Today Cuttack is known as the "Silver City" and its filigree is exported worldwide.',
    culturalSignificance:
      'The Chandanis (filigree temple decorations) for Durga Puja in Cuttack are one of the most spectacular applications of the craft. Each set takes hundreds of craftspeople months to complete.',
    keyElements: [
      'Sterling silver wire (0.3–0.5 mm)',
      'Hand-twisted and braided patterns',
      'No soldering in traditional technique',
      'GI-tagged craft',
      'Jewellery, idols, decorative panels'
    ],
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/e/e2/Cuttack_Tarkasi_%28silver_filigree%29_pendant_%26_ear_rings.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Cuttack_Durga_Puja_2017_1.jpg/1280px-Cuttack_Durga_Puja_2017_1.jpg"
],
    media: [],
    relatedPlaces: ['Cuttack'],
    relatedFestivals: ['Durga Puja'],
    relatedHeritageIds: ['od-heritage-barabati-fort', 'od-heritage-handicrafts-museum'],
    relatedCultureIds: ['od-culture-durga-puja-odisha'],
    trailIds: ['trail-living-traditions-odisha'],
    verificationStatus: 'verified',
    sources: [
      {
        sourceName: 'GI Registry India — Cuttack Silver Filigree',
        sourceType: 'Government',
        sourceUrl: 'https://ipindia.gov.in/'
      },
      {
        sourceName: 'Odisha Tourism — Silver Filigree',
        sourceType: 'Government tourism',
        sourceUrl: 'https://odishatourism.gov.in/content/tourism/en/explore/art-and-culture/crafts/silver-filigree.html'
      }
    ],
    lastVerified: '2026-08-29'
  },

  {
    id: 'od-culture-applique-pipili',
    slug: 'applique-work-pipili',
    name: 'Pipili Applique Work',
    recordType: 'culture',
    state: 'odisha',
    stateName: 'Odisha',
    region: 'Pipili, Puri district',
    community: 'Darji (tailor) community',
    category: 'arts-crafts',
    categoryName: 'Arts & Crafts',
    shortDescription:
      'A vibrant craft of Pipili village near Puri, where colourful fabric pieces are cut and stitched onto a base cloth to create decorative canopies, lampshades, garden umbrellas, and wall hangings.',
    originHistory:
      'Applique work in Pipili originated as ceremonial canopies (Chandua) for the Jagannath Temple. The craft has evolved over centuries and today Pipili craftspeople produce products for the global market.',
    culturalSignificance:
      'Pipili applique is intimately connected with the Jagannath Puri temple. The Chandua (ceremonial tent/canopy) used in rituals and processions is the most sacred application of this craft.',
    keyElements: [
      'Coloured fabric pieces (felt, velvet)',
      'Mirror work and embroidery',
      'Chandua (ceremonial canopies)',
      'Lampshades, umbrellas, fans',
      'GI-tagged craft'
    ],
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Pipili%2C_Odisha_02.jpg/1280px-Pipili%2C_Odisha_02.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Pipili%2C_Odisha_01.jpg/1280px-Pipili%2C_Odisha_01.jpg"
],
    media: [],
    relatedPlaces: ['Pipili', 'Puri'],
    relatedFestivals: ['Rath Yatra'],
    relatedHeritageIds: ['od-heritage-jagannath-puri', 'od-heritage-handicrafts-museum'],
    relatedCultureIds: ['od-culture-pattachitra'],
    trailIds: ['trail-living-traditions-odisha'],
    verificationStatus: 'verified',
    sources: [
      {
        sourceName: 'GI Registry India — Pipili Applique',
        sourceType: 'Government',
        sourceUrl: 'https://ipindia.gov.in/'
      },
      {
        sourceName: 'Odisha Tourism — Pipili',
        sourceType: 'Government tourism',
        sourceUrl: 'https://odishatourism.gov.in/content/tourism/en/explore/art-and-culture/crafts/pipili-applique-work.html'
      }
    ],
    lastVerified: '2026-08-29'
  },

  {
    id: 'od-culture-dhokra',
    slug: 'dhokra-casting',
    name: 'Dhokra Metal Casting',
    recordType: 'culture',
    state: 'odisha',
    stateName: 'Odisha',
    region: 'Dhenkanal, Mayurbhanj, Koraput districts',
    community: 'Dhokra Damar tribes',
    category: 'arts-crafts',
    categoryName: 'Arts & Crafts',
    shortDescription:
      'One of the world\'s oldest metal casting traditions (over 4,000 years old), using the lost-wax (cire perdue) technique to produce tribal-style figures, animals and decorative objects in brass.',
    originHistory:
      'Dhokra casting dates to the Indus Valley Civilisation (c. 2500 BCE, with the Mohenjo-daro "Dancing Girl" being the earliest known example). In Odisha, the Dhokra Damar craftspeople have practised this tradition for millennia.',
    culturalSignificance:
      'Dhokra figures uniquely combine functional craft with tribal aesthetics — depicting elephants, horses, deities and tribal motifs. The craft has been revived through government and NGO programs and is now exported globally.',
    keyElements: [
      'Lost-wax (cire perdue) technique',
      'Beeswax and resin wax core',
      'Clay mould',
      'Tribal figurative motifs',
      'Brass/bronze alloy'
    ],
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Dhokra_art_with_clay.jpg/1280px-Dhokra_art_with_clay.jpg",
      "https://images.unsplash.com/photo-1617575521317-d2974f3b56d2?w=1200&q=80"
],
    media: [],
    relatedPlaces: ['Dhenkanal', 'Bastar', 'Mayurbhanj'],
    relatedFestivals: [],
    relatedHeritageIds: ['od-heritage-handicrafts-museum'],
    relatedCultureIds: [],
    trailIds: ['trail-living-traditions-odisha'],
    verificationStatus: 'verified',
    sources: [
      {
        sourceName: 'Crafts Council of India — Dhokra',
        sourceType: 'NGO / Craft body',
        sourceUrl: 'https://craftscouncilofindia.org/'
      },
      {
        sourceName: 'Odisha Tourism — Dhokra Craft',
        sourceType: 'Government tourism',
        sourceUrl: 'https://odishatourism.gov.in/content/tourism/en/explore/art-and-culture/crafts/dhokra.html'
      }
    ],
    lastVerified: '2026-08-29'
  },

  {
    id: 'od-culture-palm-leaf-manuscript',
    slug: 'palm-leaf-manuscript',
    name: 'Palm-Leaf Manuscript Art (Talapatrachitra)',
    recordType: 'culture',
    state: 'odisha',
    stateName: 'Odisha',
    region: 'Raghurajpur, Paralakhemundi, Bhubaneswar',
    community: 'Chitrakara and scholar communities',
    category: 'arts-crafts',
    categoryName: 'Arts & Crafts',
    shortDescription:
      'An ancient tradition of etching text and illustrations on dried palm leaves — Odisha holds one of the largest collections of palm-leaf manuscripts in the world, with over 100,000 known texts.',
    originHistory:
      'The palm-leaf manuscript tradition in Odisha dates back over a thousand years. The Odisha State Museum holds over 40,000 manuscripts. Raghurajpur artists also engrave Talapatrachitra paintings on palm leaves.',
    culturalSignificance:
      'The manuscripts preserve ancient texts on medicine (Ayurveda), astronomy, literature, music, and temple ritual in Odia, Sanskrit, and tribal languages. UNESCO has recognised the preservation of palm-leaf manuscripts as a priority.',
    keyElements: [
      'Dried Siali (fan palm) leaves',
      'Etching with a sharp iron stylus',
      'Lamp-black ink rubbed in',
      'Mythological and ritual texts',
      'Illustrated manuscripts'
    ],
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Raghurajpur_7.jpg/1280px-Raghurajpur_7.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/7/7d/Odisha_Pattachitara_Depicting_Unconditional_Love_between_Radha_Krushna.jpg"
],
    media: [],
    relatedPlaces: ['Raghurajpur', 'Bhubaneswar'],
    relatedFestivals: [],
    relatedHeritageIds: ['od-heritage-odisha-state-museum', 'od-heritage-handicrafts-museum'],
    relatedCultureIds: ['od-culture-pattachitra'],
    trailIds: ['trail-living-traditions-odisha'],
    verificationStatus: 'verified',
    sources: [
      {
        sourceName: 'Odisha State Museum — Palm-Leaf Manuscripts',
        sourceType: 'Government',
        sourceUrl: 'https://odishamuseum.nic.in/'
      },
      {
        sourceName: 'Odisha Tourism — Palm-Leaf Manuscript',
        sourceType: 'Government tourism',
        sourceUrl: 'https://odishatourism.gov.in/content/tourism/en/explore/art-and-culture/crafts/palm-leaf-manuscript.html'
      }
    ],
    lastVerified: '2026-08-29'
  },

  // ─────────────────────────────────────────────────────────
  // TEXTILES
  // ─────────────────────────────────────────────────────────
  {
    id: 'od-culture-sambalpuri-weave',
    slug: 'sambalpuri-weaving',
    name: 'Sambalpuri Weaving',
    recordType: 'culture',
    state: 'odisha',
    stateName: 'Odisha',
    region: 'Sambalpur, Bargarh, Bolangir, Sonepur districts',
    community: 'Bhulia weaver community',
    category: 'textiles',
    categoryName: 'Textiles',
    shortDescription:
      'A traditional ikat weaving tradition from western Odisha, where the yarn is resist-dyed before weaving to create intricate geometric and naturalistic patterns — the basis for the famous Sambalpuri saree and Bandha weave.',
    originHistory:
      'Sambalpuri weaving has been practised by the Bhulia community for several centuries. The iconic Sambalpuri saree with its Shankha (conch), Chakra (wheel), Phool (flower), and Pasapali (chessboard) motifs is woven using the tie-and-dye (bandha) ikat technique.',
    culturalSignificance:
      'The Sambalpuri saree holds GI tag status. It has become a symbol of Odishan identity nationally and internationally. Prime Minister Indira Gandhi popularised it in the 1980s. The craft involves months of preparatory work before weaving begins.',
    keyElements: [
      'Bandha (tie-and-dye/ikat) technique',
      'Hand-tied and resist-dyed yarn',
      'Silk and cotton variants',
      'Pasapali, Shankha-Chakra, Phool motifs',
      'GI-tagged'
    ],
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/5/5b/Sambalpuri_saree1.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/8/8f/Tanta_buna_Sambalpuri_Saree_Weaving_Sonepur_Odisha.jpg"
],
    media: [],
    relatedPlaces: ['Sambalpur', 'Bargarh', 'Sonepur'],
    relatedFestivals: ['Nuakhai'],
    relatedHeritageIds: ['od-heritage-handicrafts-museum'],
    relatedCultureIds: ['od-culture-bomkai-silk'],
    trailIds: ['trail-living-traditions-odisha'],
    verificationStatus: 'verified',
    sources: [
      {
        sourceName: 'GI Registry India — Sambalpuri Saree',
        sourceType: 'Government',
        sourceUrl: 'https://ipindia.gov.in/'
      },
      {
        sourceName: 'Odisha Tourism — Sambalpuri Weaving',
        sourceType: 'Government tourism',
        sourceUrl: 'https://odishatourism.gov.in/content/tourism/en/explore/art-and-culture/crafts/sambalpuri-saree.html'
      }
    ],
    lastVerified: '2026-08-29'
  },

  {
    id: 'od-culture-bomkai-silk',
    slug: 'bomkai-silk',
    name: 'Bomkai Silk & Cotton Saree',
    recordType: 'culture',
    state: 'odisha',
    stateName: 'Odisha',
    region: 'Bomkai village, Ganjam district',
    community: 'Bhulia weaver community',
    category: 'textiles',
    categoryName: 'Textiles',
    shortDescription:
      'Also called Sonepuri saree, the Bomkai weave is known for its distinctive body design with tribal motifs and a richly woven pallu (border), combining cotton and silk thread. Holds GI Tag.',
    originHistory:
      'Bomkai weaving originates from the village of Bomkai in Ganjam district and has been practised for centuries. It is one of the oldest weaving traditions in Odisha, combining tribal and classical design elements.',
    culturalSignificance:
      'The Bomkai saree is recognised by a GI tag and is celebrated for its distinctive tribal-style body patterns contrasted with an elaborately woven silk pallu. It is widely worn at festive occasions across Odisha.',
    keyElements: [
      'Contrasting body and pallu design',
      'Tribal motifs (fish, peacock, conch)',
      'Cotton body with silk pallu',
      'Extra-weft weave technique',
      'GI-tagged'
    ],
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Bomkai.jpg/1280px-Bomkai.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Bomkai3.jpg/1280px-Bomkai3.jpg"
],
    media: [],
    relatedPlaces: ['Bomkai', 'Ganjam', 'Berhampur'],
    relatedFestivals: [],
    relatedHeritageIds: ['od-heritage-handicrafts-museum'],
    relatedCultureIds: ['od-culture-sambalpuri-weave'],
    trailIds: ['trail-living-traditions-odisha'],
    verificationStatus: 'verified',
    sources: [
      {
        sourceName: 'GI Registry India — Bomkai Sarees of Odisha',
        sourceType: 'Government',
        sourceUrl: 'https://ipindia.gov.in/'
      },
      {
        sourceName: 'Odisha Tourism — Crafts & Textiles',
        sourceType: 'Government tourism',
        sourceUrl: 'https://odishatourism.gov.in/'
      }
    ],
    lastVerified: '2026-08-29'
  },

  {
    id: 'od-culture-ikat-khandua',
    slug: 'khandua-ikat',
    name: 'Khandua Pata (Nuapatna Ikat)',
    recordType: 'culture',
    state: 'odisha',
    stateName: 'Odisha',
    region: 'Nuapatna, Cuttack district',
    community: 'Bhulia weaver community',
    category: 'textiles',
    categoryName: 'Textiles',
    shortDescription:
      'A sacred silk ikat cloth woven at Nuapatna, offered to Lord Jagannath at Puri — one of the few textiles with a living royal patronage and temple connection.',
    originHistory:
      'The Khandua Pata has been woven at Nuapatna village for centuries and is offered to Lord Jagannath during the Rath Yatra. The 10-metre-long cloth draped on the chariot is the most sacred output of this tradition.',
    culturalSignificance:
      'The Khandua is the official ceremonial textile for the Jagannath Temple. It holds GI tag status. The weaving of the Rath Yatra Khandua is a sacred ritual that involves the Shree Jagannath Temple Administration.',
    keyElements: [
      'Double-ikat silk weave',
      'Traditional Jagannath-themed motifs',
      'Offered to Jagannath at Rath Yatra',
      'GI-tagged',
      '10-metre sacred cloth (draping the chariot)'
    ],
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Gita_Gobinda_Khandua.jpg/1280px-Gita_Gobinda_Khandua.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/5/5b/Sambalpuri_saree1.jpg"
],
    media: [],
    relatedPlaces: ['Nuapatna', 'Cuttack', 'Puri'],
    relatedFestivals: ['Rath Yatra'],
    relatedHeritageIds: ['od-heritage-jagannath-puri'],
    relatedCultureIds: ['od-culture-rath-yatra', 'od-culture-sambalpuri-weave'],
    trailIds: [],
    verificationStatus: 'verified',
    sources: [
      {
        sourceName: 'GI Registry India — Khandua',
        sourceType: 'Government',
        sourceUrl: 'https://ipindia.gov.in/'
      },
      {
        sourceName: 'Odisha Tourism — Khandua',
        sourceType: 'Government tourism',
        sourceUrl: 'https://odishatourism.gov.in/'
      }
    ],
    lastVerified: '2026-08-29'
  },

  // ─────────────────────────────────────────────────────────
  // MUSIC
  // ─────────────────────────────────────────────────────────
  {
    id: 'od-culture-odissi-music',
    slug: 'odissi-music',
    name: 'Odissi Music',
    recordType: 'culture',
    state: 'odisha',
    stateName: 'Odisha',
    region: 'Statewide',
    community: null,
    category: 'music',
    categoryName: 'Music',
    shortDescription:
      'One of the recognised classical music systems of India, Odissi music is rooted in the Gita Govinda of poet Jayadeva (12th century) and the compositions of medieval Odishan saint-poets.',
    originHistory:
      'Odissi music was formally recognised as a distinct classical system in 1978. It is rooted in the Gita Govinda (c. 1200 CE), the Sanskrit masterpiece by Odishan poet Jayadeva, which remains its most sacred text. The tradition includes compositions by Panchasakha saint-poets.',
    culturalSignificance:
      'Odissi music is the musical accompaniment for Odissi dance. The Rajarani Music Festival in Bhubaneswar is a premier platform for Odissi music alongside other classical traditions.',
    keyElements: [
      'Gita Govinda (compositions of Jayadeva)',
      'Panchasakha compositions',
      'Mardala (barrel drum)',
      'Sitar and Pakhawaj accompaniment',
      'Odia and Sanskrit lyrics'
    ],
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/3/38/Guru_Keshab_Chandra_Rout_in_an_Odissi_music_recital_01.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Guru_Keshab_Chandra_Rout_in_an_Odissi_music_recital_02.jpg/1280px-Guru_Keshab_Chandra_Rout_in_an_Odissi_music_recital_02.jpg"
],
    media: [],
    relatedPlaces: ['Bhubaneswar', 'Puri'],
    relatedFestivals: ['Rajarani Music Festival'],
    relatedHeritageIds: ['od-heritage-rajarani', 'od-heritage-jagannath-puri'],
    relatedCultureIds: ['od-culture-odissi'],
    trailIds: [],
    verificationStatus: 'verified',
    sources: [
      {
        sourceName: 'Sangeet Natak Akademi — Odissi Music',
        sourceType: 'Government cultural body',
        sourceUrl: 'https://sangeetnatak.gov.in/'
      }
    ],
    lastVerified: '2026-08-29'
  },

  // ─────────────────────────────────────────────────────────
  // CUISINE & LIVING TRADITIONS
  // ─────────────────────────────────────────────────────────
  {
    id: 'od-culture-odisha-mahaprasad',
    slug: 'mahaprasad-puri',
    name: 'Mahaprasad of Jagannath Temple',
    recordType: 'culture',
    state: 'odisha',
    stateName: 'Odisha',
    region: 'Puri',
    community: 'Suara (cook) caste',
    category: 'cuisine',
    categoryName: 'Cuisine',
    shortDescription:
      'The sacred food offering (Mahaprasad) of the Jagannath Temple — prepared in the world\'s largest kitchen using 752 earthen pots stacked in a wood-fire system, serving up to 56 bhog varieties for 10,000+ devotees daily.',
    originHistory:
      'The Ananda Bazar kitchen of Jagannath Temple has operated for over 700 years. 500+ Suara caste cooks prepare food using only earthen pots and wood fire according to strict ritual rules set in the temple Niti (code).',
    culturalSignificance:
      'Mahaprasad is considered supremely egalitarian — served without caste distinction. Historically, it has been cited as an early example of communal dining across caste barriers in India. Swami Vivekananda wrote about its significance.',
    keyElements: [
      '56 varieties of vegetarian food (Chhappan Bhog)',
      'Earthen pots stacked in pyramids on wood fire',
      'Egalitarian serving without caste distinction',
      '500+ cooks from Suara caste',
      'Abadha (leftovers) sold at Ananda Bazar'
    ],
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Bojhia.jpg/1280px-Bojhia.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Chennapoda.jpg/1280px-Chennapoda.jpg"
],
    media: [],
    relatedPlaces: ['Puri'],
    relatedFestivals: ['Rath Yatra'],
    relatedHeritageIds: ['od-heritage-jagannath-puri', 'od-heritage-jagannath-temple-puri-natamandap'],
    relatedCultureIds: ['od-culture-odisha-cuisine'],
    trailIds: ['trail-sacred-odisha'],
    verificationStatus: 'verified',
    sources: [
      {
        sourceName: 'Shree Jagannath Temple Administration',
        sourceType: 'Government',
        sourceUrl: 'https://www.shreejagannath.org/'
      },
      {
        sourceName: 'Odisha Tourism — Mahaprasad',
        sourceType: 'Government tourism',
        sourceUrl: 'https://odishatourism.gov.in/content/tourism/en/explore/art-and-culture/cuisine/mahaprasad.html'
      }
    ],
    lastVerified: '2026-08-29'
  },

  {
    id: 'od-culture-odisha-cuisine',
    slug: 'odisha-cuisine',
    name: 'Odishan Cuisine',
    recordType: 'culture',
    state: 'odisha',
    stateName: 'Odisha',
    region: 'Statewide',
    community: null,
    category: 'cuisine',
    categoryName: 'Cuisine',
    shortDescription:
      'Odishan cuisine is characterised by minimal use of oil and spices, mustard oil, panch phoran (five-spice mix), and a rich tradition of sweets (Rasagola, Chhena Poda, Poda Pitha).',
    originHistory:
      'Odishan culinary tradition was shaped by the Jagannath temple food code (saatvik, without onion or garlic), the fertile delta of the Mahanadi/Brahmani rivers, and centuries of coastal trade. Odisha claims origin of the Rasagola (disputed with West Bengal).',
    culturalSignificance:
      'The GI tag for Odisha Rasagola was awarded in 2019, settling a long-running dispute. Chhena Poda (roasted cottage cheese dessert) is Odisha\'s unique sweet, said to be the favourite of Lord Jagannath. Poda Pitha is the iconic Raja festival food.',
    keyElements: [
      'Dalma (lentils with vegetables)',
      'Pakhala (fermented rice in water)',
      'Chhena Poda (roasted chhena)',
      'Odisha Rasagola (GI-tagged)',
      'Poda Pitha (baked rice cake)',
      'Panch phoran seasoning'
    ],
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Chennapoda.jpg/1280px-Chennapoda.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Chhena_Poda_-_Choudwar_-_Cuttack_2018-01-26_9970.JPG/1280px-Chhena_Poda_-_Choudwar_-_Cuttack_2018-01-26_9970.JPG"
],
    media: [],
    relatedPlaces: ['Across Odisha'],
    relatedFestivals: ['Raja Parba', 'Rath Yatra'],
    relatedHeritageIds: [],
    relatedCultureIds: ['od-culture-odisha-mahaprasad'],
    trailIds: [],
    verificationStatus: 'verified',
    sources: [
      {
        sourceName: 'GI Registry India — Odisha Rasagola',
        sourceType: 'Government',
        sourceUrl: 'https://ipindia.gov.in/'
      },
      {
        sourceName: 'Odisha Tourism — Cuisine',
        sourceType: 'Government tourism',
        sourceUrl: 'https://odishatourism.gov.in/content/tourism/en/explore/art-and-culture/cuisine.html'
      }
    ],
    lastVerified: '2026-08-29'
  },

  // ─────────────────────────────────────────────────────────
  // MARTIAL ARTS & FOLK TRADITIONS
  // ─────────────────────────────────────────────────────────
  {
    id: 'od-culture-paika-akhada',
    slug: 'paika-akhada',
    name: 'Paika Akhada (Odishan Martial Arts)',
    recordType: 'culture',
    state: 'odisha',
    stateName: 'Odisha',
    region: 'Statewide (especially Khurda, Ganjam)',
    community: 'Paika (warrior) community',
    category: 'performing-arts',
    categoryName: 'Performing Arts',
    shortDescription:
      'The traditional martial art of Odisha\'s Paika warrior community — a blend of combat techniques, acrobatics, and rhythmic sword-and-shield dance that powered the Paika Revolt of 1817 against British rule.',
    originHistory:
      'Paika (meaning "foot soldier") martial arts has ancient roots in Odisha\'s military traditions under the Gajapati kingdom. The Paika Revolt of 1817, led by Buxi Jagabandhu, was the first armed resistance against British rule in India — predating the 1857 War of Independence.',
    culturalSignificance:
      'The Paika Akhada system is performed during festivals and processions. The Government of India officially recognises 1817 as the first war of independence. Paika Akhada performances combine martial skill with artistic flair.',
    keyElements: [
      'Sword and shield (khanda-dhal)',
      'Lathi (staff) techniques',
      'Acrobatic combat sequences',
      'Rhythmic drumming accompaniment',
      'Warrior community tradition'
    ],
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/1/1d/Chhau_Nritya_%281%29.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Mayurbhanj_Chhau_music_troupe_performing.jpg/1280px-Mayurbhanj_Chhau_music_troupe_performing.jpg"
],
    media: [],
    relatedPlaces: ['Khurda', 'Bhubaneswar'],
>>>>>>> Stashed changes
    relatedFestivals: [],
    relatedHeritageIds: [],
    relatedCultureIds: [],
    trailIds: [],
    verificationStatus: 'verified',
    sources: [
      {
        sourceName: 'Karnataka Tourism — Yakshagana',
        sourceType: 'Government tourism',
        sourceUrl: 'https://karnatakatourism.org/en/experiences/yakshagana/'
      }
    ],
    lastVerified: '2026-08-26'
  },
  {
    id: 'ka-culture-mysuru-dasara',
    slug: 'mysuru-dasara',
    name: 'Mysuru Dasara',
    recordType: 'culture',
    state: 'karnataka',
    stateName: 'Karnataka',
    region: 'Mysuru',
    community: null,
    category: 'festivals',
    categoryName: 'Festivals',
    shortDescription:
      'A ten-day festival in Mysuru combining devotion, royal heritage, processions and cultural performances.',
    originHistory: null,
    culturalSignificance:
      'Mysuru Dasara is a major cultural celebration of Karnataka held during Navaratri and culminating on Vijayadashami. The celebrations include the Jumbo Savari procession, palace illumination, cultural performances, exhibitions and ceremonies associated with Goddess Chamundeshwari.',
    keyElements: [
      'Navaratri',
      'Vijayadashami',
      'Jumbo Savari',
      'Mysuru Palace illumination',
      'Cultural performances',
      'Dasara exhibition',
      'Chamundeshwari worship'
    ],
    images: [],
    media: [],
    relatedPlaces: ['Mysuru', 'Chamundi Hill'],
    relatedFestivals: [],
    relatedHeritageIds: ['ka-heritage-mysuru-palace'],
    relatedCultureIds: [],
    trailIds: [],
    verificationStatus: 'verified',
    sources: [
      {
        sourceName:
          'Karnataka Tourism — Experience the Mysuru Dasara festivities in Karnataka',
        sourceType: 'Government tourism',
        sourceUrl:
          'https://karnatakatourism.org/en/experiences/experience-the-mysuru-dasara-festivities-in-karnataka'
      },
      {
        sourceName: 'Karnataka Tourism — Mysuru Dasara Festival',
        sourceType: 'Government tourism',
        sourceUrl:
          'https://karnatakatourism.org/en/events/mysuru-dasara-festival'
      }
    ],
    lastVerified: '2026-08-26'
  },
  {
    id: 'ka-culture-channapatna-toys',
    slug: 'channapatna-toys',
    name: 'Channapatna Toys',
    recordType: 'culture',
    state: 'karnataka',
    stateName: 'Karnataka',
    region: 'Channapatna / Ramanagara',
    community: 'Channapatna toy-making artisans',
    category: 'handicrafts',
    categoryName: 'Handicrafts',
    shortDescription:
      'A traditional lacquered wooden toy-making craft associated with Channapatna in Karnataka.',
    originHistory:
      'Channapatna has a long-established wooden toy-making tradition. Karnataka Tourism notes that the craft received patronage from Tipu Sultan, who invited artisans from Persia to train local craftsmen in woodwork.',
    culturalSignificance:
      'The craft is known for hand-crafted wooden toys, puzzles and decorative objects with smooth lacquer finishes and bright colours, and it has Geographical Indication protection.',
    keyElements: [
      'Wood turning',
      'Handcrafted wooden toys',
      'Lacquer finishing',
      'Vegetable-based dyes'
    ],
    images: [],
    media: [],
    relatedPlaces: ['Channapatna', 'Ramanagara'],
    relatedFestivals: [],
    relatedHeritageIds: [],
    relatedCultureIds: [],
    giStatus: 'GI-tagged craft',
    verificationStatus: 'verified',
    sources: [
      {
        sourceName: 'Karnataka Tourism — Channapatna Toys',
        sourceType: 'Government tourism',
        sourceUrl:
          'https://karnatakatourism.org/en/experiences/channapatna-toys/'
      }
    ],
    lastVerified: '2026-08-26'
  },
  {
    id: 'ka-culture-mysore-painting',
    slug: 'mysore-painting',
    name: 'Mysore Painting',
    recordType: 'culture',
    state: 'karnataka',
    stateName: 'Karnataka',
    region: 'Mysuru',
    community: null,
    category: 'traditional-arts',
    categoryName: 'Traditional Arts',
    shortDescription:
      'A traditional South Indian painting style associated with Mysuru, known for refined line work, devotional themes and gold detailing.',
    originHistory:
      'Karnataka Tourism traces the tradition to the royal courts of the Wodeyar dynasty.',
    culturalSignificance:
      "Mysore painting forms an important part of Karnataka's royal and devotional art heritage, with themes frequently drawn from Hindu mythology and classical epics.",
    keyElements: [
      'Delicate brushwork',
      'Devotional subjects',
      'Gold foil detailing',
      'Muted and refined composition'
    ],
    images: [],
    media: [],
    relatedPlaces: ['Mysuru'],
    relatedFestivals: [],
    relatedHeritageIds: [],
    relatedCultureIds: [],
    trailIds: [],
    verificationStatus: 'verified',
    sources: [
      {
        sourceName: 'Karnataka Tourism — Mysore Painting',
        sourceType: 'Government tourism',
        sourceUrl: 'https://karnatakatourism.org/en/experiences/mysore-painting'
      }
    ],
    lastVerified: '2026-08-26'
  },
  {
    id: 'ka-culture-dollu-kunitha',
    slug: 'dollu-kunitha',
    name: 'Dollu Kunitha',
    recordType: 'culture',
    state: 'karnataka',
    stateName: 'Karnataka',
    region: 'Karnataka; traditionally associated with the Kuruba community',
    community: 'Kuruba Gowda community',
    category: 'classical-folk-dance',
    categoryName: 'Classical & Folk Dance',
    shortDescription:
      'A high-energy traditional drum dance performed in Karnataka during festivals, processions and cultural celebrations.',
    originHistory:
      'Karnataka Tourism associates Dollu Kunitha with the worship of Beeralingeshwara and with ritual traditions of the Kuruba Gowda community.',
    culturalSignificance:
      'The form combines synchronized group movement, rhythmic drumming and song and is widely presented at temple festivals and major cultural events.',
    keyElements: [
<<<<<<< Updated upstream
      'Large drums',
      'Group formations',
      'Rhythmic dance',
      'Singing',
      'Festival performance'
    ],
    images: [],
=======
      'Performed by women',
      'Sambalpuri folk song "Dalkhai bo"',
      'Sambalpuri saree costumes',
      'Dhol, Nisan, Tasha drumming',
      'Dussehra and Nuakhai context'
    ],
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Artists_Performing_%27Bhaijiuntia%27-_Dalkhai_in_the_NUAKHAI_BHETGHAT_occasion_at_Burla.jpg/1280px-Artists_Performing_%27Bhaijiuntia%27-_Dalkhai_in_the_NUAKHAI_BHETGHAT_occasion_at_Burla.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Arists_Performing_%27Bhaijiuntia%27-_The_world_famous_Dalkhai%2C_The_tribal_dance_of_Sambalpur_district_of_India.jpg/1280px-Arists_Performing_%27Bhaijiuntia%27-_The_world_famous_Dalkhai%2C_The_tribal_dance_of_Sambalpur_district_of_India.jpg"
],
>>>>>>> Stashed changes
    media: [],
    relatedPlaces: [],
    relatedFestivals: ['Mysuru Dasara'],
    relatedHeritageIds: [],
    relatedCultureIds: ['ka-culture-mysuru-dasara'],
    trailIds: [],
    verificationStatus: 'verified',
    sources: [
      {
        sourceName: 'Karnataka Tourism — Dollu Kunitha',
        sourceType: 'Government tourism',
        sourceUrl: 'https://karnatakatourism.org/en/experiences/dollu-kunitha/'
      }
    ],
    lastVerified: '2026-08-26'
  },
  {
    id: 'ka-culture-gombe-aata',
    slug: 'gombe-aata',
    name: 'Gombe Aata',
    recordType: 'culture',
    state: 'karnataka',
    stateName: 'Karnataka',
    region: 'Karnataka',
    community: null,
    category: 'folklore-oral-traditions',
    categoryName: 'Folklore & Oral Traditions',
    shortDescription:
      'A traditional Karnataka puppet-theatre form that tells stories through dolls controlled by puppeteers using strings.',
    originHistory: null,
    culturalSignificance:
      'Gombe Aata combines puppetry, narration and music to stage stories, often drawing from epics and traditional narratives.',
    keyElements: [
      'Wooden puppets',
      'String manipulation',
      'Narration',
      'Music',
      'Storytelling'
    ],
    images: [],
    media: [],
    relatedPlaces: ['Channapatna'],
    relatedFestivals: ['Mysuru Dasara'],
    relatedHeritageIds: [],
    relatedCultureIds: [
      'ka-culture-channapatna-toys',
      'ka-culture-mysuru-dasara'
    ],
    trailIds: [],
    verificationStatus: 'verified',
    sources: [
      {
        sourceName: 'Karnataka Tourism — Gombe Aata',
        sourceType: 'Government tourism',
        sourceUrl: 'https://karnatakatourism.org/en/experiences/gombe-aata'
      }
    ],
    lastVerified: '2026-08-26'
  },
  {
    id: 'ka-culture-kambala',
    slug: 'kambala',
    name: 'Kambala',
    recordType: 'culture',
    state: 'karnataka',
    stateName: 'Karnataka',
    region: 'Coastal Karnataka / Tulu Nadu',
    community: null,
    category: 'local-customs',
    categoryName: 'Local Customs',
    shortDescription:
      'A traditional buffalo-racing event held on slushy tracks in coastal Karnataka.',
    originHistory: null,
    culturalSignificance:
      'Kambala is a prominent rural sporting tradition of coastal Karnataka and forms part of the harvest-season cultural life of Tulu Nadu.',
    keyElements: [
      'Pairs of buffaloes',
      'Slushy race tracks',
      'Jockey/runner',
      'Village events',
      'Harvest-season tradition'
    ],
    images: [],
    media: [],
    relatedPlaces: ['Mangaluru', 'Udupi', 'Moodubidire', 'Puttur'],
    relatedFestivals: [],
    relatedHeritageIds: [],
    relatedCultureIds: [],
    trailIds: [],
    verificationStatus: 'verified',
    sources: [
      {
        sourceName: 'Karnataka Tourism — Kambala',
        sourceType: 'Government tourism',
        sourceUrl: 'https://karnatakatourism.org/experiences/kambala/'
      },
      {
        sourceName: 'Karnataka Tourism — Kambala Festival',
        sourceType: 'Government tourism',
        sourceUrl: 'https://karnatakatourism.org/en/events/kambala-festival'
      }
    ],
    lastVerified: '2026-08-26'
  },
  {
    id: 'ka-culture-huli-vesha',
    slug: 'huli-vesha',
    name: 'Huli Vesha',
    recordType: 'culture',
    state: 'karnataka',
    stateName: 'Karnataka',
    region: 'Coastal Karnataka',
    community: null,
    category: 'classical-folk-dance',
    categoryName: 'Classical & Folk Dance',
    shortDescription:
      'A tiger-themed folk performance of coastal Karnataka, especially visible during Navaratri festivities.',
    originHistory: null,
    culturalSignificance:
      'Huli Vesha is performed as a tribute to Goddess Durga and is a highly visible part of festive street culture in coastal Karnataka.',
    keyElements: [
      'Tiger body paint/costume',
      'Group dancing',
      'Drums and music',
      'Street performance',
      'Festival setting'
    ],
    images: [],
    media: [],
    relatedPlaces: [
      'Mangaluru',
      'Udupi',
      'Kundapura',
      'Moodubidiri',
      'Karkala'
    ],
    relatedFestivals: ['Navaratri'],
    relatedHeritageIds: [],
    relatedCultureIds: [],
    trailIds: [],
    verificationStatus: 'verified',
    sources: [
      {
        sourceName: 'Karnataka Tourism — Huli Vesha',
        sourceType: 'Government tourism',
        sourceUrl: 'https://karnatakatourism.org/en/experiences/huli-vesha/'
      }
    ],
    lastVerified: '2026-08-26'
  },
  {
    id: 'ka-culture-bhootha-aradhane',
    slug: 'bhootha-aradhane',
    name: 'Bhootha Aradhane',
    recordType: 'culture',
    state: 'karnataka',
    stateName: 'Karnataka',
    region: 'Coastal Karnataka / Tulu Nadu',
    community: null,
    category: 'local-customs',
    categoryName: 'Local Customs',
    shortDescription:
      'A ritual tradition of coastal Karnataka centred on ceremonial worship of local spirits or deities through performance, music and invocation.',
    originHistory:
      "Karnataka Tourism describes the tradition as rooted in Tulu Nadu's spirit and ancestor-worship practices.",
    culturalSignificance:
      'The ritual combines performance, costume, music, narration, offerings and community belief and remains part of local religious and social life in coastal Karnataka.',
    keyElements: [
      'Ritual performance',
      'Face painting',
      'Costume and headdress',
      'Drumming/music',
      'Invocation',
      'Offerings'
    ],
    images: [],
    media: [],
    relatedPlaces: ['Mangaluru', 'Udupi', 'Tulu Nadu'],
    relatedFestivals: [],
    relatedHeritageIds: [],
    relatedCultureIds: [],
    trailIds: [],
    verificationStatus: 'verified',
    sources: [
      {
        sourceName: 'Karnataka Tourism — Bhootha Aradhane',
        sourceType: 'Government tourism',
        sourceUrl:
          'https://karnatakatourism.org/experiences/bhootha-aradhane-spirit-worship-dance/'
      }
    ],
    lastVerified: '2026-08-26'
  },
  {
    id: 'ka-culture-kamsale-nrutya',
    slug: 'kamsale-nrutya',
    name: 'Kamsale Nrutya',
    recordType: 'culture',
    state: 'karnataka',
    stateName: 'Karnataka',
    region: 'Mysuru, Chamarajanagara and Mandya regions',
    community:
      'Associated with devotees of Male Mahadeshwara; Karnataka Tourism notes Halu Kuruba performers in Chamarajanagara district',
    category: 'classical-folk-dance',
    categoryName: 'Classical & Folk Dance',
    shortDescription:
      'A devotional folk dance in which performers sing and dance rhythmically while playing pairs of small metal cymbal-like instruments called kamsale.',
    originHistory: null,
    culturalSignificance:
      'Kamsale Nrutya is closely associated with Male Mahadeshwara worship and combines devotional song, percussion and vigorous group movement.',
    keyElements: [
      'Kamsale metal plates',
      'Devotional songs',
      'Group dance',
      'Rhythmic percussion',
      'Male Mahadeshwara worship'
    ],
    images: [],
    media: [],
    relatedPlaces: [
      'Mysuru',
      'Chamarajanagara',
      'Mandya',
      'Male Mahadeshwara Hills'
    ],
    relatedFestivals: [],
    relatedHeritageIds: [],
    relatedCultureIds: [],
    trailIds: [],
    verificationStatus: 'verified',
    sources: [
      {
        sourceName: 'Karnataka Tourism — Kamsale Nrutya',
        sourceType: 'Government tourism',
        sourceUrl: 'https://karnatakatourism.org/en/experiences/kamsale-nrutya'
      }
    ],
    lastVerified: '2026-08-26'
  },
  {
    id: 'ka-culture-sandalwood-carving',
    slug: 'sandalwood-carving',
    name: 'Sandalwood Carving',
    recordType: 'culture',
    state: 'karnataka',
    stateName: 'Karnataka',
    region:
      'Especially Mysuru; also associated with artisan traditions elsewhere in Karnataka',
    community: null,
    category: 'handicrafts',
    categoryName: 'Handicrafts',
    shortDescription:
      'A long-standing Karnataka craft tradition of intricately carving fragrant sandalwood into sculptures and decorative objects.',
    originHistory:
      'Karnataka Tourism describes sandalwood carving as a centuries-old traditional art and notes strong royal patronage, especially during the Wodeyar dynasty.',
    culturalSignificance:
      "The craft is an important part of Karnataka's artisanal heritage and is particularly associated with Mysuru's craft traditions.",
    keyElements: [
      'Hand carving',
      'Sandalwood',
      'Fine detailing',
      'Mythological and floral motifs',
      'Decorative objects and sculptures'
    ],
    images: [],
    media: [],
    relatedPlaces: ['Mysuru'],
    relatedFestivals: [],
    relatedHeritageIds: [],
    relatedCultureIds: [],
    trailIds: [],
    verificationStatus: 'verified',
    sources: [
      {
        sourceName: 'Karnataka Tourism — Sandalwood Carving',
        sourceType: 'Government tourism',
        sourceUrl:
          'https://karnatakatourism.org/en/experiences/sandalwood-carving'
      }
    ],
    lastVerified: '2026-08-26'
  },
  {
    id: 'ka-culture-mysore-silk',
    slug: 'mysore-silk',
    name: 'Mysore Silk',
    recordType: 'culture',
    state: 'karnataka',
    stateName: 'Karnataka',
    region: 'Mysuru',
    community: null,
    category: 'clothing-textiles',
    categoryName: 'Textiles',
    shortDescription:
      'A Mysuru silk-weaving tradition known for lustrous fabric, restrained elegance and the use of pure silk and gold zari.',
    originHistory:
      'Karnataka Tourism associates the tradition with patronage of the Wodeyar kings.',
    culturalSignificance:
      'Mysore Silk is an important part of Karnataka’s textile heritage and is produced at the Karnataka Silk Industries Corporation factory in Mysuru.',
    keyElements: ['Pure silk', 'Gold zari', 'Silk weaving', 'Mysuru'],
    giStatus: 'GI-tagged',
    images: [],
    media: [],
    relatedPlaces: ['Mysuru'],
    relatedFestivals: [],
    relatedHeritageIds: [],
    relatedCultureIds: [],
    trailIds: [],
    verificationStatus: 'verified',
    sources: [
      {
        sourceName: 'Karnataka Tourism — Weaving Traditions of Karnataka',
        sourceType: 'Government tourism',
        sourceUrl:
          'https://karnatakatourism.org/en/experiences/weaving-traditions-of-karnataka'
      }
    ],
    lastVerified: '2026-08-26'
  },
  {
    id: 'ka-culture-ilkal-sarees',
    slug: 'ilkal-sarees',
    name: 'Ilkal Sarees',
    recordType: 'culture',
    state: 'karnataka',
    stateName: 'Karnataka',
    region: 'Ilkal, Bagalkot district',
    community: null,
    category: 'clothing-textiles',
    categoryName: 'Textiles',
    shortDescription:
      'A weaving tradition from Ilkal known for distinctive contrast borders, bold patterns and the characteristic tope teni pallu.',
    originHistory: null,
    culturalSignificance:
      'Ilkal sarees form part of Karnataka’s diverse regional weaving heritage.',
    keyElements: [
      'Contrast borders',
      'Bold patterns',
      'Tope teni pallu',
      'Red or maroon pallu'
    ],
    images: [],
    media: [],
    relatedPlaces: ['Ilkal', 'Bagalkot district'],
    relatedFestivals: [],
    relatedHeritageIds: [],
    relatedCultureIds: [],
    trailIds: [],
    verificationStatus: 'verified',
    sources: [
      {
        sourceName: 'Karnataka Tourism — Weaving Traditions of Karnataka',
        sourceType: 'Government tourism',
        sourceUrl:
          'https://karnatakatourism.org/en/experiences/weaving-traditions-of-karnataka'
      }
    ],
    lastVerified: '2026-08-26'
  },
  {
    id: 'ka-culture-guledgudda-khana',
    slug: 'guledgudda-khana',
    name: 'Guledgudda Khana',
    recordType: 'culture',
    state: 'karnataka',
    stateName: 'Karnataka',
    region: 'Northern Karnataka',
    community: null,
    category: 'clothing-textiles',
    categoryName: 'Textiles',
    shortDescription:
      'A distinctive textile tradition of Karnataka recognized for its characteristic woven textures and regional identity.',
    originHistory: null,
    culturalSignificance:
      'Karnataka Tourism includes Guledgudda Khana among the state’s notable weaving traditions.',
    keyElements: ['Traditional weaving', 'Regional textile'],
    images: [],
    media: [],
    relatedPlaces: [],
    relatedFestivals: [],
    relatedHeritageIds: [],
    relatedCultureIds: [],
    trailIds: [],
    verificationStatus: 'verified',
    sources: [
      {
        sourceName: 'Karnataka Tourism — Weaving Traditions of Karnataka',
        sourceType: 'Government tourism',
        sourceUrl:
          'https://karnatakatourism.org/en/experiences/weaving-traditions-of-karnataka'
      }
    ],
    lastVerified: '2026-08-26'
  },
  {
    id: 'ka-culture-veeragase',
    slug: 'veeragase',
    name: 'Veeragase',
    recordType: 'culture',
    state: 'karnataka',
    stateName: 'Karnataka',
    region: 'Karnataka, especially southern Karnataka',
    community: null,
    category: 'classical-folk-dance',
    categoryName: 'Classical & Folk Dance',
    shortDescription:
      'An energetic Shaivite folk dance of Karnataka associated with Veerabhadra and performed with vigorous martial-style movement.',
    originHistory:
      'Karnataka Tourism describes Veeragase as originating in honour of Veerabhadra and linked to the Dakshayagna narrative.',
    culturalSignificance:
      'The form expresses themes of devotion, heroism and mythological valour and is performed at temple festivals, processions and Mysuru Dasara.',
    keyElements: [
      'Martial-style movement',
      'Traditional drums',
      'Swords',
      'Shaivite symbols',
      'Group performance'
    ],
    images: [],
    media: [],
    relatedPlaces: [],
    relatedFestivals: [
      'Mysuru Dasara',
      'Shravana festivals',
      'Kartika festivals'
    ],
    relatedHeritageIds: [],
    relatedCultureIds: ['ka-culture-mysuru-dasara'],
    trailIds: [],
    verificationStatus: 'verified',
    sources: [
      {
        sourceName: 'Karnataka Tourism — Veeragase',
        sourceType: 'Government tourism',
        sourceUrl: 'https://karnatakatourism.org/en/experiences/veeragase'
      }
    ],
    lastVerified: '2026-08-26'
  },
  {
    id: 'ka-culture-udupi-cuisine',
    slug: 'udupi-cuisine',
    name: 'Udupi Cuisine',
    recordType: 'culture',
    state: 'karnataka',
    stateName: 'Karnataka',
    region: 'Udupi / Coastal Karnataka',
    community: null,
    category: 'regional-cuisine',
    categoryName: 'Cuisine',
    shortDescription:
      'A vegetarian culinary tradition associated with Udupi and highlighted by Karnataka Tourism as one of the state’s distinctive regional food traditions.',
    originHistory: null,
    culturalSignificance:
      'Udupi vegetarian food forms part of Karnataka’s geographically diverse culinary heritage.',
    keyElements: ['Vegetarian cuisine', 'Regional culinary tradition'],
    images: [],
    media: [],
    relatedPlaces: ['Udupi'],
    relatedFestivals: [],
    relatedHeritageIds: [],
    relatedCultureIds: [],
    trailIds: [],
    verificationStatus: 'verified',
    sources: [
      {
        sourceName: 'Karnataka Tourism — Food & Culinary',
        sourceType: 'Government tourism',
        sourceUrl: 'https://karnatakatourism.org/en/experiences/food-culinary'
      }
    ],
    lastVerified: '2026-08-26'
  },
  {
    id: 'ka-culture-kodava-cuisine',
    slug: 'kodava-cuisine',
    name: 'Kodava Cuisine',
    recordType: 'culture',
    state: 'karnataka',
    stateName: 'Karnataka',
    region: 'Kodagu',
    community: 'Kodava',
    category: 'regional-cuisine',
    categoryName: 'Cuisine',
    shortDescription:
      'A regional culinary tradition of Kodagu highlighted within Karnataka’s diverse food heritage.',
    originHistory: null,
    culturalSignificance:
      'Karnataka Tourism identifies Kodava food traditions, including pork preparations, among the distinctive regional flavours of the state.',
    keyElements: ['Regional Kodagu cuisine', 'Pork preparations'],
    images: [],
    media: [],
    relatedPlaces: ['Kodagu'],
    relatedFestivals: [],
    relatedHeritageIds: [],
    relatedCultureIds: [],
    trailIds: [],
    verificationStatus: 'verified',
    sources: [
      {
        sourceName: 'Karnataka Tourism — Food & Culinary',
        sourceType: 'Government tourism',
        sourceUrl: 'https://karnatakatourism.org/en/experiences/food-culinary'
      }
    ],
    lastVerified: '2026-08-26'
  },
  {
    id: 'ka-culture-bidriware',
    slug: 'bidriware',
    name: 'Bidriware',
    recordType: 'culture',
    state: 'karnataka',
    stateName: 'Karnataka',
    region: 'Bidar',
    community: null,
    category: 'handicrafts',
    categoryName: 'Handicrafts',
    shortDescription:
      'A distinctive metal-inlay craft associated with Bidar, characterized by silver inlay work on a dark metal surface.',
    originHistory:
      'Karnataka Tourism describes Bidar as famous for Bidriware and associates the craft with royal patronage.',
    culturalSignificance:
      'Bidriware is a defining craft tradition of Bidar and an important part of the city’s living artistic heritage.',
    keyElements: ['Metal craft', 'Silver inlay', 'Dark metal surface', 'Bidar'],
    images: [],
    media: [],
    relatedPlaces: ['Bidar'],
    relatedFestivals: ['Bidar Utsav'],
    relatedHeritageIds: ['ka-heritage-bidar-fort'],
    relatedCultureIds: [],
    trailIds: [],
    verificationStatus: 'verified',
    sources: [
      {
        sourceName: 'Karnataka Tourism — Bidar',
        sourceType: 'Government tourism',
        sourceUrl: 'https://karnatakatourism.org/en/destinations/bidar/'
      },
      {
        sourceName: 'Karnataka Tourism — Bidar Utsav',
        sourceType: 'Government tourism',
        sourceUrl: 'https://karnatakatourism.org/en/events/bidar-utsav'
      }
    ],
    lastVerified: '2026-08-26'
  },
  {
    id: 'ka-culture-kolata',
    slug: 'kolata',
    name: 'Kolata',
    recordType: 'culture',
    state: 'karnataka',
    stateName: 'Karnataka',
    region:
      'Across Karnataka; particularly documented in rural Mysuru, Dharwad and Ballari districts',
    community: null,
    category: 'classical-folk-dance',
    categoryName: 'Classical & Folk Dance',
    shortDescription:
      'A traditional Karnataka folk dance performed in synchronized groups using short wooden sticks.',
    originHistory: null,
    culturalSignificance:
      'Kolata combines music, synchronized dance and oral storytelling and is performed at harvest celebrations, weddings, temple festivals, village fairs and other community occasions.',
    keyElements: [
      'Wooden sticks',
      'Circular formations',
      'Synchronized movement',
      'Folk music and song',
      'Oral storytelling'
    ],
    images: [],
    media: [],
    relatedPlaces: ['Mysuru district', 'Dharwad district', 'Ballari district'],
    relatedFestivals: [
      'Dasara',
      'Temple festivals',
      'Village fairs',
      'Harvest festivals'
    ],
    relatedHeritageIds: [],
    relatedCultureIds: ['ka-culture-mysuru-dasara'],
    trailIds: [],
    verificationStatus: 'verified',
    sources: [
      {
        sourceName: 'Karnataka Tourism — Kolata',
        sourceType: 'Government tourism',
        sourceUrl: 'https://karnatakatourism.org/en/experiences/kolata'
      }
    ],
    lastVerified: '2026-08-26'
  },
  {
    id: 'ka-culture-nagamandala',
    slug: 'nagamandala',
    name: 'Nagamandala',
    recordType: 'culture',
    state: 'karnataka',
    stateName: 'Karnataka',
    region: 'Coastal Karnataka / Dakshina Kannada',
    community: null,
    category: 'local-customs',
    categoryName: 'Local Customs',
    shortDescription:
      'An elaborate serpent-worship ritual tradition of coastal Karnataka combining sacred design, dance and all-night ceremonial performance.',
    originHistory: null,
    culturalSignificance:
      'Karnataka Tourism documents Nagamandala as a ritual performed in Dakshina Kannada to appease the serpent spirit.',
    keyElements: [
      'Serpent worship',
      'Ritual dance',
      'Sacred ground design',
      'Natural colours',
      'Night-long ceremony'
    ],
    images: [],
    media: [],
    relatedPlaces: ['Dakshina Kannada'],
    relatedFestivals: [],
    relatedHeritageIds: [],
    relatedCultureIds: [],
    trailIds: [],
    verificationStatus: 'verified',
    sources: [
      {
        sourceName:
          'Karnataka Tourism — Art forms that inform Karnataka Culture',
        sourceType: 'Government tourism',
        sourceUrl: 'https://old.karnatakatourism.org/karnataka-culture/'
      }
    ],
    lastVerified: '2026-08-26'
  },
  {
    id: 'ka-culture-bengaluru-karaga',
    slug: 'bengaluru-karaga',
    name: 'Bengaluru Karaga',
    recordType: 'culture',
    state: 'karnataka',
    stateName: 'Karnataka',
    region: 'Bengaluru',
    community: 'Thigalar community',
    category: 'festivals',
    categoryName: 'Festivals',
    shortDescription:
      'A nine-day Bengaluru folk-religious festival centred on the Dharmaraya Swamy Temple and associated with Draupadi.',
    originHistory:
      'Karnataka Tourism describes the Karaga tradition as started and sustained by the Thigalar community.',
    culturalSignificance:
      'The festival includes a major night procession led by a priest carrying a flower-decorated Karaga and includes an established visit to the tomb of an 18th-century Muslim saint.',
    keyElements: [
      'Karaga procession',
      'Dharmaraya Swamy Temple',
      'Flower-decorated Karaga',
      'Sword-bearing participants',
      'Draupadi tradition'
    ],
    images: [],
    media: [],
    relatedPlaces: ['Dharmaraya Swamy Temple', 'Bengaluru'],
    relatedFestivals: [],
    relatedHeritageIds: [],
    relatedCultureIds: [],
    trailIds: [],
    verificationStatus: 'verified',
    sources: [
      {
        sourceName: 'Karnataka Tourism — Bengaluru Karaga',
        sourceType: 'Government tourism',
        sourceUrl:
          'https://karnatakatourism.org/en/experiences/bengaluru-karaga/'
      }
    ],
    lastVerified: '2026-08-26'
  },
  {
    id: 'ka-culture-gaarudi-gombe',
    slug: 'gaarudi-gombe',
    name: 'Gaarudi Gombe',
    recordType: 'culture',
    state: 'karnataka',
    stateName: 'Karnataka',
    region: 'Karnataka',
    community: null,
    category: 'classical-folk-dance',
    categoryName: 'Classical & Folk Dance',
    shortDescription:
      'A Karnataka folk performance in which dancers wear large, colourful doll costumes made using materials including bamboo and papier-mâché.',
    originHistory:
      'Karnataka Tourism describes the tradition as centuries old and connected with festivals and legends.',
    culturalSignificance:
      'The oversized doll costumes make Gaarudi Gombe a distinctive visual folk-performance tradition of Karnataka.',
    keyElements: [
      'Large doll costumes',
      'Bamboo',
      'Papier-mâché',
      'Dance',
      'Festival performance'
    ],
    images: [],
    media: [],
    relatedPlaces: [],
    relatedFestivals: [],
    relatedHeritageIds: [],
    relatedCultureIds: [],
    trailIds: [],
    verificationStatus: 'verified',
    sources: [
      {
        sourceName: 'Karnataka Tourism — Gaarudi Gombe',
        sourceType: 'Government tourism',
        sourceUrl: 'https://karnatakatourism.org/kn/experiences/gaarudi-gombe'
      }
    ],
    lastVerified: '2026-08-26'
  },
  {
    id: 'ka-culture-kadalekai-parishe',
    slug: 'basavanagudi-kadalekai-parishe',
    name: 'Basavanagudi Kadalekai Parishe',
    recordType: 'culture',
    state: 'karnataka',
    stateName: 'Karnataka',
    region: 'Basavanagudi, Bengaluru',
    community: null,
    category: 'festivals',
    categoryName: 'Festivals',
    shortDescription:
      'An annual groundnut fair in Bengaluru associated with the first yield of the groundnut crop and local ritual traditions.',
    originHistory: null,
    culturalSignificance:
      'Karnataka Tourism identifies Kadalekai Parishe as a popular Bengaluru groundnut festival welcoming the first yield of the crop.',
    keyElements: [
      'Groundnut fair',
      'First crop yield',
      'Local rituals',
      'Basavanagudi'
    ],
    images: [],
    media: [],
    relatedPlaces: ['Basavanagudi', 'Bengaluru'],
    relatedFestivals: [],
    relatedHeritageIds: [],
    relatedCultureIds: [],
    trailIds: [],
    verificationStatus: 'verified',
    sources: [
      {
        sourceName: 'Karnataka Tourism — Bengaluru Urban',
        sourceType: 'Government tourism',
        sourceUrl: 'https://old.karnatakatourism.org/tour-item/bengaluru-urban/'
      }
    ],
    lastVerified: '2026-08-26'
  },
  {
    id: 'ka-culture-mahamastakabhisheka',
    slug: 'mahamastakabhisheka',
    name: 'Mahamastakabhisheka',
    recordType: 'culture',
    state: 'karnataka',
    stateName: 'Karnataka',
    region: 'Shravanabelagola, Hassan district',
    community: 'Jain community',
    category: 'festivals',
    categoryName: 'Festivals',
    shortDescription:
      'A major Jain ceremonial festival at Shravanabelagola associated with the Gommateshwara (Bahubali) statue.',
    originHistory: null,
    culturalSignificance:
      'Karnataka Tourism states that the grand Mahamastakabhisheka is held every 12 years with elaborate rituals.',
    keyElements: [
      'Gommateshwara (Bahubali)',
      'Ceremonial anointing',
      'Jain pilgrimage',
      'Shravanabelagola'
    ],
    images: [],
    media: [],
    relatedPlaces: ['Shravanabelagola'],
    relatedFestivals: [],
    relatedHeritageIds: ['ka-heritage-shravanabelagola'],
    relatedCultureIds: [],
    trailIds: [],
    verificationStatus: 'verified',
    sources: [
      {
        sourceName: 'Karnataka Tourism — Shravanabelagola',
        sourceType: 'Government tourism',
        sourceUrl:
          'https://karnatakatourism.org/en/attractions/shravanabelagola/'
      },
      {
        sourceName: 'Karnataka Tourism — Festivals, Fairs & Cultural Events',
        sourceType: 'Government tourism',
        sourceUrl: 'https://karnatakatourism.org/en/events/'
      }
    ],
    lastVerified: '2026-08-26'
  },
  {
    id: 'ka-culture-udupi-paryaya',
    slug: 'udupi-paryaya-utsava',
    name: 'Udupi Paryaya Utsava',
    recordType: 'culture',
    state: 'karnataka',
    stateName: 'Karnataka',
    region: 'Udupi',
    community: null,
    category: 'festivals',
    categoryName: 'Festivals',
    shortDescription:
      'A religious festival tradition of Udupi listed by Karnataka Tourism among coastal Karnataka’s notable festivals.',
    originHistory: null,
    culturalSignificance:
      'Udupi Paryaya Utsava forms part of coastal Karnataka’s living religious and festival heritage.',
    keyElements: ['Udupi', 'Religious festival', 'Coastal Karnataka'],
    images: [],
    media: [],
    relatedPlaces: ['Udupi'],
    relatedFestivals: [],
    relatedHeritageIds: [],
    relatedCultureIds: [],
    trailIds: [],
    verificationStatus: 'verified',
    sources: [
      {
        sourceName: 'Karnataka Tourism — Festivals',
        sourceType: 'Government tourism',
        sourceUrl: 'https://old.karnatakatourism.org/tour-item/festivals/'
      }
    ],
    lastVerified: '2026-08-26'
  },
  {
    id: 'ka-culture-vairamudi-festival',
    slug: 'vairamudi-festival',
    name: 'Vairamudi Festival',
    recordType: 'culture',
    state: 'karnataka',
    stateName: 'Karnataka',
    region: 'Melukote',
    community: null,
    category: 'festivals',
    categoryName: 'Festivals',
    shortDescription:
      'A religious festival associated with Melukote and listed by Karnataka Tourism among southern Karnataka’s notable festivals.',
    originHistory: null,
    culturalSignificance:
      'The festival contributes to Melukote’s continuing religious and ceremonial heritage.',
    keyElements: [
      'Melukote',
      'Temple festival',
      'Religious procession tradition'
    ],
    images: [],
    media: [],
    relatedPlaces: ['Melukote'],
    relatedFestivals: [],
    relatedHeritageIds: ['ka-heritage-melukote'],
    relatedCultureIds: [],
    trailIds: [],
    verificationStatus: 'verified',
    sources: [
      {
        sourceName: 'Karnataka Tourism — Festivals',
        sourceType: 'Government tourism',
        sourceUrl: 'https://old.karnatakatourism.org/tour-item/festivals/'
      }
    ],
    lastVerified: '2026-08-26'
  },
  {
    id: 'ka-culture-hampi-utsav',
    slug: 'hampi-utsav',
    name: 'Hampi Utsav',
    recordType: 'culture',
    state: 'karnataka',
    stateName: 'Karnataka',
    region: 'Hampi / Vijayanagara',
    community: null,
    category: 'festivals',
    categoryName: 'Festivals',
    shortDescription:
      'A cultural festival associated with Hampi and listed by Karnataka Tourism among northern Karnataka’s notable festivals.',
    originHistory: null,
    culturalSignificance:
      'Hampi Utsav connects contemporary cultural celebration with the heritage landscape of Hampi.',
    keyElements: ['Hampi', 'Cultural performances', 'Festival'],
    images: [],
    media: [],
    relatedPlaces: ['Hampi'],
    relatedFestivals: [],
    relatedHeritageIds: ['ka-heritage-hampi'],
    relatedCultureIds: [],
    trailIds: [],
    verificationStatus: 'verified',
    sources: [
      {
        sourceName: 'Karnataka Tourism — Festivals',
        sourceType: 'Government tourism',
        sourceUrl: 'https://old.karnatakatourism.org/tour-item/festivals/'
      }
    ],
    lastVerified: '2026-08-26'
  },
  {
    id: 'ka-culture-chalukya-utsava',
    slug: 'chalukya-utsava',
    name: 'Chalukya Utsava',
    recordType: 'culture',
    state: 'karnataka',
    stateName: 'Karnataka',
    region: 'North Karnataka',
    community: null,
    category: 'festivals',
    categoryName: 'Festivals',
    shortDescription:
      'A cultural festival listed by Karnataka Tourism among northern Karnataka’s festival traditions.',
    originHistory: null,
    culturalSignificance:
      'Chalukya Utsava forms part of northern Karnataka’s contemporary celebration of regional heritage and culture.',
    keyElements: ['North Karnataka', 'Cultural festival'],
    images: [],
    media: [],
    relatedPlaces: [],
    relatedFestivals: [],
    relatedHeritageIds: [],
    relatedCultureIds: [],
    trailIds: [],
    verificationStatus: 'verified',
    sources: [
      {
        sourceName: 'Karnataka Tourism — Festivals',
        sourceType: 'Government tourism',
        sourceUrl: 'https://old.karnatakatourism.org/tour-item/festivals/'
      }
    ],
    lastVerified: '2026-08-26'
  },
  {
    id: 'ka-culture-kaveri-sankramana',
    slug: 'kaveri-sankramana',
    name: 'Kaveri Sankramana',
    recordType: 'culture',
    state: 'karnataka',
    stateName: 'Karnataka',
    region: 'Kodagu',
    community: null,
    category: 'festivals',
    categoryName: 'Festivals',
    shortDescription:
      'A festival tradition associated with southern Karnataka and listed by Karnataka Tourism among the region’s notable celebrations.',
    originHistory: null,
    culturalSignificance:
      'Kaveri Sankramana forms part of Kodagu’s living festival and religious traditions.',
    keyElements: ['Kodagu', 'Kaveri', 'Religious festival'],
    images: [],
    media: [],
    relatedPlaces: ['Kodagu'],
    relatedFestivals: [],
    relatedHeritageIds: [],
    relatedCultureIds: [],
    trailIds: [],
    verificationStatus: 'verified',
    sources: [
      {
        sourceName: 'Karnataka Tourism — Festivals',
        sourceType: 'Government tourism',
        sourceUrl: 'https://old.karnatakatourism.org/tour-item/festivals/'
      }
    ],
    lastVerified: '2026-08-26'
  },

  // RAJASTHAN VERIFIED (24 Records)
  {
    id: 'rj-culture-kalbelia',
    slug: 'kalbelia-folk-songs-dances',
    name: 'Kalbelia Folk Songs and Dances',
    recordType: 'culture',
    state: 'rajasthan',
    stateName: 'Rajasthan',
    region: 'Rajasthan',
    community: 'Kalbelia community',
    category: 'classical-folk-dance',
    categoryName: 'Classical & Folk Dance',
    shortDescription:
      'A living song-and-dance tradition of the Kalbelia community, inscribed by UNESCO on the Representative List of the Intangible Cultural Heritage of Humanity.',
    originHistory:
      'UNESCO describes the tradition as an expression of the Kalbelia community’s traditional way of life, creatively adapted as older occupations changed.',
    culturalSignificance:
      'Song and dance are markers of Kalbelia identity and pride and transmit stories and mythological knowledge through an oral tradition.',
    keyElements: [
<<<<<<< Updated upstream
      'Swirling dance',
      'Black embroidered costumes',
      'Poongi',
      'Khanjari',
      'Improvised songs',
      'Oral transmission'
    ],
    images: [],
=======
      'Sambalpuri language lyrics',
      'Dhol, Tasha, Mahuri instruments',
      'Karma geet (harvest songs)',
      'Dalkhai geet',
      'Devotional songs to Samalesvari'
    ],
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Sambalpuri_Dance.JPG/1280px-Sambalpuri_Dance.JPG",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Sambalpuri_folk_dance.jpg/1280px-Sambalpuri_folk_dance.jpg"
],
>>>>>>> Stashed changes
    media: [],
    relatedPlaces: [],
    relatedFestivals: ['Holi'],
    relatedHeritageIds: [],
    relatedCultureIds: [],
    trailIds: [],
    unescoIntangibleStatus:
      'Representative List of the Intangible Cultural Heritage of Humanity (inscribed 2010)',
    verificationStatus: 'verified',
    sources: [
      {
        sourceName:
          'UNESCO Intangible Cultural Heritage — Kalbelia folk songs and dances of Rajasthan',
        sourceType: 'UNESCO ICH',
        sourceUrl:
          'https://ich.unesco.org/en/RL/kalbelia-folk-songs-and-dances-of-rajasthan-00340'
      }
    ],
    lastVerified: '2026-08-26'
  },
  {
    id: 'rj-culture-ghoomar',
    slug: 'ghoomar',
    name: 'Ghoomar',
    recordType: 'culture',
    state: 'rajasthan',
    stateName: 'Rajasthan',
    region: 'Rajasthan',
    community: null,
    category: 'classical-folk-dance',
    categoryName: 'Classical & Folk Dance',
    shortDescription:
      'A widely recognized Rajasthani folk-dance tradition performed in colourful traditional attire.',
    originHistory: null,
    culturalSignificance:
      'Rajasthan Tourism repeatedly presents Ghoomar as a central folk-dance form in the state’s cultural festivals and performances.',
    keyElements: [
      'Group dance',
      'Circular movement',
      'Traditional attire',
      'Folk music'
    ],
    images: [],
    media: [],
    relatedPlaces: [],
    relatedFestivals: ['Marwar Festival', 'Abhaneri Festival'],
    relatedHeritageIds: [],
    relatedCultureIds: [],
    trailIds: [],
    verificationStatus: 'verified',
    sources: [
      {
        sourceName: 'Rajasthan Tourism — Media Room / Ghoomar Festival',
        sourceType: 'Government tourism',
        sourceUrl: 'https://www.tourism.rajasthan.gov.in/media.html'
      },
      {
        sourceName: 'Rajasthan Tourism — Abhaneri Festival',
        sourceType: 'Government tourism',
        sourceUrl:
          'https://www.tourism.rajasthan.gov.in/fairs-and-festivals.html'
      }
    ],
    lastVerified: '2026-08-26'
  },
  {
    id: 'rj-culture-kathputli',
    slug: 'kathputli',
    name: 'Kathputli',
    recordType: 'culture',
    state: 'rajasthan',
    stateName: 'Rajasthan',
    region: 'Rajasthan; traditionally associated with Bhat puppeteers',
    community: 'Bhat puppeteer tradition',
    category: 'folklore-oral-traditions',
    categoryName: 'Folklore & Oral Traditions',
    shortDescription:
      'Rajasthan’s traditional string-puppetry form using carved wooden dolls, music, narration and dramatic storytelling.',
    originHistory:
      'Rajasthan Tourism associates Kathputli with Rajasthan’s Bhat community and a long tradition of string-marionette performance.',
    culturalSignificance:
      'Kathputli has transmitted heroic tales, folklore, epics and social messages through performance.',
    keyElements: [
      'Wooden puppets',
      'Strings',
      'Music',
      'Narration',
      'Folk stories',
      'Travelling performance'
    ],
    images: [],
    media: [],
    relatedPlaces: ['Nagaur region'],
    relatedFestivals: [],
    relatedHeritageIds: [],
    relatedCultureIds: [],
    trailIds: [],
    verificationStatus: 'verified',
    sources: [
      {
        sourceName: 'Rajasthan Tourism — Puppets / Janesthan',
        sourceType: 'Government tourism',
        sourceUrl:
          'https://www.tourism.rajasthan.gov.in/travel-diaries/janesthan.html'
      }
    ],
    lastVerified: '2026-08-26'
  },
  {
    id: 'rj-culture-gair',
    slug: 'gair',
    name: 'Gair',
    recordType: 'culture',
    state: 'rajasthan',
    stateName: 'Rajasthan',
    region: 'Rajasthan',
    community: null,
    category: 'classical-folk-dance',
    categoryName: 'Classical & Folk Dance',
    shortDescription:
      'A Rajasthani folk-dance form regularly presented at state cultural festivals.',
    originHistory: null,
    culturalSignificance:
      'Rajasthan Tourism features Gair among the folk dances performed at major fairs and festivals.',
    keyElements: ['Folk dance', 'Group performance', 'Festival setting'],
    images: [],
    media: [],
    relatedPlaces: [],
    relatedFestivals: ['Pushkar Fair', 'Mount Abu Summer Festival'],
    relatedHeritageIds: [],
    relatedCultureIds: [],
    trailIds: [],
    verificationStatus: 'verified',
    sources: [
      {
        sourceName: 'Rajasthan Tourism — Pushkar Fair press release',
        sourceType: 'Government tourism',
        sourceUrl:
          'https://www.tourism.rajasthan.gov.in/content/dam/rajasthan-tourism/english/pdf/press-release-pdf/39.pdf'
      },
      {
        sourceName: 'Rajasthan Tourism — Mount Abu Summer Festival',
        sourceType: 'Government tourism',
        sourceUrl:
          'https://www.tourism.rajasthan.gov.in/travel-diaries/vikassthan.html'
      }
    ],
    lastVerified: '2026-08-26'
  },
  {
    id: 'rj-culture-kachhi-ghodi',
    slug: 'kachhi-ghodi',
    name: 'Kachhi Ghodi',
    recordType: 'culture',
    state: 'rajasthan',
    stateName: 'Rajasthan',
    region: 'Rajasthan',
    community: null,
    category: 'classical-folk-dance',
    categoryName: 'Classical & Folk Dance',
    shortDescription:
      'A colourful Rajasthani folk performance featuring dancers using decorated dummy-horse costumes.',
    originHistory: null,
    culturalSignificance:
      'Rajasthan Tourism includes Kachhi Ghodi among the traditional performances presented at major state cultural festivals.',
    keyElements: [
      'Dummy horse costume',
      'Dance',
      'Folk music',
      'Festival performance'
    ],
    images: [],
    media: [],
    relatedPlaces: [],
    relatedFestivals: ['Abhaneri Festival', 'Kumbhalgarh Festival'],
    relatedHeritageIds: [],
    relatedCultureIds: [],
    trailIds: [],
    verificationStatus: 'verified',
    sources: [
      {
        sourceName: 'Rajasthan Tourism — Abhaneri Festival',
        sourceType: 'Government tourism',
        sourceUrl:
          'https://www.tourism.rajasthan.gov.in/fairs-and-festivals.html'
      },
      {
        sourceName: 'Rajasthan Tourism — Kumbhalgarh Festival',
        sourceType: 'Government tourism',
        sourceUrl:
          'https://www.tourism.rajasthan.gov.in/travel-diaries/irasthan.html'
      }
    ],
    lastVerified: '2026-08-26'
  },
  {
    id: 'rj-culture-blue-pottery',
    slug: 'blue-pottery',
    name: 'Blue Pottery',
    recordType: 'culture',
    state: 'rajasthan',
    stateName: 'Rajasthan',
    region: 'Jaipur and nearby craft centres',
    community: null,
    category: 'handicrafts',
    categoryName: 'Handicrafts',
    shortDescription:
      'A distinctive Jaipur pottery tradition using a quartz-based body rather than ordinary clay and known for blue and turquoise glazed decoration.',
    originHistory:
      'Rajasthan Tourism states that blue pottery came to Jaipur through Persian and Afghan influences and was further developed by Rajasthani artisans.',
    culturalSignificance:
      'Blue pottery has become one of Jaipur’s signature craft traditions.',
    keyElements: [
      'Quartz-based body',
      'Blue and turquoise glaze',
      'Copper oxide',
      'Cobalt oxide',
      'Floral, bird and animal motifs'
    ],
    images: [],
    media: [],
    relatedPlaces: ['Jaipur', 'Sanganer', 'Mahalan', 'Neota'],
    relatedFestivals: [],
    relatedHeritageIds: ['rj-heritage-jaipur-city'],
    relatedCultureIds: [],
    trailIds: [],
    verificationStatus: 'verified',
    sources: [
      {
        sourceName: 'Rajasthan Tourism — Shopping in Rajasthan',
        sourceType: 'Government tourism',
        sourceUrl:
          'https://www.tourism.rajasthan.gov.in/content/rajasthan-tourism/en/shopping-in-rajasthan.html'
      }
    ],
    lastVerified: '2026-08-26'
  },
  {
    id: 'rj-culture-bandhani',
    slug: 'bandhani',
    name: 'Bandhani',
    recordType: 'culture',
    state: 'rajasthan',
    stateName: 'Rajasthan',
    region: 'Across Rajasthan',
    community: null,
    category: 'clothing-textiles',
    categoryName: 'Textiles',
    shortDescription:
      'A traditional tie-and-dye textile practice widely associated with Rajasthan and known for patterned resist-dyed fabrics.',
    originHistory: null,
    culturalSignificance:
      'Bandhani forms a major part of Rajasthan’s textile identity and is used for garments and symbolic colour traditions.',
    keyElements: [
      'Tie and dye',
      'Resist patterning',
      'Colour symbolism',
      'Sarees',
      'Dupattas'
    ],
    images: [],
    media: [],
    relatedPlaces: [],
    relatedFestivals: [],
    relatedHeritageIds: [],
    relatedCultureIds: [],
    trailIds: [],
    verificationStatus: 'verified',
    sources: [
      {
        sourceName: 'Rajasthan Tourism — Textile / Janesthan',
        sourceType: 'Government tourism',
        sourceUrl:
          'https://www.tourism.rajasthan.gov.in/travel-diaries/janesthan.html'
      }
    ],
    lastVerified: '2026-08-26'
  },
  {
    id: 'rj-culture-leheriya',
    slug: 'leheriya',
    name: 'Leheriya',
    recordType: 'culture',
    state: 'rajasthan',
    stateName: 'Rajasthan',
    region: 'Rajasthan',
    community: null,
    category: 'clothing-textiles',
    categoryName: 'Textiles',
    shortDescription:
      'A traditional Rajasthani textile style named for wave-like flowing patterns created through resist-dyeing.',
    originHistory: null,
    culturalSignificance:
      'Leheriya is a recognized part of Rajasthan’s regional textile heritage and appears on turbans, sarees and dupattas.',
    keyElements: [
      'Wave patterns',
      'Tie-dye technique',
      'Turbans',
      'Sarees',
      'Dupattas'
    ],
    images: [],
    media: [],
    relatedPlaces: [],
    relatedFestivals: [],
    relatedHeritageIds: [],
    relatedCultureIds: [],
    trailIds: [],
    verificationStatus: 'verified',
    sources: [
      {
        sourceName: 'Rajasthan Tourism — Textile / Janesthan',
        sourceType: 'Government tourism',
        sourceUrl:
          'https://www.tourism.rajasthan.gov.in/travel-diaries/janesthan.html'
      }
    ],
    lastVerified: '2026-08-26'
  },
  {
    id: 'rj-culture-bagru-block-printing',
    slug: 'bagru-block-printing',
    name: 'Bagru Block Printing',
    recordType: 'culture',
    state: 'rajasthan',
    stateName: 'Rajasthan',
    region: 'Bagru / Jaipur region',
    community: null,
    category: 'clothing-textiles',
    categoryName: 'Textiles',
    shortDescription:
      'A Rajasthani textile-printing tradition associated with Bagru and known for geometric patterns, earthy colours and block-printing techniques.',
    originHistory: null,
    culturalSignificance:
      'Bagru represents one of Rajasthan’s major regional textile-printing identities.',
    keyElements: [
      'Hand block printing',
      'Natural dyeing',
      'Geometric patterns',
      'Earthy colours'
    ],
    images: [],
    media: [],
    relatedPlaces: ['Bagru'],
    relatedFestivals: [],
    relatedHeritageIds: [],
    relatedCultureIds: [],
    trailIds: [],
    verificationStatus: 'verified',
    sources: [
      {
        sourceName: 'Rajasthan Tourism — Textile / Janesthan',
        sourceType: 'Government tourism',
        sourceUrl:
          'https://www.tourism.rajasthan.gov.in/travel-diaries/janesthan.html'
      }
    ],
    lastVerified: '2026-08-26'
  },
  {
    id: 'rj-culture-sanganeri-block-printing',
    slug: 'sanganeri-block-printing',
    name: 'Sanganeri Block Printing',
    recordType: 'culture',
    state: 'rajasthan',
    stateName: 'Rajasthan',
    region: 'Sanganer, Jaipur',
    community: null,
    category: 'clothing-textiles',
    categoryName: 'Textiles',
    shortDescription:
      'A traditional textile block-printing craft associated with Sanganer near Jaipur.',
    originHistory: null,
    culturalSignificance:
      'Sanganer is officially highlighted by Rajasthan Tourism for textile block printing alongside other craft traditions.',
    keyElements: ['Hand block printing', 'Textile craft', 'Sanganer'],
    images: [],
    media: [],
    relatedPlaces: ['Sanganer', 'Jaipur'],
    relatedFestivals: [],
    relatedHeritageIds: ['rj-heritage-jaipur-city'],
    relatedCultureIds: [],
    trailIds: [],
    verificationStatus: 'verified',
    sources: [
      {
        sourceName: 'Rajasthan Tourism — Sanganer / Sunitasthan',
        sourceType: 'Government tourism',
        sourceUrl:
          'https://www.tourism.rajasthan.gov.in/travel-diaries/Sunitasthan.html'
      }
    ],
    lastVerified: '2026-08-26'
  },
  {
    id: 'rj-culture-lac-jewellery',
    slug: 'lac-jewellery-bangles',
    name: 'Lac Jewellery and Bangles',
    recordType: 'culture',
    state: 'rajasthan',
    stateName: 'Rajasthan',
    region: 'Rajasthan',
    community: null,
    category: 'handicrafts',
    categoryName: 'Handicrafts',
    shortDescription:
      'A prominent Rajasthani decorative craft using lac resin to produce jewellery, especially bangles.',
    originHistory: null,
    culturalSignificance:
      'Rajasthan Tourism identifies lac jewellery and bangles as a prominent craft tradition of the state.',
    keyElements: ['Lac resin', 'Bangles', 'Jewellery', 'Decorative craft'],
    images: [],
    media: [],
    relatedPlaces: [],
    relatedFestivals: [],
    relatedHeritageIds: [],
    relatedCultureIds: [],
    trailIds: [],
    verificationStatus: 'verified',
    sources: [
      {
        sourceName: 'Rajasthan Tourism — Janesthan crafts',
        sourceType: 'Government tourism',
        sourceUrl:
          'https://www.tourism.rajasthan.gov.in/travel-diaries/janesthan.html'
      }
    ],
    lastVerified: '2026-08-26'
  },
  {
    id: 'rj-culture-kundan-jewellery',
    slug: 'kundan-jewellery',
    name: 'Kundan Jewellery',
    recordType: 'culture',
    state: 'rajasthan',
    stateName: 'Rajasthan',
    region: 'Jaipur',
    community: null,
    category: 'handicrafts',
    categoryName: 'Handicrafts',
    shortDescription:
      'A jewellery tradition strongly associated with Jaipur and Rajasthan’s royal craft identity.',
    originHistory: null,
    culturalSignificance:
      'Rajasthan Tourism highlights Kundan jewellery from Jaipur among the state’s characteristic craft products.',
    keyElements: ['Jewellery craft', 'Jaipur', 'Decorative setting'],
    images: [],
    media: [],
    relatedPlaces: ['Jaipur'],
    relatedFestivals: [],
    relatedHeritageIds: ['rj-heritage-jaipur-city'],
    relatedCultureIds: [],
    trailIds: [],
    verificationStatus: 'verified',
    sources: [
      {
        sourceName: 'Rajasthan Tourism — Amisthan / Shopping',
        sourceType: 'Government tourism',
        sourceUrl:
          'https://www.tourism.rajasthan.gov.in/travel-diaries/amisthan.html'
      }
    ],
    lastVerified: '2026-08-26'
  },
  {
    id: 'rj-culture-pushkar-fair',
    slug: 'pushkar-fair',
    name: 'Pushkar Fair',
    recordType: 'culture',
    state: 'rajasthan',
    stateName: 'Rajasthan',
    region: 'Pushkar, Ajmer district',
    community: null,
    category: 'festivals',
    categoryName: 'Festivals',
    shortDescription:
      'A major religious and livestock fair at Pushkar combining pilgrimage, animal trading, markets, competitions and cultural programmes.',
    originHistory: null,
    culturalSignificance:
      'Official Rajasthan Tourism material describes Pushkar Fair as a world-famous religious and cattle fair associated particularly with camels and horses.',
    keyElements: [
      'Religious fair',
      'Camel and horse trading',
      'Handicraft market',
      'Cultural performances',
      'Competitions',
      'Pushkar Lake rituals'
    ],
    images: [],
    media: [],
    relatedPlaces: ['Pushkar'],
    relatedFestivals: [],
    relatedHeritageIds: ['rj-heritage-pushkar'],
    relatedCultureIds: [],
    trailIds: [],
    verificationStatus: 'verified',
    sources: [
      {
        sourceName: 'Rajasthan Tourism — Pushkar Fair programme',
        sourceType: 'Government tourism',
        sourceUrl:
          'https://www.tourism.rajasthan.gov.in/content/dam/rajasthan-tourism/english/homepage/topslider/Pushkar_Fair_2024_Prog.pdf'
      },
      {
        sourceName: 'Rajasthan Tourism — Pushkar Fair document',
        sourceType: 'Government tourism',
        sourceUrl:
          'https://www.tourism.rajasthan.gov.in/content/dam/rajasthan-tourism/english/pdf/tender-pdf/52.pdf'
      }
    ],
    lastVerified: '2026-08-26'
  },
  {
    id: 'rj-culture-desert-festival',
    slug: 'desert-festival-jaisalmer',
    name: 'Desert Festival, Jaisalmer',
    recordType: 'culture',
    state: 'rajasthan',
    stateName: 'Rajasthan',
    region: 'Jaisalmer',
    community: null,
    category: 'festivals',
    categoryName: 'Festivals',
    shortDescription:
      'A Rajasthan cultural festival held in Jaisalmer and centered on the desert region’s performance traditions and public celebration.',
    originHistory: null,
    culturalSignificance:
      'Rajasthan Tourism lists Desert Festival among the state’s major recurring fairs and festivals.',
    keyElements: [
      'Jaisalmer',
      'Desert culture',
      'Folk performances',
      'Public festival'
    ],
    images: [],
    media: [],
    relatedPlaces: ['Jaisalmer'],
    relatedFestivals: [],
    relatedHeritageIds: ['rj-heritage-jaisalmer-fort'],
    relatedCultureIds: [],
    trailIds: [],
    verificationStatus: 'verified',
    sources: [
      {
        sourceName: 'Rajasthan Tourism — Media Room / Desert Festival',
        sourceType: 'Government tourism',
        sourceUrl: 'https://www.tourism.rajasthan.gov.in/media.html'
      },
      {
        sourceName: 'Rajasthan Tourism — Fairs and Festivals calendar',
        sourceType: 'Government tourism',
        sourceUrl:
          'https://www.tourism.rajasthan.gov.in/content/dam/rajasthan-tourism/english/palaces-to-visit/FF-2018.pdf'
      }
    ],
    lastVerified: '2026-08-26'
  },
  {
    id: 'rj-culture-gangaur',
    slug: 'gangaur-festival',
    name: 'Gangaur Festival',
    recordType: 'culture',
    state: 'rajasthan',
    stateName: 'Rajasthan',
    region: 'Rajasthan; prominently celebrated in Jaipur and Udaipur',
    community: null,
    category: 'festivals',
    categoryName: 'Festivals',
    shortDescription:
      'A major Rajasthan festival tradition celebrated in the spring season and prominently represented in state cultural programming.',
    originHistory: null,
    culturalSignificance:
      'Gangaur is one of Rajasthan’s major recurring public and religious festival traditions.',
    keyElements: [
      'Festival processions',
      'Traditional dress',
      'Religious observance',
      'Public celebration'
    ],
    images: [],
    media: [],
    relatedPlaces: ['Jaipur', 'Udaipur'],
    relatedFestivals: [],
    relatedHeritageIds: ['rj-heritage-jaipur-city'],
    relatedCultureIds: [],
    trailIds: [],
    verificationStatus: 'verified',
    sources: [
      {
        sourceName: 'Rajasthan Tourism — Media Room / Gangaur Festival',
        sourceType: 'Government tourism',
        sourceUrl: 'https://www.tourism.rajasthan.gov.in/media.html'
      },
      {
        sourceName: 'Rajasthan Tourism — Fairs and Festivals calendar',
        sourceType: 'Government tourism',
        sourceUrl:
          'https://www.tourism.rajasthan.gov.in/content/dam/rajasthan-tourism/english/palaces-to-visit/FF-2018.pdf'
      }
    ],
    lastVerified: '2026-08-26'
  },
  {
    id: 'rj-culture-teej',
    slug: 'teej',
    name: 'Teej',
    recordType: 'culture',
    state: 'rajasthan',
    stateName: 'Rajasthan',
    region: 'Rajasthan; prominently Jaipur and Bundi traditions',
    community: null,
    category: 'festivals',
    categoryName: 'Festivals',
    shortDescription:
      'A major monsoon-season festival tradition of Rajasthan reflected in state cultural celebrations including Teej and Kajli Teej.',
    originHistory: null,
    culturalSignificance:
      'Teej forms an important part of Rajasthan’s seasonal and living festival calendar.',
    keyElements: [
      'Monsoon festival',
      'Traditional dress',
      'Processions',
      'Public celebration'
    ],
    images: [],
    media: [],
    relatedPlaces: ['Jaipur', 'Bundi'],
    relatedFestivals: ['Kajli Teej'],
    relatedHeritageIds: ['rj-heritage-jaipur-city', 'rj-heritage-bundi-palace'],
    relatedCultureIds: [],
    trailIds: [],
    verificationStatus: 'verified',
    sources: [
      {
        sourceName: 'Rajasthan Tourism — Media Room / Kajli Teej',
        sourceType: 'Government tourism',
        sourceUrl: 'https://www.tourism.rajasthan.gov.in/media.html'
      }
    ],
    lastVerified: '2026-08-26'
  },
  {
    id: 'rj-culture-mewar-festival',
    slug: 'mewar-festival',
    name: 'Mewar Festival',
    recordType: 'culture',
    state: 'rajasthan',
    stateName: 'Rajasthan',
    region: 'Udaipur / Mewar',
    community: null,
    category: 'festivals',
    categoryName: 'Festivals',
    shortDescription:
      'A major Udaipur cultural festival celebrating the living traditions of the Mewar region.',
    originHistory: null,
    culturalSignificance:
      'Rajasthan Tourism includes Mewar Festival among the state’s major cultural events and recurring festival calendar.',
    keyElements: [
      'Udaipur',
      'Mewar culture',
      'Processions',
      'Cultural performances'
    ],
    images: [],
    media: [],
    relatedPlaces: ['Udaipur'],
    relatedFestivals: [],
    relatedHeritageIds: ['rj-heritage-city-palace-udaipur'],
    relatedCultureIds: [],
    trailIds: [],
    verificationStatus: 'verified',
    sources: [
      {
        sourceName: 'Rajasthan Tourism — Media Room / Mewar Festival',
        sourceType: 'Government tourism',
        sourceUrl: 'https://www.tourism.rajasthan.gov.in/media.html'
      },
      {
        sourceName: 'Rajasthan Tourism — Fairs and Festivals calendar',
        sourceType: 'Government tourism',
        sourceUrl:
          'https://www.tourism.rajasthan.gov.in/content/dam/rajasthan-tourism/english/palaces-to-visit/FF-2018.pdf'
      }
    ],
    lastVerified: '2026-08-26'
  },
  {
    id: 'rj-culture-marwar-festival',
    slug: 'marwar-festival',
    name: 'Marwar Festival',
    recordType: 'culture',
    state: 'rajasthan',
    stateName: 'Rajasthan',
    region: 'Jodhpur / Marwar',
    community: null,
    category: 'festivals',
    categoryName: 'Festivals',
    shortDescription:
      'A Jodhpur festival centred on Marwar’s folk music, dance, dress and remembered stories of regional rulers.',
    originHistory: null,
    culturalSignificance:
      'Rajasthan Tourism describes Marwar Festival as presenting folk dance and music alongside stories of the region’s historic rulers and rural cultural life.',
    keyElements: [
      'Folk music',
      'Folk dance',
      'Traditional turbans',
      'Bandhani attire',
      'Regional stories'
    ],
    images: [],
    media: [],
    relatedPlaces: [
      'Jodhpur',
      'Mehrangarh Fort',
      'Umaid Bhawan Palace',
      'Mandore'
    ],
    relatedFestivals: [],
    relatedHeritageIds: [
      'rj-heritage-mehrangarh-fort',
      'rj-heritage-umaid-bhawan-palace'
    ],
    relatedCultureIds: ['rj-culture-ghoomar'],
    trailIds: [],
    verificationStatus: 'verified',
    sources: [
      {
        sourceName:
          'Rajasthan Tourism — Discovering the Heritage of Jodhpur / Marwar Festival',
        sourceType: 'Government tourism',
        sourceUrl:
          'https://www.tourism.rajasthan.gov.in/travel-diaries/donasthan.html'
      }
    ],
    lastVerified: '2026-08-26'
  },
  {
    id: 'rj-culture-kumbhalgarh-festival',
    slug: 'kumbhalgarh-festival',
    name: 'Kumbhalgarh Festival',
    recordType: 'culture',
    state: 'rajasthan',
    stateName: 'Rajasthan',
    region: 'Kumbhalgarh / Rajsamand',
    community: null,
    category: 'festivals',
    categoryName: 'Festivals',
    shortDescription:
      'A three-day cultural festival organized at Kumbhalgarh Fort with folk, classical and participatory cultural programmes.',
    originHistory: null,
    culturalSignificance:
      'Rajasthan Tourism describes the festival as promoting the history and heritage of Kumbhalgarh while presenting music, dance and traditional competitions.',
    keyElements: [
      'Folk music',
      'Dance',
      'Classical performances',
      'Turban tying',
      'Puppetry',
      'Kumbhalgarh Fort'
    ],
    images: [],
    media: [],
    relatedPlaces: ['Kumbhalgarh'],
    relatedFestivals: [],
    relatedHeritageIds: ['rj-heritage-kumbhalgarh-fort'],
    relatedCultureIds: ['rj-culture-kathputli'],
    trailIds: [],
    verificationStatus: 'verified',
    sources: [
      {
        sourceName: 'Rajasthan Tourism — Kumbhalgarh Festival',
        sourceType: 'Government tourism',
        sourceUrl:
          'https://www.tourism.rajasthan.gov.in/travel-diaries/irasthan.html'
      }
    ],
    lastVerified: '2026-08-26'
  },
  {
    id: 'rj-culture-abhaneri-festival',
    slug: 'abhaneri-festival',
    name: 'Abhaneri Festival',
    recordType: 'culture',
    state: 'rajasthan',
    stateName: 'Rajasthan',
    region: 'Abhaneri, Dausa district',
    community: null,
    category: 'festivals',
    categoryName: 'Festivals',
    shortDescription:
      'A Rajasthan Tourism festival at Abhaneri featuring local and Rajasthani folk performances beside the village’s stepwell heritage.',
    originHistory:
      'Rajasthan Tourism states that the festival was initiated in 2008.',
    culturalSignificance:
      'The festival combines regional performance traditions with public interpretation of Abhaneri’s rural and architectural heritage.',
    keyElements: [
      'Kachhi Ghodi',
      'Kalbelia',
      'Ghoomar',
      'Bhawai',
      'Traditional music',
      'Chand Baori setting'
    ],
    images: [],
    media: [],
    relatedPlaces: ['Abhaneri', 'Dausa'],
    relatedFestivals: [],
    relatedHeritageIds: ['rj-heritage-chand-baori'],
    relatedCultureIds: [
      'rj-culture-kalbelia',
      'rj-culture-ghoomar',
      'rj-culture-kachhi-ghodi'
    ],
    trailIds: [],
    verificationStatus: 'verified',
    sources: [
      {
        sourceName: 'Rajasthan Tourism — Abhaneri Festival 2026',
        sourceType: 'Government tourism',
        sourceUrl:
          'https://www.tourism.rajasthan.gov.in/fairs-and-festivals.html'
      }
    ],
    lastVerified: '2026-08-26'
  },
  {
    id: 'rj-culture-bikaner-camel-festival',
    slug: 'bikaner-camel-festival',
    name: 'Bikaner Camel Festival',
    recordType: 'culture',
    state: 'rajasthan',
    stateName: 'Rajasthan',
    region: 'Bikaner',
    community: null,
    category: 'festivals',
    categoryName: 'Festivals',
    shortDescription:
      'A major Rajasthan festival associated with Bikaner’s camel culture and public cultural celebrations.',
    originHistory: null,
    culturalSignificance:
      'Rajasthan Tourism includes the Bikaner Camel Festival among the state’s major fairs and festivals, reflecting Bikaner’s strong identity as camel country.',
    keyElements: [
      'Camels',
      'Bikaner',
      'Public festival',
      'Cultural programmes'
    ],
    images: [],
    media: [],
    relatedPlaces: ['Bikaner'],
    relatedFestivals: [],
    relatedHeritageIds: ['rj-heritage-junagarh-fort'],
    relatedCultureIds: [],
    trailIds: [],
    verificationStatus: 'verified',
    sources: [
      {
        sourceName: 'Rajasthan Tourism — Fairs and Festivals',
        sourceType: 'Government tourism',
        sourceUrl:
          'https://www.tourism.rajasthan.gov.in/fairs-and-festivals.html'
      },
      {
        sourceName: 'Rajasthan Tourism — Tourist Destinations / Bikaner',
        sourceType: 'Government tourism',
        sourceUrl:
          'https://www.tourism.rajasthan.gov.in/tourist-destinations.html'
      }
    ],
    lastVerified: '2026-08-26'
  },
  {
    id: 'rj-culture-dal-baati-churma',
    slug: 'dal-baati-churma',
    name: 'Dal-Baati-Churma',
    recordType: 'culture',
    state: 'rajasthan',
    stateName: 'Rajasthan',
    region: 'Rajasthan',
    community: null,
    category: 'regional-cuisine',
    categoryName: 'Regional Cuisine',
    shortDescription:
      'One of Rajasthan’s best-known culinary traditions, combining dal, baked baati and sweet churma.',
    originHistory: null,
    culturalSignificance:
      'Rajasthan Tourism identifies Dal-Baati-Churma among the state’s most renowned foods and part of its regional culinary identity.',
    keyElements: ['Dal', 'Baati', 'Churma', 'Rajasthani cuisine'],
    images: [],
    media: [],
    relatedPlaces: [],
    relatedFestivals: [],
    relatedHeritageIds: [],
    relatedCultureIds: [],
    trailIds: [],
    verificationStatus: 'verified',
    sources: [
      {
        sourceName: 'Rajasthan Tourism — Rajasthan at a Glance / Food',
        sourceType: 'Government tourism',
        sourceUrl: 'https://www.tourism.rajasthan.gov.in/about-rajasthan.html'
      },
      {
        sourceName: 'Rajasthan Tourism brochure — What to Eat',
        sourceType: 'Government tourism',
        sourceUrl:
          'https://www.tourism.rajasthan.gov.in/content/dam/rajasthan-tourism/english/pdf/tender-pdf/Tender%20for%20translation%20of%20DOT%20Broucher%20in%20Russian%20language%2008052018.pdf'
      }
    ],
    lastVerified: '2026-08-26'
  },
  {
    id: 'rj-culture-ghevar',
    slug: 'ghevar',
    name: 'Ghevar',
    recordType: 'culture',
    state: 'rajasthan',
    stateName: 'Rajasthan',
    region: 'Rajasthan',
    community: null,
    category: 'regional-cuisine',
    categoryName: 'Regional Cuisine',
    shortDescription:
      'A sweet preparation identified by Rajasthan Tourism among the state’s characteristic foods.',
    originHistory: null,
    culturalSignificance:
      'Ghevar forms part of Rajasthan’s widely recognized sweet-making and festive culinary traditions.',
    keyElements: ['Sweet', 'Rajasthani cuisine'],
    images: [],
    media: [],
    relatedPlaces: [],
    relatedFestivals: [],
    relatedHeritageIds: [],
    relatedCultureIds: [],
    trailIds: [],
    verificationStatus: 'verified',
    sources: [
      {
        sourceName: 'Rajasthan Tourism brochure — What to Eat',
        sourceType: 'Government tourism',
        sourceUrl:
          'https://www.tourism.rajasthan.gov.in/content/dam/rajasthan-tourism/english/pdf/tender-pdf/Tender%20for%20translation%20of%20DOT%20Broucher%20in%20Russian%20language%2008052018.pdf'
      }
    ],
    lastVerified: '2026-08-26'
  },
  {
    id: 'rj-culture-laal-maas',
    slug: 'laal-maas',
    name: 'Laal Maas',
    recordType: 'culture',
    state: 'rajasthan',
    stateName: 'Rajasthan',
    region: 'Rajasthan',
    community: null,
    category: 'regional-cuisine',
    categoryName: 'Regional Cuisine',
    shortDescription:
      'A meat preparation identified by Rajasthan Tourism among Rajasthan’s best-known regional foods.',
    originHistory: null,
    culturalSignificance:
      'Laal Maas forms part of the state’s distinctive non-vegetarian culinary heritage.',
    keyElements: ['Meat preparation', 'Rajasthani cuisine'],
    images: [],
    media: [],
    relatedPlaces: [],
    relatedFestivals: [],
    relatedHeritageIds: [],
    relatedCultureIds: [],
    trailIds: [],
    verificationStatus: 'verified',
    sources: [
      {
        sourceName: 'Rajasthan Tourism — Rajasthan at a Glance / Food',
        sourceType: 'Government tourism',
        sourceUrl: 'https://www.tourism.rajasthan.gov.in/about-rajasthan.html'
      }
    ],
    lastVerified: '2026-08-26'
  },

  // TAMIL NADU VERIFIED (20 Records)
  {
    id: 'tn-culture-bharatanatyam',
    slug: 'bharatanatyam',
    name: 'Bharatanatyam',
    recordType: 'culture',
    state: 'tamil-nadu',
    stateName: 'Tamil Nadu',
    region: 'Tamil Nadu',
    community: null,
    category: 'classical-folk-dance',
    categoryName: 'Classical & Folk Dance',
    shortDescription:
      'A classical Indian dance form with deep historical roots in Tamil Nadu.',
    originHistory:
      'A Tamil Nadu Raj Bhavan speech identifies Bharatanatyam as tracing its origins to Tamil Nadu and notes references to the form in the Tamil epic Silappathikaram.',
    culturalSignificance:
      'Bharatanatyam remains a major part of Tamil Nadu’s performing-arts identity and is actively taught through state cultural institutions.',
    keyElements: [
      'Classical dance',
      'Gesture',
      'Rhythm',
      'Expressive storytelling'
    ],
    images: [],
    media: [],
    relatedPlaces: [],
    relatedFestivals: [],
    relatedHeritageIds: ['tn-heritage-brihadisvara-thanjavur'],
    relatedCultureIds: [],
    trailIds: [],
    verificationStatus: 'verified',
    sources: [
      {
        sourceName: 'Tamil Nadu Raj Bhavan — Address on Bharatanatyam',
        sourceType: 'Government speech',
        sourceUrl:
          'https://tnrajbhavantour.tn.gov.in/tnrb-website-archive/Archives/Website1621/Speeches/2019/Sp270419-1.pdf'
      },
      {
        sourceName: 'Tamil Nadu Department of Art and Culture — Events',
        sourceType: 'State culture department',
        sourceUrl: 'https://artandculture.tn.gov.in/events'
      }
    ],
    lastVerified: '2026-08-26'
  },
  {
    id: 'tn-culture-silambam',
    slug: 'silambam',
    name: 'Silambam',
    recordType: 'culture',
    state: 'tamil-nadu',
    stateName: 'Tamil Nadu',
    region: 'Tamil Nadu',
    community: null,
    category: 'traditional-arts',
    categoryName: 'Traditional Arts',
    shortDescription:
      'A traditional martial art practiced and taught in Tamil Nadu.',
    originHistory: null,
    culturalSignificance:
      'Tamil Nadu government institutions continue to teach Silambam, and Tiruchirappalli municipal material identifies it as an older defensive and physical-training tradition.',
    keyElements: ['Martial art', 'Staff practice', 'Physical training'],
    images: [],
    media: [],
    relatedPlaces: ['Tiruchirappalli'],
    relatedFestivals: [],
    relatedHeritageIds: [],
    relatedCultureIds: [],
    trailIds: [],
    verificationStatus: 'verified',
    sources: [
      {
        sourceName:
          'Tiruchirappalli City Municipal Corporation — Places of Interest',
        sourceType: 'Government municipal',
        sourceUrl:
          'https://www.tnurbantree.tn.gov.in/trichy/en/places-of-interest/'
      },
      {
        sourceName:
          'Tamil Nadu Department of Art and Culture — Jawahar Siruvar Manram',
        sourceType: 'State culture department',
        sourceUrl:
          'https://artandculture.tn.gov.in/tamil-nadu-jawahar-siruvar-manram'
      }
    ],
    lastVerified: '2026-08-26'
  },
  {
    id: 'tn-culture-pongal',
    slug: 'pongal',
    name: 'Pongal',
    recordType: 'culture',
    state: 'tamil-nadu',
    stateName: 'Tamil Nadu',
    region: 'Tamil Nadu',
    community: null,
    category: 'festivals',
    categoryName: 'Festivals',
    shortDescription:
      'Tamil Nadu’s major harvest festival and a central celebration of Tamil cultural tradition.',
    originHistory: null,
    culturalSignificance:
      'Tamil Nadu government sources repeatedly describe Pongal as a festival of Tamil people, linking it with harvest, thanksgiving, kolam, cattle and traditional arts.',
    keyElements: [
      'Harvest',
      'Thanksgiving',
      'Kolam',
      'Cattle',
      'Community celebration'
    ],
    images: [],
    media: [],
    relatedPlaces: [],
    relatedFestivals: [],
    relatedHeritageIds: [],
    relatedCultureIds: ['tn-culture-kolam', 'tn-culture-jallikattu'],
    trailIds: [],
    verificationStatus: 'verified',
    sources: [
      {
        sourceName: 'Tamil Nadu Raj Bhavan — Pongal Greeting 2023',
        sourceType: 'Government press release',
        sourceUrl:
          'https://tnrajbhavantour.tn.gov.in/tnrb-website-archive/PressReleases/2023/PR140123-1.pdf'
      },
      {
        sourceName: 'Government of Tamil Nadu — Budget Speech 2007–08',
        sourceType: 'Government budget document',
        sourceUrl:
          'https://www.tnrd.tn.gov.in/Announcement_pdf/budgetspeech2007_2008.pdf'
      }
    ],
    lastVerified: '2026-08-26'
  },
  {
    id: 'tn-culture-jallikattu',
    slug: 'jallikattu',
    name: 'Jallikattu',
    recordType: 'culture',
    state: 'tamil-nadu',
    stateName: 'Tamil Nadu',
    region: 'Tamil Nadu; especially Madurai region',
    community: null,
    category: 'local-customs',
    categoryName: 'Local Customs',
    shortDescription:
      'A traditional Tamil bull-embracing sport associated with rural and agrarian culture and Pongal-season celebrations.',
    originHistory:
      'Tamil Nadu government sources describe Jallikattu as an ancient Tamil tradition and refer to the practice in Sangam literature.',
    culturalSignificance:
      'The 2017 Tamil Nadu amendment explicitly describes Jallikattu as conducted to follow and promote tradition and culture and support the continuance of native bull breeds.',
    keyElements: [
      'Bull-embracing sport',
      'Rural tradition',
      'Pongal season',
      'Native cattle breeds'
    ],
    images: [],
    media: [],
    relatedPlaces: ['Alanganallur', 'Madurai district'],
    relatedFestivals: ['Pongal'],
    relatedHeritageIds: [],
    relatedCultureIds: ['tn-culture-pongal'],
    trailIds: [],
    verificationStatus: 'verified',
    sources: [
      {
        sourceName:
          'Tamil Nadu Government Gazette — Jallikattu Amendment Act 2017',
        sourceType: 'Government gazette',
        sourceUrl:
          'https://www.jallikattu.tn.gov.in/ords/r/wsjallikattu/110/files/static/v1668/ACT_1_of_2017_TN.pdf'
      },
      {
        sourceName:
          'Tamil Nadu Information & Public Relations Department — Jallikattu Arena',
        sourceType: 'Government press release',
        sourceUrl:
          'https://dipr.tn.gov.in/ords/r/dipr/info-prdept103/press-release1?p33_file_id=16977'
      }
    ],
    lastVerified: '2026-08-26'
  },
  {
    id: 'tn-culture-kolam',
    slug: 'kolam',
    name: 'Kolam',
    recordType: 'culture',
    state: 'tamil-nadu',
    stateName: 'Tamil Nadu',
    region: 'Tamil Nadu',
    community: null,
    category: 'traditional-arts',
    categoryName: 'Traditional Arts',
    shortDescription:
      'A traditional decorative floor-art practice associated with Tamil homes and festive life.',
    originHistory: null,
    culturalSignificance:
      'Tamil Nadu government material explicitly includes drawing colourful kolams in descriptions of Tamil seasonal celebration.',
    keyElements: [
      'Floor drawing',
      'Geometric and decorative patterns',
      'Household tradition',
      'Festival use'
    ],
    images: [],
    media: [],
    relatedPlaces: [],
    relatedFestivals: ['Pongal'],
    relatedHeritageIds: [],
    relatedCultureIds: ['tn-culture-pongal'],
    trailIds: [],
    verificationStatus: 'verified',
    sources: [
      {
        sourceName: 'Government of Tamil Nadu — Budget Speech 2008–09',
        sourceType: 'Government budget document',
        sourceUrl:
          'https://www.tnrd.tn.gov.in/Announcement_pdf/budgetspeech_2008_2009_en.pdf'
      }
    ],
    lastVerified: '2026-08-26'
  },
  {
    id: 'tn-culture-kanchipuram-silk',
    slug: 'kanchipuram-silk-saree',
    name: 'Kancheepuram Silk Saree',
    recordType: 'culture',
    state: 'tamil-nadu',
    stateName: 'Tamil Nadu',
    region: 'Kanchipuram',
    community: 'Handloom weaving communities',
    category: 'clothing-textiles',
    categoryName: 'Textiles',
    shortDescription:
      'A major silk-weaving tradition of Kanchipuram and a registered Geographical Indication product.',
    originHistory: null,
    culturalSignificance:
      'Kanchipuram municipal sources identify fine silk sarees as a long-standing part of the city’s identity, while the Tamil Nadu Handlooms Department lists Kancheepuram Silk Saree among registered GI products.',
    keyElements: ['Silk weaving', 'Handloom', 'Kanchipuram'],
    giStatus: 'GI registered',
    images: [],
    media: [],
    relatedPlaces: ['Kanchipuram'],
    relatedFestivals: [],
    relatedHeritageIds: [],
    relatedCultureIds: [],
    trailIds: [],
    verificationStatus: 'verified',
    sources: [
      {
        sourceName:
          'Tamil Nadu Handlooms, Handicrafts, Textiles and Khadi Department — Policy Note',
        sourceType: 'State government policy',
        sourceUrl: 'https://tnhandlooms.tn.gov.in/english/pdf/policy-2.pdf'
      },
      {
        sourceName: 'Kancheepuram City Municipal Corporation — About Us',
        sourceType: 'Government municipal',
        sourceUrl: 'https://www.tnurbantree.tn.gov.in/kancheepuram/about-us/'
      }
    ],
    lastVerified: '2026-08-26'
  },
  {
    id: 'tn-culture-madurai-sungudi',
    slug: 'madurai-sungudi-saree',
    name: 'Madurai Sungudi Saree',
    recordType: 'culture',
    state: 'tamil-nadu',
    stateName: 'Tamil Nadu',
    region: 'Madurai',
    community: 'Handloom/textile artisans',
    category: 'clothing-textiles',
    categoryName: 'Textiles',
    shortDescription:
      'A textile tradition associated with Madurai and listed by the Tamil Nadu Handlooms Department as a registered GI product.',
    originHistory: null,
    culturalSignificance:
      'Madurai Sungudi is part of Tamil Nadu’s regional handloom and textile heritage.',
    keyElements: ['Textile tradition', 'Madurai', 'GI product'],
    giStatus: 'GI registered',
    images: [],
    media: [],
    relatedPlaces: ['Madurai'],
    relatedFestivals: [],
    relatedHeritageIds: [],
    relatedCultureIds: [],
    trailIds: [],
    verificationStatus: 'verified',
    sources: [
      {
        sourceName:
          'Tamil Nadu Handlooms, Handicrafts, Textiles and Khadi Department — Policy Note',
        sourceType: 'State government policy',
        sourceUrl: 'https://tnhandlooms.tn.gov.in/english/pdf/policy-2.pdf'
      }
    ],
    lastVerified: '2026-08-26'
  },
  {
    id: 'tn-culture-bhavani-jamakkalam',
    slug: 'bhavani-jamakkalam',
    name: 'Bhavani Jamakkalam',
    recordType: 'culture',
    state: 'tamil-nadu',
    stateName: 'Tamil Nadu',
    region: 'Bhavani / Erode',
    community: 'Handloom weaving communities',
    category: 'clothing-textiles',
    categoryName: 'Textiles',
    shortDescription:
      'A woven textile product associated with Bhavani and listed by the Tamil Nadu Handlooms Department as a registered GI product.',
    originHistory: null,
    culturalSignificance:
      'Bhavani Jamakkalam is part of Tamil Nadu’s regional handloom heritage.',
    keyElements: ['Handloom weaving', 'Bhavani', 'GI product'],
    giStatus: 'GI registered',
    images: [],
    media: [],
    relatedPlaces: ['Bhavani', 'Erode'],
    relatedFestivals: [],
    relatedHeritageIds: [],
    relatedCultureIds: [],
    trailIds: [],
    verificationStatus: 'verified',
    sources: [
      {
        sourceName:
          'Tamil Nadu Handlooms, Handicrafts, Textiles and Khadi Department — Policy Note',
        sourceType: 'State government policy',
        sourceUrl: 'https://tnhandlooms.tn.gov.in/english/pdf/policy-2.pdf'
      }
    ],
    lastVerified: '2026-08-26'
  },
  {
    id: 'tn-culture-thanjavur-painting',
    slug: 'thanjavur-painting',
    name: 'Thanjavur Painting',
    recordType: 'culture',
    state: 'tamil-nadu',
    stateName: 'Tamil Nadu',
    region: 'Thanjavur',
    community: null,
    category: 'traditional-arts',
    categoryName: 'Traditional Arts',
    shortDescription:
      'A traditional painting form identified in Tamil Nadu government tourism-education material among the state’s important handicrafts and souvenirs.',
    originHistory: null,
    culturalSignificance:
      'Thanjavur painting forms part of Tamil Nadu’s visual-art heritage.',
    keyElements: ['Painting', 'Thanjavur', 'Traditional art'],
    images: [],
    media: [],
    relatedPlaces: ['Thanjavur'],
    relatedFestivals: [],
    relatedHeritageIds: ['tn-heritage-brihadisvara-thanjavur'],
    relatedCultureIds: [],
    trailIds: [],
    verificationStatus: 'verified',
    sources: [
      {
        sourceName:
          'Government of Tamil Nadu — Tourism Administration and Management syllabus',
        sourceType: 'Government educational source',
        sourceUrl:
          'https://www.trb.tn.gov.in/admin/pdf/476374751A04_Tourism_administration_and_management_updated%5B1%5D.pdf'
      }
    ],
    lastVerified: '2026-08-26'
  },
  {
    id: 'tn-culture-swamimalai-bronze',
    slug: 'swamimalai-bronze-work',
    name: 'Swamimalai Bronze Work',
    recordType: 'culture',
    state: 'tamil-nadu',
    stateName: 'Tamil Nadu',
    region: 'Swamimalai / Thanjavur region',
    community: 'Bronze artisans',
    category: 'handicrafts',
    categoryName: 'Handicrafts',
    shortDescription:
      'A traditional bronze-working craft associated with Swamimalai and identified by Tamil Nadu government planning material as a key state handicraft.',
    originHistory: null,
    culturalSignificance:
      'Bronze casting is closely connected with Tamil Nadu’s temple-art and sculptural traditions.',
    keyElements: ['Bronze work', 'Metal sculpture', 'Swamimalai'],
    images: [],
    media: [],
    relatedPlaces: ['Swamimalai'],
    relatedFestivals: [],
    relatedHeritageIds: [],
    relatedCultureIds: [],
    trailIds: [],
    verificationStatus: 'verified',
    sources: [
      {
        sourceName: 'Vision Tamil Nadu 2023 — Arts and Craft Village',
        sourceType: 'Government planning document',
        sourceUrl:
          'https://tnbudget.tn.gov.in/tnweb_files/vision23/TN%20VISION%202023%28PHASE%202%29.pdf'
      }
    ],
    lastVerified: '2026-08-26'
  },
  {
    id: 'tn-culture-arni-silk',
    slug: 'arni-silk-saree',
    name: 'Arni Silk Saree',
    recordType: 'culture',
    state: 'tamil-nadu',
    stateName: 'Tamil Nadu',
    region: 'Arni / Tiruvannamalai region',
    community: 'Handloom weaving communities',
    category: 'clothing-textiles',
    categoryName: 'Textiles',
    shortDescription:
      'A silk-weaving product associated with Arni and listed by the Tamil Nadu Handlooms Department among registered GI products.',
    originHistory: null,
    culturalSignificance:
      'Arni silk forms part of Tamil Nadu’s diverse regional silk-weaving heritage.',
    keyElements: ['Silk weaving', 'Arni', 'GI product'],
    giStatus: 'GI registered',
    images: [],
    media: [],
    relatedPlaces: ['Arni'],
    relatedFestivals: [],
    relatedHeritageIds: [],
    relatedCultureIds: [],
    trailIds: [],
    verificationStatus: 'verified',
    sources: [
      {
        sourceName: 'Tamil Nadu Handlooms Department — Policy Note',
        sourceType: 'State government policy',
        sourceUrl: 'https://tnhandlooms.tn.gov.in/english/pdf/policy-2.pdf'
      }
    ],
    lastVerified: '2026-08-26'
  },
  {
    id: 'tn-culture-kovai-kora-cotton',
    slug: 'kovai-kora-cotton-saree',
    name: 'Kovai Kora Cotton Saree',
    recordType: 'culture',
    state: 'tamil-nadu',
    stateName: 'Tamil Nadu',
    region: 'Coimbatore region',
    community: 'Handloom weaving communities',
    category: 'clothing-textiles',
    categoryName: 'Textiles',
    shortDescription:
      'A regional cotton-saree tradition listed by the Tamil Nadu Handlooms Department as a registered GI product.',
    originHistory: null,
    culturalSignificance:
      'Kovai Kora Cotton forms part of western Tamil Nadu’s handloom identity.',
    keyElements: ['Cotton weaving', 'Coimbatore region', 'GI product'],
    giStatus: 'GI registered',
    images: [],
    media: [],
    relatedPlaces: ['Coimbatore'],
    relatedFestivals: [],
    relatedHeritageIds: [],
    relatedCultureIds: [],
    trailIds: [],
    verificationStatus: 'verified',
    sources: [
      {
        sourceName: 'Tamil Nadu Handlooms Department — Policy Note',
        sourceType: 'State government policy',
        sourceUrl: 'https://tnhandlooms.tn.gov.in/english/pdf/policy-2.pdf'
      }
    ],
    lastVerified: '2026-08-26'
  },
  {
    id: 'tn-culture-kandangi-saree',
    slug: 'kandangi-saree',
    name: 'Kandangi Saree',
    recordType: 'culture',
    state: 'tamil-nadu',
    stateName: 'Tamil Nadu',
    region: 'Chettinad / Sivaganga region',
    community: 'Handloom weaving communities',
    category: 'clothing-textiles',
    categoryName: 'Textiles',
    shortDescription:
      'A saree tradition associated with the Chettinad region and listed by the Tamil Nadu Handlooms Department among registered GI products.',
    originHistory: null,
    culturalSignificance:
      'Kandangi textiles form part of Chettinad’s living material culture.',
    keyElements: ['Handloom', 'Chettinad', 'GI product'],
    giStatus: 'GI registered',
    images: [],
    media: [],
    relatedPlaces: ['Chettinad', 'Karaikudi'],
    relatedFestivals: [],
    relatedHeritageIds: ['tn-heritage-chettinad'],
    relatedCultureIds: [],
    trailIds: [],
    verificationStatus: 'verified',
    sources: [
      {
        sourceName: 'Tamil Nadu Handlooms Department — Policy Note',
        sourceType: 'State government policy',
        sourceUrl: 'https://tnhandlooms.tn.gov.in/english/pdf/policy-2.pdf'
      }
    ],
    lastVerified: '2026-08-26'
  },
  {
    id: 'tn-culture-nadaswaram',
    slug: 'nadaswaram',
    name: 'Nadaswaram',
    recordType: 'culture',
    state: 'tamil-nadu',
    stateName: 'Tamil Nadu',
    region: 'Tamil Nadu',
    community: 'Musicians',
    category: 'traditional-arts',
    categoryName: 'Traditional Arts',
    shortDescription:
      'A traditional wind instrument included in Tamil Nadu government educational material on musical heritage.',
    originHistory: null,
    culturalSignificance:
      'Nadaswaram remains an important component of Tamil musical and ceremonial performance traditions.',
    keyElements: ['Wind instrument', 'Music', 'Ceremonial performance'],
    images: [],
    media: [],
    relatedPlaces: [],
    relatedFestivals: [],
    relatedHeritageIds: [],
    relatedCultureIds: ['tn-culture-thavil'],
    trailIds: [],
    verificationStatus: 'verified',
    sources: [
      {
        sourceName:
          'Government of Tamil Nadu — Environmental Studies syllabus: Musical Instruments',
        sourceType: 'Government educational source',
        sourceUrl: 'https://www.trb.tn.gov.in/admin/pdf/1447547983ESSP1.pdf'
      }
    ],
    lastVerified: '2026-08-26'
  },
  {
    id: 'tn-culture-thavil',
    slug: 'thavil',
    name: 'Thavil',
    recordType: 'culture',
    state: 'tamil-nadu',
    stateName: 'Tamil Nadu',
    region: 'Tamil Nadu',
    community: 'Musicians',
    category: 'traditional-arts',
    categoryName: 'Traditional Arts',
    shortDescription:
      'A traditional percussion instrument included in Tamil Nadu government educational material on the state’s musical heritage.',
    originHistory: null,
    culturalSignificance:
      'Thavil forms part of Tamil ceremonial and performance-music traditions.',
    keyElements: ['Percussion', 'Rhythm', 'Ceremonial music'],
    images: [],
    media: [],
    relatedPlaces: [],
    relatedFestivals: [],
    relatedHeritageIds: [],
    relatedCultureIds: ['tn-culture-nadaswaram'],
    trailIds: [],
    verificationStatus: 'verified',
    sources: [
      {
        sourceName:
          'Government of Tamil Nadu — Environmental Studies syllabus: Musical Instruments',
        sourceType: 'Government educational source',
        sourceUrl: 'https://www.trb.tn.gov.in/admin/pdf/1447547983ESSP1.pdf'
      }
    ],
    lastVerified: '2026-08-26'
  },
  {
    id: 'tn-culture-veena',
    slug: 'veena',
    name: 'Veena',
    recordType: 'culture',
    state: 'tamil-nadu',
    stateName: 'Tamil Nadu',
    region: 'Tamil Nadu',
    community: 'Musicians and instrument makers',
    category: 'traditional-arts',
    categoryName: 'Traditional Arts',
    shortDescription:
      'A traditional string instrument included in Tamil Nadu government educational material on musical heritage.',
    originHistory: null,
    culturalSignificance:
      'The veena forms part of Tamil Nadu’s classical-music and instrument-making heritage.',
    keyElements: ['String instrument', 'Classical music', 'Instrument craft'],
    images: [],
    media: [],
    relatedPlaces: [],
    relatedFestivals: [],
    relatedHeritageIds: [],
    relatedCultureIds: [],
    trailIds: [],
    verificationStatus: 'verified',
    sources: [
      {
        sourceName:
          'Government of Tamil Nadu — Environmental Studies syllabus: Musical Instruments',
        sourceType: 'Government educational source',
        sourceUrl: 'https://www.trb.tn.gov.in/admin/pdf/1447547983ESSP1.pdf'
      }
    ],
    lastVerified: '2026-08-26'
  },
  {
    id: 'tn-culture-parai',
    slug: 'parai',
    name: 'Parai',
    recordType: 'culture',
    state: 'tamil-nadu',
    stateName: 'Tamil Nadu',
    region: 'Tamil Nadu',
    community: 'Traditional percussion performers',
    category: 'traditional-arts',
    categoryName: 'Traditional Arts',
    shortDescription:
      'An ancient Tamil percussion instrument listed in government educational material on Tamil Nadu’s musical instruments.',
    originHistory: null,
    culturalSignificance:
      'Parai belongs to Tamil Nadu’s long percussion and community-performance traditions.',
    keyElements: ['Percussion', 'Rhythm', 'Community performance'],
    images: [],
    media: [],
    relatedPlaces: [],
    relatedFestivals: [],
    relatedHeritageIds: [],
    relatedCultureIds: [],
    trailIds: [],
    verificationStatus: 'verified',
    sources: [
      {
        sourceName:
          'Government of Tamil Nadu — Environmental Studies syllabus: Musical Instruments',
        sourceType: 'Government educational source',
        sourceUrl: 'https://www.trb.tn.gov.in/admin/pdf/1447547983ESSP1.pdf'
      }
    ],
    lastVerified: '2026-08-26'
  },
  {
    id: 'tn-culture-chithirai-festival',
    slug: 'chithirai-festival',
    name: 'Chithirai Thiruvizha',
    recordType: 'culture',
    state: 'tamil-nadu',
    stateName: 'Tamil Nadu',
    region: 'Madurai and other Tamil regions',
    community: null,
    category: 'festivals',
    categoryName: 'Festivals',
    shortDescription:
      'A major Tamil festival tradition included among programmes supported by the Tamil Nadu Department of Art and Culture.',
    originHistory: null,
    culturalSignificance:
      'Chithirai Thiruvizha remains part of Tamil Nadu’s living religious and public festival calendar.',
    keyElements: ['Festival', 'Processions', 'Temple-centred celebration'],
    images: [],
    media: [],
    relatedPlaces: ['Madurai'],
    relatedFestivals: [],
    relatedHeritageIds: ['tn-heritage-madurai'],
    relatedCultureIds: [],
    trailIds: [],
    verificationStatus: 'verified',
    sources: [
      {
        sourceName:
          'Tamil Nadu Department of Art and Culture — Regional Cultural Centres',
        sourceType: 'State culture department',
        sourceUrl: 'https://artandculture.tn.gov.in/regional-cultural-centres'
      }
    ],
    lastVerified: '2026-08-26'
  },
  {
    id: 'tn-culture-aadi-perukku',
    slug: 'aadi-perukku',
    name: 'Aadi Perukku',
    recordType: 'culture',
    state: 'tamil-nadu',
    stateName: 'Tamil Nadu',
    region: 'Tamil Nadu; river regions',
    community: null,
    category: 'festivals',
    categoryName: 'Festivals',
    shortDescription:
      'A Tamil seasonal festival associated with rivers and included in programmes of the Tamil Nadu Department of Art and Culture.',
    originHistory: null,
    culturalSignificance:
      'Aadi Perukku forms part of Tamil Nadu’s seasonal and river-centred cultural traditions.',
    keyElements: ['Aadi month', 'River worship', 'Seasonal festival'],
    images: [],
    media: [],
    relatedPlaces: [],
    relatedFestivals: [],
    relatedHeritageIds: [],
    relatedCultureIds: [],
    trailIds: [],
    verificationStatus: 'verified',
    sources: [
      {
        sourceName:
          'Tamil Nadu Department of Art and Culture — Regional Cultural Centres',
        sourceType: 'State culture department',
        sourceUrl: 'https://artandculture.tn.gov.in/regional-cultural-centres'
      },
      {
        sourceName: 'Bhavani Municipality — Events and Festivals',
        sourceType: 'Government municipal',
        sourceUrl:
          'https://www.tnurbantree.tn.gov.in/bhavani/events-and-festivals/'
      }
    ],
    lastVerified: '2026-08-26'
  },
  {
    id: 'tn-culture-chettinad-cuisine',
    slug: 'chettinad-cuisine',
    name: 'Chettinad Cuisine',
    recordType: 'culture',
    state: 'tamil-nadu',
    stateName: 'Tamil Nadu',
    region: 'Chettinad / Karaikudi–Devakottai',
    community: 'Chettiar regional tradition',
    category: 'regional-cuisine',
    categoryName: 'Regional Cuisine',
    shortDescription:
      'A distinctive regional culinary tradition associated with the Chettinad area around Karaikudi and Devakottai.',
    originHistory:
      'Karaikudi municipal material states that Chettinad cuisine originated in the areas around Karaikudi.',
    culturalSignificance:
      'Chettinad cuisine forms a major part of the region’s cultural identity and is included in local heritage-tourism planning.',
    keyElements: ['Regional cuisine', 'Karaikudi', 'Chettinad'],
    images: [],
    media: [],
    relatedPlaces: ['Karaikudi', 'Devakottai'],
    relatedFestivals: [],
    relatedHeritageIds: ['tn-heritage-chettinad'],
    relatedCultureIds: [],
    trailIds: [],
    verificationStatus: 'verified',
    sources: [
      {
        sourceName: 'Karaikudi Municipality — Brief History',
        sourceType: 'Government municipal',
        sourceUrl:
          'https://tnurbantree.tn.gov.in/karaikudi/wp-content/uploads/sites/33/2020/06/Brief-of-History_.pdf'
      },
      {
        sourceName: 'Devakottai Municipality — City Development Plan',
        sourceType: 'Government municipal',
        sourceUrl:
          'https://www.tnurbantree.tn.gov.in/devakottai/wp-content/uploads/sites/32/2019/12/cdp.pdf'
      }
    ],
    lastVerified: '2026-08-26'
  }
]

// All 3 showcase states (Karnataka, Rajasthan, Tamil Nadu) are now 100% verified.
export const allCulture = [...verifiedCulture]
