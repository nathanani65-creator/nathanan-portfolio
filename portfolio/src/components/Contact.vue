<template>
  <section id="contact" class="section section-alt">
    <div class="container contact-grid">
      <div class="info-side">
        <SectionTitle eyebrow="Let's talk" title="Contact" subtitle="กำลังมองหาโอกาสฝึกงาน พร้อมเรียนรู้ พัฒนาทักษะ และร่วมสร้างผลงานกับทีม" />

        <ul class="contact-list">
          <li v-for="c in contacts" :key="c.label">
            <span class="icon">{{ c.icon }}</span>
            <div>
              <span class="label">{{ c.label }}</span>
              <a :href="c.href" target="_blank" rel="noopener">{{ c.value }}</a>
            </div>
          </li>
        </ul>
      </div>

      <form class="card contact-form" @submit.prevent="onSubmit">
        <label>
          Name
          <input v-model="form.name" type="text" required placeholder="ชื่อของคุณ" />
        </label>
        <label>
          Email
          <input v-model="form.email" type="email" required placeholder="you@example.com" />
        </label>
        <label>
          Message
          <textarea v-model="form.message" rows="4" required placeholder="ข้อความ..."></textarea>
        </label>
        <button type="submit" class="btn btn-primary">
          {{ sent ? 'Sent ✓' : 'Send Message' }}
        </button>
      </form>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import SectionTitle from './SectionTitle.vue'

const contacts = [
  { icon: '✉️', label: 'Email', value: 'nathanani65@nu.ac.th', href: 'mailto:nathanani65@nu.ac.th' },
  { icon: '💻', label: 'GitHub', value: 'github.com', href: 'https://github.com/nathanani65-creator/nathanan-portfolio.git' },
  { icon: '🔗', label: 'LinkedIn', value: 'linkedin.com/in/yourname', href: 'https://linkedin.com/' },
  { icon: '📱', label: 'Phone', value: '099-246-2813',  },
]

const form = ref({ name: '', email: '', message: '' })
const sent = ref(false)

function onSubmit() {
  // เชื่อมต่อกับ backend หรือบริการส่งอีเมล เช่น Formspree / EmailJS ได้ที่นี่
  sent.value = true
  setTimeout(() => {
    sent.value = false
    form.value = { name: '', email: '', message: '' }
  }, 2000)
}
</script>

<style scoped>
.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;
  align-items: start;
}

.contact-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.contact-list li {
  display: flex;
  gap: 14px;
  align-items: center;
}

.contact-list .icon {
  font-size: 1.3rem;
}

.contact-list .label {
  display: block;
  font-size: 0.75rem;
  color: var(--text-dim);
  text-transform: uppercase;
}

.contact-list a {
  font-weight: 600;
}

.contact-form {
  padding: 32px;
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.contact-form label {
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-size: 0.85rem;
  color: var(--text-dim);
}

.contact-form input,
.contact-form textarea {
  background: var(--bg);
  border: 1px solid var(--card-border);
  border-radius: 10px;
  padding: 12px 14px;
  color: var(--text);
  font-family: inherit;
  font-size: 0.95rem;
  resize: vertical;
}

.contact-form input:focus,
.contact-form textarea:focus {
  outline: none;
  border-color: var(--primary);
}

@media (max-width: 860px) {
  .contact-grid {
    grid-template-columns: 1fr;
  }
}
</style>
