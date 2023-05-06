/* eslint-disable */
<template>
    <h1>template a dupliquer</h1>
</template>


<!-- Le scrip est la sauvegarde pour la page gallerie -->
<script>
import FancyboxView from "@/components/FancyboxView.vue";

export default {
    components: { FancyboxView, },
    props: {
        photos: Object,
    },
    computed: {
        photo() {
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
