<template>
    <div class="fixed top-3 right-6 cursor-pointer">
        <svg @click="showList = !showList" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
            stroke-width="1" stroke="currentColor" class="w-8 h-8 text-[#000000c4] ">
            <path stroke-linecap="round" stroke-linejoin="round"
                d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
        </svg>
        <ul class="flexCol gap-1 text  texteClassique text-sm" v-if="showList">
            <li @click="showList = false; setLang('fr')" :class="{ 'langueSelect': $i18n.locale === 'fr' }">Fr</li>
            <li @click="showList = false; setLang('en')" :class="{ 'langueSelect': $i18n.locale === 'en' }">En</li>
        </ul>
    </div>
</template>
<script>
export default {
    data() {
        return {
            showList: false,
        }
    },
    methods: {
        setLang(lang) {
            this.$i18n.locale = lang;
        },
    },
};
</script>
<style>
.langueSelect {
    text-decoration: underline;
    font-size: 1rem;
}
</style>