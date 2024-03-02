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
        :src="project.image"
        alt="Placeholder image">
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
        <br>
        <a
          :href="project.link"
          target="_blank">Learn more</a>
      </div>
    </div>
  </div>
</template>

<style></style>
