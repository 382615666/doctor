<template>
  <div class="layout-simple-component">
    <p class="simple-title">{{title}}：</p>
    <div class="simple-content">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'LayoutSimple',
  data () {
    return {

    };
  },
  props: {
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
  .layout-simple-component{
    padding: 10px;
    &+.layout-simple-component{
      border-top: 1px solid #e0e0e0;
    }
    .simple-title{
      color: #32c691;
      line-height: 2;
    }
    .simple-content{
      line-height: 1.8;
    }
  }
</style>
