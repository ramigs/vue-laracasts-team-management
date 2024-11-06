<script setup lang="ts">
import TeamFooter from '@/components/TeamFooter.vue'
import TeamHeader from '@/components/TeamHeader.vue'
import TeamTable from '@/components/TeamTable.vue'
import { computed } from 'vue'
import { useTeamStore } from '@/stores/team'

let team = useTeamStore()

team.fetchData()
</script>

<template>
  <TeamHeader />
  <div class="place-self-center flex flex-col gap-y-3">
    <TeamTable />
    <p v-show="!team.spotsRemaining" class="text-right text-gray-600 italic">
      There are no remaining team spots. Upgrade to add more.
    </p>
  </div>
  <TeamFooter />
</template>
