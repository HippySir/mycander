<template>
  <div id="app">
    <cander :options="options" v-model="value"></cander>
  </div>
</template>

<script>
import Cander from './components/Cander.vue'
import { formData, listData } from './mytest'
export default {
  name: 'App',
  components: {
    Cander
  },
  created() {
  },
  data() {
    return {
      options: formData,
      listData: listData,
      value: []
    }
  },
}
</script>

<style>

</style>
