import { defineStore } from 'pinia'
import type { Team } from '@/types/team'

export const useTeamStore = defineStore('team', {
  state: (): Team => {
    return {
      name: '',
      logo: '',
      spots: 0,
      members: [],
    }
  },
  actions: {
    async fetchData() {
      const data = (await import('@/team.json')).default
      this.$state = data
    },
  },
  getters: {
    spotsRemaining(): number {
      return this.spots - this.members.length
    },
  },
})
