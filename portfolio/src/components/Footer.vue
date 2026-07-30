<template>
  <footer class="footer">
    <div class="container">
      <p>Nathanan Insuwan</p>
      <p class="dim">© {{ year }} · Always Learning • Always Building ❤️</p>
    </div>
  </footer>
</template>

<script setup>
const year = new Date().getFullYear()
</script>

<style scoped>
.footer {
  padding: 36px 0;
  text-align: center;
  border-top: 1px solid var(--card-border);
}

.footer p {
  margin: 4px 0;
}

.dim {
  color: var(--text-dim);
  font-size: 0.85rem;
}
</style>
