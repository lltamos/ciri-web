<template>
  <div class="participate">
    <div class="remind">
      请完善投资意向，并上传意向函扫描件，<br/>项目发起人将第一时间与您联系。
    </div>
    <cross-line></cross-line>
    <div class="invest-radio">
      <div class="item" :class="{active:radioActive==1}" @click="lead">
        <i class="icon-radio">
          <input type="radio" name="" />
        </i>
        <span>我要领投</span>
      </div>
      <div class="item" :class="{active:radioActive==2}" @click="follow">
        <i class="icon-radio">
          <input type="radio" name="" />
        </i>
        <span>我要跟投</span>
      </div>
    </div>

    <div class="way">
      <div class="partipate-title">【参与合投方式】</div>
      <div class="select-wrap">
        <div class="item" @click.prevent="check($event)">
          <i class="icon-check">
            <input type="checkbox" name="" />
          </i>
          <span>资金入股</span>
        </div>
        <div class="item" @click.prevent="check($event)">
          <i class="icon-check">
            <input type="checkbox" name="" />
          </i>
          <span>部分投资+EPC</span>
        </div>
        <div class="item" @click.prevent="check($event)">
          <i class="icon-check">
            <input type="checkbox" name="" />
          </i>
          <span>EPC+部分垫资</span>
        </div>
        <div class="item" @click.prevent="check($event)">
          <i class="icon-check">
            <input type="checkbox" name="" />
          </i>
          <span>设备入（参）股</span>
        </div>
        <div class="item" @click.prevent="check($event)">
          <i class="icon-check">
            <input type="checkbox" name="" />
          </i>
          <span>设备垫资</span>
        </div>
        <div class="item" @click.prevent="check($event)">
          <i class="icon-check">
            <input type="checkbox" name="" />
          </i>
          <span>融资租赁</span>
        </div>
        <div class="item" @click.prevent="check($event)">
          <i class="icon-check">
            <input type="checkbox" name="" />
          </i>
          <span>基金LP入资</span>
        </div>
        <div class="item" @click.prevent="check($event)">
          <i class="icon-check">
            <input type="checkbox" name="" />
          </i>
          <span>其它</span>
        </div>


      </div>

    </div>
    <div class="money">
      <div class="partipate-title">【预期投资金额】</div>
      <div class="item-remark">(若您选择非现金方式参与和投，请估算其在该项目中的现金价值)</div>
      <div class="range">
        <span>-</span>
        <input type="text" class="range-input"/>
        <span>+</span>
      </div>
    </div>
    <div class="company">
      <div class="partipate-title">【参与合投企业】<span class="item-remark">(请选择投资意向函中的主体企业)</span></div>
      <div class="select-wrap">
        <!--TODO:这边回来数据遍历一下动态天津active样式，当前选中的添加，其它的去掉active-->
        <div class="item" :class="{active:radioActive==1}" @click="lead">
          <i class="icon-radio">
            <input type="radio" name="" />
          </i>
          <span>北京天土国际经济技术合作有限公司</span>
        </div>

      </div>
    </div>
    <cross-line></cross-line>
    <div class="intent-letter">
      <div class="partipate-title">【投资意向函】<span class="item-remark">(选填)</span></div>
      <div class="language-wrap">
        <div class="language-div">
          <div class="lag-radio">
            <div class="item" :class="{active:intentActive==1}" @click="intentChinese">
              <i class="icon-radio">
                <input type="radio" name="" />
              </i>
              <span>中文</span>
            </div>
            <div class="item" :class="{active:intentActive==2}" @click="intentEnglish">
              <i class="icon-radio">
                <input type="radio" name="" />
              </i>
              <span>英文</span>
            </div>
          </div>
          <div class="item-remark">(填写后将优先受邀参与项目投资策划会)</div>
        </div>
        <div class="adv-content chinese clearfix" v-show="seeIntent">
          <div class="word">
            中文中文中文中文中文中文中文中文
          </div>
          <div class="read-more" @click="readMore" v-show="moreShow">
            <span v-text="moreText">展开</span>
            <i :class="iconMore"></i>
          </div>
        </div>
        <div class="adv-content english" v-show="!seeIntent">
          <div class="word">
            aaaaaaaaaaaaaaaaaaaaaaaaaaaa
          </div>

        </div>
      </div>

      <div class="upload-wrap">
        <div class="up-title clearfix">
          <div class="up-word fl">投资意向函上传：</div>
          <div class="upload fr">
            <span class="upload-file">上传</span>
            <input type="file" class="fill-input" @change="UploadFile($event,1)">
          </div>
        </div>
        <div class="item-remark">(请上传投资意向函扫描件，支持图片和PDF文件)</div>
        <div class="file-warp">
          <FileDelete v-for="(file,index) in askFileList"  :key="index"
                      :file="file" :index="index" :tag="1"
                      @delete="deleteAskFile"></FileDelete>
        </div>
      </div>
    </div>

    <cross-line></cross-line>
    <div class="advantage">
      <div class="partipate-title">【企业优势】<span class="item-remark">(选填)</span></div>
      <div class="language-wrap">
        <div class="language-div">
          <div class="lag-radio">
            <div class="item" :class="{active:advActive==1}" @click="advchinese">
              <i class="icon-radio">
                <input type="radio" name="" />
              </i>
              <span>中文</span>
            </div>
            <div class="item" :class="{active:advActive==2}" @click="advEnglish">
              <i class="icon-radio">
                <input type="radio" name="" />
              </i>
              <span>英文</span>
            </div>
          </div>
          <div class="item-remark">(填写后将优先受邀参与项目投资策划会)</div>
        </div>
        <div class="adv-content chinese clearfix" v-show="seeLanguage">
          <div class="word">
            中文中文中文中文中文中文中文中文
          </div>
          <div class="read-more" @click="readMore" v-show="moreShow">
            <span v-text="moreText">展开</span>
            <i :class="iconMore"></i>
          </div>
        </div>
        <div class="adv-content english" v-show="!seeLanguage">
          <div class="word">
            aaaaaaaaaaaaaaaaaaaaaaaaa
          </div>

        </div>
      </div>

      <div class="upload-wrap">
        <div class="up-title clearfix">
          <div class="up-word fl">附件上传：</div>
          <div class="upload fr">
            <span class="upload-file">上传</span>
            <input type="file" class="fill-input" @change="UploadFile($event,1)">
          </div>
        </div>
        <div class="item-remark">(请上传投资企业资信相关资料)</div>
        <div class="file-warp">
          <FileDelete v-for="(file,index) in askFileList"  :key="index"
                      :file="file" :index="index" :tag="1"
                      @delete="deleteAskFile"></FileDelete>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import CrossLine from '@/components/base/cross-line/cross-line'
  import FileDelete from '@/components/base/file-delete/file-delete'
  import tool from "../../../../../api/tool"
  export default {
    components: {
      CrossLine,
      FileDelete
    },
    data() {
      return {
        radioActive:1,
        advActive:1,
        intentActive: 1,
        seeLanguage: true,
        seeIntent:true,
        moreShow:true,
        iconMore: 'icon-more',
        moreText:'展开',
        askFileList:[],
      }
    },
    props: {},
    watch: {},
    methods: {
      lead(){
        this.radioActive = 1;
      },
      follow(){
        this.radioActive = 2;
      },
      intentChinese(){
        this.intentActive = 1;
        this.seeIntent = true;
      },
      intentEnglish(){
        this.intentActive = 2;
        this.seeIntent = false;
      },
      advchinese(){
        this.advActive = 1;
        this.seeLanguage = true;
      },
      advEnglish(){
        this.advActive = 2;
        this.seeLanguage = false;
      },
      check(e){
        let element = e.currentTarget;
        if (element.classList.contains('active')) {
          element.classList.remove('active');
        } else {
          element.classList.add('active');
        }
      },
      readMore(){
        if (this.moreText == '展开') {
          this.moreText = '收起'
          this.iconMore = 'pack-up'
          this.article = 'article active'
        } else {
          this.moreText = '展开';
          this.iconMore = 'icon-more'
          this.article = 'article'
        }
      },
      UploadFile(e,tag){
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
            console.log(res);
            e.target.value='';
            if (res.data.code === 200) {
              let temp = res.data.data[0]
              this.askFileList.push(temp);
            }
          });
      },
      deleteAskFile(msg){
        let tag=msg.tag;
        let index=msg.index;
        //删除文件
        this.askFileList.splice(index,1)
      }
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
  .participate{
    text-align: left;
    .remind{
      padding: 7px 17px;
      height:30px;
      overflow: hidden;
      line-height: 16px;
      background: #f5f5f5;
      margin: 15px 10px 10px;
      color: #528de8;
      font-size: 10px;
      border-radius: 2px;
      text-align: center;
    }
    .item-remark{
      font-size: 11px;
      color: #666;
      height: 26px;
      line-height: 26px;
    }
    .partipate-title{
      font-size: 15px;
      color: #333;
      margin-left: -5px;
    }
    .item {
      height: 40px;
      line-height: 40px;
      margin-right: 20px;
      i {
        position: relative;
        display: inline-block;
        width: 12px;
        height: 40px;
        background-repeat: no-repeat;
        background-size: 12px auto;
        background-position: center;
        vertical-align: middle;
        input[type="radio"],input[type="checkbox"] {
          position: absolute;
          top: 14px;
          left: 0;
          opacity: 0;
        }

      }
      .icon-check {
        @include bg-image("../../../img/check");
        margin-right: 10px;

      }
      .icon-radio {
        @include bg-image("../../../img/radio");
        margin-right: 10px;

      }

      span {
        height: 45px;
        line-height: 45px;
        display: inline-block;
        font-size: 15px;
      }

    }
    .active {
      .icon-check {
        @include bg-image("../../../img/checked");
        margin-right: 10px;
      }
      .icon-radio {
        @include bg-image("../../../img/radioed");
        margin-right: 10px;
      }

    }
    .invest-radio{
      text-align: left;
      display: flex;
      justify-content: left;
      border-bottom: 1px solid #dedede;
      margin: 0px 10px;
    }
    .way{
      color: #333;
      padding: 15px 0px;
      border-bottom: 1px solid #dedede;
      margin: 0px 10px;
      .item{
        margin-left: 33px;
        font-size: 13px;
        height: 30px;
        line-height: 30px;
        span{
          height: 30px;
          line-height: 30px;
          font-size: 13px;
        }
      }

    }
    .money{
      color: #333;
      padding: 15px 0px;
      border-bottom: 1px solid #dedede;
      margin: 0px 10px;
      .range{
        margin: 15px 0px 0px 45px;
        font-size: 13px;
        color: #333;
        span,input{
          display: inline-block;
        }
      }
      .range-input{
        width: 45px;
        height: 20px;
        background-color: #dedede;
        margin: 0px 10px;
        border: 1px solid #dedede;
      }

    }
    .company{
      color: #333;
      padding: 15px 0px;
      margin: 0px 10px;
      .item{
        margin-left: 33px;
        font-size: 13px;
        height: 30px;
        line-height: 30px;
        span{
          height: 30px;
          line-height: 30px;
          font-size: 13px;
        }
      }

    }
    .upload-wrap{
      .up-title{
        margin-top: 15px;
        .up-word{
          font-size: 13px;
        }
        .upload{
          font-size: 13px;
          color: #3f83e6;
          position: relative;
          .upload-file{
            font-size: 12px;
            color:#528de8;
            display: inline-block;
            height:27px;
            line-height: 27px;
            position: relative;
            right: -100px;
          }
          .fill-input{
            height:27px;
            opacity: 0;
            width: 100px;
          }

        }

      }
    }
    .intent-letter{
      color: #333;
      padding: 15px 0px;
      margin: 0px 10px;
      .language-wrap{
        font-size: 13px;
        .language-div{
          border-top: 1px solid #dedede;
          .item-remark{

          }
          .lag-radio{
            text-align: left;
            display: flex;
            justify-content: left;
            .item{
              span{
                font-size: 13px;
              }
            }
          }
        }

      }
      .adv-content{
        border: 1px solid #dedede;
        border-radius: 3px;
        padding:10px;
        .word{
          margin-top: 10px;
          font-size: 13px;
          line-height: 22px;
          color: #666;
          text-indent: 2em;
          max-height: 200px;
          overflow: hidden;
        }
        .read-more {
          font-size: 13px;
          color: #3f80e9;
          line-height: 1;
          text-align: center;
          float: right;
          margin-top: 10px;
          padding-right: 10px;

          i {
            display: inline-block;
            width: 10px;
            height: 10px;
            background-size: 10px auto;
          }

          i.icon-more {
            @include bg-image("../../../../news/img/more");
          }

          i.pack-up {
            @include bg-image("../../../img/pack-up");
          }

        }
      }

    }
    .advantage{
      color: #333;
      padding: 15px 0px;
      border-bottom: 1px solid #dedede;
      margin: 0px 10px;
      .language-wrap{
        font-size: 13px;
        .language-div{
          border-top: 1px solid #dedede;
          .item-remark{

          }
          .lag-radio{
            text-align: left;
            display: flex;
            justify-content: left;
            .item{
              span{
                font-size: 13px;
              }
            }
          }
        }
        .adv-content{
          border: 1px solid #dedede;
          border-radius: 3px;
          padding: 10px;
        }
      }
    }

  }
</style>
