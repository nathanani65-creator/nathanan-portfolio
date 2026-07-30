<template>
  <section id="contact" class="section section-alt">
    <div class="container contact-grid">
      <div class="info-side">
        <div class="contact-card">
          <SectionTitle
            eyebrow="Let's Talk"
            title="Contact"
            subtitle="กำลังมองหาโอกาสฝึกงาน พร้อมเรียนรู้ พัฒนาทักษะ และร่วมสร้างผลงานกับทีม"
          />

          <ul class="contact-list">
            <li v-for="c in contacts" :key="c.label">
              <div class="icon">
                {{ c.icon }}
              </div>

              <div class="contact-info">
                <span class="label">{{ c.label }}</span>

                <a
                  v-if="c.href"
                  :href="c.href"
                  target="_blank"
                  rel="noopener"
                >
                  {{ c.value }}
                </a>

                <span v-else>
                  {{ c.value }}
                </span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import SectionTitle from './SectionTitle.vue'

const contacts = [
  {
    icon: '✉️',
    label: 'Email',
    value: 'nathanani65@nu.ac.th',
    href: 'mailto:nathanani65@nu.ac.th'
  },
  {
    icon: '💻',
    label: 'GitHub',
    value: 'github.com/nathanani65-creator',
    href: 'https://github.com/nathanani65-creator'
  },
  {
    icon: '🔗',
    label: 'LinkedIn',
    value: 'linkedin.com/in/yourname',
    href: 'https://linkedin.com/in/yourname'
  },
  {
    icon: '📱',
    label: 'Phone',
    value: '099-246-2813',
    href: 'tel:0992462813'
  }
]
</script>

<style scoped>
.contact-grid {
  display: flex;
  justify-content: center;
  align-items: center;
}

.info-side {
  width: 100%;
  max-width: 760px;
}

.contact-card {
  background: var(--card-bg);
  border: 1px solid var(--card-border);
  border-radius: 20px;
  padding: 40px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
}

.contact-list {
  list-style: none;
  margin: 30px 0 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.contact-list li {
  display: flex;
  align-items: center;
  gap: 18px;
}

.icon {
  width: 52px;
  height: 52px;
  border-radius: 14px;
  background: rgba(99, 102, 241, 0.12);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.4rem;
  flex-shrink: 0;
}

.contact-info {
  display: flex;
  flex-direction: column;
}

.label {
  font-size: 0.75rem;
  color: var(--text-dim);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin-bottom: 4px;
}

.contact-info a,
.contact-info span:last-child {
  color: var(--text);
  text-decoration: none;
  font-weight: 600;
  font-size: 1rem;
  transition: color .25s ease;
}

.contact-info a:hover {
  color: var(--primary);
}

@media (max-width: 768px) {
  .contact-card {
    padding: 28px 22px;
  }

  .icon {
    width: 46px;
    height: 46px;
    font-size: 1.2rem;
  }

  .contact-list {
    gap: 20px;
  }
}
</style>