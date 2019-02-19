<template>
  <div class="linshiyizhu-page">
    <person-info :data="patientInfo" :card="false"></person-info>
    <div class="yizhu-box"
         v-infinite-scroll="getData"
         infinite-scroll-disabled="loading"
         infinite-scroll-distance="100"
    >
      <div class="yizhu-item-box"
           v-for="(item, index) in listData"
           :key="index"
      >
        <span class="yizhu-img-box">
          <icon class="icon-buoumaotubiao14"></icon>
        </span>
        <div class="yizhu-aside-info">
          <span class="yizhu-doctor">医生/护士：{{item.ysqm}}/{{item.hsqm}}</span>
          {{item.rq}}
        </div>
        <p class="yizhu-content">{{item.yznr}}</p>
        <div class="yizhu-execute">
          <span class="yizhu-execute-name">执行签名：{{item.zxqm}}</span>
          执行时间：{{item.zxsj}}
        </div>
      </div>
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
      loading: false,
      listData: []
    };
  },
  methods: {
    getData () {
      this.loading = true;
      this.page.pageNo++;
      this.$api.linshiyizhu.get(Object.assign({
        pageSize: 10,
        pageNo: this.page.pageNo
      }, this.$route.query)).then(data => {
        this.patientInfo = data.data.patientInfo;
        this.listData = [...this.listData, ...data.data.list];
        this.loading = this.page.pageNo >= data.totalPage;
      });
    }
  }
};
</script>
<style lang="less" scoped>
  .linshiyizhu-page{

  }
</style>
<style lang="less">
  .linshiyizhu-page{
    .yizhu-box{
      padding: 0 10px;
      .yizhu-item-box{
        padding: 10px 0 10px 60px;
        font-size: 12px;
        border-bottom: 1px solid #e0e0e0;
        .yizhu-execute{
          .yizhu-execute-name{
            float: right;
          }
        }
        .yizhu-aside-info{
          color: #333;
          padding-bottom: 5px;
          .yizhu-doctor{
            font-size: 14px;
            float: right;
          }
        }
        .yizhu-img-box{
          position: absolute;
          background: #36cb95;
          color: #fff;
          width: 40px;
          height: 40px;
          border-radius: 5px;
          line-height: 40px;
          text-align: center;
          margin-left: -50px;
          margin-top: 8px;
        }
      }
    }
  }
</style>
