<template>
   <div
    class="content"
   >
    <div
      class="right"
    >
      <div
        v-for="(item, index) in options"
        :key="index"
        class="label"
        @click="selectItem(item)"
      >
        {{ item.label }}
      </div>
    </div>
    <div
      class="left"
      v-if="ruleList && ruleList.length"
    >
      <cander-itme
        :level="level + 1"
        :options="ruleList"
        :value="value"
      >
      </cander-itme>
    </div>
   </div>
</template>
<script>
import { cloneDeep } from 'lodash'
export default {
   name: 'canderItme',
   data () {
       return {
           currentItme: null,
       }
   },
   computed: {
       ruleList () {
           return this.value[this.level] && this.value[this.level].children
       }
   },
   watch: {
     ruleList (value) {
       console.log(value);
     }
   },
   props: {
     level: {
       type: Number
     },
     options: {
         type: Array,
         default: () => []
     },
     value: {
       type: Array,
       default: () => []
     }
   },
   methods: {
     selectItem (value) {
         let cloneData = cloneDeep(this.value);
         cloneData.splice(this.level + 1);
         cloneData[this.level] = value;
         this.$emit('change', cloneData)
     }
   }
}
</script>
<style lang="less" scoped>
   .content {
     display: flex;
     .right {
        max-height: 150px;
        min-height: 150px;
        overflow-y: auto;
        width: 100px;
        .label {
            padding-left: 5px;
        }
        .label:hover {
            background-color: #ccc;
        }       
      }
   }
</style>