<template>
<div class="change-key ping-bg">
  <header-bar :text="headTitle" @back="back"></header-bar>
  <cross-line style="margin-top: 44px;"></cross-line>
  <div class="change">
    <input type="text" value="张三丰"/>
  </div>
  <div class="btn">保存</div>
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
        headTitle : '',
        info:''
      }
    },
    methods: {
      back() {
        this.$router.push({
          path: this.$router.go(-1)
        })
      }

    },
    created () {
      let flag=this.$route.params.id;
      console.log(this.$route);
      if( flag=='name' ){
        this.headTitle ='修改姓名'
      }else if(flag=='company'){
        this.headTitle ='修改公司'
      }else if(flag=='department'){
        this.headTitle ='修改部门'
      } else if(flag=='position'){
        this.headTitle ='修改职位'
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '~@/assets/scss/mixin.scss';
  @import '~@/assets/scss/const.scss';
.change{
  background: #fff;
  border: 1px solid #dedede;
  margin:0 10px 55px;
  padding:0 15px;
  border-radius: 3px;
  input{
    font-size: 13px;
    height:35px;
    line-height:35px;
    color:#333;
    outline: none;
    border: none;
    width: 100%;

  }
}
  .btn{
    width: 150px;
    color:#fefeff;
    margin: 0 auto;
  }
</style>
