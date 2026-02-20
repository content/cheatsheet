<script setup>

</script>

<template>
  <div class="wrapper">
    <router-link to="/example">Example Page with a component</router-link>
    <router-link to="/form">Example form</router-link>
  </div>  
</template>

<style scoped>
  .wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100%;
    background-color: #f0f0f0;
    font-family: Arial, sans-serif;
    color: #333;
    font-size: 24px;
  }
</style>
