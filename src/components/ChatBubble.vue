<script setup>
const props = defineProps({
  message: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div class="message__text">
    <pre>
    {{ props.message.message }}
    </pre>
  </div>
</template>

<style scoped>
.message__text pre {
  white-space: pre-line;
  word-wrap: break-word;
  font-family: inherit;
  margin: 0;
}
</style>
