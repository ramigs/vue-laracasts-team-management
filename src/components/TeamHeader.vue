<script setup lang="ts">
import { useTeamStore } from '@/stores/team'

let team = useTeamStore()

defineEmits(['addMemberClick'])
</script>

<template>
  <header class="flex justify-between">
    <div>
      <button
        class="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded disabled:bg-gray-400"
        :disabled="team.members.length === team.spots"
        @click="$emit('addMemberClick')"
      >
        Add Member ({{ team.spotsRemaining }} Spots Left)
      </button>
    </div>
    <div>
      <div class="inline-flex items-center text-3xl relative">
        <img :src="`/${team.logo}`" alt="" class="mr-2" />
        <h3>{{ team.name }} Team</h3>
        <div
          class="bg-green-400 w-5 h-5 text-xs text-white rounded-full flex justify-center items-center absolute -right-4 -top-2"
        >
          {{ team.members.length }}
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped></style>
