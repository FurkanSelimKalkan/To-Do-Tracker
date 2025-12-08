<script setup>
import MyButton from './components/MyButton.vue';
import TaskList from './components/TaskList.vue';
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
        <td>1</td>
        <td>todo</td>
        <td>false</td>
      </tr>
    </tbody>
  </table>
  <MyButton/>
  <TaskList/>
</template>