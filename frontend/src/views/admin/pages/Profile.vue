<template>
  <div>
    <div
        class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
      <h1 class="h2">Dashboard</h1>
    </div>
    <div class="row">
      <div class="col-md-offset-2 col-md-8 col-lg-offset-3 col-lg-6">
        <div class="well profile">
          <div class="col-sm-12">
            <div class="col-xs-12 col-sm-8">
              <h2>{{ user.name }}</h2>
              <p><strong>Email: </strong> {{ user.email }} </p>
              <p><strong>Phone: </strong> {{ user.phone }} </p>
              <p><strong>Currency: </strong> <span class="badge bg-primary">{{ user.currency }}</span> </p>
              <p><strong>Date of birth: </strong> {{ user.date_of_birth | dateFormat }} </p>
              <p><strong>Address: </strong> {{ user.address }} </p>
              <p><strong>Gender: </strong> {{ user.gender }} </p>
              <p><strong>Created At: </strong> {{ user.created_at | dateFormat }} </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from "vuex";

export default {
  name    : "AdminDashboard",
  data    : () => ({}),
  computed: {
    ...mapState({
      user: state => state.auth.user
    }),
  },
}
</script>
