<script setup lang="ts">
import { ref } from 'vue'
import TeamModal from './TeamModal.vue'
import { useTeamStore } from '@/stores/team'

let team = useTeamStore()

const showModal = ref(false)
</script>

<template>
  <button
    class="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded disabled:bg-gray-400"
    :disabled="team.members.length === team.spots"
    @click="showModal = true"
  >
    Add Member ({{ team.spotsRemaining }} Spots Left)
  </button>
  <Teleport to="body">
    <TeamModal :show="showModal" @closeModalClick="showModal = false">
      <template #header>New Member</template>
      <template #default>
        <form>
          <input placeholder="Email" style="flex: 1 1 0%" />
          <button type="button">Add</button>
        </form>
      </template>
    </TeamModal>
  </Teleport>
</template>

<style lang="scss" scoped></style>
