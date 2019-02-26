<template>
  <div class="layout-cell-block-component">
    <div class="layout-cell-block-head">
      <slot name="head"></slot>
    </div>
    <div class="cell-content">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'LayoutCellBlock',
  data () {
    return {

    };
  },
  props: {

  },
  methods: {

  }
};
</script>
<style lang="less" scoped>
  .layout-cell-block-component{
    background: #fff;
    & + .layout-cell-block-component{
      border-top: 1px solid #e5e5e5;
    }
  }
</style>

<style lang="less">
  .layout-cell-block-component{
    .cell-content, .layout-cell-block-head{
      .layout-cell-component{
        padding: 5px 10px;
        border: none!important;
        .cell-title{
          color: #666;
        }
      }
    }
    .layout-cell-block-head{
      .layout-cell-component{
        .cell-title{
          color: #333;
        }
      }
    }
  }
</style>
