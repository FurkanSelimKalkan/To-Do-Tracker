<script setup>
import { ref } from 'vue';
let tasks = ref([{message:"ToDo Programmieren"}, {message:"task2"}, {message:"task3"}]);
</script>

<template>
<ol v-for="task in tasks">
  {{ task.message }}
</ol>
</template>

<style scoped>

</style>