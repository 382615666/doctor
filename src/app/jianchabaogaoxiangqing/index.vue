<template>
  <div class="jianchabaogaoxiangqing-page">
    <div class="info-box">
      <p class="info-item-text">科室：{{info.patientInfo.ks}}</p>
      <p class="info-item-text">检查日期：{{info.jcrq}}</p>
      <p class="info-item-text">门诊/住院号：{{info.patientInfo.inHospitalId}}</p>
      <p class="info-item-text">检查部位：{{info.jcbw}}</p>
      <p class="info-item-text">审核者：{{info.shz}}</p>
      <p class="info-item-text">医师签名：{{info.ysqm}}</p>
      <p class="info-item-text">报告医师：{{info.bgys}}</p>
      <p class="info-item-text">报告日期：{{info.bgrq}}</p>
    </div>
    <layout-simple title="影像表现">
      {{info.yxbx}}
    </layout-simple>
    <layout-simple title="影像意见" :style="{
      color: '#333'
    }">
      {{info.yxyj}}
    </layout-simple>
  </div>
</template>
<script>
export default {
  data () {
    return {
      info: {}
    };
  },
  created () {
    this.getData();
  },
  methods: {
    getData () {
      this.$api.jianchabaogaoxiangqing.get(this.$route.query).then(data => {
        this.info = data;
      });
    }
  }
};
</script>
<style lang="less" scoped>
  .jianchabaogaoxiangqing-page{
    padding: 0 10px;
    .info-box{
      padding: 10px;
      border-bottom: 1px solid #e0e0e0;
      line-height: 2;
    }
  }
</style>
<style lang="less">
  .jianchabaogaoxiangqing-page{

  }
</style>
