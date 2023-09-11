import { defineStore } from 'pinia';
import { mockFetch } from '../utils';

export const useConversationStore = defineStore('conversation', {
  state: () => ({
    conversations: [],
  }),

  getters: {
    nextConversationId: (state) => state.conversations.length + 1,
  },

  actions: {
    async fetchConversations() {
      try {
        const response = await mockFetch(500, 'conversation');
        this.conversations = JSON.parse(response);
      } catch (error) {
        console.error(error);
      }
    },

    async updateConversation(newMessage) {
      try {
        setTimeout(async () => {
          await this.conversations.push(newMessage);
        }, 500);
      } catch (error) {
        console.error(error);
      }
    },
  },
});
