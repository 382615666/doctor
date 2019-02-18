<template>
  <div class="jianyanbaogao-page">
    <person-info :data="patientInfo"></person-info>
    <div class="report-box"
       v-infinite-scroll="getData"
       infinite-scroll-disabled="loading"
       infinite-scroll-distance="100"
    >
      <report-list
              time="2018/01/02"
              title="浏阳市中心医院"
              v-for="(item, index) in listData"
              :key="index"
      >
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
      page: {
        pageNo: 0
      },
      loading: false,
      listData: [],
      patientInfo: {}
    };
  },
  mounted () {
    document.body.style.background = '#f9f9f9';
  },
  destroyed () {
    document.body.style.background = '';
  },
  methods: {
    getData () {
      this.loading = true;
      this.page.pageNo++;
      this.$api.jianyanbaogao.get({
        orgCode: '445013138', // 医院id
        inHospitalId: 1, // 住院号
        pageSize: 10,
        pageNo: this.page.pageNo
      }).then(data => {
        this.patientInfo = data.data.patientInfo;
        this.listData = [...this.listData, ...data.data.lisList];
        this.loading = this.page.pageNo >= data.totalPage;
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
      position: fixed;
      left: 0;
      right: 0;
      top: 120px;
      bottom: 0;
      overflow: auto;
    }
  }
</style>
