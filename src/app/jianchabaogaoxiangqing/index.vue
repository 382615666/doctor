<template>
  <div class="jianchabaogaoxiangqing-page">
    <div class="info-box">
      <p class="info-item-text">
        <span class="info-item-title">检查科室</span>：123153
      </p>
      <p class="info-item-text">
        <span class="info-item-title">检查科室</span>：123153
      </p>
      <p class="info-item-text">
        <span class="info-item-title">检查科室</span>：123153
      </p>
      <p class="info-item-text">
        <span class="info-item-title">检查科室</span>：123153
      </p>
    </div>
    <table class="table">
      <thead>
        <tr>
          <th>项目</th>
          <th>结果</th>
          <th>参考范围</th>
          <th>单位</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>尿胆红素</td>
          <td>1.21</td>
          <td>1.21-12.22</td>
          <td>/UL</td>
        </tr>
        <tr>
          <td>尿胆红素</td>
          <td>1.21</td>
          <td>1.21-12.22</td>
          <td>/UL</td>
        </tr>
        <tr>
          <td>尿胆红素</td>
          <td>1.21</td>
          <td>1.21-12.22</td>
          <td>/UL</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  data () {
    return {

    };
  },
  methods: {

  }
};
</script>
<style lang="less" scoped>
  .jianchabaogaoxiangqing-page{
    .info-box{
      line-height: 2.2;
      color: #333;
      padding: 10px 20px;
    }
    .table{
      width: 100%;
      text-align: center;
      thead{
        background: #32c691;
        color: #fff;
      }
      th{
        & + th{
          border-left: 1px solid #fff;
        }
      }
      td{
        border-bottom: 1px solid #e0e0e0;
        & + td{
          border-left: 1px solid #e0e0e0;
        }
        &:first-child{
          text-align: left;
        }
      }
    }
  }
</style>
<style lang="less">
  .jianchabaogaoxiangqing-page{

  }
</style>
