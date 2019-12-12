<template>
  <div>
    <head-nav ref="head-nav"></head-nav>
    <div id="content-msg-box">
      <div class="content-msg-box">
        <el-breadcrumb class="breadcrumb-t">
          <el-breadcrumb-item>您当前的位置是:</el-breadcrumb-item>
          <el-breadcrumb-item>业务介绍</el-breadcrumb-item>
          <el-breadcrumb-item v-if="activeIndex == '1'">交易登记业务</el-breadcrumb-item>
          <el-breadcrumb-item v-if="activeIndex == '2'">交易登记公告</el-breadcrumb-item>
          <el-breadcrumb-item v-if="activeIndex == '3'">交易登记查询</el-breadcrumb-item>
        </el-breadcrumb>
        <div class="content-msg-c">
          <!-- 侧边栏部分 -->
          <div class="press-cl">
            <li v-for="(pre,index) in tabList" :key="index">
              <span
                class="press-cls"
                @click="activeIndex = pre.act_index"
                :class="['tab-button',{active:activeIndex === pre.act_index}]"
              >{{pre.title}}</span>
            </li>
          </div>
          <div class="content-msg-c-r" v-if="activeIndex == '1'">
            <!-- <el-table
              :data="businessList"
              style="width: 90%"
              @row-click="handleClickBusiness"
              :row-style="{ cursor: 'pointer'}"
            >
              <el-table-column prop="createTime" label="日期" width="100">
                <template slot-scope="scope">
                  <div class="noticeTab-date">
                    <section>
                      <h3>{{dateFormatting(scope.row.createTime)}}</h3>
                    </section>
                  </div>
                </template>
              </el-table-column>
              <el-table-column prop="noticeTitle" label="内容">
                <template slot-scope="scope">
                  <span class="noticeTitle">{{scope.row.noticeTitle}}</span>
                </template>
              </el-table-column>
              <el-table-column prop="createTime" label="时间" width="110">
                <template slot-scope="scope">
                  <span class="createTime">{{$moment(scope.row.createTime).format("YYYY-MM-DD")}}</span>
                </template>
              </el-table-column>
              <el-table-column label="操作" width="50">
                <template slot-scope="scope">
                  <el-button @click="handleClickBusiness(scope.row)" type="text" size="small">查看</el-button>
                </template>
              </el-table-column>
            </el-table>-->
            <iframe
              id="previewPdf"
              :src="'/static/pdf/web/viewer.html?file=' + businessList[0].url"
            ></iframe>
          </div>
          <div class="content-msg-c-r" v-if="activeIndex == '2'">
            <el-table
              :data="noticeList"
              style="width: 90%;"
              @row-click="handleClickNotice"
              :row-style="{ cursor: 'pointer'}"
            >
              <el-table-column prop="createTime" label="日期" width="100">
                <template slot-scope="scope">
                  <div class="noticeTab-date">
                    <section>
                      <h3>{{dateFormatting(scope.row.createTime)}}</h3>
                    </section>
                  </div>
                </template>
              </el-table-column>
              <el-table-column prop="noticeTitle" label="内容">
                <template slot-scope="scope">
                  <span class="noticeTitle">{{scope.row.noticeTitle}}</span>
                </template>
              </el-table-column>
              <el-table-column prop="createTime" label="时间" width="110">
                <template slot-scope="scope">
                  <span class="createTime">{{$moment(scope.row.createTime).format("YYYY-MM-DD")}}</span>
                </template>
              </el-table-column>
              <el-table-column label="操作" width="50">
                <template slot-scope="scope">
                  <el-button @click="handleClickNotice(scope.row)" type="text" size="small">查看</el-button>
                </template>
              </el-table-column>
            </el-table>
            <div class="paging" v-if="noticeList.length">
              <el-pagination
                @current-change="handleCurrentChange0"
                :current-page="currentPage0 + 1"
                :page-sizes="[1, 2, 3, 4]"
                :page-size="pageSize0"
                prev-text="上一页"
                next-text="下一页"
                layout="  prev,  next"
                :total="totalElements0"
              ></el-pagination>
            </div>
            <!-- 详细内容 -->
            <div class="details" style="min-height:800px;" v-show="details">
              <i class="el-icon-close" @click="details=false"></i>
              <div class="title det" v-html="title"></div>
              <div class="ql-container ql-snow">
                <section class="ql-editor" v-html="message"></section>
              </div>
            </div>
          </div>
          <!-- 交易登记查询内容部分 -->
          <div class="content-msg-c-r" v-if="activeIndex == '3'">
            <!-- 入口 -->
            <div class="Entrance" v-if="!typeIndexShow">
              <div class="Entrance-tab" style=" background: #4F82D8;" @click="typeIndexShow = '1'">
                <section>登记申请方 -- 查询入口</section>
                <span class="go" style=" color: #4F82D8;">GO</span>
              </div>
              <div class="Entrance-tab" style=" background: #19437E;" @click="typeIndexShow = '2'">
                <section>登记相对方 -- 查询入口</section>
                <span class="go" style=" color: #19437E;">GO</span>
              </div>
            </div>
            <!-- 甲方预查询 -->
            <div class="content-msg" v-if="typeIndexShow == '1' && !queryListShow">
              <span class="goBack" @click="goBack()">
                <i class="el-icon-back"></i>
                返回
              </span>
              <h2>交易登记查询(登记申请方)</h2>
              <div class="queryMsg">
                <div class="input-box">
                  <span class="label">联系人手机号:</span>
                  <input type="text" maxlength="11" v-model="queryMsg1.phone" placeholder="请输入手机号" />
                </div>
                <div class="input-box">
                  <span class="label">验证码:</span>
                  <input type="text" maxlength="6" v-model="queryMsg1.veCode" placeholder="请输入验证码" />
                  <section class="verification-code">
                    <input
                      type="button"
                      :disabled="isCodeDisabled"
                      v-model="codeText"
                      @click="sendMsgStep('1')"
                    />
                  </section>
                </div>
                <div id="captcha">
                  <p id="wait" class="show"></p>
                </div>
                <span class="btn" @click="toQuery('1')">查询</span>
              </div>
            </div>
            <!-- 乙方预查询 -->
            <div class="content-msg" v-if="typeIndexShow == '2' && !queryListShow">
              <span class="goBack" @click="goBack()">
                <i class="el-icon-back"></i>
                返回
              </span>
              <h2>交易登记查询(登记相对方)</h2>
              <!-- 手机号输入 -->
              <div class="queryMsg" v-if="!paymentShow">
                <div class="input-box">
                  <span class="label">协议登记手机号:</span>
                  <input type="text" maxlength="11" v-model="queryMsg2.phone" placeholder="请输入手机号" />
                </div>
                <div class="input-box">
                  <span class="label">验证码:</span>
                  <input type="text" maxlength="6" v-model="queryMsg2.veCode" placeholder="请输入验证码" />
                  <section class="verification-code">
                    <input
                      type="button"
                      :disabled="isCodeDisabled"
                      v-model="codeText"
                      @click="sendMsgStep('2')"
                    />
                  </section>
                </div>
                <div id="captcha">
                  <p id="wait" class="show"></p>
                </div>
                <span class="btn" @click="toQuery('2')">查询</span>
              </div>
              <!-- 支付模块 -->
              <div class="payment-page" v-if="paymentShow">
                <p>查询结果：协议登记手机号：{{queryMsg2.phone}}，共{{paymentMsg.total}}条</p>
                <p>
                  支付金额：
                  <span style="color:red;font-weight:bold">{{paymentMsg.chargeAmount}}</span>
                  元（支付完成后，{{paymentMsg.validityPeriod}}天内，可任意查询及下载）
                </p>
                <div class="payment-type">
                  <section>
                    <div class="logo" style="border: 1px solid #2CDB2F;">
                      <img src="@/assets/images/weixin_logo.png" alt />
                    </div>
                    <div class="pay-btn" style="background:#2CDB2F" @click="weixinPay()">
                      <span>微信支付</span>
                      <i class="el-icon-arrow-right"></i>
                    </div>
                  </section>
                  <section>
                    <div class="logo" style="border: 1px solid #04A1E9;">
                      <img src="@/assets/images/zhifubao_logo.png" alt />
                    </div>
                    <div class="pay-btn" style="background:#04A1E9" @click="zhifubaoPay()">
                      <span>支付宝支付</span>
                      <i class="el-icon-arrow-right"></i>
                    </div>
                  </section>
                </div>
                <p class="hint">温馨提示：</p>
                <p class="hint">1.支付完成后，{{paymentMsg.validityPeriod}}天内，可任意查询及下载</p>
              </div>
              <!-- 支付结果加载模块 -->
              <el-main
                v-if="waiting && paymentShow"
                v-loading="waiting"
                element-loading-background="rgba(255, 255, 255, 0.7)"
                class="callbackEleLoading"
                element-loading-text="支付结果获取中，请等待"
              ></el-main>
            </div>
            <!-- 查询列表模块 -->
            <div class="queryList" v-if="queryListShow">
              <div class="query-title">
                <span class="goBack" @click="goBack()">
                  <i class="el-icon-back"></i>
                  返回
                </span>
                <h2>
                  交易登记查询
                  <span v-if="typeIndexShow == '1'">(登记申请方)</span>
                  <span v-if="typeIndexShow == '2'">(登记相对方)</span>
                </h2>
                <p v-if="typeIndexShow == '1'">联系人手机号:{{queryMsg1.phone}}</p>
                <p v-if="typeIndexShow == '2'">协议登记手机号:{{queryMsg2.phone}}</p>
              </div>
              <div class="search-form">
                <el-form :model="searchForm" label-width="100px" class="demo-ruleForm">
                  <section>
                    <div class="hang" style="width:25%">
                      <el-form-item label="项目编号:" prop="name">
                        <el-input v-model="searchForm.name"></el-input>
                      </el-form-item>
                    </div>
                    <div class="hang" style="width:25%">
                      <el-form-item label="项目名称:" prop="name">
                        <el-input v-model="searchForm.name"></el-input>
                      </el-form-item>
                    </div>
                    <div class="hang" style="width:35%">
                      <el-form-item label="协议签属日期:" prop="date">
                        <el-date-picker
                          v-model="searchForm.date"
                          style="width:100%;"
                          type="daterange"
                          range-separator="-"
                          start-placeholder="开始日期"
                          end-placeholder="结束日期"
                        ></el-date-picker>
                      </el-form-item>
                    </div>
                    <div class="button-box" @click="search()">搜索</div>
                  </section>
                  <div class="btn">
                    <div class="button-box" @click="downloadNow()">立即下载</div>
                  </div>
                </el-form>
              </div>
              <div class="content-msg-table">
                <el-table
                  :data="tableData"
                  style="width: 100%"
                  :header-cell-style="{'background-color': '#e8e8e8','font-size':'12px'}"
                >
                  <el-table-column prop="date" label="订单号"></el-table-column>
                  <el-table-column prop="name" label="项目编号"></el-table-column>
                  <el-table-column prop="address" label="项目名称"></el-table-column>
                  <el-table-column prop="date" label="协议甲方"></el-table-column>
                  <el-table-column prop="name" label="协议乙方"></el-table-column>
                  <el-table-column prop="address" label="协议登记手机号"></el-table-column>
                  <el-table-column prop="address" label="协议乙方证件号"></el-table-column>
                  <el-table-column prop="address" label="协议金额(元)"></el-table-column>
                  <el-table-column prop="address" label="协议存续期(天)"></el-table-column>
                  <el-table-column prop="address" label="协议签署日"></el-table-column>
                </el-table>
                <div class="content-msg-pagination">
                  <span
                    class="pagination-left"
                  >共{{totalElements}}条记录&#x3000;第{{currentPage}}/{{totalPages}}页</span>
                  <span class="pagination-right">
                    <el-pagination
                      @size-change="handleSizeChange"
                      @current-change="handleCurrentChange"
                      :current-page="currentPage + 1"
                      :page-sizes="[10, 20, 30, 40]"
                      :page-size="pageSize"
                      layout="total,  prev, pager, next, sizes"
                      :total="totalElements"
                    ></el-pagination>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <el-dialog
      title
      top="22vh"
      :close-on-click-modal="false"
      :visible.sync="paymentShow_weixin"
      width="800px"
      center
    >
      <div class="pay-dialog">
        <div class="pay-top">
          <span class="title">订单提交成功，请尽快付款！订单号：107512879985</span>
          <span class="pay-money">
            应付金额：
            <span style="font-size:20px;color:red;font-weight:bold;">1.00</span>元
          </span>
        </div>
        <div class="weixin-logo">
          <img src="@/assets/images/weixin_pay_logo.png" alt />
        </div>
        <section class="pay-bottom">
          <div class="pay-QRcode">
            <section style="border: 1px dashed #ccc;">
              <img src="@/assets/images/wxgzh.jpg" alt />
            </section>
            <section style="width:80%;margin-top:20px;">
              <img src="@/assets/images/weixin_text.png" alt />
            </section>
          </div>
          <div class="sao-img">
            <img src="@/assets/images/weixin_sao.png" alt />
          </div>
        </section>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import HeadNav from "./common/HeadNav";
import validates from "@/assets/js/validate.js";
import gtInit from "@/assets/js/gt";
import request from "@/utils/transaction";
import requestWebsite from "@/utils/request";
export default {
  components: {
    "head-nav": HeadNav
  },
  watch: {
    activeIndex(newVal, oldVal) {
      this.details = false;
      if (newVal == "3") {
        if (window.sessionStorage.XAuthToken) {
          this.initGtCaptcha();
        } else {
          this.accquireToken();
        }
      } else if (newVal == "2") {
        this.getNewsPage("900000000000000000005");
      }
    },
    //监听微信弹框状态，关闭弹框时结束轮询
    paymentShow_weixin(newVal, oldVal) {
      if (!newVal) {
        // this.websocketclose();
      }
    }
  },
  data() {
    return {
      activeIndex: "1",
      captchaObj: "",
      gtCapValid: "",
      codeText: "获取验证码",
      time: 90,
      interval: null,
      details: false,
      title: "",
      message: "",
      waiting: false,
      isCodeDisabled: false,
      typeIndexShow: false, //通过url传过来不需要展示的一项
      paymentShow: false, //支付页面显示（支付宝）
      paymentMsg: {
        chargeAmount: 0,
        validityPeriod: 0,
        total: 0
      },
      paymentShow_weixin: false, //支付页面显示（微信）
      queryListShow: false, //查询列表显示
      tabList: [
        {
          title: "交易登记业务",
          act_index: "1"
        },
        {
          title: "交易登记公告",
          act_index: "2"
        },
        {
          title: "交易登记查询",
          act_index: "3"
        }
      ],
      //甲方预查询信息
      queryMsg1: {
        phone: "",
        veCode: ""
      },
      //乙方预查询信息
      queryMsg2: {
        phone: "",
        veCode: ""
      },
      //搜索查询信息
      searchForm: {
        name: "",
        date: ""
      },
      currentPage0: 0,
      pageSize0: 10,
      totalPages0: 0,
      totalElements0: 0,
      noticeList: [],
      currentPage: 0,
      pageSize: 10,
      totalPages: 0,
      totalElements: 0,
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        }
      ],
      businessList: [
        {
          createTime: "2019-12-04",
          noticeTitle:
            "吉林东北亚创新金融资产交易中心有限公司《东金中心交易登记业务说明》",
          url:
            "https://oss.neafex.com/regulation-gateway-public/%E4%B8%9C%E9%87%91%E8%A7%84%E7%AB%A0%E3%80%942018%E3%80%95%E7%AC%AC04%E5%8F%B7-%E5%AE%9A%E5%90%91%E8%9E%8D%E8%B5%84%E8%AE%A1%E5%88%92%E4%B8%9A%E5%8A%A1%E7%AE%A1%E7%90%86%E5%8A%9E%E6%B3%95.pdf"
        }
      ],
      selfTimeout: null, //支付超时
      selfInterval: null //支付弹框开启，开始轮询
    };
  },
  created() {
    let type = this.$route.params.type;
    if (type == "applicant") {
      this.activeIndex = "3";
      this.typeIndexShow = "1";
    } else if (type == "counterparty") {
      this.activeIndex = "3";
      this.typeIndexShow = "2";
    }
    let address = this.$route.query.address;
    if (address == "pay" || window.sessionStorage.payment) {
      this.activeIndex = "3";
      this.typeIndexShow = "2";
      this.paymentShow = true;
      this.waiting = true;
      let payBackParams = JSON.parse(window.sessionStorage.payBackParams);
      this.queryMsg2.phone = payBackParams.phone;
      this.paymentMsg.chargeAmount = payBackParams.chargeAmount;
      this.paymentMsg.validityPeriod = payBackParams.validityPeriod;
      this.paymentMsg.total = payBackParams.total;
      //打开webscoket连接
      this.initWebSocket();
      //给支付宝设定一个等待限制，30s后无影响时就断开连接
      this.selfTimeout = setTimeout(() => {
        window.sessionStorage.removeItem("payment");
        this.websocketclose();
        this.waiting = false;
        this.$message.warning("支付超时，请重新支付");
      }, 60000);
    }
  },
  mounted() {
    this.$refs["head-nav"].TabNav = "/BusinessIntroduction";
  },
  destroyed() {
    window.sessionStorage.removeItem("payment");
    window.sessionStorage.removeItem("payBackParams");
    window.sessionStorage.removeItem("alipayserialnumber")
    this.websocketclose();
  },
  methods: {
    // 返回上一层
    goBack() {
      let _this = this;
      if (this.typeIndexShow && !this.paymentShow) {
        if (this.queryListShow) {
          _this.queryListShow = false;
          _this.queryMsg1.phone = "";
          _this.queryMsg1.veCode = "";
          _this.queryMsg2.phone = "";
          _this.queryMsg2.veCode = "";
          _this.isCodeDisabled = false;
          window.clearInterval(_this.interval);
          _this.time = 90;
          _this.paymentShow = false
          _this.codeText = '获取验证码'
        } else {
          _this.typeIndexShow = false;
        }
      } else {
        _this.paymentShow = false;
        _this.typeIndexShow = "2";
        _this.queryMsg2.phone = "";
        _this.queryMsg2.veCode = "";
        _this.isCodeDisabled = false;
        window.clearInterval(_this.interval);
        _this.time = 90;
      }
    },
    //交易登记公告分页
    handleCurrentChange0(val) {
      this.currentPage0 = val - 1;
      this.getNewsPage("900000000000000000005");
    },
    //交易登记查询列表分页
    handleCurrentChange(val) {
      this.currentPage = val - 1;
    },
    handleSizeChange(val) {
      this.currentPage = 0;
      this.pageSize = val;
    },
    //时间格式转换
    dateFormatting(val) {
      return this.$moment(val).format("DD");
    },
    //交易登记公告查看
    handleClickNotice(row) {
      this.details = true;
      this.title = row.noticeTitle;
      this.message = row.noticeText;
    },
    //查看交易登记业务
    handleClickBusiness(row) {
      window.open(row.url, "_blank");
    },
    //获取公司和行业新闻 100000000000000000001（公司）  100000000000000000002（行业）
    getNewsPage(templateId) {
      let _this = this;
      let params = {
        templateId: templateId,
        pageNumber: _this.currentPage0,
        pageSize: _this.pageSize0
      };
      this.$axios
        .post("website/website/getNewsPage", params)
        .then(res => {
          console.log(res);
          let resData = res.data;
          if (resData.retCode == "N00000") {
            _this.noticeList = resData.body.content;
            _this.totalPages0 = resData.body.totalPages;
            _this.totalElements0 = resData.body.totalElements;
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    //进入登录页，无token时获取token
    accquireToken() {
      let _this = this;
      this.$axios
        .get("core-api/base/getToken")
        .then(function(res) {
          console.log(res);
          let resData = res.data;
          if (resData.retCode == "N00000") {
            // 从后端获取token
            let XAuthToken = resData.body["X-AUTH-TOKEN"];
            console.log(XAuthToken);
            sessionStorage.setItem("XAuthToken", XAuthToken);
            //保存到浏览器的 sessionStorage 里面,但会随着页面关闭而改变
            _this.initGtCaptcha();
          } else {
            _this.$message.warning(resData.retMsg);
          }
        })
        .catch(function(err) {
          console.log(err);
          _this.$message.error("服务器出现问题，请稍后再试");
        });
    },
    // 极验初始化
    initGtCaptcha() {
      var _this = this;
      this.$axios
        .get("core-api/token/startCaptcha?t=" + new Date().getTime())
        .then(function(res) {
          console.log(res);
          let resData = res.data;
          if (resData.retCode == "N00000") {
            let bodyResult = resData.body;
            window.initGeetest(
              {
                // 以下 4 个配置参数为必须，不能缺少
                gt: bodyResult.gt,
                challenge: bodyResult.challenge,
                offline: !bodyResult.success, // 表示用户后台检测极验服务器是否宕机
                new_captcha: bodyResult.new_captcha, // 用于宕机时表示是新验证码的宕机
                product: "bind", // 产品形式，包括：float，popup
                width: "100%"
              },
              function(captchaObj) {
                _this.captchaObj = captchaObj;
                captchaObj.appendTo("#captcha");
                captchaObj.onReady(function() {
                  document.getElementById("wait").style.display = "none";
                });
                captchaObj.onSuccess(function() {
                  _this.gtCapValid = captchaObj.getValidate();
                  // _this.smsShow = true;
                  _this.sendMsg();
                });
                captchaObj.onError(function() {
                  // 出错啦，可以提醒用户稍后进行重试
                  _this.$message.error("出错啦，请稍后进行重试");
                });
              }
            );
          } else {
            // _this.$message.warning(resData.retMsg);
          }
        })
        .catch(function(err) {
          _this.$message.error("服务器出现问题，请稍后再试");
        });
    },
    //获取短信验证码展示极验
    sendMsgStep(type) {
      var _this = this;
      if (type == "1") {
        if (!_this.queryMsg1.phone) {
          _this.$message.warning("请输入手机号");
          return;
        }
        if (!validates.isvalidPhone(_this.queryMsg1.phone)) {
          _this.$message.warning("手机号格式有误");
          return;
        }
      } else if (type == "2") {
        if (!_this.queryMsg2.phone) {
          _this.$message.warning("请输入手机号");
          return;
        }
        if (!validates.isvalidPhone(_this.queryMsg2.phone)) {
          _this.$message.warning("手机号格式有误");
          return;
        }
      }
      _this.captchaObj.verify(); //显示验证码
    },
    //获取短信验证码
    sendMsg() {
      var _this = this;
      let phone = "";
      if (_this.typeIndexShow == "1") {
        phone = _this.queryMsg1.phone;
      } else if (_this.typeIndexShow == "2") {
        phone = _this.queryMsg2.phone;
      }
      let params = {
        mobileNumber: phone,
        actionType: 10,
        geetestChallenge: _this.gtCapValid.geetest_challenge,
        geetestValidate: _this.gtCapValid.geetest_validate,
        geetestSeccode: _this.gtCapValid.geetest_seccode
      };
      console.log(window.sessionStorage.XAuthToken);
      this.$axios
        .post("core-api/token/verifySms", params)
        .then(function(res) {
          console.log(res);
          let resData = res.data;
          if (resData.retCode == "N00000") {
            //获取验证码之后开始倒计时
            _this.isCodeDisabled = true;
            _this.interval = window.setInterval(function() {
              _this.codeText = _this.time + "秒";
              --_this.time;
              if (_this.time < 0) {
                _this.codeText = "重新发送";
                _this.time = 90;
                _this.isCodeDisabled = false;
                window.clearInterval(_this.interval);
              }
            }, 1000);
          } else {
            _this.$message.warning(resData.retMsg);
            _this.gtCapValid = "";
            _this.captchaObj.reset();
          }
        })
        .catch(function(err) {
          console.log(err);
          _this.$message.error("服务器出现问题，请稍后再试");
          _this.gtCapValid = "";
          _this.captchaObj.reset();
        });
    },
    //输入完手机号和验证码去查询接口
    toQuery(type) {
      let _this = this;
      let params;
      if (type == "1") {
        if (!_this.queryMsg1.phone) {
          _this.$message.warning("请输入手机号");
          return;
        }
        if (!validates.isvalidPhone(_this.queryMsg1.phone)) {
          _this.$message.warning("手机号格式有误");
          return;
        }
        if (!_this.queryMsg1.veCode) {
          _this.$message.warning("请输入短信验证码");
          return;
        }
        params = {
          registrationType: 1,
          phone: _this.queryMsg1.phone,
          smsCode: _this.queryMsg1.veCode
        };
      } else if (type == "2") {
        if (!_this.queryMsg2.phone) {
          _this.$message.warning("请输入手机号");
          return;
        }
        if (!validates.isvalidPhone(_this.queryMsg2.phone)) {
          _this.$message.warning("手机号格式有误");
          return;
        }
        if (!_this.queryMsg2.veCode) {
          _this.$message.warning("请输入短信验证码");
          return;
        }
        params = {
          registrationType: 2,
          phone: _this.queryMsg2.phone,
          smsCode: _this.queryMsg2.veCode
        };
      }
      requestWebsite({
        url: "trade/check",
        method: "POST",
        headers: {
          "channel-code": "WEBSITE",
          "client-type": "PCH5",
          version: "0.0.1",
          "x-auth-token": window.sessionStorage.XAuthToken
        },
        data: params
      }).then(res => {
        console.log(res);
        let resData = res.data;
        if (resData.retCode == "N00000") {
          if (resData.body.chargeMark == "1") {
            _this.paymentShow = true;
            _this.paymentMsg.chargeAmount = resData.body.chargeAmount;
            _this.paymentMsg.validityPeriod = resData.body.validityPeriod;
            _this.paymentMsg.total = resData.body.total;
          } else {
            _this.queryListShow = true;
          }
          sessionStorage.setItem("XTradeToken", resData.body.tradeToken);
        } else {
          _this.$message.warning(resData.retMsg);
        }
      });
    },
    // 微信支付接口
    weixinPay() {
      this.paymentShow_weixin = true;
      // this.initWebSocket();
      setTimeout(() => {
        this.paymentShow_weixin = false;
        this.paymentShow = false;
        this.queryListShow = true;
      }, 2000);
    },
    // 支付宝支付接口
    zhifubaoPay() {
      let _this = this;
      let phone = "";
      if (_this.typeIndexShow == "1") {
        phone = _this.queryMsg1.phone;
      } else if (_this.typeIndexShow == "2") {
        phone = _this.queryMsg2.phone;
      }
      let params = {
        phone: phone
      };
      request({
        url: "website/alipay/getPayPage",
        method: "POST",
        data: params
      }).then(res => {
        console.log(res);
        let resData = res.data;
        if (!resData.retCode) {
          _this.websocketclose();
          let payBackParams = {
            phone: _this.queryMsg2.phone,
            total: _this.paymentMsg.total,
            validityPeriod: _this.paymentMsg.validityPeriod,
            chargeAmount: _this.paymentMsg.chargeAmount
          };
          window.sessionStorage.setItem(
            "payBackParams",
            JSON.stringify(payBackParams)
          );
          window.sessionStorage.setItem("payment", "1");
          window.sessionStorage.setItem('alipayserialnumber',res.headers.alipayserialnumber)
          const div = document.createElement("divform");
          div.innerHTML = resData;
          document.body.appendChild(div);
          document.forms[0].acceptCharset = "UTF-8"; //保持与支付宝默认编码格式一致，如果不一致将会出现：调试错误，请回到请求来源地，重新发起请求，错误代码 invalid-signature 错误原因: 验签出错，建议检查签名字符串或签名私钥与应用公钥是否匹配
          document.forms[0].submit();
        } else {
          this.$message.error(resData.retMsg);
        }
      });
      // window.location = "http://192.168.0.124:8082/#/other";
    },
    //初始化weosocket
    initWebSocket() {
      let XAuthToken = window.sessionStorage.getItem("XAuthToken");
      console.log(XAuthToken);
      if (XAuthToken) {
        let websocket = "";
        if ("WebSocket" in window) {
          let wsuri =
            "wss://" + this.$siteSet.baseIP + "/websocket/" + XAuthToken; //ws地址
          // let wsuri = "ws://192.168.32.191:8088/ws";//ws地址
          window.websock = new WebSocket(wsuri);
          window.websock.onopen = this.websocketonopen;
          window.websock.onerror = this.websocketonerror;
          window.websock.onsend = this.websocketsend;
          window.websock.onmessage = this.websocketonmessage;
          window.websock.onclose = this.websocketclose;
        } else {
          console.log("当前浏览器 Not support websocket");
        } //连接成功建立的回调方法 websocket.onopen = function () { console.log("WebSocket连接成功")
      }
    },
    // WebSocket连接成功
    websocketonopen() {
      console.log("WebSocket连接成功");
      console.log("开始每隔1s发送信息询问");
      this.selfInterval = setInterval(this.websocketsend, 1000);
    },
    // WebSocket连接发生错误
    websocketonerror(e) {
      //错误
      console.log(e);
      console.log("WebSocket连接发生错误");
    },
    //数据接收
    websocketonmessage(e) {
      if (e) {
        let redata = JSON.parse(e.data);
        //注意：长连接我们是后台直接1秒推送一条数据，
        //但是点击某个列表时，会发送给后台一个标识，后台根据此标识返回相对应的数据，
        //这个时候数据就只能从一个出口出，所以让后台加了一个键，例如键为1时，是每隔1秒推送的数据，为2时是发送标识后再推送的数据，以作区分
        console.log(redata.retCode);
        if (redata.retCode == "N00000") {
          window.sessionStorage.removeItem("payment");
          this.waiting = false;
          this.paymentShow = false;
          this.queryListShow = true;
          this.$message.success("支付成功");
        } else {
          this.$message.error("支付失败");
        }
        clearInterval(this.selfInterval);
        this.websocketclose();
      }
    },
    //数据发送
    websocketsend() {
      let dataContent = {
        msg: "等待支付结果"
      };
      console.log(dataContent.msg);
      window.websock.send(JSON.stringify(dataContent));
    },
    //连接关闭
    websocketclose(e) {
      clearTimeout(this.selfTimeout);
      clearInterval(this.selfInterval);
      console.log("连接关闭");
    },
    //搜索
    search() {
      console.log(this.searchForm.date);
    },
    //立即下载
    downloadNow() {
      let _this = this;
      let params = {};
      this.$axios
        .post("xxxxxxxx", params, { responseType: "blob" })
        .then(res => {
          console.log(res);
          let content = res.data;
          let blob = new Blob([content]);
          let fileName = "文件名.pdf";
          if ("download" in document.createElement("a")) {
            // 非IE下载
            let elink = document.createElement("a");
            elink.download = fileName;
            elink.style.display = "none";
            elink.href = URL.createObjectURL(blob);
            document.body.appendChild(elink);
            elink.click();
            URL.revokeObjectURL(elink.href); // 释放URL 对象
            document.body.removeChild(elink);
          } else {
            // IE10+下载
            navigator.msSaveBlob(blob, fileName);
          }
          this.$message.success("生成文件成功");
        })
        .catch(err => {
          console.log(err);
          this.$message.error("服务器出现问题,请稍后再试");
        });
    }
  }
};
</script>

<style lang="scss" scoped>
//引入配色
@import "../../assets/css/pc/blendent.scss";
@import "../../assets/css/pc/home_business.scss";
.goBack {
  position: absolute;
  left: 20px;
  top: 40px;
  font-size: 15px;
  color: #808080;
  cursor: pointer;
  user-select: none;
  &:hover {
    color: #4f82d8;
  }
}
.press-cl {
  margin: 0;
  width: 160px;
  min-width: 160px;
  text-align: center;
  line-height: 100px;
  span {
    display: block;
    width: 100%;
    height: 100%;
    position: relative;
    z-index: 2;
    color: $theme;
    overflow: hidden;
    transition: 0.3s;
    border-top: 4px solid transparent;
    &:hover {
      border-bottom-right-radius: 40px;
      background: $white;
      color: $second;
    }
  }
  li::before {
    content: "";
    width: 90px;
    height: 2px;
    position: absolute;
    left: 40px;
    top: 0px;
    background: $white;
    transition: 0.3s;
  }
  li:first-child::before {
    background: transparent;
  }
  li {
    display: block;
    width: 100%;
    height: 100px;
    background: #e8e8e8;
    cursor: pointer;
    transition: 0.3s;
    box-sizing: border-box;
    position: relative;
  }
  .tab-button.active {
    position: relative;
    z-index: 2;
    border-top: 3px solid $second;
    background: $white;
    color: $second;
    border-bottom-right-radius: 40px;
    box-shadow: 0 0 5px $shadow;
  }
}
//微信支付弹框样式
.pay-dialog {
  padding: 0 30px;
  .pay-top {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    box-sizing: border-box;
    padding-bottom: 20px;
    border-bottom: 1px solid #e9e9e9;
    span {
      margin: 0;
    }
  }
  .weixin-logo {
    height: 30px;
    margin: 20px 0;
    img {
      height: 100%;
    }
  }
  .pay-bottom {
    box-sizing: border-box;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .pay-QRcode {
    width: 200px;
    text-align: center;
    p {
      margin-top: 20px;
    }
    img {
      width: 100%;
    }
  }
  .sao-img {
    width: 250px;
    img {
      width: 100%;
    }
  }
}

.noticeTab-date {
  width: 40px;
  height: 40px;
  background: #f6f6f6;
  color: $theme;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom-right-radius: 15px;
  text-align: center;
  margin: 0 !important;
}
.title.det {
  padding-top: 20px;
  width: 100%;
  height: 80px;
  text-align: center;
  font-size: 25px;
  color: rgb(28, 73, 196);
}
.content-msg {
  h2 {
    text-align: center;
    font-weight: 400;
    border-bottom: 2px dashed #ccc;
    color: #4f82d8;
    padding-bottom: 20px;
  }
  .queryMsg {
    margin: 100px auto;
    width: 400px;
    text-align: center;
    .btn {
      display: inline-block;
      color: white;
      background: #ff6549;
      color: white;
      padding: 10px 30px;
      font-size: 15px;
      cursor: pointer;
      user-select: none;
      border-radius: 5px;
      &:active {
        opacity: 0.8;
      }
    }
  }
  .payment-page {
    width: 50%;
    padding: 30px 0;
    margin-left: 35%;
    p {
      font-size: 15px;
      margin-bottom: 10px;
      // text-align: center;
    }
    .payment-type {
      margin: 50px 0;
      display: flex;
      justify-content: flex-start;
      section {
        margin-right: 100px;
      }
      * {
        margin: 0;
      }
      .logo {
        width: 120px;
        height: 120px;
        // background: red;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 5px;
        img {
          width: 100%;
          transform: scale(0.5);
        }
      }
      .pay-btn {
        text-align: center;
        width: 120px;
        line-height: 40px;
        cursor: pointer;
        user-select: none;
        margin-top: 20px;
        border-radius: 5px;
        color: white;
        font-size: 15px;
        &:hover {
          opacity: 0.8;
        }
      }
    }
    .hint {
      font-size: 14px;
      color: #808080;
    }
  }
}
.Entrance {
  margin: 200px auto;
  .Entrance-tab {
    box-shadow: 5px 5px 10px #ccc;
    width: 300px;
    height: 50px;
    color: white;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 20px;
    padding-right: 3px;
    margin: 30px auto;
    border-radius: 25px;
    cursor: pointer;
    // transition: 0.3s;
    &:hover {
      box-shadow: 0 0 10px #ccc;
    }
    &:hover .go {
      transform: scale(0.9);
    }
    * {
      margin: 0 !important;
    }
    .go {
      width: 45px;
      height: 45px;
      border-radius: 50%;
      background: white;
      text-align: center;
      line-height: 45px;
      color: #5c5c5c;
      margin: 0;
      // transition: 0.5s;
      cursor: pointer;
      user-select: none;
    }
  }
}
.queryList {
  text-align: center;
  .query-title {
    border-bottom: 2px dashed #ccc;
    padding-bottom: 20px;
    h2 {
      color: #4f82d8;
      font-weight: 400;
    }
    p {
      font-size: 14px;
      color: #808080;
      margin-top: 10px;
    }
  }
  .search-form {
    height: 100%;
    margin-top: 20px;
    .btn {
      margin-top: 20px;
      display: flex;
      justify-content: flex-start !important;
    }
  }
}
.input-box {
  height: 35px;
  position: relative;
  display: flex;
  align-items: center;
  margin: 20px 0;
  .label {
    font-size: 14px;
    width: 160px;
    text-align: right;
    padding-right: 10px;
    box-sizing: border-box;
  }
  input {
    color: #5c5c5c;
    display: inline-block;
    transition: 0.5s;
    width: 100%;
    height: 100%;
    background: transparent;
    border: 1px solid #ebebeb;
    font-size: 14px;
    outline: none;
    position: relative;
    padding-left: 10px;
    // border-radius: 5px;
    &:focus {
      border: 1px solid #fc8f7c;
    }
  }
  .verification-code {
    width: 100px;
    height: 100%;
    position: absolute;
    right: 1px;
    cursor: pointer;
    display: flex;
    align-items: center;
    transition: 0.3s;
    &:hover {
      background: #ebebeb;
    }
    input {
      color: #ff6549;
      cursor: pointer;
      display: inline-block;
      width: 100px;
      height: 100%;
      border: none;
      border-left: 1px solid #ebebeb;
      padding: 0;
      font-size: 13px;
    }
  }
}

.button-box {
  height: 40px;
  padding: 0 20px;
  line-height: 40px;
  text-align: center;
  display: inline-block;
  background: #ff6549;
  color: white;
  font-size: 14px;
  border-radius: 5px;
  user-select: none;
  margin: 0px 10px !important;
  cursor: pointer;
  &:active {
    opacity: 0.9;
  }
}

.callbackEleLoading {
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 99;
  top: 0;
}
.createTime {
  font-size: 12px;
  color: #a09f9f;
}
.paging {
  margin-top: 20px;
  display: flex;
  justify-content: center;
}
#previewPdf {
  width: calc(100% - 40px);
  margin: 0 20px;
  min-height: 800px;
}
</style>