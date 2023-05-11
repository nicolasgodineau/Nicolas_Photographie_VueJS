/* eslint-disable */
<template>
    <main class="h-full max-w-screen-2xl flexCol mx-auto p-4">
        <h1 class="text-5xl uppercase p-10 mt-[4rem]" data-aos="fade" data-aos-duration="1000" data-aos-delay="500">{{ titre
                    }}</h1>
        <GallerieView :data="data" />
    </main>
</template>
<script>
import GallerieView from "@/views/GallerieView.vue";

export default {
    components: {
        GallerieView,
    },
    props: ["photos"],
    computed: {
        data() {
            if (this.$route.name === 'landscape') {
                return this.photos.photosPaysages;
            }
            else if (this.$route.name === 'portrait') {
                return this.photos.photosPortrait;
            }
            else if (this.$route.name === 'immobilier') {
                return this.photos.photosImmobilier;
            }
            else if (this.$route.name === 'mariage') {
                return this.photos.photosMariage;
            }
            else {
                return null;
            }
        },
    },
    watch: {
        $route: {
            handler: function (route) {
                if (route.name === 'landscape') {
                    this.titre = 'Paysage';
                } else if (route.name === 'portrait') {
                    this.titre = 'Portrait';
                } else if (route.name === 'immobilier') {
                    this.titre = 'Immobilier';
                } else if (route.name === 'mariage') {
                    this.titre = 'Mariage';
                }
            },
            immediate: true // Appel immédiat de la fonction handler lors de l'initialisation
        }
    },

};
</script>

