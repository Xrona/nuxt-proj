<script setup>

</script>

<template>
    <div class="min-h-screen bg-surface-950 font-sans text-white">
        <LayoutHeader />
        <NuxtLoadingIndicator />
        <slot />
    </div>
</template>

<style>
:root {
  --surface-950: 23 23 26;
}
</style>
