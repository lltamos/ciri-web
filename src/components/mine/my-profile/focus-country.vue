<template>
  <div class="change-country">
    <header-bar :text="headTitle" @back="back"></header-bar>
    <cross-line style="margin-top: 44px;"></cross-line>
    <div class="main">
      <div class="change">
        <div class="fl">{{title}}</div>
        <div class="fr">
          <i :class="showCountry" @click="Country"></i>
        </div>
      </div>
      <div class="country-warp" v-show="show">
        <div class="country">
          <div class="fl item" @click.prevent="checkCountry($event,item)" v-for="item in country" :key="item">
            <i class="icon-check" >
              <input type="checkbox" name="country" :value="item.id" :id="item.id" v-model="isread"/>
            </i>
            <span>{{item.name.substr(0,8)}}</span>
          </div>
        </div>
        <div class="btn focus-save">保存</div>
      </div>
    </div>
  </div>
</template>

<script>
  import HeaderBar from '@/components/base/header-bar/header-bar'
  import CrossLine from '@/components/base/cross-line/cross-line'
  import tool from '@/api/tool'
  export default {
    components: {
      HeaderBar,
      CrossLine,
      tool
    },
    data() {
      return {
        headTitle: '',
        title: '',
        showCountry: 'show-country',
        country: [{name:'中国',id:"11156"},{name:'日本',id:"11392"},{name:'伊朗',id:"15364"},{name:'巴西',id:"73076"}],
        show: true,
        iconChecked: 'icon-checked',
        isread:false,
        unread:true
      }
    },
    methods: {
      back() {
        this.$router.push({
          path: this.$router.go(-1)
        })
      },
      Country() {
        this.show = !this.show
        if (this.show) {
          this.showCountry = 'show-country';
        } else {
          this.showCountry = 'hide-country';
        }
      },
      checkCountry(e,item) {
        let element = e.currentTarget;
        if (element.classList.contains('active')) {
          element.classList.remove('active');
        } else {
          element.classList.add('active')
        }
        console.log(e.currentTarget);
      }

    },
    created() {
      //判断标题
      let flag = this.$route.params.id;
      let value = this.$route.params.value;
      var c=value.split(',');
      console.log(c);
      let  path='';
      if (flag =="careCountries") {
        this.headTitle = '关注国家';
        this.title = '请选择国家';
        path ="getAllCountry";
      } else if (flag == 'careIndustries') {
        this.headTitle = '关注行业';
        this.title = '请选择行业';
        path ="getAllIndustry";
      }
      //查询所有的国家信息
      this.axios
        .get(tool.domind() + "/gateway/app/"+path)
        .then(res => {
          if (res.data.code === 200) {
            this.country = res.data.data;
            for ( var i = 0; i <c.length; i++){
              console.log(c[i]);
            }
          }
        });
    }
  }
</script>

<style lang="scss" scoped>
  @import '~@/assets/scss/mixin.scss';
  @import '~@/assets/scss/const.scss';

  .main {
    margin: 0 10px;
    background: #fff;
    text-align: left;
    border: 1px solid #dedede;
    border-bottom: none;
    color: #333;

  .change {
    overflow: hidden;
    height: 35px;
    line-height: 35px;
    border-bottom: 1px solid #dedede;
    font-size: 13px;
    padding: 0 15px;

  i {
    display: block;
    float: right;
    width: 18px;
    height: 35px;
    background-repeat: no-repeat;
    background-size: 18px auto;
    background-position: center;

  }

  .show-country {
  @include bg-image("../img/show-country");
  }

  .hide-country {
  @include bg-image("../img/hide-country");
  }

  }

  .country {
    line-height: 40px;
    font-size: 14px;
    overflow: hidden;
  .item {
    width: 50%;
    height: 40px;
    line-height: 40px;
    border-bottom: 1px dashed #dedede;

  i {
    position: relative;
    display: inline-block;
    width: 12px;
    height: 40px;
    background-repeat: no-repeat;
    background-size: 12px auto;
    background-position: center;
    vertical-align: middle;
    margin-left: 15px;

  input[type="checkbox"] {
    position: absolute;
    top: 14px;
    left: 0;
    opacity: 0;
  }

  }
  .icon-check {
  @include bg-image("../img/check");
    margin-right: 10px;

  }

  span {
    height: 40px;
    line-height: 40px;
    display: inline-block;
  }

  }
  .active {

  .icon-check {
  @include bg-image("../img/checked");
    margin-right: 10px;
  }

  }
  }
  .focus-save{
    width:150px;
    margin: 65px auto;
  }
  }
</style>
