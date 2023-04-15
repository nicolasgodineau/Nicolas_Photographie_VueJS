<template>
    <main
        class="h-screen w-screen flex flex-col items-center justify-center bg-accueil bg-no-repeat bg-cover bg-blend-overlay bg-black/20">
        <section class="w-screen py-10 backdrop-blur-[10px] bg-[#f9f9f930]">
            <div class="container mx-auto flex items-center justify-center">
                <router-link class="active disabled:text-black/30 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
                    aria-current="page" data-te-nav-link-ref to="/portfolio"><img class="h-20"
                        src="@/assets/img/logo/logo-noir-et-transparent.png" alt="" /></router-link>
            </div>
        </section>
    </main>
</template>
