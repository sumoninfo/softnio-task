<template>
  <div>
    <div
        class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
      <h1 class="h2">Dashboard</h1>
    </div>
    <div class="row">

    </div>
  </div>
</template>

<script>
export default {
  name    : "AdminDashboard",
  data    : () => ({
    dashboard: {
      most_conversion_user: {},
      total_users         : 0,
      total_transactions  : 0,
    }
  }),
}
</script>
