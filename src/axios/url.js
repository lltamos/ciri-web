

//接口url
export default {
  /*登陆接口*/
  login:'/gataway/app/sys/login',


  /*通用验证码（除注册）*/
  ty_code:'/gateway/app/sms/verify/other',

  /*注册验证码*/
  zc_code:'/gateway/app/sms/verify/regist',

  //注册
  zc:"/gateway/app/sys/regist",

  //重置密码
  restpwd:"/gateway/app/sys/restpswd",

  //获取ciri动态所有的菜单信息
  info_list:'/gateway/app/news/article/getCiriTitle',

  //分页获取文章信息
  page_list:'/gateway/app/news/article/getArticles',

  // 获取文章详细信息接口
  detail_list:'/gateway/app/news/article',

  /*获取某等级文章*/
  dj_essay:'/gateway/app/news/article/getLevelActive',

  

}