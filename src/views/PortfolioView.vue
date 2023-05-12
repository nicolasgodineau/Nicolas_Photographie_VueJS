<template>
    <main
        class="h-full max-w-screen-2xl w-full mx-auto flexRow items-center justify-evenly gap-8 texteClassique py-16 px-2 max_sm:flex-col max_sm:h-auto max_sm:mt-32 max_sm:gap-10">
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
    methods: {
        setLang(lang) {
            this.$i18n.locale = lang;
        },
    },

};
</script>