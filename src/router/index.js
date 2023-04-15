import { createRouter, createWebHistory } from "vue-router";
/* eslint-disable */
import HomeView from "@/views/HomeView.vue";
import PortfolioView from "@/views/PortfolioView.vue";
import PortraitView from "@/views/PortraitView.vue";
import TravelView from "@/views/LandscapeView.vue";
import ImmobilierView from "@/views/ImmobilierView.vue";
import MariageView from "@/views/MariageView.vue";
import CarouselView from "@/views/CarouselView.vue";
import ContactView from "@/views/ContactView.vue";
import ImageView from "@/views/ImageView.vue";
import NavigationView from "@/components/NavigationView.vue";

import Test from "@/components/HelloWorld.vue";
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
        path: "/image",
        name: "image",
        component: ImageView,
        props: true,
    },
    {
        path: "/portrait",
        name: "portrait",
        component: PortraitView,
        props: true,
    },
    {
        path: "/travel",
        name: "travel",
        component: TravelView,
    },
    {
        path: "/immobilier",
        name: "immobilier",
        component: ImmobilierView,
    },
    {
        path: "/mariage",
        name: "mariage",
        component: MariageView,
    },
    {
        path: "/carousel",
        name: "carousel",
        component: CarouselView,
    },
    {
        path: "/contact",
        name: "contact",
        component: ContactView,
    },
    {
        path: "/Test",
        name: "Test",
        component: Test,
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
