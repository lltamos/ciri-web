<!-- 注册 组件 -->
<template>
  <div class="register">
    <header-bar text="注册" @back="back"></header-bar>
    <!-- 横线分隔条 -->
    <cross-line></cross-line>
    <!-- 注册 -->
    <div class="register-wrapper">
      <div class="roleWrap">
        <p class="roleHead">
          <i class="iconImg icon-man"></i><span>我是<span class="chooseRole" style="color:red;">请选择角色</span></span>
        </p>
        <div class="pl29">
          <div class="gdWidth"><input type="radio" name="role" checked>投资方</div>
          <input type="radio" name="role">项目方
        </div>
        <div class="pl29">
          <div class="gdWidth"><input type="radio" name="role">投资服务机构</div>
          <input type="radio" name="role">项目代理
        </div>
        <!--<div class="pl29">-->
          <!--<mt-radio-->
            <!--v-model="value"-->
            <!--:options="['项目方', '投资方', '投资服务机构']">-->
          <!--</mt-radio>-->
        <!--</div>-->
      </div>
      <div class="iconWrap">
        <div class="mint-cell">
          <div class="mint-cell-wrapper">
            <input placeholder="请输入手机号" type="tel" class="mint-field-core" v-model="phone" @blur="verifyPhone" @focus="Focus">
          </div>
        </div>
        <i class="iconImg icon-phone"></i>
        <div class="number_registered" v-if="number_registered">该手机号已经注册，请重新输入</div>
      </div>
      <div class="iconWrap">
        <div class="mint-cell">
          <div class="mint-cell-wrapper">
            <input placeholder="请输入验证码" type="text" class="mint-field-core" @blur="fixImg" @focus="Focus">
          </div>
        </div>
        <i class="iconImg icon-authcode"></i>
        <div class="switch getCodeBg" v-show="show" @click="getCode">发送验证码</div>
        <div class="switch getCodeBg" v-show="!show">{{count}} s</div>
      </div>
      <div class="iconWrap">
        <div class="mint-cell">
          <div class="mint-cell-wrapper">
            <input placeholder="请输入密码" :type="pswTypeChange1" v-model="password1" class="mint-field-core" @blur="fixImg" @focus="Focus">
          </div>
        </div>
        <i class="iconImg icon-password"></i>
        <div :class="pswIcon1" @click="pswShow1"></div>
      </div>
      <div class="iconWrap">
        <div class="mint-cell">
          <div class="mint-cell-wrapper">
            <input placeholder="请确认密码" :type="pswTypeChange2" v-model="password2" class="mint-field-core" @blur="fixImg" @focus="Focus">
          </div>
        </div>
        <i class="iconImg icon-password"></i>
        <div :class="pswIcon2" @click="pswShow2"></div>
      </div>
      <div class="agreement">
        <span><input type="checkbox" name="agreement" :checked="checked"/>我同意《<router-link to="/deal" class="deal">用户注册协议</router-link>》</span>
      </div>
      <mt-button :class="registerClass" size="large">注册</mt-button>
      <div class="error">
        <div v-show="errorShow" class="errorText">手机号错误，请重新输入</div>
      </div>
    </div>
    <bottomImg class="staticImg"></bottomImg>
  </div>
</template>

<script>
  import HeaderBar from '@/components/base/header-bar/header-bar'
  import BottomImg from '@/components/base/bottomImg/bottomImg'

  import CrossLine from '@/components/base/cross-line/cross-line'
  export default {
    components: {
      HeaderBar,
      BottomImg,
      CrossLine
    },
    data () {
      return {
        registerClass : 'registerBtn',
        show: true,
        count: '',
        timer: null,
        position: '',
        formMess : {
          phone : this.phone,
          password1 : this.password1,
          password2 : this.password2
        },
        pswTypeChange1 : 'password',
        pswIcon1: 'switch pswIcon pswIconClose',
        pswTypeChange2 : 'password',
        pswIcon2: 'switch pswIcon pswIconClose',
        error:'手机号错误，请重新输入',
        errorShow : false,
        checked : false,
        number_registered : false
      }
    },
    props: {},
    watch: {},
    methods: {
      back () {
        this.$router.push({
          path: this.$router.go(-1)
        })
      },
      //input获取焦点时执行
      Focus () {
        this.registerClass='registerBtnActive';
        this.position = 'staticImg';
      },
      getCode () {
        const TIME_COUNT = 60;
        if (!this.timer) {
          this.count = TIME_COUNT;
          this.show = false;
          this.timer = setInterval(() => {
            if (this.count > 0 && this.count <= TIME_COUNT) {
              this.count--;
            } else {
              this.show = true;
              clearInterval(this.timer);
              this.timer = null;
            }
          }, 1000)
        }
      },
      pswShow1() {
        if (this.pswTypeChange1 == 'password') {
          this.pswTypeChange1 = 'text';
          this.pswIcon1 = 'switch pswIcon pswIconShow'
        } else {
          this.pswTypeChange1 = 'password';
          this.pswIcon1= 'switch pswIcon pswIconClose'
        }
      },
      pswShow2() {
        if (this.pswTypeChange2 == 'password') {
          this.pswTypeChange2 = 'text';
          this.pswIcon2 = 'switch pswIcon pswIconShow'
        } else {
          this.pswTypeChange2 = 'password';
          this.pswIcon2 = 'switch pswIcon pswIconClose'
        }
      },
      //验证手机号码部分
      verifyPhone() {
        let reg = 11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/;
        if (this.phone == '') {
          this.errorShow = true;
        } else if (!reg.test(this.phone)) {
          this.errorShow = true;
        }else{
          this.errorShow = false;
        }
        //图片fixed
        this.position = 'fixImg';
        //勾选用户注册协议
        this.checked = true;
      },
      fixImg () {
        this.position = 'fixImg';
      }
    },
    filters: {},
    computed: {},
    created () {},
    mounted () {}
  }
</script>

<style lang="scss" scoped>
  /*@import '~@/assets/scss/const.scss';*/
  @import '~@/assets/scss/mixin.scss';

  .register {
    color: #333;
    margin-top: 40px;
    background-color: #fff;
    overflow: visible;
    .register-wrapper {
      margin-top: 5px;
      overflow: hidden;
      padding: 0 10px;
      .roleWrap{
        text-align: left;
        font-size: 12px;
        color:#333;
        margin-bottom: 14px;
        .roleHead{
          margin-bottom: 14px;
          .icon-man{
            display: inline-block;
            width: 19px;
            height: 19px;
            @include bg-image('./img/man');
            background-size: 19px auto;
            margin: 0 10px;
            vertical-align: bottom;
          }
          .chooseRole{
            color:#f81717;
            margin-left: 15px;
          }
        }
        .pl29{
          padding-left: 29px;
          margin: 5px 0;
          font-size: 11px;
          color: #666;
          .gdWidth{
            display: inline-block;
            width:200px;
          }
          input{
            margin-right: 5px;
            vertical-align: middle;
            margin-top: -5px;
          }
          input[type="radio"] + label::before {
            content: "\a0"; /*不换行空格*/
            display: inline-block;
            vertical-align: middle;
            font-size: 18px;
            width: 1em;
            height: 1em;
            margin-right: .4em;
            border-radius: 50%;
            border: 1px solid #01cd78;
            text-indent: .15em;
            line-height: 1;
          }
          input[type="radio"]:checked + label::before {
            background-color: #01cd78;
            background-clip: content-box;
            padding: .2em;
          }

        }
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
          @include bg-image('./img/phone');
          background-size: 20px auto;
        }
        .icon-phone {
          @include bg-image('./img/phone');
        }
        .icon-authcode {
          @include bg-image('./img/authcode');
        }
        .icon-password {
          @include bg-image('./img/password');
        }
        .iconImg{
          position: absolute;
          left: 10px;
          top:7px;
        }
        .number_registered{
          position: absolute;
          left: 40px;
          top:36px;
          font-size: 9px;
          color: #f81717;
        }
        .switch{
          position: absolute;
          right:10px;
          top:10px;
          color:#333;
          font-size: 10px;
        }
        .pswIcon{
          width:16px;
          height:16px;
          background-size: 16px auto;
          display: block;
        }
        .pswIconShow{
          @include bg-image('./img/psw-show');
        }
        .pswIconClose{
          @include bg-image('./img/psw-close');
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
      .agreement{
        text-align: left;
        margin-top: 33px;
        margin-bottom: 15px;
        font-size: 12px;
        color:#666;
        input{
          margin-right: 10px;
          vertical-align: middle;
          margin-top: -5px;
        }
        .deal{
          color:#666;
        }
      }
      .regiPwd{
        overflow: hidden;
        .fs12{
          color:#333;
          font-size: 12px;
        }
      }
      .error{
        text-align: center;
        color:#f81717;
        font-size: 10px;
        padding:15px 0 15px;
        height:10px;
      }
      .mint-button {
        margin: 0px auto 0px;
        font-size: 15px;
        height: 34px;
      }
      .registerBtn{
        background:#eeeeee ;
        color: #333333;
      }
      .registerBtnActive{
        background:#3f83e6;
        color: #ffffff;
      }
      .fs13{
        font-size: 13px;
        color:#333;
      }
    }
    .staticImg{
      position: static;
    }
  }
</style>

