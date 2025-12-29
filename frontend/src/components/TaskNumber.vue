<script setup>
import { taskNumber } from '../stores/tasks'
import { ref } from 'vue';
// let numbers = ref([{message:"1"}, {message:"2"}, {message:"3"}]);
</script>

<template>
  <ol v-for="number in taskNumber">
    {{ number }}
  </ol>
</template>

<style scoped></style>