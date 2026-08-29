/**
 * Verified Culture Dataset — Odisha Showcase State
 * Factually verified records with exact source attribution.
 * 25 culture records covering classical arts, folk traditions, festivals, crafts & textiles.
 */
export const verifiedCulture = [

  // ─────────────────────────────────────────────────────────
  // CLASSICAL & FOLK DANCE
  // ─────────────────────────────────────────────────────────
  {
    id: 'od-culture-odissi',
    slug: 'odissi',
    name: 'Odissi Dance',
    recordType: 'culture',
    state: 'odisha',
    stateName: 'Odisha',
    region: 'Statewide',
    community: null,
    category: 'classical-folk-dance',
    categoryName: 'Classical & Folk Dance',
    shortDescription:
      'One of the eight classical dance forms of India, Odissi is characterised by its tribhanga (three-body-bend) posture, intricate footwork, and lyrical abhinaya rooted in the devotional traditions of the Jagannath temple.',
    originHistory:
      'Odissi is considered one of the oldest surviving classical dance forms of India, with origins traced to the Natya Shastra (2nd century BCE). Temple sculptures at Konark, Bhubaneswar and Puri depict Odissi poses. The dance was performed by Maharis (devadasis) at the Jagannath Temple.',
    culturalSignificance:
      'Odissi was revived in the post-independence era by Guru Kelucharan Mohapatra, Guru Pankaj Charan Das, and Guru Deba Prasad Das, who systemized it into a major classical form. It was recognized by the Sangeet Natak Akademi in 1958.',
    keyElements: [
      'Tribhanga (three-body-bend)',
      'Chauka (square stance)',
      'Mudras (hand gestures)',
      'Abhinaya (expressive mime)',
      'Mangalacharan (invocation)',
      'Pallavi (pure dance)',
      'Thumri (light classical)'
    ],
    images: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Odissi_dance.jpg/800px-Odissi_dance.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Odissi_dance_performance.jpg/1280px-Odissi_dance_performance.jpg'
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
      'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Chhau_dance_Mayurbhanj.jpg/1280px-Chhau_dance_Mayurbhanj.jpg'
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
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Gotipua_dance.jpg/1280px-Gotipua_dance.jpg'
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
      'https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Rath_Yatra_2007_Puri.jpg/1280px-Rath_Yatra_2007_Puri.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Rath_yatra_puri.jpg/1280px-Rath_yatra_puri.jpg'
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
      'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Konark_dance_festival.jpg/1280px-Konark_dance_festival.jpg'
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
      'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Raja_festival_Odisha.jpg/1280px-Raja_festival_Odisha.jpg'
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
      'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Nuakhai_festival_Odisha.jpg/1280px-Nuakhai_festival_Odisha.jpg'
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
      'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Durga_Puja_Cuttack_silver.jpg/1280px-Durga_Puja_Cuttack_silver.jpg'
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
      'https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Pattachitra_painting.jpg/1280px-Pattachitra_painting.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Pattachitra_Odisha.jpg/1280px-Pattachitra_Odisha.jpg'
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
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Silver_filigree_Cuttack.jpg/1280px-Silver_filigree_Cuttack.jpg'
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
      'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pipili_applique_work.jpg/1280px-Pipili_applique_work.jpg'
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
      'https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Dhokra_art_Odisha.jpg/1280px-Dhokra_art_Odisha.jpg'
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
      'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Palm_leaf_manuscript_Odisha.jpg/1280px-Palm_leaf_manuscript_Odisha.jpg'
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
      'https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Sambalpuri_Saree.jpg/1280px-Sambalpuri_Saree.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Sambalpuri_weaving.jpg/1280px-Sambalpuri_weaving.jpg'
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
      'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bomkai_Saree_Odisha.jpg/1280px-Bomkai_Saree_Odisha.jpg'
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
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Khandua_pata_Nuapatna.jpg/1280px-Khandua_pata_Nuapatna.jpg'
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
      'https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Odissi_Music_performance.jpg/1280px-Odissi_Music_performance.jpg'
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
      'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Ananda_Bazar_Puri.jpg/1280px-Ananda_Bazar_Puri.jpg'
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
      'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Chhena_poda.jpg/1280px-Chhena_poda.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Odisha_Rasagola.jpg/1280px-Odisha_Rasagola.jpg'
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
      'https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Paika_Akhada_Odisha.jpg/1280px-Paika_Akhada_Odisha.jpg'
    ],
    media: [],
    relatedPlaces: ['Khurda', 'Bhubaneswar'],
    relatedFestivals: [],
    relatedHeritageIds: [],
    relatedCultureIds: [],
    trailIds: [],
    verificationStatus: 'verified',
    sources: [
      {
        sourceName: 'Odisha Tourism — Paika Akhada',
        sourceType: 'Government tourism',
        sourceUrl: 'https://odishatourism.gov.in/content/tourism/en/explore/art-and-culture/performing-arts/paika-akhada.html'
      }
    ],
    lastVerified: '2026-08-29'
  },

  {
    id: 'od-culture-dalkhai',
    slug: 'dalkhai',
    name: 'Dalkhai Dance',
    recordType: 'culture',
    state: 'odisha',
    stateName: 'Odisha',
    region: 'Sambalpur, Bargarh, Bolangir, Sundargarh',
    community: 'Tribal and folk communities of western Odisha',
    category: 'classical-folk-dance',
    categoryName: 'Classical & Folk Dance',
    shortDescription:
      'A popular folk dance of western Odisha performed by women during Dussehra (Durga Puja), characterised by its lively footwork, the Sambalpuri Dalkhai song, and colourful Sambalpuri saree costumes.',
    originHistory:
      'Dalkhai is associated with the Durga Puja celebrations in western Odisha and is performed by young women invoking the goddess Dalkhai (a form of Durga). The dance has strong connections to tribal communities of Sambalpur division.',
    culturalSignificance:
      'The Dalkhai song "Dalkhai bo…" is one of the most recognized folk songs of Odisha. The dance is a defining feature of the Nuakhai and Dussehra festivals in Sambalpur and has been popularised at the national level.',
    keyElements: [
      'Performed by women',
      'Sambalpuri folk song "Dalkhai bo"',
      'Sambalpuri saree costumes',
      'Dhol, Nisan, Tasha drumming',
      'Dussehra and Nuakhai context'
    ],
    images: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Dalkhai_dance_western_Odisha.jpg/1280px-Dalkhai_dance_western_Odisha.jpg'
    ],
    media: [],
    relatedPlaces: ['Sambalpur', 'Bargarh', 'Bolangir'],
    relatedFestivals: ['Nuakhai', 'Durga Puja'],
    relatedHeritageIds: [],
    relatedCultureIds: ['od-culture-sambalpuri-weave', 'od-culture-nuakhai'],
    trailIds: [],
    verificationStatus: 'verified',
    sources: [
      {
        sourceName: 'Odisha Tourism — Dalkhai',
        sourceType: 'Government tourism',
        sourceUrl: 'https://odishatourism.gov.in/content/tourism/en/explore/art-and-culture/dance-forms/dalkhai.html'
      }
    ],
    lastVerified: '2026-08-29'
  },

  {
    id: 'od-culture-sambalpuri-folk-music',
    slug: 'sambalpuri-folk-music',
    name: 'Sambalpuri Folk Music',
    recordType: 'culture',
    state: 'odisha',
    stateName: 'Odisha',
    region: 'Sambalpur division (western Odisha)',
    community: 'Western Odishan communities',
    category: 'music',
    categoryName: 'Music',
    shortDescription:
      'The vibrant folk music tradition of western Odisha, centred on the Sambalpuri language and featuring songs of harvest, love, and worship accompanied by traditional instruments like the dhol, tasa, and bansuri.',
    originHistory:
      'Sambalpuri folk music has deep roots in the agrarian and tribal traditions of the Mahanadi belt. It encompasses Dalkhai geet, Karma geet (harvest songs), Rasarkeli, and devotional Bhajans to the goddess Samalesvari.',
    culturalSignificance:
      'Sambalpuri music is the cultural lifeblood of western Odisha, accompanied by dances like Dalkhai, Karma and Rasarkeli. It has been popularised nationally through musicians like Mamata Chandrakar.',
    keyElements: [
      'Sambalpuri language lyrics',
      'Dhol, Tasha, Mahuri instruments',
      'Karma geet (harvest songs)',
      'Dalkhai geet',
      'Devotional songs to Samalesvari'
    ],
    images: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Sambalpuri_folk_music.jpg/1280px-Sambalpuri_folk_music.jpg'
    ],
    media: [],
    relatedPlaces: ['Sambalpur', 'Bargarh'],
    relatedFestivals: ['Nuakhai'],
    relatedHeritageIds: [],
    relatedCultureIds: ['od-culture-dalkhai', 'od-culture-sambalpuri-weave'],
    trailIds: [],
    verificationStatus: 'verified',
    sources: [
      {
        sourceName: 'Odisha Tourism — Sambalpuri Music',
        sourceType: 'Government tourism',
        sourceUrl: 'https://odishatourism.gov.in/'
      }
    ],
    lastVerified: '2026-08-29'
  }
]

// Odisha showcase state — verified records.
export const allCulture = [...verifiedCulture]
