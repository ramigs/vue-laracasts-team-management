<script setup lang="ts">
import TeamFooter from '@/components/TeamFooter.vue'
import TeamHeader from '@/components/TeamHeader.vue'
import TeamTable from '@/components/TeamTable.vue'
import { useTeamStore } from '@/stores/team'
import TeamModal from '@/components/TeamModal.vue'
import { ref } from 'vue'

let team = useTeamStore()

const showModal = ref(false)

team.fetchData()
</script>

<template>
  <TeamHeader @addMemberClick="showModal = true" />
  <div class="place-self-center flex flex-col gap-y-3">
    <TeamTable />
    <p v-show="!team.spotsRemaining" class="text-right text-gray-600 italic">
      There are no remaining team spots. Upgrade to add more.
    </p>
  </div>
  <TeamFooter />
  <TeamModal :show="showModal" @closeModalClick="showModal = false">
    <template #header>New Member</template>
    <template #default>
      <form>
        <input placeholder="Email" style="flex: 1 1 0%" />
        <button type="button">Add</button>
      </form>
    </template>
  </TeamModal>
</template>

<style scoped>
form {
  margin-top: 1.5rem;
  display: flex;
  gap: 0.5rem;
}
</style>
