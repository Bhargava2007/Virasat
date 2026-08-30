<template>
  <section class="culture-section">
    <!-- Banner with Culture Background -->
    <div class="culture-banner">
      <div class="banner-overlay"></div>
      <h2 class="banner-title">CULTURE</h2>
      <p class="banner-subtitle">Experience the living traditions</p>
    </div>

    <!-- Culture Carousel -->
    <div class="culture-carousel-container">
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
          v-for="(item, index) in verifiedCulture"
          :key="item.id"
          :name="index"
          class="column no-wrap flex-center slide-bg"
          :style="{ backgroundImage: `url(${getCultureImage(item)})` }"
        >
          <div class="slide-overlay"></div>
          <div class="slide-content text-center">
            <h3 class="slide-title">{{ item.name }}</h3>
            <p class="slide-desc">{{ item.shortDescription }}</p>
            <q-btn
              outline
              color="white"
              label="Explore Culture"
              class="q-mt-md"
              @click="exploreCulture(item.slug)"
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
import { verifiedCulture } from '@/data/culture.js'

const router = useRouter()
const slide = ref(0)

const getCultureImage = (item) => {
  if (item.images && item.images.length > 0) {
    return item.images[0]
  }
  return 'https://images.unsplash.com/photo-1512727823337-33675037d0c3?q=80&w=2000&auto=format&fit=crop'
}

const exploreCulture = (slug) => {
  router.push(`/culture/${slug}`)
}
</script>

<style scoped>
.culture-section {
  width: 100%;
  background-color: transparent;
}

.culture-banner {
  position: relative;
  width: 100%;
  height: 300px;
  background-image: url('@/assets/oddessyy.webp');
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
  color: #e57373; /* Slightly different accent for culture */
  font-size: 1.25rem;
  font-family: 'Cormorant Garamond', serif;
  font-style: italic;
  margin-top: 10px;
  letter-spacing: 2px;
}

.culture-carousel-container {
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
