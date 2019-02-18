<template>
  <div class="report-item-component">
    <span class="report-right-box">
      {{remark}}
      <icon class="icon-jiantou"></icon>
    </span>
    <span class="report-icon" v-if="icon || $slots.icon">
      <icon :class="icon" v-if="icon && !$slots.icon"></icon>
      <slot name="icon"></slot>
    </span>
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'ReportItem',
  data () {
    return {

    };
  },
  props: {
    icon: {
      type: String,
      default: ''
    },
    remark: {
      type: String,
      default: ''
    }
  },
  methods: {

  }
};
</script>
<style lang="less" scoped>
  .report-item-component{
    background: #fff;
    padding: 0 10px;
    line-height: 42px;
    color: #333;
    &+.report-item-component{
      margin-top: 1px;
    }
    .report-icon{
      margin-right: 5px;
    }
    .report-right-box{
      float: right;
      .icon-jiantou{
        color: #bcbcbc;
      }
    }
  }
</style>
