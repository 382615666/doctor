<template>
  <div class="bingchengjilu-page">
    <person-info :data="patientInfo" :card="false"></person-info>
    <div class="info-box">
      <layout-cell title="记录标题" title-color="#0079fb" color="#333">{{info.jlbt}}</layout-cell>
      <layout-cell title="记录时间" title-color="#0079fb" color="#333">{{info.jlsj}}</layout-cell>
      <layout-cell title="病程记录" title-color="#0079fb" color="#333">
        <div v-html="info.bcjl"></div>
      </layout-cell>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      patientInfo: {}
    };
  },
  created () {
    this.getData();
  },
  methods: {
    getData () {
      this.$api.bingchengjilu.get(this.$route.query).then(data => {
        this.info = data;
        this.patientInfo = data.patientInfo;
      });
    }
  }
};
</script>
<style lang="less" scoped>
  .bingchengjilu-page{
    .info-box{
      padding: 0 10px
    }
  }
</style>
<style lang="less">
  .bingchengjilu-page{

  }
</style>
