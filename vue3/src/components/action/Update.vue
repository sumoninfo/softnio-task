<template>
    <span>
        <button title="Edit" v-if="type == 'modal'" @click="$parent.edit(id)" type="button" class="btn btn-primary w-100"><i class="fa fa-edit"></i></button>
        <router-link title="Edit" class="btn btn-primary w-100" v-else :to="{ name: to_name, params: params}">
           <i class="fa fa-edit"></i>
        </router-link>
    </span>
</template>

<script>
export default {
  name : "UpdateAction",
  props: ['to_name', 'params', 'id', 'type']
}
</script>
