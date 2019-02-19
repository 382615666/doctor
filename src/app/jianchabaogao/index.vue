<template>
  <div class="jianchabaogao-page">
    <person-info :data="patientInfo"></person-info>
    <div class="report-box">
      <report-list time="2018/01/02" title="浏阳市中心医院">
        <report-item
                icon="icon-big-Pay"
                remark="肾内科六科室"
                @click.native="toggleRoute('jianchabaogaoxiangqing')">尿常规（11项）</report-item>
        <report-item
                icon="icon-big-Pay"
                remark="肾内科六科室"
                @click.native="toggleRoute('jianchabaogaoxiangqing')">尿沉渣定量</report-item>
      </report-list>
      <report-list time="2018/01/02" title="浏阳市中心医院">
        <report-item
                icon="icon-big-Pay"
                remark="肾内科六科室"
                @click.native="toggleRoute('jianchabaogaoxiangqing')">尿常规（11项）</report-item>
        <report-item
                icon="icon-big-Pay"
                remark="肾内科六科室"
                @click.native="toggleRoute('jianchabaogaoxiangqing')">尿沉渣定量</report-item>
      </report-list>
      <report-list time="2018/01/02" title="浏阳市中心医院">
        <report-item
                icon="icon-big-Pay"
                remark="肾内科六科室"
                @click.native="toggleRoute('jianchabaogaoxiangqing')">尿常规（11项）</report-item>
        <report-item
                icon="icon-big-Pay"
                remark="肾内科六科室"
                @click.native="toggleRoute('jianchabaogaoxiangqing')">尿沉渣定量</report-item>
      </report-list>
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
  mounted () {
    document.body.style.background = '#f9f9f9';
  },
  destroyed () {
    document.body.style.background = '';
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
    },
    toggleRoute(path) {
      this.$router.push(path);
    }
  }
};
</script>
<style lang="less" scoped>
  .jianchabaogao-page{
    .report-box{
      padding: 0 10px;
    }
  }
</style>
<style lang="less">
  .jianchabaogao-page{

  }
</style>
