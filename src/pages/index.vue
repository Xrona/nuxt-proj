<script setup>

const counter  = useState('counter', () => 0)

const refCounter =  ref(0)
</script>

<template>
  <div>
    <h1>Home</h1>
    <p>{{ counter }}</p>
    <div>
      <button
        @click="counter++"
      >
        add
      </button>
    </div>

    <h2>Ref</h2>
    <p>{{ refCounter }}</p>
    <div>
      <button @click="refCounter++">
        addRef
      </button>
    </div>
  </div>
</template>

<style></style>
