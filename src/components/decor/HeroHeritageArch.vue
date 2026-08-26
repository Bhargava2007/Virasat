<template>
  <div class="hero-heritage-arch" aria-hidden="true">
    <img src="@/assets/heritage_hero_art_1787729701525.png" alt="" />
  </div>
</template>

<style scoped>
.hero-heritage-arch {
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  overflow: hidden;
  opacity: 0.7;
  mix-blend-mode: luminosity;
  border-bottom-left-radius: 32px;
  border-bottom-right-radius: 32px;
  -webkit-mask-image: linear-gradient(to right, transparent 0%, rgba(0,0,0,0.8) 30%, black 100%);
  mask-image: linear-gradient(to right, transparent 0%, rgba(0,0,0,0.8) 30%, black 100%);
}
img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: right center;
}
</style>
