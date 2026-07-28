<template>
  <section id="projects" class="section">
    <div class="container">
      <SectionTitle eyebrow="My work" title="Featured" highlight="Projects" />

      <div class="projects-grid">
        <ProjectCard v-for="p in projects" :key="p.id" :project="p" />
      </div>
    </div>
  </section>
</template>

<script setup>
import SectionTitle from './SectionTitle.vue'
import ProjectCard from './ProjectCard.vue'
import { projects } from '../data/projects.js'
</script>

<style scoped>
.projects-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 26px;
}

@media (max-width: 960px) {
  .projects-grid {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 640px) {
  .projects-grid {
    grid-template-columns: 1fr;
  }
}
</style>
