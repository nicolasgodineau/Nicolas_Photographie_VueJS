/* eslint-disable */
<template>
    <div class="w-full flex flex-wrap justify-center gap-16 p-4">
        <div
            class="h-80 w-80"
            v-for="(photo, i) in data"
            :mutable-roles="roles"
            :key="i"
        >
            <img
                class="h-full w-full shadow-lg object-cover transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/50"
                :src="photo.img"
            />
        </div>
    </div>
</template>

<script>
export default {
    props: {
        data: {
            type: [Array, Object],
            required: true,
        },
    },

    data() {
        return {
            roles: this.data, // data property named 'roles', or name it whatever you want, just be sure to also change above where you add your child-component
        };
    },
};
</script>
