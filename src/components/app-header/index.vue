<template>
  <div class="app-header-component">
    <div class="app-header-wrap">
      <a href="/backToApp.action?module=TO_WJJ_FOLLOW_UP" style="color: #666;"
         v-if="!$route.meta.route"
      >
        <icon class="icon-arrow-copy"></icon>
      </a>
      <icon v-if="$route.meta.route" class="icon-arrow-copy" @click.native="back"></icon>
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
  },
  methods: {
    back () {
      this.$router.back();
    }
  }
};
</script>
<style lang="less" scoped>
  .app-header-component{
    height: 44px;
    .app-header-wrap{
      height: 44px;
      line-height: 44px;
      background: #0079fb;
      font-size: 18px;
      text-align: center;
      position: fixed;
      color: #fff;
      left: 0;
      right: 0;
      top: 0;
      z-index: 1;
    }
    .icon-arrow-copy{
      left: 0;
      color: #fff;
    }
  }
</style>
<style lang="less">
  .app-header-component{
    .iconfont{
      width: 40px;
      position: absolute;
    }
  }
</style>
