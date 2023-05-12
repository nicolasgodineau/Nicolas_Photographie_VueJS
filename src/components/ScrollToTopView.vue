<template>
    <button class="fixed bottom-24 right-6 p-1" v-show="showScrollButton" @click="scrollToTop">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
            class="w-8 h-8 fill-neutral-100 text-[#000000c4] shadow backdrop-blur backdrop-saturate-0 bg-[#f5f5f58c] rounded-full">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75" />
        </svg>
    </button>
</template>

<script>

export default {
    data() {
        return {
            showScrollButton: false
        };
    },
    mounted() {
        window.addEventListener("scroll", this.handleScroll);
    },

    unmounted() {
        window.removeEventListener("scroll", this.handleScroll);
    },
    methods: {
        handleScroll() {
            this.showScrollButton = window.scrollY > 100;
        },
        scrollToTop() {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        },
    },
};
</script>