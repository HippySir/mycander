<template>
  <div id="app">
    <cander
      :options="options"
      :lazy="lazy"
      v-model="value"
    >
   </cander>
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
    console.log(listData);
    this.getData(0).then(res => {
      this.options = res;
    })
  },
  data() {
    return {
      options: formData,
      listData: listData,
      value: []
    }
  },
  methods: {
    getData (id) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          let filterData = listData.filter(item => item.pid === id);
          if (filterData && filterData.length) {
            resolve(filterData);
          } else {
            reject(new Error(filterData));
          }
        }, 1000);
      })
    },
    async lazy (id, callback) {
      let res = await this.getData(id);
      callback(res);
    }
  }
}
</script>
<style>

</style>
