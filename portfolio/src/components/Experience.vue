<template>
  <section id="experience" class="section section-alt">
    <div class="container">
      <SectionTitle eyebrow="My journey" title="Experience" />

      <div class="timeline">
        <div v-for="(item, i) in experience" :key="i" class="timeline-item">
          <div class="marker">
            <span class="dot"></span>
            <span v-if="i !== experience.length - 1" class="line"></span>
          </div>

          <div class="content card">
            <span class="year">{{ item.year }}</span>
            <h3>{{ item.title }}</h3>
            <p class="org">{{ item.org }}</p>
            <p class="desc">{{ item.description }}</p>
            <div class="tags">
              <span v-for="t in item.tags" :key="t" class="tag">{{ t }}</span>
            </div>
            <router-link :to="`/experience/${item.id}`" class="btn btn-primary btn-sm">
              View Details
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import SectionTitle from './SectionTitle.vue'
import { experience } from '../data/experience.js'
</script>

<style scoped>
.timeline {
  max-width: 720px;
  margin: 0 auto;
}

.timeline-item {
  display: grid;
  grid-template-columns: 32px 1fr;
  gap: 20px;
}

.marker {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.dot {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  flex-shrink: 0;
  margin-top: 6px;
  box-shadow: 0 0 0 4px color-mix(in srgb, var(--primary) 25%, transparent);
}

.line {
  width: 2px;
  flex: 1;
  background: var(--card-border);
  margin: 6px 0;
}

.content {
  padding: 22px 24px;
  margin-bottom: 24px;
}

.year {
  font-family: var(--font-mono);
  font-weight: 700;
  color: var(--secondary);
  font-size: 0.85rem;
}

.content h3 {
  margin: 6px 0 2px;
  font-size: 1.15rem;
}

.org {
  color: var(--text-dim);
  font-size: 0.9rem;
  margin: 0 0 10px;
}

.desc {
  color: var(--text-dim);
  font-size: 0.9rem;
  line-height: 1.7;
  margin-bottom: 12px;
}

.tags {
  margin-bottom: 16px;
}

.btn-sm {
  padding: 9px 18px;
  font-size: 0.85rem;
}
</style>
