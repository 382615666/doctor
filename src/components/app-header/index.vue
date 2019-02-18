<template>
  <div class="app-header-component" :class="{
    border
  }">
    <div class="app-header-wrap">
      <i class="iconfont icon-ren1" @click="$router.back()"></i>
      {{$route.meta.title}}
    </div>
  </div>
</template>
<script>
export default {
  name: 'AppHeader',
  data () {
    return {

    };
  },
  props: {
    border: {
      type: Boolean,
      border: true
    }
  },
  methods: {

  }
};
</script>
<style lang="less" scoped>
  .app-header-component{
    height: 44px;
    .app-header-wrap{
      height: 43px;
      line-height: 43px;
      background: #f9f9f9;
      font-size: 18px;
      text-align: center;
      position: fixed;
      left: 0;
      right: 0;
      top: 0;
      &.border{
        border-bottom: 1px solid #e6e6e6;
      }
    }
    .iconfont{
      width: 40px;
      position: absolute;
    }
    .icon-ren1{
      left: 0;
    }
  }
</style>
