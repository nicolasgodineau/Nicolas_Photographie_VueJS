<template>
    <article class="flexCol items-center justify-center gap-8 max_sm:gap-3" data-aos="fade" data-aos-delay="0"
        data-aos-duration="1000">
        <router-link :to="route" class="nav-link grow ">
            <img :src="image" :alt="altText" class="h-80 effectPhoto max_sm:h-64" />
        </router-link>
        <router-link
            class="w-full nav-link uppercase texteClassique text-whiteTheme bg-black effectPhoto border-black border-2 px-4 py-2  hover:bg-whiteTheme hover:text-black "
            data-aos="fade" data-aos-duration="1000" data-aos-delay="100" :to="route">{{ altText }}</router-link>
        <!-- LE TITRE DE LA CATEGORIE EST L'ALT DE L'IMAGE -->
    </article>
</template>
  
<script>

export default {
    props: {
        route: {
            type: String,
            required: true
        },
        image: {
            type: String,
            required: true
        },
        altText: {
            type: String,
            default: '',
        },
    },
};
</script>