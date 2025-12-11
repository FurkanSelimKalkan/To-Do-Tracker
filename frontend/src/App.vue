<script setup>
import MyButton from './components/MyButton.vue';
import TaskNumber from './components/TaskNumber.vue';
import TaskList from './components/TaskList.vue';
import TaskCompleted from './components/TaskCompleted.vue';
</script>

<template>
  <h1> Welcome to the To-Do-Tracker!</h1>
  <table>
    <thead>
      <tr>
        <th>nr</th>
        <th>task</th>
        <th>completed</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><TaskNumber/></td>
        <td><TaskList/></td>
        <td><TaskCompleted/></td>
      </tr>
    </tbody>
  </table>
  <MyButton/>
</template>

<style>
table {
border-collapse: collapse;
margin:auto;
width: 75%;
}
td, th {
border-width: 3px;
border-color: black;
border-style: solid;
padding:10px;
}
ol{
  text-align: left;
}
</style>