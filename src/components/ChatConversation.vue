<script setup>
import { storeToRefs } from 'pinia';
import ChatMessage from './ChatMessage.vue';
import { useConversationStore } from '../stores/ConversationStore';

const { conversations } = storeToRefs(useConversationStore());

const emit = defineEmits(['closeChatWindow']);

const closeChatWindow = () => {
  emit('closeChatWindow');
};
</script>

<template>
  <!-- conversation area -->
  <div class="chat__header">
    <h4 class="chat__title">Chat</h4>
    <svg
      viewBox="0,0,256,256"
      width="25px"
      height="25px"
      class="chat__exit"
      @click="closeChatWindow"
    >
      <g
        fill="#ffffff"
        fill-rule="nonzero"
        stroke="none"
        stroke-width="1"
        stroke-linecap="butt"
        stroke-linejoin="miter"
        stroke-miterlimit="10"
        stroke-dasharray=""
        stroke-dashoffset="0"
        font-family="none"
        font-weight="none"
        font-size="none"
        text-anchor="none"
        style="mix-blend-mode: normal"
      >
        <g transform="scale(4,4)">
          <path
            d="M51.092,15.737l-2.829,-2.829l-16.263,16.264l-16.263,-16.264l-2.829,2.829l16.264,16.263l-16.264,16.263l2.829,2.829l16.263,-16.264l16.263,16.264l2.829,-2.829l-16.264,-16.263z"
          ></path>
        </g>
      </g>
    </svg>
  </div>

  <div class="chat__content">
    <ChatMessage
      v-for="message in conversations"
      :key="message.id"
      :message="message"
    />
  </div>
</template>

<style scoped>
.chat__exit {
  width: 1.3rem;
  color: #fff;
  cursor: pointer;
}

.chat__header {
  background: var(--primary-color);
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  border-top-right-radius: 1rem;
  border-top-left-radius: 1rem;
}

.chat__title {
  margin: 0;
  font-size: 1.2rem;
}

.chat__content {
  height: 400px;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  padding: 0.75rem;
}
</style>
