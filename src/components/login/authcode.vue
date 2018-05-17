<!-- 登录 组件 -->
<template>
  <div class="login">
    <header-bar text="手机号登录" @back="back"></header-bar>
    <!-- 横线分隔条 -->
    <cross-line></cross-line>
    <!-- 登录 -->
    <div class="login-wrapper">
      <div class="iconWrap">
        <div class="mint-cell">
          <div class="mint-cell-wrapper">
            <input placeholder="请输入手机号" type="tel" class="mint-field-core" v-model="phone" @blur="verifyPhone"
                   @focus="Focus">
          </div>
        </div>
        <i class="iconImg icon-phone"></i>
      </div>
      <div class="iconWrap">
        <div class="mint-cell">
          <div class="mint-cell-wrapper">
            <input v-model="authcode" placeholder="请输入验证码" type="text" class="mint-field-core" @blur="fixImg"
                   @focus="Focus">
          </div>
        </div>
        <i class="iconImg icon-authcode"></i>
        <div class="switch getCodeBg" v-show="showCode" @click="getCode">发送验证码</div>
        <div class="switch getCodeBg" v-show="!showCode">{{count}} s</div>
      </div>
      <div class="error">
        <div v-show="errorShow" class="errorText">{{error}}</div>
      </div>
      <mt-button :class="loginClass" size="large" @click="login" :disabled="isDisable">登录</mt-button>
    </div>
  </div>
</template>

<script>
  import HeaderBar from '@/components/base/header-bar/header-bar'
  import CrossLine from '@/components/base/cross-line/cross-line'
  import tool from "../../api/tool";

  export default {
    components: {
      HeaderBar,
      CrossLine
    },
    data() {
      return {
        loginClass: 'loginBtn',
        showCode: true,
        count: '',
        timer: null,
        position: '',
        phone: this.phone,
        errorShow: false,
        aisle: 1,
        authcode: null,
        error:'账号或验证码错误，请重新输入',
        isDisable: false
      }
    },
    props: {},
    watch: {},
    methods: {
      //初始化数据
      login() {
        this.isDisable = true
        let tag = tool.checkMobile(this.phone);

        if (tag) {
          if (tool.isBank(this.authcode)) {

            this.error = '验证码不能为空，请重新输入'
            this.errorShow = true;
            return
          }
          let params = new URLSearchParams();
          params.append('key', this.phone);
          params.append('pwd', this.authcode);
          params.append('aisle', this.aisle + '');

          this.axios.post(tool.domind() + '/gateway/app/sys/login', params).then(res => {
            if (res.data.code === 200) {
              sessionStorage.setItem("token", res.data.data.token);
              sessionStorage.setItem("username", res.data.data.username);
              sessionStorage.setItem("islogin", "true");
              this.axios.defaults.headers.token = res.data.data.token;
              this.$router.replace({path: '/index'})
            } else {
              this.error = '账号或密码错误，请重新输入'
              this.errorShow = true;
              this.isDisable = false;
            }
          }).catch(err => {
            console.log(err)
          })
        } else {
          this.error = '请输入正确帐号';
        }
      },
      back() {
        window.history.back()
      },
      //input获取焦点时执行
      Focus() {
        this.loginClass = 'loginBtnActive';
        this.isDisable = false;
      },
      getCode() {
        let tag = tool.checkMobile(this.phone);
        if (!tag) {
          return
        }
        let param = new URLSearchParams();
        param.append('name', this.phone);
        if (tag) {
          this.axios.post(tool.domind() + '/gateway/app/sms/verify/other', param).then(res => {
          }).catch(err => {
            console.log(err)
          })
        }
        const TIME_COUNT = 60;
        if (!this.timer) {
          this.count = TIME_COUNT;
          this.showCode = false;
          this.timer = setInterval(() => {
            if (this.count > 0 && this.count <= TIME_COUNT) {
              this.count--;
            } else {
              this.showCode = true;
              clearInterval(this.timer);
              this.timer = null;
            }
          }, 1000)
        }
      },
      //验证手机号码部分
      verifyPhone() {
        this.position = 'fixImg';
        let reg = 11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/;
        if (this.phone == '') {
          this.errorShow = true;
        } else if (!reg.test(this.phone)) {
          this.errorShow = true;
        } else {
          this.errorShow = false;
        }
      },
      fixImg() {
        this.position = 'fixImg';
      }
    },
    filters: {},
    computed: {},
    created() {
    },
    mounted() {
    }
  }
</script>

<style type="text/scss" lang="scss" scoped>
  /*@import '~@/assets/scss/const.scss';*/
  @import '~@/assets/scss/mixin.scss';

  .login {
    color: #333;
    margin-top: 40px;
    background-color: #fff;
    overflow: visible;
    .login-wrapper {
      margin-top: 20px;
      overflow: hidden;
      padding: 0 10px;
      .iconWrap {
        position: relative;
        .mint-cell {
          border: 1px solid #dedede;
          border-radius: 3px;
          margin-bottom: 15px;
          padding-left: 40px;
          font-size: 12px;
          height: 34px;
          min-height: 34px;
          .mint-cell-wrapper {
            padding: 0;
          }
        }
        i {
          display: block;
          width: 20px;
          height: 20px;
          @include bg-image('./img/phone');
          background-size: 20px auto;
        }
        .icon-authcode {
          @include bg-image('./img/authcode');
        }
        .iconImg {
          position: absolute;
          left: 10px;
          top: 7px;
        }
        .switch {
          position: absolute;
          right: 10px;
          top: 10px;
          color: #333;
          font-size: 10px;
        }
        .getCodeBg {
          width: 62px;
          padding: 5px 0;
          text-align: center;
          background: #f5f5f5;
          border-radius: 3px;
          top: 7px;
        }
      }
      .regiPwd {
        overflow: hidden;
        .fs12 {
          color: #333;
          font-size: 12px;
        }
      }
      .error {
        text-align: center;
        color: #f81717;
        font-size: 10px;
        padding: 35px 0 15px;
        height: 10px;
      }
      .mint-button {
        margin: 0px auto 15px;
        font-size: 15px;
        height: 34px;
      }
      .loginBtn {
        background: #eeeeee;
        color: #333333;
      }
      .loginBtnActive {
        background: #3f83e6;
        color: #ffffff;
      }
      .fs13 {
        font-size: 13px;
        color: #333;
      }
    }
    .staticImg {
      position: static;
    }
  }
</style>

