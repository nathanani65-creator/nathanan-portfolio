<template>
  <header class="navbar" :class="{ scrolled }">
    <div class="container nav-inner">
      <router-link to="/" class="logo">
        Nathanan<span class="gradient-text">.</span>
      </router-link>

      <nav class="links" :class="{ open: menuOpen }">
        <a
          v-for="link in links"
          :key="link.id"
          :href="`/#${link.id}`"
          @click="menuOpen = false"
        >
          {{ link.label }}
        </a>
      </nav>

      <div class="actions">
        <button class="icon-btn" @click="toggleTheme" :aria-label="'Toggle dark mode'">
          {{ isLight ? '🌙' : '☀️' }}
        </button>
        <button class="burger" @click="menuOpen = !menuOpen" aria-label="Menu">
          <span></span><span></span><span></span>
        </button>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const links = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
]

const scrolled = ref(false)
const menuOpen = ref(false)
const isLight = ref(false)

function handleScroll() {
  scrolled.value = window.scrollY > 12
}

function toggleTheme() {
  isLight.value = !isLight.value
  document.documentElement.classList.toggle('light', isLight.value)
  localStorage.setItem('theme', isLight.value ? 'light' : 'dark')
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  const saved = localStorage.getItem('theme')
  if (saved === 'light') {
    isLight.value = true
    document.documentElement.classList.add('light')
  }
})

onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  padding: 18px 0;
  transition: background 0.3s ease, padding 0.3s ease, box-shadow 0.3s ease;
}

.navbar.scrolled {
  background: color-mix(in srgb, var(--bg) 85%, transparent);
  backdrop-filter: blur(12px);
  padding: 12px 0;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
}

.nav-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  font-family: var(--font-mono);
  font-weight: 700;
  font-size: 1.3rem;
}

.links {
  display: flex;
  gap: 28px;
}

.links a {
  font-size: 0.95rem;
  font-weight: 500;
  color: var(--text-dim);
  transition: color 0.2s ease;
}

.links a:hover {
  color: var(--primary);
}

.actions {
  display: flex;
  align-items: center;
  gap: 12px;
}

.icon-btn {
  background: var(--card);
  border: 1px solid var(--card-border);
  border-radius: 50%;
  width: 40px;
  height: 40px;
  cursor: pointer;
  font-size: 1.1rem;
}

.burger {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
}

.burger span {
  width: 24px;
  height: 2px;
  background: var(--text);
}

@media (max-width: 860px) {
  .links {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: var(--bg-alt);
    flex-direction: column;
    padding: 16px 24px;
    display: none;
    gap: 16px;
    border-bottom: 1px solid var(--card-border);
  }
  .links.open {
    display: flex;
  }
  .burger {
    display: flex;
  }
}
</style>
