<template>
  <div class="binganshouye-page">
    <div class="info-box">
      <div class="info-wrap">
        <div class="info-img">
          <icon class="icon-13dianpufill"></icon>
        </div>
        <div class="info-item-box">
          <span class="info-item">医疗机构：</span>
          <span class="info-item">{{info.hospitalName}}</span>
          <span class="info-item">组织机构代码：</span>
          <span class="info-item">{{info.hospitalId}}</span>
          <span class="info-item">医疗付费方式：</span>
          <span class="info-item">{{info.ylfffs}}</span>
          <span class="info-item">健康卡号：</span>
          <span class="info-item">{{info.jkkh}}</span>
          <span class="info-item">住院次数：</span>
          <span class="info-item">第{{info.zycs}}次住院</span>
          <span class="info-item">病案号：</span>
          <span class="info-item">{{info.bah}}</span>
        </div>
      </div>
      <layout-cell title="姓名" color="#32c691">{{info.xm}}</layout-cell>
      <layout-cell title="性别" color="#32c691">{{info.xb}}</layout-cell>
      <layout-cell title="出生日期" color="#32c691">{{info.csrq}}</layout-cell>
      <layout-cell title="年龄" color="#32c691">{{info.nl}}</layout-cell>
      <layout-cell title="国籍" color="#32c691">{{info.gj}}</layout-cell>
      <layout-cell title="（年龄不足1周岁的）年龄" color="#32c691">{{info.xsrnl}}月</layout-cell>
      <layout-cell title="新生儿出生体重" color="#32c691">{{info.xsrcstz}}g</layout-cell>
      <layout-cell title="新生儿入院体重" color="#32c691">{{info.xsrrytz}}g</layout-cell>
      <layout-cell title="出生地" color="#32c691">{{info.csd}}</layout-cell>
      <layout-cell title="籍贯" color="#32c691">{{info.jg}}</layout-cell>
      <layout-cell title="民族" color="#32c691">{{info.mz}}</layout-cell>
      <layout-cell title="现住址" color="#32c691">{{info.xzz}}</layout-cell>
      <layout-cell title="电话" color="#32c691">{{info.lxdh}}</layout-cell>
      <layout-cell title="邮编" color="#32c691">{{info.xzzyb}}</layout-cell>
      <layout-cell title="户口地址" color="#32c691">{{info.hkdz}}</layout-cell>
      <layout-cell title="邮编" color="#32c691">{{info.hkdzyb}}</layout-cell>
      <layout-cell title="工作单位及地址" color="#32c691">{{info.gzdwjdz}}</layout-cell>
      <layout-cell title="单位电话" color="#32c691">{{info.dwdh}}</layout-cell>
      <layout-cell title="邮编" color="#32c691">{{info.dwdzyb}}</layout-cell>
      <layout-cell title="联系人姓名" color="#32c691">{{info.lxrxm}}</layout-cell>
      <layout-cell title="关系" color="#32c691">{{info.gx}}</layout-cell>
      <layout-cell title="地址" color="#32c691">{{info.lxrdz}}</layout-cell>
      <layout-cell title="电话" color="#32c691">{{info.lxrdh}}</layout-cell>
      <layout-cell title="入院途径" color="#32c691">{{info.rytj}}</layout-cell>
      <layout-cell title="入院时间" color="#32c691">{{info.rysj}}</layout-cell>
      <layout-cell title="入院科别" color="#32c691">{{info.rykb}}</layout-cell>
      <layout-cell title="病房" color="#32c691">{{info.rybf}}</layout-cell>
      <layout-cell title="转科科别" color="#32c691">{{info.zkkb}}</layout-cell>
      <layout-cell title="出院时间" color="#32c691">{{info.cysj}}</layout-cell>
      <layout-cell title="出院科别" color="#32c691">{{info.cykb}}</layout-cell>
      <layout-cell title="病房" color="#32c691">{{info.cybf}}</layout-cell>
      <layout-cell title="实际住院" color="#32c691">{{info.zyts}}天</layout-cell>
      <layout-cell title="门(急)诊诊断" color="#32c691">{{info.mzzd}}</layout-cell>
      <layout-cell title="疾病编码" color="#32c691">{{info.jbbm}}</layout-cell>
    </div>
    <div class="record-list-box">
      <div class="record-list-wrap">
        <div class="record-item-box"
             v-for="(item, index) in info.diagnosisList"
             :key="index"
        >
          <div class="record-item">出院诊断：{{item.cyzd}}</div>
          <div class="record-item">疾病编码：{{item.jbbm}}</div>
          <div class="record-item">入院病情：{{item.rybq}}</div>
        </div>
      </div>
    </div>
    <div class="info-item-box">
      <layout-cell title="入院病情" color="#32c691">{{info.rybq}}</layout-cell>
      <layout-cell title="损伤,中毒的外部原因" color="#32c691">{{info.wbyy}}</layout-cell>
      <layout-cell title="疾病编码" color="#32c691">{{info.wbyyjbbm}}</layout-cell>
      <layout-cell title="病理诊断" color="#32c691">{{info.blzd}}</layout-cell>
      <layout-cell title="疾病编码" color="#32c691">{{info.blzdjbbm}}</layout-cell>
      <layout-cell title="病理号" color="#32c691">{{info.blh}}</layout-cell>
      <layout-cell title="药物过敏" color="#32c691">{{info.ywgm}}</layout-cell>
      <layout-cell title="过敏药物" color="#32c691">{{info.gmyw}}</layout-cell>
      <layout-cell title="死亡患者尸检" color="#32c691">{{info.swhzsj}}</layout-cell>
      <layout-cell title="血型" color="#32c691">{{info.xx}}</layout-cell>
      <layout-cell title="Rh" color="#32c691">{{info.rh}}</layout-cell>
      <layout-cell title="科主任" color="#32c691">{{info.kzr}}</layout-cell>
      <layout-cell title="主任（副主任）医师" color="#32c691">{{info.zrys}}</layout-cell>
      <layout-cell title="主治医师" color="#32c691">{{info.zzys}}</layout-cell>
      <layout-cell title="住院医师" color="#32c691">{{info.zyys}}</layout-cell>
      <layout-cell title="责任护士" color="#32c691">{{info.zrhs}}</layout-cell>
      <layout-cell title="进修医师" color="#32c691">{{info.jxys}}</layout-cell>
      <layout-cell title="实习医师" color="#32c691">{{info.sxys}}</layout-cell>
      <layout-cell title="编码员" color="#32c691">{{info.bmy}}</layout-cell>
      <layout-cell title="病案质量" color="#32c691">{{info.bazl}}</layout-cell>
      <layout-cell title="质控医师" color="#32c691">{{info.zkys}}</layout-cell>
      <layout-cell title="质控护士" color="#32c691">{{info.zkhs}}</layout-cell>
      <layout-cell title="质控日期" color="#32c691">{{info.zkrq}}</layout-cell>
    </div>
    <div class="record-list-box">
      <div class="record-list-wrap">
        <div class="record-item-box"
             v-for="(item, index) in info.operationList"
             :key="index"
        >
          <div class="record-item">手术及操作编码：{{item.czbm}}</div>
          <div class="record-item">手术及操作日期：{{item.czrq}}</div>
          <div class="record-item">手术级别：{{item.shjb}}</div>
          <div class="record-item">手术及操作名称：{{item.czmc}}</div>
          <div class="record-item">手术操作医师-术者：{{item.czyssz}}</div>
          <div class="record-item">手术操作医师-Ⅰ助：{{item.czysyz}}</div>
          <div class="record-item">手术操作医师-Ⅱ助：{{item.czysez}}</div>
          <div class="record-item">切口愈合等级：{{item.qkyhdj}}</div>
          <div class="record-item">麻醉方式：{{item.czbm}}</div>
          <div class="record-item">麻醉医师：{{item.mzys}}</div>
        </div>
      </div>
    </div>
    <div class="info-item-box">
      <layout-cell title="离院方式" color="#32c691">{{info.lyfs}}</layout-cell>
      <layout-cell title="拟接收医疗机构名称" color="#32c691">{{info.njsyljgmc}}</layout-cell>
      <layout-cell title="是否有出院31天内再住院计划" color="#32c691">{{info.zzyjh}}</layout-cell>
      <layout-cell title="再住院目的" color="#32c691">{{info.zzymd}}</layout-cell>
      <layout-cell title="入院前颅脑损伤患者昏迷时间" color="#32c691">{{info.ryqhmsj}}天</layout-cell>
      <layout-cell title="入院后颅脑损伤患者昏迷时间" color="#32c691">{{info.ryhhmsj}}天</layout-cell>
      <layout-cell title="总费用" color="#32c691">{{info.zfy}}元</layout-cell>
      <layout-cell title="自付金额" color="#32c691">{{info.zfje}}元</layout-cell>
      <layout-cell title="一般医疗服务费" color="#32c691">{{info.ybylfwf}}元</layout-cell>
      <layout-cell title="一般治疗操作费" color="#32c691">{{info.ybzlczf}}元</layout-cell>
      <layout-cell title="护理费" color="#32c691">{{info.hlf}}元</layout-cell>
      <layout-cell title="其他费用" color="#32c691">{{info.qtfy}}元</layout-cell>
      <layout-cell title="病理诊断费" color="#32c691">{{info.blzdf}}元</layout-cell>
      <layout-cell title="实验室诊断费" color="#32c691">{{info.syszdf}}元</layout-cell>
      <layout-cell title="影像学诊断费" color="#32c691">{{info.yxxzdf}}元</layout-cell>
      <layout-cell title="临床诊断项目费" color="#32c691">{{info.lczdxmf}}元</layout-cell>
      <layout-cell title="非手术治疗费" color="#32c691">{{info.fsszlf}}元</layout-cell>
      <layout-cell title="临床物理治疗费" color="#32c691">{{info.lcwlzlf}}元</layout-cell>
      <layout-cell title="手术治疗费" color="#32c691">{{info.sszlf}}元</layout-cell>
      <layout-cell title="麻醉费" color="#32c691">{{info.mzf}}元</layout-cell>
      <layout-cell title="手术费" color="#32c691">{{info.ssf}}元</layout-cell>
      <layout-cell title="康复费" color="#32c691">{{info.kff}}元</layout-cell>
      <layout-cell title="中医治疗费" color="#32c691">{{info.zyzlf}}元</layout-cell>
      <layout-cell title="西医费" color="#32c691">{{info.xyf}}元</layout-cell>
      <layout-cell title="抗菌药物费" color="#32c691">{{info.kjywf}}元</layout-cell>
      <layout-cell title="中成药费" color="#32c691">{{info.zcyf}}元</layout-cell>
      <layout-cell title="中草药费" color="#32c691">{{info.zcaoyf}}元</layout-cell>
      <layout-cell title="血费" color="#32c691">{{info.xf}}元</layout-cell>
      <layout-cell title="白蛋白类制品费" color="#32c691">{{info.bdblzpf}}元</layout-cell>
      <layout-cell title="球蛋白类制品费" color="#32c691">{{info.qdblzpf}}元</layout-cell>
      <layout-cell title="凝血因子类制品费" color="#32c691">{{info.nxyzlzpf}}元</layout-cell>
      <layout-cell title="细胞因子类制品费" color="#32c691">{{info.xbyzlzpf}}元</layout-cell>
      <layout-cell title="检查用一次性医用材料费" color="#32c691">{{info.jcclf}}元</layout-cell>
      <layout-cell title="治疗用一次性医用材料费" color="#32c691">{{info.zlclf}}元</layout-cell>
      <layout-cell title="手术用一次性医用材料费" color="#32c691">{{info.shclf}}元</layout-cell>
      <layout-cell title="其他费" color="#32c691">{{info.qtf}}元</layout-cell>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      info: {}
    };
  },
  created () {
    this.getData();
  },
  methods: {
    getData () {
      this.$api.binganshouye.get(this.$route.query).then(data => {
        this.info = data;
      });
    },
    toggleRoute(path) {
      this.$router.push(path);
    }
  }
};
</script>
<style lang="less" scoped>
  .binganshouye-page{
    .info-item-box{
      padding: 0 10px;
    }
    .record-list-box{
      padding: 10px;
      line-height: 2;
      background: #f0f0f0;
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
