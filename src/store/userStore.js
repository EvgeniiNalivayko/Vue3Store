import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    user: null,
  }),
  actions: {
    login({ username, password }) {
     
      if (username === 'admin' && password === 'admin') {
        this.user = { username }
      } else {
        alert('Invalid credentials')
      }
    },
    logout() {
      this.user = null
    },
  },
  getters: {
    isAuthenticated: (state) => !!state.user,
  },
})