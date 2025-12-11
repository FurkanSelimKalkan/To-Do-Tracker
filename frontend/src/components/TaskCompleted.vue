<script setup>
import { ref } from 'vue';
let completes = ref([{message:"false"}, {message:"false"}, {message:"false"}]);
</script>

<template>
<ol v-for="complete in completes">
  {{ complete.message }}
</ol>
</template>

<style scoped>
td {
border-width: 1px;
border-color: black;
border-style: solid;
}
</style>