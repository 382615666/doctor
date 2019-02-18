<template>
  <div class="baogaozhongxin-page">
    <person-info></person-info>
    <div class="report-box">
      <report-list time="2018/01/02">
        <report-item @click.native="toggleRoute('jianyanbaogao')">
          <tag icon="icon-ziyuan" slot="icon">检验</tag>
          尿常规（11项）
        </report-item>
        <report-item @click.native="toggleRoute('jianchabaogao')">
          <tag icon="icon-icon-test1" secondary slot="icon">检查</tag>
          尿沉渣定量
        </report-item>
      </report-list>
      <report-list time="2018/01/02">
        <report-item @click.native="toggleRoute('jianyanbaogao')">
          <tag icon="icon-ziyuan" slot="icon">检验</tag>
          尿常规（11项）
        </report-item>
        <report-item @click.native="toggleRoute('jianchabaogao')">
          <tag icon="icon-icon-test1" secondary slot="icon">检查</tag>
          尿沉渣定量
        </report-item>
      </report-list>
      <report-list time="2018/01/02">
        <report-item @click.native="toggleRoute('jianyanbaogao')">
          <tag icon="icon-ziyuan" slot="icon">检验</tag>
          尿常规（11项）
        </report-item>
        <report-item @click.native="toggleRoute('jianchabaogao')">
          <tag icon="icon-icon-test1" secondary slot="icon">检查</tag>
          尿沉渣定量
        </report-item>
      </report-list>
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
    document.body.style.background = '#f9f9f9';
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
  .baogaozhongxin-page{
    .report-box{
      padding: 0 10px;
    }
  }
</style>
<style lang="less">
  .baogaozhongxin-page{

  }
</style>
