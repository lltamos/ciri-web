<!-- 登录 组件 -->
<template>
  <div class="login">
    <header-bar text="登录" @back="back"></header-bar>
    <!-- 横线分隔条 -->
    <cross-line></cross-line>
    <!-- 登录 -->
    <div class="login-wrapper">
      <div class="iconWrap" v-show="showPhone">
        <div class="mint-cell">
          <div class="mint-cell-wrapper">
            <input placeholder="请输入手机号" type="tel" class="mint-field-core" v-model="phone" @blur="verifyPhone"
                   @focus="Focus">
          </div>
        </div>
        <i class="iconImg icon-phone"></i>
        <div class="switch" @click="Switch">切换邮箱登录</div>
      </div>
      <div class="iconWrap" v-show="showEmail">
        <div class="mint-cell">
          <div class="mint-cell-wrapper">
            <input placeholder="请输入邮箱" type="email" class="mint-field-core" v-model="email" @blur="verifyEmail"
                   @focus="Focus">
          </div>
        </div>
        <i class="iconImg icon-email"></i>
        <div class="switch" @click="Switch">切换手机号登录</div>
      </div>
      <div class="iconWrap">
        <div class="mint-cell">
          <div class="mint-cell-wrapper">
            <input placeholder="请输入密码" :type="pswTypeChange" v-model="password" class="mint-field-core" @blur="psw"
                   @focus="Focus">
          </div>
        </div>
        <i class="iconImg icon-password"></i>
        <div :class="pswIcon" @click="pswShow"></div>
      </div>

      <div class="regiPwd">
        <router-link to="/register" class="fl fs12">免费注册</router-link>
        <router-link to="/resetpwd" class="fr fs12">忘记密码？</router-link>
      </div>
      <div class="error">
        <div v-text="error" v-show="errorShow" class="errorText">手机号错误，请重新输入</div>
      </div>

      <mt-button :class="loginClass" size="large" @click="login">登录</mt-button>
      <router-link to="/authcode" class="fs13">验证码登录</router-link>
    </div>
    <bottomImg :class="position"></bottomImg>
  </div>
</template>

<script>
  import HeaderBar from '@/components/base/header-bar/header-bar'
  import BottomImg from '@/components/base/bottomImg/bottomImg'
  import CrossLine from '@/components/base/cross-line/cross-line'
  import tool from "../../api/tool";

  export default {
    components: {
      HeaderBar,
      BottomImg,
      CrossLine
    },
    data() {
      return {
        loginClass: 'loginBtn',
        showPhone: true,
        showEmail: false,
        pswTypeChange: 'password',
        pswIcon: 'switch pswIcon pswIconClose',
        error: '账号错误，请重新输入',
        errorShow: false,
        phone: this.phone,
        email: this.email,
        password: this.password,
        loginData: [],
        position: '',
        aisle: 0
      }
    },
    props: {},
    watch: {},
    methods: {
      back() {
        this.$router.push({
          path: this.$router.go(-1)
        })
      },
      //input获取焦点时执行
      Focus() {
        this.loginClass = 'loginBtnActive'
        this.position = 'staticImg';
      },
      //切换邮箱手机号登录
      Switch() {
        this.phone = this.email = this.password = '';
        this.errorShow = false;
        this.showPhone = !this.showPhone;
        this.showEmail = !this.showEmail;
      },
      pswShow() {
        if (this.pswTypeChange == 'password') {
          this.pswTypeChange = 'text';
          this.pswIcon = 'switch pswIcon pswIconShow'
        } else {
          this.pswTypeChange = 'password';
          this.pswIcon = 'switch pswIcon pswIconClose'
        }

      },
      //验证手机号码部分
      verifyPhone() {
        this.position = 'fixImg';
        let reg = 11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/;
        if (this.phone == '') {
          this.errorShow = true;
          this.error = '账号错误，请重新输入';
        } else if (!reg.test(this.phone)) {
          this.errorShow = true;
          this.error = '账号错误，请重新输入';
        } else {
          this.errorShow = false;
        }
      },
      verifyEmail() {
        this.position = 'fixImg';
        let flag = /^[A-Za-z0-9]+([-_.][A-Za-z0-9]+)*@([A-Za-z0-9]+[-.])+[A-Za-z0-9]{2,5}$/g;
        if (this.email == '') {
          this.errorShow = true;
          this.error = '账号错误，请重新输入';
        } else if (!flag.test(this.email)) {
          this.errorShow = true;
          this.error = '账号错误，请重新输入';
        } else {
          this.errorShow = false;
        }
      },
      //验证密码不为空
      psw (){
        this.position = 'fixImg';
        if (this.password == '') {
          this.errorShow = true;
          this.error = '密码错误，请重新输入';
        }else{
          this.errorShow = false;
        }
      },
      fixImg() {
        this.position = 'fixImg';
      },
      //初始化数据
      login() {
        let tag = false;
        if(this.showPhone){
          tag =tool.checkMobile(this.phone);
        }else {
          tag = tool.checkEmail(this.email);
        }
        if (tag && this.password !== '') {
          let params = new URLSearchParams();
          params.append('key', this.showEmail ? this.email : this.phone);
          params.append('pwd', this.password);
          params.append('aisle', this.aisle + "");

          this.axios.post('http://'+tool.domind()+'/gateway/app/sys/login', params
          ).then(res => {
            console.log(res)
            // router.push("/index")
          }).catch(err => {
            console.log(err)
          })
        }else {
          this.error = '账号或密码错误，请重新输入'
          this.errorShow = true;
        }
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

<style lang="scss" scoped>
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

  .icon-phone {
  @include bg-image('./img/phone');
  }

  .icon-password {
  @include bg-image('./img/password');
  }

  .icon-email {
  @include bg-image('./img/email');
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

  .pswIcon {
    width: 16px;
    height: 16px;
    background-size: 16px auto;
    display: block;
  }

  .pswIconShow {
  @include bg-image('./img/psw-show');
  }

  .pswIconClose {
  @include bg-image('./img/psw-close');
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
