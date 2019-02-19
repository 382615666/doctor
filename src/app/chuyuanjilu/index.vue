<template>
  <div class="chuyuanjilu-page">
    <person-info :data="patientInfo" :card="false"></person-info>
    <div class="info-box">
      <layout-cell title="入院日期" title-color="#32c691" color="#333">2018-01-01</layout-cell>
      <layout-cell title="出院日期" title-color="#32c691" color="#333">2018-01-01</layout-cell>
      <layout-cell title="住院天数" title-color="#32c691" color="#333">5天</layout-cell>
      <layout-cell title="入院诊断" title-color="#32c691" color="#333">普通门诊</layout-cell>
      <layout-cell title="入院情况" title-color="#32c691" color="#333">普通门诊普通门诊普通门诊普通门诊普通门诊普通门诊普通门诊普通门诊</layout-cell>
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
      patientInfo: {}
    };
  },
  created () {
    this.getData();
  },
  methods: {
    getData () {
      this.page.pageNo++;
      this.$api.jianyanbaogao.get({
        orgCode: '445013138', // 医院id
        inHospitalId: 1, // 住院号
        pageSize: 10,
        pageNo: this.page.pageNo
      }).then(data => {
        this.patientInfo = data.data.patientInfo;
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
