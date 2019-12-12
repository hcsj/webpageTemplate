<template>
  <div>
    <head-nav ref="head-nav"></head-nav>
    <div id="content-msg-box">
      <div class="content-msg-box">
        <el-breadcrumb class="breadcrumb-t">
          <el-breadcrumb-item>您当前的位置是:</el-breadcrumb-item>
          <el-breadcrumb-item>资产交易</el-breadcrumb-item>
          <el-breadcrumb-item>不良资产</el-breadcrumb-item>
        </el-breadcrumb>
        <div class="content-msg-c" v-if="type == '1'">
          <div class="propertyDeals-title">科瑞科瑞科瑞</div>
          <div class="propertyDeals-msg">
            <section class="msg">
              <span>项目编号：</span>
              <span>CF19ZQ00923</span>
            </section>
            <section class="msg">
              <span>转让价格（万元）：</span>
              <span>CF19ZQ00923</span>
            </section>
            <section class="msg">
              <span>转让方地区：</span>
              <span>CF19ZQ00923</span>
            </section>
            <section class="msg">
              <span>转让方行业：</span>
              <span>CF19ZQ00923</span>
            </section>
            <section class="msg">
              <span>挂牌起止日期：</span>
              <span>CF19ZQ00923</span>
            </section>
          </div>
          <div class="propertyDeals-tabs">
            <span class="propertyDeals-apply">意向受让申请</span>
            <el-tabs v-model="activeName" @tab-click="handleClick">
              <el-tab-pane label="债权基本情况" name="1">
                <div class="content-msg-c-r">
                  <table>
                    <tr>
                      <td class="title">债务人名称</td>
                      <td>控股有限公司</td>
                      <td class="title">债权总额(万元)</td>
                      <td>41111.52132434</td>
                    </tr>
                    <tr>
                      <td class="title">本金(万元)</td>
                      <td>38000</td>
                      <td class="title">利息(万元)</td>
                      <td>41111.52132434</td>
                    </tr>
                    <tr>
                      <td class="title">违约金(万元)</td>
                      <td>473.00</td>
                      <td class="title">其他(万元)</td>
                      <td>473.00</td>
                    </tr>
                    <tr>
                      <td class="title">债务人所属行业</td>
                      <td>电力,热力，燃气及水生产和供应业---电力</td>
                      <td class="title">债务人注册地址</td>
                      <td>电力,热力，燃气及水生产和供应业---电力</td>
                    </tr>
                    <tr>
                      <td class="title">债务人经济性质</td>
                      <td>电力,热力，燃气及水生产和供应业---电力</td>
                      <td class="title">法定代表人</td>
                      <td>电力,热力，燃气及水生产和供应业---电力</td>
                    </tr>
                    <tr>
                      <td class="title">债务人经营范围</td>
                      <td
                        colspan="3"
                      >电力,热力，燃气及水生产和供应业---电力电力,热力，燃气及水生产和供应业---电力电力,热力，燃气及水生产和供应业---电力</td>
                    </tr>
                    <tr>
                      <td class="title">债权担保情况</td>
                      <td colspan="3">电力,热力，燃气及水生产和供应业---电力</td>
                    </tr>
                    <tr>
                      <td class="title">保证人姓名</td>
                      <td colspan="3">---</td>
                    </tr>
                    <tr>
                      <td class="title">债权质押情况</td>
                      <td colspan="3">电力,热力，燃气及水生产和供应业---电力</td>
                    </tr>
                    <tr>
                      <td class="title">债权抵押情况</td>
                      <td colspan="3">电力,热力，燃气及水生产和供应业---电力</td>
                    </tr>
                    <tr>
                      <td class="title">债权现状</td>
                      <td colspan="3">电力,热力，燃气及水生产和供应业---电力</td>
                    </tr>
                    <tr>
                      <td class="title">其他需要披露的内容</td>
                      <td
                        colspan="3"
                      >电力,热力，燃气及水生产和供应业---电力电力,热力，燃气及水生产和供应业---电力电力,热力，燃气及水生产和供应业---电力电力,热力，燃气及水生产和供应业---电力电力,热力，燃气及水生产和供应业---电力电力,热力，燃气及水生产和供应业---电力电力,热力，燃气及水生产和供应业---电力电力,热力，燃气及水生产和供应业---电力电力,热力，燃气及水生产和供应业---电力电力,热力，燃气及水生产和供应业---电力电力,热力，燃气及水生产和供应业---电力电力,热力，燃气及水生产和供应业---电力电力,热力，燃气及水生产和供应业---电力电力,热力，燃气及水生产和供应业---电力电力,热力，燃气及水生产和供应业---电力电力,热力，燃气及水生产和供应业---电力电力,热力，燃气及水生产和供应业---电力电力,热力，燃气及水生产和供应业---电力</td>
                    </tr>
                  </table>
                </div>
              </el-tab-pane>
              <el-tab-pane label="转让方情况" name="2">
                <div class="content-msg-c-r">
                  <table>
                    <tr>
                      <td class="title">转让方名称</td>
                      <td>电力,热力，燃气及水生产和供应业---电力</td>
                      <td class="title">转让方住所</td>
                      <td>电力,热力，燃气及水生产和供应业---电力</td>
                    </tr>
                    <tr>
                      <td class="title">转让方经济类型</td>
                      <td>电力,热力，燃气及水生产和供应业---电力</td>
                      <td class="title">转让方行业</td>
                      <td>电力,热力，燃气及水生产和供应业---电力</td>
                    </tr>
                    <tr>
                      <td class="title">统一社会信用代码</td>
                      <td>12546464654654646</td>
                      <td class="title">法定代表人/负责人</td>
                      <td>王毅</td>
                    </tr>
                  </table>
                </div>
              </el-tab-pane>
              <el-tab-pane label="交易条件与受让方资格条件" name="3">
                <div class="content-msg-c-r">
                  <table>
                    <tr>
                      <td class="title">交易价款支付方式</td>
                      <td>电力,热力，燃气及水生产和供应业---电力</td>
                    </tr>
                    <tr>
                      <td class="title">与转让相关的其他条件</td>
                      <td>电力,热力，燃气及水生产和供应业---电力</td>
                    </tr>
                  </table>
                  <table style="margin-top:50px">
                    <tr>
                      <td class="title">受让方资格条件</td>
                      <td>电力,热力，燃气及水生产和供应业---电力</td>
                    </tr>
                  </table>
                  <table style="margin-top:50px">
                    <tr>
                      <td class="title">是否交纳保证金</td>
                      <td>是</td>
                      <td class="title">交纳金额(万元)</td>
                      <td>500</td>
                    </tr>
                    <tr>
                      <td class="title">交纳时间</td>
                      <td colspan="3">电力,热力，燃气及水生产和供应业---电力</td>
                    </tr>
                    <tr>
                      <td class="title">保证事项</td>
                      <td colspan="3">电力,热力，燃气及水生产和供应业---电力</td>
                    </tr>
                    <tr>
                      <td class="title">处置方式</td>
                      <td colspan="3">电力,热力，燃气及水生产和供应业---电力</td>
                    </tr>
                  </table>
                </div>
              </el-tab-pane>
              <el-tab-pane label="挂牌信息" name="4">
                <div class="content-msg-c-r">
                  <table>
                    <tr>
                      <td class="title">挂牌公告期</td>
                      <td>电力,热力，燃气及水生产和供应业---电力</td>
                    </tr>
                    <tr>
                      <td class="title" style="width: 300px;">挂牌期满后，如未征集到意向受让方</td>
                      <td>电力,热力，燃气及水生产和供应业---电力</td>
                    </tr>
                    <tr>
                      <td class="title">报价方式</td>
                      <td>12546464654654646</td>
                    </tr>
                  </table>
                </div>
              </el-tab-pane>
              <el-tab-pane label="联系方式" name="5">
                <div class="content-msg-c-r">
                  <table>
                    <tr>
                      <td class="title">交易机构</td>
                      <td>电力,热力，燃气及水生产和供应业---电力</td>
                    </tr>
                    <tr>
                      <td class="title">经济代理机构</td>
                      <td>电力,热力，燃气及水生产和供应业---电力</td>
                    </tr>
                  </table>
                </div>
              </el-tab-pane>
              <el-tab-pane label="其他信息" name="6">
                <div class="content-msg-c-r">
                  <table>
                    <tr>
                      <td class="title">附件</td>
                      <td>
                        <span class="files">
                          <i class="el-icon-document"></i>
                          <a href target="_blank">资产清单.pdf</a>
                        </span>
                        <span class="files">
                          <i class="el-icon-document"></i>
                          <a href target="_blank">资产清单.pdf</a>
                        </span>
                      </td>
                    </tr>
                  </table>
                </div>
              </el-tab-pane>
            </el-tabs>
          </div>
        </div>
        <div class="content-msg-c" v-else>
          <div class="propertyDeals-title">国电国电国电国电</div>
          <div class="propertyDeals-msg">
            <section class="msg">
              <span>项目编号：</span>
              <span>CF19ZQ00923</span>
            </section>
            <section class="msg">
              <span>转让方：</span>
              <span>CF19ZQ00923</span>
            </section>
            <section class="msg">
              <span>转让价格（万元）</span>
              <span>CF19ZQ00923</span>
            </section>
            <section class="msg">
              <span>转让方行业：</span>
              <span>CF19ZQ00923</span>
            </section>
            <section class="msg">
              <span>挂牌起止日期：</span>
              <span>CF19ZQ00923</span>
            </section>
          </div>
          <div class="propertyDeals-tabs">
            <span class="propertyDeals-apply">意向受让申请</span>
            <el-tabs v-model="activeName" @tab-click="handleClick">
              <el-tab-pane label="资产基本情况" name="1">
                <div class="content-msg-c-r">
                  <table>
                    <tr>
                      <td class="title">债务人名称</td>
                      <td>控股有限公司</td>
                      <td class="title">债权总额(万元)</td>
                      <td>41111.52132434</td>
                    </tr>
                    <tr>
                      <td class="title">本金(万元)</td>
                      <td>38000</td>
                      <td class="title">利息(万元)</td>
                      <td>41111.52132434</td>
                    </tr>
                    <tr>
                      <td class="title">违约金(万元)</td>
                      <td>473.00</td>
                      <td class="title">其他(万元)</td>
                      <td>473.00</td>
                    </tr>
                    <tr>
                      <td class="title">债务人所属行业</td>
                      <td>电力,热力，燃气及水生产和供应业---电力</td>
                      <td class="title">债务人注册地址</td>
                      <td>电力,热力，燃气及水生产和供应业---电力</td>
                    </tr>
                    <tr>
                      <td class="title">债务人经济性质</td>
                      <td>电力,热力，燃气及水生产和供应业---电力</td>
                      <td class="title">法定代表人</td>
                      <td>电力,热力，燃气及水生产和供应业---电力</td>
                    </tr>
                    <tr>
                      <td class="title">债务人经营范围</td>
                      <td
                        colspan="3"
                      >电力,热力，燃气及水生产和供应业---电力电力,热力，燃气及水生产和供应业---电力电力,热力，燃气及水生产和供应业---电力</td>
                    </tr>
                    <tr>
                      <td class="title">债权担保情况</td>
                      <td colspan="3">电力,热力，燃气及水生产和供应业---电力</td>
                    </tr>
                    <tr>
                      <td class="title">保证人姓名</td>
                      <td colspan="3">---</td>
                    </tr>
                    <tr>
                      <td class="title">债权质押情况</td>
                      <td colspan="3">电力,热力，燃气及水生产和供应业---电力</td>
                    </tr>
                    <tr>
                      <td class="title">债权抵押情况</td>
                      <td colspan="3">电力,热力，燃气及水生产和供应业---电力</td>
                    </tr>
                    <tr>
                      <td class="title">债权现状</td>
                      <td colspan="3">电力,热力，燃气及水生产和供应业---电力</td>
                    </tr>
                    <tr>
                      <td class="title">其他需要披露的内容</td>
                      <td
                        colspan="3"
                      >电力,热力，燃气及水生产和供应业---电力电力,热力，燃气及水生产和供应业---电力电力,热力，燃气及水生产和供应业---电力电力,热力，燃气及水生产和供应业---电力电力,热力，燃气及水生产和供应业---电力电力,热力，燃气及水生产和供应业---电力电力,热力，燃气及水生产和供应业---电力电力,热力，燃气及水生产和供应业---电力电力,热力，燃气及水生产和供应业---电力电力,热力，燃气及水生产和供应业---电力电力,热力，燃气及水生产和供应业---电力电力,热力，燃气及水生产和供应业---电力电力,热力，燃气及水生产和供应业---电力电力,热力，燃气及水生产和供应业---电力电力,热力，燃气及水生产和供应业---电力电力,热力，燃气及水生产和供应业---电力电力,热力，燃气及水生产和供应业---电力电力,热力，燃气及水生产和供应业---电力</td>
                    </tr>
                  </table>
                </div>
              </el-tab-pane>
              <el-tab-pane label="转让方情况" name="2">
                <div class="content-msg-c-r">
                  <table>
                    <tr>
                      <td class="title">转让方名称</td>
                      <td>电力,热力，燃气及水生产和供应业---电力</td>
                      <td class="title">转让方住所</td>
                      <td>电力,热力，燃气及水生产和供应业---电力</td>
                    </tr>
                    <tr>
                      <td class="title">转让方经济类型</td>
                      <td>电力,热力，燃气及水生产和供应业---电力</td>
                      <td class="title">转让方行业</td>
                      <td>电力,热力，燃气及水生产和供应业---电力</td>
                    </tr>
                    <tr>
                      <td class="title">统一社会信用代码</td>
                      <td>12546464654654646</td>
                      <td class="title">法定代表人/负责人</td>
                      <td>王毅</td>
                    </tr>
                  </table>
                </div>
              </el-tab-pane>
              <el-tab-pane label="交易条件与受让方资格条件" name="3">
                <div class="content-msg-c-r">
                  <table>
                    <tr>
                      <td class="title">交易价款支付方式</td>
                      <td>电力,热力，燃气及水生产和供应业---电力</td>
                    </tr>
                    <tr>
                      <td class="title">与转让相关的其他条件</td>
                      <td>电力,热力，燃气及水生产和供应业---电力</td>
                    </tr>
                  </table>
                  <table style="margin-top:50px">
                    <tr>
                      <td class="title">受让方资格条件</td>
                      <td>电力,热力，燃气及水生产和供应业---电力</td>
                    </tr>
                  </table>
                  <table style="margin-top:50px">
                    <tr>
                      <td class="title">是否交纳保证金</td>
                      <td>是</td>
                      <td class="title">交纳金额(万元)</td>
                      <td>500</td>
                    </tr>
                    <tr>
                      <td class="title">交纳时间</td>
                      <td colspan="3">电力,热力，燃气及水生产和供应业---电力</td>
                    </tr>
                    <tr>
                      <td class="title">保证事项</td>
                      <td colspan="3">电力,热力，燃气及水生产和供应业---电力</td>
                    </tr>
                    <tr>
                      <td class="title">处置方式</td>
                      <td colspan="3">电力,热力，燃气及水生产和供应业---电力</td>
                    </tr>
                  </table>
                </div>
              </el-tab-pane>
              <el-tab-pane label="挂牌信息" name="4">
                <div class="content-msg-c-r">
                  <table>
                    <tr>
                      <td class="title">挂牌公告期</td>
                      <td>电力,热力，燃气及水生产和供应业---电力</td>
                    </tr>
                    <tr>
                      <td class="title" style="width: 300px;">挂牌期满后，如未征集到意向受让方</td>
                      <td>电力,热力，燃气及水生产和供应业---电力</td>
                    </tr>
                    <tr>
                      <td class="title">报价方式</td>
                      <td>12546464654654646</td>
                    </tr>
                  </table>
                </div>
              </el-tab-pane>
              <el-tab-pane label="联系方式" name="5">
                <div class="content-msg-c-r">
                  <table>
                    <tr>
                      <td class="title">交易机构</td>
                      <td>电力,热力，燃气及水生产和供应业---电力</td>
                    </tr>
                    <tr>
                      <td class="title">经济代理机构</td>
                      <td>电力,热力，燃气及水生产和供应业---电力</td>
                    </tr>
                  </table>
                </div>
              </el-tab-pane>
              <el-tab-pane label="其他信息" name="6">
                <div class="content-msg-c-r">
                  <table>
                    <tr>
                      <td class="title">附件</td>
                      <td>
                        <span class="files">
                          <i class="el-icon-document"></i>
                          <a href target="_blank">资产清单.pdf</a>
                        </span>
                        <span class="files">
                          <i class="el-icon-document"></i>
                          <a href target="_blank">资产清单.pdf</a>
                        </span>
                      </td>
                    </tr>
                  </table>
                </div>
              </el-tab-pane>
            </el-tabs>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeadNav from "../common/HeadNav";
export default {
  components: {
    "head-nav": HeadNav
  },
  data() {
    return {
      type: null,
      activeName: "1"
    };
  },
  created() {
    this.type = this.$route.params.type;
  },
  mounted() {
    this.$refs["head-nav"].TabNav = "/PropertyDeal";
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab.name);
    }
  }
};
</script>

<style lang="scss" scoped>
.content-msg-c {
  display: block !important;
  background: white;
  padding: 20px;
  box-sizing: border-box;
}
.content-msg-c-r {
  margin: 0 !important;
  padding: 0 !important;
  margin-top: 20px !important;
}
table {
  width: 100%;
  border-collapse: collapse;
  tr {
    width: 100%;
  }
  td {
    border: 1px solid #ccc;
    word-break: break-all;
    box-sizing: border-box;
    padding: 15px;
    font-size: 15px;
    color: #808080;
  }
  .title {
    background: #fff2f0;
    width: 250px;
  }
}

.propertyDeals-title {
  width: 100%;
  padding-bottom: 20px;
  border-bottom: 1px solid #ccc;
  word-break: break-all;
  color: #808080;
  font-weight: bold;
  font-size: 17px;
}
.propertyDeals-msg {
  display: flex;
  flex-wrap: wrap;
  * {
    margin: 0;
  }
  .msg {
    margin-top: 20px;
    width: 33%;
    color: #808080;
    font-size: 15px;
  }
}
.propertyDeals-tabs {
  margin: 20px 0;
  position: relative;
  .propertyDeals-apply {
    padding: 7px;
    background: #ff6549;
    border-radius: 5px;
    color: white;
    font-size: 14px;
    position: absolute;
    z-index: 5;
    right: 0;
    cursor: pointer;
    &:hover {
      opacity: 0.9;
    }
  }
}
.files {
  display: inline-block;
  width: 22%;
  margin: 10px;
  box-sizing: border-box;
  &:hover {
    text-decoration: underline;
  }
  i {
    color: #4eb5fa;
  }
  a {
    color: #4eb5fa;
  }
}
</style>