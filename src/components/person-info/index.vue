<template>
  <div class="person-info-component">
    <img :src="avator" alt="" class="avator">
    <div class="info-item-box">
      <span class="info-item">唐悠悠</span>
      <span class="info-item">男</span>
      <span class="info-item">28岁</span>
    </div>
    <p class="info-item-box">身份证：130221***115</p>
  </div>
</template>
<script>
import avator from '@/assets/image/avator.png';
export default {
  name: 'PersonInfo',
  data () {
    return {
      avator
    };
  },
  methods: {

  }
};
</script>
<style lang="less" scoped>
  .person-info-component{
    padding: 13px 15px 13px 80px;
    height: 50px;
    background: #32c691;
    .avator{
      width: 50px;
      height: 50px;
      position: absolute;
      margin-left: -65px;
    }
    .info-item-box{
      color: #fff;
      line-height: 25px;
      .info-item{
        &:first-child{
          font-size: 19px;
        }
        &+.info-item{
          margin-left: 25px;
        }
      }
    }
  }
</style>
