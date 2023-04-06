/* eslint-disable */
<template>
    <main class="max-w-screen-2xl mx-auto p-4">
        <h1 class="text-5xl uppercase p-10 mt-[4rem]">{{ titre }}</h1>
        <GallerieView :data="photosPortrait" />
    </main>
</template>
<script>
import GallerieView from "@/components/GallerieView.vue";
export default {
    components: {
        GallerieView,
    },
    props: ["photosPortrait"],
    data: function () {
        return {
            titre: "portrait",
        };
    },
};
</script>
