<script setup>
import { ref } from 'vue';
let tasks = ref([{message:"task1"}, {message:"task2"}, {message:"task3"}]);
</script>

<template>
<li v-for="task in tasks">
  {{ task.message }}
</li>
</template>

<style scoped>

</style>