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
  column-count: 3;
  column-gap: 24px;
}

@media (max-width: 960px) {
  .skills-grid {
    column-count: 2;
  }
}

@media (max-width: 640px) {
  .skills-grid {
    column-count: 1;
  }
}
</style>
