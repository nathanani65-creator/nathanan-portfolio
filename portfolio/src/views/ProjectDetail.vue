<template>
  <main class="section detail" v-if="project">
    <div class="container">
      <router-link to="/#projects" class="back">← Back to Projects</router-link>

      <h1 class="title">{{ project.title }}</h1>
      <div class="tags">
        <span v-for="t in project.tech" :key="t" class="tag">{{ t }}</span>
      </div>

      <div class="carousel">
        <div class="carousel-viewport">
          <img
            :src="project.gallery[current]"
            :alt="`${project.title} screenshot ${current + 1}`"
            @error="onImgError"
          />

          <template v-if="project.gallery.length > 1">
            <button class="nav prev" @click="prevImage" aria-label="Previous image">‹</button>
            <button class="nav next" @click="nextImage" aria-label="Next image">›</button>
            <span class="counter">{{ current + 1 }} / {{ project.gallery.length }}</span>
          </template>
        </div>

        <div class="dots" v-if="project.gallery.length > 1">
          <button
            v-for="(img, i) in project.gallery"
            :key="i"
            class="dot"
            :class="{ active: i === current }"
            @click="current = i"
            :aria-label="`Go to image ${i + 1}`"
          ></button>
        </div>
      </div>

      <a
        v-if="project.pdf"
        :href="project.pdf"
        target="_blank"
        rel="noopener"
        class="card pdf-link"
      >
        <span class="pdf-icon">📄</span>
        <div class="pdf-text">
          <strong>เอกสารฉบับเต็ม (PDF)</strong>
          <span>คลิกเพื่อเปิด / ดาวน์โหลด</span>
        </div>
        <span class="pdf-arrow">↗</span>
      </a>
    
      <div class="actions">
        <a v-if="project.demoUrl" :href="project.demoUrl" target="_blank" rel="noopener" class="btn btn-primary">
          Live Demo
        </a>
        <a v-if="project.githubUrl" :href="project.githubUrl" target="_blank" rel="noopener" class="btn btn-outline">
          GitHub
        </a>
      </div>

      <div class="content-grid">
        <div class="card block">
          <h3>รายละเอียด</h3>
          <p>{{ project.details }}</p>
        </div>

        <div class="card block">
          <h3>สิ่งที่เรียนรู้</h3>
          <ul>
            <li v-for="(l, i) in project.learned" :key="i">{{ l }}</li>
          </ul>
        </div>
      </div>
    </div>
  </main>


  <main v-else class="section">
    <div class="container">
      <p>ไม่พบโปรเจกต์นี้</p>
      <router-link to="/" class="btn btn-outline">กลับหน้าแรก</router-link>
    </div>
  </main>
</template>

<script setup>
import { computed, ref, watch } from 'vue'
import { getProjectById } from '../data/projects.js'

const props = defineProps({
  id: String,
})

const project = computed(() => getProjectById(props.id))
const current = ref(0)

watch(
  () => props.id,
  () => {
    current.value = 0
  }
)

function nextImage() {
  if (!project.value) return
  current.value = (current.value + 1) % project.value.gallery.length
}

function prevImage() {
  if (!project.value) return
  current.value =
    (current.value - 1 + project.value.gallery.length) % project.value.gallery.length
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

.title {
  font-size: 2rem;
  margin-bottom: 14px;
}

.tags {
  margin-bottom: 28px;
}

.carousel {
  margin-bottom: 40px;
}

.carousel-viewport {
  position: relative;
  border-radius: var(--radius);
  overflow: hidden;
  border: 1px solid var(--card-border);
  background: var(--card);
}

.carousel-viewport img {
  width: 100%;
  aspect-ratio: 1 / 1;
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

.pdf-link {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 18px 22px;
  margin-bottom: 36px;
  text-decoration: none;
  color: var(--text);
}

.pdf-icon {
  font-size: 1.8rem;
}

.pdf-text {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.pdf-text span {
  color: var(--text-dim);
  font-size: 0.85rem;
}

.pdf-arrow {
  font-size: 1.2rem;
  color: var(--secondary);
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

.actions {
  display: flex;
  gap: 14px;
}

@media (max-width: 760px) {
  .content-grid {
    grid-template-columns: 1fr;
  }
}
</style>
