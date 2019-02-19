<template>
  <div class="changqiyizhu-page">
    <person-info :data="patientInfo" :card="false"></person-info>
    <div class="yizhu-box">
      <div class="yizhu-item-box">
        <span class="yizhu-img-box">
          <icon class="icon-buoumaotubiao14"></icon>
        </span>
        <div class="yizhu-aside-info">
          <span class="yizhu-doctor">医生/护士：张航/张梅</span>
          执行时间：2018-10-01
        </div>
        <p class="yizhu-content">体温测量、尿液检测</p>
        <div class="yizhu-execute">
          <span class="yizhu-execute-name">执行签名：张梅</span>
          执行时间：2018-09-28
        </div>
      </div>
      <div class="yizhu-item-box">
        <span class="yizhu-img-box">
          <icon class="icon-buoumaotubiao14"></icon>
        </span>
        <div class="yizhu-aside-info">
          <span class="yizhu-doctor">医生/护士：刘超/周兰</span>
          执行时间：2018-09-25
        </div>
        <p class="yizhu-content">体温测量、尿液检测</p>
        <div class="yizhu-execute">
          <span class="yizhu-execute-name">执行签名：周兰</span>
          执行时间：2018-09-20
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
  .changqiyizhu-page{
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
<style lang="less">
  .changqiyizhu-page{

  }
</style>
