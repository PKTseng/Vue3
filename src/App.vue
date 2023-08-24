<template>
  <div class="app">
    <router-link to="/">首页</router-link> |
    <router-link to="/about">关于</router-link>
    <router-link to="/starup">starup</router-link>
  </div>
  <router-view></router-view>
</template>

<style scoped>
.app {
  display: flex;
  justify-content: center;
}
</style>
