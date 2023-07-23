<template>
    <section class="bg-bgLightSecondary dark:hero-dark-bg min-h-screen">
        <div
            class="max-w-7xl w-5/6 min-h-screen pt-20  flex flex-col items-center justify-center gap-9 m-auto lg:flex-row-reverse lg:justify-evenly">
            <img src="../../src/assets/img/profile-pic.webp" alt="Santiago Betancur" width="320" height="320"
                style="border-radius: 47% 53% 53% 47% / 46% 47% 53% 54% ;"
                class="w-60 border-8 border-solid border-primary md:w-72 xl:w-80 animate-radiusMorph select-none bg-white">
            <div class="text-center lg:text-left">
                <p class="dark:text-gray-100 text-xl md:text-2xl xl:text-3xl">{{ t('home.title') }} 👋</p>
                <h2
                    class="text-2xl scale-110 sm:scale-100 sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500 md:text-4xl xl:text-5xl">
                    {{ t('home.subtitle') }}</h2>
                <p class="dark:text-gray-100 text-xl md:text-2xl xl:text-3xl">{{ t('home.description') }}</p>

                <div class="flex items-center justify-center gap-4 mt-5 lg:justify-start">
                    <a :href="t('home.resumeBtn') == 'Curriculum' ? '/resume-es.pdf' : '/resume-en.pdf'" target="_blank"
                        class="btn btn-outline">{{ t('home.resumeBtn') }}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="w-5 xl:w-6">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                        </svg>
                    </a>
                    <a href="#work" class="btn pr-4">{{ t('home.portfolioBtn') }}
                        <svg class="fill-white animate-pulseRight" xmlns="http://www.w3.org/2000/svg"
                            style="margin-bottom: -2px; width: 14px;" viewBox="0 0 448 512">
                            <path
                                d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                        </svg>
                    </a>
                </div>
            </div>

        </div>
    </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>

<style scoped></style>