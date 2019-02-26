<template>
  <div class="jianyanbaogaoxiangqing-page">
    <div class="info-box">
      <p class="info-item-text">标本种类：{{info.bbzl}}</p>
      <p class="info-item-text">样本编号：{{info.ybbh}}</p>
      <p class="info-item-text">科室：{{info.ks}}</p>
      <p class="info-item-text">送检医师：{{info.sjys}}</p>
      <p class="info-item-text">备注：{{info.bz}}</p>
      <p class="info-item-text">采样日期：{{info.cyrq}}</p>
    </div>
    <div class="table-box"
         v-infinite-scroll="getData"
         infinite-scroll-disabled="loading"
         infinite-scroll-distance="100"
    >
      <table class="table">
        <thead>
        <tr>
          <th>名称</th>
          <th>结果</th>
          <th>单位</th>
          <th>参考值</th>
        </tr>
        </thead>
        <tbody>
        <tr
                v-for="(item, index) in listData"
                :key="index"
        >
          <td>{{item.mc}}</td>
          <td :class="{
            high: item.jgts === 1 || item.jgts === 2,
            low: item.jgts === 3,
          }">
            {{item.jg}}<icon class="icon-jiantou_xiangshang_o" v-if="item.jgts === 2"></icon><icon class="icon-jiantou_xiangshang_o-copy" v-if="item.jgts === 3"></icon>
          </td>
          <td>{{item.dw}}</td>
          <td>{{item.ckz}}</td>
        </tr>
        </tbody>
      </table>
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
  methods: {
    getData () {
      this.loading = true;
      this.page.pageNo++;
      this.$api.jianyanbaogaoxiangqing.get(Object.assign({
        pageSize: 10,
        pageNo: this.page.pageNo
      }, this.$route.query)).then(data => {
        this.info = data.data.lis;
        this.listData = [...this.listData, ...data.data.lis.list];
        this.loading = this.page.pageNo >= data.totalPage;
      });
    }
  }
};
</script>
<style lang="less" scoped>
  .jianyanbaogaoxiangqing-page{
    .info-box{
      line-height: 2.2;
      color: #333;
      padding: 10px 20px;
    }
    .table{
      width: 100%;
      text-align: center;
      thead{
        background: #0079fb;
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
        &:nth-child(2) {
          color: #32c691;
          white-space: nowrap;
        }
        &.high{
          color: #ff4040;
        }
        &.low{
          color: #fc841a;
        }
      }
    }
  }
</style>
