import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

let router = new Router({
  routes: [
    {
      name: 'home',
      path: '/',
      component: resolve => require(['@/components/mobile/Home'], resolve),
      meta: { title: '首页' }
    },
    {
      name: 'ViewArticle',
      path: '/viewArticle',
      component: resolve => require(['@/components/mobile/common/ViewArticle'], resolve),
      meta: { title: '文章阅读页' }
    },
    {
      name: 'AboutUs',
      path: '/AboutUs',
      component: resolve => require(['@/components/mobile/page/AboutUs'], resolve),
      meta: { title: '关于我们' }
    },
    {
      name: 'BusinessIntroduction',
      path: '/BusinessIntroduction',
      component: resolve => require(['@/components/mobile/page/BusinessIntroduction'], resolve),
      meta: { title: '业务介绍' }
    },
    {
      name:'News',
      path: '/News',
      component: resolve => require(['@/components/mobile/page/News'], resolve),
      meta: { title: '新闻资讯', keepAlive: true }
    },
    {
      name: 'login',
      path: '/login',
      component: resolve => require(['@/components/mobile/page/Login'], resolve),
      meta: { title: '登录' }
    },
    {
      name: 'register',
      path: '/register',
      component: resolve => require(['@/components/mobile/page/Register'], resolve),
      meta: { title: '注册' }
    },
  ]
})
/**
 * 判断是否为移动设备，是，则跳转到移动端的路径
 */
router.beforeEach((to, from, next) => {
  if (!(/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent))) {
    window.location.href = '/p_index.html#/'
    return
  }
  window.scrollTo(0, 0)
  next()
})
export default router
