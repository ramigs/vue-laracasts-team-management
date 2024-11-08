<template>
  <div v-if="show" class="modal-mask">
    <div class="modal-container">
      <header>
        <slot name="header"></slot>
      </header>
      <div>
        <slot></slot>
      </div>
      <footer class="modal-footer">
        <slot name="footer">
          <button @click="$emit('closeModalClick')">&times</button>
        </slot>
      </footer>
    </div>
  </div>
</template>

<script setup lang="ts">
const { show = false } = defineProps<{ show?: boolean }>()
defineEmits(['closeModalClick'])
</script>

<style scoped>
.modal-mask {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  display: grid;
  place-items: center;
}

.modal-container {
  background: white;
  padding: 1rem;
  width: 80vw;
  max-width: 500px;
  border-radius: 8px;
}

.modal-footer {
  border-top: 1px solid #ddd;
  margin-top: 1rem;
  padding-top: 0.5rem;
  font-size: 0.8rem;
}

.modal-footer button {
  background-color: #ddd;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
}

.modal-footer button:hover {
  background-color: #c8c8c8;
}
</style>
