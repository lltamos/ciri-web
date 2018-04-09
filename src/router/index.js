import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index/index'
import News from '@/components/news/news'
import NewsDetail from '@/components/news/news-detail/news-detail'
import CIRINews from '@/components/news/CIRI-News/CIRI-News'
import goOut from '@/components/news/go-out/go-out'
import NewsHome from '@/components/news/home/home'
import NewsProject from '@/components/news/news-project/news-project'
import Activities from '@/components/news/CIRI-News/Activities/Activities'
import RecentNews from '@/components/news/CIRI-News/recent-news/recent-news'
import Investigation from '@/components/news/CIRI-News/investigation/investigation'
import Cooperation from '@/components/news/CIRI-News/cooperation/cooperation'
import Project from'@/components/project/project'
import Msg from'@/components/msg/msg'
import Mine from '@/components/mine/mine'
Vue.use(Router)

const Security = (resolve) => {
  import('@/components/mine/security/security').then((module) => {
    resolve(module)
  })
}
const AboutUs = (resolve) => {
  import('@/components/mine/security/about-us/about-us').then((module) => {
    resolve(module)
  })
}
const BrazilBranch = (resolve) => {
  import('@/components/mine/security/about-us/brazil-branch').then((module) => {
    resolve(module)
  })
}
const BusinessArea = (resolve) => {
  import('@/components/mine/security/about-us/business-area').then((module) => {
    resolve(module)
  })
}
const CompanyProfile = (resolve) => {
  import('@/components/mine/security/about-us/company-profile').then((module) => {
    resolve(module)
  })
}
const ContactUs = (resolve) => {
  import('@/components/mine/security/about-us/contact-us').then((module) => {
    resolve(module)
  })
}
const IranianBranch = (resolve) => {
  import('@/components/mine/security/about-us/iranian-branch').then((module) => {
    resolve(module)
  })
}
const SecurityEmail = (resolve) => {
  import('@/components/mine/security/security-email/security-email').then((module) => {
    resolve(module)
  })
}
const SecurityFeedback = (resolve) => {
  import('@/components/mine/security/security-feedback/security-feedback').then((module) => {
    resolve(module)
  })
}
const SecurityLoginpwd = (resolve) => {
  import('@/components/mine/security/security-loginpwd/security-loginpwd').then((module) => {
    resolve(module)
  })
}
const SecurityPhone = (resolve) => {
  import('@/components/mine/security/security-phone/security-phone').then((module) => {
    resolve(module)
  })
}
const IdentityVerification = (resolve) => {
  import('@/components/mine/IdentityVerification/IdentityVerification').then((module) => {
    resolve(module)
  })
}
const IdentitySuccess = (resolve) => {
  import('@/components/mine/IdentityVerification/identity').then((module) => {
    resolve(module)
  })
}
const MemberCenter = (resolve) => {
  import('@/components/mine/member-center/member-center').then((module) => {
    resolve(module)
  })
}
const MemberDredge = (resolve) => {
  import('@/components/mine/member-center/member-dredge').then((module) => {
    resolve(module)
  })
}
const MyFavorite = (resolve) => {
  import('@/components/mine/my-favorite/my-favorite').then((module) => {
    resolve(module)
  })
}
const MyProfile = (resolve) => {
  import('@/components/mine/my-profile/my-profile').then((module) => {
    resolve(module)
  })
}
const ChangeKey = (resolve) => {
  import('@/components/mine/my-profile/change-key').then((module) => {
    resolve(module)
  })
}
const ChangeCountry = (resolve) => {
  import('@/components/mine/my-profile/change-country').then((module) => {
    resolve(module)
  })
}
const FocusCountry = (resolve) => {
  import('@/components/mine/my-profile/focus-country').then((module) => {
    resolve(module)
  })
}
const login = (resolve) => {
  import('@/components/login/login').then((module) => {
    resolve(module)
  })
}
const Register = (resolve) => {
  import('@/components/login/register').then((module) => {
    resolve(module)
  })
}
const Resetpwd = (resolve) => {
  import('@/components/login/resetpwd').then((module) => {
    resolve(module)
  })
}
const Authcode = (resolve) => {
  import('@/components/login/authcode').then((module) => {
    resolve(module)
  })
}
const Deal = (resolve) => {
  import('@/components/login/deal').then((module) => {
    resolve(module)
  })
}

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
      redirect: '/news/home',
      component: News,
      children : [
        // 资讯  走出去情报
        {
          path: 'go-out',
          component: goOut
        },
        // 资讯  首页推荐
        {
          path: 'home',
          component: NewsHome
        },
        // 资讯  项目情报
        {
          path: 'news-project',
          component:NewsProject
        },
        {
          path: 'CIRI-News',
          redirect: '/news/CIRI-News/Activities',
          component: CIRINews,
          children : [
            // 资讯  最新活动
            {
              path: 'Activities',
              component: Activities
            },
            // 资讯  最新动态
            {
              path: 'recent-news',
              component: RecentNews
            },
            // 资讯  海外考察
            {
              path: 'investigation',
              component: Investigation
            },
            {
              path: 'cooperation',
              component: Cooperation
            }
          ]
        }
      ]
    },
    // 资讯详情页
    {
      path: '/news/news-detail',
      component: NewsDetail
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
    //安全设置
    {
      path: '/mine/security',
      meta: {
        requireAuth: true,
      },
      component: Security
    },
    //安全设置   关于我们
    {
      path: '/about-us',
      component: AboutUs
    },
    // 关于我们 巴西分公司
    {
      path: '/brazil-branch',
      component: BrazilBranch
    },
    // 关于我们 业务领域
    {
      path: '/business-area',
      component: BusinessArea
    },
    //关于我们 公司简介
    {
      path: '/company-profile',
      component: CompanyProfile
    },
    //关于我们  联系我们
    {
      path: '/contact-us',
      component: ContactUs
    },
    //关于我们 伊朗分公司
    {
      path: '/iranian-branch',
      component: IranianBranch
    },
    //安全设置   邮箱绑定
    {
      path: '/security-email',
      component: SecurityEmail
    },
    //安全设置   意见反馈
    {
      path: '/security-feedback',
      component: SecurityFeedback
    },
    //安全设置   登录密码
    {
      path: '/security-loginpwd',
      component: SecurityLoginpwd
    },
    //安全设置   手机绑定
    {
      path: '/security-phone',
      component: SecurityPhone
    },

    //实名认证
    {
      path: '/mine/IdentityVerification',
      meta: {
        requireAuth: true,
      },
      component: IdentityVerification
    },
    {
      path: '/mine/identity',
      component: IdentitySuccess
    },
    //会员中心
    {
      path: '/mine/member-center',
      meta: {
        requireAuth: true,
      },
      component: MemberCenter
    },
    //会员中心
    {
      path: '/mine/member-dredge',
      component: MemberDredge
    },
    //项目收藏
    {
      path: '/mine/my-favorite',
      meta: {
        requireAuth: true,
      },
      component: MyFavorite
    },
    //个人资料
    {
      path: '/mine/my-profile',
      component: MyProfile
    },
    //修改个人资料  动态路由
    {
      path: '/mine/change-key/:id/:name',
      component: ChangeKey
    },
    //修改国家
    {
      path: '/mine/change-country/:id',
      component: ChangeCountry
    },
    //关注国家和行业
    {
      path: '/mine/focus-country/:id/:value',
      component: FocusCountry
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
