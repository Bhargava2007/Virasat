<template>
  <div class="hero-monuments-bg" aria-hidden="true">
    <img src="@/assets/explore_hero_art_1787729688808.png" alt="" />
  </div>
</template>

<style scoped>
.hero-monuments-bg {
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  overflow: hidden;
  opacity: 0.15;
  border-bottom-left-radius: 32px;
  border-bottom-right-radius: 32px;
}
img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: right center;
}
</style>
