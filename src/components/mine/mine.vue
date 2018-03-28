<template>
  <div class="mine">
    <header class="gradient">个人中心</header>
    <div class="main">
      <div class="gradient section">
        <div class="user">
          <div class="user_face">

          </div>
          <div v-if="!userId">
            <router-link class="login" to="/login">立即登录</router-link>
          </div>
          <div v-if="userId" class="logined">
            <div>
              <span class="user_name">1520***7830</span>
              <span class="user_position">项目代理</span>
            </div>
            <div>
              <span><i class="icon_member"></i>金牌会员</span><span><i class="icon_vertify"></i>已实名认证</span>
            </div>
          </div>
        </div>
      </div>
      <div class="section"></div>
      <div class="section"></div>
    </div>
    <tab-bar></tab-bar>
  </div>
</template>

<script>
  import TabBar from '@/components/base/tab-bar/tab-bar'
  import CrossLine from '@/components/base/cross-line/cross-line'
  import BorderLine from '@/components/base/border-line/border-line'
  import More from '@/components/base/more/more'

  export default {
    components: {
      TabBar,
      CrossLine,
      BorderLine,
      More
    },
    data () {
      return {
        userId:false
      }
    },
    props: {},
    watch: {},
    methods: {

    },
    filters: {},
    computed: {},
    created () {
    },
    mounted () {},
    destroyed () {}
  }
</script>

<style lang="scss" scoped>
  body{
    background-color: #f5f5f5;
  }
  .mine{
    text-align: left;
    header{
      height:44px;
      line-height: 44px;
      color:#fefefe;
      font-size: 18px;
      text-align: center;
    }
    .gradient{
      background: -webkit-linear-gradient(left, rgba(56,185,253,1) ,rgba(63,132,230,0.65))!important; /* Safari 5.1 - 6.0 */
      background: -o-linear-gradient(right, rgba(56,185,253,1) ,rgba(63,132,230,0.65))!important; /* Opera 11.1 - 12.0 */
      background: -moz-linear-gradient(right, rgba(56,185,253,1) ,rgba(63,132,230,0.65))!important; /* Firefox 3.6 - 15 */
      background: linear-gradient(to right, rgba(56,185,253,1) ,rgba(63,132,230,0.65))!important; /* 标准的语法 */
    }
    .main{
      .section{
        background: #fff;
        .user{
          background: #fff;
          padding: 0 10px;
          margin: 0 20px;
          height: 103px;
          .user_face{
            height:66px;
            width:66px;
            float: left;
            border:6px solid #3ba8f5;
            margin-right: 30px;
            margin-top: 12.5px;
            border-radius: 50%;
            background-image: url("./img/user_face.png");
            background-size: 66px auto;
          }
          .login{
            font-size: 15px;
            color: #fff;
            float: left;
            line-height: 103px;
          }
          .logined{
            float: left;
          }

        }
      }
    }


  }


</style>
