export default {
  domind: function () {
    return 'http://192.168.2.9:8080'
  },

  oos: function () {
    return 'http://ciri-test.oss-cn-beijing.aliyuncs.com/'
  },

  generatorUrl: function (url) {
    if (url === '' || url == null) {
      return 'https://pic.36krcnd.com/201804/02064202/jvdwa1onvundut5k!1200'
    } else {
      return this.oos() + url
    }
  },

  checkEmail: function (email) {
    let re = /^[a-zA-Z0-9_-]+@([a-zA-Z0-9]+\.)+(com|cn|net|org)$/
    return re.test(email)
  },
  checkMobile: function (mobile) {
    let re = /^1\d{10}$/
    return re.test(mobile)
  },
  checkPhone: function (phone) {
    let re = /^0\d{2,3}-?\d{7,8}$/
    return re.test(phone)
  },

  buildForm: function (arr) {
    if (!(arr instanceof Array)) {
      console.log('from Is not an array')
      return null
    }

    let param = new URLSearchParams()

    arr.forEach(function (v) {
      param.append(v.key, v.v)
    })
    return param
  },
  getuser: function () {
    return sessionStorage.getItem('username')
  },
  islogin: function () {
    return sessionStorage.getItem('islogin')
  },
  gettoken: function () {
    return sessionStorage.getItem('token') === null ? '' : sessionStorage.getItem('token')
  },
  substr : function (string,count) {
    return string.length>count ? string.substr(0,count)+'...' : string;
  }
}
