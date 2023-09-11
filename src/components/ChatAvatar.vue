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

const fullName = computed(() => {
  return `${props.user.firstName} ${props.user.lastName}`;
});
</script>

<template>
  <div v-tooltip="fullName" class="user__initial">
    <span>
      {{ initials }}
    </span>
  </div>
</template>
