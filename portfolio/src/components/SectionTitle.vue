<template>
  <div class="section-title">
    <span class="eyebrow" v-if="eyebrow">{{ eyebrow }}</span>
    <h2>
      {{ title }}<span class="gradient-text" v-if="highlight"> {{ highlight }}</span>
    </h2>
    <p v-if="subtitle">{{ subtitle }}</p>
  </div>
</template>

<script setup>
defineProps({
  eyebrow: String,
  title: String,
  highlight: String,
  subtitle: String,
})
</script>

<style scoped>
.section-title {
  text-align: center;
  max-width: 600px;
  margin: 0 auto 56px;
}

.eyebrow {
  display: inline-block;
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--secondary);
  margin-bottom: 10px;
}

h2 {
  font-size: clamp(1.6rem, 4vw, 2.2rem);
}

p {
  color: var(--text-dim);
  margin-top: 12px;
  line-height: 1.6;
}
</style>
