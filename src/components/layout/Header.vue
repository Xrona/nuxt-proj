<script setup>
const links = [
    { name: 'Home', url: '/' },
    { name: 'Shop', url: '/shop' },
    { name: 'About', url: '/about' },
    { name: 'Contact', url: '/contact' },
]
</script>

<template>
    <header class="mx-auto flex max-w-[1720px] items-center justify-between">
        <h1>Borne.</h1>
        <nav>
            <ul>
                <template
                    v-for="link in links"
                    :key="link.url">
                    <li class="not:last:mr-10 inline-block">
                        <NuxtLink :to="link.url">
                            {{ link.name }}
                        </NuxtLink>
                    </li>
                </template>
            </ul>
        </nav>
        <div class="flex items-start gap-[55px]">
            <div class="flex flex-col">
                <a href="mailto:borne@meteor.com">borne@meteor.com </a>
                <a href="tel:79423233232">+7 (942) 323 32-32</a>
            </div>
            <button class="relative flex size-[45px] items-center justify-center gap-1 rounded-full border border-white">
                <span
                    v-for="i in 3"
                    :key="i + 'button-circle'"
                    class="block size-[5px] rounded-full bg-white" />
            </button>
        </div>
    </header>
</template>

<style>

</style>
