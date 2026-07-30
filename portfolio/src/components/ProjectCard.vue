<template>
  <div class="project-card card">
    <div class="thumb">
      <img :src="project.image" :alt="project.title" @error="onImgError" />
    </div>

    <div class="body">
      <h3>{{ project.title }}</h3>
      <p>{{ project.summary }}</p>

      <div class="tags">
        <span v-for="t in project.tech" :key="t" class="tag">{{ t }}</span>
      </div>

      <div class="links">
        <router-link :to="`/projects/${project.id}`" class="btn btn-primary btn-sm">
          View Details
        </router-link>
        <a v-if="project.githubUrl" :href="project.githubUrl" target="_blank" rel="noopener" class="btn btn-outline btn-sm">
          GitHub
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  project: Object,
})

function onImgError(e) {
  e.target.style.opacity = 0
}
</script>

<style scoped>
.project-card {
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.thumb {
  aspect-ratio: 16/10;
  background: linear-gradient(135deg, var(--card), var(--bg-alt));
  overflow: hidden;
}

.thumb img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: opacity 0.3s ease;
}

.body {
  padding: 22px;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.body h3 {
  margin-bottom: 8px;
  font-size: 1.15rem;
}

.body p {
  color: var(--text-dim);
  font-size: 0.9rem;
  line-height: 1.6;
  flex: 1;
}

.tags {
  margin: 14px 0;
}

.links {
  display: flex;
  gap: 10px;
}

.btn-sm {
  padding: 9px 18px;
  font-size: 0.85rem;
}
</style>