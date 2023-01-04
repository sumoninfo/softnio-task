<template>
  <router-link :title="title" :to="{ name: to_name}" class="btn btn-primary">
    <i class="fas fa-plus-square"></i>
    Add New
  </router-link>
</template>

<script>
export default {
  name : "CreateAction",
  props: ['to_name', 'title']
}
</script>
