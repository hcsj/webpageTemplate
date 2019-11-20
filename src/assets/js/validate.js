// import utils from "./utils";

const validates = {

    //姓名校验
    isUserName(name) {
      if (name && name.length > 1) {
        const reg = name.match(/^[\u4e00-\u9fa5]+$/)
        return Boolean(reg)
      }
      return false
    },
    // 手机号验证
    isvalidPhone(str) {
      const reg = /^1\d{10}$/
      return reg.test(str)
    },
    // 身份证号码验证
    isvalidateIdnumber(str) {
      const reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
      return reg.test(str)
    },
    //只能输入数字和字母
    isvalidateLetterAndNum(str) {
      const reg = /^[0-9a-zA-Z]+$/;
      console.log(reg.test(str));
      return reg.test(str)
    },
    // 字母和数字6～18位，密码校验规则
    isPwd(str) {
      if (str == null || str.length > 18 || str.length < 6) {
        return false;
      }
      const reg = /^(?![^a-zA-Z]+$)(?!\D+$)/;
      console.log(reg.test(str));
      return reg.test(str)
    },
    isvalidEmail(str) {
      const reg = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/;
      return reg.test(str)
    },
    // 校验特殊字符
    isSpecialChars(str) {
      var regEn = /[`~!@#$%^&*()_+<>?:"{},.\/;'[\]]/im;
      var regCn = /[·！#￥（——）：；“”‘、，|《。》？、【】[\]]/im;
      console.log(regEn.test(str))
      if (regEn.test(str) || regCn.test(str)) {
        return false
      }else{
          return true
      }
    }
  }
  export default validates
  