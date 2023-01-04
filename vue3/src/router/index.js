import {createRouter, createWebHistory} from 'vue-router'
//Web Section
import WebLayout                        from "@/views/web/Layout";
import webRoutes                        from "@/views/web/_routes";
//Admin Section
import AdminRoutes                      from "@/views/admin/_routes";
import AdminLayout                      from "@/views/admin/Layout";

const routes = [
    {
        path     : '/',
        name     : 'website',
        component: WebLayout,
        children : webRoutes
    },
    //Admin Section routing
    {
        path     : '/',
        component: AdminLayout,
        children : AdminRoutes
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
