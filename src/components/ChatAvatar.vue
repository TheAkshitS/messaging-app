<script setup>
import { computed } from 'vue';

const props = defineProps({
  user: {
    type: Object,
    required: true,
  },
});

// User thumbnails were throwing error, so showing avatar in this way
const initials = computed(() => {
  return `${props.user.firstName[0]}${props.user.lastName[0]}`;
});
</script>

<template>
  <div class="user__initial">
    <span>
      {{ initials }}
    </span>
  </div>
</template>
