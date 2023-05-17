<template>
    <header
        class="bg-bgLightTransparent dark:bg-bgDarkTransparent z-10 h-20 flex items-center justify-center fixed w-full outline outline-1 shadow shadow-gray-300 outline-gray-200 dark:shadow-none dark:outline-primary before:-z-10 before:absolute before:backdrop-blur before:w-full before:h-20">
        <div class="flex justify-between max-w-7xl w-5/6">
        <a href="#">
            <h1 class="select-none font-bold text-2xl text-gray-700 dark:text-white lg:text-3xl lg:scale-95">sbetav<span
                    class="text-primary">.</span>
            </h1>
        </a>
            <div class="flex items-center justify-center gap-5 lg:gap-8">
                <nav ref="menu" class="hidden fixed top-0 right-0  w-full h-screen gap-10 text-lg backdrop-blur bg-bgLightTransparent dark:bg-bgDarkTransparent
                                                                                    lg:h-0 lg:flex lg:static lg:w-auto">
                    <ul
                        class="text-center flex flex-col items-center relative justify-center gap-5 text-gray-600 dark:text-gray-300 text-2xl max-w-screen-xl w-5/6 h-screen lg:flex-row lg:h-0 lg:text-lg m-auto whitespace-nowrap">
                        <li>
                            <button aria-label="close-menu" @click="toggleMenu" class="lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                    stroke="currentColor" class="w-8 absolute top-6 right-0">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>

                            </button>
                        </li>
                        <li>
                            <a @click="toggleMenu" href="#" class="hover:text-primary transition ease-out duration-300">{{
                                t('navbar.home') }}
                            </a>
                        </li>
                        <li>
                            <a @click="toggleMenu" href="#about"
                                class="hover:text-primary transition ease-out duration-300">{{ t('navbar.about') }}
                            </a>
                        </li>
                        <li>
                            <a @click="toggleMenu" href="#work"
                                class="hover:text-primary transition ease-out duration-300">{{ t('navbar.work') }}
                            </a>
                        </li>
                        <li>
                            <a @click="toggleMenu" href="#contact"
                                class="hover:text-primary transition ease-out duration-300">{{ t('navbar.contact') }}
                            </a>
                        </li>
                    </ul>
                </nav>

                <div class="flex items-center justify-center gap-3">
                    <select v-model="selectedLang"
                        class=" text-primary focus:border-none focus:outline-none bg-transparent cursor-pointer">
                        <option class="dark:bg-bgDarkSecondary" @click="changeLanguage('en')" value="en">EN</option>
                        <option class="dark:bg-bgDarkSecondary" @click="changeLanguage('es')" value="es">ES</option>
                    </select>

                    <button @click="themeSwitch" aria-label="toggle-theme">
                        <svg v-if="theme == 'dark'" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-primary">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                        </svg>
                        <svg v-if="theme == 'light'" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-primary">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                        </svg>
                    </button>
                </div>
                <button ref="menuBtn" aria-label="open-menu" @click="toggleMenu" class="lg:hidden dark:text-gray-300">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-8">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>


                </button>
            </div>

        </div>
    </header>
</template>

<script setup>
import { Theme } from './Theme';
import { Menu } from './Menu'
import { ref, watch } from 'vue';
import { useI18n } from 'vue-i18n'

// Dark / Light Theme
const [theme, themeCheck, themeSwitch] = Theme();
themeCheck();

// Mobile Menu
const menu = ref(null);
const menuBtn = ref(null);

const toggleMenu = () => {
    const width = window.innerWidth;
    if (width <= 1024) {
        Menu(menu, menuBtn);
    }
}

// i18n
const { t, locale, } = useI18n();

const selectedLang = ref(localStorage.getItem('lang') || 'en');

watch(selectedLang, (val) => {
    locale.value = val;
    localStorage.setItem('lang', val);
})

</script>

<style scoped></style>