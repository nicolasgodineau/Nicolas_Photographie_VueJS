<template>
    <!-- Le v-if permet d'exclure la navigation de la route "home" -->
    <Navigation v-if="$route.name !== 'home'" />

    <router-view :photos="photos" />

    <!-- Le v-if permet d'exclure la navigation de la route "home" -->
    <Footer :year="currentYear" v-if="$route.name !== 'home'" />
</template>
<script>
import AOS from "aos";
import "aos/dist/aos.css";
import Navigation from "@/components/NavigationView.vue";
import Footer from "@/components/FooterView.vue";
export default {
    components: {
        Navigation,
        Footer,
    },
    data() {
        return {
            currentYear: new Date().getFullYear(),
            photos: {
                photosPortrait: [
                    {
                        img: require("@/assets/img/Portraits/Portrait_1.webp"),
                        alt: "Photo portrait",
                    },
                    {
                        img: require("@/assets/img/Portraits/Portrait_2.webp"),
                        alt: "Photo portrait",
                    },
                    {
                        img: require("@/assets/img/Portraits/Portrait_3.webp"),
                        alt: "Photo portrait",
                    },
                    {
                        img: require("@/assets/img/Portraits/Portrait_4.webp"),
                        alt: "Photo portrait",
                    },
                    {
                        img: require("@/assets/img/Portraits/Portrait_5.webp"),
                        alt: "Photo portrait",
                    },
                    {
                        img: require("@/assets/img/Portraits/Portrait_6.webp"),
                        alt: "Photo portrait",
                    },
                    {
                        img: require("@/assets/img/Portraits/Portrait_7.webp"),
                        alt: "Photo portrait",
                    },
                    {
                        img: require("@/assets/img/Portraits/Portrait_8.webp"),
                        alt: "Photo portrait",
                    },
                    {
                        img: require("@/assets/img/Portraits/Portrait_9.webp"),
                        alt: "Photo portrait",
                    },
                    {
                        img: require("@/assets/img/Portraits/Portrait_10.webp"),
                        alt: "Photo portrait",
                    },
                    {
                        img: require("@/assets/img/Portraits/Portrait_11.webp"),
                        alt: "Photo portrait",
                    },
                    {
                        img: require("@/assets/img/Portraits/Portrait_12.webp"),
                        alt: "Photo portrait",
                    },
                    {
                        img: require("@/assets/img/Portraits/Portrait_13.webp"),
                        alt: "Photo portrait",
                    },
                    {
                        img: require("@/assets/img/Portraits/Portrait_14.webp"),
                        alt: "Photo portrait",
                    },
                    {
                        img: require("@/assets/img/Portraits/Portrait_15.webp"),
                        alt: "Photo portrait",
                    },
                    {
                        img: require("@/assets/img/Portraits/Portrait_16.webp"),
                        alt: "Photo portrait",
                    },
                    {
                        img: require("@/assets/img/Portraits/Portrait_17.webp"),
                        alt: "Photo portrait",
                    },
                    {
                        img: require("@/assets/img/Portraits/Portrait_18.webp"),
                        alt: "Photo portrait",
                    },
                ],
                photosMariage: [
                    {
                        img: require("@/assets/img/Mariages/Mariage_1.webp"),
                    },
                    {
                        img: require("@/assets/img/Mariages/Mariage_2.webp"),
                    },
                    {
                        img: require("@/assets/img/Mariages/Mariage_3.webp"),
                    },
                    {
                        img: require("@/assets/img/Mariages/Mariage_4.webp"),
                    },
                    {
                        img: require("@/assets/img/Mariages/Mariage_5.webp"),
                    },
                    {
                        img: require("@/assets/img/Mariages/Mariage_6.webp"),
                    },
                    {
                        img: require("@/assets/img/Mariages/Mariage_7.webp"),
                    },
                    {
                        img: require("@/assets/img/Mariages/Mariage_8.webp"),
                    },
                    {
                        img: require("@/assets/img/Mariages/Mariage_9.webp"),
                    },
                    {
                        img: require("@/assets/img/Mariages/Mariage_10.webp"),
                    },
                    {
                        img: require("@/assets/img/Mariages/Mariage_11.webp"),
                    },
                    {
                        img: require("@/assets/img/Mariages/Mariage_12.webp"),
                    },
                    {
                        img: require("@/assets/img/Mariages/Mariage_13.webp"),
                    },
                    {
                        img: require("@/assets/img/Mariages/Mariage_14.webp"),
                    },
                    {
                        img: require("@/assets/img/Mariages/Mariage_15.webp"),
                    },
                    {
                        img: require("@/assets/img/Mariages/Mariage_16.webp"),
                    },
                    {
                        img: require("@/assets/img/Mariages/Mariage_17.webp"),
                    },
                ],
                photosPaysages: [
                    {
                        img: require("@/assets/img/Voyages/Travel_1.webp"),
                    },
                    {
                        img: require("@/assets/img/Voyages/Travel_2.webp"),
                    },
                    {
                        img: require("@/assets/img/Voyages/Travel_3.webp"),
                    },
                    {
                        img: require("@/assets/img/Voyages/Travel_4.webp"),
                    },
                    {
                        img: require("@/assets/img/Voyages/Travel_5.webp"),
                    },
                    {
                        img: require("@/assets/img/Voyages/Travel_6.webp"),
                    },
                    {
                        img: require("@/assets/img/Voyages/Travel_7.webp"),
                    },
                    {
                        img: require("@/assets/img/Voyages/Travel_8.webp"),
                    },
                    {
                        img: require("@/assets/img/Voyages/Travel_9.webp"),
                    },
                    {
                        img: require("@/assets/img/Voyages/Travel_10.webp"),
                    },
                    {
                        img: require("@/assets/img/Voyages/Travel_11.webp"),
                    },
                    {
                        img: require("@/assets/img/Voyages/Travel_12.webp"),
                    },
                ],
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
            },
        };
    },
    mounted() {
        AOS.init();
    },
};
</script>
