import { createWebHistory, createRouter, RouteRecordRaw } from 'vue-router';

import HomeView from '../components/HomeView.vue';
import HelloWorldVue from '../components/HelloWorld.vue';

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'Home',
        component: HomeView
    },
    {
        path: '/hello',
        name: 'HelloWorld',
        component: HelloWorldVue
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;