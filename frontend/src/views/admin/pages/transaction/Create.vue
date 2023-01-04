<template>
  <div>
    <div
        class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
      <h1 class="h2">Create Transaction</h1>
    </div>
    <form @submit.prevent="store()">
      <div class="row col-lg-9 mx-auto shadow-lg p-5">
        <div class="mb-3 col-md-6 mx-auto text-center">
          <label class="form-label">From <span class="badge bg-primary"> {{ user.currency }}</span> Currency: </label>
        </div>
        <div class="clearfix"></div>
        <div class="mb-3 col-md-6">
          <label for="user_id" class="form-label">Account holder</label>
          <drop-down :class_name="{ 'is-invalid': errors['user_id'] }" title="User" v_model="user"/>
          <div v-if="errors['user_id']" class="invalid-feedback">
            {{ errors['user_id'][0] }}
          </div>
        </div>
        <div class="mb-3 col-md-6">
          <label for="date" class="form-label">Date</label>
          <DatePickerComponent title="Date" v_model="date"/>
        </div>
        <div class="mb-3 col-md-6 mx-auto">
          <label for="amount" class="form-label">Amount</label>
          <input v-model="form.amount" type="number" class="form-control" id="amount" placeholder="0.00">
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
import DatePickerComponent from "@/components/picker/DatePicker";
import DropDown            from "@/components/dropdown/DropDown";
import moment              from "moment";
import ApiService          from "@/services/api.service";
import JwtService          from "@/services/jwt.service";
import NotificationService from "@/services/notification.service";
import {mapState}          from "vuex";

export default {
  name      : "TransactionCreate",
  components: {DatePickerComponent, DropDown},
  data      : () => ({
    errors: [],
    form  : {
      user  : '',
      date  : moment(new Date()).format("YYYY-MM-DD"),
      amount: '',
    }
  }),
  computed  : {
    ...mapState({
      user: state => state.auth.user
    }),
  },
  methods   : {
    store() {
      ApiService.post('/transactions', this.form).then((res) => {
        this.errors = [];
        this.$router.push({name: "TransactionList"});
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