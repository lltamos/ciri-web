import api from '@/api/http'

const wx = require('weixin-js-sdk')
let shareSDK = {

  wxconfig: {
    debug: true,
    appId: null,
    timestamp: null,
    nonceStr: null,
    signature: null,
    jsApiList: ['onMenuShareAppMessage', 'onMenuShareTimeline']
  },

  share: function (title, url, imageurl, desc, config, param) {
    alert('title:'+title+'&&'+'url:'+url+'&&')
    wx.config({
      debug: true,
      appId: config.appId,
      timestamp: config.timestamp,
      nonceStr: config.nonceStr,
      signature: config.signature,
      jsApiList: config.jsApiList
    });
    wx.ready(() => {
      wx.onMenuShareTimeline({
        title: title,
        link: window.location.href.split('#')[0]+'#'+window.location.href.split('#')[1],
        imgUrl: imageurl,
        success: () => {
          api.post('/pb/p/updateRecord', {projId: param.projId, tag: 1});
        },
        cancel: () => {
        }
      });
      wx.onMenuShareAppMessage({
        title: title,
        desc: desc,
        link: window.location.href.split('#')[0]+'#'+window.location.href.split('#')[1],
        imgUrl: imageurl,
        type: '',
        dataUrl: '',
        success: () => {
          api.post('/pb/p/updateRecord', {projId: param.projId, tag: 1});
        },
        cancel: () => {
        }
      });
    });
  }

}
export default shareSDK;




