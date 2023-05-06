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

        };
    },
    mounted() {
        AOS.init();
    },
};
</script>
