<template>
  <div class="tag-component"
       :class="{
        secondary
       }"
  >
    <icon :class="icon" v-if="icon"></icon>
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'Tag',
  data () {
    return {

    };
  },
  props: {
    icon: {
      type: String,
      default: ''
    },
    secondary: {
      type: Boolean,
      default: false
    }
  },
  methods: {

  }
};
</script>
<style lang="less" scoped>
  .tag-component{
    display: inline-block;
    line-height: 1.6;
    border-radius: .85em;
    background: #32c691;
    padding: 0 .6em;
    color: #fff;
    &.secondary{
      background: #ff7c1c;
    }
  }
</style>

<style lang="less">
  .tag-component{
    &>.iconfont{
      margin-right: 5px;
      color: #fff!important;
    }
  }
</style>
