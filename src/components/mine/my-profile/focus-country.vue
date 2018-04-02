<template>
  <div class="change-country">
    <header-bar text="关注国家" @back="back"></header-bar>
    <cross-line style="margin-top: 44px;"></cross-line>
    <div class="main">
      <div class="change">
        <div class="fl">请选择国家</div>
        <div class="fr">
          <i :class="showCountry" @click="Country"></i>
        </div>
      </div>
      <div class="country-warp" v-show="show">
        <div class="country">
          <div class="fl item" @click="checkCountry">
            <i :class="iconChecked"></i>
            <span>日本</span>
          </div>
          <div class="fl item">
            <i class="icon-check"></i>
            <span>韩国</span>
          </div>
          <div class="fl item">
            <i class="icon-check"></i>
            <span>泰国</span>
          </div>
          <div class="fl item">
            <i class="icon-check"></i>
            <span>美国</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import HeaderBar from '@/components/base/header-bar/header-bar'
  import CrossLine from '@/components/base/cross-line/cross-line'
  export default {
    components: {
      HeaderBar,
      CrossLine
    },
    data(){
      return {
        showCountry : 'show-country',
        country : ['中国','日本','韩国','泰国','中国','日本','韩国','泰国'],
        show : true,
        iconChecked : 'icon-checked'
      }
    },
    methods: {
      back() {
        this.$router.push({
          path: this.$router.go(-1)
        })
      },
      Country () {
        this.show = !this.show
        if(this.show){
          this.showCountry= 'show-country';
        }else {
          this.showCountry= 'hide-country';
        }
      },
      checkCountry () {
        cons
        if(this.iconChecked == 'icon-checked'){
          this.iconChecked = 'icon-check';
        }else {
          this.iconChecked = 'icon-checked';
        }
      }

    }
  }
</script>

<style lang="scss" scoped>
  @import '~@/assets/scss/mixin.scss';
  @import '~@/assets/scss/const.scss';
  .main{
    margin: 0 10px;
    background: #fff;
    text-align: left;
    border:1px solid #dedede;
    border-bottom: none;
    color:#333;
    .change{
      overflow: hidden;
      height:35px;
      line-height: 35px;
      border-bottom:1px solid #dedede;
      font-size: 13px;
      padding: 0 15px;
      i{
        display: block;
        float:right;
        width: 18px;
        height: 35px;
        background-repeat: no-repeat;
        background-size: 18px auto;
        background-position: center;

      }
      .show-country{
        @include bg-image("../img/show-country");
      }
      .hide-country{
        @include bg-image("../img/hide-country");
      }
    }
    .country{
      line-height: 40px;
      font-size: 14px;
      overflow: hidden;
      .item{
        width:50%;
        height:40px;
        line-height: 40px;
        border-bottom: 1px dashed #dedede;
        i{
          display: inline-block;
          width: 12px;
          height: 40px;
          background-repeat: no-repeat;
          background-size: 12px auto;
          background-position: center;
          vertical-align: middle;
          margin-left: 15px;
        }
        .icon-checked{
          @include bg-image("../img/checked");
          margin-right: 10px;
        }
        .icon-check{
          @include bg-image("../img/check");
          margin-right: 10px;

        }
        span{
          height:40px;
          line-height: 40px;
          display: inline-block;
        }
      }
    }
  }
</style>
