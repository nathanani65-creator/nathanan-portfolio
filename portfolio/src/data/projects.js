export const projects = [
  {
    id: 'nu-badminton',
    title: 'NU Badminton',
    summary: 'ระบบจองคอร์ทแบดมินตันออนไลน์สำหรับนิสิตมหาวิทยาลัยนเรศวร',
    image: '/images/nu-badminton-cover.jpg',
    gallery: ['/images/nu-badminton-1.jpg', '/images/nu-badminton-2.jpg'],
    tech: ['HTML', 'CSS', 'PHP', 'MySQL'],
    demoUrl: '',
    githubUrl: '',
    details:
      'เว็บแอปพลิเคชันสำหรับจองคอร์ทแบดมินตันภายในมหาวิทยาลัย ผู้ใช้สามารถเลือกวันเวลา ตรวจสอบคอร์ทว่าง และยืนยันการจองผ่านระบบหลังบ้านที่เชื่อมต่อฐานข้อมูล MySQL',
    learned: [
      'การออกแบบฐานข้อมูลเชิงสัมพันธ์สำหรับระบบจอง',
      'การเขียน PHP ติดต่อฐานข้อมูลแบบ CRUD',
      'การจัดการ session และการตรวจสอบสิทธิ์ผู้ใช้',
    ],
  },
  {
    id: 'restaurant-booking',
    title: 'Restaurant Booking',
    summary: 'ระบบจองโต๊ะร้านอาหารแบบเรียลไทม์ ด้วย Vue และ Node.js',
    image: '/images/restaurant-booking-cover.jpg',
    gallery: ['/images/restaurant-booking-1.jpg', '/images/restaurant-booking-2.jpg'],
    tech: ['Vue', 'Node', 'MySQL'],
    demoUrl: '',
    githubUrl: '',
    details:
      'แอปพลิเคชันจองโต๊ะร้านอาหาร ฝั่งหน้าบ้านพัฒนาด้วย Vue 3 ส่วน backend ใช้ Node.js และ Express เชื่อมต่อกับฐานข้อมูล MySQL เพื่อจัดการโต๊ะและคิวการจองแบบเรียลไทม์',
    learned: [
      'การสร้าง REST API ด้วย Express',
      'การจัดการ state ฝั่ง frontend ด้วย Vue Composition API',
      'การออกแบบ UX สำหรับระบบจองที่ต้องอัปเดตสถานะแบบทันที',
    ],
  },
  {
    id: 'portfolio-website',
    title: 'Portfolio Website',
    summary: 'เว็บไซต์แสดงผลงานส่วนตัว สร้างด้วย Vue และ Vite พร้อม deploy บน Netlify',
    image: '/images/portfolio-cover.jpg',
    gallery: ['/images/portfolio-1.jpg'],
    tech: ['Vue', 'Vite', 'Netlify'],
    demoUrl: '',
    githubUrl: '',
    details:
      'เว็บไซต์พอร์ตโฟลิโอส่วนตัวที่ใช้แสดงข้อมูล ทักษะ ผลงาน และประสบการณ์ พัฒนาด้วย Vue 3 และ Vite เพื่อความเร็วในการโหลด และ deploy อัตโนมัติผ่าน Netlify',
    learned: [
      'การจัดโครงสร้างโปรเจกต์ Vue ให้ขยายง่าย',
      'การทำ routing หลายหน้าด้วย Vue Router',
      'การ deploy เว็บไซต์ static ผ่าน Netlify',
    ],
  },
]

export function getProjectById(id) {
  return projects.find((p) => p.id === id)
}
