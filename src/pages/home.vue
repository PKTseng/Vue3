<template>
  <div class="home">
    <h1>这是首页</h1>

    <TodoList />
  </div>
</template>

<script setup>
import TodoList from '../components/Todo.vue'
</script>

<style scoped>
.home {
  text-align: center;
}
</style>
