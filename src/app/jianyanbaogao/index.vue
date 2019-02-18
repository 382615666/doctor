<template>
  <div class="jianyanbaogao-page">
    <person-info></person-info>
    <div class="report-box">
      <report-list time="2018/01/02" title="浏阳市中心医院">
        <report-item
                icon="icon-weixin"
                remark="肾内科六科室"
                @click.native="toggleRoute('jianyanbaogaoxiangqing')">尿常规（11项）</report-item>
        <report-item
                icon="icon-weixin"
                remark="肾内科六科室"
                @click.native="toggleRoute('jianyanbaogaoxiangqing')">尿沉渣定量</report-item>
      </report-list>
      <report-list time="2018/01/02" title="浏阳市中心医院">
        <report-item
                icon="icon-weixin"
                remark="肾内科六科室"
                @click.native="toggleRoute('jianyanbaogaoxiangqing')">尿常规（11项）</report-item>
        <report-item
                icon="icon-weixin"
                remark="肾内科六科室"
                @click.native="toggleRoute('jianyanbaogaoxiangqing')">尿沉渣定量</report-item>
      </report-list>
      <report-list time="2018/01/02" title="浏阳市中心医院">
        <report-item
                icon="icon-weixin"
                remark="肾内科六科室"
                @click.native="toggleRoute('jianyanbaogaoxiangqing')">尿常规（11项）</report-item>
        <report-item
                icon="icon-weixin"
                remark="肾内科六科室"
                @click.native="toggleRoute('jianyanbaogaoxiangqing')">尿沉渣定量</report-item>
      </report-list>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {

    };
  },
  mounted () {
    document.body.style.background = '#f9f9f9';
  },
  destroyed () {
    document.body.style.background = '';
  },
  created () {
    this.getData();
  },
  methods: {
    getData () {
      this.$api.jianyanbaogao.get({
        orgCode: '445013138', // 医院id
        inHospitalId: 1,// 住院号
        pageSize: 10,
        pageNo: 1
      });
    },
    toggleRoute(path) {
      this.$router.push(path);
    }
  }
};
</script>
<style lang="less" scoped>
  .jianyanbaogao-page{
    .report-box{
      padding: 0 10px;
    }
  }
</style>
