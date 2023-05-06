/* eslint-disable */
<template>
    <main class="h-full max-w-screen-2xl flex flex-col mx-auto lg:p-10 sm:p-0">
        <h1 class="text-5xl uppercase p-10 lg:mt-16 max_sm:mt-28" data-aos="fade" data-aos-duration="1000"
            data-aos-delay="500">
            {{
                titre
            }}</h1>
        <FancyboxView class="flex flex-wrap justify-center gap-14 max_sm:gap-6 pb-16" :options="{
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
            <div class="h-80 w-80" v-for="(image, i) in images" :key="i">
                <a data-fancybox="gallery" :href="require(`@/assets/img/${image.folder}/${image.name}`)" :key="i">
                    <img class="h-full w-full shadow-lg object-cover object-top transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/50"
                        :src="require(`@/assets/img/${image.folder}/Petites/${image.name}`)" :key="i">
                </a>
            </div>
        </FancyboxView>
    </main>
</template>
<script>
import FancyboxView from "@/components/FancyboxView.vue";

export default {
    components: { FancyboxView, },
    name: 'ShowPhotos',


    data() {
        return {
            images: [],

        };
    },

    mounted() {
        this.getImages();
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
                    this.images = images;
                    break;
                }
            }
        },

    },

};
</script>
