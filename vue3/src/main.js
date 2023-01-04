import {createApp} from 'vue'
import App         from './App.vue'
import router      from './router'
import './scss/main.scss'
import "bootstrap/dist/css/bootstrap.min.css"
import 'bootstrap'

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

const app = createApp(App)

import IndexAction  from "@/components/action/Index";
import ViewAction   from "@/components/action/View";
import CreateAction from "@/components/action/Create";
import UpdateAction from "@/components/action/Update";
import DeleteAction from "@/components/action/Delete";

//Action Button Component
app.component('index-action', IndexAction);
app.component('view-action', ViewAction);
app.component('create-action', CreateAction);
app.component('update-action', UpdateAction);
app.component('delete-action', DeleteAction);
app.use(router).mount('#app')
