import ApiService from "@/services/api.service";

export default {
    namespaced: true,
    state    : () => ({
        user: {},
    }),
    getters  : {
        getUserFromGetters(state) {
            return state.user
        }
    },
    actions  : {
        getUser(context) {
            ApiService.get('/user').then(response => {
                context.commit("GETUSER", response.data.data);
            }).catch(error => {
                console.log(error, 'error')
            }).finally(() => {
                context.commit("LOADER", false)
            });
        },
    },
    mutations: {
        GETUSER(state, data) {
            return state.user = data
        }
    },
}
