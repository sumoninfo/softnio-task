import Vue    from 'vue'
import App    from './App.vue'
import router from './router'
import store  from './store'
import './scss/main.scss'
import 'bootstrap'
import 'vue-multiselect/dist/vue-multiselect.min.css'
// Filters
import './filters/filters.js'
import './globalComponents'
//sweetalert2
window.Swal  = require('sweetalert2');
//Toast
const Toast  = Swal.mixin({
    toast            : true,
    position         : 'top-end',
    showConfirmButton: false,
    timer            : 3000,
    timerProgressBar : true,
    didOpen          : (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
});
window.Toast = Toast;


//services
import ApiService      from '@/services/api.service.js'
import * as JwtService from "@/services/jwt.service.js";

ApiService.init();

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requireAuth)) {
        if (!JwtService.getToken()) {
            next({
                name: 'LoginPage', params: {nextUrl: to.fullPath}
            })
        } else {
            ApiService.get('/user').then(response => {
                store.commit("auth/GETUSER", response.data.data);
                next()
            }).catch(error => {
                JwtService.destroyToken();
                next({name: 'LoginPage'})
            })
        }
    }

    //if user logged and user state login page then redirect to dashboard
    if (to.name == 'LoginPage' || to.name == 'RegisterPage') {
        if (JwtService.getToken()) {
            next({name: 'AdminDashboard'});
        }
    }

    next();
    Vue.nextTick(() => {
        document.title = `${to.meta.title} - ${process.env.VUE_APP_TITLE}` || process.env.VUE_APP_TITLE
    })
});


new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');

