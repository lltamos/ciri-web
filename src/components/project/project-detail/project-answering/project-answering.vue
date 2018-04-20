<template>
  <div class="project-answering">
    <div class="answering-warp">

      <div class="ask-warp ask-bt">
        <div class="ask-describe"></div>
        <textarea name="" cols="30" rows="10" placeholder="相关问题的答复会展示在项目答疑区哟"></textarea>
        <p class="hint">问题答复后，将第一时间邮件或短信通知您</p>
        <div class="file-warp">
          <FileDelete></FileDelete>
          <FileDelete></FileDelete>
          <FileDelete></FileDelete>
        </div>
        <div class="pop-bottom clearfix">
          <div class="fl">
            <i class="icon-uploading"></i>
            <span class="upload-file">上传文件</span>
            <input type="file" class="fill-input">
          </div>
          <div class="fr btn-warp">
            <input type="checkbox">匿名
            <div class="small-btn">提交</div>
          </div>
        </div>
      </div>
      <CrossLine></CrossLine>
      <!--<div class="small-btn" @click="askQuestion">我要提问</div>-->
      <div class="question">
        <ul class="tab clearfix">
          <li :class="{active:tabActive==1}" @click="allShow">全部 <em>3</em></li>
          <li :class="{active:tabActive==2}" @click="mineShow">我的问题 <em>6</em></li>
        </ul>
        <div class="all-warp" v-show="questionShow">
          <div class="question-warp">
            <div class="question-list">
              <div class="head-portrait">
                <img src="../../../news/img/p_1.jpg" alt="">
              </div>
              <div class="main-news">
                <div class="user-name">13201154229</div>
                <div class="delete">删除</div>
                <div class="ques-title">这个项目有完整的审批和许可吗？</div>
                <div class="file-warp">
                  <div class="file">
                    <i class="icon-type icon-pdf"></i>
                    <span class="file-title">建设许可证.pdf</span>
                    <div class="view">查看</div>
                  </div>
                  <div class="file">
                    <i class="icon-type icon-pdf"></i>
                    <span class="file-title">建设许可证.pdf</span>
                    <div class="view">查看</div>
                  </div>
                </div>
                <div class="qs-bottom clearfix">
                  <div class="time fl">2018-04-09</div>
                  <div class="fr dz-hf">
                    <span class="dz-count">2</span>
                    <i class="icon-dz"></i>
                    <span class="reply" @click="askQuestion">回复<em>(0)</em></span>
                  </div>
                </div>
              </div>
            </div>
            <div class="question-list">
              <div class="head-portrait">
                <img src="../../../news/img/p_1.jpg" alt="">
              </div>
              <div class="main-news">
                <div class="user-name">13201154229</div>
                <div class="delete">删除</div>
                <div class="ques-title">这个项目有完整的审批和许可吗？</div>
                <div class="file-warp">
                  <div class="file">
                    <i class="icon-type icon-pdf"></i>
                    <span class="file-title">建设许可证.pdf</span>
                    <div class="view">查看</div>
                  </div>
                  <div class="file">
                    <i class="icon-type icon-pdf"></i>
                    <span class="file-title">建设许可证.pdf</span>
                    <div class="view">查看</div>
                  </div>
                </div>
                <div class="qs-bottom clearfix">
                  <div class="time fl">2018-04-09</div>
                  <div class="fr dz-hf">
                    <span class="dz-count">2</span>
                    <i class="icon-dz"></i>
                    <span class="reply" @click="askQuestion">回复<em>(0)</em></span>
                  </div>
                </div>
                <div class="questioner-visible">
                  <div class="marked-warp">
                    <div class="marked-words">仅提问者可见</div>
                    <div class="marked-words">仅提问者可见</div>
                    <div class="marked-words">
                      <div class="user-warp clearfix">
                        <div class="head-portrait">
                          <img src="../../../news/img/p_1.jpg" alt="">
                        </div>
                        <div class="fl">
                          <div class="user-name">13201154229 <em>(仅提问者可见)</em></div>
                          <div class="delete">删除</div>
                          <div class="time">2018-04-09</div>
                        </div>
                      </div>
                      <div class="ques-title">这个项目有完整的审批和许可。</div>
                    </div>
                  </div>
                  <div class="file-warp">
                    <div class="file">
                      <i class="icon-type icon-pdf"></i>
                      <span class="file-title">建设许可证.pdf</span>
                      <div class="view">查看</div>
                    </div>
                    <div class="file">
                      <i class="icon-type icon-pdf"></i>
                      <span class="file-title">建设许可证.pdf</span>
                      <div class="view">查看</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="read-more" @click="readMore" v-show="moreShow">
            <span v-text="moreQuestion">查看更多</span>
            <i :class="iconMore"></i>
          </div>
        </div>
        <div class="mine-warp" v-show="!questionShow">
          <div class="question-list">
            <div class="head-portrait">
              <img src="../../../news/img/p_1.jpg" alt="">
            </div>
            <div class="main-news">
              <div class="user-name">13201154229</div>
              <div class="delete">删除</div>
              <div class="ques-title">这个项目有完整的审批和许可吗？</div>
              <div class="file-warp">
                <div class="file">
                  <i class="icon-type icon-pdf"></i>
                  <span class="file-title">建设许可证.pdf</span>
                  <div class="view">查看</div>
                </div>
                <div class="file">
                  <i class="icon-type icon-pdf"></i>
                  <span class="file-title">建设许可证.pdf</span>
                  <div class="view">查看</div>
                </div>
              </div>
              <div class="qs-bottom clearfix">
                <div class="time fl">2018-04-09</div>
                <div class="fr dz-hf">
                  <span class="dz-count">2</span>
                  <i class="icon-dz"></i>
                  <span class="reply">回复<em>(0)</em></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="ask-pop pop-bg" v-show="askPop">
        <div class="pop-up ask-warp">
          <div class="checkbox-warp">
            <input type="checkbox">仅提问者可见
          </div>
          <textarea name="" id="" cols="30" rows="10" placeholder="写回复"></textarea>
          <div class="file-warp">
            <FileDelete></FileDelete>
            <FileDelete></FileDelete>
            <FileDelete></FileDelete>
          </div>
          <div class="pop-bottom clearfix">
            <div class="fl">
              <i class="icon-uploading"></i>
              <span class="upload-file">上传文件</span>
              <input type="file" class="fill-input">
            </div>
            <div class="fr btn-warp">
              <input type="checkbox">匿名
              <div class="small-btn" @click="submitQuestion">提交</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <CrossLine></CrossLine>
    <!--权限弹框-->
    <Authority :authorityShow="authorityShow" @authorityHide="authorityHide" @upgrade="upgrade"></Authority>
  </div>
</template>
<script>
  import CrossLine from '@/components/base/cross-line/cross-line'
  import FileDelete from '@/components/base/file-delete/file-delete'
  import Authority from '@/components/base/authority/authority'
  export default {
    components: {
      CrossLine,
      FileDelete,
      Authority
    },
    data() {
      return {
        askPop : false,
        // 权限弹框
        authorityShow : false,
        questionShow : true,
        tabActive : 1,
        moreQuestion : '查看更多',
        iconMore :'icon-more',
        moreShow : true,
      }
    },
    props: {},
    watch: {},
    methods: {
      // 提问弹框
      askQuestion (){
        this.askPop = true;
      },
      submitQuestion (){
        this.askPop = false;
      },
      //权限弹框
      authorityHide () {
        this.authorityShow = false;
      },
      upgrade () {
        this.$router.replace({ path: "/mine/member-center" });
      },
      allShow () {
        this.questionShow = true
        this.tabActive = 1
      },
      mineShow () {
        this.questionShow = false
        this.tabActive = 2
      },
      readMore () {
        if(this.moreQuestion == '查看更多'){
          this.moreQuestion = '收起'
          this.iconMore = 'pack-up'
        }else {
          this.moreQuestion = '查看更多';
          this.iconMore = 'icon-more'
        }
      },



    },
    filters: {},
    computed: {},
    created() {
    },
    mounted() {
    },
    destroyed() {
    }
  }
</script>
<style lang="scss" scoped>
  @import '~@/assets/scss/reset.scss';
  @import '~@/assets/scss/mixin.scss';
  @import '~@/assets/scss/const.scss';
  .project-answering{
    text-align: left;
    .answering-warp{
      .ask-warp{
        width:100%;
        background: #fff;
        padding: 0 15px;
        box-sizing: border-box;
        .checkbox-warp{
          font-size: 11px;
          color:#333;
          margin: 15px 0 10px;
          input{
            margin-right: 6px;
            vertical-align: middle;
          }
        }
        .ask-describe{
          height:40px;
          width:215px;
          @include bg-image('../../img/ask-describe');
          background-size: 215px 40px;
        }
        textarea{
          height:97px;
          width: 100%;
          border:1px solid #dedede;
          border-radius: 3px;
          outline: none;
          padding: 10px;
          font-size: 13px;
          color:#666;
          box-sizing: border-box;

        }
        p.hint{
          margin-top:10px ;
        }
        .pop-bottom{
          height:27px;
          line-height: 27px;
          margin-top: 21px;
          position: relative;
          .icon-uploading{
            height:27px;
            width:15px;
            margin-right: 10px;
            display: inline-block;
            @include bg-image('../../img/upload-file');
            background-size: 15px 17px;
            background-repeat: no-repeat;
            background-position: center;

          }
          .upload-file{
            font-size: 12px;
            color:#528de8;
            display: inline-block;
            height:27px;
            line-height: 27px;
            position: absolute;
            top:0;
            left: 25px;

          }
          .fill-input{
            position: absolute;
            top:0;
            left: 0px;
            height:27px;
            opacity: 0;
            z-index: 111;
            width: 100px;
          }
          .btn-warp{
            font-size: 11px;
            color:#333;
            input{
              margin-right: 6px;
              vertical-align: middle;

            }
            .small-btn{
              height:27px;
              line-height:27px;
              width:52px;
              display: inline-block;
              margin-left: 15px;
              font-size: 15px;

            }
          }

        }

      }
      .ask-bt{
        margin-bottom: 17px;
      }
      .ask-pop{
        padding: 0;
        .pop-up{
          position: fixed;
          bottom: 0;
          background: #fcfcfc;
        }
      }
      .question{
        padding: 0 10px;
        .tab{
          margin:20px 0 5px;
          li{
            float:left;
            margin-right: 15px;
            color:#528de8;
            font-size: 10px;
            width:60px;
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
        .question-list{
          margin-top: 15px;
          padding-left: 55px;
          position: relative;
          @include onepx('bottom');
          &:last-child{
            &:after{
              border:none;
            }
          }
          .head-portrait{
            height:45px;
            width: 45px;
            border-radius: 50%;
            overflow: hidden;
            position: absolute;
            top:0;
            left: 0;
            img{
              width: 100%;
              height:100%;
            }
          }
          .main-news{
            .user-name{
              font-size: 13px;
              color:#999;
              line-height: 1;
              margin-bottom: 15px;
              em{
                margin-left: 7px;
                color:#528de8;
                font-size: 10px;
              }

            }
            .delete{
              font-size: 12px;
              color:#666;
              line-height: 1;
              position: absolute;
              right:0;
              top:0;
            }
            .ques-title{
              font-size: 14px;
              color:#333;
              line-height: 1;

            }
            .file-warp{
              .file{
                padding: 11px 10px;
                line-height: 13px;
                position: relative;
                padding-left: 28px;
                background: #f5f5f5;
                border-bottom: 1px solid #dedede;
                &:first-child{
                  margin-top: 10px;
                }
                &:last-child{
                  border-bottom:none;
                }
                .icon-type{
                  position: absolute;
                  top:11px;
                  left: 10px;
                  display: inline-block;
                  width:11px;
                  height:13px;
                  background-size: 11px 13px;
                  vertical-align: middle;
                  &.icon-pdf{
                    @include bg-image("../../img/pdf");
                  }
                  &.icon-jpg{
                    @include bg-image("../../img/jpg");
                  }
                  &.icon-ppt{
                    @include bg-image("../../img/ppt");
                  }
                  &.icon-xls{
                    @include bg-image("../../img/xls");
                  }
                }
                .file-title{
                  display: inline-block;
                  line-height: 13px;
                  font-size: 11px;
                  color: #333;
                }
                .view{
                  position: absolute;
                  right:10px;
                  top:11px;
                  color:#528de8;
                  font-size: 11px;
                  line-height: 1;
                }
              }
            }
            .qs-bottom{
              height:12px;
              line-height: 1;
              font-size: 12px;
              color:#528de8;
              padding: 15px 0;
              .time{
                color: #666;
              }
              .dz-hf{
                .icon-dz{
                  display: inline-block;
                  width: 9px;
                  height:12px;
                  @include bg-image('../../img/thumbs-up');
                  background-size: 9px 12px;
                  background-repeat: no-repeat;
                  background-position: center;
                  margin-right: 10px;
                  &.active{
                    @include bg-image('../../img/thumbs-uped')
                  }
                }
                .reply{
                  em{
                    margin-left: 10px;
                  }
                }


              }
            }
            .questioner-visible{
              background: #f5f5f5;
              padding:0 10px 15px;
              margin-bottom: 17px;
              .file{
                background: #fff;
              }
              .marked-words{
                color:#528de8;
                font-size: 14px;
                line-height: 1;
                padding: 15px 0;
                @include onepx-dashed('bottom');
                &:last-child{
                  padding-bottom: 0;
                  &:after{
                    border:none;
                  }
                }
                .user-warp{
                  position: relative;
                  padding-left: 55px;
                  .delete{
                    color: #528de8;
                  }
                  .time{
                    font-size: 12px;
                    color:#666;
                  }

                }
                .ques-title{
                  margin-top: 15px;
                }
              }
            }

          }

        }
        .read-more{
          font-size: 13px;
          color: #3f80e9;
          line-height: 1;
          text-align: center;
          margin-top: 10px;
          padding-right: 10px;
          margin-bottom: 16px;
          i {
            display: inline-block;
            width: 10px;
            height: 10px;
            background-size: 10px auto;
          }
          i.icon-more{
            @include bg-image("../../../news/img/more");
          }
          i.pack-up{
            @include bg-image("../../img/pack-up");
          }
        }
      }
    }

  }

</style>
