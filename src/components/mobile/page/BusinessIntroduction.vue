<template>
  <div>
    <head-nav class="head-nav-show" :headerTitle="headerTitle"></head-nav>
    <div class="BusinessIntroduction-content">
      <div class="tab-msg" v-for="(i,index) in list" :key="index" @click="handleClick(i)">
        <div class="tab-msg-hover">
          <div class="date">
            <section>
              <h3>{{dateFormatting_day(i.date)}}</h3>
              <p>{{dateFormatting(i.date)}}</p>
            </section>
          </div>
          <div class="msg">
            <span class="m">{{i.text}}</span>
            <i class="el-icon-arrow-right"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import headNav from "../common/HeadNav.vue";
export default {
  components: {
    "head-nav": headNav
  },
  data() {
    return {
      headerTitle: "",
      list: [],
      CaseList: [
        // {
        //   date: "2018/12/01",
        //   text:
        //     "吉林东北亚创新金融资产交易中心有限公司《东金中心挂牌方管理办法》",
        //   url:
        //     "https://oss.neafex.com/regulation-gateway-public/%E4%B8%9C%E9%87%91%E8%A7%84%E7%AB%A0%E3%80%942018%E3%80%95%E7%AC%AC01%E5%8F%B7-%E6%8C%82%E7%89%8C%E6%96%B9%E7%AE%A1%E7%90%86%E5%8A%9E%E6%B3%95.pdf"
        // },
        // {
        //   date: "2018/12/01",
        //   text:
        //     "吉林东北亚创新金融资产交易中心有限公司《东金中心会员管理办法》",
        //   url:
        //     "https://oss.neafex.com/regulation-gateway-public/%E4%B8%9C%E9%87%91%E8%A7%84%E7%AB%A0%E3%80%942018%E3%80%95%E7%AC%AC02%E5%8F%B7-%E4%BC%9A%E5%91%98%E7%AE%A1%E7%90%86%E5%8A%9E%E6%B3%95.pdf"
        // },
        // {
        //   date: "2018/12/01",
        //   text:
        //     "吉林东北亚创新金融资产交易中心有限公司《东金中心投资者适当性管理办法》",
        //   url:
        //     "https://oss.neafex.com/regulation-gateway-public/%E4%B8%9C%E9%87%91%E8%A7%84%E7%AB%A0%E3%80%942018%E3%80%95%E7%AC%AC03%E5%8F%B7-%E6%8A%95%E8%B5%84%E8%80%85%E9%80%82%E5%BD%93%E6%80%A7%E7%AE%A1%E7%90%86%E5%8A%9E%E6%B3%95.pdf"
        // },
        {
          date: "2018/12/01",
          text:
            "吉林东北亚创新金融资产交易中心有限公司《东金中心定向融资计划业务管理办法》",
          url:
            "https://oss.neafex.com/regulation-gateway-public/%E4%B8%9C%E9%87%91%E8%A7%84%E7%AB%A0%E3%80%942018%E3%80%95%E7%AC%AC04%E5%8F%B7-%E5%AE%9A%E5%90%91%E8%9E%8D%E8%B5%84%E8%AE%A1%E5%88%92%E4%B8%9A%E5%8A%A1%E7%AE%A1%E7%90%86%E5%8A%9E%E6%B3%95.pdf"
        },
        {
          date: "2018/12/01",
          text:
            "吉林东北亚创新金融资产交易中心有限公司《东金中心金融资产交易业务管理办法》",
          url:
            "https://oss.neafex.com/regulation-gateway-public/%E4%B8%9C%E9%87%91%E8%A7%84%E7%AB%A0%E3%80%942018%E3%80%95%E7%AC%AC05%E5%8F%B7-%E9%87%91%E8%9E%8D%E8%B5%84%E4%BA%A7%E4%BA%A4%E6%98%93%E4%B8%9A%E5%8A%A1%E7%AE%A1%E7%90%86%E5%8A%9E%E6%B3%95.pdf"
        },
        {
          date: "2018/12/01",
          text:
            "吉林东北亚创新金融资产交易中心有限公司《东金中心信息发布业务规则》",
          url:
            "https://oss.neafex.com/regulation-gateway-public/%E4%B8%9C%E9%87%91%E8%A7%84%E7%AB%A0%E3%80%942018%E3%80%95%E7%AC%AC06%E5%8F%B7-%E4%BF%A1%E6%81%AF%E5%8F%91%E5%B8%83%E4%B8%9A%E5%8A%A1%E8%A7%84%E5%88%99.pdf"
        }
      ],
      PolicyList: [
        {
          date: "2017/02/22",
          text: "中国人民银行关于促进互联网金融健康发展的指导意见",
          content: `<div class=WordSection1 style='layout-grid:15.6pt'>

<p class=MsoNormal align=center style='text-align:center;mso-pagination:widow-orphan;
background:white'><span style='font-size:18.0pt;font-family:宋体;mso-ascii-font-family:
"microsoft yahei";mso-hansi-font-family:"microsoft yahei";mso-bidi-font-family:
宋体;color:#255A8E;mso-font-kerning:0pt'>中国人民银行关于促进互联网金融健康发展的指导意见</span><span
lang=EN-US style='font-size:18.0pt;font-family:"microsoft yahei",serif;
mso-fareast-font-family:宋体;mso-bidi-font-family:宋体;color:#255A8E;mso-font-kerning:
0pt'><o:p></o:p></span></p>

<p class=MsoNormal align=center style='text-align:center;mso-pagination:widow-orphan'><span
style='font-size:13.5pt;font-family:宋体;mso-ascii-font-family:"microsoft yahei";
mso-hansi-font-family:"microsoft yahei";mso-bidi-font-family:宋体;color:#999999;
mso-font-kerning:0pt'>发布时间：</span><span lang=EN-US style='font-size:13.5pt;
font-family:"microsoft yahei",serif;mso-fareast-font-family:宋体;mso-bidi-font-family:
宋体;color:#999999;mso-font-kerning:0pt'>2017-02-22<o:p></o:p></span></p>

<p class=MsoNormal align=left style='text-align:left;text-indent:24.0pt;
line-height:20.25pt;mso-pagination:widow-orphan'><span style='font-size:12.0pt;
font-family:"微软雅黑",sans-serif;mso-bidi-font-family:宋体;color:#3F3F3F;letter-spacing:
.6pt;mso-font-kerning:0pt'>为鼓励金融创新，促进互联网金融健康发展，明确监管责任，规范市场秩序，经党中央、国务院同意，中国人民银行、工业和信息化部、公安部、财政部、国家工商总局、国务院法制办、中国银行业监督管理委员会、中国证券监督管理委员会、中国保险监督管理委员会、国家互联网信息办公室日前联合印发了《关于促进互联网金融健康发展的指导意见》（银发〔<span
lang=EN-US>2015</span>〕<span lang=EN-US>221</span>号，以下简称《指导意见》）。</span><span
lang=EN-US style='font-size:13.5pt;font-family:"microsoft yahei",serif;
mso-fareast-font-family:宋体;mso-bidi-font-family:宋体;color:#255A8E;letter-spacing:
.6pt;mso-font-kerning:0pt'><o:p></o:p></span></p>

<p class=MsoNormal align=left style='text-align:left;text-indent:24.0pt;
line-height:20.25pt;mso-pagination:widow-orphan'><span style='font-size:12.0pt;
font-family:"微软雅黑",sans-serif;mso-bidi-font-family:宋体;color:#3F3F3F;letter-spacing:
.6pt;mso-font-kerning:0pt'>《指导意见》按照“鼓励创新、防范风险、趋利避害、健康发展”的总体要求，提出了一系列鼓励创新、支持互联网金融稳步发展的政策措施，积极鼓励互联网金融平台、产品和服务创新，鼓励从业机构相互合作，拓宽从业机构融资渠道，坚持简政放权和落实、完善财税政策，推动信用基础设施建设和配套服务体系建设。</span><span
lang=EN-US style='font-size:13.5pt;font-family:"microsoft yahei",serif;
mso-fareast-font-family:宋体;mso-bidi-font-family:宋体;color:#255A8E;letter-spacing:
.6pt;mso-font-kerning:0pt'><o:p></o:p></span></p>

<p class=MsoNormal align=left style='text-align:left;text-indent:24.0pt;
line-height:20.25pt;mso-pagination:widow-orphan'><span style='font-size:12.0pt;
font-family:"微软雅黑",sans-serif;mso-bidi-font-family:宋体;color:#3F3F3F;letter-spacing:
.6pt;mso-font-kerning:0pt'>《指导意见》按照“依法监管、适度监管、分类监管、协同监管、创新监管”的原则，确立了互联网支付、网络借贷、<span
class=GramE>股权众筹融资</span>、互联网基金销售、互联网保险、互联网信托和互联网消费金融等互联网金融主要业态的监管职责分工，落实了监管责任，明确了业务边界。</span><span
lang=EN-US style='font-size:13.5pt;font-family:"microsoft yahei",serif;
mso-fareast-font-family:宋体;mso-bidi-font-family:宋体;color:#255A8E;letter-spacing:
.6pt;mso-font-kerning:0pt'><o:p></o:p></span></p>

<p class=MsoNormal align=left style='text-align:left;text-indent:24.0pt;
line-height:20.25pt;mso-pagination:widow-orphan'><span style='font-size:12.0pt;
font-family:"微软雅黑",sans-serif;mso-bidi-font-family:宋体;color:#3F3F3F;letter-spacing:
.6pt;mso-font-kerning:0pt'>《指导意见》坚持以市场为导向发展互联网金融，遵循服务好实体经济、服从宏观调控和维护金融稳定的总体目标，切实保障消费者合法权益，维护公平竞争的市场秩序，在互联网行业管理，客户资金<span
class=GramE>第三方存管制</span>度，信息披露、风险提示和合格投资者制度，消费者权益保护，网络与信息安全，反洗钱和防范金融犯罪，加强互联网金融行业自律以及监管协调与数据统计监测等方面提出了具体要求。</span><span
lang=EN-US style='font-size:13.5pt;font-family:"microsoft yahei",serif;
mso-fareast-font-family:宋体;mso-bidi-font-family:宋体;color:#255A8E;letter-spacing:
.6pt;mso-font-kerning:0pt'><o:p></o:p></span></p>

<p class=MsoNormal align=left style='text-align:left;text-indent:24.0pt;
line-height:20.25pt;mso-pagination:widow-orphan'><span style='font-size:12.0pt;
font-family:"微软雅黑",sans-serif;mso-bidi-font-family:宋体;color:#3F3F3F;letter-spacing:
.6pt;mso-font-kerning:0pt'>下一步，各相关部门将按照《指导意见》的职责分工，认真贯彻落实《指导意见》的各项要求；互联网金融行业从业机构应按照《指导意见》的相关规定，依法合<span
class=GramE>规</span>开展各项经营活动。</span><span lang=EN-US style='font-size:13.5pt;
font-family:"microsoft yahei",serif;mso-fareast-font-family:宋体;mso-bidi-font-family:
宋体;color:#255A8E;letter-spacing:.6pt;mso-font-kerning:0pt'><o:p></o:p></span></p>

<p class=MsoNormal align=left style='text-align:left;text-indent:24.0pt;
line-height:20.25pt;mso-pagination:widow-orphan'><span style='font-size:12.0pt;
font-family:"微软雅黑",sans-serif;mso-bidi-font-family:宋体;color:#3F3F3F;letter-spacing:
.6pt;mso-font-kerning:0pt'>《指导意见》具体意见如下：</span><span lang=EN-US
style='font-size:13.5pt;font-family:"microsoft yahei",serif;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#255A8E;letter-spacing:.6pt;mso-font-kerning:
0pt'><o:p></o:p></span></p>

<p class=MsoNormal align=left style='text-align:left;text-indent:24.0pt;
line-height:20.25pt;mso-pagination:widow-orphan'><span style='font-size:12.0pt;
font-family:"微软雅黑",sans-serif;mso-bidi-font-family:宋体;color:#3F3F3F;letter-spacing:
.6pt;mso-font-kerning:0pt'>一、鼓励创新，支持互联网金融稳步发展</span><span lang=EN-US
style='font-size:13.5pt;font-family:"microsoft yahei",serif;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#255A8E;letter-spacing:.6pt;mso-font-kerning:
0pt'><o:p></o:p></span></p>

<p class=MsoNormal align=left style='text-align:left;text-indent:24.0pt;
line-height:20.25pt;mso-pagination:widow-orphan'><span style='font-size:12.0pt;
font-family:"微软雅黑",sans-serif;mso-bidi-font-family:宋体;color:#3F3F3F;letter-spacing:
.6pt;mso-font-kerning:0pt'>互联网金融是传统金融机构与互联网企业（以下统称从业机构）利用互联网技术和信息通信技术实现资金融通、支付、投资和信息中介服务的新型金融业务模式。互联网与金融深度融合是大势所趋，将对金融产品、业务、组织和服务等方面产生更加深刻的影响。互联网金融对促进小<span
class=GramE>微企业</span>发展和扩大就业发挥了现有金融机构难以替代的积极作用，为大众创业、万众创新打开了大门。促进互联网金融健康发展，有利于提升金融服务质量和效率，深化金融改革，促进金融创新发展，扩大金融业对内对外开放，构建多层次金融体系。作为新生事物，互联网金融既需要市场驱动，鼓励创新，也需要政策助力，促进发展。</span><span
lang=EN-US style='font-size:13.5pt;font-family:"microsoft yahei",serif;
mso-fareast-font-family:宋体;mso-bidi-font-family:宋体;color:#255A8E;letter-spacing:
.6pt;mso-font-kerning:0pt'><o:p></o:p></span></p>

<p class=MsoNormal align=left style='text-align:left;text-indent:24.0pt;
line-height:20.25pt;mso-pagination:widow-orphan'><span lang=EN-US
style='font-size:12.0pt;font-family:"微软雅黑",sans-serif;mso-bidi-font-family:
宋体;color:#3F3F3F;letter-spacing:.6pt;mso-font-kerning:0pt'>&nbsp; </span><span
style='font-size:12.0pt;font-family:"微软雅黑",sans-serif;mso-bidi-font-family:
宋体;color:#3F3F3F;letter-spacing:.6pt;mso-font-kerning:0pt'>（一）积极鼓励互联网金融平台、产品和服务创新，激发市场活力。鼓励银行、证券、保险、基金、信托和消费金融等金融机构依托互联网技术，实现传统金融业务与服务转型升级，积极开发基于互联网技术的新产品和新服务。支持有条件的金融机构建设创新型互联网平台开展网络银行、网络证券、网络保险、网络基金销售和网络消费金融等业务。支持互联网企业依法合<span
class=GramE>规</span>设立互联网支付机构、网络借贷平台、<span class=GramE>股权众筹融资</span>平台、网络金融产品销售平台，建立服务实体经济的多层次金融服务体系，更好地满足中小<span
class=GramE>微企业</span>和个人投融资需求，进一步拓展普惠金融的广度和深度。鼓励电子商务企业在符合金融法律法规规定的条件下自建和<span
class=GramE>完善线</span>上金融服务体系，有效拓展电商供应链业务。鼓励从业机构积极开展产品、服务、技术和管理创新，提升从业机构核心竞争力。</span><span
lang=EN-US style='font-size:13.5pt;font-family:"microsoft yahei",serif;
mso-fareast-font-family:宋体;mso-bidi-font-family:宋体;color:#255A8E;letter-spacing:
.6pt;mso-font-kerning:0pt'><o:p></o:p></span></p>

<p class=MsoNormal align=left style='text-align:left;text-indent:24.0pt;
line-height:20.25pt;mso-pagination:widow-orphan'><span lang=EN-US
style='font-size:12.0pt;font-family:"微软雅黑",sans-serif;mso-bidi-font-family:
宋体;color:#3F3F3F;letter-spacing:.6pt;mso-font-kerning:0pt'>&nbsp; </span><span
style='font-size:12.0pt;font-family:"微软雅黑",sans-serif;mso-bidi-font-family:
宋体;color:#3F3F3F;letter-spacing:.6pt;mso-font-kerning:0pt'>（二）鼓励从业机构相互合作，实现优势互补。支持各类金融机构与互联网企业开展合作，建立良好的互联网金融生态环境和产业链。鼓励银行业金融机构开展业务创新，为第三方支付机构和网络贷款平台等提供资金存管、支付清算等配套服务。支持小<span
class=GramE>微金融</span>服务机构与互联网企业开展业务合作，实现商业模式创新。支持证券、基金、信托、消费金融、期货机构与互联网企业开展合作，拓宽金融产品销售渠道，创新财富管理模式。鼓励保险公司与互联网企业合作，提升互联网金融企业风险抵御能力。</span><span
lang=EN-US style='font-size:13.5pt;font-family:"microsoft yahei",serif;
mso-fareast-font-family:宋体;mso-bidi-font-family:宋体;color:#255A8E;letter-spacing:
.6pt;mso-font-kerning:0pt'><o:p></o:p></span></p>

<p class=MsoNormal align=left style='text-align:left;text-indent:24.0pt;
line-height:20.25pt;mso-pagination:widow-orphan'><span lang=EN-US
style='font-size:12.0pt;font-family:"微软雅黑",sans-serif;mso-bidi-font-family:
宋体;color:#3F3F3F;letter-spacing:.6pt;mso-font-kerning:0pt'>&nbsp; </span><span
style='font-size:12.0pt;font-family:"微软雅黑",sans-serif;mso-bidi-font-family:
宋体;color:#3F3F3F;letter-spacing:.6pt;mso-font-kerning:0pt'>（三）拓宽从业机构融资渠道，改善融资环境。支持社会资本发起设立互联网金融产业投资基金，推动从业机构与创业投资机构、产业投资基金深度合作。鼓励符合条件的优质从业机构在主板、创业板等境内资本市场上市融资。鼓励银行业金融机构按照支持小<span
class=GramE>微企业</span>发展的各项金融政策，对处于初创期的从业机构予以支持。针对互联网企业特点，创新金融产品和服务。</span><span
lang=EN-US style='font-size:13.5pt;font-family:"microsoft yahei",serif;
mso-fareast-font-family:宋体;mso-bidi-font-family:宋体;color:#255A8E;letter-spacing:
.6pt;mso-font-kerning:0pt'><o:p></o:p></span></p>

<p class=MsoNormal align=left style='text-align:left;text-indent:24.0pt;
line-height:20.25pt;mso-pagination:widow-orphan'><span lang=EN-US
style='font-size:12.0pt;font-family:"微软雅黑",sans-serif;mso-bidi-font-family:
宋体;color:#3F3F3F;letter-spacing:.6pt;mso-font-kerning:0pt'>&nbsp; </span><span
style='font-size:12.0pt;font-family:"微软雅黑",sans-serif;mso-bidi-font-family:
宋体;color:#3F3F3F;letter-spacing:.6pt;mso-font-kerning:0pt'>（四）坚持简政放权，提供优质服务。各金融监管部门要积极支持金融机构开展互联网金融业务。按照法律法规规定，对符合条件的互联网企业开展相关金融业务实施高效管理。工商行政管理部门要支持互联网企业依法办理工商注册登记。电信主管部门、国家互联网信息管理部门要积极支持互联网金融业务，电信主管部门对互联网金融业务涉及的电信业务进行监管，国家互联网信息管理部门负责对金融信息服务、互联网信息内容等业务进行监管。积极开展互联网金融领域立法研究，适时出台相关管理规章，营造有利于互联网金融发展的良好制度环境。加大对从业机构专利、商标等知识产权的保护力度。鼓励省级人民政府加大对互联网金融的政策支持。支持设立专业化互联网金融研究机构，鼓励建设互联网金融信息交流平台，积极开展互联网金融研究。</span><span
lang=EN-US style='font-size:13.5pt;font-family:"microsoft yahei",serif;
mso-fareast-font-family:宋体;mso-bidi-font-family:宋体;color:#255A8E;letter-spacing:
.6pt;mso-font-kerning:0pt'><o:p></o:p></span></p>

<p class=MsoNormal align=left style='text-align:left;text-indent:24.0pt;
line-height:20.25pt;mso-pagination:widow-orphan'><span style='font-size:12.0pt;
font-family:"微软雅黑",sans-serif;mso-bidi-font-family:宋体;color:#3F3F3F;letter-spacing:
.6pt;mso-font-kerning:0pt'>（五）落实和完善有关财税政策。按照税收公平原则，对于业务规模较小、处于初创期的从业机构，符合我国现行对中小企业特别是小<span
class=GramE>微企业</span>税收政策条件的，可按规定享受税收优惠政策。结合金融业营业税改征增值税改革，统筹完善互联网金融税收政策。落实从业机构新技术、新产品研发费用税前加计扣除政策。</span><span
lang=EN-US style='font-size:13.5pt;font-family:"microsoft yahei",serif;
mso-fareast-font-family:宋体;mso-bidi-font-family:宋体;color:#255A8E;letter-spacing:
.6pt;mso-font-kerning:0pt'><o:p></o:p></span></p>

<p class=MsoNormal align=left style='text-align:left;text-indent:24.0pt;
line-height:20.25pt;mso-pagination:widow-orphan'><span lang=EN-US
style='font-size:12.0pt;font-family:"微软雅黑",sans-serif;mso-bidi-font-family:
宋体;color:#3F3F3F;letter-spacing:.6pt;mso-font-kerning:0pt'>&nbsp; </span><span
style='font-size:12.0pt;font-family:"微软雅黑",sans-serif;mso-bidi-font-family:
宋体;color:#3F3F3F;letter-spacing:.6pt;mso-font-kerning:0pt'>（六）推动信用基础设施建设，培育互联网金融配套服务体系。支持大数据存储、网络与信息安全维护等技术领域基础设施建设。鼓励从业机构依法建立信用信息共享平台。推动符合条件的相关从业机构接入金融信用信息基础数据库。允许有条件的从业机构依法申请征信业务许可。支持具备资质的信用中介组织开展互联网企业信用评级，增强市场信息透明度。鼓励会计、审计、法律、咨询等中介服务机构为互联网企业提供相关专业服务。</span><span
lang=EN-US style='font-size:13.5pt;font-family:"microsoft yahei",serif;
mso-fareast-font-family:宋体;mso-bidi-font-family:宋体;color:#255A8E;letter-spacing:
.6pt;mso-font-kerning:0pt'><o:p></o:p></span></p>

<p class=MsoNormal align=left style='text-align:left;text-indent:24.0pt;
line-height:20.25pt;mso-pagination:widow-orphan'><span style='font-size:12.0pt;
font-family:"微软雅黑",sans-serif;mso-bidi-font-family:宋体;color:#3F3F3F;letter-spacing:
.6pt;mso-font-kerning:0pt'>二、分类指导，明确互联网金融监管责任</span><span lang=EN-US
style='font-size:13.5pt;font-family:"microsoft yahei",serif;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#255A8E;letter-spacing:.6pt;mso-font-kerning:
0pt'><o:p></o:p></span></p>

<p class=MsoNormal align=left style='text-align:left;text-indent:24.0pt;
line-height:20.25pt;mso-pagination:widow-orphan'><span style='font-size:12.0pt;
font-family:"微软雅黑",sans-serif;mso-bidi-font-family:宋体;color:#3F3F3F;letter-spacing:
.6pt;mso-font-kerning:0pt'>互联网金融本质仍属于金融，没有改变金融风险隐蔽性、传染性、广泛性和突发性的特点。加强互联网金融监管，是促进互联网金融健康发展的内在要求。同时，互联网金融是新生事物和新兴业态，要制定适度宽松的监管政策，为互联网金融创新留有余地和空间。通过鼓励创新和加强监管相互支撑，促进互联网金融健康发展，更好地服务实体经济。互联网金融监管应遵循“依法监管、适度监管、分类监管、协同监管、创新监管”的原则，科学合理界定各业态的业务边界及准入条件，落实监管责任，明确风险底线，保护合法经营，坚决打击违法和违规行为。</span><span
lang=EN-US style='font-size:13.5pt;font-family:"microsoft yahei",serif;
mso-fareast-font-family:宋体;mso-bidi-font-family:宋体;color:#255A8E;letter-spacing:
.6pt;mso-font-kerning:0pt'><o:p></o:p></span></p>

<p class=MsoNormal align=left style='text-align:left;text-indent:24.0pt;
line-height:20.25pt;mso-pagination:widow-orphan'><span lang=EN-US
style='font-size:12.0pt;font-family:"微软雅黑",sans-serif;mso-bidi-font-family:
宋体;color:#3F3F3F;letter-spacing:.6pt;mso-font-kerning:0pt'>&nbsp; </span><span
style='font-size:12.0pt;font-family:"微软雅黑",sans-serif;mso-bidi-font-family:
宋体;color:#3F3F3F;letter-spacing:.6pt;mso-font-kerning:0pt'>（七）互联网支付。互联网支付是指通过计算机、手机等设备，依托互联网发起支付指令、转移货币资金的服务。互联网支付应始终坚持服务电子商务发展和为社会提供小额、快捷、便民小<span
class=GramE>微支付</span>服务的宗旨。银行业金融机构和第三方支付机构从事互联网支付，应遵守现行法律法规和监管规定。第三方支付机构与其他机构开展合作的，应清晰界定各方的权利义务关系，建立有效的风险隔离机制和客户权益保障机制。要向客户充分披露服务信息，清晰地提示业务风险，不得夸大支付服务中介的性质和职能。互联网支付业务由人民银行负责监管。</span><span
lang=EN-US style='font-size:13.5pt;font-family:"microsoft yahei",serif;
mso-fareast-font-family:宋体;mso-bidi-font-family:宋体;color:#255A8E;letter-spacing:
.6pt;mso-font-kerning:0pt'><o:p></o:p></span></p>

<p class=MsoNormal align=left style='text-align:left;text-indent:24.0pt;
line-height:20.25pt;mso-pagination:widow-orphan'><span lang=EN-US
style='font-size:12.0pt;font-family:"微软雅黑",sans-serif;mso-bidi-font-family:
宋体;color:#3F3F3F;letter-spacing:.6pt;mso-font-kerning:0pt'>&nbsp;&nbsp;</span><span
style='font-size:12.0pt;font-family:"微软雅黑",sans-serif;mso-bidi-font-family:
宋体;color:#3F3F3F;letter-spacing:.6pt;mso-font-kerning:0pt'>（八）网络借贷。网络借贷包括个体网络借贷（即<span
lang=EN-US>P2P</span>网络借贷）和网络小额贷款。个体网络借贷是指个体和个体之间通过互联网平台实现的直接借贷。在个体网络借贷平台上发生的直接借贷行为属于民间借贷范畴，受合同法、民法通则等法律法规以及最高人民法院相关司法解释规范。个体网络借贷要坚持平台功能，为投资方和融资方提供信息交互、撮合、资信评估等中介服务。个体网络借贷机构要明确信息中介性质，主要为借贷双方的直接借贷提供信息服务，不得提供增信服务，不得非法集资。网络小额贷款是指互联网企业通过其控制的小额贷款公司，利用互联网向客户提供的小额贷款。网络小额贷款应遵守现有小额贷款公司监管规定，发挥网络贷款优势，努力降低客户融资成本。网络借贷业务由银监会负责监管。</span><span
lang=EN-US style='font-size:13.5pt;font-family:"microsoft yahei",serif;
mso-fareast-font-family:宋体;mso-bidi-font-family:宋体;color:#255A8E;letter-spacing:
.6pt;mso-font-kerning:0pt'><o:p></o:p></span></p>

<p class=MsoNormal align=left style='text-align:left;text-indent:24.0pt;
line-height:20.25pt;mso-pagination:widow-orphan'><span lang=EN-US
style='font-size:12.0pt;font-family:"微软雅黑",sans-serif;mso-bidi-font-family:
宋体;color:#3F3F3F;letter-spacing:.6pt;mso-font-kerning:0pt'>&nbsp; </span><span
style='font-size:12.0pt;font-family:"微软雅黑",sans-serif;mso-bidi-font-family:
宋体;color:#3F3F3F;letter-spacing:.6pt;mso-font-kerning:0pt'>（九）<span
class=GramE>股权众筹融资</span>。<span class=GramE>股权众筹融资</span>主要是指通过互联网形式进行公开小额股权融资的活动。<span
class=GramE>股权众筹融资</span>必须通过<span class=GramE>股权众筹融资</span>中介机构平台（互联网网站或其他类似的电子媒介）进行。<span
class=GramE>股权众筹融资</span>中介机构可以在符合法律法规规定前提下，对业务模式进行创新探索，发挥<span class=GramE>股权众筹融资</span>作为多层次资本市场有机组成部分的作用，更好服务创新创业企业。<span
class=GramE>股权众筹融资</span>方应为小微企业，应通过<span class=GramE>股权众筹融资</span>中介机构向投资人如实披露企业的商业模式、经营管理、财务、资金使用等关键信息，不得误导或欺诈投资者。投资者应当充分了解<span
class=GramE>股权众筹融资</span>活动风险，具备相应风险承受能力，进行小额投资。<span class=GramE>股权众筹融资</span>业务由证监会负责监管。</span><span
lang=EN-US style='font-size:13.5pt;font-family:"microsoft yahei",serif;
mso-fareast-font-family:宋体;mso-bidi-font-family:宋体;color:#255A8E;letter-spacing:
.6pt;mso-font-kerning:0pt'><o:p></o:p></span></p>

<p class=MsoNormal align=left style='text-align:left;text-indent:24.0pt;
line-height:20.25pt;mso-pagination:widow-orphan'><span lang=EN-US
style='font-size:12.0pt;font-family:"微软雅黑",sans-serif;mso-bidi-font-family:
宋体;color:#3F3F3F;letter-spacing:.6pt;mso-font-kerning:0pt'>&nbsp; </span><span
style='font-size:12.0pt;font-family:"微软雅黑",sans-serif;mso-bidi-font-family:
宋体;color:#3F3F3F;letter-spacing:.6pt;mso-font-kerning:0pt'>（十）互联网基金销售。基金销售机构与其他机构通过互联网合作销售基金等理财产品的，要切实履行风险披露义务，不得通过违规承诺收益方式吸引客户；基金管理人应当采取有效措施防范资产配置中的期限错配和流动性风险；基金销售机构及其合作机构通过其他活动为投资人提供收益的，应当对收益构成、先决条件、适用情形等进行全面、真实、准确表述和列示，不得与基金产品收益混同。第三方支付机构在开展基金互联网销售支付服务过程中，应当遵守人民银行、证监会关于客户备付金及基金销售结算资金的相关监管要求。第三方支付机构的客户备付金只能用于办理客户委托的支付业务，不得用于垫付基金和其他理财产品的资金赎回。互联网基金销售业务由证监会负责监管。</span><span
lang=EN-US style='font-size:13.5pt;font-family:"microsoft yahei",serif;
mso-fareast-font-family:宋体;mso-bidi-font-family:宋体;color:#255A8E;letter-spacing:
.6pt;mso-font-kerning:0pt'><o:p></o:p></span></p>

<p class=MsoNormal align=left style='text-align:left;text-indent:24.0pt;
line-height:20.25pt;mso-pagination:widow-orphan'><span lang=EN-US
style='font-size:12.0pt;font-family:"微软雅黑",sans-serif;mso-bidi-font-family:
宋体;color:#3F3F3F;letter-spacing:.6pt;mso-font-kerning:0pt'>&nbsp; </span><span
style='font-size:12.0pt;font-family:"微软雅黑",sans-serif;mso-bidi-font-family:
宋体;color:#3F3F3F;letter-spacing:.6pt;mso-font-kerning:0pt'>（十一）互联网保险。保险公司开展互联网保险业务，应遵循安全性、保密性和稳定性原则，加强风险管理，完善内控系统，确保交易安全、信息安全和资金安全。专业互联网保险公司应当坚持服务互联网经济活动的基本定位，提供有针对性的保险服务。保险公司应建立对所属电子商务公司等非保险类子公司的管理制度，建立必要的防火墙。保险公司通过互联网销售保险产品，不得进行不实陈述、片面或夸大宣传过往业绩、违规承诺收益或者承担损失等误导性描述。互联网保险业务由保监会负责监管。</span><span
lang=EN-US style='font-size:13.5pt;font-family:"microsoft yahei",serif;
mso-fareast-font-family:宋体;mso-bidi-font-family:宋体;color:#255A8E;letter-spacing:
.6pt;mso-font-kerning:0pt'><o:p></o:p></span></p>

<p class=MsoNormal align=left style='text-align:left;text-indent:24.0pt;
line-height:20.25pt;mso-pagination:widow-orphan'><span lang=EN-US
style='font-size:12.0pt;font-family:"微软雅黑",sans-serif;mso-bidi-font-family:
宋体;color:#3F3F3F;letter-spacing:.6pt;mso-font-kerning:0pt'>&nbsp;&nbsp;(</span><span
style='font-size:12.0pt;font-family:"微软雅黑",sans-serif;mso-bidi-font-family:
宋体;color:#3F3F3F;letter-spacing:.6pt;mso-font-kerning:0pt'>十二<span lang=EN-US>)</span>互联网信托和互联网消费金融。信托公司、消费金融公司通过互联网开展业务的，要严格遵循监管规定，加强风险管理，确保交易合法合<span
class=GramE>规</span>，并保守客户信息。信托公司通过互联网进行产品销售及开展其他信托业务的，要遵守合格投资者等监管规定，审慎甄别客户身份和评估客户风险承受能力，不能将产品销售给与风险承受能力不相匹配的客户。信托公司与消费金融公司要制定完善产品文件签署制度，保证交易过程合法合<span
class=GramE>规</span>，安全规范。互联网信托业务、互联网消费金融业务由银监会负责监管。</span><span lang=EN-US
style='font-size:13.5pt;font-family:"microsoft yahei",serif;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#255A8E;letter-spacing:.6pt;mso-font-kerning:
0pt'><o:p></o:p></span></p>

<p class=MsoNormal align=left style='text-align:left;text-indent:24.0pt;
line-height:20.25pt;mso-pagination:widow-orphan'><span style='font-size:12.0pt;
font-family:"微软雅黑",sans-serif;mso-bidi-font-family:宋体;color:#3F3F3F;letter-spacing:
.6pt;mso-font-kerning:0pt'>三、健全制度，规范互联网金融市场秩序</span><span lang=EN-US
style='font-size:13.5pt;font-family:"microsoft yahei",serif;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#255A8E;letter-spacing:.6pt;mso-font-kerning:
0pt'><o:p></o:p></span></p>

<p class=MsoNormal align=left style='text-align:left;text-indent:24.0pt;
line-height:20.25pt;mso-pagination:widow-orphan'><span style='font-size:12.0pt;
font-family:"微软雅黑",sans-serif;mso-bidi-font-family:宋体;color:#3F3F3F;letter-spacing:
.6pt;mso-font-kerning:0pt'>发展互联网金融要以市场为导向，遵循服务实体经济、服从宏观调控和维护金融稳定的总体目标，切实保障消费者合法权益，维护公平竞争的市场秩序。要细化管理制度，为互联网金融健康发展营造良好环境。</span><span
lang=EN-US style='font-size:13.5pt;font-family:"microsoft yahei",serif;
mso-fareast-font-family:宋体;mso-bidi-font-family:宋体;color:#255A8E;letter-spacing:
.6pt;mso-font-kerning:0pt'><o:p></o:p></span></p>

<p class=MsoNormal align=left style='text-align:left;text-indent:24.0pt;
line-height:20.25pt;mso-pagination:widow-orphan'><span lang=EN-US
style='font-size:12.0pt;font-family:"微软雅黑",sans-serif;mso-bidi-font-family:
宋体;color:#3F3F3F;letter-spacing:.6pt;mso-font-kerning:0pt'>&nbsp; </span><span
style='font-size:12.0pt;font-family:"微软雅黑",sans-serif;mso-bidi-font-family:
宋体;color:#3F3F3F;letter-spacing:.6pt;mso-font-kerning:0pt'>（十三）互联网行业管理。任何组织和个人开设网站从事互联网金融业务的，除应按规定履行相关金融监管程序外，还应依法向电信主管部门履行网站备案手续，否则不得开展互联网金融业务。工业和信息化部负责对互联网金融业务涉及的电信业务进行监管，国家互联网信息办公室负责对金融信息服务、互联网信息内容等业务进行监管，两部门按职责制定相关监管细则。</span><span
lang=EN-US style='font-size:13.5pt;font-family:"microsoft yahei",serif;
mso-fareast-font-family:宋体;mso-bidi-font-family:宋体;color:#255A8E;letter-spacing:
.6pt;mso-font-kerning:0pt'><o:p></o:p></span></p>

<p class=MsoNormal align=left style='text-align:left;text-indent:24.0pt;
line-height:20.25pt;mso-pagination:widow-orphan'><span lang=EN-US
style='font-size:12.0pt;font-family:"微软雅黑",sans-serif;mso-bidi-font-family:
宋体;color:#3F3F3F;letter-spacing:.6pt;mso-font-kerning:0pt'>&nbsp; </span><span
style='font-size:12.0pt;font-family:"微软雅黑",sans-serif;mso-bidi-font-family:
宋体;color:#3F3F3F;letter-spacing:.6pt;mso-font-kerning:0pt'>（十四）客户资金<span
class=GramE>第三方存管制</span>度。除另有规定外，从业机构应当选择符合条件的银行业金融机构作为资金存管机构，对客户资金进行管理和监督，实现客户资金与从业机构自身资金分账管理。客户资金存管账户应接受独立审计并向客户公开审计结果。人民银行会同金融监管部门按照职责分工实施监管，并制定相关监管细则。</span><span
lang=EN-US style='font-size:13.5pt;font-family:"microsoft yahei",serif;
mso-fareast-font-family:宋体;mso-bidi-font-family:宋体;color:#255A8E;letter-spacing:
.6pt;mso-font-kerning:0pt'><o:p></o:p></span></p>

<p class=MsoNormal align=left style='text-align:left;text-indent:24.0pt;
line-height:20.25pt;mso-pagination:widow-orphan'><span lang=EN-US
style='font-size:12.0pt;font-family:"微软雅黑",sans-serif;mso-bidi-font-family:
宋体;color:#3F3F3F;letter-spacing:.6pt;mso-font-kerning:0pt'>&nbsp; </span><span
style='font-size:12.0pt;font-family:"微软雅黑",sans-serif;mso-bidi-font-family:
宋体;color:#3F3F3F;letter-spacing:.6pt;mso-font-kerning:0pt'>（十五）信息披露、风险提示和合格投资者制度。从业机构应当对客户进行充分的信息披露，及时向投资者公布其经营活动和财务状况的相关信息，以便投资者充分了解从业机构运作状况，促使从业机构稳健经营和控制风险。从业机构应当向各参与方详细说明交易模式、参与方的权利和义务，并进行充分的风险提示。要研究建立互联网金融的合格投资者制度，提升投资者保护水平。有关部门按照职责分工负责监管。</span><span
lang=EN-US style='font-size:13.5pt;font-family:"microsoft yahei",serif;
mso-fareast-font-family:宋体;mso-bidi-font-family:宋体;color:#255A8E;letter-spacing:
.6pt;mso-font-kerning:0pt'><o:p></o:p></span></p>

<p class=MsoNormal align=left style='text-align:left;text-indent:24.0pt;
line-height:20.25pt;mso-pagination:widow-orphan'><span lang=EN-US
style='font-size:12.0pt;font-family:"微软雅黑",sans-serif;mso-bidi-font-family:
宋体;color:#3F3F3F;letter-spacing:.6pt;mso-font-kerning:0pt'>&nbsp; </span><span
style='font-size:12.0pt;font-family:"微软雅黑",sans-serif;mso-bidi-font-family:
宋体;color:#3F3F3F;letter-spacing:.6pt;mso-font-kerning:0pt'>（十六）消费者权益保护。研究制定互联网金融消费者教育规划，及时发布维权提示。加强互联网金融产品合同内容、免责条款规定等与消费者利益相关的信息披露工作，依法监督处理经营者利用合同格式条款侵害消费者合法权益的违法、违规行为。构建在线争议解决、现场接待受理、监管部门受理投诉、第三方调解以及仲裁、诉讼等多元化纠纷解决机制。细化完善互联网金融个人信息保护的原则、标准和操作流程。严禁网络销售金融产品过程中的不实宣传、强制捆绑销售。人民银行、银监会、证监会、保监会会同有关行政执法部门，根据职责分工依法开展互联网金融领域消费者和投资者权益保护工作。</span><span
lang=EN-US style='font-size:13.5pt;font-family:"microsoft yahei",serif;
mso-fareast-font-family:宋体;mso-bidi-font-family:宋体;color:#255A8E;letter-spacing:
.6pt;mso-font-kerning:0pt'><o:p></o:p></span></p>

<p class=MsoNormal align=left style='text-align:left;text-indent:24.0pt;
line-height:20.25pt;mso-pagination:widow-orphan'><span lang=EN-US
style='font-size:12.0pt;font-family:"微软雅黑",sans-serif;mso-bidi-font-family:
宋体;color:#3F3F3F;letter-spacing:.6pt;mso-font-kerning:0pt'>&nbsp; </span><span
style='font-size:12.0pt;font-family:"微软雅黑",sans-serif;mso-bidi-font-family:
宋体;color:#3F3F3F;letter-spacing:.6pt;mso-font-kerning:0pt'>（十七）网络与信息安全。从业机构应当切实提升技术安全水平，妥善保管客户资料和交易信息，不得非法买卖、泄露客户个人信息。人民银行、银监会、证监会、保监会、工业和信息化部、公安部、国家互联网信息办公室分别负责对相关从业机构的网络与信息安全保障进行监管，并制定相关监管细则和技术安全标准。</span><span
lang=EN-US style='font-size:13.5pt;font-family:"microsoft yahei",serif;
mso-fareast-font-family:宋体;mso-bidi-font-family:宋体;color:#255A8E;letter-spacing:
.6pt;mso-font-kerning:0pt'><o:p></o:p></span></p>

<p class=MsoNormal align=left style='text-align:left;text-indent:24.0pt;
line-height:20.25pt;mso-pagination:widow-orphan'><span lang=EN-US
style='font-size:12.0pt;font-family:"微软雅黑",sans-serif;mso-bidi-font-family:
宋体;color:#3F3F3F;letter-spacing:.6pt;mso-font-kerning:0pt'>&nbsp; </span><span
style='font-size:12.0pt;font-family:"微软雅黑",sans-serif;mso-bidi-font-family:
宋体;color:#3F3F3F;letter-spacing:.6pt;mso-font-kerning:0pt'>（十八）反洗钱和防范金融犯罪。从业机构应当采取有效措施识别客户身份，主动监测并报告可疑交易，妥善保存客户资料和交易记录。从业机构有义务按照有关规定，建立健全有关协助查询、冻结的规章制度，协助公安机关和司法机关依法、及时查询、冻结涉案财产，配合公安机关和司法机关做好取证和执行工作。坚决打击涉及非法集资等互联网金融犯罪，防范金融风险，维护金融秩序。金融机构在和互联网企业开展合作、代理时应根据有关法律和规定签订包括反洗钱和防范金融犯罪要求的合作、代理协议，并确保不因合作、代理关系而降低反洗钱和金融犯罪执行标准。人民银行牵头负责对从业机构履行反洗<span
class=GramE>钱义务</span>进行监管，并制定相关监管细则。打击互联网金融犯罪工作由公安部牵头负责。</span><span
lang=EN-US style='font-size:13.5pt;font-family:"microsoft yahei",serif;
mso-fareast-font-family:宋体;mso-bidi-font-family:宋体;color:#255A8E;letter-spacing:
.6pt;mso-font-kerning:0pt'><o:p></o:p></span></p>

<p class=MsoNormal align=left style='text-align:left;text-indent:24.0pt;
line-height:20.25pt;mso-pagination:widow-orphan'><span lang=EN-US
style='font-size:12.0pt;font-family:"微软雅黑",sans-serif;mso-bidi-font-family:
宋体;color:#3F3F3F;letter-spacing:.6pt;mso-font-kerning:0pt'>&nbsp; </span><span
style='font-size:12.0pt;font-family:"微软雅黑",sans-serif;mso-bidi-font-family:
宋体;color:#3F3F3F;letter-spacing:.6pt;mso-font-kerning:0pt'>（十九）加强互联网金融行业自律。充分发挥行业自律机制在规范从业机构市场行为和保护行业合法权益等方面的积极作用。人民银行会同有关部门，组建中国互联网金融协会。协会要按业务类型，制订经营管理规则和行业标准，推动机构之间的业务交流和信息共享。协会要明确自律惩戒机制，提高行业规则和标准的约束力。强化守法、诚信、自律意识，树立从业机构服务经济社会发展的正面形象，营造诚信规范发展的良好氛围。</span><span
lang=EN-US style='font-size:13.5pt;font-family:"microsoft yahei",serif;
mso-fareast-font-family:宋体;mso-bidi-font-family:宋体;color:#255A8E;letter-spacing:
.6pt;mso-font-kerning:0pt'><o:p></o:p></span></p>

<p class=MsoNormal align=left style='text-align:left;text-indent:24.0pt;
line-height:20.25pt;mso-pagination:widow-orphan'><span lang=EN-US
style='font-size:12.0pt;font-family:"微软雅黑",sans-serif;mso-bidi-font-family:
宋体;color:#3F3F3F;letter-spacing:.6pt;mso-font-kerning:0pt'>&nbsp; </span><span
style='font-size:12.0pt;font-family:"微软雅黑",sans-serif;mso-bidi-font-family:
宋体;color:#3F3F3F;letter-spacing:.6pt;mso-font-kerning:0pt'>（二十）监管协调与数据统计监测。各监管部门要相互协作、形成合力，充分发挥金融监管协调部际联席会议制度的作用。人民银行、银监会、证监会、保监会应当密切关注互联网金融业务发展及相关风险，对监管政策进行跟踪评估，适时提出调整建议，不断总结监管经验。财政部负责互联网金融从业机构财务监管政策。人民银行会同有关部门，负责建立和完善互联网金融数据统计监测体系，相关部门按照监管职责分工负责相关互联网金融数据统计和监测工作，并实现统计数据和信息共享。</span><span
lang=EN-US style='font-size:13.5pt;font-family:"microsoft yahei",serif;
mso-fareast-font-family:宋体;mso-bidi-font-family:宋体;color:#255A8E;letter-spacing:
.6pt;mso-font-kerning:0pt'><o:p></o:p></span></p>

<p class=MsoNormal align=left style='text-align:left;text-indent:24.0pt;
line-height:20.25pt;mso-pagination:widow-orphan'><span lang=EN-US
style='font-size:12.0pt;font-family:"微软雅黑",sans-serif;mso-bidi-font-family:
宋体;color:#3F3F3F;letter-spacing:.6pt;mso-font-kerning:0pt'>&nbsp;</span><span
lang=EN-US style='font-size:13.5pt;font-family:"microsoft yahei",serif;
mso-fareast-font-family:宋体;mso-bidi-font-family:宋体;color:#255A8E;letter-spacing:
.6pt;mso-font-kerning:0pt'><o:p></o:p></span></p>

<p class=MsoNormal align=right style='text-align:right;text-indent:24.0pt;
line-height:20.25pt;mso-pagination:widow-orphan'><span style='font-size:12.0pt;
font-family:"微软雅黑",sans-serif;mso-bidi-font-family:宋体;color:#3F3F3F;letter-spacing:
.6pt;mso-font-kerning:0pt'>来源：银监会</span><span lang=EN-US style='font-size:13.5pt;
font-family:"microsoft yahei",serif;mso-fareast-font-family:宋体;mso-bidi-font-family:
宋体;color:#255A8E;letter-spacing:.6pt;mso-font-kerning:0pt'><o:p></o:p></span></p>

<p class=MsoNormal><span lang=EN-US><o:p>&nbsp;</o:p></span></p>

</div>

`
        },
        {
          date: "2017/02/22",
          text: "中国银监会关于2015年小微企业金融服务工作的指导意见",
          content: `<div class=WordSection1 style='layout-grid:15.6pt'>

<p class=MsoNormal align=center style='text-align:center;mso-pagination:widow-orphan;
background:white'><span style='font-size:18.0pt;font-family:宋体;mso-ascii-font-family:
"microsoft yahei";mso-hansi-font-family:"microsoft yahei";mso-bidi-font-family:
宋体;color:#255A8E;mso-font-kerning:0pt'>中国银监会关于</span><span lang=EN-US
style='font-size:18.0pt;font-family:"microsoft yahei",serif;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#255A8E;mso-font-kerning:0pt'>2015</span><span
style='font-size:18.0pt;font-family:宋体;mso-ascii-font-family:"microsoft yahei";
mso-hansi-font-family:"microsoft yahei";mso-bidi-font-family:宋体;color:#255A8E;
mso-font-kerning:0pt'>年小<span class=GramE>微企业</span>金融服务工作的指导意见</span><span
lang=EN-US style='font-size:18.0pt;font-family:"microsoft yahei",serif;
mso-fareast-font-family:宋体;mso-bidi-font-family:宋体;color:#255A8E;mso-font-kerning:
0pt'><o:p></o:p></span></p>

<p class=MsoNormal align=center style='text-align:center;mso-pagination:widow-orphan'><span
style='font-size:13.5pt;font-family:宋体;mso-ascii-font-family:"microsoft yahei";
mso-hansi-font-family:"microsoft yahei";mso-bidi-font-family:宋体;color:#999999;
mso-font-kerning:0pt'>发布时间：</span><span lang=EN-US style='font-size:13.5pt;
font-family:"microsoft yahei",serif;mso-fareast-font-family:宋体;mso-bidi-font-family:
宋体;color:#999999;mso-font-kerning:0pt'>2017-02-22<o:p></o:p></span></p>

<p class=MsoNormal align=left style='text-align:left;text-indent:24.0pt;
line-height:20.25pt;mso-pagination:widow-orphan'><span class=GramE><span
style='font-size:12.0pt;font-family:"微软雅黑",sans-serif;mso-bidi-font-family:
宋体;color:#3F3F3F;letter-spacing:.6pt;mso-font-kerning:0pt'>各银监</span></span><span
style='font-size:12.0pt;font-family:"微软雅黑",sans-serif;mso-bidi-font-family:
宋体;color:#3F3F3F;letter-spacing:.6pt;mso-font-kerning:0pt'>局，各政策性银行、国有商业银行、股份制商业银行，邮政储蓄银行，中国银行业协会、中国融资<span
class=GramE>担保业</span>协会、中国小额贷款公司协会：</span><span lang=EN-US style='font-size:
13.5pt;font-family:"microsoft yahei",serif;mso-fareast-font-family:宋体;
mso-bidi-font-family:宋体;color:#255A8E;letter-spacing:.6pt;mso-font-kerning:
0pt'><o:p></o:p></span></p>

<p class=MsoNormal align=left style='text-align:left;text-indent:24.0pt;
line-height:20.25pt;mso-pagination:widow-orphan'><span style='mso-bidi-font-size:
10.5pt;font-family:"微软雅黑",sans-serif;mso-bidi-font-family:宋体;color:#3F3F3F;
letter-spacing:.6pt;mso-font-kerning:0pt'>为贯彻落实党中央国务院关于金融支持小<span class=GramE>微企业</span>发展的决策部署，持续改进小<span
class=GramE>微企业</span>金融服务，促进经济提质增效升级，现就</span><span lang=EN-US
style='font-size:12.0pt;font-family:"微软雅黑",sans-serif;mso-bidi-font-family:
宋体;color:#3F3F3F;letter-spacing:.6pt;mso-font-kerning:0pt'>2015</span><span
style='mso-bidi-font-size:10.5pt;font-family:"微软雅黑",sans-serif;mso-bidi-font-family:
宋体;color:#3F3F3F;letter-spacing:.6pt;mso-font-kerning:0pt'>年小<span class=GramE>微企业</span>金融服务工作提出以下指导意见：</span><span
lang=EN-US style='font-size:13.5pt;font-family:"microsoft yahei",serif;
mso-fareast-font-family:宋体;mso-bidi-font-family:宋体;color:#255A8E;letter-spacing:
.6pt;mso-font-kerning:0pt'><o:p></o:p></span></p>

<p class=MsoNormal align=left style='text-align:left;text-indent:24.0pt;
line-height:20.25pt;mso-pagination:widow-orphan'><span style='font-size:12.0pt;
font-family:"微软雅黑",sans-serif;mso-bidi-font-family:宋体;color:#3F3F3F;letter-spacing:
.6pt;mso-font-kerning:0pt'>一、明确工作目标，努力实现“三个不低于”</span><span lang=EN-US
style='font-size:13.5pt;font-family:"microsoft yahei",serif;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#255A8E;letter-spacing:.6pt;mso-font-kerning:
0pt'><o:p></o:p></span></p>

<p class=MsoNormal align=left style='text-align:left;text-indent:24.0pt;
line-height:20.25pt;mso-pagination:widow-orphan'><span style='font-size:12.0pt;
font-family:"微软雅黑",sans-serif;mso-bidi-font-family:宋体;color:#3F3F3F;letter-spacing:
.6pt;mso-font-kerning:0pt'>当前我国经济发展已进入新常态，商业银行要认真贯彻党中央国务院的决策部署，进一步改进小<span
class=GramE>微企业</span>金融服务，积极推动大众创业、万众创新。<span lang=EN-US>2015</span>年要继续执行好现有的各项小<span
class=GramE>微企业</span>金融服务政策，强化利率风险定价机制、独立核算机制、高效审批机制、激励约束机制、专业人员培训机制和违约信息通报机制等“六项机制”建设，落实小<span
class=GramE>微企业</span>金融服务专营机构单列信贷计划、单独配置人力资源和财务资源、单独客户认定与信贷评审、单独会计核算的“四单原则”。在有效提高贷款增量的基础上，努力实现小<span
class=GramE>微企业</span>贷款增速不低于各项贷款平均增速，小<span class=GramE>微企业</span>贷款户数不低于上年同期户数，小<span
class=GramE>微企业申贷获得</span>率不低于上年同期水平。</span><span lang=EN-US style='font-size:
13.5pt;font-family:"microsoft yahei",serif;mso-fareast-font-family:宋体;
mso-bidi-font-family:宋体;color:#255A8E;letter-spacing:.6pt;mso-font-kerning:
0pt'><o:p></o:p></span></p>

<p class=MsoNormal align=left style='text-align:left;text-indent:24.0pt;
line-height:20.25pt;mso-pagination:widow-orphan'><span style='font-size:12.0pt;
font-family:"微软雅黑",sans-serif;mso-bidi-font-family:宋体;color:#3F3F3F;letter-spacing:
.6pt;mso-font-kerning:0pt'>二、单列信贷计划，优化信贷结构</span><span lang=EN-US
style='font-size:13.5pt;font-family:"microsoft yahei",serif;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#255A8E;letter-spacing:.6pt;mso-font-kerning:
0pt'><o:p></o:p></span></p>

<p class=MsoNormal align=left style='text-align:left;text-indent:24.0pt;
line-height:20.25pt;mso-pagination:widow-orphan'><span style='font-size:12.0pt;
font-family:"微软雅黑",sans-serif;mso-bidi-font-family:宋体;color:#3F3F3F;letter-spacing:
.6pt;mso-font-kerning:0pt'>商业银行要围绕小<span class=GramE>微企业</span>贷款增速不低于各项贷款平均增速的目标，年初单列全年小<span
class=GramE>微企业</span>信贷计划，并于一季度末前将经本行主要负责人审批的小<span class=GramE>微企业</span>信贷计划报送监管部门，执行过程中不得挤占、挪用。年中调整信贷计划的商业银行，需及时向监管部门报告并说明调整原因。</span><span
lang=EN-US style='font-size:13.5pt;font-family:"microsoft yahei",serif;
mso-fareast-font-family:宋体;mso-bidi-font-family:宋体;color:#255A8E;letter-spacing:
.6pt;mso-font-kerning:0pt'><o:p></o:p></span></p>

<p class=MsoNormal align=left style='text-align:left;text-indent:24.0pt;
line-height:20.25pt;mso-pagination:widow-orphan'><span style='font-size:12.0pt;
font-family:"微软雅黑",sans-serif;mso-bidi-font-family:宋体;color:#3F3F3F;letter-spacing:
.6pt;mso-font-kerning:0pt'>商业银行要优化信贷结构，用好增量，盘活存量。通过信贷资产证券化、信贷资产转让等方式腾挪信贷资源用于小<span
class=GramE>微企业</span>贷款。要进一步扩大小<span class=GramE>微企业</span>专项金融债发行工作，对发债募集资金实施专户管理，确保全部用于发放小<span
class=GramE>微企业</span>贷款。</span><span lang=EN-US style='font-size:13.5pt;
font-family:"microsoft yahei",serif;mso-fareast-font-family:宋体;mso-bidi-font-family:
宋体;color:#255A8E;letter-spacing:.6pt;mso-font-kerning:0pt'><o:p></o:p></span></p>

<p class=MsoNormal align=left style='text-align:left;text-indent:24.0pt;
line-height:20.25pt;mso-pagination:widow-orphan'><span style='font-size:12.0pt;
font-family:"微软雅黑",sans-serif;mso-bidi-font-family:宋体;color:#3F3F3F;letter-spacing:
.6pt;mso-font-kerning:0pt'>三、加强机构建设，扩大网点覆盖面</span><span lang=EN-US
style='font-size:13.5pt;font-family:"microsoft yahei",serif;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#255A8E;letter-spacing:.6pt;mso-font-kerning:
0pt'><o:p></o:p></span></p>

<p class=MsoNormal align=left style='text-align:left;text-indent:24.0pt;
line-height:20.25pt;mso-pagination:widow-orphan'><span style='font-size:12.0pt;
font-family:"微软雅黑",sans-serif;mso-bidi-font-family:宋体;color:#3F3F3F;letter-spacing:
.6pt;mso-font-kerning:0pt'>商业银行要继续深化小<span class=GramE>微企业</span>金融服务机构体系建设，增加有效供给，提升专业化水平。要加大小<span
class=GramE>微企业</span>专营机构建设力度，增设扎根基层、服务小微的社区支行、小微支行，提高小<span class=GramE>微企业</span>金融服务的批量化、规模化、标准化水平。地方法人银行要坚持立足当地、服务小微的市场定位，向县域和乡镇等小<span
class=GramE>微企业</span>集中的地区延伸网点和业务。进一步丰富小<span class=GramE>微企业</span>金融服务机构种类，支持在小<span
class=GramE>微企业</span>集中的地区设立村镇银行、贷款公司等小型金融机构。</span><span lang=EN-US
style='font-size:13.5pt;font-family:"microsoft yahei",serif;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#255A8E;letter-spacing:.6pt;mso-font-kerning:
0pt'><o:p></o:p></span></p>

<p class=MsoNormal align=left style='text-align:left;text-indent:24.0pt;
line-height:20.25pt;mso-pagination:widow-orphan'><span style='font-size:12.0pt;
font-family:"微软雅黑",sans-serif;mso-bidi-font-family:宋体;color:#3F3F3F;letter-spacing:
.6pt;mso-font-kerning:0pt'>四、落实尽职免责，调动工作积极性</span><span lang=EN-US
style='font-size:13.5pt;font-family:"microsoft yahei",serif;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#255A8E;letter-spacing:.6pt;mso-font-kerning:
0pt'><o:p></o:p></span></p>

<p class=MsoNormal align=left style='text-align:left;text-indent:24.0pt;
line-height:20.25pt;mso-pagination:widow-orphan'><span style='font-size:12.0pt;
font-family:"微软雅黑",sans-serif;mso-bidi-font-family:宋体;color:#3F3F3F;letter-spacing:
.6pt;mso-font-kerning:0pt'>商业银行要落实小<span class=GramE>微企业</span>贷款尽职免责制度。经检查监督和责任认定，有充分证据表明授信部门和<span
class=GramE>授信</span>工作人员按照有关法律法规以及商业银行相应的管理制度勤勉尽职地履行了职责的，在授信出现风险时，应免除授信部门和相关授信工作人员的合<span
class=GramE>规</span>责任。商业银行应于二季度末前制定小<span class=GramE>微企业</span>业务尽职免责办法，并报送监管部门备案。尽职免责办法应对尽职免责的适用对象、审核程序、认定标准、免责事由、免责范围规定具体明确的操作细则。</span><span
lang=EN-US style='font-size:13.5pt;font-family:"microsoft yahei",serif;
mso-fareast-font-family:宋体;mso-bidi-font-family:宋体;color:#255A8E;letter-spacing:
.6pt;mso-font-kerning:0pt'><o:p></o:p></span></p>

<p class=MsoNormal align=left style='text-align:left;text-indent:24.0pt;
line-height:20.25pt;mso-pagination:widow-orphan'><span style='font-size:12.0pt;
font-family:"微软雅黑",sans-serif;mso-bidi-font-family:宋体;color:#3F3F3F;letter-spacing:
.6pt;mso-font-kerning:0pt'>五、改进考核机制，激发内生动力</span><span lang=EN-US
style='font-size:13.5pt;font-family:"microsoft yahei",serif;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#255A8E;letter-spacing:.6pt;mso-font-kerning:
0pt'><o:p></o:p></span></p>

<p class=MsoNormal align=left style='text-align:left;text-indent:24.0pt;
line-height:20.25pt;mso-pagination:widow-orphan'><span style='font-size:12.0pt;
font-family:"微软雅黑",sans-serif;mso-bidi-font-family:宋体;color:#3F3F3F;letter-spacing:
.6pt;mso-font-kerning:0pt'>商业银行要按照相关监管要求，改进小<span class=GramE>微企业</span>业务的管理、考核和激励机制，确保小<span
class=GramE>微企业</span>业务条线的资源配置充足。要在内部明确小<span class=GramE>微企业</span>业务的牵头主管部门，强化跨部门统筹协调机制。要强化绩效考核倾斜，对小<span
class=GramE>微企业</span>业务设立专门的考核指标，科学设置小<span class=GramE>微企业</span>业务在全部业务中的考核权重。要落实有关提高小<span
class=GramE>微企业</span>贷款不良容忍度的监管要求。小<span class=GramE>微企业</span>贷款不良率高出全行各项贷款不良率年度目标<span
lang=EN-US>2</span>个百分点以内（含）的，不作为内部对小<span class=GramE>微企业</span>业务主办部门考核评价的扣分因素。</span><span
lang=EN-US style='font-size:13.5pt;font-family:"microsoft yahei",serif;
mso-fareast-font-family:宋体;mso-bidi-font-family:宋体;color:#255A8E;letter-spacing:
.6pt;mso-font-kerning:0pt'><o:p></o:p></span></p>

<p class=MsoNormal align=left style='text-align:left;text-indent:24.0pt;
line-height:20.25pt;mso-pagination:widow-orphan'><span style='font-size:12.0pt;
font-family:"微软雅黑",sans-serif;mso-bidi-font-family:宋体;color:#3F3F3F;letter-spacing:
.6pt;mso-font-kerning:0pt'>六、加大金融创新，提升服务能力</span><span lang=EN-US
style='font-size:13.5pt;font-family:"microsoft yahei",serif;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#255A8E;letter-spacing:.6pt;mso-font-kerning:
0pt'><o:p></o:p></span></p>

<p class=MsoNormal align=left style='text-align:left;text-indent:24.0pt;
line-height:20.25pt;mso-pagination:widow-orphan'><span style='font-size:12.0pt;
font-family:"微软雅黑",sans-serif;mso-bidi-font-family:宋体;color:#3F3F3F;letter-spacing:
.6pt;mso-font-kerning:0pt'>商业银行要结合金融系统深化改革和大数据等网络信息技术广泛应用的新趋势，加强产品创新、服务创新和渠道创新。要落实《中国银监会关于完善和创新小微企业贷款服务提高小微企业金融服务水平的通知》（银监发〔<span
lang=EN-US>2014</span>〕<span lang=EN-US>36</span>号）要求，加强小<span class=GramE>微企业</span>贷款还款方式创新。要积极为小<span
class=GramE>微企业</span>全面提供开户、信贷、结算、理财、咨询等基础性、综合性金融服务，运用手机银行、网上银行等新渠道，提高服务便利度。鼓励商业银行与保险公司合作，探索以信用保险、贷款保证保险等产品为主要载体，多方参与、风险共担的经营模式。</span><span
lang=EN-US style='font-size:13.5pt;font-family:"microsoft yahei",serif;
mso-fareast-font-family:宋体;mso-bidi-font-family:宋体;color:#255A8E;letter-spacing:
.6pt;mso-font-kerning:0pt'><o:p></o:p></span></p>

<p class=MsoNormal align=left style='text-align:left;text-indent:24.0pt;
line-height:20.25pt;mso-pagination:widow-orphan'><span style='font-size:12.0pt;
font-family:"微软雅黑",sans-serif;mso-bidi-font-family:宋体;color:#3F3F3F;letter-spacing:
.6pt;mso-font-kerning:0pt'>七、规范服务收费，切实降低融资成本</span><span lang=EN-US
style='font-size:13.5pt;font-family:"microsoft yahei",serif;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#255A8E;letter-spacing:.6pt;mso-font-kerning:
0pt'><o:p></o:p></span></p>

<p class=MsoNormal align=left style='text-align:left;text-indent:24.0pt;
line-height:20.25pt;mso-pagination:widow-orphan'><span style='font-size:12.0pt;
font-family:"微软雅黑",sans-serif;mso-bidi-font-family:宋体;color:#3F3F3F;letter-spacing:
.6pt;mso-font-kerning:0pt'>商业银行要认真贯彻落实《国务院关于扶持小型微型企业健康发展的意见》（国发〔<span
lang=EN-US>2014</span>〕<span lang=EN-US>52</span>号）、《国务院办公厅关于多措并举降低企业融资成本的指导意见》（国办发〔<span
lang=EN-US>2014</span>〕<span lang=EN-US>39</span>号）和相关监管政策要求，及时清理收费项目，进一步规范对小<span
class=GramE>微企业</span>的服务收费。要在建立科学合理的小<span class=GramE>微企业</span>贷款风险定价机制基础上，努力履行社会责任，对诚实守信、经营稳健的优质小<span
class=GramE>微企业</span>减费让利。要缩短融资链条，清理各类融资“通道”业务，减少搭桥融资行为。</span><span
lang=EN-US style='font-size:13.5pt;font-family:"microsoft yahei",serif;
mso-fareast-font-family:宋体;mso-bidi-font-family:宋体;color:#255A8E;letter-spacing:
.6pt;mso-font-kerning:0pt'><o:p></o:p></span></p>

<p class=MsoNormal align=left style='text-align:left;text-indent:24.0pt;
line-height:20.25pt;mso-pagination:widow-orphan'><span style='font-size:12.0pt;
font-family:"微软雅黑",sans-serif;mso-bidi-font-family:宋体;color:#3F3F3F;letter-spacing:
.6pt;mso-font-kerning:0pt'>八、严守风险底线，抓好风险防控</span><span lang=EN-US
style='font-size:13.5pt;font-family:"microsoft yahei",serif;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#255A8E;letter-spacing:.6pt;mso-font-kerning:
0pt'><o:p></o:p></span></p>

<p class=MsoNormal align=left style='text-align:left;text-indent:24.0pt;
line-height:20.25pt;mso-pagination:widow-orphan'><span style='font-size:12.0pt;
font-family:"微软雅黑",sans-serif;mso-bidi-font-family:宋体;color:#3F3F3F;letter-spacing:
.6pt;mso-font-kerning:0pt'>要按照风险可控、商业可持续原则，坚持金融服务小<span class=GramE>微企业</span>的大方向，坚守有效识别、防范、化解风险的基础防线。要落实国家产业政策，密切防范产业结构调整中“两高一剩”产业导致的风险传染。要加强对贷款资金流向的监测管理，防止借款企业违规挪用贷款。对符合产业政策、产品具有核心竞争力、长期能够实现盈利、但暂时出现经营困难的小微企业，不宜简单地压贷、抽贷、断贷。要加强对互保联保、过剩产能等重点风险的识别、防控，做好风险处置预案。对小<span
class=GramE>微企业</span>贷款要提足专项风险拨备，符合条件的不良贷款要及时核销。要加强与政府部门、司法机关和同业的沟通协调，防范逃、废债，完善风险处置手段，依法维护银行债权。</span><span
lang=EN-US style='font-size:13.5pt;font-family:"microsoft yahei",serif;
mso-fareast-font-family:宋体;mso-bidi-font-family:宋体;color:#255A8E;letter-spacing:
.6pt;mso-font-kerning:0pt'><o:p></o:p></span></p>

<p class=MsoNormal align=left style='text-align:left;text-indent:24.0pt;
line-height:20.25pt;mso-pagination:widow-orphan'><span style='font-size:12.0pt;
font-family:"微软雅黑",sans-serif;mso-bidi-font-family:宋体;color:#3F3F3F;letter-spacing:
.6pt;mso-font-kerning:0pt'>九、强化监管激励约束，确保政策落实</span><span lang=EN-US
style='font-size:13.5pt;font-family:"microsoft yahei",serif;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#255A8E;letter-spacing:.6pt;mso-font-kerning:
0pt'><o:p></o:p></span></p>

<p class=MsoNormal align=left style='text-align:left;text-indent:24.0pt;
line-height:20.25pt;mso-pagination:widow-orphan'><span style='font-size:12.0pt;
font-family:"微软雅黑",sans-serif;mso-bidi-font-family:宋体;color:#3F3F3F;letter-spacing:
.6pt;mso-font-kerning:0pt'>各级监管部门要坚持正向激励的监管导向，在市场准入、专项金融债发行、风险资产权重、存贷比考核及监管评级等方面落实对小<span
class=GramE>微企业</span>金融服务的差异化政策。从<span lang=EN-US>2015</span>年起，商业银行适用小<span
class=GramE>微企业</span>金融服务相关的正向激励政策，应以实现小<span class=GramE>微企业</span>贷款增速不低于各项贷款平均增速、小<span
class=GramE>微企业</span>贷款户数不低于上年同期户数、小<span class=GramE>微企业申贷获得</span>率不低于上年同期水平为前提。</span><span
lang=EN-US style='font-size:13.5pt;font-family:"microsoft yahei",serif;
mso-fareast-font-family:宋体;mso-bidi-font-family:宋体;color:#255A8E;letter-spacing:
.6pt;mso-font-kerning:0pt'><o:p></o:p></span></p>

<p class=MsoNormal align=left style='text-align:left;text-indent:24.0pt;
line-height:20.25pt;mso-pagination:widow-orphan'><span class=GramE><span
style='font-size:12.0pt;font-family:"微软雅黑",sans-serif;mso-bidi-font-family:
宋体;color:#3F3F3F;letter-spacing:.6pt;mso-font-kerning:0pt'>各银监</span></span><span
style='font-size:12.0pt;font-family:"微软雅黑",sans-serif;mso-bidi-font-family:
宋体;color:#3F3F3F;letter-spacing:.6pt;mso-font-kerning:0pt'>局要加强对小<span
class=GramE>微企业</span>金融服务工作条线的人员配置，确保专人专岗负责相关工作。要加强对辖内小<span class=GramE>微企业</span>贷款覆盖率、服务覆盖率和<span
class=GramE>申贷</span>获得率等指标的统计监测，及时在全辖通报。</span><span lang=EN-US
style='font-size:13.5pt;font-family:"microsoft yahei",serif;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#255A8E;letter-spacing:.6pt;mso-font-kerning:
0pt'><o:p></o:p></span></p>

<p class=MsoNormal align=left style='text-align:left;text-indent:24.0pt;
line-height:20.25pt;mso-pagination:widow-orphan'><span style='font-size:12.0pt;
font-family:"微软雅黑",sans-serif;mso-bidi-font-family:宋体;color:#3F3F3F;letter-spacing:
.6pt;mso-font-kerning:0pt'>各级监管部门要根据商业银行小<span class=GramE>微企业</span>金融服务工作开展情况，适时对专项金融债募集资金的专户管理与使用、信贷资产证券化和信贷资产转让腾挪资金用于小<span
class=GramE>微企业</span>贷款、尽职免责办法制定与执行、服务收费等事项加大监督检查力度，确保各项监管政策落到实处。</span><span
lang=EN-US style='font-size:13.5pt;font-family:"microsoft yahei",serif;
mso-fareast-font-family:宋体;mso-bidi-font-family:宋体;color:#255A8E;letter-spacing:
.6pt;mso-font-kerning:0pt'><o:p></o:p></span></p>

<p class=MsoNormal align=left style='text-align:left;text-indent:24.0pt;
line-height:20.25pt;mso-pagination:widow-orphan'><span style='font-size:12.0pt;
font-family:"微软雅黑",sans-serif;mso-bidi-font-family:宋体;color:#3F3F3F;letter-spacing:
.6pt;mso-font-kerning:0pt'>十、加强多方联动，优化服务环境</span><span lang=EN-US
style='font-size:13.5pt;font-family:"microsoft yahei",serif;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#255A8E;letter-spacing:.6pt;mso-font-kerning:
0pt'><o:p></o:p></span></p>

<p class=MsoNormal align=left style='text-align:left;text-indent:24.0pt;
line-height:20.25pt;mso-pagination:widow-orphan'><span style='font-size:12.0pt;
font-family:"微软雅黑",sans-serif;mso-bidi-font-family:宋体;color:#3F3F3F;letter-spacing:
.6pt;mso-font-kerning:0pt'>各方要密切配合，形成合力，确保各项措施落地见效。<span class=GramE>各银监</span>局、商业银行要继续推动和协调各级政府部门有效整合小<span
class=GramE>微企业</span>信息共享与发布渠道，推动建立小<span class=GramE>微企业</span>信贷风险补偿基金，加强与财税政策的配套联动。建立健全主要为小<span
class=GramE>微企业</span>服务的融资担保体系，积极发展政府支持的融资担保和再担保机构。加强银证合作、<span class=GramE>银担合作</span>，丰富小<span
class=GramE>微企业</span>金融服务方式。发挥非存款类机构对小<span class=GramE>微企业</span>融资的支持作用。银行业协会、融资<span
class=GramE>担保业</span>协会和小贷公司协会要积极发挥在行业信息交流和通报方面的作用。</span><span lang=EN-US
style='font-size:13.5pt;font-family:"microsoft yahei",serif;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#255A8E;letter-spacing:.6pt;mso-font-kerning:
0pt'><o:p></o:p></span></p>

<p class=MsoNormal align=left style='text-align:left;text-indent:24.0pt;
line-height:20.25pt;mso-pagination:widow-orphan'><span lang=EN-US
style='font-size:12.0pt;font-family:"微软雅黑",sans-serif;mso-bidi-font-family:
宋体;color:#3F3F3F;letter-spacing:.6pt;mso-font-kerning:0pt'>&nbsp;</span><span
lang=EN-US style='font-size:13.5pt;font-family:"microsoft yahei",serif;
mso-fareast-font-family:宋体;mso-bidi-font-family:宋体;color:#255A8E;letter-spacing:
.6pt;mso-font-kerning:0pt'><o:p></o:p></span></p>

<p class=MsoNormal align=right style='text-align:right;text-indent:24.0pt;
line-height:20.25pt;mso-pagination:widow-orphan'><span style='font-size:12.0pt;
font-family:"微软雅黑",sans-serif;mso-bidi-font-family:宋体;color:#3F3F3F;letter-spacing:
.6pt;mso-font-kerning:0pt'>来源：银监会</span><span lang=EN-US style='font-size:13.5pt;
font-family:"microsoft yahei",serif;mso-fareast-font-family:宋体;mso-bidi-font-family:
宋体;color:#255A8E;letter-spacing:.6pt;mso-font-kerning:0pt'><o:p></o:p></span></p>

<p class=MsoNormal align=right style='text-align:right;text-indent:24.0pt;
line-height:20.25pt;mso-pagination:widow-orphan'><span style='font-size:12.0pt;
font-family:"微软雅黑",sans-serif;mso-bidi-font-family:宋体;color:#3F3F3F;letter-spacing:
.6pt;mso-font-kerning:0pt'>二〇一五年三月三日</span><span lang=EN-US style='font-size:
13.5pt;font-family:"microsoft yahei",serif;mso-fareast-font-family:宋体;
mso-bidi-font-family:宋体;color:#255A8E;letter-spacing:.6pt;mso-font-kerning:
0pt'><o:p></o:p></span></p>

<p class=MsoNormal><span lang=EN-US><o:p>&nbsp;</o:p></span></p>

</div>

`
        },
        {
          date: "2017/02/22",
          text: "银监会进一步规范银行业金融机构信贷资产转让业务的通知",
          content: `<div class=WordSection1 style='layout-grid:15.6pt'>

<p class=MsoNormal align=center style='text-align:center;mso-pagination:widow-orphan;
background:white'><span style='font-size:18.0pt;font-family:宋体;mso-ascii-font-family:
"microsoft yahei";mso-hansi-font-family:"microsoft yahei";mso-bidi-font-family:
宋体;color:#255A8E;mso-font-kerning:0pt'>银监会进一步规范银行业金融机构信贷资产转让业务的通知</span><span
lang=EN-US style='font-size:18.0pt;font-family:"microsoft yahei",serif;
mso-fareast-font-family:宋体;mso-bidi-font-family:宋体;color:#255A8E;mso-font-kerning:
0pt'><o:p></o:p></span></p>

<p class=MsoNormal align=center style='text-align:center;mso-pagination:widow-orphan'><span
style='font-size:13.5pt;font-family:宋体;mso-ascii-font-family:"microsoft yahei";
mso-hansi-font-family:"microsoft yahei";mso-bidi-font-family:宋体;color:#999999;
mso-font-kerning:0pt'>发布时间：</span><span lang=EN-US style='font-size:13.5pt;
font-family:"microsoft yahei",serif;mso-fareast-font-family:宋体;mso-bidi-font-family:
宋体;color:#999999;mso-font-kerning:0pt'>2017-02-22<o:p></o:p></span></p>

<p class=MsoNormal align=left style='text-align:left;text-indent:24.0pt;
line-height:20.25pt;mso-pagination:widow-orphan'><span style='font-size:12.0pt;
font-family:"微软雅黑",sans-serif;mso-bidi-font-family:宋体;color:#3F3F3F;letter-spacing:
.6pt;mso-font-kerning:0pt'>中国银监会关于进一步规范银行业金融机构信贷资产转让业务的通知</span><span
lang=EN-US style='font-size:13.5pt;font-family:"microsoft yahei",serif;
mso-fareast-font-family:宋体;mso-bidi-font-family:宋体;color:#255A8E;letter-spacing:
.6pt;mso-font-kerning:0pt'><o:p></o:p></span></p>

<p class=MsoNormal align=left style='text-align:left;text-indent:24.0pt;
line-height:20.25pt;mso-pagination:widow-orphan'><span style='font-size:12.0pt;
font-family:"微软雅黑",sans-serif;mso-bidi-font-family:宋体;color:#3F3F3F;letter-spacing:
.6pt;mso-font-kerning:0pt'>为进一步规范银行业金融机构信贷资产转让，促进相关业务规范、有序、健康发展，现就有关事项通知如下<span
lang=EN-US>:</span></span><span lang=EN-US style='font-size:13.5pt;font-family:
"microsoft yahei",serif;mso-fareast-font-family:宋体;mso-bidi-font-family:宋体;
color:#255A8E;letter-spacing:.6pt;mso-font-kerning:0pt'><o:p></o:p></span></p>

<p class=MsoNormal align=left style='text-align:left;text-indent:24.0pt;
line-height:20.25pt;mso-pagination:widow-orphan'><span style='font-size:12.0pt;
font-family:"微软雅黑",sans-serif;mso-bidi-font-family:宋体;color:#3F3F3F;letter-spacing:
.6pt;mso-font-kerning:0pt'>一、银行业金融机构开展信贷资产转让业务，应当严格遵守国家法律、法规、规章和规范性文件的相关规定，健全并严格执行相应风险管理制度和内部操作规程。</span><span
lang=EN-US style='font-size:13.5pt;font-family:"microsoft yahei",serif;
mso-fareast-font-family:宋体;mso-bidi-font-family:宋体;color:#255A8E;letter-spacing:
.6pt;mso-font-kerning:0pt'><o:p></o:p></span></p>

<p class=MsoNormal align=left style='text-align:left;text-indent:24.0pt;
line-height:20.25pt;mso-pagination:widow-orphan'><span style='font-size:12.0pt;
font-family:"微软雅黑",sans-serif;mso-bidi-font-family:宋体;color:#3F3F3F;letter-spacing:
.6pt;mso-font-kerning:0pt'>二、本通知所称信贷资产是指确定的、可转让的正常类信贷资产，不良资产的转让与处置不适用本通知规定。</span><span
lang=EN-US style='font-size:13.5pt;font-family:"microsoft yahei",serif;
mso-fareast-font-family:宋体;mso-bidi-font-family:宋体;color:#255A8E;letter-spacing:
.6pt;mso-font-kerning:0pt'><o:p></o:p></span></p>

<p class=MsoNormal align=left style='text-align:left;text-indent:24.0pt;
line-height:20.25pt;mso-pagination:widow-orphan'><span style='font-size:12.0pt;
font-family:"微软雅黑",sans-serif;mso-bidi-font-family:宋体;color:#3F3F3F;letter-spacing:
.6pt;mso-font-kerning:0pt'>信贷资产的转出方应征得借款人同意方可进行信贷资产的转让，但原先签订的借款合同中另有约定的除外。</span><span
lang=EN-US style='font-size:13.5pt;font-family:"microsoft yahei",serif;
mso-fareast-font-family:宋体;mso-bidi-font-family:宋体;color:#255A8E;letter-spacing:
.6pt;mso-font-kerning:0pt'><o:p></o:p></span></p>

<p class=MsoNormal align=left style='text-align:left;text-indent:24.0pt;
line-height:20.25pt;mso-pagination:widow-orphan'><span style='font-size:12.0pt;
font-family:"微软雅黑",sans-serif;mso-bidi-font-family:宋体;color:#3F3F3F;letter-spacing:
.6pt;mso-font-kerning:0pt'>三、信贷资产转入方应当做好对拟转入信贷资产的尽职调查，包括但不限于借款方资信状况、经营情况、信贷资产用途的合<span
class=GramE>规</span>性和合法性、担保情况等。</span><span lang=EN-US style='font-size:13.5pt;
font-family:"microsoft yahei",serif;mso-fareast-font-family:宋体;mso-bidi-font-family:
宋体;color:#255A8E;letter-spacing:.6pt;mso-font-kerning:0pt'><o:p></o:p></span></p>

<p class=MsoNormal align=left style='text-align:left;text-indent:24.0pt;
line-height:20.25pt;mso-pagination:widow-orphan'><span style='font-size:12.0pt;
font-family:"微软雅黑",sans-serif;mso-bidi-font-family:宋体;color:#3F3F3F;letter-spacing:
.6pt;mso-font-kerning:0pt'>信贷资产转入方应当将拟转入的信贷资产提交授信审批部门进行严格审查、核实，复评贷款风险度，提出审核意见，按规定履行审批手续。</span><span
lang=EN-US style='font-size:13.5pt;font-family:"microsoft yahei",serif;
mso-fareast-font-family:宋体;mso-bidi-font-family:宋体;color:#255A8E;letter-spacing:
.6pt;mso-font-kerning:0pt'><o:p></o:p></span></p>

<p class=MsoNormal align=left style='text-align:left;text-indent:24.0pt;
line-height:20.25pt;mso-pagination:widow-orphan'><span style='font-size:12.0pt;
font-family:"微软雅黑",sans-serif;mso-bidi-font-family:宋体;color:#3F3F3F;letter-spacing:
.6pt;mso-font-kerning:0pt'>四、银行业金融机构转让信贷资产应当遵守真实性原则，禁止资产的非真实转移。</span><span
lang=EN-US style='font-size:13.5pt;font-family:"microsoft yahei",serif;
mso-fareast-font-family:宋体;mso-bidi-font-family:宋体;color:#255A8E;letter-spacing:
.6pt;mso-font-kerning:0pt'><o:p></o:p></span></p>

<p class=MsoNormal align=left style='text-align:left;text-indent:24.0pt;
line-height:20.25pt;mso-pagination:widow-orphan'><span style='font-size:12.0pt;
font-family:"微软雅黑",sans-serif;mso-bidi-font-family:宋体;color:#3F3F3F;letter-spacing:
.6pt;mso-font-kerning:0pt'>转出方不得安排任何显性或隐性的回购条款；转让双方不得采取签订回购协议、即期买断加远期回购等方式规避监管。</span><span
lang=EN-US style='font-size:13.5pt;font-family:"microsoft yahei",serif;
mso-fareast-font-family:宋体;mso-bidi-font-family:宋体;color:#255A8E;letter-spacing:
.6pt;mso-font-kerning:0pt'><o:p></o:p></span></p>

<p class=MsoNormal align=left style='text-align:left;text-indent:24.0pt;
line-height:20.25pt;mso-pagination:widow-orphan'><span style='font-size:12.0pt;
font-family:"微软雅黑",sans-serif;mso-bidi-font-family:宋体;color:#3F3F3F;letter-spacing:
.6pt;mso-font-kerning:0pt'>五、银行业金融机构转让信贷资产应当遵守整体性原则，即转让的信贷资产应当包括全部<span
class=GramE>未偿</span>还本金及应收利息，不得有下列情形：</span><span lang=EN-US style='font-size:
13.5pt;font-family:"microsoft yahei",serif;mso-fareast-font-family:宋体;
mso-bidi-font-family:宋体;color:#255A8E;letter-spacing:.6pt;mso-font-kerning:
0pt'><o:p></o:p></span></p>

<p class=MsoNormal align=left style='text-align:left;text-indent:24.0pt;
line-height:20.25pt;mso-pagination:widow-orphan'><span lang=EN-US
style='font-size:12.0pt;font-family:"微软雅黑",sans-serif;mso-bidi-font-family:
宋体;color:#3F3F3F;letter-spacing:.6pt;mso-font-kerning:0pt'>&nbsp;&nbsp;</span><span
style='mso-bidi-font-size:10.5pt;font-family:"微软雅黑",sans-serif;mso-bidi-font-family:
宋体;color:#3F3F3F;letter-spacing:.6pt;mso-font-kerning:0pt'>（一）将<span
class=GramE>未偿</span>还本金与应收利息分开；</span><span lang=EN-US style='font-size:13.5pt;
font-family:"microsoft yahei",serif;mso-fareast-font-family:宋体;mso-bidi-font-family:
宋体;color:#255A8E;letter-spacing:.6pt;mso-font-kerning:0pt'><o:p></o:p></span></p>

<p class=MsoNormal align=left style='text-align:left;text-indent:24.0pt;
line-height:20.25pt;mso-pagination:widow-orphan'><span lang=EN-US
style='font-size:12.0pt;font-family:"微软雅黑",sans-serif;mso-bidi-font-family:
宋体;color:#3F3F3F;letter-spacing:.6pt;mso-font-kerning:0pt'>&nbsp; </span><span
style='font-size:12.0pt;font-family:"微软雅黑",sans-serif;mso-bidi-font-family:
宋体;color:#3F3F3F;letter-spacing:.6pt;mso-font-kerning:0pt'>（二）按一定比例分割<span
class=GramE>未偿</span>还本金或应收利息；</span><span lang=EN-US style='font-size:13.5pt;
font-family:"microsoft yahei",serif;mso-fareast-font-family:宋体;mso-bidi-font-family:
宋体;color:#255A8E;letter-spacing:.6pt;mso-font-kerning:0pt'><o:p></o:p></span></p>

<p class=MsoNormal align=left style='text-align:left;text-indent:24.0pt;
line-height:20.25pt;mso-pagination:widow-orphan'><span lang=EN-US
style='font-size:12.0pt;font-family:"微软雅黑",sans-serif;mso-bidi-font-family:
宋体;color:#3F3F3F;letter-spacing:.6pt;mso-font-kerning:0pt'>&nbsp; </span><span
style='font-size:12.0pt;font-family:"微软雅黑",sans-serif;mso-bidi-font-family:
宋体;color:#3F3F3F;letter-spacing:.6pt;mso-font-kerning:0pt'>（三）将<span
class=GramE>未偿</span>还本金及应收利息整体按比例进行分割；</span><span lang=EN-US
style='font-size:13.5pt;font-family:"microsoft yahei",serif;mso-fareast-font-family:
宋体;mso-bidi-font-family:宋体;color:#255A8E;letter-spacing:.6pt;mso-font-kerning:
0pt'><o:p></o:p></span></p>

<p class=MsoNormal align=left style='text-align:left;text-indent:24.0pt;
line-height:20.25pt;mso-pagination:widow-orphan'><span lang=EN-US
style='font-size:12.0pt;font-family:"微软雅黑",sans-serif;mso-bidi-font-family:
宋体;color:#3F3F3F;letter-spacing:.6pt;mso-font-kerning:0pt'>&nbsp; </span><span
style='font-size:12.0pt;font-family:"微软雅黑",sans-serif;mso-bidi-font-family:
宋体;color:#3F3F3F;letter-spacing:.6pt;mso-font-kerning:0pt'>（四）将<span
class=GramE>未偿</span>还本金或应收利息进行期限分割。</span><span lang=EN-US style='font-size:
13.5pt;font-family:"microsoft yahei",serif;mso-fareast-font-family:宋体;
mso-bidi-font-family:宋体;color:#255A8E;letter-spacing:.6pt;mso-font-kerning:
0pt'><o:p></o:p></span></p>

<p class=MsoNormal align=left style='text-align:left;text-indent:24.0pt;
line-height:20.25pt;mso-pagination:widow-orphan'><span style='font-size:12.0pt;
font-family:"微软雅黑",sans-serif;mso-bidi-font-family:宋体;color:#3F3F3F;letter-spacing:
.6pt;mso-font-kerning:0pt'>银行业金融机构转让银团贷款的，转出方在进行转让时，应优先整体转让给其他银团贷款成员；如其他银团贷款成员均无意愿接受转让，且对转出方将其转给银团贷款成员之外的银行业金融机构无异议，转出方可将其整体转让给银团贷款成员之外的银行业金融机构。</span><span
lang=EN-US style='font-size:13.5pt;font-family:"microsoft yahei",serif;
mso-fareast-font-family:宋体;mso-bidi-font-family:宋体;color:#255A8E;letter-spacing:
.6pt;mso-font-kerning:0pt'><o:p></o:p></span></p>

<p class=MsoNormal align=left style='text-align:left;text-indent:24.0pt;
line-height:20.25pt;mso-pagination:widow-orphan'><span style='font-size:12.0pt;
font-family:"微软雅黑",sans-serif;mso-bidi-font-family:宋体;color:#3F3F3F;letter-spacing:
.6pt;mso-font-kerning:0pt'>六、银行业金融机构转让信贷资产应当遵守洁净转让原则，即实现资产的真实、完全转让，风险的真实、完全转移。</span><span
lang=EN-US style='font-size:13.5pt;font-family:"microsoft yahei",serif;
mso-fareast-font-family:宋体;mso-bidi-font-family:宋体;color:#255A8E;letter-spacing:
.6pt;mso-font-kerning:0pt'><o:p></o:p></span></p>

<p class=MsoNormal align=left style='text-align:left;text-indent:24.0pt;
line-height:20.25pt;mso-pagination:widow-orphan'><span style='font-size:12.0pt;
font-family:"微软雅黑",sans-serif;mso-bidi-font-family:宋体;color:#3F3F3F;letter-spacing:
.6pt;mso-font-kerning:0pt'>信贷资产转入方应当与信贷资产的借款方重新签订协议，确认变更后的债权债务关系。</span><span
lang=EN-US style='font-size:13.5pt;font-family:"microsoft yahei",serif;
mso-fareast-font-family:宋体;mso-bidi-font-family:宋体;color:#255A8E;letter-spacing:
.6pt;mso-font-kerning:0pt'><o:p></o:p></span></p>

<p class=MsoNormal align=left style='text-align:left;text-indent:24.0pt;
line-height:20.25pt;mso-pagination:widow-orphan'><span style='font-size:12.0pt;
font-family:"微软雅黑",sans-serif;mso-bidi-font-family:宋体;color:#3F3F3F;letter-spacing:
.6pt;mso-font-kerning:0pt'>拟转让的信贷资产有保证人的，转出方在信贷资产转让前，应当征求保证人意见，保证人同意后，可进行转让；如保证人不同意，转出方应和借款人协商，更换保证人或提供新的抵质押物，以实现信贷资产的安全转让。</span><span
lang=EN-US style='font-size:13.5pt;font-family:"microsoft yahei",serif;
mso-fareast-font-family:宋体;mso-bidi-font-family:宋体;color:#255A8E;letter-spacing:
.6pt;mso-font-kerning:0pt'><o:p></o:p></span></p>

<p class=MsoNormal align=left style='text-align:left;text-indent:24.0pt;
line-height:20.25pt;mso-pagination:widow-orphan'><span style='font-size:12.0pt;
font-family:"微软雅黑",sans-serif;mso-bidi-font-family:宋体;color:#3F3F3F;letter-spacing:
.6pt;mso-font-kerning:0pt'>拟转让的信贷资产有抵质押物的，应当完成抵质押物变更登记手续或将质物移交占有、交付，确保担保物权有效转移。</span><span
lang=EN-US style='font-size:13.5pt;font-family:"microsoft yahei",serif;
mso-fareast-font-family:宋体;mso-bidi-font-family:宋体;color:#255A8E;letter-spacing:
.6pt;mso-font-kerning:0pt'><o:p></o:p></span></p>

<p class=MsoNormal align=left style='text-align:left;text-indent:24.0pt;
line-height:20.25pt;mso-pagination:widow-orphan'><span style='font-size:12.0pt;
font-family:"微软雅黑",sans-serif;mso-bidi-font-family:宋体;color:#3F3F3F;letter-spacing:
.6pt;mso-font-kerning:0pt'>银行业金融机构在签订信贷资产转让协议时，应当明确双方权利和义务，转出方应当向转入方提供资产转让业务涉及的法律文件和其他相关资料；转入方应当行使信贷资产的日常贷后管理职责。</span><span
lang=EN-US style='font-size:13.5pt;font-family:"microsoft yahei",serif;
mso-fareast-font-family:宋体;mso-bidi-font-family:宋体;color:#255A8E;letter-spacing:
.6pt;mso-font-kerning:0pt'><o:p></o:p></span></p>

<p class=MsoNormal align=left style='text-align:left;text-indent:24.0pt;
line-height:20.25pt;mso-pagination:widow-orphan'><span style='font-size:12.0pt;
font-family:"微软雅黑",sans-serif;mso-bidi-font-family:宋体;color:#3F3F3F;letter-spacing:
.6pt;mso-font-kerning:0pt'>七、信贷资产转出方将信用风险、市场风险和流动性风险等完全转移给转入方后，应当在资产负债表内终止确认该项信贷资产，转入方应当在表内确认该项信贷资产，作为自有资产进行管理；转出方和转入方应当做到衔接一致，相关风险承担在任何时点上均不得落空。</span><span
lang=EN-US style='font-size:13.5pt;font-family:"microsoft yahei",serif;
mso-fareast-font-family:宋体;mso-bidi-font-family:宋体;color:#255A8E;letter-spacing:
.6pt;mso-font-kerning:0pt'><o:p></o:p></span></p>

<p class=MsoNormal align=left style='text-align:left;text-indent:24.0pt;
line-height:20.25pt;mso-pagination:widow-orphan'><span style='font-size:12.0pt;
font-family:"微软雅黑",sans-serif;mso-bidi-font-family:宋体;color:#3F3F3F;letter-spacing:
.6pt;mso-font-kerning:0pt'>信贷资产转让后，转出方和转入方的资本充足率、拨备覆盖率、大额集中度、存贷比、风险资产等监管指标的计算应当<span
class=GramE>作出</span>相应调整。</span><span lang=EN-US style='font-size:13.5pt;
font-family:"microsoft yahei",serif;mso-fareast-font-family:宋体;mso-bidi-font-family:
宋体;color:#255A8E;letter-spacing:.6pt;mso-font-kerning:0pt'><o:p></o:p></span></p>

<p class=MsoNormal align=left style='text-align:left;text-indent:24.0pt;
line-height:20.25pt;mso-pagination:widow-orphan'><span style='font-size:12.0pt;
font-family:"微软雅黑",sans-serif;mso-bidi-font-family:宋体;color:#3F3F3F;letter-spacing:
.6pt;mso-font-kerning:0pt'>八、银行业金融机构应当严格按照《企业会计准则》关于“金融资产转移”的规定及其他相关规定进行信贷资产转移确认，并做相应的会计核算和账务处理。</span><span
lang=EN-US style='font-size:13.5pt;font-family:"microsoft yahei",serif;
mso-fareast-font-family:宋体;mso-bidi-font-family:宋体;color:#255A8E;letter-spacing:
.6pt;mso-font-kerning:0pt'><o:p></o:p></span></p>

<p class=MsoNormal align=left style='text-align:left;text-indent:24.0pt;
line-height:20.25pt;mso-pagination:widow-orphan'><span style='font-size:12.0pt;
font-family:"微软雅黑",sans-serif;mso-bidi-font-family:宋体;color:#3F3F3F;letter-spacing:
.6pt;mso-font-kerning:0pt'>九、银行业金融机构应当严格遵守信贷资产转让和银信理财合作业务的各项规定，不得使用理财资金直接购买信贷资产。</span><span
lang=EN-US style='font-size:13.5pt;font-family:"microsoft yahei",serif;
mso-fareast-font-family:宋体;mso-bidi-font-family:宋体;color:#255A8E;letter-spacing:
.6pt;mso-font-kerning:0pt'><o:p></o:p></span></p>

<p class=MsoNormal align=left style='text-align:left;text-indent:24.0pt;
line-height:20.25pt;mso-pagination:widow-orphan'><span style='font-size:12.0pt;
font-family:"微软雅黑",sans-serif;mso-bidi-font-family:宋体;color:#3F3F3F;letter-spacing:
.6pt;mso-font-kerning:0pt'>十、银行业金融机构开展信贷资产转让业务，不论是转入还是转出，应按照监管部门的要求及时完成相</span><span
lang=EN-US style='font-size:13.5pt;font-family:"microsoft yahei",serif;
mso-fareast-font-family:宋体;mso-bidi-font-family:宋体;color:#255A8E;letter-spacing:
.6pt;mso-font-kerning:0pt'><o:p></o:p></span></p>

<p class=MsoNormal align=left style='text-align:left;text-indent:24.0pt;
line-height:20.25pt;mso-pagination:widow-orphan'><span style='font-size:12.0pt;
font-family:"微软雅黑",sans-serif;mso-bidi-font-family:宋体;color:#3F3F3F;letter-spacing:
.6pt;mso-font-kerning:0pt'>应信息的报送，并应当在每个季度结束后<span lang=EN-US>30</span>个工作日内，向监管机构报送信贷资产转让业务报告。报告应当至少包括以下内容：</span><span
lang=EN-US style='font-size:13.5pt;font-family:"microsoft yahei",serif;
mso-fareast-font-family:宋体;mso-bidi-font-family:宋体;color:#255A8E;letter-spacing:
.6pt;mso-font-kerning:0pt'><o:p></o:p></span></p>

<p class=MsoNormal align=left style='text-align:left;text-indent:24.0pt;
line-height:20.25pt;mso-pagination:widow-orphan'><span lang=EN-US
style='font-size:12.0pt;font-family:"微软雅黑",sans-serif;mso-bidi-font-family:
宋体;color:#3F3F3F;letter-spacing:.6pt;mso-font-kerning:0pt'>&nbsp; </span><span
style='font-size:12.0pt;font-family:"微软雅黑",sans-serif;mso-bidi-font-family:
宋体;color:#3F3F3F;letter-spacing:.6pt;mso-font-kerning:0pt'>（一）信贷资产转让业务开展的整体情况；</span><span
lang=EN-US style='font-size:13.5pt;font-family:"microsoft yahei",serif;
mso-fareast-font-family:宋体;mso-bidi-font-family:宋体;color:#255A8E;letter-spacing:
.6pt;mso-font-kerning:0pt'><o:p></o:p></span></p>

<p class=MsoNormal align=left style='text-align:left;text-indent:24.0pt;
line-height:20.25pt;mso-pagination:widow-orphan'><span lang=EN-US
style='font-size:12.0pt;font-family:"微软雅黑",sans-serif;mso-bidi-font-family:
宋体;color:#3F3F3F;letter-spacing:.6pt;mso-font-kerning:0pt'>&nbsp; </span><span
style='font-size:12.0pt;font-family:"微软雅黑",sans-serif;mso-bidi-font-family:
宋体;color:#3F3F3F;letter-spacing:.6pt;mso-font-kerning:0pt'>（二）具体的转让笔数，每一笔交易的标的、金额、交易对手方、借款方、担保方或担保物权的情况等；</span><span
lang=EN-US style='font-size:13.5pt;font-family:"microsoft yahei",serif;
mso-fareast-font-family:宋体;mso-bidi-font-family:宋体;color:#255A8E;letter-spacing:
.6pt;mso-font-kerning:0pt'><o:p></o:p></span></p>

<p class=MsoNormal align=left style='text-align:left;text-indent:24.0pt;
line-height:20.25pt;mso-pagination:widow-orphan'><span lang=EN-US
style='font-size:12.0pt;font-family:"微软雅黑",sans-serif;mso-bidi-font-family:
宋体;color:#3F3F3F;letter-spacing:.6pt;mso-font-kerning:0pt'>&nbsp; </span><span
style='font-size:12.0pt;font-family:"微软雅黑",sans-serif;mso-bidi-font-family:
宋体;color:#3F3F3F;letter-spacing:.6pt;mso-font-kerning:0pt'>（三）信贷资产的风险变化情况；</span><span
lang=EN-US style='font-size:13.5pt;font-family:"microsoft yahei",serif;
mso-fareast-font-family:宋体;mso-bidi-font-family:宋体;color:#255A8E;letter-spacing:
.6pt;mso-font-kerning:0pt'><o:p></o:p></span></p>

<p class=MsoNormal align=left style='text-align:left;text-indent:24.0pt;
line-height:20.25pt;mso-pagination:widow-orphan'><span lang=EN-US
style='font-size:12.0pt;font-family:"微软雅黑",sans-serif;mso-bidi-font-family:
宋体;color:#3F3F3F;letter-spacing:.6pt;mso-font-kerning:0pt'>&nbsp; </span><span
style='font-size:12.0pt;font-family:"微软雅黑",sans-serif;mso-bidi-font-family:
宋体;color:#3F3F3F;letter-spacing:.6pt;mso-font-kerning:0pt'>（四）其他需要报告的情况。</span><span
lang=EN-US style='font-size:13.5pt;font-family:"microsoft yahei",serif;
mso-fareast-font-family:宋体;mso-bidi-font-family:宋体;color:#255A8E;letter-spacing:
.6pt;mso-font-kerning:0pt'><o:p></o:p></span></p>

<p class=MsoNormal align=left style='text-align:left;text-indent:24.0pt;
line-height:20.25pt;mso-pagination:widow-orphan'><span style='font-size:12.0pt;
font-family:"微软雅黑",sans-serif;mso-bidi-font-family:宋体;color:#3F3F3F;letter-spacing:
.6pt;mso-font-kerning:0pt'>十一、银行业金融机构开展信贷资产转让业务未能审慎经营，违反本通知规定的，监管机构可以根据《中华人民共和国银行业监督管理法》的有关规定，责令其暂停信贷资产转让业务，给予相应处罚，并追究相关人员责任。</span><span
lang=EN-US style='font-size:13.5pt;font-family:"microsoft yahei",serif;
mso-fareast-font-family:宋体;mso-bidi-font-family:宋体;color:#255A8E;letter-spacing:
.6pt;mso-font-kerning:0pt'><o:p></o:p></span></p>

<p class=MsoNormal align=left style='text-align:left;text-indent:24.0pt;
line-height:20.25pt;mso-pagination:widow-orphan'><span class=GramE><span
style='font-size:12.0pt;font-family:"微软雅黑",sans-serif;mso-bidi-font-family:
宋体;color:#3F3F3F;letter-spacing:.6pt;mso-font-kerning:0pt'>请各银监</span></span><span
style='font-size:12.0pt;font-family:"微软雅黑",sans-serif;mso-bidi-font-family:
宋体;color:#3F3F3F;letter-spacing:.6pt;mso-font-kerning:0pt'>局将本通知转发至辖内银<span
class=GramE>监分局</span>和银行业金融机构。</span><span lang=EN-US style='font-size:13.5pt;
font-family:"microsoft yahei",serif;mso-fareast-font-family:宋体;mso-bidi-font-family:
宋体;color:#255A8E;letter-spacing:.6pt;mso-font-kerning:0pt'><o:p></o:p></span></p>

<p class=MsoNormal align=right style='text-align:right;text-indent:24.0pt;
line-height:20.25pt;mso-pagination:widow-orphan'><span style='font-size:12.0pt;
font-family:"微软雅黑",sans-serif;mso-bidi-font-family:宋体;color:#3F3F3F;letter-spacing:
.6pt;mso-font-kerning:0pt'>来源：银监会</span><span lang=EN-US style='font-size:13.5pt;
font-family:"microsoft yahei",serif;mso-fareast-font-family:宋体;mso-bidi-font-family:
宋体;color:#255A8E;letter-spacing:.6pt;mso-font-kerning:0pt'><o:p></o:p></span></p>

<p class=MsoNormal align=right style='text-align:right;text-indent:24.0pt;
line-height:20.25pt;mso-pagination:widow-orphan'><span style='font-size:12.0pt;
font-family:"微软雅黑",sans-serif;mso-bidi-font-family:宋体;color:#3F3F3F;letter-spacing:
.6pt;mso-font-kerning:0pt'>二〇一〇年十二月三日</span><span lang=EN-US style='font-size:
13.5pt;font-family:"microsoft yahei",serif;mso-fareast-font-family:宋体;
mso-bidi-font-family:宋体;color:#255A8E;letter-spacing:.6pt;mso-font-kerning:
0pt'><o:p></o:p></span></p>

<p class=MsoNormal><span lang=EN-US><o:p>&nbsp;</o:p></span></p>

</div>

`
        }
      ]
    };
  },
  watch: {
    $route(newVal, oldVal) {
      let _this = this;
      _this.headerTitle = _this.$route.query.title;
      if (_this.headerTitle == "交易规则") {
        _this.list = _this.CaseList;
      } else if (_this.headerTitle == "政策法规") {
        _this.list = _this.PolicyList;
      }
    }
  },
  created() {
    let _this = this;
    _this.headerTitle = _this.$route.query.title;
    if (_this.headerTitle == "交易规则") {
      _this.list = _this.CaseList;
    } else if (_this.headerTitle == "政策法规") {
      _this.list = _this.PolicyList;
    }
  },
  methods: {
    //时间格式转换
    dateFormatting_day(val) {
      return this.$moment(val).format("DD");
    },
    dateFormatting(val) {
      return this.$moment(val).format("YYYY-MM");
    },
    //查看详情
    handleClick(row) {
      if (row.url) {
        window.open(row.url, "_blank");
      } else {
        this.$router.push({
          path: "/ViewArticle",
          query: {
            content: row.content
          }
        });
      }
    }
  }
};
</script>

<style lang="scss" scoped>

</style>