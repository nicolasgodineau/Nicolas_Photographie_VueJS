<template>
    <nav class="fixed top-0 z-10 max-w-screen-2xl w-full pt-2 flexCol items-center gap-3 bg-whiteTheme" data-aos="fade-down"
        data-aos-duration="1300" data-aos-delay="200">
        <router-link class="nav-link" to="/"><img class="h-20 max_sm:h-14" src="@/assets/img/Ressources/logo/Logo_menu.svg"
                alt="Logo Nicolas godineau photographie" /></router-link>
        <div class="w-1/3 flexRow gap-3 justify-between texteClassique max_sm:w-full max_sm:justify-around ">
            <router-link
                :class="{ 'active': $route.path.includes('/portfolio') || $route.path.includes('/portrait') || $route.path.includes('/landscape') || $route.path.includes('/immobilier') || $route.path.includes('/mariage') }"
                class="nav-link" aria-current="page" data-te-nav-link-ref to="/portfolio">{{ $t('portfolio')
                }}</router-link>
            <router-link active-class="active" class="nav-link" data-te-nav-link-ref to="/contact">{{ $t('contact')
            }}</router-link>
        </div>
        <BtnLanguage />

    </nav>
</template>
<script>
import BtnLanguage from './BtnLanguageView.vue';
import AOS from "aos";
import "aos/dist/aos.css";
export default {
    components: {
        BtnLanguage,
    },
    mounted() {
        AOS.init({
            disable: 'phone',
        });
    },
};
</script>
