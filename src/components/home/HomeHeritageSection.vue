<template>
  <section class="heritage-section">
    <!-- Banner with Carved Wall Background -->
    <div class="heritage-banner">
      <div class="banner-overlay"></div>
      <h2 class="banner-title">HERITAGE</h2>
      <p class="banner-subtitle">Witness the legacy of our people</p>
    </div>

    <!-- Heritage Carousel -->
    <div class="heritage-carousel-container">
      <q-carousel
        v-model="slide"
        transition-prev="slide-right"
        transition-next="slide-left"
        swipeable
        animated
        control-color="white"
        navigation
        padding
        arrows
        autoplay
        infinite
        height="500px"
        class="bg-dark text-white shadow-10 rounded-borders"
      >
        <q-carousel-slide
          v-for="(site, index) in verifiedHeritage"
          :key="site.id"
          :name="index"
          class="column no-wrap flex-center slide-bg"
          :style="{ backgroundImage: `url(${getSiteImage(site)})` }"
        >
          <div class="slide-overlay"></div>
          <div class="slide-content text-center">
            <h3 class="slide-title">{{ site.name }}</h3>
            <p class="slide-desc">{{ site.shortDescription }}</p>
            <q-btn
              outline
              color="white"
              label="Explore Monument"
              class="q-mt-md"
              @click="exploreSite(site.slug)"
            />
          </div>
        </q-carousel-slide>
      </q-carousel>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { verifiedHeritage } from '@/data/heritage.js'

const router = useRouter()
const slide = ref(0)

const getSiteImage = (site) => {
  if (site.images && site.images.length > 0) {
    return site.images[0]
  }
  return 'https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=1000&auto=format&fit=crop'
}

const exploreSite = (slug) => {
  router.push(`/heritage/${slug}`)
}
</script>

<style scoped>
.heritage-section {
  width: 100%;
  background-color: transparent;
}

.heritage-banner {
  position: relative;
  width: 100%;
  height: 300px;
  background-image: url('@/assets/hrtg.jpg');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.banner-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  z-index: 1;
}

.banner-title {
  position: relative;
  z-index: 2;
  color: #fff;
  font-family: 'Cinzel', serif;
  font-size: 3.5rem;
  letter-spacing: 8px;
  text-transform: uppercase;
  margin: 0;
  text-shadow: 0 4px 16px rgba(0,0,0,0.6), 0 2px 4px rgba(0,0,0,0.4);
}

.banner-subtitle {
  position: relative;
  z-index: 2;
  color: #d4a843;
  font-size: 1.25rem;
  font-family: 'Cormorant Garamond', serif;
  font-style: italic;
  margin-top: 10px;
  letter-spacing: 2px;
}

.heritage-carousel-container {
  max-width: 1200px;
  margin: -50px auto 40px;
  position: relative;
  z-index: 3;
  padding: 0 20px;
}

.slide-bg {
  background-size: cover;
  background-position: center;
  position: relative;
}

.slide-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.6) 40%, rgba(0,0,0,0.2) 100%);
  z-index: 1;
}

.slide-content {
  position: relative;
  z-index: 2;
  max-width: 800px;
  padding: 40px;
  border-radius: 8px;
}

.slide-title {
  font-family: 'Cinzel', serif;
  font-size: 2.5rem;
  margin: 0 0 16px;
  color: #fff;
  text-shadow: 2px 2px 8px rgba(0,0,0,0.8);
}

.slide-desc {
  font-size: 1.1rem;
  font-family: 'Cormorant Garamond', serif;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 24px;
}
</style>
