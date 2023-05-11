<template>
    <main
        class="h-full max-w-screen-2xl mx-auto flexRow items-center justify-between gap-8 texteClassique pb-16 px-2 sm:px-6 lg:px-8 max_sm:flex-col max_sm:h-auto max_sm:mt-32 max_sm:gap-10">
        <ImageWithRoute route="/portrait" :image=Portrait alt-text="Portraits" />
        <ImageWithRoute route="/mariage" :image=Mariage alt-text="Mariages" />
        <ImageWithRoute route="/landscape" :image=Paysages alt-text="Paysages" />
        <ImageWithRoute route="/immobilier" :image=Immobiier alt-text="immobilier" />
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
            Portrait: require('@/assets/img/portfolio/Portfolio01.webp'),
            Mariage: require('@/assets/img/portfolio/Portfolio02.webp'),
            Paysages: require('@/assets/img/portfolio/Portfolio03.webp'),
            Immobiier: require('@/assets/img/portfolio/Portfolio04.webp'),
        };
    },
};
</script>