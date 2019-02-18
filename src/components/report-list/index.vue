<template>
  <div class="report-list-component">
    <div class="report-title">
      {{time}}
      <span class="report-name">{{title}}</span>
    </div>
    <div class="report-content-box">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ReportList',
  data () {
    return {

    };
  },
  props: {
    title: {
      type: String,
      default: ''
    },
    time: {
      type: String,
      default: ''
    }
  },
  methods: {

  }
};
</script>
<style lang="less" scoped>
  .report-list-component{
    padding-bottom: 20px;
    &+.report-list-component{
      border-top: 1px dashed #32c691;
    }
    .report-content-box{
      border-radius: 5px;
      overflow: hidden;
    }
    .report-name{
      float: right;
    }
    .report-title{
      line-height: 40px;
      &:before{
        content: '';
        width: 5px;
        background: #32c691;
        height: 5px;
        border-radius: 50%;
        display: inline-block;
        vertical-align: 3px;
      }
    }
  }
</style>
