/**
 * Created by koro1 on 2017/8/30.
 */
// import Vue from 'vue';
import axios from 'axios';
import global_ from '../components/Global.vue';
// import store from '../store/index';//vuex


export function fetch(options){

    return new Promise((resolve, reject) => {
      const instance = axios.create({
        baseURL: global_.axiosUrl,//`baseURL` 将自动加在 `url` 前面，避免路由名字加在前面，导致请求失败
        headers: {
          'Content-Type': 'application/json',
          'token_in_header': global_.token,//token从全局变量那里传过来
        },
        timeout:30 * 1000 // 30秒超时
      });
      instance(options)
        .then(response => {
          if(response.status!==200){
            console.log('网络请求异常')
          }else{
             const res = response.data;
              resolve(res);
          }
        })
        .catch(error => {
          // let data;
          // if(global_.token){
          //   data={
          //     num:3,
          //     msg:error
          //   };
          //   store.dispatch('ajaxErr' , data);
          // }else{
          //   data={
          //     num:2
          //   };
          //   store.dispatch('ajaxErr' , data);
          // }
          console.log(error,'错误信息')
          reject(error);
        });
    });
}
