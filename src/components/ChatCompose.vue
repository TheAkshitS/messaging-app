<script setup>
import { ref } from 'vue';

const emit = defineEmits(['submit']);

const message = ref('');

const submit = async () => {
  if (!message.value) return;

  await emit('submit', message.value);
  message.value = await '';
};
</script>

<template>
  <!-- compose section -->
  <form class="compose__container" @submit.prevent="submit">
    <textarea
      v-model.trim="message"
      placeholder="Type your message here..."
      spellcheck="false"
      autofocus
      rows="1"
      class="compose__input"
    />
    <button type="submit" class="compose__submit">Send</button>
  </form>
</template>

<style scoped>
.compose__container {
  display: grid;
  grid-template-columns: auto 3.75rem;
  margin: 1rem 0 0.5rem;
  border-radius: 0.7rem;
  box-shadow: 4px 4px 17px rgba(0, 0, 0, 0.12);
}

.compose__input {
  padding: 1rem;
  border-top-left-radius: 0.7rem;
  border-bottom-left-radius: 0.7rem;
  border: 1px solid gray;
  resize: none;
}

.compose__submit {
  background: var(--primary-color);
  color: #fff;
  border: none;
  font-weight: bold;
  border-top-right-radius: 0.7rem;
  border-bottom-right-radius: 0.7rem;
  cursor: pointer;
}
</style>
