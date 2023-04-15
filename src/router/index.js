import { createRouter, createWebHistory } from "vue-router";
/* eslint-disable */
import HomeView from "@/views/HomeView.vue";
import PortfolioView from "@/views/PortfolioView.vue";
import ContactView from "@/views/ContactView.vue";
import PhotosView from "@/views/PhotosView.vue";

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
        component: PhotosView,
    },
    {
        path: "/landscape",
        name: "landscape",
        component: PhotosView,
    },
    {
        path: "/immobilier",
        name: "immobilier",
        component: PhotosView,
    },
    {
        path: "/mariage",
        name: "mariage",
        component: PhotosView,
    },
    {
        path: "/contact",
        name: "contact",
        component: ContactView,
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
