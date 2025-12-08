<script setup>
//const count = 0;
// document.getElementById("button1").addEventListener("click", () => {
//     count++;
// })
import { ref } from 'vue'

const count = ref(0)
</script>

<template>
  <button  id= "button1" type="button" @click="count++">You clicked me {{ count }} times.</button>
</template>