/* eslint-disable */
<template>
    <h1 class="clampTitre font-titre uppercase pt-20 pb-5 max_sm:px-3" data-aos="fade" data-aos-duration="1000"
        data-aos-delay="500">
        {{ titre
        }}</h1>
</template>

<script>

export default {
    methods: {
        setLang(lang) {
            this.$i18n.locale = lang;
        },
    },
    watch: {
        $route: {
            handler: function (route) {
                if (route.name === 'landscape') {
                    this.titre = this.$t('paysage');
                } else if (route.name === 'portrait') {
                    this.titre = this.$t('portrait');
                } else if (route.name === 'immobilier') {
                    this.titre = this.$t('immobilier');
                } else if (route.name === 'mariage') {
                    this.titre = this.$t('mariage');
                } else if (route.name === 'contact') {
                    this.titre = this.$t('contact');
                }
            },
            immediate: true // Appel immédiat de la fonction handler lors de l'initialisation
        }
    },
};
</script>