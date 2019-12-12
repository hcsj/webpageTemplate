/**
 *  common utils
 */
'use strict'
import axios from "axios";
import { Message } from 'element-ui';

const utils = {
  calFactAge(birthday, date) {
    /**
     * 功能：根据出生日期和某日期计算实足年龄
     */
    // 判断出生日期是否为空
    if (utils.isEmpty(birthday) || utils.isEmpty(date)) {
      return;
    }
    // 将出生日期格式化
    var paramBirthday = new Date(birthday);
    // 将匹配日期格式化
    var paramFollowUpDate = new Date(date);
    // 计算年的差值
    var year = paramFollowUpDate.getYear() - paramBirthday.getYear();
    // 计算月的差值
    var month = paramFollowUpDate.getMonth() - paramBirthday.getMonth();
    // 计算天的差值
    var day = paramFollowUpDate.getDate() - paramBirthday.getDate();

    // 天的差值小于0
    if (day < 0) {
      month = month - 1;
      var m = paramFollowUpDate.getMonth() + 1;
      // 闰月
      if (1 == m || 3 == m || 5 == m || 7 == m || 8 == m || 10 == m || 12 == m) {
        day = day + 31;
      } else if (2 == m) { // 二月
        // 闰年二月
        if ((0 == paramFollowUpDate.getYear() % 4 &&
            0 != paramFollowUpDate.getYear() % 100) ||
          (0 == paramFollowUpDate.getYear() % 4 &&
            0 == paramFollowUpDate.getYear() % 100)) {
          day = day + 29;
        } else { // 平年二月
          day = day + 28;
        }
      } else { // 平月
        day = day + 30;
      }
    }
    // 月的差值小于0
    if (month < 0) {
      year = year - 1;
      month = month + 12;
    }

    var result = {
      year: '',
      month: '',
      day: ''
    };
    result.year = year;
    result.month = month;
    result.day = day;
    console.log("calFactAge", result)
    return result;
  },
  setToken: function(data){
    window.localStorage.token = data;
  },
  getToken: function(){
    if (window.localStorage.token!=undefined) {
      return window.localStorage.token;
    }
    return null;
  },
  gotoPageQuery(name, query) {
    this.$router.push({
      name: name,
      query: query
    });
  },
  gotoPageParam(name, param) {
    this.$router.push({
      name: name,
      params: param
    });
  },
  /**
   * 初始化极验
   * */
  initGtCaptcha(opt) {
    var _this = this;
    console.log(_this)
    axios
      .get("core-api/token/startCaptcha?t=" + (new Date()).getTime())
      .then(function (res) {
        console.log(res);
        let resData = res.data;
        if(resData.retCode == "N00000"){
          let bodyResult = resData.body;
          window.initGeetest({
            // 以下 4 个配置参数为必须，不能缺少
            gt: bodyResult.gt,
            challenge: bodyResult.challenge,
            offline: !bodyResult.success, // 表示用户后台检测极验服务器是否宕机
            new_captcha: bodyResult.new_captcha, // 用于宕机时表示是新验证码的宕机

            product: "popup", // 产品形式，包括：float，popup
            width: opt.width?opt.width:"100%"
          }, function (captchaObj) {
            captchaObj.appendTo('#captcha');
            captchaObj.onReady(function () {
              document.getElementById('wait').style.display = 'none';
            });
            captchaObj.onSuccess(function () {
              _this.gtCapValid = captchaObj.getValidate();
              _this.smsShow = true;
            })
            captchaObj.onError(function () {
              // 出错啦，可以提醒用户稍后进行重试
              Message.warning({
                message: '出错啦，请稍后进行重试',
                type: 'warning'
              });
            });
          });
        }else{
          // 出错啦，可以提醒用户稍后进行重试
          Message.warning({
            message: resData.retMsg,
            type: 'warning'
          });
          // _this.beautyAlertMsg = resData.retMsg;
          // _this.$refs['beautyAlert'].showDialogDiv();

        }
      })
      .catch(function (err) {
        Message.warning({
          message: "服务器出现问题，请稍后再试～",
          type: 'warning'
        });
        // _this.beautyAlertMsg = "服务器出现问题，请稍后再试～";
        // _this.$refs['beautyAlert'].showDialogDiv();
      })

  },
  /**
   * 字符串非空判断
   * @param obj
   * @returns {boolean}
   */
  isEmpty(obj){
    if (obj === null) return true;
    if (typeof obj === 'undefined') {
      return true;
    }
    if (typeof obj === 'string') {
      if (obj === "") {
        return true;
      }
      var reg = new RegExp("^([ ]+)|([　]+)$");
      return reg.test(obj);
    }
    return false;
  },

  formatPhone(phone) {
    return phone.replace(/(\d{3})\d{4}(\d{4})/, '$1****$2');
  },

  /**
   * 手机号码验证
   */
  isMobile(number) {
    if (/^1(3|4|5|7|8)\d{9}$/.test(number)) {
      return true;
    }
    return false;
  },
  /**
   * 验证密码复杂度
   */
  valiPwdComp(pwd) {
    if (/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,18}$/.test(pwd)) {
      return true;
    }
    return false;
  },
//格式化时间
  filterTime(time) {
    return time = time >= 10 ? time + '' : '0' + time
  },
  formatTime(time) {
    var days = parseInt(time / (1000 * 60 * 60 * 24), 10);
    var hours = parseInt((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60), 10);
    var minutes = parseInt((time % (1000 * 60 * 60)) / (1000 * 60), 10);
    return days + "," + filterTime(hours) + "," + filterTime(minutes);
  },
  formatSecTime(time) {
    var days = parseInt(time / (1000 * 60 * 60 * 24), 10);
    var hours = parseInt((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60), 10);
    var minutes = parseInt((time % (1000 * 60 * 60)) / (1000 * 60), 10);
    var seconds = parseInt(((time % (1000 * 60))) / 1000, 10);
    // if(days == 0){
    // return hours + "," + filterTime(minutes) + "," + filterTime(seconds);
    // }else{
    return days + "," + filterTime(hours) + "," + filterTime(minutes);
    // }
  },
//数字千位符格式化
  toThousands(s, n) {
    if ((s + "").indexOf(".") == -1) {

      s = parseFloat((s + "").replace(/[^\d\.-]/g, "")).toFixed(0) + "";
      var l = s.split("").reverse(),
        t = "";
      for (i = 0; i < l.length; i++) {
        t += l[i] + ((i + 1) % 3 == 0 && (i + 1) != l.length ? "," : "");
      }
      return t.split("").reverse().join("");
    } else {
      n = n > 0 && n <= 20 ? n : 2;
      s = parseFloat((s + "").replace(/[^\d\.-]/g, "")).toFixed(n) + "";
      var l = s.split(".")[0].split("").reverse(),
        r = s.split(".")[1];
      t = "";
      for (i = 0; i < l.length; i++) {
        t += l[i] + ((i + 1) % 3 == 0 && (i + 1) != l.length ? "," : "");
      }
      return t.split("").reverse().join("") + "." + r;
    }

  },
//数字千位符格式化
  toThousands2Point(s, n) {

    n = n > 0 && n <= 20 ? n : 2;
    s = parseFloat((s + "").replace(/[^\d\.-]/g, "")).toFixed(n) + "";
    var l = s.split(".")[0].split("").reverse(),
      r = s.split(".")[1];
    let t = "";
    for (let i = 0; i < l.length; i++) {
      t += l[i] + ((i + 1) % 3 == 0 && (i + 1) != l.length ? "," : "");
    }
    return t.split("").reverse().join("") + "." + r;


  },

  rmoney(s) {
    if (s == null || s == '') {
      return 0;
    }
    return parseFloat(s.replace(/[^\d\.-]/g, ""));
  },


  /**
   * 监听打开的弹窗，关闭后刷新页面
   */
  openWin(url, text, winInfo) {
    var winObj = window.open(url, text, winInfo);
    var loop = setInterval(function () {
      if (winObj && winObj.closed) {
        clearInterval(loop);
        parent.location.reload();
      }
    }, 1);
    return winObj;
  },

  /**
   * 关闭打开的窗口
   * @param openWin
   */
  closeWin(win, msg) {
    //win.alert(msg);
    win.close();
  },
  cb: null,
  /**
   * 打开弹出框
   * @returns
   */
  beautifyAlert(message, o, callback) {
    createDiv(message);
    $(".alertMask").show();
    utils.cb = callback;
  },
  createDiv(message) {
    var str = "";
    str += '<div class="alertMask"></div>'
    if (message != null && message != "null" && message != "") {
      if (message.length <= 13) {
        str += '<div class="alertBox"><div class="alertTop margin58">';
        str += '<div class="errorIcon"></div><div class="messageCon margin29">' + message + '</div></div>';
      } else if (message.length <= 17 && message.length > 13) {
        str += '<div class="alertBox"><div class="alertTop margin47">';
        str += '<div class="errorIcon"></div><div class="messageCon margin17">';
        str += '<p>' + message.substring(0, 7) + '</p><p>';
        str += message.substring(7) + '</p></div>';
      } else {
        str += '<div class="alertBox"><div class="alertTop margin47">';
        str += '<div class="errorIcon"></div><div class="messageCon margin17">';
        str += '<p>' + message.substring(0, 8) + '</p><p>';
        str += message.substring(8) + '</p></div>';
      }
    }
    str += '<input type="button" class="btn" value="确定" onclick="closeDialogDiv()"/>';
    str += '<div class="closeIcon" onclick="closeDialogDiv()"></div></div>';
    $("body").append(str);
  },
  closeDialogDiv() {
    $(".alertBox,.alertMask").hide();

    if ("function" == typeof cb) {
      utils.cb();
    }
  },

  /**
   * 判断字符串是否是json
   * @param str
   * @returns {boolean}
   */
  isJsonString(str) {
    try {
      var obj = JSON.parse(str);
      if (typeof obj == "object" && obj) {
        return true;
      }
    } catch (e) {
    }
    return false;
  },
  formatIndex(index) { //数字转换为汉字
    var arr = ["零", "一", "二", "三", "四", "五", "六", "七", "八", "九", "十", "十一", "十二", "十三"];
    //console.log(arr[index]);
    return arr[index];
  },
  getDateDiff(date) {
    /**
     * 功能：解决ios不识别 "2018-02-12 12：23：23"中间横杠的问题
     * 解决方法：将"-"替换为"/"并返回
     */

    if (typeof(date) == "string") { // “2010-10-10”
      date = date.replace(new RegExp(/-/gm), "/");
    }
    return date;
  },
  /**
   * 函数功能：数组去重
   * 作者：zll
   * 日期：2018-05-16
   */
  arrUnique(arr) {
    var ret = []
    var hash = {}

    for (var i = 0; i < arr.length; i++) {
      var item = arr[i]
      var key = typeof(item) + item
      if (hash[key] !== 1) {
        ret.push(item)
        hash[key] = 1
      }
    }

    return ret
  },
  /**
   * 身份证号完整校验
   * ***/
  validateIdnumber(value) {
    if (value.length == 18) {
      var Errors = new Array(
        "验证通过!",
        "身份证号码位数不对!",
        "身份证号码出生日期超出范围或含有非法字符!",
        "身份证号码校验错误!",
        "身份证地区非法!"
      );
      var area = {
        11: "北京",
        12: "天津",
        13: "河北",
        14: "山西",
        15: "内蒙古",
        21: "辽宁",
        22: "吉林",
        23: "黑龙江",
        31: "上海",
        32: "江苏",
        33: "浙江",
        34: "安徽",
        35: "福建",
        36: "江西",
        37: "山东",
        41: "河南",
        42: "湖北",
        43: "湖南",
        44: "广东",
        45: "广西",
        46: "海南",
        50: "重庆",
        51: "四川",
        52: "贵州",
        53: "云南",
        54: "西藏",
        61: "陕西",
        62: "甘肃",
        63: "青海",
        64: "宁夏",
        65: "新疆",
        71: "台湾",
        81: "香港",
        82: "澳门",
        91: "国外"
      };
      //身份证号码  idcard
      var Y; //为身份证号码所有数字经过特定算法以后对11取余所得到的数值
      var JYM; //固定数值 校验码的计算中会用到
      var S; //身份证号码所有数字经过特定算法以后所得到的值
      var M; //校验位数值
      var idcard_array = value.split("");
      var ereg;
      //console.log(idcard_array);
      //地区检验
      if (area[parseInt(value.substr(0, 2))] == null) {
        // $.fn.validatebox.defaults.rules.IDNumber.message = Errors[4];
        console.log(Errors[4]);
        return false;
      }


      if (parseInt(value.substr(6, 4)) % 4 == 0 || (parseInt(value.substr(6, 4)) % 100 == 0 && parseInt(value.substr(6, 4)) % 4 == 0)) {
        ereg = /^[1-9][0-9]{5}(19|20)[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|[1-2][0-9]))[0-9]{3}[0-9Xx]$/;
        //闰年出生日期的合法性正则表达式
      } else {
        ereg = /^[1-9][0-9]{5}(19|20)[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|1[0-9]|2[0-8]))[0-9]{3}[0-9Xx]$/;
        //平年出生日期的合法性正则表达式
      }
      if (ereg.test(value)) { //测试出生日期的合法性
        //计算校验位
        S = (parseInt(idcard_array[0]) + parseInt(idcard_array[10])) * 7 +
          (parseInt(idcard_array[1]) + parseInt(idcard_array[11])) * 9 +
          (parseInt(idcard_array[2]) + parseInt(idcard_array[12])) * 10 +
          (parseInt(idcard_array[3]) + parseInt(idcard_array[13])) * 5 +
          (parseInt(idcard_array[4]) + parseInt(idcard_array[14])) * 8 +
          (parseInt(idcard_array[5]) + parseInt(idcard_array[15])) * 4 +
          (parseInt(idcard_array[6]) + parseInt(idcard_array[16])) * 2 +
          parseInt(idcard_array[7]) * 1 +
          parseInt(idcard_array[8]) * 6 +
          parseInt(idcard_array[9]) * 3;
        Y = S % 11;
        M = "F";
        JYM = "10X98765432";
        M = JYM.substr(Y, 1); //判断校验位 身份证最后一位为校验位 如果身份证号码正确 则最后一位会与M值相同
        if (M == idcard_array[17]) {
          return true;
        } else {
          console.log(Errors[3]);
          return false;
        }
      } else {
        console.log(Errors[3]);
        return false;
      }
    } else {
      console.log("身份证号码长度不对");
      return false;
    }
  },
  /**
   * 产生随机整数，包含下限值，但不包括上限值
   * @param {Number} lower 下限
   * @param {Number} upper 上限
   * @return {Number} 返回在下限到上限之间的一个随机整数
   */
  random(lower, upper) {
    return Math.floor(Math.random() * (upper - lower)) + lower;
  }
}
export default utils


