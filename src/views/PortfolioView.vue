<template>
    <main
        class="h-full max-w-screen-2xl w-full mx-auto flexRow items-center justify-around gap-[3vw] texteClassique py-16 px-2 max_sm:flex-col max_sm:h-auto max_sm:mt-[10svh] max_sm:gap-10">
        <ImageWithRoute route="/portrait" :image=Portrait alt-text="Portraits" :titre="$t('portrait')" />
        <ImageWithRoute route="/mariage" :image=Mariage alt-text="Mariages" :titre="$t('mariage')" />
        <ImageWithRoute route="/landscape" :image=Paysages alt-text="Paysages" :titre="$t('paysage')" />
        <ImageWithRoute route="/immobilier" :image=Immobiier alt-text="immobilier" :titre="$t('immobilier')" />
    </main>
</template>

<script>
import ImageWithRoute from '@/components/ImagePortfolioView.vue';
import scrollMixin from '@/mixin.js';

export default {
    mixins: [scrollMixin],
    components: {
        ImageWithRoute
    },
    data() {
        return {
            Portrait: require('@/assets/img/Ressources/portfolio/Portfolio01.webp'),
            Mariage: require('@/assets/img/Ressources/portfolio/Portfolio02.webp'),
            Paysages: require('@/assets/img/Ressources/portfolio/Portfolio03.webp'),
            Immobiier: require('@/assets/img/Ressources/portfolio/Portfolio04.webp'),
        };
    },
    mounted() {
        window.addEventListener("scroll", this.onScroll);
    },

    unmounted() {
        window.removeEventListener("scroll", this.onScroll);
    },
    methods: {
        setLang(lang) {
            this.$i18n.locale = lang;
        },
        onScroll() {
            /* Permet que le footer soit blur quand on commence à scroller vers le bas */
            const footer = document.querySelector('footer');
            const nav = document.querySelector('nav');
            const scrollPosition = window.scrollY > 30;
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