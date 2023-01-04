<template>
  <div>
    <div
        class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
      <h1 class="h2">Dashboard</h1>
    </div>
    <div class="row">

      <!-- Most Conversion User -->
      <div class="col-xl-4 col-md-6 mb-4">
        <div class="card border-left-primary shadow h-100 py-2">
          <div class="card-body">
            <div class="row no-gutters align-items-center">
              <div class="col mr-2">
                <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">
                  Most Conversion User
                </div>
                <div class="h5 mb-0 font-weight-bold text-gray-800" v-if="dashboard.most_conversion_user && dashboard.most_conversion_user.total_amount">
                  {{ dashboard.most_conversion_user.name }}<br>
                  <small>{{ dashboard.most_conversion_user.total_amount | numberFormat }} {{ dashboard.most_conversion_user.currency }} </small>
                </div>
              </div>
              <div class="col-auto">
                <i class="fas fa-user fa-2x text-gray-300"></i>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Total Users -->
      <div class="col-xl-4 col-md-6 mb-4">
        <div class="card border-left-success shadow h-100 py-2">
          <div class="card-body">
            <div class="row no-gutters align-items-center">
              <div class="col mr-2">
                <div class="text-xs font-weight-bold text-success text-uppercase mb-1">
                  Total Users
                </div>
                <div class="h5 mb-0 font-weight-bold text-gray-800">{{ dashboard.total_users }}</div>
              </div>
              <div class="col-auto">
                <i class="fas fa-users fa-2x text-gray-300"></i>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Earnings (Monthly) Card Example -->
      <div class="col-xl-4 col-md-6 mb-4">
        <div class="card border-left-info shadow h-100 py-2">
          <div class="card-body">
            <div class="row no-gutters align-items-center">
              <div class="col mr-2">
                <div class="text-xs font-weight-bold text-info text-uppercase mb-1">
                  Total transactions
                </div>
                <div class="row no-gutters align-items-center">
                  <div class="col-auto">
                    <div class="h5 mb-0 mr-3 font-weight-bold text-gray-800">{{ dashboard.total_transactions }}</div>
                  </div>
                </div>
              </div>
              <div class="col-auto">
                <i class="fas fa-dollar-sign fa-2x text-gray-300"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState}          from "vuex";
import ApiService          from "@/services/api.service";
import NotificationService from "@/services/notification.service";

export default {
  name    : "AdminDashboard",
  data    : () => ({
    dashboard: {
      most_conversion_user: {},
      total_users         : 0,
      total_transactions  : 0,
    }
  }),
  computed: {
    ...mapState({
      user: state => state.auth.user
    }),
  },
  mounted() {
    this.getDashboardData();
  },
  methods: {
    getDashboardData() {
      ApiService.get('/reports/dashboard-data').then(response => {
        this.dashboard = response.data;
      }).catch(error => {
        console.log(error, 'error')
      })
    }
  }
}
</script>
