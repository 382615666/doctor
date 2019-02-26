<template>
  <div class="changqiyizhu-page">
    <person-info :data="patientInfo" :card="false"></person-info>
    <div class="yizhu-box"
         v-infinite-scroll="getData"
         infinite-scroll-disabled="loading"
         infinite-scroll-distance="100"
    >
      <div class="yizhu-wrap"
           v-for="(item, index) in listData"
           :key="index"
      >
        <div class="yizhu-item-wrap">
          <div class="yizhu-time-box">
            <span class="yizhu-time">{{item.qsrq | dateFormat('YYYY-MM-DD')}}</span>
          </div>
          <div class="yizhu-item-box"
               v-for="(it, ind) in item.list"
               :key="ind"
          >
            <span class="yizhu-img-box">
              <icon class="icon-laba_"></icon>
            </span>
            <div class="yizhu-aside-info">
              <span class="yizhu-doctor">医生/护士：{{it.ysqm}}/{{it.hsqm}}</span>
              {{it.qsrq}}
            </div>
            <p class="yizhu-content">{{it.yznr}}</p>
            <div class="yizhu-execute">
              停止时间：{{it.tzsj}}
            </div>
          </div>
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
      this.$api.changqiyizhu.get(Object.assign({
        adviceType: 1,
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
  .changqiyizhu-page{
    .yizhu-wrap{
      background: #f9f9f9;
      padding: 10px;
      & + .yizhu-wrap{
        padding-top: 0;
      }
      .yizhu-item-wrap{
        background: #fff;
        padding: 0 10px;
        border-radius: 5px;
      }
      .yizhu-time-box{
        padding-top: 10px;
        .yizhu-time{
          background: #0079fb;
          display: inline-block;
          color: #fff;
          border-radius: 0 .75em .75em 0;
          line-height: 1.5;
          padding: 0 10px;
        }
      }
    }
    .yizhu-box{
      .yizhu-item-box{
        padding: 10px 0 10px 50px;
        font-size: 12px;
        position: relative;
        & + .yizhu-item-box{
          border-top: 1px solid #e0e0e0;
        }
        .icon-laba_{
          font-size: 24px;
        }
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
          background: #0079fb;
          color: #fff;
          width: 40px;
          top: 50%;
          height: 40px;
          border-radius: 5px;
          line-height: 40px;
          text-align: center;
          margin-left: -50px;
          transform: translate(0, -50%);
        }
      }
    }
  }
</style>
<style lang="less">
  .changqiyizhu-page{

  }
</style>
