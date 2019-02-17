<template>
  <div class="layout-page">
    <div class="layout-content">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {

    };
  },
  methods: {

  }
};
</script>
<style lang="less" scoped>
  .layout-page{
    .layout-content{
      padding: 0 20px;
    }
  }
</style>
