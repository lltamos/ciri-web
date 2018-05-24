<template>
  <div class="payment" id="payment">
    <div class="header-bar">
      <i class="icon-back" @click="back"></i>
      <h1>开通会员</h1>
    </div>
    <div class="member-level">
      <div class="level">项目库会员</div>
      <div class="money">待付款：<span class="count">188</span><span class="gold">&nbsp;金币</span></div>
    </div>
    <div class="balance clearfix">
      <span class="balance-word fl">项目库会员</span>
      <span class="balance-money fr">600金币</span>
    </div>
    <div class="btn" @click="pay">立即支付</div>

  </div>

</template>

<script>
  import HeaderBar from '@/components/base/header-bar/header-bar'
  import CrossLine from '@/components/base/cross-line/cross-line'
  import tool from "@/api/tool"
  import { MessageBox } from 'mint-ui'

  export default {
    components: {
      HeaderBar,
      CrossLine,
      tool
    },
    data() {
      return {
        isSelected:false,
        content:'在微信中打开链接吗？'
      }
    },
    methods: {
      back() {
        window.history.back()
      },
      pay(){
        //确认购买弹窗
        MessageBox({
          title: '提示',
          message: '请确认是否购买',
          confirmButtonText:'购买',
          showCancelButton: true
        }).then(action=>{
          if(action == 'confirm'){
            alert('可以购买了');
          }
        }).catch(err=>{

        });

       //支付成功弹窗
        /*MessageBox({
          message: '支付成功',
          showCancelButton: false
        }).then(action=>{
          if(action == 'confirm'){
            alert('成功了');
          }
        }).catch(err=>{

        });*/

        //支付失败弹窗
        /*MessageBox({
          message: '支付失败，请重新操作',
          showCancelButton: false
        }).then(action=>{
          if(action == 'confirm'){
            alert('失败了');
          }
        }).catch(err=>{

        });*/
      }
    },
    created() {

    },
    mounted() {

    }
  }
</script>

<style type="text/scss" lang="scss" scoped>
  @import '~@/assets/scss/mixin.scss';
  @import '~@/assets/scss/const.scss';
  .payment{
    .header-bar {
      height: 44px;
      line-height: 44px;
      font-size: 14px;
      text-align: center;
      position: relative;
      @include onepx('bottom');
      h1 {
        font-size: 20px;
      }

      .icon-back {
        display: block;
        float: left;
        width: 22px;
        height: 22px;
        margin: 11px auto;
        @include bg-image("../../base/header-bar/icon-arrow_lift");
        background-size: 22px auto;
      }

    }
    .member-level{
      padding: 20px 0;
      @include onepx('bottom');
      .level{
        font-size: 18px;
        color: #333;
        line-height: 28px;
      }
      .money{
        font-size: 15px;
        color: #333;
        .count{
          font-size: 20px;
          color: #528de8;
        }
        .gold{
          color: #666;
        }
      }

    }
    .balance{
      padding: 20px 10px;
      border-bottom: 1px solid #dedede;
      .balance-word{
        font-size: 15px;
        display: inline-block;
      }
      .balance-money{
        font-size: 16px;
        color: #528de8;
        display: inline-block;
      }
    }
    .btn{
      width: 94.6%;
      margin: 20px auto;
    }


  }

</style>
