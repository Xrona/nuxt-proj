<script setup>
defineProps({
    image: {
        type: String,
        required: true,
    },
})
</script>

<template>
    <div class="w-[450px] object-cover">
        <img
            alt="image"
            :src="image">
    </div>
</template>

<style></style>
