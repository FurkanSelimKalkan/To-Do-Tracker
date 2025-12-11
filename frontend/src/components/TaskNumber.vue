<script setup>
import { ref } from 'vue';
let numbers = ref([{message:"1"}, {message:"2"}, {message:"3"}]);
</script>

<template>
<ol v-for="number in numbers">
  {{ number.message }}
</ol>
</template>

<style scoped>

</style>