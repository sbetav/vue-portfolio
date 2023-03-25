<template>
    <div class="dark:hero-dark-bg not-found-view flex flex-col items-center justify-center pt-20">
        <h2 class="text-7xl font-bold">404</h2>
        <p class="text-2xl">Page not found</p>
        <RouterLink to="/" class="text-primary pt-5">Go back home</RouterLink>
    </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>