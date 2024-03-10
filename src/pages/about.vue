<script setup lang="ts">
const counter = useState('counter', () => 0 )
</script>

<template>
  <div>
    <h1>About</h1>
    <div>
      <h3>Counter</h3>
      <p>{{ counter }}</p>
    </div>
  </div>
</template>

<style scoped>

</style>
