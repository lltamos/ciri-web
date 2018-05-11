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
    wx.config({
      debug: false,
      appId: config.appId,
      timestamp: config.timestamp,
      nonceStr: config.nonceStr,
      signature: config.signature,
      jsApiList: config.jsApiList
    });

    wx.ready(() => {
      wx.onMenuShareTimeline({
        title: title,
        link: url,
        imgUrl: imageurl,
        success: () => {
          api.post('/pb/p/updateRecord', {projId: param.projid, tag: 1});
        },
        cancel: () => {
        }
      });
      wx.onMenuShareAppMessage({
        title: title,
        desc: desc,
        link: url,
        imgUrl: imageurl,
        type: '',
        dataUrl: '',
        success: () => {
          api.post('/pb/p/updateRecord', {projId: param.projid, tag: 1});
        },
        cancel: () => {
        }
      });
    });
  }

}
export default shareSDK;




