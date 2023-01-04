<template>
  <date-picker :class="class_name" value-type="YYYY-MM-DD" v-model="$parent.form[v_model]" format="DD-MMM-YYYY"
               :disabled-date="disabled_date" :inline="inline" :placeholder="`${title}`"/>
</template>

<script>
import DatePicker from 'vue2-datepicker';
import 'vue2-datepicker/index.css';

export default {
  name      : "DatePickerComponent",
  components: {DatePicker},
  props     : {
    inline       : {
      type   : Boolean,
      default: false
    },
    class_name   : {default: ''},
    title        : {
      type   : String,
      default: "Date"
    },
    v_model      : {
      type   : String,
      default: "date"
    },
    disabled_date: {}
  },
}
</script>
<style scoped>
.mx-datepicker {
  width: 100%;
}
</style>