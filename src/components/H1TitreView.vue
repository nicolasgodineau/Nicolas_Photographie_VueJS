/* eslint-disable */
<template>
    <h1 class="clampTitre font-titre uppercase p-10 max_sm:px-3" data-aos="fade" data-aos-duration="1000"
        data-aos-delay="500">
        {{
            titre
        }}</h1>
</template>

<script>

export default {
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
                } else if (route.name === 'contact') {
                    this.titre = 'Contact';
                }
            },
            immediate: true // Appel immédiat de la fonction handler lors de l'initialisation
        }
    },
};
</script>