<template>
  <div class="error-page">
    <img :src="errorImg" alt="" class="error-img">
  </div>
</template>
<script>
import errorImg from '@/assets/image/error.png';
export default {
  data () {
    return {
      errorImg
    };
  },
  created () {
  },
  methods: {

  }
};
</script>
<style lang="less" scoped>
  .error-page{

  }
</style>
<style lang="less">
  .error-page{
    text-align: center;
    padding-top: 100px;
    .error-img{
      width: 80%;
    }
  }
</style>
