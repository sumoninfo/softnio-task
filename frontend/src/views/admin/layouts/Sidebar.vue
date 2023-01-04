<template>
  <nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
    <div class="position-sticky pt-3">
      <ul class="nav flex-column">
        <li class="nav-item">
          <router-link :to="{name:'AdminDashboard'}" class="nav-link active">
            <i class="fas fa-home"></i>
            Dashboard
          </router-link>
        </li>
        <li class="nav-item">
          <router-link :to="{name:'Profile'}" class="nav-link active">
            <i class="fas fa-user"></i>
            Profile
          </router-link>
        </li>
        <li class="nav-item">
          <router-link :to="{name:'TransactionList'}" class="nav-link active">
            <i class="fas fa-list"></i>
            Transaction
          </router-link>
        </li>
        <li class="nav-item">
          <router-link :to="{name:'TotalAmountConvertedReport'}" class="nav-link active">
            <i class="fas fa-chart-area"></i>
            Total Amount Converted Report
          </router-link>
        </li>
        <li class="nav-item">
          <router-link :to="{name:'ThirdHighestAmountReport'}" class="nav-link active">
            <i class="fas fa-chart-bar"></i>
            Third Highest Amount Report
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>

export default {
  name: 'Sidebar',
  data() {
    return {}
  },
}
</script>
