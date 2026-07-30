<template>
  <div class="skill-card card">
    <div class="skill-header">
      <span class="skill-icon">{{ icon }}</span>
      <h3>{{ title }}</h3>
      <span class="count">{{ skills.length }}</span>
    </div>

    <ul class="skill-list">
      <li v-for="s in skills" :key="s.name">
        <span class="dot"></span>
        <span>{{ s.name }}</span>
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
  position: relative;
  padding: 28px;
  break-inside: avoid;
  margin-bottom: 24px;
  display: block;
}

.skill-header {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  margin-bottom: 22px;
  padding-right: 44px;
}

.skill-icon {
  font-size: 1.4rem;
  line-height: 1.3;
}

.skill-header h3 {
  flex: 1;
  line-height: 1.3;
}

.count {
  position: absolute;
  top: 28px;
  right: 28px;
  font-family: var(--font-mono);
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--text-dim);
  background: var(--bg);
  border: 1px solid var(--card-border);
  border-radius: 999px;
  padding: 3px 10px;
}

.skill-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 12px;
}

.skill-list li {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 0.95rem;
  font-weight: 500;
  padding-bottom: 12px;
  border-bottom: 1px solid var(--card-border);
}

.skill-list li:last-child {
  border-bottom: none;
  padding-bottom: 0;
}

.dot {
  width: 7px;
  height: 7px;
  flex-shrink: 0;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--primary), var(--secondary));
}
</style>
