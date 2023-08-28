<template>
    <main
        class="h-screen w-screen flexCol items-center justify-center bg-accueil bg-no-repeat bg-right bg-cover bg-blend-overlay bg-white/10   max_sm:bg-right-10rem">
        <section
            class="w-1/2 h-2/6 flexCol items-center justify-evenly py-5 backdrop-blur-[20px] bg-white/5 shadow-2xl shadow-black/30 rounded-3xl max_sm:w-auto max_sm:h-auto max_sm:mx-5 max_sm:p-5">
            <div class="container mx-auto flexRow items-center justify-center">
                <router-link
                    class="active h-28 disabled:text-black/30 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
                    aria-current="page" data-te-nav-link-ref to="/portfolio"><img class="h-full"
                        src="@/assets/img/Ressources/logo/logo_index_blanc.svg" alt="Logo Nicolas Godineau" /></router-link>

            </div>
            <div class="flexRow items-center justify-center gap-4 text-xl tracking-widest font-titre font-bold text-white">
                <router-link
                    class="disabled:text-black/30 [&.active]:text-black/90 dark:[&.active]:text-neutral-400 p-2 hover:underline hover:underline-offset-4"
                    aria-current="page" data-te-nav-link-ref to="/portfolio">Portfolio</router-link>
                <router-link
                    class=" disabled:text-black/30 [&.active]:text-black/90 dark:[&.active]:text-neutral-400 p-2 hover:underline hover:underline-offset-4"
                    data-te-nav-link-ref to="/contact">Contact</router-link>
            </div>
        </section>
    </main>
</template>
