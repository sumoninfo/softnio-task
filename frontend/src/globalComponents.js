import Vue          from 'vue'
//Action Button
import IndexAction  from "@/components/action/Index";
import ViewAction   from "@/components/action/View";
import CreateAction from "@/components/action/Create";
import UpdateAction from "@/components/action/Update";
import DeleteAction from "@/components/action/Delete";
//DropDown
import DropDown     from "@/components/dropdown/DropDown";

//Action Button Component
Vue.component('index-action', IndexAction);
Vue.component('view-action', ViewAction);
Vue.component('create-action', CreateAction);
Vue.component('update-action', UpdateAction);
Vue.component('delete-action', DeleteAction);

//DropDown Component
Vue.component('drop-down', DropDown);
