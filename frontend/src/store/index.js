import Vue  from 'vue'
import Vuex from 'vuex'
import auth from "@/store/moduels/auth";

Vue.use(Vuex);

export default new Vuex.Store({
    state  : {},
    getters: {},
    actions: {},
    mutations: {},

    modules: {
        auth,
    }
})
