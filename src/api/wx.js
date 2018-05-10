
const wx = require('weixin-js-sdk')
// 配置微信 config信息
export default {
  debug: true,
  appId: 'wx28d44097b0f145cb',
  timestamp: '',
  nonceStr: '',
  signature: '',
  jsApiList: ['onMenuShareAppMessage', 'onMenuShareTimeline']
}

wx.config

