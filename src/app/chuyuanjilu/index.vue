<template>
  <div class="chuyuanjilu-page">
    <person-info :data="patientInfo" :card="false"></person-info>
    <div class="info-box">
      <layout-cell title="医院编号" title-color="#32c691" color="#333">156166546</layout-cell>
      <layout-cell title="住院医师" title-color="#32c691" color="#333">张三</layout-cell>
      <layout-cell title="上级医师" title-color="#32c691" color="#333">张三</layout-cell>
      <layout-cell title="入院情况" title-color="#32c691" color="#333">无移动性浊音，肝区无叩击痛，肝浊音界位于右锁骨中线第Ⅴ肋间，肠鸣音6次/分，未闻及腹部血管杂音。双肾区无叩击痛，肋脊点及肋腰点无压痛。肛门及外生殖器未查。胸骨轻压痛，其他部位骨骼无压痛。脊柱及四肢无畸形，活动自如，关节无红肿，双下肢无凹陷性水肿，足背动脉搏动良好。挠动脉脉率104次/分，律齐，无奇脉或短绌脉，无股动脉及肱动脉枪击音，无毛细血管异常波动。生理反射存在，未引出病理反射。实验室检查：血常规：Hb 162g/L,WBC 12.4×10<sup>9</sup>/L，N 0.89，L 0.11。X线胸透：两肺透亮度增加，纹理增加，主动脉弓突出，心影不大。心电图：窦性心动过速。入院诊断：1．慢性支气管炎急性发作期，慢性阻塞性肺气肿2．冠状动脉粥样硬化性心脏病：劳累性心绞痛（稳定型），窦性心动过速，心脏不大，心功能Ⅱ级诊疗经过：青霉素240万U，静脉滴注，每6小时静注1次；氧氟沙星200mg／日；急支糖浆、氨茶碱控释片、镇咳、祛痰、止喘，硝苯地平扩冠等综合处理</layout-cell>
      <layout-cell title="住院经过" title-color="#32c691" color="#333">无移动性浊音，肝区无叩击痛，肝浊音界位于右锁骨中线第Ⅴ肋间，肠鸣音6次/分，未闻及腹部血管杂音。双肾区无叩击痛，肋脊点及肋腰点无压痛。肛门及外生殖器未查。胸骨轻压痛，其他部位骨骼无压痛。脊柱及四肢无畸形，活动自如，关节无红肿，双下肢无凹陷性水肿，足背动脉搏动良好。挠动脉脉率104次/分，律齐，无奇脉或短绌脉，无股动脉及肱动脉枪击音，无毛细血管异常波动。生理反射存在，未引出病理反射。实验室检查：血常规：Hb 162g/L,WBC 12.4×10<sup>9</sup>/L，N 0.89，L 0.11。X线胸透：两肺透亮度增加，纹理增加，主动脉弓突出，心影不大。心电图：窦性心动过速。入院诊断：1．慢性支气管炎急性发作期，慢性阻塞性肺气肿2．冠状动脉粥样硬化性心脏病：劳累性心绞痛（稳定型），窦性心动过速，心脏不大，心功能Ⅱ级诊疗经过：青霉素240万U，静脉滴注，每6小时静注1次；氧氟沙星200mg／日；急支糖浆、氨茶碱控释片、镇咳、祛痰、止喘，硝苯地平扩冠等综合处理</layout-cell>
      <layout-cell title="出院情况" title-color="#32c691" color="#333">已出院</layout-cell>
      <layout-cell title="出院诊断" title-color="#32c691" color="#333">无</layout-cell>
      <layout-cell title="出院医嘱" title-color="#32c691" color="#333">无</layout-cell>
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
      patientInfo: {}
    };
  },
  created () {
    this.getData();
  },
  methods: {
    getData () {
      this.page.pageNo++;
      this.$api.jianyanbaogao.get({
        orgCode: '445013138', // 医院id
        inHospitalId: 1, // 住院号
        pageSize: 10,
        pageNo: this.page.pageNo
      }).then(data => {
        this.patientInfo = data.data.patientInfo;
      });
    }
  }
};
</script>
<style lang="less" scoped>
  .chuyuanjilu-page{

  }
</style>
<style lang="less">
  .chuyuanjilu-page{
    .info-box{
      padding: 0 10px
    }
  }
</style>
