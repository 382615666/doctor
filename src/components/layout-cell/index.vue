<template>
  <div class="layout-cell-component"
       :style="{
        color
       }"
  >
    <span class="cell-title" :style="{
      color: titleColor
    }">{{title}}：</span>
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'LayoutCell',
  data () {
    return {

    };
  },
  props: {
    titleColor: {
      type: String,
      default: ''
    },
    color: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    }
  },
  methods: {

  }
};
</script>
<style lang="less" scoped>
  .layout-cell-component{
    line-height: 1.5;
    padding: 10px 0;
    & + .layout-cell-component{
      border-top: 1px solid #e5e5e5;
    }
    .cell-title{
      color: #333;
    }
  }
</style>
