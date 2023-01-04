<template>
  <router-link class="btn btn-secondary" :to="{ name: to_name, params: { id: id }}">
    <i class="fa fa-eye"></i>
  </router-link>
</template>

<script>
export default {
  name : "ViewAction",
  props: ['to_name', 'id']
}
</script>

<style scoped>

</style>
