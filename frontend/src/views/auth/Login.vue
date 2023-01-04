<template>
  <div id="login-section" class="align-items-center d-flex">
    <div class="container">
      <div class="row justify-content-center">
        <div class="bg-opacity-25 bg-primary border border-primary col-5 my-5 p-5 rounded">
          <form @submit.prevent="login()" class="needs-validation" novalidate>
            <h3 class="text-center mb-4 text-primary">Login</h3>
            <div class="mb-3">
              <input v-model="form.email" type="email" class="form-control text-center"
                     :class="{ 'is-invalid': errors['email'] }"
                     id="email" required placeholder="USERNAME">
              <div v-if="errors['email']" class="invalid-feedback">
                {{ errors['email'][0] }}
              </div>
            </div>
            <div class="mb-3">
              <input v-model="form.password" type="password" class="form-control text-center"
                     :class="{ 'is-invalid': errors['password'] }" id="password" required placeholder="PASSWORD">
              <div v-if="errors['password']" class="invalid-feedback">
                {{ errors['password'][0] }}
              </div>
            </div>
            <div class="col-12">
              <button type="submit" class="btn btn-primary w-100 text-light">Login</button>
            </div>
            <div v-if="errors_message" class="invalid-feedback d-block text-center">
              {{ errors_message }}
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ApiService          from "@/services/api.service";
import JwtService          from "@/services/jwt.service";
import NotificationService from "@/services/notification.service";

export default {
  name   : "Login",
  data   : () => ({
    form          : {
      email   : "",
      password: ""
    },
    errors        : [],
    errors_message: '',
  }),
  methods: {
    login() {
      ApiService.post('/login', this.form).then((res) => {
        this.errors         = [];
        this.errors_message = '';
        JwtService.saveToken(res.data.access_token);
        localStorage.setItem("expires_at", res.data.expires_at);
        ApiService.init();
        this.$router.push({name: "AdminDashboard"});
        NotificationService.success(res.data.message);
      }).catch(error => {
        this.errors_message = error.response.data.message;
        this.errors         = error.response.data.errors;
        NotificationService.error(error.response.data.message);
      });
    }
  }
};
</script>
