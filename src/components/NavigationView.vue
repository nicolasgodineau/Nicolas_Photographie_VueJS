<template>
    <nav class="menuFixe w-full bg-neutral-100 py-2 flexCol items-center gap-3 max_sm:shadow max_sm:backdrop-blur-xl max_sm:backdrop-saturate-0 max_sm:bg-[#f5f5f58c]"
        data-aos="fade-down" data-aos-duration="1300" data-aos-delay="200">
        <router-link class="nav-link" to="/"><img class="h-14" src="@/assets/img/logo/Logo_declinaison.svg"
                alt="Logo Nicolas godineau photographie" /></router-link>
        <div class="w-1/3 flexRow gap-3 justify-between texteClassique max_sm:w-full max_sm:justify-around ">
            <router-link
                :class="{ 'active': $route.path.includes('/portfolio') || $route.path.includes('/portrait') || $route.path.includes('/landscape') || $route.path.includes('/immobilier') || $route.path.includes('/mariage') }"
                class="nav-link" aria-current="page" data-te-nav-link-ref to="/portfolio">Portfolio</router-link>
            <router-link active-class="active" class="nav-link" data-te-nav-link-ref to="/contact">Contact</router-link>
        </div>
    </nav>
</template>

