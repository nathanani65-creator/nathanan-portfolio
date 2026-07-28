<template>
  <main class="section not-found">
    <div class="container">
      <h1 class="gradient-text">404</h1>
      <p>ไม่พบหน้าที่คุณต้องการ</p>
      <router-link to="/" class="btn btn-primary">กลับหน้าแรก</router-link>
    </div>
  </main>
</template>

<style scoped>
.not-found {
  min-height: 80vh;
  display: flex;
  align-items: center;
  text-align: center;
}

.not-found .container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
}

h1 {
  font-size: 5rem;
}
</style>
