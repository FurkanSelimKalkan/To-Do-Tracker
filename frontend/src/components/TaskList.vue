<script setup>
import { taskArray } from '../stores/tasks'
import { ref } from 'vue';
// let tasks = ref([{ message: "ToDo Programmieren" }, { message: "task2" }, { message: "task3" }]);

</script>


<template>
  <ol v-for="task in taskArray">
    {{ task }}
  </ol>
</template>

<style scoped></style>