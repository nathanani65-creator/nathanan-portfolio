export const projects = [
  {
    id: 'nu-research',
    title: 'โครงงานวิจัยระดับปริญญาตรี',
    summary: 'ระบบสารสนเทศบริหารจัดการและค้นหาหอพักออนไลน์ด้วย Semantic Search',
    image: '/images/research.jpg',
    gallery: ['/images/research.jpg'],
    pdf: '/files/project.pdf',
    tech: ['Semantic Search','HTML', 'CSS', 'PHP', 'MySQL'],
    details:
      'พัฒนาระบบเว็บไซต์สำหรับบริหารจัดการและค้นหาหอพักออนไลน์ รอบมหาวิทยาลัยนเรศวร โดยใช้เทคนิค Semantic Search เพื่อช่วยให้ผู้ใช้งานสามารถค้นหาหอพักได้ตรงกับความต้องการมากขึ้น เช่น ราคา ทำเล และสิ่งอำนวยความสะดวกผ่านการค้นหาด้วยภาษาธรรมชาติ',
    learned: [
      'ออกแบบและพัฒนาเว็บไซต์ทั้ง Front-end และ Back-end',
      'ออกแบบฐานข้อมูล MySQL สำหรับจัดเก็บข้อมูลหอพักและผู้ใช้งาน',
      'พัฒนาระบบค้นหา Semantic Search โดยใช้ Python และการประมวลผลข้อความ (NLP)',
      'แปลงข้อมูลข้อความเป็น Vector Embedding และคำนวณ Similarity เพื่อจัดอันดับผลลัพธ์การค้นหา',
    ],
  },
  {
    id: 'BoardQ',
    title: 'BoardQ',
    summary: 'ระบบจองคิวบอร์ดเกมออนไลน์',
    image: '/images/boardq.jpg',
    gallery: ['/images/boardq.jpg','/images/boardq1.png','/images/boardq2.png','/images/boardq3.png'],
    demoUrl: 'https://board-q.vercel.app/',
    githubUrl: 'https://github.com/nathanani65-creator/BoardQ.git',
    tech: ['Vue', 'Node', 'MySQL'],
    details:
      'BoardQ เป็นเว็บแอปพลิเคชันสำหรับจองคิวเล่นบอร์ดเกมออนไลน์ ช่วยให้ผู้ใช้สามารถตรวจสอบคิว เวลาการจองและจัดการการจองของตนเองได้อย่างสะดวกผ่านระบบออนไลน์ โดยออกแบบมาเพื่อช่วยลดความซับซ้อนในการจัดการคิว และเพิ่มความสะดวกให้กับผู้ใช้งานและผู้ดูแลระบบ',
    learned: [
      'พัฒนาทักษะการพัฒนาเว็บไซต์แบบ Full-Stack',
      'เรียนรู้การออกแบบ RESTful API และการเชื่อมต่อฐานข้อมูล',
      'ฝึกการออกแบบ UI/UX และ Responsive Design',
      'เรียนรู้การทำงานเชื่อมต่อระหว่าง Frontend และ Backend',
      'ฝึกการจัดการโครงสร้างโปรเจกต์และการทำงานร่วมกันผ่าน Git/GitHub',
    
    ],
  },
  {
    id: 'website',
    title: 'WEB DESIGN',
    summary: 'ระบบสั่งของหวานออนไลน์',
    image: '/images/dessert.jpg',
    gallery: ['/images/dessert.jpg'],
    tech: ['Vue', 'Vite', 'Netlify'],
    pdf: '/files/proj1.pdf',

    details:
      'วิเคราะห์ความต้องการของร้านค้าและออกแบบเว็บไซต์ให้ตอบโจทย์การใช้งานของลูกค้า ในรายวิชา Object-Oriented Analysis and Design for Information Systems ในรายวิชาการพัฒนาระบบสารสนเทศ ได้รับมอบหมายให้ทำงานร่วมกับผู้ประกอบการจริง โดยลงพื้นที่สัมภาษณ์เจ้าของร้านเพื่อศึกษาปัญหาและความต้องการของธุรกิจจากการวิเคราะห์พบว่าร้านมีปัญหาเรื่องการรับออเดอร์และการจัดการคำสั่งซื้อภายในร้าน จึงได้ออกแบบและพัฒนาระบบสั่งอาหารผ่าน QR Code ที่ติดตั้งบนโต๊ะของลูกค้า',
    learned: [
      'สัมภาษณ์และเก็บรวบรวมความต้องการของเจ้าของร้าน',
      'วิเคราะห์ปัญหาและออกแบบแนวทางแก้ไขให้เหมาะสมกับรูปแบบการดำเนินงานของร้าน',
      'ทำงานร่วมกับสมาชิกในทีมในการวางแผนและแบ่งหน้าที่รับผิดชอบ',
      'ออกแบบโครงสร้างเว็บไซต์และประสบการณ์การใช้งาน (UI/UX)',
      'ออกแบบระบบสั่งอาหารผ่าน QR Code เพื่อให้ลูกค้าสามารถสแกนและสั่งเมนูผ่านโทรศัพท์มือถือได้',
      'จัดทำเอกสารวิเคราะห์ระบบ เช่น Functional Requirement, Use Case และ Workflow การทำงาน',
      'พัฒนาฟังก์ชันการสั่งซื้อ การจัดการออเดอร์ การอัปเดตสถานะ และการสรุปรายรับของร้าน',
    ],
  },

  {
    id: 'portfolio-website',
    title: 'HangOut',
    summary: 'เว็บไซต์ HangOut พิษณุโลก',
    image: '/images/hangout.jpg',
    gallery: ['/images/hangout.jpg','/images/hangout1.png','/images/hangout2.png','/images/hangout3.png'],
    tech: ['HTML5', 'CSS3', 'JavaScript'],
    demoUrl: 'https://hangoutphs.netlify.app/',
    details:
      'พัฒนาเว็บไซต์แนะนำร้าน Hangout และสถานที่พักผ่อนในจังหวัดพิษณุโลก โดยรับผิดชอบการออกแบบและพัฒนาเว็บไซต์ด้วย HTML5, CSS3 และ JavaScript เพื่อรวบรวมข้อมูลร้านอาหาร คาเฟ่ และสถานที่น่าสนใจให้อยู่ในรูปแบบที่เข้าถึงได้ง่ายและสะดวกต่อผู้ใช้งาน',
    learned: [
      'พัฒนาทักษะด้าน Front-End Web Development',
      'เรียนรู้กระบวนการออกแบบและพัฒนาเว็บไซต์ตั้งแต่เริ่มต้นจนเผยแพร่ใช้งานจริง',
      'ฝึกการวางแผนและจัดการโครงสร้างข้อมูลบนเว็บไซต์',
      
    ],
  },

  {
    id: 'Vocab Notebook',
    title: 'Vocab Notebook',
    summary: 'เว็บสมุดจดคำศัพท์ออนไลน์',
    image: '/images/vocab.png',
    gallery: ['/images/vocab.png','/images/vocab1.png','/images/vocab2.png','/images/vocab3.png'],
    tech: ['HTML5', 'CSS3', 'JavaScript'],
    demoUrl: 'https://vocabnotebookbymook.netlify.app/',
    details:
      'เว็บไซต์สำหรับบันทึกและทบทวนคำศัพท์ภาษาอังกฤษที่พัฒนาขึ้นเพื่อใช้งานส่วนตัว ผู้ใช้สามารถเพิ่มคำศัพท์พร้อมคำแปล และทบทวนผ่าน 2 โหมด ได้แก่ Thai → English และ English → Thai เพื่อช่วยฝึกการจดจำคำศัพท์ด้วยเทคนิค Active Recall และสร้างคลังคำศัพท์สำหรับการเรียนรู้อย่างต่อเนื่อง',
    learned: [
      'ออกแบบและพัฒนาเว็บแอปพลิเคชันตั้งแต่เริ่มต้น',
      'ออกแบบฐานข้อมูลสำหรับจัดเก็บคำศัพท์และคำแปล',
      'พัฒนา CRUD (Create, Read, Update, Delete) สำหรับจัดการข้อมูลคำศัพท์',
      'ออกแบบตรรกะการทบทวนคำศัพท์ทั้งสองรูปแบบ (Thai → English และ English → Thai)',
      'พัฒนา UI ที่ใช้งานง่ายและรองรับการเรียนรู้ด้วยตนเอง',
      'ฝึกการคิดและแก้ปัญหาในการพัฒนาระบบจากความต้องการของผู้ใช้งานจริง',
      
      
    ],
  },
]

export function getProjectById(id) {
  return projects.find((p) => p.id === id)
}
