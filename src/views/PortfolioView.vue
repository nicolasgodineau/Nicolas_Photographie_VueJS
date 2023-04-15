<template>
    <main class="h-full max-w-screen-2xl flex flex-col mx-auto p-4">
        <h1 class="text-5xl uppercase p-10 mt-[4rem]">Portfolio</h1>
        <div class="w-full h-full flex items-center justify-between gap-8 p-4">
            <router-link
                class="w-full nav-link uppercase text-lg bg-black shadow block border-black border-2 px-4 py-2 text-whiteTheme hover:bg-whiteTheme hover:text-black transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/50"
                to="/image" source="test">Images</router-link>
            <article class="flex flex-col items-center justify-center gap-8" data-aos="zoom-in-down" data-aos-duration="800"
                data-aos-easing="rotate-round">
                <router-link class="nav-link grow portrait" to="/portrait"><img
                        class="h-80 shadow-lg object-cover transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/50"
                        src="@/assets/img/portfolio/Portfolio01.webp" alt="" /></router-link>
                <router-link
                    class="w-full nav-link uppercase text-lg bg-black shadow block border-black border-2 px-4 py-2 text-whiteTheme hover:bg-whiteTheme hover:text-black transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/50"
                    to="/portrait">Portraits</router-link>
            </article>
            <article class="flex flex-col items-center justify-center gap-8">
                <router-link class="nav-link grow mariage" to="/mariage"><img
                        class="h-80 shadow-lg object-cover transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/50"
                        src="@/assets/img/portfolio/Portfolio02.webp" alt="" /></router-link>
                <router-link
                    class="w-full nav-link uppercase text-lg bg-black shadow block border-black border-2 px-4 py-2 text-whiteTheme hover:bg-whiteTheme hover:text-black transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/50"
                    to="/mariage">Mariages</router-link>
            </article>
            <article class="flex flex-col items-center justify-center gap-8">
                <router-link class="nav-link grow travel" to="/travel"><img
                        class="h-80 shadow-lg object-cover transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/50"
                        src="@/assets/img/portfolio/Portfolio03.webp" alt="" /></router-link>
                <router-link
                    class="w-full nav-link uppercase text-lg bg-black shadow block border-black border-2 px-4 py-2 text-whiteTheme hover:bg-whiteTheme hover:text-black transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/50"
                    to="/travel">Paysages</router-link>
            </article>
            <article class="flex flex-col items-center justify-center gap-8">
                <router-link class="nav-link grow immobilier" to="/immobilier"><img
                        class="h-80 shadow-lg object-cover transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/50"
                        src="@/assets/img/portfolio/Portfolio05.webp" alt="" /></router-link>
                <router-link
                    class="w-full nav-link uppercase text-lg bg-black shadow block border-black border-2 px-4 py-2 text-whiteTheme hover:bg-whiteTheme hover:text-black transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/50"
                    to="/immobilier">Immobilier</router-link>
            </article>
        </div>
    </main>
</template>
<script>
export default {
    name: "ImageView",
    props: ['source']


};
</script>

