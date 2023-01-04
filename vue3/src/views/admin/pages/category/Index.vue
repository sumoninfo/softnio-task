<template>
  <div>
    <div
        class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
      <h1 class="h2">Categories</h1>
    </div>
    <div class="row">
      <div class="col-md-12 col-lg-12">
        <div class="row">
          <div class="col-md-7">
            <div class="col-auto">
              <create-action to_name="CategoryCreate" title="Category"/>
            </div>
          </div>
          <div class="col-md-5">
            <form @submit.prevent="getList()">
              <div class="mb-3 row">
                <div class="col-sm-8 ms-auto">
                  <input v-model="table.search" type="text" class="form-control mb-3"
                         placeholder="Searching...">
                </div>
                <div class="col-sm-4">
                  <input type="submit" class="btn btn-primary w-100" value="Searching">
                </div>
              </div>
            </form>
          </div>
        </div>
        <div>
          <div class="table-responsive">
            <table class="table table-striped table-hover">
              <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col" style="width: 80px;">Action</th>
              </tr>
              </thead>
              <tbody>
              <template v-if="lists.length">
                <tr v-for="(list, index) in lists">
                  <th scope="row">{{ table.pagination.from + index }}</th>
                  <td> {{ list.name }}<br>
                  </td>
                  <td>
                    <delete-action :id="list.id"/>
                  </td>
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
  name      : "CategoryIndex",
  components: {Pagination},
  data      : () => ({
    lists : [],
    errors: [],
    form  : {
      name: ''
    },
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
      ApiService.get('/categories', {params: params}).then((res) => {
        this.lists            = res.data.data;
        this.table.pagination = res.data.meta;
      }).catch(error => {
        NotificationService.error(error.response.data.message);
      })
    },
    destroy(id) {
      Swal.fire({
        title             : 'Are you sure?',
        text              : "You won't be able to revert this!",
        icon              : 'warning',
        showCancelButton  : true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor : '#d33',
        confirmButtonText : 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          ApiService.delete(`/categories/${id}`,).then(res => {
            this.getList();
            NotificationService.success(res.data.message);
          }).catch(error => {
            NotificationService.error(error.response.data.message);
          })
        }
      }).catch(error => {
        NotificationService.error(error.response.data.message);
      })
    },
  }
}
</script>

<style scoped>

</style>
