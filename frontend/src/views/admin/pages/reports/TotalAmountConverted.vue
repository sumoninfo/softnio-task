<template>
  <div>
    <div
        class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
      <h1 class="h2">The total amount converted for a particular user</h1>
    </div>
    <div class="row">
      <div class="col-md-12 col-lg-12">
        <div>
          <div class="table-responsive">
            <table class="table table-striped table-hover">
              <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">User</th>
                <th scope="col">Amount</th>
              </tr>
              </thead>
              <tbody>
              <template v-if="lists.length">
                <tr v-for="(list, index) in lists">
                  <th scope="row">{{ table.pagination.from + index }}</th>
                  <td>{{ list.name }}</td>
                  <td>{{ list.currency }}: {{ list.amount | numberFormat }}</td>
                </tr>
              </template>
              <template v-if="!lists.length">
                <tr>
                  <th class="text-center font-weight-bolder" colspan="100%">No data found</th>
                </tr>
              </template>
              </tbody>
            </table>
          </div>
        </div>
        <pagination v-if="lists.length>0" :pagination="table.pagination" @paginate="getList()" :offset="5"/>

      </div>
    </div>
  </div>
</template>

<script>
import ApiService          from "@/services/api.service";
import NotificationService from "@/services/notification.service";
import Pagination          from "@/components/Pagination";

export default {
  name      : "TransactionIndex",
  components: {Pagination},
  data      : () => ({
    lists : [],
    errors: [],
    table : {
      per_page  : 10,
      search    : '',
      pagination: {
        current_page: 1
      }
    }
  }),
  mounted() {
    this.getList();
  },
  methods: {
    getList() {
      let params = {
        ...this.table,
        page: this.table.pagination.current_page,
      };
      ApiService.get('/reports/total-amount-converted', {params: params}).then((res) => {
        this.lists            = res.data.data;
        this.table.pagination = res.data.meta;
      }).catch(error => {
        NotificationService.error(error.response.data.message);
      })
    },
  }
}
</script>

<style scoped>

</style>