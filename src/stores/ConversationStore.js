import { defineStore } from 'pinia';
import { mockFetch } from '../utils';

export const useConversationStore = defineStore('conversation', {
  state: () => ({
    conversations: [],
  }),

  actions: {
    async fetchConversations() {
      try {
        const response = await mockFetch(500, 'conversation');
        this.conversations = JSON.parse(response);
      } catch (error) {
        console.error(error);
      }
    },
  },
});
