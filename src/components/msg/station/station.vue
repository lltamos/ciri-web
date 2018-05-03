<template>
  <div class="station">
    <ul class="tab clearfix">
      <li :class="{active:tabActive==1}" @click="showInbox">收件箱 <em>14</em></li>
      <li :class="{active:tabActive==2}" @click="showOutbox">发件箱 <em></em></li>
    </ul>
    <div class="inbox outbox" v-show="seeInbox">
      <div class="outbox-page">
        <div class="point fl"></div>
        <div class="message mar">
          <div class="top-message" @click="showInDetail">
            <span class="title">[<router-link to="">LiZhuQing</router-link>]申请查看项目: </span>[<router-link to="">巴西矿物质水工厂项目</router-link>]<span class="time">【 2018-03-16 09:41:43】</span>
          </div>
          <div class="bottom-message" v-show="isShow">
            <p>
              [LiZhuQing]对您的项目[巴西矿物质水工厂项目]感兴趣, 申请查看该项目的文件[<router-link to="">COSTA BEBER DRAFT TEASER CIRI 2017.pdf</router-link>], 以进一步了解该项目. 如有任何疑问，欢迎垂询 +86 010-8146-4345(工作时间9:00-18:30)
            </p>
          </div>
        </div>
      </div>


    </div>

    <div class="outbox" v-show="!seeInbox">
      <div class="outbox-page">
        <div class="message">
          <div class="top-message" @click="showOutDetail">
            <span class="title">[<router-link to="">LiZhuQing</router-link>]申请查看项目: </span>[<router-link to="">巴西矿物质水工厂项目</router-link>]<span class="time">【 2018-03-16 09:41:43】</span>
          </div>
          <div class="bottom-message" v-show="isShow">
            <p>
              [LiZhuQing]对您的项目[巴西矿物质水工厂项目]感兴趣, 申请查看该项目的文件[<router-link to="">COSTA BEBER DRAFT TEASER CIRI 2017.pdf</router-link>], 以进一步了解该项目. 如有任何疑问，欢迎垂询 +86 010-8146-4345(工作时间9:00-18:30)
            </p>
          </div>
        </div>
      </div>

      <div class="outbox-page">
        <div class="message">
          <div class="top-message">
            <span class="title">[<router-link to="">LiZhuQing</router-link>]申请查看项目: </span>[<router-link to="">巴西矿物质水工厂项目</router-link>]<span class="time">【 2018-03-16 09:41:43】</span>
          </div>
          <div class="bottom-message">
            <p>
              [LiZhuQing]对您的项目[巴西矿物质水工厂项目]感兴趣, 申请查看该项目的文件[<router-link to="">COSTA BEBER DRAFT TEASER CIRI 2017.pdf</router-link>], 以进一步了解该项目. 如有任何疑问，欢迎垂询 +86 010-8146-4345(工作时间9:00-18:30)
            </p>
          </div>
        </div>
      </div>

    </div>

  </div>
</template>

<script>
  import tool from "@/api/tool";
  export default {
    components: {

    },
    data () {
      return {
        tabActive : 1,
        seeInbox: true,
        isShow:false,
      }
    },
    props: {},
    watch: {},
    methods: {
      showInbox(){
        this.tabActive = 1;
        this.seeInbox = true;
      },
      showOutbox(){
        this.tabActive = 2;
        this.seeInbox = false;
      },
      showOutDetail(){
        this.isShow = !this.isShow
      },
      showInDetail(){
        this.isShow = !this.isShow
      },

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
  @import '~@/assets/scss/const.scss';
  @import '~@/assets/scss/mixin.scss';
  .station{
    padding: 0 10px;
    .tab{
      margin: 15px 0 0px;
      li{
        float:left;
        margin-right: 15px;
        color:#528de8;
        font-size: 10px;
        width:75px;
        height:20px;
        line-height: 20px;
        border-radius: 20px;
        border: 1px solid #528de8;
        text-align: center;
        &.active{
          background:#528de8 ;
          color:#fff;
        }

      }
    }
    .inbox{
      text-align: left;
      .point{
        width: 11px;
        height: 11px;
        background-color: red;
        border-radius: 50%;
        position: absolute;
        margin-top: 5px;
      }
      .mar{
        margin-left: 20px;
      }
    }
    .outbox{
      text-align: left;
      .outbox-page{
        border-bottom: 1px solid #dedede;
        padding: 20px 0px;
        font-size: 13px;
        position: relative;
        .point-read{
          background-color: #ccc;
        }
        .message{
          a{
            color: #528de8;
            text-decoration: underline;
            margin: 0 3px;
            &:hover,&:visited, &:link, &:active{
              color: #528de8;
            }
          }
          .top-message{
            font-size: 14px;
            cursor: pointer;
            color: black;
            .title{
              line-height: 20px;
            }
            .time{
              line-height: 20px;
              color: #666;
            }

          }
          .bottom-message{
            margin-top: 5px;
            color: #666;
            font-size: 12px;
            p{
              line-height: 20px;
            }
          }
        }
      }
    }
  }


</style>
