<template>
  <q-page class="home-page">
    <HomeHero />
    
    <HomeHeritageSection />
    <HomeCultureSection />

    <!-- Container for the rest to keep it centered like before -->
    <div class="home-container">
      <HomeExplorePreview />
      <!-- Preserve CTA is hidden per user request, but code remains -->
      <HomePreserveCTA v-show="false" />
    </div>
  </q-page>
</template>

<script setup>
import HomeHero from '@/components/home/HomeHero.vue'
import HomeHeritageSection from '@/components/home/HomeHeritageSection.vue'
import HomeCultureSection from '@/components/home/HomeCultureSection.vue'

import HomeExplorePreview from '@/components/home/HomeExplorePreview.vue'
import HomePreserveCTA from '@/components/home/HomePreserveCTA.vue'
</script>

<style scoped>
.home-page {
  background-color: #6B1A0A;
  background-image: url('@/assets/fabric_bg.jpg');
  background-repeat: repeat;
  background-size: 800px;
  background-attachment: fixed;
  padding-bottom: 80px;
  position: relative;
  /* Override global bg for home page only */
  background-blend-mode: normal;
}

.home-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}
</style>
