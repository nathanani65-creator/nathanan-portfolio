<template>
  <div class="skill-card card">
    <div class="skill-header">
      <span class="skill-icon">{{ icon }}</span>
      <h3>{{ title }}</h3>
    </div>

    <ul class="skill-list">
      <li v-for="s in skills" :key="s.name">
        <div class="row">
          <span>{{ s.name }}</span>
          <span class="pct">{{ s.level }}%</span>
        </div>
        <div class="bar">
          <div class="fill" :style="{ width: s.level + '%' }"></div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  icon: String,
  skills: Array,
})
</script>

<style scoped>
.skill-card {
  padding: 28px;
}

.skill-header {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
}

.skill-icon {
  font-size: 1.4rem;
}

.skill-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.row {
  display: flex;
  justify-content: space-between;
  font-size: 0.9rem;
  margin-bottom: 6px;
}

.pct {
  color: var(--text-dim);
}

.bar {
  height: 6px;
  border-radius: 999px;
  background: var(--bg);
  overflow: hidden;
}

.fill {
  height: 100%;
  border-radius: 999px;
  background: linear-gradient(90deg, var(--primary), var(--secondary));
  transition: width 1s ease;
}
</style>
