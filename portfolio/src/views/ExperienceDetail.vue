<template>
  <main class="section detail" v-if="item">
    <div class="container">
      <router-link to="/#experience" class="back">← Back to Experience</router-link>

      <span class="year">{{ item.year }}</span>
      <h1 class="title">{{ item.title }}</h1>
      <p class="subtitle">{{ item.org }}</p>

      <div class="tags">
        <span v-for="t in item.tags" :key="t" class="tag">{{ t }}</span>
      </div>

      <div v-if="item.gallery && item.gallery.length === 1" class="single-image">
        <img :src="item.gallery[0]" :alt="item.title" @error="onImgError" />
      </div>

      <div v-else-if="item.gallery && item.gallery.length > 1" class="carousel">
        <div class="carousel-viewport">
          <img
            :src="item.gallery[current]"
            :alt="`${item.title} screenshot ${current + 1}`"
            @error="onImgError"
          />

          <button class="nav prev" @click="prevImage" aria-label="Previous image">‹</button>
          <button class="nav next" @click="nextImage" aria-label="Next image">›</button>
          <span class="counter">{{ current + 1 }} / {{ item.gallery.length }}</span>
        </div>

        <div class="dots">
          <button
            v-for="(img, i) in item.gallery"
            :key="i"
            class="dot"
            :class="{ active: i === current }"
            @click="current = i"
            :aria-label="`Go to image ${i + 1}`"
          ></button>
        </div>
      </div>

      <p v-if="item.accounts && item.accounts.length" class="overview">{{ item.description }}</p>

      <div v-if="item.accounts && item.accounts.length" class="accounts">
        <div v-for="(acc, i) in item.accounts" :key="i" class="card account-card">
          <div class="account-header">
            <span class="account-role">{{ acc.role }}</span>
            <h3 class="account-name">{{ acc.name }}</h3>
          </div>

          <img
            v-if="acc.image"
            class="account-image"
            :src="acc.image"
            :alt="acc.name"
            @error="onImgError"
          />

          <a
            v-if="acc.link"
            :href="acc.link"
            target="_blank"
            rel="noopener"
            class="btn btn-outline btn-sm account-link"
          >
            🎵 {{ acc.linkLabel }}
          </a>

          <div class="account-info">
            <div v-for="info in acc.info" :key="info.label" class="info-row">
              <span class="info-label">{{ info.label }}</span>
              <span class="info-value">{{ info.value }}</span>
            </div>
          </div>

          <h4>หน้าที่และประสบการณ์ที่ได้รับ</h4>
          <p class="account-duties">{{ acc.duties }}</p>

          <h4>ทักษะที่ได้รับ</h4>
          <ul class="account-skills">
            <li v-for="(s, si) in acc.skills" :key="si">{{ s }}</li>
          </ul>
        </div>
      </div>

      <div v-else class="content-grid">
        <div class="card block">
          <h3>รายละเอียดกิจกรรม</h3>
          <p>{{ item.description }}</p>
        </div>

        <div class="card block">
          <h3>สิ่งที่ได้รับ</h3>
          <ul>
            <li v-for="(g, i) in item.gained" :key="i">{{ g }}</li>
          </ul>
        </div>
      </div>
    </div>
  </main>

  <main v-else class="section">
    <div class="container">
      <p>ไม่พบข้อมูลนี้</p>
      <router-link to="/" class="btn btn-outline">กลับหน้าแรก</router-link>
    </div>
  </main>
</template>

<script setup>
import { computed, ref, watch } from 'vue'
import { getExperienceById } from '../data/experience.js'

const props = defineProps({
  id: String,
})

const item = computed(() => getExperienceById(props.id))
const current = ref(0)

watch(
  () => props.id,
  () => {
    current.value = 0
  }
)

function nextImage() {
  if (!item.value) return
  current.value = (current.value + 1) % item.value.gallery.length
}

function prevImage() {
  if (!item.value) return
  current.value = (current.value - 1 + item.value.gallery.length) % item.value.gallery.length
}

function onImgError(e) {
  e.target.style.opacity = 0
}
</script>

<style scoped>
.detail {
  padding-top: 130px;
}

.back {
  display: inline-block;
  margin-bottom: 24px;
  color: var(--secondary);
  font-weight: 600;
}

.year {
  display: inline-block;
  font-family: var(--font-mono);
  font-weight: 700;
  color: var(--secondary);
  font-size: 0.95rem;
  margin-bottom: 6px;
}

.title {
  font-size: 2rem;
  margin-bottom: 6px;
}

.subtitle {
  font-size: 1.05rem;
  color: var(--text-dim);
  margin-bottom: 20px;
}

.tags {
  margin-bottom: 28px;
}

.single-image {
  margin-bottom: 40px;
}

.single-image img {
  display: block;
  margin: 0 auto;
  width: 100%;
  max-width: 500px;
  height: auto;
  border-radius: var(--radius);
  border: 1px solid var(--card-border);
  background: var(--card);
}

.carousel {
  margin-bottom: 40px;
}

.carousel-viewport {
  position: relative;
  width: 70%;
  max-width: 600px;
  margin: 0 auto;
  border-radius: var(--radius);
  overflow: hidden;
  border: 1px solid var(--card-border);
  background: var(--card);
}

.carousel-viewport img {
  width: 100%;
  aspect-ratio: 4 / 3;
  object-fit: cover;
  display: block;
}

.nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: none;
  background: rgba(15, 23, 42, 0.6);
  color: #fff;
  font-size: 1.6rem;
  line-height: 1;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(4px);
  transition: background 0.2s ease;
}

.nav:hover {
  background: var(--primary);
}

.nav.prev {
  left: 16px;
}

.nav.next {
  right: 16px;
}

.counter {
  position: absolute;
  bottom: 14px;
  right: 16px;
  padding: 4px 12px;
  font-size: 0.75rem;
  font-weight: 600;
  font-family: var(--font-mono);
  color: #fff;
  background: rgba(15, 23, 42, 0.6);
  border-radius: 999px;
  backdrop-filter: blur(4px);
}

.dots {
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-top: 16px;
}

.dot {
  width: 9px;
  height: 9px;
  border-radius: 50%;
  border: none;
  padding: 0;
  cursor: pointer;
  background: var(--card-border);
  transition: background 0.2s ease, transform 0.2s ease;
}

.dot.active {
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  transform: scale(1.2);
}

@media (max-width: 600px) {
  .carousel-viewport img {
    aspect-ratio: 4 / 3;
  }
  .nav {
    width: 36px;
    height: 36px;
    font-size: 1.3rem;
  }
}

.overview {
  color: var(--text-dim);
  line-height: 1.8;
  max-width: 720px;
  margin-bottom: 32px;
}

.accounts {
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-bottom: 36px;
}

.account-card {
  padding: 28px;
}

.account-header {
  margin-bottom: 16px;
}

.account-role {
  display: inline-block;
  font-size: 0.85rem;
  color: var(--secondary);
  font-weight: 600;
  margin-bottom: 4px;
}

.account-name {
  font-size: 1.3rem;
}

.account-image {
  width: 100%;
  max-width: 420px;
  height: auto;
  border-radius: var(--radius);
  border: 1px solid var(--card-border);
  background: var(--bg);
  margin-bottom: 16px;
  display: block;
}

.account-link {
  display: inline-flex;
  margin-bottom: 20px;
}

.account-info {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 12px;
  margin-bottom: 22px;
}

.info-row {
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding: 10px 14px;
  background: var(--bg);
  border: 1px solid var(--card-border);
  border-radius: 10px;
}

.info-label {
  font-size: 0.72rem;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: var(--text-dim);
}

.info-value {
  font-weight: 600;
  font-size: 0.9rem;
}

.account-card h4 {
  font-size: 1rem;
  margin: 20px 0 10px;
}

.account-duties {
  color: var(--text-dim);
  line-height: 1.8;
}

.account-skills {
  padding-left: 20px;
  color: var(--text-dim);
  line-height: 1.9;
}

.btn-sm {
  padding: 9px 18px;
  font-size: 0.85rem;
}

.content-grid {
  display: grid;
  grid-template-columns: 1.4fr 1fr;
  gap: 24px;
  margin-bottom: 36px;
}

.block {
  padding: 26px;
}

.block h3 {
  margin-bottom: 14px;
}

.block p {
  color: var(--text-dim);
  line-height: 1.8;
}

.block ul {
  padding-left: 20px;
  color: var(--text-dim);
  line-height: 1.9;
}

@media (max-width: 760px) {
  .content-grid {
    grid-template-columns: 1fr;
  }
}
</style>
