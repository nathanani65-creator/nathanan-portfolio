<template>
  <section id="certificates" class="section">
    <div class="container">
      <SectionTitle eyebrow="Recognitions" title="Certificates" />

      <div class="cert-grid">
        <button
          v-for="c in certificates"
          :key="c.id"
          class="cert-card card"
          @click="selected = c"
        >
          <div class="cert-thumb">
            <img :src="c.image" :alt="c.title" @error="onImgError" />
          </div>
          <h4>{{ c.title }}</h4>
          <p>{{ c.issuer }} · {{ c.year }}</p>
        </button>
      </div>
    </div>

    <div v-if="selected" class="lightbox" @click="selected = null">
      <img :src="selected.image" :alt="selected.title" @error="onImgError" />
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import SectionTitle from './SectionTitle.vue'
import { certificates } from '../data/certificates.js'

const selected = ref(null)

function onImgError(e) {
  e.target.style.opacity = 0
}
</script>

<style scoped>
.cert-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px;
}

.cert-card {
  padding: 16px;
  background: var(--card);
  border: none;
  cursor: pointer;
  text-align: left;
  font-family: inherit;
  color: var(--text);
}

.cert-thumb {
  aspect-ratio: 4/3;
  border-radius: 10px;
  overflow: hidden;
  background: var(--bg-alt);
  margin-bottom: 12px;
}

.cert-thumb img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.cert-card h4 {
  font-size: 0.95rem;
  margin-bottom: 4px;
}

.cert-card p {
  font-size: 0.8rem;
  color: var(--text-dim);
  margin: 0;
}

.lightbox {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.85);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 200;
  padding: 40px;
}

.lightbox img {
  max-width: 90vw;
  max-height: 85vh;
  border-radius: 12px;
}

@media (max-width: 960px) {
  .cert-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 600px) {
  .cert-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
