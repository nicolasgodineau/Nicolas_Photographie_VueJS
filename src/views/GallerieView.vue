/* eslint-disable */
<template>
    <main class="h-auto max-w-screen-2xl w-full mx-auto py-16 px-2 ">
        <H1TitreView />
        <FancyboxView
            class="max-w-screen-2xl w-full flexRow flex-wrap justify-center gap-[3vw] pb-16 max_sm:gap-3 max_sm:px-1  "
            :options="{
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
        <ScrollToTop />
    </main>
</template>
<script>
import FancyboxView from "@/components/FancyboxView.vue";
import H1TitreView from "@/components/H1TitreView.vue";
import ScrollToTop from "@/components/ScrollToTopView.vue";

export default {
    components: { FancyboxView, H1TitreView, ScrollToTop },
    name: 'ShowPhotos',
    data() {
        return {
            images: [],
            showScrollButton: false
        };
    },

    mounted() {
        this.getImages();
        window.addEventListener("scroll", this.onScroll);

    },

    unmounted() {
        window.removeEventListener("scroll", this.onScroll);
    },

    methods: {
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
        onScroll() {
            /* Permet que le footer soit blur quand on commence à scroller vers le bas */
            const footer = document.querySelector('footer');
            const nav = document.querySelector('nav');
            const scrollPosition = window.scrollY > 100;
            if (scrollPosition) {
                footer.classList.add('effectBlur');
                footer.classList.remove('bg-whiteTheme');
                nav.classList.add('effectBlur');
                nav.classList.remove('bg-whiteTheme');
            } else {
                footer.classList.remove('effectBlur');
                footer.classList.add('bg-whiteTheme');
                nav.classList.remove('effectBlur');
                nav.classList.add('bg-whiteTheme');
            }
        }

    },
};
</script>
