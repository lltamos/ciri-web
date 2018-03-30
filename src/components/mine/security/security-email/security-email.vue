<template>
  <div class="security">
    <header-bar text="邮箱绑定" @back="back"></header-bar>
    <cross-line style="margin-top: 44px;"></cross-line>
    <div class="main">
      <div class="bind-email">
        <span>当前绑定邮箱：</span><span class="email">rukey.li@bjciri.com</span>
      </div>
      <div class="iconWrap">
        <div class="mint-cell">
          <div class="mint-cell-wrapper">
            <input placeholder="请输入邮箱" type="text" class="mint-field-core" v-model="email" @blur="verifyEmail" @focus="Focus">
          </div>
        </div>
        <i class="iconImg icon-email"></i>
        <div class="switch getCodeBg" v-show="showCode" @click="getCode">发送验证码</div>
        <div class="switch getCodeBg" v-show="!showCode">{{count}} s</div>
      </div>
      <div class="iconWrap">
        <div class="mint-cell">
          <div class="mint-cell-wrapper">
            <input placeholder="请输入验证码" type="tel" class="mint-field-core" v-model="auchcode" @blur="verifyCode" @focus="Focus">
          </div>
        </div>
        <i class="iconImg icon-authcode"></i>
      </div>
      <div class="error">
        <div v-show="errorShow" v-text="error">手机号错误，请重新输入</div>
      </div>
      <mt-button :class="loginClass" size="large">确认绑定</mt-button>
    </div>
  </div>
</template>

<script>
  import HeaderBar from '@/components/base/header-bar/header-bar'
  import CrossLine from '@/components/base/cross-line/cross-line'
  import tool from "@/api/tool";
  export default {
    components: {
      HeaderBar,
      CrossLine
    },
    data () {
      return {
        loginClass : 'loginBtn',
        count: '',
        timer: null,
        error:'',
        errorShow : false,
        showCode:true
      }
    },
    methods: {
      back() {
        this.$router.push({
          path: this.$router.go(-1)
        })
      },
      //input获取焦点时执行
      Focus () {
        this.loginClass='loginBtnActive';
      },
      getCode () {
        // let tag = tool.checkMobile(this.email);
        // if (!tag) {
        //   return
        // }
        // let param = new URLSearchParams();
        // param.append('name', this.phone);
        // if (tag) {
        //   this.axios.post(tool.domind() + '/gateway/app/sms/verify/other', param).then(res => {
        //     console.log(res)
        //   }).catch(err => {
        //     console.log(err)
        //   })
        // }
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
      verifyEmail() {
        let flag = /^[A-Za-z0-9]+([-_.][A-Za-z0-9]+)*@([A-Za-z0-9]+[-.])+[A-Za-z0-9]{2,5}$/g;
        if (!this.email) {
          this.errorShow = true;
          this.error = '邮箱错误，请重新输入';
        } else if (!flag.test(this.email)) {
          this.errorShow = true;
          this.error = '邮箱错误，请重新输入';
        } else {
          this.errorShow = false;
        }
      },
      verifyCode (){
        if (!this.auchcode) {
          this.errorShow = true;
          this.error = '验证码错误，请重新输入';
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '~@/assets/scss/mixin.scss';
  @import '~@/assets/scss/const.scss';
  .main{
    text-align: left;
    padding: 0 10px;
    .bind-email{
      padding: 25px 0;
      color:#f81717;
      font-size: 13px;
    }
    .iconWrap{
      position: relative;
      .mint-cell{
        border:1px solid #dedede;
        border-radius: 3px;
        margin-bottom: 15px;
        padding-left: 40px;
        font-size: 12px;
        height:34px;
        min-height: 34px;
        .mint-cell-wrapper{
          padding:0;
        }
      }
      i {
        display: block;
        width: 20px;
        height: 20px;
        background-size: 20px auto;
      }
      .icon-authcode {
        @include bg-image('../img/authcode');
      }
      .icon-email {
        @include bg-image('../img/email');
      }
      .iconImg{
        position: absolute;
        left: 10px;
        top:7px;
      }
      .switch{
        position: absolute;
        right:10px;
        top:10px;
        color:#333;
        font-size: 10px;
      }
      .getCodeBg{
        width:62px;
        padding:5px 0;
        text-align: center;
        background: #f5f5f5;
        border-radius: 3px;
        top:7px;
      }
    }
    .error{
      text-align: center;
      color:#f81717;
      font-size: 10px;
      padding:35px 0 15px;
      height:10px;
    }
    .mint-button {
      margin: 0px auto 15px;
      font-size: 15px;
      height: 34px;
    }
    .loginBtn{
      background:#eeeeee ;
      color: #333333;
    }
    .loginBtnActive{
      background:#3f83e6;
      color: #ffffff;
    }
  }
</style>
