<template>
    <div>
        <div
            class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
            <h1 class="h2">Create Category</h1>
        </div>
        <form @submit.prevent="store()">
            <div class="row col-lg-9 mx-auto shadow-lg p-5">
                <div class="mb-3 col-md-6 mx-auto">
                    <label for="name" class="form-label">Name</label>
                    <input v-model="form.name" type="text" class="form-control" id="name" placeholder="Name">
                </div>
                <div class="clearfix"></div>
                <div class="mb-3 col-md-6 mx-auto">
                    <button type="submit" class="btn btn-primary w-100">Save</button>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
import ApiService          from "@/services/api.service";
import JwtService          from "@/services/jwt.service";
import NotificationService from "@/services/notification.service";

export default {
    name   : "CategoryCreate",
    data   : () => ({
        errors: [],
        form  : {
            name: '',
        }
    }),
    methods: {
        store() {
            ApiService.post('/categories', this.form).then((res) => {
                this.errors = [];
                this.$router.push({name: "CategoryList"});
                NotificationService.success(res.data.message);
            }).catch(error => {
                this.errors = error.response.data.errors;
                NotificationService.error(error.response.data.message);
            });
        }
    }
}
</script>

<style scoped>

</style>
