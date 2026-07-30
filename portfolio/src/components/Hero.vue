<template>
  <section id="home" class="hero">
    <div class="blob blob-1"></div>
    <div class="blob blob-2"></div>

    <div class="container hero-inner">
      <div class="avatar fade-up">
        <img src="/images/nathanan.jpg" alt="Nathanan Insuwan" @error="onImgError" />
      </div>

      <p class="fade-up hi">Hi, I'm</p>
      <h1 class="fade-up name">Nathanan Insuwan</h1>
      <p class="fade-up role">Information Technology Student</p>

      <div class="fade-up roles-rotate">
        <span
          v-for="(r, i) in roles"
          :key="r"
          :class="{ active: i === activeRole }"
        >{{ r }}</span>
      </div>

      <div class="fade-up cta">
        <a href="/resume.pdf" download class="btn btn-primary">📄 Download Resume</a>
        <a href="https://github.com/" target="_blank" rel="noopener" class="btn btn-outline">GitHub</a>
        <a href="mailto:example@email.com" class="btn btn-outline">Email</a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const roles = ['Frontend Developer', 'Web Developer', 'Software Developer']
const activeRole = ref(0)
let timer

onMounted(() => {
  timer = setInterval(() => {
    activeRole.value = (activeRole.value + 1) % roles.length
  }, 2200)
})
onUnmounted(() => clearInterval(timer))

function onImgError(e) {
  e.target.style.display = 'none'
}
</script>

<style scoped>
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  overflow: hidden;
  background: radial-gradient(circle at 20% 20%, #14213f 0%, var(--bg) 60%);
}

.blob {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.35;
  animation: floatBlob 10s ease-in-out infinite;
}

.blob-1 {
  width: 340px;
  height: 340px;
  background: var(--primary);
  top: -60px;
  right: 10%;
}

.blob-2 {
  width: 280px;
  height: 280px;
  background: var(--secondary);
  bottom: -40px;
  left: 5%;
  animation-delay: 2s;
}

.hero-inner {
  position: relative;
  z-index: 1;
  text-align: center;
  padding-top: 100px;
}

.avatar {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin: 0 auto 28px;
  padding: 4px;
  background: linear-gradient(135deg, var(--primary), var(--secondary));
}

.avatar img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  background: var(--card);
}

.hi {
  color: var(--text-dim);
  font-size: 1.1rem;
  margin-bottom: 8px;
}

.name {
  font-size: clamp(2.2rem, 6vw, 3.6rem);
  font-weight: 700;
  margin-bottom: 12px;
}

.role {
  font-size: 1.2rem;
  color: var(--text-dim);
  margin-bottom: 20px;
}

.roles-rotate {
  position: relative;
  height: 32px;
  margin-bottom: 36px;
  font-family: var(--font-mono);
  font-weight: 600;
  font-size: 1.15rem;
}

.roles-rotate span {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  opacity: 0;
  transition: opacity 0.5s ease;
  color: var(--secondary);
}

.roles-rotate span.active {
  opacity: 1;
}

.cta {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 14px;
}
</style>
