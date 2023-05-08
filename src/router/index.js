import {
    createRouter,
    /* createWebHistory, */
    createWebHashHistory,
} from "vue-router";
/* eslint-disable */
import HomeView from "@/views/HomeView.vue";
import PortfolioView from "@/views/PortfolioView.vue";
import ContactView from "@/views/ContactView.vue";
import GallerieView from "@/views/GallerieView.vue";

const routes = [
    {
        path: "/",
        name: "home",
        component: HomeView,
    },
    {
        path: "/portfolio",
        name: "portfolio",
        component: PortfolioView,
    },
    {
        path: "/portrait",
        name: "portrait",
        component: GallerieView,
    },
    {
        path: "/landscape",
        name: "landscape",
        component: GallerieView,
    },
    {
        path: "/immobilier",
        name: "immobilier",
        component: GallerieView,
    },
    {
        path: "/mariage",
        name: "mariage",
        component: GallerieView,
    },
    {
        path: "/contact",
        name: "contact",
        component: ContactView,
    },
];

/* const router = createRouter({
    history: createWebHistory(),
    routes,
}); */

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;
