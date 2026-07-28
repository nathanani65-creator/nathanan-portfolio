# Nathanan Insuwan — Portfolio

Portfolio website ส่วนตัว พัฒนาด้วย Vue 3 + Vite พร้อม deploy บน Netlify

## Tech Stack
- Vue 3 (Composition API, `<script setup>`)
- Vue Router 4
- Vite
- Plain CSS with design tokens (CSS variables) — dark/light theme toggle

## Getting Started

```bash
npm install
npm run dev
```

เปิดเบราว์เซอร์ที่ `http://localhost:5173`

## Build

```bash
npm run build
npm run preview
```

## โครงสร้างโปรเจกต์

```
src/
├── assets/          รูปภาพต้นฉบับ (โปรไฟล์, โปรเจกต์, ใบเซอร์)
├── components/      Vue components ของแต่ละ section
├── data/            ข้อมูล skills, projects, certificates, experience (แก้ตรงนี้เพื่ออัปเดตเนื้อหา)
├── router/          การตั้งค่า Vue Router
├── views/           หน้า Home, ProjectDetail, NotFound
├── App.vue
├── main.js
└── style.css        Design tokens + global styles
```

## การแก้ไขเนื้อหา

- **ข้อมูลส่วนตัว / About**: แก้ที่ `src/components/About.vue`
- **Skills**: แก้ไขที่ `src/data/skills.js`
- **Projects**: แก้ไขที่ `src/data/projects.js` — เพิ่ม/แก้ id, รูป, tech, และรายละเอียดที่จะไปแสดงในหน้า `ProjectDetail`
- **Experience/Timeline**: แก้ที่ `src/data/experience.js`
- **Certificates**: แก้ที่ `src/data/certificates.js`
- **Contact links**: แก้ที่ `src/components/Contact.vue`

## รูปภาพที่ต้องเตรียม

วางไฟล์เหล่านี้ใน `public/images/` (ชื่อไฟล์ตามที่อ้างอิงใน `src/data/*.js` และ components):

- `profile.jpg` — รูปโปรไฟล์ (ใช้ทั้งใน Hero และ About)
- `nu-badminton-cover.jpg`, `nu-badminton-1.jpg`, `nu-badminton-2.jpg`
- `restaurant-booking-cover.jpg`, `restaurant-booking-1.jpg`, `restaurant-booking-2.jpg`
- `portfolio-cover.jpg`, `portfolio-1.jpg`
- `cert-google-ai.jpg`, `cert-cisco.jpg`, `cert-coursera.jpg`, `cert-microsoft.jpg`, `cert-meta.jpg`

และวางไฟล์ resume ที่ `public/resume.pdf`

หากไม่มีรูป ระบบจะซ่อนรูปที่โหลดไม่ได้โดยอัตโนมัติ (ไม่ error) แต่แนะนำให้ใส่รูปจริงเพื่อความสมบูรณ์

## Deploy บน Netlify

1. Push โค้ดขึ้น GitHub repository
2. เข้า [Netlify](https://app.netlify.com) → **Add new site** → **Import an existing project**
3. เลือก repository นี้
4. Build command: `npm run build`, Publish directory: `dist` (ตั้งไว้ให้แล้วใน `netlify.toml`)
5. Deploy 🎉

## การนำขึ้น GitHub

```bash
git init
git add .
git commit -m "Initial commit: portfolio website"
git branch -M main
git remote add origin https://github.com/<username>/<repo-name>.git
git push -u origin main
```
