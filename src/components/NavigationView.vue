<template>
    <nav class="fixed w-full bg-neutral-100 py-4">
        <div class="mx-auto max-w-screen-2xl px-2 sm:px-6 lg:px-8">
            <div class="relative flex h-16 items-center justify-between">
                <div
                    class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start"
                >
                    <div class="flex flex-shrink-0 items-center">
                        <router-link class="nav-link" to="/"
                            ><img
                                class="h-14"
                                src="@/assets/logo-noir-et-transparent.png"
                                alt="Logo Nicolas godineau photgraphie"
                        /></router-link>
                    </div>
                </div>
                <div
                    class="absolute xl:visible max_sm:hidden right-0 flex items-center gap-4"
                >
                    <router-link
                        class="active disabled:text-black/30 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
                        aria-current="page"
                        data-te-nav-link-ref
                        to="/portfolio"
                        >Portfolio</router-link
                    >
                    <router-link
                        class="text-neutral-500 hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
                        data-te-nav-link-ref
                        to="/contact"
                        >Contact</router-link
                    >
                </div>
            </div>
        </div>

        <!-- Mobile menu-->
        <div class="sm:hidden" id="mobile-menu">
            <div class="flex items-center justify-center gap-4 p-4">
                <router-link
                    class="active disabled:text-black/30 [&.active]:text-black/90 dark:[&.active]:text-neutral-400 p-2"
                    aria-current="page"
                    data-te-nav-link-ref
                    to="/portfolio"
                    >Portfolio</router-link
                >
                <router-link
                    class="text-neutral-500 hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 [&.active]:text-black/90 dark:[&.active]:text-neutral-400 p-2"
                    data-te-nav-link-ref
                    to="/contact"
                    >Contact</router-link
                >
            </div>
        </div>
    </nav>
</template>
