<template>
  <div class="feiyongqingdan-page">
    <div class="info-box">
      <div class="info-item">病人累计费用：{{info.ljfy}}元</div>
      <div class="info-item">费用开始日期：{{info.fyksrq}}</div>
      <div class="info-item">费用结束日期：{{info.fyjsrq}}</div>
    </div>
    <div class="feiyong-title-box">
      <span class="feiyong-title">详细清单</span>
    </div>
    <div class="feiyong-list-box"
         v-infinite-scroll="getData"
         infinite-scroll-disabled="loading"
         infinite-scroll-distance="100"
    >
      <div class="feiyong-item-box"
           v-for="(item, index) in listData"
           :key="index"
      >
        【{{item.jflb}}】{{item.xmmc}}
        <div class="aside-info-box">
          <span class="feiyong-count">{{item.sl}}{{item.dw}}</span>
          <span class="feiyong-money">{{item.je}}</span>
          <span class="feiyong-time">{{item.fyrq}}</span>
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
      info: {},
      loading: false,
      listData: []
    };
  },
  mounted () {
    document.body.style.background = '#f0f0f0';
  },
  destroyed () {
    document.body.style.background = '';
  },
  methods: {
    getData () {
      this.loading = true;
      this.page.pageNo++;
      this.$api.feiyongqingdan.get(Object.assign({
        pageSize: 10,
        pageNo: this.page.pageNo
      }, this.$route.query)).then(data => {
        this.info = data.data;
        this.listData = [...this.listData, ...data.data.expenseList];
        this.loading = this.page.pageNo >= data.totalPage;
      });
    }
  }
};
</script>
<style lang="less" scoped>
  .feiyongqingdan-page{
    padding: 10px;
    .feiyong-list-box{
      color: #333;
      line-height: 2;
      .feiyong-item-box{
        overflow: hidden;
        padding: 5px 0;
        & + .feiyong-item-box{
          border-top: 1px solid #e5e5e5;
        }
        .feiyong-money{
          color: #fd6666;
          &:after{
            content: '元';
            color: #333;
          }
        }
        .aside-info-box{
          float: right;
          width: 200px;
          .feiyong-count{
            display: inline-block;
            width: 40px;
            text-align: right;
          }
          .feiyong-money{
            display: inline-block;
            width: 60px;
            text-align: right;
          }
          .feiyong-time{
            display: inline-block;
            width: 95px;
            text-align: right;
          }
        }
      }
    }
    .feiyong-title-box{
      padding: 10px 0;
      margin-left: -10px;
      .feiyong-title{
        display: inline-block;
        color: #fff;
        background: #0079fb;
        line-height: 2;
        padding: 0 1em 0 .5em;
        border-radius: 0 1em 1em 0;
      }
    }
    .info-box{
      background: #fff;
      color: #333;
      line-height: 2;
      padding: 10px;
      position: relative;
      margin-bottom: 10px;
      &:after{
        position: absolute;
        top: 100%;
        content: '';
        height: 10px;
        left: 0;
        width: 100%;
        background: url('../../assets/image/wave1.png') repeat-x;
        background-size: 35px 100%;
      }
      .info-item{
        padding: 0 10px;
      }
    }
  }
</style>
<style lang="less">
  .feiyongqingdan-page{

  }
</style>
