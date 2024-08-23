// Utilities
import { defineStore } from 'pinia'

export const useUserStore = defineStore('app', {
  state: () => ({
    isLogged: false,
  }),
})
