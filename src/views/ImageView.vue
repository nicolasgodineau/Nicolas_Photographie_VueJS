/* eslint-disable */
<template>
    <main class="max-w-screen-2xl mx-auto p-4">
        <h1 class="text-5xl uppercase p-10 mt-[4rem]">Coucou</h1>
        <div class="w-full flex flex-wrap justify-center gap-16 p-4">
            <Fancybox :options="{
                Carousel: {
                    infinite: false,
                },
            }">
                <div class="h-80 w-80" v-for="(photo, i) in photosImmobilier" :mutable-roles="roles" :key="i">
                    <a data-fancybox="gallery" :href="photo.img">
                        <img class="h-full w-full shadow-lg object-cover transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/50"
                            :src="photo.img" :alt="photo.alt" />
                    </a>
                </div>
            </Fancybox>
        </div>
    </main>
</template>
<script>
import { Fancybox } from "@fancyapps/ui";


export default {
    props: {
        options: Object,
    },
    mounted() {
        Fancybox.bind(this.$refs.container, '[data-fancybox]', {
            ...(this.options || {}),
        });
    },
    updated() {
        Fancybox.unbind(this.$refs.container);
        Fancybox.close();

        Fancybox.bind(this.$refs.container, '[data-fancybox]', {
            ...(this.options || {}),
        });
    },
    unmounted() {
        Fancybox.destroy();
    },
    data() {
        return {
            photosImmobilier: [
                {
                    img: require("@/assets/img/Immobilier/Immo_1.webp"),
                },
                {
                    img: require("@/assets/img/Immobilier/Immo_2.webp"),
                },
                {
                    img: require("@/assets/img/Immobilier/Immo_3.webp"),
                },
                {
                    img: require("@/assets/img/Immobilier/Immo_4.webp"),
                },
                {
                    img: require("@/assets/img/Immobilier/Immo_5.webp"),
                },
                {
                    img: require("@/assets/img/Immobilier/Immo_6.webp"),
                },
                {
                    img: require("@/assets/img/Immobilier/Immo_7.webp"),
                },
            ],
        }
    }
};
</script>

