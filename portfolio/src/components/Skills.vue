<template>
  <section id="skills" class="section section-alt">
    <div class="container">
      <SectionTitle eyebrow="What I know" title="My" highlight="Skills" />

      <div class="skills-grid">
        <SkillCard
          v-for="group in skillGroups"
          :key="group.title"
          :title="group.title"
          :icon="group.icon"
          :skills="group.skills"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import SectionTitle from './SectionTitle.vue'
import SkillCard from './SkillCard.vue'
import { skillGroups } from '../data/skills.js'
</script>

<style scoped>
.skills-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

@media (max-width: 900px) {
  .skills-grid {
    grid-template-columns: 1fr;
  }
}
</style>
