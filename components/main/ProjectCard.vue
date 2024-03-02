<script setup>
  defineProps({
project: {
        type: Object,
        required: true,
    },
})
</script>

<template>
    <div class="card">
 <div class="card-image">
            <img
                alt="Placeholder image"
                :src="project.image" />
        </div>
        <div class="card-content">
            <div class="media">
                <div class="media-content">
                    <p class="title is-4">
                        {{ project.title }}
                    </p>
                    <p class="subtitle is-6">
                        {{ project.subtitle }}
                    </p>
                </div>
            </div>
            <div class="content">
                {{ project.description }}
                <br />
                <a
                    id="ten1"
                    class="flex">learn more</a>
                <a
                    :href="project.link"
                    target="_blank"
                    >Learn more</a
                >
            </div>
        </div>
    </div>
</template>

<style></style>
