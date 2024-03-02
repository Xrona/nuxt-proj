<script setup>
const project = ref({
    title: 'My project',
    subtitle: 'Subtitle',
    description: 'Description',
    image: 'https://images.unsplash.com/photo-1708649290066-5f617003b93f?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    link: 'https://example.com',
})
</script>

<template>
    <div>
        <h1>Hello world index page</h1>
        <MainProjectCard :project />
        <button
            id="btn"
            class="mx-auto bg-red-500 text-light text-blue-400 height-[400px]"
            @click="console.log">
            hello
        </button>

        <Button label="Clike me" />

        <div
            id="ten"
            class="flex">
            <ul>
                <li><span>lorem</span></li>
                <li><span>lorem</span></li>
                <li><span>lorem</span></li>
            </ul>
        </div>
    </div>
</template>

<style></style>
