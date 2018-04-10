import { fetch } from "./fetch";
import api from './url';

export function post_token(key,pwd,aisle) {
  return fetch({
    /*登陆*/
    url: api.login,
    method: 'post',
    data:{
      key: key,
      pwd:pwd,
      aisle:aisle
    }
  })
}

//通用验证码（除注册）git
export function ty_code(name){
  return fetch({
    url:api.ty_code,
    method:"post",
    data:{
      name:name
    }
  })
}


//注册验证码
export function zc_code(name){
  return fetch({
    url:api.zc_code,
    method:"post",
    data:{
      name:name
    }
  })
}

/* 注册 */
export function zc(inviteCode,password,name,roleId,verifyCode) {
  return fetch({
    /*token接口*/
    url: api.zc,
    method: 'post',
    data:{
      name:name,
      password:password,
      verifyCode:verifyCode,
      inviteCode:inviteCode,
      roleId:roleId
    }
  })
}

/*重置密码*/
export function restpwd() {
  return fetch({
    /*发布者登录*/
    url: api.restpwd+"/login",
    method: 'post',
  })
}

/*获取ciri动态所有的菜单信息*/
export function infolist() {
  return fetch({
    /*发布者注册*/
    url: api.info_list,
    method: 'get',
  })
}

//分页获取文章信息
export function pagelist(page,rouCount,tag,cid){
  return fetch({
    url:api.page_list,
    method:"get",
    data:{
      page:page,
      rouCount:rouCount,
      tag:tag,
      cid:cid
    }
  })
}


// 获取文章详细信息接口
export function detaillist(articleId){
  return fetch({
    url:api.detail_list+articleId,
    method:"get",
    params:{
      articleId:articleId
    }
  })
}

//获取某等级文章
export function djessay(cid,level,rouCount){
  return fetch({
    url:api.dj_essay,
    method:"get",
    params:{
      level:level,
      cid:cid,
      rouCount:rouCount
    }
  })
}


