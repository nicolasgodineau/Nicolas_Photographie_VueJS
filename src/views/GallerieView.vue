/* eslint-disable */
<template>
    <button class="fixed bottom-24 right-6 h-12 w-12" v-show="showScrollButton" @click="scrollToTop">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
            class="w-8 h-8 border border-black fill-neutral-100 shadow backdrop-blur backdrop-saturate-0 bg-[#f5f5f58c] rounded-full">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75" />
        </svg>

    </button>

    <main class="h-full max-w-screen-2xl mx-auto mt-12 max_sm:mt-20">
        <H1TitreView />
        <FancyboxView class="flexRow flex-wrap justify-center gap-14 pb-16 max_sm:gap-3 max_sm:px-1  " :options="{
            Thumbs: false,

            Toolbar: {
                display: {
                    left: [],
                    middle: ['infobar'],
                    right: ['close'],
                },
            },
            contentClick: 'close',
            zoom: false,
        }">
            <article class="h-80 w-80 max_sm:h-40 max_sm:w-40" v-for="(image, i) in images" :key="i">
                <a data-fancybox="gallery" :href="require(`@/assets/img/${image.folder}/${image.name}`)" :key="i">
                    <img class="h-full w-full shadow-lg object-cover object-top transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/50"
                        :src="require(`@/assets/img/${image.folder}/Petites/${image.name}`)" :key="i">
                </a>
            </article>
        </FancyboxView>
    </main>
</template>
<script>
import FancyboxView from "@/components/FancyboxView.vue";
import H1TitreView from "@/components/H1TitreView.vue";

export default {
    components: { FancyboxView, H1TitreView, },
    name: 'ShowPhotos',
    data() {
        return {
            images: [],
            showScrollButton: false
        };
    },

    mounted() {
        this.getImages();
        window.addEventListener("scroll", this.handleScroll);
    },

    unmounted() {
        window.removeEventListener("scroll", this.handleScroll);
    },

    methods: {
        handleScroll() {
            this.showScrollButton = window.scrollY > 100;
        },
        scrollToTop() {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        },
        getImages() {
            const routeName = this.$route.name;
            switch (routeName) {
                case 'landscape':
                    {
                        const context = require.context('@/assets/img/Voyages/', false, /\.(webp)$/);
                        const images = context.keys().map((key) => {
                            return {
                                name: key.split('/').pop(),
                                path: require(`@/assets/img/Voyages/${key.split('/').pop()}`),
                                folder: "Voyages",
                            };
                        });
                        images.sort(() => Math.random() - 0.5);
                        this.images = images;
                        break;
                    }
                case 'mariage':
                    {
                        const context = require.context('@/assets/img/Mariages/', false, /\.(webp)$/);
                        const images = context.keys().map((key) => {
                            return {
                                name: key.split('/').pop(),
                                path: require(`@/assets/img/Mariages/${key.split('/').pop()}`),
                                folder: "Mariages",
                            };
                        });
                        images.sort(() => Math.random() - 0.5);
                        this.images = images;
                        break;
                    }
                case 'portrait':
                    {
                        const context = require.context('@/assets/img/Portraits/', false, /\.(webp)$/);
                        const images = context.keys().map((key) => {
                            return {
                                name: key.split('/').pop(),
                                path: require(`@/assets/img/Portraits/${key.split('/').pop()}`),
                                folder: "Portraits",
                            };
                        });
                        images.sort(() => Math.random() - 0.5);
                        this.images = images;
                        break;
                    }
                case 'immobilier': {
                    const context = require.context('@/assets/img/Immobilier/', false, /\.(webp)$/);
                    const images = context.keys().map((key) => {
                        return {
                            name: key.split('/').pop(),
                            path: require(`@/assets/img/Immobilier/${key.split('/').pop()}`),
                            folder: "Immobilier",
                        };
                    });
                    images.sort(() => Math.random() - 0.5);
                    this.images = images;
                    break;
                }
            }
        },

    },
};
</script>
