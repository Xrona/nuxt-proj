<script setup>
import { ref, onMounted, computed } from 'vue'

defineProps({
    project: {
        type: Object,
        required: true,
    },
})

const test =ref(false)
const ubivaca = ref(0)
const te = ref('hello')

const computedVal = computed(() => {
    return ubivaca.value * 2
})
const computedLeg = computed(() => {
    return ubivaca.value * 3
})

const increment = () => {
    ubivaca.value++
}

const testFunc =() => {
    test.value = !test.value
    console.log(test.value)

    if (test.value) {
        console.log('true')
    }

    return test.value
}


onMounted(() => {
    console.log('mounted')
    ubivaca.value = 10
    testFunc()
    increment()
})
</script>

<template>
    <div class="card">
        <button @click="increment">
            increment
        </button>
        <div class="card-image">
            <figure class="image is-4by3">
                <img
                    alt="Placeholder image"
                    :src="project.image">
            </figure>
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
                <a
                    id="ten1"
                    class="flex">
                    learn more
                </a>
                <a
                    :href="project.link"
                    target="_blank">
                    Learn more
                </a>
            </div>
        </div>
    </div>
</template>

<style></style>
