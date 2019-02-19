<template>
  <div class="binganshouye-page">
    <div class="info-box">
      <div class="info-wrap">
        <div class="info-img">
          <icon class="icon-13dianpufill"></icon>
        </div>
        <div class="info-item-box">
          <span class="info-item">医疗机构：</span>
          <span class="info-item">浏阳市中医院</span>
          <span class="info-item">组织机构代码：</span>
          <span class="info-item">165456</span>
          <span class="info-item">医疗付费方式：</span>
          <span class="info-item">4</span>
          <span class="info-item">健康卡号：</span>
          <span class="info-item">4</span>
          <span class="info-item">住院次数：</span>
          <span class="info-item">第3次住院</span>
          <span class="info-item">住院卡号：</span>
          <span class="info-item">15615645646</span>
        </div>
      </div>
      <layout-cell title="姓名" color="#32c691">张三</layout-cell>
      <layout-cell title="性别" color="#32c691">男</layout-cell>
      <layout-cell title="出生日期" color="#32c691">2018-01-01</layout-cell>
      <layout-cell title="年龄" color="#32c691">30</layout-cell>
      <layout-cell title="国籍" color="#32c691">中国</layout-cell>
      <layout-cell title="备注" color="#32c691">病人已经经过初步治疗，病情有所好转，预计这几周可以顺利出院</layout-cell>
    </div>
    <div class="record-list-box">
      <div class="record-list-wrap">
        <div class="record-item-box" @click="toggleRoute('chuyuanjilu')">
          <div class="record-item">出院诊断：已康复</div>
          <div class="record-item">疾控编码：1114566</div>
          <div class="record-item">入院病情：一般</div>
          <div class="record-item">入院病情：应该没什么大问题应该没什么大问题应该没什么大问题应该没什么大问题</div>
        </div>
        <div class="record-item-box" @click="toggleRoute('chuyuanjilu')">
          <div class="record-item">出院诊断：已康复</div>
          <div class="record-item">疾控编码：1114566</div>
          <div class="record-item">入院病情：已康复</div>
          <div class="record-item">入院病情：出院诊断</div>
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
    toggleRoute(path) {
      this.$router.push(path);
    }
  }
};
</script>
<style lang="less" scoped>
  .binganshouye-page{
    .record-list-box{
      padding: 10px;
      line-height: 2;
      .record-list-wrap{
        background: #fff;
        border-radius: 5px;
        overflow: hidden;
        .record-item-box{
          padding: 5px 10px;
          & + .record-item-box{
            border-top: 1px solid #e5e5e5;
          }
        }
      }
    }
    .info-box{
      padding: 10px;
      background: #fff;
      .info-wrap{
        background: #32c691;
        padding: 10px 10px 0;
        color: #fff;
      }
      .info-img{
        text-align: center;
        .icon-13dianpufill{
          font-size: 50px;
          opacity: .6;
        }
      }
      .info-item-box{
        display: flex;
        flex-flow: wrap;
        text-align: right;
        line-height: 2;
        .info-item{
          flex: 0 0 50%;
          &:nth-child(even) {
            text-align: left;
          }
        }
      }
    }
  }
</style>
