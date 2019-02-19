<template>
  <div class="jianchabaogaoxiangqing-page">
    <div class="info-box">
      <p class="info-item-text">检查科室：脊柱外科</p>
      <p class="info-item-text">检查日期：2018-01-01</p>
      <p class="info-item-text">门诊/住院号：00056960_1</p>
      <p class="info-item-text">审核者：谢驰</p>
      <p class="info-item-text">医师签名：王权</p>
      <p class="info-item-text">报告医师：张凯</p>
      <p class="info-item-text">报告日期：2018-01-01</p>
    </div>
    <layout-simple title="影响表现">
      颈椎生理曲度轻度反凸，C3-6椎体边缘增生变减，诸椎间盘信号未见异常，颈椎生理曲度轻度反凸，C3-6椎体边缘增生变减，诸椎间盘信号未见异常颈椎生理曲度轻度反凸，C3-6椎体边缘增生变减，诸椎间盘信号未见异常颈椎生理曲度轻度反凸，C3-6椎体边缘增生变减，诸椎间盘信号未见异常。
    </layout-simple>
    <layout-simple title="影像意见" :style="{
      color: '#333'
    }">
      颈椎病
    </layout-simple>
  </div>
</template>
<script>
export default {
  data () {
    return {

    };
  },
  methods: {
    getData () {
      this.page.pageNo++;
      this.$api.jianchabaogao.get({
        orgCode: '445013138', // 医院id
        inHospitalId: 1, // 住院号
        pageSize: 10,
        pageNo: this.page.pageNo
      }).then(data => {
        this.patientInfo = data.data.patientInfo;
        this.listData = [...this.listData, ...data.data.list];
        this.loading = this.page.pageNo >= data.totalPage;
      });
    },
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
