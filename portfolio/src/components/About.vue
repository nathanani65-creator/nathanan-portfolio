<template>
  <section id="about" class="section">
    <div class="container">
      <SectionTitle eyebrow="Get to know me" title="About" highlight="Me" />

      <div class="about-grid">
        <div class="about-image fade-up">
          <img src="/images/nathanan.jpg" alt="Nathanan Insuwan" />
        </div>

        <div class="about-content fade-up">
         <p class="intro">
          สวัสดีค่ะ ชื่อ <strong>ณัฐนันท์ อินสุวรรณ์</strong> กำลังศึกษาระดับปริญญาตรี คณะวิทยาศาสตร์
            สาขาเทคโนโลยีสารสนเทศ มหาวิทยาลัยนเรศวร มีความสนใจด้าน Full Stack Web Development และ UX/UI Design 
            ชื่นชอบการออกแบบและพัฒนาระบบที่มีประสิทธิภาพ ใช้งานง่าย และมอบประสบการณ์ที่ดีแก่ผู้ใช้ พร้อมเรียนรู้เทคโนโลยีใหม่ ๆ 
             และพัฒนาทักษะอย่างต่อเนื่องเพื่อเตรียมความพร้อมสำหรับการทำงานในสายอาชีพด้านไอที </p>
          <div class="interests">
            <span v-for="i in interests" :key="i" class="tag">✔ {{ i }}</span>
          </div>

          <div class="info-grid">
            <div v-for="item in info" :key="item.label" class="info-item">
              <span class="label">{{ item.label }}</span>
              <span class="value">{{ item.value }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import SectionTitle from './SectionTitle.vue'

const interests = ['Web Development', 'Frontend', 'Backend', 'UI/UX']

const info = [
  { label: 'Name', value: 'Nathanan Insuwan' },
  { label: 'GPAX', value: '3.06' },
  { label: 'University', value: 'Naresuan University' },
  { label: 'Major', value: 'Information Technology' },
  { label: 'Location', value: 'Phitsanulok, Thailand' },
]
</script>

<style scoped>
.about-grid {
  display: grid;
  grid-template-columns: 320px 1fr;
  gap: 48px;
  align-items: start;
}

.about-image img {
  border-radius: var(--radius);
  border: 1px solid var(--card-border);
  aspect-ratio: 4/5;
  object-fit: cover;
  background: var(--card);
}

.intro {
  font-size: 1.05rem;
  line-height: 1.9;
  color: var(--text-dim);
  margin-bottom: 20px;
}

.intro strong {
  color: var(--text);
}

.interests {
  margin-bottom: 28px;
}

.info-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
}

.info-item {
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 14px 16px;
  background: var(--card);
  border: 1px solid var(--card-border);
  border-radius: 12px;
}

.label {
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--text-dim);
}

.value {
  font-weight: 600;
}

@media (max-width: 760px) {
  .about-grid {
    grid-template-columns: 1fr;
  }
  .about-image {
    max-width: 260px;
    margin: 0 auto;
  }
  .info-grid {
    grid-template-columns: 1fr 1fr;
  }
}
</style>
