<template>
    <main
        class="h-screen w-screen flexCol items-center justify-center bg-accueil bg-no-repeat bg-right bg-cover bg-blend-overlay bg-white/20 max_sm:bg-right-10rem">
        <section class="w-screen py-4 backdrop-blur-[5px] bg-[#f9f9f930]">
            <div class="container mx-auto flexRow items-center justify-center">
                <router-link class="active disabled:text-black/30 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
                    aria-current="page" data-te-nav-link-ref to="/portfolio"><img class="h-28"
                        src="@/assets/img/Ressources/logo/Logo_index.svg" alt="" /></router-link>

            </div>
            <div class="flexRow items-center justify-center gap-4 text-xl tracking-widest font-titre font-bold">
                <router-link class="disabled:text-black/30 [&.active]:text-black/90 dark:[&.active]:text-neutral-400 p-2"
                    aria-current="page" data-te-nav-link-ref to="/portfolio">Portfolio</router-link>
                <router-link class=" disabled:text-black/30 [&.active]:text-black/90 dark:[&.active]:text-neutral-400 p-2"
                    data-te-nav-link-ref to="/contact">Contact</router-link>
            </div>
        </section>
    </main>
</template>
