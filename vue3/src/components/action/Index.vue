<template>
    <router-link title="Index" :to="{ name: to_name}" class="btn btn-primary w-100">
        <i class="fa fa-list-alt"></i> {{ title }} List
    </router-link>
</template>

<script>
export default {
  name : "IndexAction",
  props: ['to_name', 'title']
}
</script>
