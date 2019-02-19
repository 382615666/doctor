<template>
  <div class="feiyongqingdan-page">
    <div class="info-box">
      <div class="info-item">姓名：张三</div>
      <div class="info-item">科室：张三</div>
      <div class="info-item">住院号：4164646465456</div>
      <div class="info-item">病人累计费用：4454元</div>
    </div>
    <div class="feiyong-title-box">
      <span class="feiyong-title">详细清单</span>
    </div>
    <div class="feiyong-list-box">
      <div class="feiyong-item-box">
        【检查费】这里是很多文字很多文字很多文字很多文字很多文字很多文字很多文字
        <div class="aside-info-box">
          <span class="feiyong-count">2盒</span>
          <span class="feiyong-money">11</span>
          <span class="feiyong-time">2018-01-01</span>
        </div>
      </div>
      <div class="feiyong-item-box">
        【检查费】这里是很多文字很多
        <div class="aside-info-box">
          <span class="feiyong-count">12盒</span>
          <span class="feiyong-money">11</span>
          <span class="feiyong-time">2018-01-01</span>
        </div>
      </div>
      <div class="feiyong-item-box">
        【检查费】这里是很多
        <div class="aside-info-box">
          <span class="feiyong-count">12盒</span>
          <span class="feiyong-money">11</span>
          <span class="feiyong-time">2018-01-01</span>
        </div>
      </div>
      <div class="feiyong-item-box">
        【检查费】这里是很多
        <div class="aside-info-box">
          <span class="feiyong-count">12盒</span>
          <span class="feiyong-money">11</span>
          <span class="feiyong-time">2018-01-01</span>
        </div>
      </div>
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
    document.body.style.background = '#f0f0f0';
  },
  destroyed () {
    document.body.style.background = '';
  },
  methods: {

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
        background: #32c691;
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
