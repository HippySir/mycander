<template>
    <div
      class="cander"
      v-out-side-clice="close"
    >
        <div
          class="title"
          @click="toggle"
        >
          {{ title }}
        </div>
        <cander-item
            :level="0"
            :value="value"
            v-if="isShow"
            :options="options"
            @change="change"
        >
        </cander-item>
    </div>
</template>
<script>
import { outSideClice } from '../directives.js'
import CanderItem from './CanderItem.vue'
export default {
    components: {
        CanderItem
    },
    props: {
        options: {
            type: Array,
            default: () => []
        },
        value: {
            type: Array,
            default: () => []
        }
    },
    directives: {
        outSideClice
    },
    data () {
        return {
            isShow: false
        }
    },
    computed: {
      title () {
          return this.value.map(item => item.label).join('/')
      }  
    },
    methods: {
        change (value) {
            this.$emit("input", value);
        },
        toggle () {
          this.isShow = !this.isShow;
        },
        close () {
           this.isShow = false;
        }
    }
}
</script>
<style lang="less" scoped>
    .cander {
        display: inline-block;
        .title {
            line-height: 30px;
            width: 150px;
            height: 30px;
            border: 1px solid #ccc;
        }
    }
</style>