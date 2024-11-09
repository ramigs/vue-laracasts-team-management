<template>
  <!-- Two Ways to Transition: declarative or via prop 'name'
   https://laracasts.com/series/learn-vue-3-step-by-step/episodes/29 -->
  <Transition
    enter-from-class="modal-enter-from"
    enter-to-class="modal-enter-to"
    enter-active-class="modal-enter-transition"
    leave-active-class="modal-leave-transition"
    leave-from-class="modal-leave-from"
    leave-to-class="modal-leave-to"
  >
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
  </Transition>
</template>

<script setup lang="ts">
const { show = false } = defineProps<{ show?: boolean }>()
defineEmits(['closeModalClick'])
</script>

<style scoped>
.modal-enter-from {
  opacity: 0;
}

.modal-enter-to {
  opacity: 1;
}

.modal-enter-transition {
  transition-property: opacity;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 3000ms;
}

.modal-leave-from {
  opacity: 1;
}

.modal-leave-to {
  opacity: 0;
}

.modal-leave-transition {
  transition-property: opacity;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 2000ms;
}

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
