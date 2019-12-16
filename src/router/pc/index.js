import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

let router = new Router({
  routes: [
    // 主页路由
    {
      path: '/',
      name: 'home',
      component: resolve => require(['@/components/pc/Home'], resolve),
      children: [
        {
          path: '',
          component: resolve => require(['@/components/pc/HomePage/Business/deal'], resolve),
        },
        {
          path: 'download',
          component: resolve => require(['@/components/pc/HomePage/Business/download'], resolve),
        },
        {
          path: 'case',
          component: resolve => require(['@/components/pc/HomePage/Business/case'], resolve),
        },
        {
          path: 'policy',
          component: resolve => require(['@/components/pc/HomePage/Business/policy'], resolve),
        },
      ]
    },
    // 新闻公告路由
    {
      path: '/PressRelease',
      name: 'PressRelease',
      component: resolve => require(['@/components/pc/PressRelease'], resolve),
      children: [
        {
          path: '/PressRelease',
          component: resolve => require(['@/components/pc/PressReleasePage/PressNotic'], resolve),
        },
        {
          path: '/company',
          name: 'company',
          component: resolve => require(['@/components/pc/PressReleasePage/PressCompany'], resolve),
        },
        {
          path: '/Trade',
          name: "Trade",
          component: resolve => require(['@/components/pc/PressReleasePage/PressTrade'], resolve),
        }
      ]
    },
    // 关于我们路由
    {
      path: '/AboutUs',
      component: resolve => require(['@/components/pc/AboutUs'], resolve),
      // redirect:'/AboutUs/introduce',
      children: [
        {
          path: '/AboutUs',
          name: 'AboutUs',
          component: resolve => require(['@/components/pc/AboutUsPage/introduce'], resolve),
        },
        {
          path: '/law',
          name: 'law',
          component: resolve => require(['@/components/pc/AboutUsPage/law'], resolve),
        },
        {
          path: '/problem',
          name: 'problem',
          component: resolve => require(['@/components/pc/AboutUsPage/problem'], resolve),
        }
      ]
    },
    //会员服务路由
    {
      path: '/MemberServices',
      component: resolve => require(['@/components/pc/MemberServices'], resolve),
      children: [
        {
          path: '/MemberServices',
          name: 'memberServices',
          component: resolve => require(['@/components/pc/MemberServicesPage/initiation'], resolve),
        },
        {
          path: '/management',
          name: 'management',
          component: resolve => require(['@/components/pc/MemberServicesPage/management'], resolve),
        }
      ]
    },
    //业务介绍路由
    {
      path: '/BusinessIntroduction',
      component: resolve => require(['@/components/pc/BusinessIntroduction'], resolve),
      children: [
        {
          path: '/BusinessIntroduction',
          name: 'BusinessIntroduction',
          component: resolve => require(['@/components/pc/BusinessPage/deal'], resolve),
        },
        {
          path: '/BusinessCase',
          name: 'BusinessCase',
          component: resolve => require(['@/components/pc/BusinessPage/case'], resolve),
        },
        {
          path: '/BusinessPolicy',
          name: 'BusinessPolicy',
          component: resolve => require(['@/components/pc/BusinessPage/policy'], resolve),
        },
        {
          path: '/BusinessDownload',
          name: 'BusinessDownload',
          component: resolve => require(['@/components/pc/BusinessPage/download'], resolve),
        },
      ]
    },

    //交易登记业务
    {
      name: 'transactionRegistration',
      path: '/tr',
      component: resolve => require(['@/components/pc/transactionRegistration'], resolve),
    },
    {
      name: 'transactionRegistration',
      path: '/tr/:type',
      component: resolve => require(['@/components/pc/transactionRegistration'], resolve),
    },
    // //资产交易模块
    // {
    //   name: 'PropertyDeal',
    //   path: '/PropertyDeal',
    //   component: resolve => require(['@/components/pc/PropertyDeal'], resolve),
    // },
    // {
    //   name: 'PropertyDealsDetails',
    //   path: '/PropertyDealsDetails/:type',
    //   component: resolve => require(['@/components/pc/PropertyDeal/PropertyDealsDetails'], resolve),
    // },
    //登录
    {
      name: "login",
      path: '/login',
      component: resolve => require(['@/components/pc/Login'], resolve),
    },
    //注册
    {
      name: "register",
      path: '/register/:step',
      component: resolve => require(['@/components/pc/Register'], resolve),
    },
    // 忘记密码
    {
      name: "modifyPassword",
      path: '/user/security/modifyPassword',
      component: resolve => require(['@/components/pc/Security/ModifyPassword'], resolve),
      meta: { title: '重置密码' }
    },
    //密码修改成功
    {
      name: "modifyPasswordSuccess",
      path: '/user/security/modifyPassword/success',
      component: resolve => require(['@/components/pc/Security/ModifySuccess'], resolve),
      meta: { title: '密码修改成功' }
    },
    // 牌照资质
    {
      name: "licence",
      path: '/licence',
      component: resolve => require(['@/components/pc/page/licence'], resolve),
    },
    // 风控完善
    {
      name: "perfect",
      path: '/perfect',
      component: resolve => require(['@/components/pc/page/perfect'], resolve),
    },
    // 会员认证
    {
      name: "approve",
      path: '/approve',
      component: resolve => require(['@/components/pc/page/approve'], resolve),
    },
    // 交易订单查询
    {
      name: "order",
      path: '/order',
      component: resolve => require(['@/components/pc/page/order'], resolve),
    },
    { path: '*', redirect: '/login' }
  ]
})
/**
 * 判断是否为移动设备，是，则跳转到移动端的路径
 */
router.beforeEach((to, from, next) => {
  // if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
  //   window.location.href = '/m_index.html#/'
  //   return
  // }
  window.scrollTo(0,0)
  next()
})
export default router
