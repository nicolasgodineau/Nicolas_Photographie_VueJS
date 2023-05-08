<template>
    <main
        class="h-full flex items-center justify-between gap-8 text-xl tracking-widest font-titre font-bold pb-16 max_sm:flex-col max_sm:h-auto max_sm:mt-32 max_sm:gap-10">
        <article class="flex flex-col items-center justify-center gap-8 max_sm:gap-3" data-aos="fade" data-aos-delay="0"
            data-aos-duration="1000">
            <router-link class="nav-link grow portrait" to="/portrait" name="portrait"><img
                    class="h-80 shadow-lg object-cover transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/50 max_sm:h-64"
                    src="@/assets/img/portfolio/Portfolio01.webp" alt="Photos Portrait" /></router-link>
            <router-link
                class="w-full nav-link uppercase text-lg bg-black shadow block border-black border-2 px-4 py-2 text-whiteTheme hover:bg-whiteTheme hover:text-black transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/50"
                data-aos="fade" data-aos-duration="1000" data-aos-delay="100" to="/portrait">Portraits</router-link>
        </article>
        <article class="flex flex-col items-center justify-center gap-8 max_sm:gap-3" data-aos="fade"
            data-aos-duration="1000" data-aos-delay="100">
            <router-link class="nav-link grow mariage" to="/mariage" name="mariage"><img
                    class="h-80 shadow-lg object-cover transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/50 max_sm:h-64"
                    src="@/assets/img/portfolio/Portfolio02.webp" alt="Photo mariage" /></router-link>
            <router-link
                class="w-full nav-link uppercase text-lg bg-black shadow block border-black border-2 px-4 py-2 text-whiteTheme hover:bg-whiteTheme hover:text-black transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/50"
                to="/mariage">Mariages</router-link>
        </article>
        <article class="flex flex-col items-center justify-center gap-8 max_sm:gap-3" data-aos="fade"
            data-aos-duration="1000" data-aos-delay="200">
            <router-link class="nav-link grow" to="/landscape" name="landscape"><img
                    class="h-80 shadow-lg object-cover transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/50 max_sm:h-64"
                    src="@/assets/img/portfolio/Portfolio03.webp" alt="photo paysage" /></router-link>
            <router-link
                class="w-full nav-link uppercase text-lg bg-black shadow block border-black border-2 px-4 py-2 text-whiteTheme hover:bg-whiteTheme hover:text-black transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/50"
                data-aos="fade" data-aos-duration="1000" data-aos-delay="300" to="/landscape">Paysages</router-link>
        </article>
        <article class="flex flex-col items-center justify-center gap-8 max_sm:gap-3" data-aos="fade"
            data-aos-duration="1000" data-aos-delay="300">
            <router-link class="nav-link grow immobilier" to="/immobilier" name="immobilier"><img
                    class="h-80 shadow-lg object-cover transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/50 max_sm:h-64"
                    src="@/assets/img/portfolio/Portfolio05.webp" alt="photo immobilier" /></router-link>
            <router-link
                class="w-full nav-link uppercase text-lg bg-black shadow block border-black border-2 px-4 py-2 text-whiteTheme hover:bg-whiteTheme hover:text-black transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/50"
                data-aos="fade" data-aos-duration="1000" data-aos-delay="400" to="/immobilier">Immobilier</router-link>
        </article>
    </main>
</template>

