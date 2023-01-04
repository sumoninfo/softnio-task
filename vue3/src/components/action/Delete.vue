<template>
  <button title="Delete" @click="$parent.destroy(id)" type="button" class="btn btn-danger w-100"><i class="fa fa-trash"></i></button>
</template>

<script>
export default {
  name : "DeleteAction",
  props: ['id']
}
</script>
