import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

//路由懒加载
const Index = (resolve) => {
  import('@/components/index/index').then((module) => {
    resolve(module)
  })
}
const News = (resolve) => {
  import('@/components/news/news').then((module) => {
    resolve(module)
  })
}
const NewsDetail = (resolve) => {
  import('@/components/news/news-detail/news-detail').then((module) => {
    resolve(module)
  })
}
const CIRINews = (resolve) => {
  import('@/components/news/CIRI-News/CIRI-News').then((module) => {
    resolve(module)
  })
}
const goOut = (resolve) => {
  import('@/components/news/go-out/go-out').then((module) => {
    resolve(module)
  })
}
const NewsHome = (resolve) => {
  import('@/components/news/home/home').then((module) => {
    resolve(module)
  })
}
const NewsProject = (resolve) => {
  import('@/components/news/news-project/news-project').then((module) => {
    resolve(module)
  })
}
const Activities = (resolve) => {
  import('@/components/news/CIRI-News/Activities/Activities').then((module) => {
    resolve(module)
  })
}
const RecentNews = (resolve) => {
  import('@/components/news/CIRI-News/recent-news/recent-news').then((module) => {
    resolve(module)
  })
}
const Investigation = (resolve) => {
  import('@/components/news/CIRI-News/investigation/investigation').then((module) => {
    resolve(module)
  })
}
const Cooperation = (resolve) => {
  import('@/components/news/CIRI-News/cooperation/cooperation').then((module) => {
    resolve(module)
  })
}
const Project = (resolve) => {
  import('@/components/project/project').then((module) => {
    resolve(module)
  })
}
const Msg = (resolve) => {
  import('@/components/msg/msg').then((module) => {
    resolve(module)
  })
}
const Mine = (resolve) => {
  import('@/components/mine/mine').then((module) => {
    resolve(module)
  })
}
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
const MemberCenter = (resolve) => {
  import('@/components/mine/member-center/member-center').then((module) => {
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
      component: Security
    },
    //安全设置   关于我们
    {
      path: '/about-us',
      component: AboutUs
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
      component: IdentityVerification
    },
    //会员中心
    {
      path: '/mine/member-center',
      component: MemberCenter
    },
    //项目收藏
    {
      path: '/mine/my-favorite',
      component: MyFavorite
    },
    //个人资料
    {
      path: '/mine/my-profile',
      component: MyProfile
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
