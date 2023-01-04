import Vue         from 'vue'
import Router      from 'vue-router'
//Not found page //404
import NotFound    from '@/components/NotFound.vue';
//Web Section
import WebLayout   from "@/views/web/Layout";
import webRoutes   from "@/views/web/_routes";
//Admin Section
import AdminRoutes from "@/views/admin/_routes";
import AdminLayout from "@/views/admin/Layout";
//Auth Section
import AuthRoutes  from "@/views/auth/_routes";

Vue.use(Router);

const router = new Router({
    mode: 'history',
    base: '/',
    scrollBehavior() {
        return {x: 0, y: 0}
    },
    routes: [
        //Frontend routing
        {
            path     : '/',
            name     : 'website',
            component: WebLayout,
            children : webRoutes
        },
        //Auth Section routing
        {
            path     : '/',
            component: WebLayout,
            children : AuthRoutes
        },
        //Admin Section routing
        {
            path     : '/',
            component: AdminLayout,
            children : AdminRoutes,
            meta     : {
                requireAuth: true,
            }
        },
        //NotFound
        {
            path     : '*',
            name     : 'Not Found',
            component: NotFound,
            meta     : {
                title: 'Not Found'
            }
        },
    ],
});

export default router

