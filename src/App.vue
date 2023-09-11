<script setup>
import { onMounted, computed } from 'vue';
import { useUserStore } from './stores/UserStore';
import { useConversationStore } from './stores/ConversationStore';
import ChatBox from './components/ChatBox.vue';

const userStore = useUserStore();
const conversationStore = useConversationStore();

const fetchCurrentUser = async () => {
  await userStore.fetchCurrentUser();
};

const fetchConversations = async () => {
  await conversationStore.fetchConversations();
};

const currentUser = computed(() => userStore.currentUser);

onMounted(() => {
  Promise.all([fetchCurrentUser(), fetchConversations()]);
});
</script>

<template>
  <div class="app__title">
    <span v-if="currentUser.firstName">
      Welcome back, {{ currentUser.firstName }}!
    </span>
  </div>

  <ChatBox />
</template>

<style scoped>
.app__title {
  font-size: 2rem;
  padding: 2rem;
}
</style>
