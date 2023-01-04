<template>
    <Multiselect :class="class_name" @input="$parent[on_change]" required track-by="id" :multiple="multiple"
                 v-model="$parent.form[v_model]" label="name" :placeholder="`Select Or Search ${title}`"
                 :options="lists" @search-change="getSearch"/>
</template>

<script>
import ApiService          from "@/services/api.service";
import Multiselect         from 'vue-multiselect';
import NotificationService from "@/services/notification.service";

export default {
    name      : "DropDownComponent",
    components: {Multiselect},
    props     : {
        title       : {type: String},
        v_model     : {type: String},
        class_name  : {default: ''},
        on_change   : {},
        type        : {},
        multiple    : {
            type   : Boolean,
            default: false,
        },
        is_searching: {
            type   : Boolean,
            default: true,
        }
    },
    data      : () => ({
        lists : [],
        search: '',
    }),
    mounted() {
        this.getLists()
    },
    methods: {
        getSearch: function (query) {
            if (this.is_searching) {
                this.search = query;
                this.getLists();
            }
        },
        getLists() {
            let params = {
                search: this.search,
                type  : this.type
            };
            ApiService.get(`/dropdown/${this.v_model}`, {params: params}).then((res) => {
                this.lists = res.data.data
            }).catch(error => {
                NotificationService.error(error.response.data.message);
            })
        }
    }
}
</script>
