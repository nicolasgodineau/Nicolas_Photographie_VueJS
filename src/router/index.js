import {
    createRouter,
    /* createWebHistory, */
    createWebHashHistory,
} from "vue-router";
/* eslint-disable */

const routes = [
    {
        path: "/",
        name: "home",
        component: () => import("@/views/HomeView"),
    },
    {
        path: "/portfolio",
        name: "portfolio",
        component: () => import("@/views/PortfolioView"),
    },
    {
        path: "/portrait",
        name: "portrait",
        component: () => import("@/views/GallerieView"),
    },
    {
        path: "/landscape",
        name: "landscape",
        component: () => import("@/views/GallerieView"),
    },
    {
        path: "/immobilier",
        name: "immobilier",
        component: () => import("@/views/GallerieView"),
    },
    {
        path: "/mariage",
        name: "mariage",
        component: () => import("@/views/GallerieView"),
    },
    {
        path: "/contact",
        name: "contact",
        component: () => import("@/views/ContactView"),
    },
];

/* const router = createRouter({
    history: createWebHistory(),
    routes,
}); */

const router = createRouter({
    history: createWebHashHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        return { x: 0, y: 0 };
    },
});

router.afterEach((to, from) => {
    window.scrollTo(0, 0);
});

export default router;

/* Utilisation de web hash history, car problème au rechergement de la page */
