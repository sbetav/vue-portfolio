<template>
    <section class="bg-slate-50 bg-opacity-75 dark:bg-transparent" id="work">
        <div class="max-w-custom m-auto flex flex-col gap-8 pt-20 pb-20 w-5/6">
            <h2 class="title">{{ t('titles.work') }}<span class="text-primary">.</span></h2>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
                <div v-for="project in projects()" :key="project.title"
                    class="shadow-md bg-bgLightSecondary dark:bg-bgDarkSecondary border border-transparent dark:border-sky-900  rounded-xl overflow-hidden">
                    <img :src="getImgUrl(project.img)" alt="project image" class="w-full" width="0" height="0">
                    <div class="p-5 flex flex-col gap-5 border-t-2 border-primary">
                        <div class="flex flex-col gap-1">
                            <h3 class="text-primary text-2xl font-semibold">{{ project.title }}</h3>
                            <p class="text-base">{{ project.description }}</p>
                        </div>
                        <div class="flex gap-3 w-full justify-start">
                            <a :href="project.code" target="_blank" rel="noopener noreferrer" aria-label="Code"
                                class="btn btn-outline text-sm">{{ t('work.codeBtn') }}
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" class="w-5 fill-primary">
                                    <path
                                        d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                                </svg>
                            </a>
                            <a v-if="project.demo != '#'" :href="project.demo" target="_blank" rel="noopener noreferrer"
                                aria-label="Demo" class="btn text-sm">{{ t('work.demoBtn') }}
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-4 fill-white">
                                    <path
                                        d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z" />
                                </svg>
                            </a>
                            <a v-else :href="project.demo" target="_self" rel="noopener noreferrer" aria-label="Demo"
                                class="btn text-sm">{{ t('work.demoBtn') }}
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-4 fill-white">
                                    <path
                                        d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
                <div
                    class="hidden lg:flex shadow-md bg-bgLightSecondary dark:bg-bgDarkSecondary border-2 border-dashed dark:border-sky-900 rounded-xl overflow-hidden items-center justify-center text-xl">
                    Coming soon...
                </div>
                <div
                    class="hidden lg:flex shadow-md bg-bgLightSecondary dark:bg-bgDarkSecondary border-2 border-dashed dark:border-sky-900 rounded-xl overflow-hidden items-center justify-center text-xl">
                    Coming soon...
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const projects = () => {
    if (t('titles.work') === 'Portafolio') return [
        {
            title: "My Links",
            description: "App para compartir enlaces construido con Vue 3 y Firebase.",
            img: 'mylinks.webp',
            code: 'https://github.com/sbetav/vue-my-links',
            demo: 'https://vue-my-links.vercel.app/'
        },
        {
            title: "Astro Bytes",
            description: "Blog de astronomía construido con el MERN stack.",
            img: 'astro-bytes.webp',
            code: 'https://github.com/sbetav/mern-astro-bytes',
            demo: 'https://mern-astro-bytes.vercel.app/'
        },
        {
            title: "Librería",
            description: "Prueba técnica resuelta con Vue 3 y Tailwind CSS.",
            img: 'reading-list.webp',
            code: "https://github.com/sbetav/pruebas-tecnicas/tree/main/pruebas/01-reading-list/sbetav",
            demo: "https://reading-list-ten.vercel.app/"
        },
        {
            title: "Tienda Online",
            description: "Tienda online construida con Vue 3 y Tailwind CSS.",
            img: 'ecommerce.webp',
            code: 'https://github.com/sbetav/vue-ecommerce',
            demo: 'https://vue-ecommerce-seven.vercel.app/'
        },
    ]

    return [
        {
            title: "My Links",
            description: "Web app to share links built with Vue 3 and Firebase.",
            img: 'mylinks.webp',
            code: 'https://github.com/sbetav/vue-my-links',
            demo: 'https://vue-my-links.vercel.app/'
        },
        {
            title: "Astro Bytes",
            description: "Astronomy blog built with the MERN stack.",
            img: 'astro-bytes.webp',
            code: 'https://github.com/sbetav/mern-astro-bytes',
            demo: 'https://mern-astro-bytes.vercel.app/'
        },
        {
            title: "Reading List",
            description: "Technical test solved with Vue 3 and Tailwind CSS.",
            img: 'reading-list.webp',
            code: "https://github.com/sbetav/pruebas-tecnicas/tree/main/pruebas/01-reading-list/sbetav",
            demo: "https://reading-list-ten.vercel.app/"
        },
        {
            title: "Ecommerce",
            description: "Ecommerce built with Vue 3 and Tailwind CSS",
            img: 'ecommerce.webp',
            code: 'https://github.com/sbetav/vue-ecommerce',
            demo: 'https://vue-ecommerce-seven.vercel.app/'
        }
    ]
}

const getImgUrl = (img) => {
    return new URL(`/src/assets/img/projects/${img}`, import.meta.url).href
}

</script>

<style scoped></style>