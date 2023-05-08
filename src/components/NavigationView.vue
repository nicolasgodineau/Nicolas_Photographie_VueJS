<template>
    <nav class="fixed top-0 w-full bg-neutral-100 py-2 z-10 text-xl tracking-widest font-titre font-bold max_sm:shadow max_sm:backdrop-blur-xl max_sm:backdrop-saturate-0 max_sm:bg-[#f5f5f58c] "
        data-aos="fade-down" data-aos-duration="1300" data-aos-delay="200">
        <div class="mx-auto max-w-screen-2xl px-2 sm:px-6 lg:px-8 max_sm:hidden">
            <div class="relative flex h-16 items-center justify-between">
                <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                    <div class="flex flex-shrink-0 items-center max_sm:hidden">
                        <router-link class="nav-link" to="/"><img class="h-14" src="@/assets/img/logo/Logo_declinaison.svg"
                                alt="Logo Nicolas godineau photgraphie" /></router-link>
                    </div>
                </div>
                <div class="absolute xl:visible max_sm:hidden right-0 flex items-center gap-4">
                    <router-link active-class="active" class="nav-link" aria-current="page" data-te-nav-link-ref
                        to="/portfolio">Portfolio</router-link>
                    <span class="text-xl font-bold font-titre">.</span>
                    <router-link active-class="active" class="nav-link" data-te-nav-link-ref
                        to="/contact">Contact</router-link>
                </div>
            </div>
        </div>

        <!-- Mobile menu-->
        <div class="sm:hidden" id="mobile-menu">
            <div class="flex flex-col items-center justify-center gap-2 text-xl tracking-widest font-titre font-bold ">
                <div class="flex flex-shrink-0 items-center">
                    <router-link class="nav-link" to="/"><img class="h-14" src="@/assets/img/logo/Logo_declinaison.svg"
                            alt="Logo Nicolas godineau photographie" /></router-link>
                </div>
                <div class="w-11/12 flex flex-row gap-3 justify-around">
                    <router-link active-class="active" class="nav-link" aria-current="page" data-te-nav-link-ref
                        to="/portfolio">Portfolio</router-link>
                    <router-link active-class="active" class="nav-link" data-te-nav-link-ref
                        to="/contact">Contact</router-link>
                </div>

            </div>
        </div>
    </nav>
</template>
