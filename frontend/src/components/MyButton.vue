<script setup>
//const count = 0;
// document.getElementById("button1").addEventListener("click", () => {
//     count++;
// })
import { taskArray } from '../stores/tasks'
import { taskNumber } from '../stores/tasks'
import { ref } from 'vue'


// let taskArray = ref([]);
const todoText = ref("");
const count = ref(1);
// console.log(taskArray);


let clickTasks = function () {
  taskArray.value.push(todoText.value);
  taskNumber.value.push(count.value++)
  //"taskArray.push(todoText)" @click="taskNumber.push(todoNumber++)"
}
</script>

<template>

  <label for="todo">Todo Hinzufügen: </label>
  <input type="text" id="todoInput" v-model="todoText" @keyup.enter="clickTasks()"></input>
  <input type="submit" value="Submit" id="todoButton" @click="clickTasks()" @click.prevent ></input>

  <br></br>
  <!-- <button id="button1" type="submit" @click="count++">You clicked me {{ count }} times.</button> -->
</template>