/* eslint-disable */
<template>
    <div class="w-full flex flex-wrap justify-center gap-16 p-4">
        <Fancybox class="w-full flex flex-wrap justify-center gap-16 p-4" :options="{
            Thumbs: false,
            Carousel: {
                infinite: false,
            },
        }">
            <div class="h-80 w-80" v-for="(photo, i) in data" :mutable-roles="roles" :key="i">
                <a data-fancybox="gallery" :href="photo.img">
                    <img class="h-full w-full shadow-lg object-cover transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/50"
                        :src="photo.img" :alt="photo.alt" />
                </a>
            </div>
        </Fancybox>
    </div>
</template>
<script>
import { Fancybox } from "@fancyapps/ui";
import '@fancyapps/ui/dist/fancybox/fancybox.css';
export default {
    props: {
        data: {
            type: [Array, Object],
            required: true,
        },
        options: Object,
    },
    mounted() {
        Fancybox.bind(this.$refs.container, '[data-fancybox]', {
            ...(this.options || {}),
        });
    },
    updated() {
        Fancybox.unbind(this.$refs.container);
        Fancybox.close();

        Fancybox.bind(this.$refs.container, '[data-fancybox]', {
            ...(this.options || {}),
        });
    },
    unmounted() {
        Fancybox.destroy();
    },

    data() {
        return {
            roles: this.data, // data property named 'roles', or name it whatever you want, just be sure to also change above where you add your child-component
        };
    },
};
</script>
