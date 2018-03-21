import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index/index'
import News from '@/components/news/news'
import Project from '@/components/project/project'
import Msg from '@/components/msg/msg'
import Mine from '@/components/mine/mine'
import AboutUs from '@/components/mine/about-us/about-us'
import MemberCenter from '@/components/mine/member-center/member-center'
import MyFavorite from '@/components/mine/my-favorite/my-favorite'
import MyProfile from '@/components/mine/my-profile/my-profile'
import Security from '@/components/mine/security/security'
import login from '@/components/login/login'
import Register from '@/components/login/register'
import Resetpwd from '@/components/login/resetpwd'
import Authcode from '@/components/login/authcode'
import Deal from '@/components/login/deal'
Vue.use(Router)
export default new Router({
  routes: [
    // 根路径
    {
      path: '/',
      redirect: 'index',
      component: Index
    },
    // 首页
    {
      path: '/index',
      component: Index
    },
    // 登录
    {
      path: '/login',
      component: login,
    },
    // 资讯
    {
      path: '/news',
      component: News
    },
    // 项目
    {
      path: '/project',
      component: Project
    },
    // 消息
    {
      path: '/msg',
      component: Msg
    },
    // 我的
    {
      path: '/mine',
      component: Mine
    },
    //关于我们
    {
      path: '/about-us',
      component: AboutUs
    },
    //会员中心
    {
      path: '/member-center',
      component: MemberCenter
    },
    //项目收藏
    {
      path: '/my-favorite',
      component: MyFavorite
    },
    //个人资料
    {
      path: '/my-profile',
      component: MyProfile
    },
    //安全设置
    {
      path: '/security',
      component: Security
    },
    // 注册页面
    {
      path: '/register',
      component: Register
    },
    // 找回密码页面
    {
      path: '/resetpwd',
      component: Resetpwd
    },
    // 验证码登录页面
    {
      path: '/authcode',
        component: Authcode
    },
    // 用户注册协议
    {
      path: '/deal',
      component: Deal
    }
  ]
})
