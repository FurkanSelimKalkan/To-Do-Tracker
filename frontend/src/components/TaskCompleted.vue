<script setup>
import { ref } from 'vue';
import { taskNumber } from '../stores/tasks'
// let completes = ref([{message:"false"}, {message:"false"}, {message:"false"}]);
// ich möchte für jede todo eine checkbox erstellen: idee über taskNumber.value.length index iterieren und jeweils eine checkbox erstellen.
</script>

<template>
  <!-- <ol v-for="complete in completes">
  {{ complete.message }}
</ol> -->
  <ol v-for="checkbox in taskNumber.length">
    <input type="checkbox" value="{{ checkbox }}">
  </ol>
</template>

<style scoped>
td {
  border-width: 1px;
  border-color: black;
  border-style: solid;
}
</style>