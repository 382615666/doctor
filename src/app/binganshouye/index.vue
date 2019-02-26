<template>
  <div class="binganshouye-page">
    <div class="info-box">
      <div class="info-wrap">
        <div class="info-img-box">
          <img :src="icon1Img" alt="" class="info-img">
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
      <layout-cell title="姓名" color="#0079fb">{{info.xm}}</layout-cell>
      <layout-cell title="性别" color="#0079fb">{{info.xb}}</layout-cell>
      <layout-cell title="出生日期" color="#0079fb">{{info.csrq}}</layout-cell>
      <layout-cell title="年龄" color="#0079fb">{{info.nl}}</layout-cell>
      <layout-cell title="国籍" color="#0079fb">{{info.gj}}</layout-cell>
      <layout-cell title="（年龄不足1周岁的）年龄" color="#0079fb">{{info.xsrnl}}月</layout-cell>
      <layout-cell title="新生儿出生体重" color="#0079fb">{{info.xsrcstz}}g</layout-cell>
      <layout-cell title="新生儿入院体重" color="#0079fb">{{info.xsrrytz}}g</layout-cell>
      <layout-cell title="出生地" color="#0079fb">{{info.csd}}</layout-cell>
      <layout-cell title="籍贯" color="#0079fb">{{info.jg}}</layout-cell>
      <layout-cell title="民族" color="#0079fb">{{info.mz}}</layout-cell>
      <layout-cell title="现住址" color="#0079fb">{{info.xzz}}</layout-cell>
      <layout-cell title="电话" color="#0079fb">{{info.lxdh}}</layout-cell>
      <layout-cell title="邮编" color="#0079fb">{{info.xzzyb}}</layout-cell>
      <layout-cell title="户口地址" color="#0079fb">{{info.hkdz}}</layout-cell>
      <layout-cell title="邮编" color="#0079fb">{{info.hkdzyb}}</layout-cell>
      <layout-cell title="工作单位及地址" color="#0079fb">{{info.gzdwjdz}}</layout-cell>
      <layout-cell title="单位电话" color="#0079fb">{{info.dwdh}}</layout-cell>
      <layout-cell title="邮编" color="#0079fb">{{info.dwdzyb}}</layout-cell>
      <layout-cell title="联系人姓名" color="#0079fb">{{info.lxrxm}}</layout-cell>
      <layout-cell title="关系" color="#0079fb">{{info.gx}}</layout-cell>
      <layout-cell title="地址" color="#0079fb">{{info.lxrdz}}</layout-cell>
      <layout-cell title="电话" color="#0079fb">{{info.lxrdh}}</layout-cell>
      <layout-cell title="入院途径" color="#0079fb">{{info.rytj}}</layout-cell>
      <layout-cell title="入院时间" color="#0079fb">{{info.rysj}}</layout-cell>
      <layout-cell title="入院科别" color="#0079fb">{{info.rykb}}</layout-cell>
      <layout-cell title="病房" color="#0079fb">{{info.rybf}}</layout-cell>
      <layout-cell title="转科科别" color="#0079fb">{{info.zkkb}}</layout-cell>
      <layout-cell title="出院时间" color="#0079fb">{{info.cysj}}</layout-cell>
      <layout-cell title="出院科别" color="#0079fb">{{info.cykb}}</layout-cell>
      <layout-cell title="病房" color="#0079fb">{{info.cybf}}</layout-cell>
      <layout-cell title="实际住院" color="#0079fb">{{info.zyts}}天</layout-cell>
      <layout-cell title="门(急)诊诊断" color="#0079fb">{{info.mzzd}}</layout-cell>
      <layout-cell title="疾病编码" color="#0079fb">{{info.jbbm}}</layout-cell>
    </div>
    <div class="record-list-box" v-if="info.diagnosisList.length">
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
      <layout-cell title="损伤,中毒的外部原因" color="#0079fb">{{info.wbyy}}</layout-cell>
      <layout-cell title="疾病编码" color="#0079fb">{{info.wbyyjbbm}}</layout-cell>
      <layout-cell title="病理诊断" color="#0079fb">{{info.blzd}}</layout-cell>
      <layout-cell title="疾病编码" color="#0079fb">{{info.blzdjbbm}}</layout-cell>
      <layout-cell title="病理号" color="#0079fb">{{info.blh}}</layout-cell>
      <layout-cell title="药物过敏" color="#0079fb">{{info.ywgm}}</layout-cell>
      <layout-cell title="过敏药物" color="#0079fb">{{info.gmyw}}</layout-cell>
      <layout-cell title="死亡患者尸检" color="#0079fb">{{info.swhzsj}}</layout-cell>
      <layout-cell title="血型" color="#0079fb">{{info.xx}}</layout-cell>
      <layout-cell title="Rh" color="#0079fb">{{info.rh}}</layout-cell>
      <layout-cell title="科主任" color="#0079fb">{{info.kzr}}</layout-cell>
      <layout-cell title="主任（副主任）医师" color="#0079fb">{{info.zrys}}</layout-cell>
      <layout-cell title="主治医师" color="#0079fb">{{info.zzys}}</layout-cell>
      <layout-cell title="住院医师" color="#0079fb">{{info.zyys}}</layout-cell>
      <layout-cell title="责任护士" color="#0079fb">{{info.zrhs}}</layout-cell>
      <layout-cell title="进修医师" color="#0079fb">{{info.jxys}}</layout-cell>
      <layout-cell title="实习医师" color="#0079fb">{{info.sxys}}</layout-cell>
      <layout-cell title="编码员" color="#0079fb">{{info.bmy}}</layout-cell>
      <layout-cell title="病案质量" color="#0079fb">{{info.bazl}}</layout-cell>
      <layout-cell title="质控医师" color="#0079fb">{{info.zkys}}</layout-cell>
      <layout-cell title="质控护士" color="#0079fb">{{info.zkhs}}</layout-cell>
      <layout-cell title="质控日期" color="#0079fb">{{info.zkrq}}</layout-cell>
    </div>
    <div class="record-list-box" v-if="info.operationList.length">
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
          <div class="record-item">麻醉方式：{{item.mzfs}}</div>
          <div class="record-item">麻醉医师：{{item.mzys}}</div>
        </div>
      </div>
    </div>
    <div class="info-item-box">
      <layout-cell title="离院方式" color="#0079fb">{{info.lyfs}}</layout-cell>
      <layout-cell title="拟接收医疗机构名称" color="#0079fb">{{info.njsyljgmc}}</layout-cell>
      <layout-cell title="是否有出院31天内再住院计划" color="#0079fb">{{info.zzyjh}}</layout-cell>
      <layout-cell title="再住院目的" color="#0079fb">{{info.zzymd}}</layout-cell>
      <layout-cell title="入院前颅脑损伤患者昏迷时间" color="#0079fb">{{info.ryqhmsj}}天</layout-cell>
      <layout-cell title="入院后颅脑损伤患者昏迷时间" color="#0079fb">{{info.ryhhmsj}}天</layout-cell>
    </div>
    <div class="record-list-box">
      <div class="record-list-wrap">
        <layout-cell-block>
          <layout-cell title="住院费用(元)" color="#0079fb" slot="head"></layout-cell>
          <layout-cell title="总费用" color="#0079fb">{{info.zfy}}元</layout-cell>
          <layout-cell title="自付金额" color="#0079fb">{{info.zfje}}元</layout-cell>
        </layout-cell-block>
        <layout-cell-block>
          <layout-cell title="综合医疗服务类" color="#0079fb" slot="head"></layout-cell>
          <layout-cell title="一般医疗服务费" color="#0079fb">{{info.ybylfwf}}元</layout-cell>
          <layout-cell title="一般治疗操作费" color="#0079fb">{{info.ybzlczf}}元</layout-cell>
          <layout-cell title="护理费" color="#0079fb">{{info.hlf}}元</layout-cell>
          <layout-cell title="其他费用" color="#0079fb">{{info.qtfy}}元</layout-cell>
        </layout-cell-block>
        <layout-cell-block>
          <layout-cell title="诊断类" color="#0079fb" slot="head"></layout-cell>
          <layout-cell title="病理诊断费" color="#0079fb">{{info.blzdf}}元</layout-cell>
          <layout-cell title="实验室诊断费" color="#0079fb">{{info.syszdf}}元</layout-cell>
          <layout-cell title="影像学诊断费" color="#0079fb">{{info.yxxzdf}}元</layout-cell>
          <layout-cell title="临床诊断项目费" color="#0079fb">{{info.lczdxmf}}元</layout-cell>
        </layout-cell-block>
        <layout-cell-block>
          <layout-cell title="治疗类" color="#0079fb" slot="head"></layout-cell>
          <layout-cell title="非手术治疗费" color="#0079fb">{{info.fsszlf}}元</layout-cell>
          <layout-cell title="临床物理治疗费" color="#0079fb">{{info.lcwlzlf}}元</layout-cell>
          <layout-cell title="手术治疗费" color="#0079fb">{{info.sszlf}}元</layout-cell>
          <layout-cell title="麻醉费" color="#0079fb">{{info.mzf}}元</layout-cell>
          <layout-cell title="手术费" color="#0079fb">{{info.ssf}}元</layout-cell>
        </layout-cell-block>
        <layout-cell-block>
          <layout-cell title="康复类" color="#0079fb" slot="head"></layout-cell>
          <layout-cell title="康复费" color="#0079fb">{{info.kff}}元</layout-cell>
        </layout-cell-block>
        <layout-cell-block>
          <layout-cell title="中医类" color="#0079fb" slot="head"></layout-cell>
          <layout-cell title="中医治疗费" color="#0079fb">{{info.zyzlf}}元</layout-cell>
        </layout-cell-block>
        <layout-cell-block>
          <layout-cell title="西药类" color="#0079fb" slot="head"></layout-cell>
          <layout-cell title="西医费" color="#0079fb">{{info.xyf}}元</layout-cell>
          <layout-cell title="抗菌药物费" color="#0079fb">{{info.kjywf}}元</layout-cell>
        </layout-cell-block>
        <layout-cell-block>
          <layout-cell title="中药类" color="#0079fb" slot="head"></layout-cell>
          <layout-cell title="中成药费" color="#0079fb">{{info.zcyf}}元</layout-cell>
          <layout-cell title="中草药费" color="#0079fb">{{info.zcaoyf}}元</layout-cell>
        </layout-cell-block>
        <layout-cell-block>
          <layout-cell title="血液和血液制品类" color="#0079fb" slot="head"></layout-cell>
          <layout-cell title="血费" color="#0079fb">{{info.xf}}元</layout-cell>
          <layout-cell title="白蛋白类制品费" color="#0079fb">{{info.bdblzpf}}元</layout-cell>
          <layout-cell title="球蛋白类制品费" color="#0079fb">{{info.qdblzpf}}元</layout-cell>
          <layout-cell title="凝血因子类制品费" color="#0079fb">{{info.nxyzlzpf}}元</layout-cell>
          <layout-cell title="细胞因子类制品费" color="#0079fb">{{info.xbyzlzpf}}元</layout-cell>
        </layout-cell-block>
        <layout-cell-block>
          <layout-cell title="耗材类" color="#0079fb" slot="head"></layout-cell>
          <layout-cell title="检查用一次性医用材料费" color="#0079fb">{{info.jcclf}}元</layout-cell>
          <layout-cell title="治疗用一次性医用材料费" color="#0079fb">{{info.zlclf}}元</layout-cell>
          <layout-cell title="手术用一次性医用材料费" color="#0079fb">{{info.shclf}}元</layout-cell>
        </layout-cell-block>
        <layout-cell-block>
          <layout-cell title="其他费" color="#0079fb" slot="head"></layout-cell>
          <layout-cell title="其他费" color="#0079fb">{{info.qtf}}元</layout-cell>
        </layout-cell-block>
      </div>
    </div>
  </div>
</template>
<script>
import icon1Img from '@/assets/image/icon1.png';
export default {
  data () {
    return {
      info: {
        diagnosisList: [],
        operationList: []
      },
      icon1Img
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
        background: #0079fb;
        padding: 10px;
        color: #fff;
        position: relative;
        margin-bottom: 10px;
        &:after{
          position: absolute;
          top: 100%;
          content: '';
          height: 10px;
          left: 0;
          width: 100%;
          background: url('../../assets/image/wave.png') repeat-x;
          background-size: 35px 100%;
        }
      }
      .info-img-box{
        text-align: center;
        padding-bottom: 10px;
        .info-img{
          width: 55px;
          opacity: .8;
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
