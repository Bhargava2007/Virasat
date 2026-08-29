<template>
  <q-page class="home-page">
    <HomeHero />
    <HomeCategoryCards />

    <HomeExplorePreview />
    <HomeFeaturedJourney />
    <HomePreserveCTA />
  </q-page>
</template>

<script setup>
import HomeHero from '@/components/home/HomeHero.vue'
import HomeCategoryCards from '@/components/home/HomeCategoryCards.vue'

import HomeExplorePreview from '@/components/home/HomeExplorePreview.vue'
import HomeFeaturedJourney from '@/components/home/HomeFeaturedJourney.vue'
import HomePreserveCTA from '@/components/home/HomePreserveCTA.vue'

</script>

<style scoped>
.home-page {
  background: var(--color-surface);
  padding-bottom: 80px;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;

  @media (max-width: 1200px) {
    max-width: 100%;
  }
}
</style>
