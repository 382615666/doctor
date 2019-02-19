<template>
  <div class="person-info-component">
    <img :src="avator" alt="" class="avator">
    <div class="info-item-box">
      <span class="info-item">{{data.xm}}</span>
      <span class="info-item">{{data.xb}}</span>
      <span class="info-item">{{data.nl}}岁</span>
      <span class="info-item">科室：{{data.ks}}</span>
    </div>
    <p class="info-item-box" v-if="card">身份证：{{data.sfzh}}</p>
    <p class="info-item-box" v-if="!card">病案号：{{data.bah}}&nbsp;&nbsp;住院号：{{data.inHospitalId}}</p>
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
  props: {
    data: {
      type: Object,
      default () {
        return {};
      }
    },
    card: {
      type: Boolean,
      default: true
    }
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
          margin-left: 20px;
        }
      }
    }
  }
</style>
