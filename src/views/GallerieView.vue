/* eslint-disable */
<template>
    <main class="h-full max-w-screen-2xl mx-auto mt-12 max_sm:mt-20">
        <ScrollToTop />
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
            const scrollPosition = window.scrollY > 100;
            console.log('scrollPosition:', scrollPosition)

            if (window.innerWidth <= 639 && scrollPosition) {
                footer.classList.add('max_sm:effectBlur');
                footer.classList.remove('bg-neutral-100');
            } else {
                footer.classList.remove('max_sm:effectBlur');
                footer.classList.add('bg-neutral-100');
            }
        }

    },
};
</script>
