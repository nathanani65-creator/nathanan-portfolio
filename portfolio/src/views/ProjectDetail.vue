<template>
  <main class="section detail" v-if="project">
    <div class="container">
      <router-link to="/#projects" class="back">← Back to Projects</router-link>

      <h1 class="title">{{ project.title }}</h1>
      <div class="tags">
        <span v-for="t in project.tech" :key="t" class="tag">{{ t }}</span>
      </div>

      <div class="gallery">
        <img
          v-for="(img, i) in project.gallery"
          :key="i"
          :src="img"
          :alt="`${project.title} screenshot ${i + 1}`"
          @error="onImgError"
        />
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

      <div class="actions">
        <a v-if="project.demoUrl" :href="project.demoUrl" target="_blank" rel="noopener" class="btn btn-primary">
          Live Demo
        </a>
        <a v-if="project.githubUrl" :href="project.githubUrl" target="_blank" rel="noopener" class="btn btn-outline">
          GitHub
        </a>
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
import { computed } from 'vue'
import { getProjectById } from '../data/projects.js'

const props = defineProps({
  id: String,
})

const project = computed(() => getProjectById(props.id))

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

.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 16px;
  margin-bottom: 40px;
}

.gallery img {
  border-radius: var(--radius);
  border: 1px solid var(--card-border);
  aspect-ratio: 16/10;
  object-fit: cover;
  background: var(--card);
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
