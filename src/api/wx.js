import api from '@/api/http'

const wx = require('weixin-js-sdk')
let shareSDK = {
  wxconfig: {
    appId: null,
    timestamp: null,
    nonceStr: null,
    signature: null,
    jsApiList: ['onMenuShareAppMessage', 'onMenuShareTimeline']
  },

  share: function (title, urllink, imageurl, desc, config, param) {
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
        link: location.href.split('#')[0] + '#' + location.href.split('#')[1],
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
        link: location.href.split('#')[0] + '#' + location.href.split('#')[1],
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




