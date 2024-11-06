<script setup lang="ts">
import TableHeader from './TableHeader.vue'
import TableRow from './TableRow.vue'
import { useTeamStore } from '@/stores/team'

let team = useTeamStore()
</script>

<template>
  <table class="table-fixed border-spacing-2 border-separate">
    <TableHeader />
    <tbody>
      <TableRow
        v-for="member in team.members"
        :key="member.email"
        :name="member.name"
        :email="member.email"
        :status="member.status"
      />
    </tbody>
  </table>
</template>

<style scoped></style>
