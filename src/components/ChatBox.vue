<script setup>
import { ref } from 'vue';
import { useConversationStore } from '../stores/ConversationStore';
import { useUserStore } from '../stores/UserStore';
import { getFormattedCurrentTime } from '../utils';
import ChatConversation from './ChatConversation.vue';
import ChatCompose from './ChatCompose.vue';

const conversationStore = useConversationStore();
const userStore = useUserStore();

const sendReply = async (message) => {
  const payload = {
    id: conversationStore.nextConversationId,
    from: userStore.currentUser,
    message,
    date: getFormattedCurrentTime(),
  };

  await conversationStore.updateConversation(payload);
};

const isChatWindowOpen = ref(false);

const toggleChatWindow = () => {
  isChatWindowOpen.value = !isChatWindowOpen.value;
};
</script>

<template>
  <img
    src="/chat-icon.png"
    loading="lazy"
    class="chat__icon"
    @click="toggleChatWindow"
  />

  <div v-if="isChatWindowOpen" class="chat__container animate-chat">
    <ChatConversation @close-chat-window="toggleChatWindow" />

    <ChatCompose @submit="sendReply" />
  </div>
</template>

<style scoped>
.chat__icon {
  position: absolute;
  height: 4rem;
  width: 4rem;
  bottom: 2rem;
  right: 2rem;
  background-color: var(--primary-color);
  border-radius: 50px;
  padding: 0.5rem;
  cursor: pointer;
}

.chat__container {
  background: #fff;
  position: absolute;
  right: 2rem;
  bottom: 2rem;
  width: 75%;
  max-width: 500px;
  border-radius: 1rem;
  box-shadow: 14px 14px 38px rgba(0, 0, 0, 0.08);
  clip-path: circle(0% at 100% 100%);
}

.animate-chat {
  animation: grow-circle 0.3s forwards ease-out;
}

@keyframes grow-circle {
  from {
    clip-path: circle(0% at 100% 100%);
  }

  to {
    clip-path: circle(100% at 50% 50%);
  }
}
</style>
