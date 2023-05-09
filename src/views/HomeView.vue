<script setup>
 import Hero from '../components/Hero.vue';
 import About from '../components/About.vue';
 import Work from '../components/Work.vue';
 import Contact from '../components/Contact.vue';
</script>
<template>
  <main class="bg-white text-gray-600 selection:bg-gray-400 selection:text-white dark:bg-bgDark dark:text-gray-300">
    <Hero />
    <About />
    <Work />
    <Contact />
  </main>
</template>
