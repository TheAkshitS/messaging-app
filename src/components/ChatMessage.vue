<script setup>
import { computed } from 'vue';
import { storeToRefs } from 'pinia';
import ChatAvatar from './ChatAvatar.vue';
import ChatBubble from './ChatBubble.vue';
import { useUserStore } from '../stores/UserStore';

const props = defineProps({
  message: {
    type: Object,
    required: true,
  },
});

const { currentUser } = storeToRefs(useUserStore());

const isSender = computed(() => {
  if (currentUser.value.id === props.message.from.id) {
    return false;
  }
  return true;
});
</script>

<template>
  <!-- message entry -->
  <div
    class="message__container"
    :class="isSender ? '' : 'message__container--reverse'"
  >
    <ChatAvatar :user="props.message.from" class="message__avatar" />
    <ChatBubble :message="props.message" class="message__bubble" />
  </div>
</template>

<style scoped>
.message__container {
  display: flex;
  align-items: flex-end;
  max-width: 60%;
  margin-bottom: 10px;
}

.message__container--reverse {
  flex-direction: row-reverse;
  margin-left: auto;
}

.message__avatar {
  min-width: 3rem;
  height: 3rem;
  background: var(--primary-color);
  color: #fff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 0.75rem;
  margin-right: 0.75rem;
}

.message__bubble {
  background-color: #ddd;
  padding: 0.5rem;
  border-radius: 0.5rem;
}

.message__container--reverse .message__bubble {
  background-color: #9fc5f8;
}
</style>
