<template>
  <div class="jianyanbaogao-page">
    <person-info :data="patientInfo"></person-info>
    <div class="report-box"
       v-infinite-scroll="getData"
       infinite-scroll-disabled="loading"
       infinite-scroll-distance="100"
    >
      <report-list
              :time="item.date"
              :title="item.hospitalName"
              v-for="(item, index) in listData"
              :key="index"
      >
        <report-item
                v-for="(it, ind) in item.lisList"
                :key="ind"
                :remark="it.ks"
                @click.native="toggleRoute(it.lisId)">
          <i class="svg-icon-jianyan"></i>
          {{it.bbzl}}
        </report-item>
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
      this.$api.jianyanbaogao.get(Object.assign({
        pageSize: 10,
        pageNo: this.page.pageNo
      }, this.$route.query)).then(data => {
        this.patientInfo = data.data.patientInfo;
        this.listData = [...this.listData, ...data.data.list];
        this.loading = this.page.pageNo >= data.totalPage;
      });
    },
    toggleRoute(lisId) {
      this.$router.push({
        path: 'jianyanbaogaoxiangqing',
        query: {
          lisId,
          ...this.$route.query
        }
      });
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
