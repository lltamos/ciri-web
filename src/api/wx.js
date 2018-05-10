const wx = require('weixin-js-sdk')

// 配置微信 config信息
export default {
  debug: true,
  appId: 'wx28d44097b0f145cb',
  timestamp: '',
  noncestr: '',
  signature: '',
  jsApiList: ['onMenuShareAppMessage', 'onMenuShareTimeline']
}
// // 从后台获取appid和对应的signature
// get('getWechatSu', data).then((res) => {
//   wx.config({
//     debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
//     appId: res.data.appid, // 必填，公众号的唯一标识
//     timestamp: data.timestamp, // 必填，生成签名的时间戳
//     nonceStr: data.noncestr, // 必填，生成签名的随机串
//     signature: res.data.signature, // 必填，签名，见附录1
//     jsApiList: data.jsApiList // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
//   })
// })

