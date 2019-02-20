<template>
  <div class="jianchabaogao-page">
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
                icon="icon-big-Pay"
                @click.native="toggleRoute(it.pacsId)">
          <i class="svg-icon-jiancha"></i>
          {{it.jcbw}}
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
        pageNo: 0,
        pageSize: 10
      },
      loading: false,
      listData: [],
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
      this.loading = true;
      this.page.pageNo++;
      this.$api.jianchabaogao.get(Object.assign({
        pageSize: this.page.pageSize,
        pageNo: this.page.pageNo
      }, this.$route.query)).then(data => {
        this.patientInfo = data.data.patientInfo;
        this.listData = [...this.listData, ...data.data.list];
        this.loading = this.page.pageNo >= data.totalPage;
      });
    },
    toggleRoute(pacsId) {
      this.$router.push({
        path: 'jianchabaogaoxiangqing',
        query: {
          pacsId,
          ...this.page,
          ...this.$route.query
        }
      });
    }
  }
};
</script>
<style lang="less" scoped>
  .jianchabaogao-page{
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
<style lang="less">
  .jianchabaogao-page{

  }
</style>
