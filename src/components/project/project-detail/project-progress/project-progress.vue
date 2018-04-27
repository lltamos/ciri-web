<template>
    <div class="project-progress">
      <div class="progress-warp" v-if="progressShow">
        <div class="reminder">这里记录了项目发起人更新的项目进展，您可以提问了解更多项目相关细节。</div>
        <div class="project">
          <div class="img">
            <img src="../../../news/img/p_1.jpg" alt="">
          </div>
          <div class="main-news">
            <h2>巴西卡坦杜瓦卡坦杜瓦卡坦杜瓦 卡坦杜瓦60MW 风电厂项目</h2>
            <div class="small-btn" @click="askQuestion">我要提问</div>
          </div>
        </div>
        <div class="timer-shaft clearfix">
          <ul class="timer-warp">
              <li v-for="(item,index) in progressList" :key="index" v-if="progressList != null && progressList.length !=0">
                <div class="time">{{item.time}}</div>
                <h2><span>-</span>{{item.title.valueCn}}</h2>
                <!--点击查看详情-->
                <!--<router-link :to="{path:'/project/project-detail/progress-detail',query: {'projId': projId,'createTime':item.editInfo.createTime}}">
                  <em>查看</em>
                </router-link>-->
                <em @click="seeDetail(projId,item.editInfo.createTime)">查看</em>
              </li>
          </ul>
        </div>
        <div v-if="!this.power">
          <div class="timer-none" v-if="progressList == null || progressList.length ==0">
            <img src="../../img/timer-none.png" alt="">
          </div>
        </div>
        <div class="ask-pop pop-bg" v-show="askPop">
          <div class="pop-up">
            <div class="ask-describe"></div>
            <textarea name="" id="" cols="30" rows="10" placeholder="相关问题的答复会展示在项目答疑区哟" v-model="message"></textarea>
            <p class="hint">问题答复后，将第一时间邮件或短信通知您</p>
            <div class="file-warp">
              <FileDelete v-for="(file,index) in askFileList"  :key="index"
                          :file="file" :index="index" :tag="1"
                          @delete="deleteAskFile"></FileDelete>
            </div>
            <div class="pop-bottom clearfix">
              <div class="fl">
                <i class="icon-uploading"></i>
                <span class="upload-file">上传文件</span>
                <input type="file" class="fill-input"  @change="UploadFile($event,1)">
              </div>
              <div class="fr btn-warp">
                <input type="checkbox" v-model="askChecked">匿名
                <div class="small-btn" @click="askAQuestion">提交</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--信息正在完善中背景图片-->
      <!--<div class="progress-bg" v-if="!progressShow">
      </div>-->
      <CrossLine></CrossLine>
      <!--权限弹框-->
      <Authority :authorityShow="authorityShow" @authorityHide="authorityHide" @upgrade="upgrade"></Authority>
    </div>
</template>

<script>
  import CrossLine from '@/components/base/cross-line/cross-line'
  import FileDelete from '@/components/base/file-delete/file-delete'
  import Authority from '@/components/base/authority/authority'
  import tool from "../../../../api/tool"
    export default {
        components: {
          CrossLine,
          FileDelete,
          Authority
        },
        data() {
            return {
              progressList:[],
              askPop : false,
              progressShow :true,
              projId:"",    //
              authorityShow : false,
              message:"",        //提问的信息栏
              askChecked:false,  //提问匿名选项框
              askFileList:[],  //提问的文件数组
              item: '',
              power:false,
            }
        },
        props: {},
        watch: {},
        methods: {
          // 提问弹框
          askQuestion (){
            this.askPop = true;
          },
          //权限弹框
          authorityHide () {
            this.authorityShow = false;
          },
          upgrade () {
            this.$router.replace({ path: "/mine/member-center" });
          },
          //提问
          askAQuestion(){
            if(this.message==""){
              tool.toast("提问信息不能为空")
              return
            }
            let fileStr=[];
            for (var file of this.askFileList) {
              fileStr.push(file.fileName+","+file.fileId)
            }
            var files=fileStr.join(";");
            this.$api.post('/ah/s0/chat/addProjectChat',
              { userid: tool.getuser(),
                projid: this.projId, files: files,
                message: this.message,
                status : this.askChecked ? 1 : 0,
              }).then(r => {
              if(r.code===200){
                tool.toast("提问成功");
                //隐藏提示框
                this.askPop = false;
              }
            });
          },
          //上传文件
          UploadFile(e, tag) {
            tool.toast("正在上传文件....");
            var files = e.target.files || e.dataTransfer.files;
            if (!files.length)
              return;
            var imgFormData = new FormData();
            imgFormData.append('upload', files[0]);
            let config = {headers: {'Content-Type': 'multipart/form-data'}};
            //上传文件
            this.axios.post(tool.domind() + '/gateway/file/upload', imgFormData, config)
              .then(res => {
                if (res.data.code === 200) {
                  let temp = res.data.data[0]
                  if (tag===1) {
                    this.askFileList.push(temp);
                  }
                }
              });
          },
          //删除文件
          deleteAskFile(msg){
            let tag=msg.tag;
            let index=msg.index;
            //删除文件
            if(tag===1){
              this.askFileList.splice(index,1)
            }
          },
          seeDetail(id,time){
            if(!this.power){
              this.$router.push({path:'/project/project-detail/progress-detail',query: {'projId': id,'createTime':time}});
              this.authorityShow = false;
            }else{
              this.authorityShow = true;
            }

          }

        },
        filters: {},
        computed: {},
        created() {
          this.projId = this.$route.query.projId;
          let param = {
            projId:this.projId
          };
          this.$api
            .post("/ah/s0/getProjectProgress",param)
            .then(res => {
              if (res.code === 200) {
                this.power = false;
                this.progressList = res.data;
              }else if(res.code === 403){
                this.power = true;
              }
            });
        },
        mounted() {},
        destroyed() {
        }
    }
</script>

<style lang="scss" scoped>
    @import '~@/assets/scss/reset.scss';
    @import '~@/assets/scss/mixin.scss';
    @import '~@/assets/scss/const.scss';
  .project-progress{
    text-align: left;
    .progress-warp{
      .reminder{
        padding: 0 10px;
        height:28px;
        overflow: hidden;
        line-height:28px;
        background: #f5f5f5;
        margin:15px 0 ;
        color:#528de8;
        font-size: 10px;
      }
      .project{
        position: relative;
        height:71px;
        padding: 0 10px 10px 129px;
        border-bottom: 1px dashed #dedede;
        .img{
          width: 110px;
          height: 71px;
          position: absolute;
          top: 0;
          left: 10px;
          img{
            width: 100%;
            height: 100%;
          }
        }
        .main-news{
          h2{
            font-size: 14px;
            color: #333;
            height: 38px;
            line-height: 19px;
            overflow: hidden;
            font-weight: normal;
          }
          .small-btn{
            position: absolute;
            right:10px;
            bottom:10px;
          }

        }
      }
      .timer-shaft{
        padding:10px 10px 22px 55px;
        .timer-warp{
          padding-left: 45px;
          border-left: 1px dashed #dedede;
          .timer-none{
            height:190px;
            width:80%;
            img{
              position: relative;
              left: -100px;
            }
          }
          li{
            position: relative;
            border-bottom: 1px dashed #dedede;
            padding: 10px 0 15px 0px;
            margin-left: 5px;
            &:first-child{
              padding-top: 0;
              em{
                top:2px;
              }
              .time{
                top:-2px;
              }
            }
            &:last-child{
              border-bottom: none;
              padding-bottom: 0;
            }
            .time{
              position: absolute;
              left: -95px;
              top:7px;
              width:90px;
              height:20px;
              line-height: 20px;
              border: 2px solid #bbb;
              border-radius: 20px;
              background: #fff;
              font-size: 12px;
              text-align: center;

            }
            h2{
              font-size: 14px;
              color:#333;
              height:20px;
              line-height: 20px;
              width: 210px;
              text-overflow:ellipsis;
              white-space : nowrap;
              overflow : hidden;
              span{
                margin: 0 5px;
              }
            }
            em{
              position: absolute;
              right:0;
              top:12px;
              font-size: 12px;
              color:#666;

            }
            .img{
              margin-top: 15px;
              margin-right: 4.5%;
              width: 28%;
              height:47px;
              float:left;
              img{
                width:100%;
                height:100%;

              }
            }
          }
        }
      }
      .ask-pop{
        padding: 0;
        .pop-up{
          width:100%;
          background: #fcfcfc;
          padding: 0 15px;
          box-sizing: border-box;
          position: fixed;
          bottom: 0;
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
      }
    }
    .progress-bg{
      width:100%;
      height:190px;
      @include bg-image('../../img/progress-bg');
      background-size: 100% 190px;
    }

  }

</style>
