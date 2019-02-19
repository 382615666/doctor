<template>
  <div class="chuyuanjilu-page">
    <person-info :data="patientInfo" :card="false"></person-info>
    <div class="info-box">
      <layout-cell title="入院日期" title-color="#32c691" color="#333">{{info.ryrq}}</layout-cell>
      <layout-cell title="出院日期" title-color="#32c691" color="#333">{{info.cyrq}}</layout-cell>
      <layout-cell title="住院天数" title-color="#32c691" color="#333">{{info.zyts}}天</layout-cell>
      <layout-cell title="入院诊断" title-color="#32c691" color="#333">{{info.ryzd}}</layout-cell>
      <layout-cell title="入院情况" title-color="#32c691" color="#333">{{info.ryqk}}</layout-cell>
      <layout-cell title="住院经过" title-color="#32c691" color="#333">{{info.zyjg}}</layout-cell>
      <layout-cell title="出院情况" title-color="#32c691" color="#333">{{info.cyqk}}</layout-cell>
      <layout-cell title="出院诊断" title-color="#32c691" color="#333">{{info.cyzd}}</layout-cell>
      <layout-cell title="出院医嘱" title-color="#32c691" color="#333">{{info.cyyz}}</layout-cell>
      <layout-cell title="住院医师" title-color="#32c691" color="#333">{{info.zyys}}</layout-cell>
      <layout-cell title="上级医师" title-color="#32c691" color="#333">{{info.sjys}}</layout-cell>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      page: {
        pageNo: 0
      },
      patientInfo: {},
      info: {}
    };
  },
  created () {
    this.getData();
  },
  methods: {
    getData () {
      this.$api.chuyuanjilu.get({
        orgCode: '445013138', // 医院id
        inHospitalId: 1 // 住院号
      }).then(data => {
        this.info = data;
        this.patientInfo = data.patientInfo;
      });
    }
  }
};
</script>
<style lang="less" scoped>
  .chuyuanjilu-page{

  }
</style>
<style lang="less">
  .chuyuanjilu-page{
    .info-box{
      padding: 0 10px
    }
  }
</style>
