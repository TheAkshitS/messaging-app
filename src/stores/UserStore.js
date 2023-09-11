import { defineStore } from 'pinia';
import { mockFetch } from '../utils';

export const useUserStore = defineStore('user', {
  state: () => ({
    currentUser: {},
  }),

  actions: {
    async fetchCurrentUser() {
      try {
        const response = await mockFetch(500, 'currentUser');
        this.currentUser = JSON.parse(response);
      } catch (error) {
        console.error(error);
      }
    },
  },
});
