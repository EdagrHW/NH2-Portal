<template>
  <div class="home-warp">
    <div class=home-ad>
      IT服务人力外包
    </div>
    <el-row type="flex"
            style="margin-top: 35px;">
      <!--内容左侧导航栏-->
      <el-col style="width: 300px;">
        <div class="menu-head">IT软件服务</div>
        <el-menu default-active="2"
                 class="el-menu-vertical-demo"
                 style="border-bottom: 0.5px solid #ccc;border-left: 0.5px solid #ccc;"
                 :unique-opened="true"
                 @open="handleOpen"
                 >
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-monitor"></i>
              <span>网站开发</span>
            </template>
            <el-menu-item-group class="menu-item">
              <div class="item-tip">
                预算范围
              </div>
              <div class="item-input">
                <el-input />
                <i class="el-icon-minus"></i>
                <el-input />
              </div>
              <div class="item-btn">
                <el-button>重置</el-button>
              </div>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <img src="../../static/images/minProgram.png"
                   style="width:24px;height:24px;">
              <span style="margin-left: 5px;">微信开发</span>
            </template>
            <el-menu-item-group class="menu-item">
              <div class="item-tip">
                预算范围
              </div>
              <div class="item-input">
                <el-input />
                <i class="el-icon-minus"></i>
                <el-input />
              </div>
              <div class="item-btn">
                <el-button>重置</el-button>
              </div>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">
              <img src="../../static/images/app.png"
                   style="width:24px;height:24px;">
              <span style="margin-left: 5px;">APP开发</span>
            </template>
            <el-menu-item-group class="menu-item">
              <div class="item-tip">
                预算范围
              </div>
              <div class="item-input">
                <el-input />
                <i class="el-icon-minus"></i>
                <el-input />
              </div>
              <div class="item-btn">
                <el-button>重置</el-button>
              </div>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-col>
      <!--内容右侧展示栏-->
      <el-col style="margin-left: 20px;">
        <min-program v-show="type==='minprogram'"></min-program>
        <app-program v-show="type==='appprogram'"></app-program>
        <web-program v-show="type==='webprogram'"></web-program>
      </el-col>
    </el-row>
  </div>

</template>
<script>
import MinProgram from './components/MinProgram'
import AppProgram from './components/AppProgram'
import WebProgram from './components/WebProgram'
export default {
  components: { MinProgram, AppProgram, WebProgram },
  data () {
    return {
      type: 'minprogram'
    }
  },
  methods: {
    handleOpen (key, keyPath) {
      switch (key) {
        case '1':
          this.type = 'webprogram'
          break
        case '2':
          this.type = 'minprogram'
          break
        case '3':
          this.type = 'appprogram'
          break
        default:
          break
      }
    }
    // },
    // handleClose (key, keyPath) {
    //   console.log(key, keyPath)
    // }
  }
}
</script>

<style lang="scss" scoped>
.home-warp {
  width: 1190px;
  margin: 0 auto;
}
.home-ad {
  width: 100%;
  height: 450px;
  text-align: center;
  background: #ccc;
}
.menu-head {
  color: #fff;
  background: #ee2a1a;
  font-size: 14px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  border: 1px solid #eee;
}
.menu-item {
  border-left: 1px solid #ccc;
  padding-left: 20px;
  .item-tip {
    color: #999;
    padding-bottom: 10px;
  }
  .item-input {
    padding: 5px;
    .el-input {
      width: 75px;
    }
  }
  .item-btn {
    margin: 5px 10px 0px 65px;
  }
}
</style>
<style>
.el-submenu__icon-arrow {
  font-size: 20px;
}
.el-icon-arrow-down {
  font-size: 20px;
}
</style>
