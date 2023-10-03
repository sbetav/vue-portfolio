<template>
    <section class="bg-bgLight flex items-center justify-center dark:bg-bgDarkSecondary" id="about">
        <div class="flex flex-col gap-12 max-w-custom w-5/6 pt-20 pb-20">
            <div class="flex flex-col gap-3">
                <h2 class="title text-left">{{ t('titles.about') }}<span class="text-primary">.</span></h2>
                <p class="text-lg">
                    {{ t('about.description') }}
                </p>
            </div>


            <div class="flex flex-col gap-12 lg:flex-row lg:gap-20">
                <div class="flex flex-col gap-3">
                    <h3 class="text-left text-2xl font-medium dark:text-white">{{ t('titles.education') }}:</h3>
                    <ul class="marker:text-primary list-disc text-lg flex flex-wrap flex-row gap-5 lg:flex-col lg:gap-4">
                        <li v-for="item in education()" :key="item.title" class="ml-5">{{ item.title }}
                            <span class="italic opacity-60 text-base block">{{ item.institution }}
                                <span class="block">{{ item.date }}</span>
                            </span>
                        </li>

                    </ul>
                </div>

                <div class="flex flex-col gap-5">
                    <h3 class="text-left text-2xl font-medium dark:text-white">{{ t('titles.techStack') }}:</h3>
                    <div class="flex flex-wrap gap-6">
                        <div v-for="skill in skills" :key="skill.name"
                            class="flex flex-col items-center justify-center gap-1">
                            <img :src="getImgUrl(skill.icon)" :alt="skill.name" :key="skill.title" class="w-11 h-12 select-none">
                            <p class="text-center">{{ skill.name }}</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const education = () => {
    if (t('titles.about') === 'Sobre mí') return [
        {
            title: 'Ingeniería de Software',
            institution: 'Politécnico Grancolombiano',
            date: '2022 - Presente'
        },
        {
            title: 'Desarrollo Frontend',
            institution: 'Alura Latam',
            date: '2022 - 2023'
        }
    ]

    return [
        {
            title: 'Software Engineer',
            institution: 'Politécnico Grancolombiano',
            date: '2022 - Present'
        },
        {
            title: 'Frontend Development',
            institution: 'Alura Latam',
            date: '2022 - 2023'
        }
    ]
}

const skills = [
    {
        name: 'HTML',
        icon: 'html.svg'
    },
    {
        name: 'CSS',
        icon: 'css.svg'
    },
    {
        name: 'JavaScript',
        icon: 'javascript.svg'
    },
    {
        name: 'React',
        icon: 'react.svg'
    },
    {
        name: 'Vue',
        icon: 'vue.svg'
    },
    {
        name: 'Tailwind',
        icon: 'tailwind.svg'
    },
    {
        name: 'Git',
        icon: 'git.svg'
    },
    {
        name: 'GitHub',
        icon: 'github.svg'
    },
]

const getImgUrl = (img) => {
    return new URL(`/src/assets/img/icons/${img}`, import.meta.url).href
}
</script>

<style scoped></style>