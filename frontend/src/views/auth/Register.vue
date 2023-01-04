<template>
  <div id="login-section" class="align-items-center d-flex">
    <div class="container">
      <div class="row justify-content-center">
        <div class="bg-opacity-25 bg-primary border border-primary col-5 my-5 p-5 rounded">
          <form @submit.prevent="register()" class="needs-validation" novalidate>
            <h3 class="text-center mb-4 text-primary">Register</h3>
            <div class="mb-3">
              <input v-model="form.name" type="text" class="form-control "
                     :class="{ 'is-invalid': errors['name'] }"
                     id="name" required placeholder="NAME">
              <div v-if="errors['name']" class="invalid-feedback">
                {{ errors['name'][0] }}
              </div>
            </div>
            <div class="mb-3">
              <input v-model="form.email" type="email" class="form-control "
                     :class="{ 'is-invalid': errors['email'] }"
                     id="email" required placeholder="EMAIL">
              <div v-if="errors['email']" class="invalid-feedback">
                {{ errors['email'][0] }}
              </div>
            </div>
            <div class="mb-3">
              <input v-model="form.phone" type="number" class="form-control "
                     :class="{ 'is-invalid': errors['phone'] }"
                     id="phone" required placeholder="PHONE">
              <div v-if="errors['phone']" class="invalid-feedback">
                {{ errors['phone'][0] }}
              </div>
            </div>
            <div class="mb-3">
              <select :class="{ 'is-invalid': errors['currency'] }" id="currency" v-model="form.currency" type="number"
                      class="form-control ">
                <option value="USD">USD</option>
                <option value="BDT">BDT</option>
                <option value="EUR">EUR</option>
                <option value="GBP">GBP</option>
                <option value="INR">INR</option>
                <option value="AUD">AUD</option>
                <div v-if="errors['currency']" class="invalid-feedback">
                  {{ errors['currency'][0] }}
                </div>
              </select>
            </div>
            <div class="mb-3">
              <select :class="{ 'is-invalid': errors['gender'] }" id="gender" v-model="form.gender" type="number"
                      class="form-control ">
                <option value="">Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
                <div v-if="errors['gender']" class="invalid-feedback">
                  {{ errors['gender'][0] }}
                </div>
              </select>
            </div>
            <div class="mb-3">
              <textarea v-model="form.address" class="form-control "
                        :class="{ 'is-invalid': errors['address'] }"
                        id="address" placeholder="Address"></textarea>
              <div v-if="errors['address']" class="invalid-feedback">
                {{ errors['address'][0] }}
              </div>
            </div>
            <div class="mb-3">
              <input v-model="form.password" type="password" class="form-control "
                     :class="{ 'is-invalid': errors['password'] }" id="password" required placeholder="PASSWORD">
              <div v-if="errors['password']" class="invalid-feedback">
                {{ errors['password'][0] }}
              </div>
            </div>
            <div class="mb-3">
              <input v-model="form.confirm_password" type="password" class="form-control "
                     :class="{ 'is-invalid': errors['confirm_password'] }" id="confirm_password" required
                     placeholder="CONFIRM PASSWORD">
              <div v-if="errors['confirm_password']" class="invalid-feedback">
                {{ errors['confirm_password'][0] }}
              </div>
            </div>
            <div class="col-12">
              <button type="submit" class="btn btn-primary w-100 text-light">Register</button>
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
import DatePickerComponent from "@/components/picker/DatePicker";

export default {
  name   : "Register",
  data   : () => ({
    form  : {
      name            : "",
      email           : "",
      phone           : "",
      date_of_birth   : "",
      currency        : "USD",
      gender          : "",
      address         : "",
      password        : "",
      confirm_password: ""
    },
    errors: [],
  }),
  methods: {
    register() {
      ApiService.post('/register', this.form).then((res) => {
        this.errors = []
        JwtService.saveToken(res.data.access_token);
        localStorage.setItem("expires_at", res.data.expires_at);
        ApiService.init();
        this.$router.push({name: "AdminDashboard"});
        NotificationService.success(res.data.message);
      }).catch(error => {
        this.errors = error.response.data.errors;
        NotificationService.error(error.response.data.message);
      });
    }
  }
};
</script>
