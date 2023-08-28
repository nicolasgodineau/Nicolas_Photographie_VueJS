<template>
    <main class="h-full w-full flexCol items-center mt-12 max_sm:mt-20">
        <H1TitreView />
        <section class="max-w-5xl flexCol items-center justify-center gap-8 text-lg tracking-widest font-titre pb-16 ">
            <div class="flexRow items-center justify-center gap-8 max_sm:flex-col max_sm:w-full max_sm:gap-6 max_sm:h-auto">
                <img class="h-96 shadow-lg object-cover transition-shadow duration-300 ease-in-out shadow-black/30 max_sm:h-80"
                    src="@/assets/img/Ressources/Profil.webp" alt="photo de nicolas godineau" />
                <div
                    class="w-[40ch] min-w-[20ch] h-96 flexCol justify-between text-left max_sm:w-11/12 max_sm:gap-6 max_sm:h-auto">
                    <p>{{ $t('paragraphe1') }}</p>
                    <p>{{ $t('paragraphe2') }}</p>
                    <p>{{ $t('paragraphe3') }}</p>
                    <p>{{ $t('paragraphe4') }}</p>
                </div>
            </div>
            <div
                class="w-full mt-10 flexRow items-center justify-center gap-8 max_sm:flex-col max_sm:w-full max_sm:gap-6 max_sm:h-auto">
                <form action="https://public.herotofu.com/v1/0b4393f0-d02c-11ed-9434-5b53665d9a66" method="post"
                    accept-charset="UTF-8" class="flexCol text-left w-96 flex-grow max_sm:w-11/12 ">
                    <div class="flexRow gap-8 max_sm:flex-col max_sm:gap-3 max_sm:w-full">
                        <label class="block mb-6 max_sm:mb-0">
                            <span class="text-gray-700">{{ $t('nom&prenom') }}</span>
                            <input type="text" name="name"
                                class="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                required />
                        </label>
                        <label class="block mb-6 max_sm:mb-3">
                            <span class="text-gray-700">{{ $t('email') }}</span>
                            <input name="email" type="email"
                                class="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                required />
                        </label>
                    </div>
                    <label class="block mb-6 w-96 max_sm:w-auto">
                        <span class="text-gray-700">{{ $t('message') }}</span>
                        <textarea name="message"
                            class="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 "
                            rows="3" required></textarea>
                    </label>
                    <div class="mb-6">
                        <button type="submit"
                            class="bg-black shadow w-full block border-black border-2 px-4 py-2 text-whiteTheme hover:bg-whiteTheme hover:text-black transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/30">
                            {{ $t('envoyer') }}
                        </button>
                    </div>
                </form>
                <div class="flexRow items-center justify-evenly w-full text-xl tracking-widest font-titre ">
                    <a class="flexCol items-center gap-3" href="https://www.instagram.com/nicolasg_travel/" target="_blank"
                        rel="noopener noreferrer"><img class="h-10 w-10" src="@/assets/img/Ressources/instagram.svg" alt="">
                        <p>{{ $t('paysage') }}</p>
                    </a>
                    <a class="flexCol items-center gap-3" href="https://www.instagram.com/nicolasg_portraits/"
                        target="_blank" rel="noopener noreferrer"><img class="h-10 w-10"
                            src="@/assets/img/Ressources/instagram.svg" alt="">
                        <p>{{ $t('portrait') }}</p>
                    </a>
                </div>
            </div>
        </section>
    </main>
</template>
<script>
import H1TitreView from "@/components/H1TitreView.vue";
export default {
    components: { H1TitreView },
    mounted() {
        window.addEventListener("scroll", this.onScroll);
    },

    unmounted() {
        window.removeEventListener("scroll", this.onScroll);
    },
    methods: {
        setLang(lang) {
            this.$i18n.locale = lang;
        },
        onScroll() {
            /* Permet que le footer soit blur quand on commence à scroller vers le bas */
            const footer = document.querySelector('footer');
            const nav = document.querySelector('nav');
            const scrollPosition = window.scrollY > 30;
            if (scrollPosition) {
                footer.classList.add('effectBlur');
                footer.classList.remove('bg-whiteTheme');
                nav.classList.add('effectBlur');
                nav.classList.remove('bg-whiteTheme');
            } else {
                footer.classList.remove('effectBlur');
                footer.classList.add('bg-whiteTheme');
                nav.classList.remove('effectBlur');
                nav.classList.add('bg-whiteTheme');
            }
        }
    },
}
</script>