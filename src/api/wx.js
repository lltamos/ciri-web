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

  share: function (title, url, imageurl, desc, config) {
    wx.config({
      debug: true,
      appId: config.appId,
      timestamp: config.timestamp,
      nonceStr: config.noncestr,
      signature: config.signature,
      jsApiList: config.jsApiList
    });

    wx.ready(() => {
      wx.onMenuShareTimeline({
        title: title,
        link: url,
        imgUrl: imageurl,
        success: () => {
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
        },
        cancel: () => {
        }
      });
    });
  }

}
export default shareSDK;




