export default {

  domind: function () {
    return "127.0.0.1:8080"
  },
  checkEmail: function (email) {
    var re = /^[a-zA-Z0-9_-]+@([a-zA-Z0-9]+\.)+(com|cn|net|org)$/;
    if (re.test(email)) {
      return true;
    } else {
      return false;
    }
  },
  checkMobile: function (mobile) {
    var re = /^1\d{10}$/
    if (re.test(mobile)) {
      return true;
    } else {
      return false;
    }
  },
  checkPhone: function (phone) {
    var re = /^0\d{2,3}-?\d{7,8}$/;
    if (re.test(phone)) {
      return true;
    } else {
      return false;
    }
  },

  buildForm: function (arr) {

    if (arr instanceof Array){
      console.log("from Is not an array");
      return null;
    }

    var param = new URLSearchParams();
    arr.forEach(function (v) {
      param.append(v.key, v.v)
    });
    return param;
  }
}
