<template>
  <div>
    <!--顶部导航栏-->
    <div class="nav-menu">
      <div class="top-warp">
        <el-row class="top">
          <el-col class="home-index" >
            <i class="el-icon-s-home" /><span @click="goHome">叮当猫首页</span>
          </el-col>
          <el-col class="login-info">
            <router-link to="/login" tag="span">请登录</router-link>
          </el-col>
          <el-col class="register-info">
            <router-link to="/register" tag="span">免费注册</router-link>
          </el-col>
          <el-col class="user-center">
            <el-dropdown>
              <span class="el-dropdown-link mine">
                我的叮当猫<i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>我的订单</el-dropdown-item>
                <el-dropdown-item>我的收藏</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </el-col>
          <el-col class="customer-center">
            <el-dropdown>
              <span class="el-dropdown-link">
                客服中心<i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>规则中心</el-dropdown-item>
                <el-dropdown-item>雇主帮主中心</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </el-col>
        </el-row>
      </div>
    </div>
    <!--顶部搜索栏-->
    <div class="search-bar">
        <div class="search-img">
          <img src="../../static/images/timg.png" width="100%" height="100%" />
        </div>
        <div class="search-head">
          <el-input class="search-input input-with-select">
            <el-select v-model="service" style="width:100px;" slot="prepend" placeholder="服务">
              <el-option label="网站开发" value="web"></el-option>
              <el-option label="小程序开发" value="wechat"></el-option>
            </el-select>
            <el-button style="background: #ee2a1a;border-radius:0px;color:#fff;" slot="append" icon="el-icon-search">搜索</el-button>
          </el-input>
          <div>
            <el-badge :value="3" class="item">
              <el-button  icon="el-icon-shopping-cart-1" style="color: #ee2a1a;">购物车</el-button>
            </el-badge>
          </div>
        </div>

    </div>
  </div>

</template>

<script>
export default {
  data () {
    return {
      service: ''
    }
  },
  methods: {
    goHome () {
      this.$router.push('/')
    }
  }
}
</script>
<style scoped>
.el-dropdown-link {
  font-size: 12px;
  cursor: pointer;
}
.el-icon-arrow-down {
  font-size: 12px;
}
.mine {
  color: #ff6900;
}
.el-icon-s-home {
  color: #ff6900;
  font-size: 16px;
}
</style>
<style lang="scss" scoped>
.nav-menu {
  line-height: 36px;
  height: 36px;
  border-bottom: 1px solid #e7e7e7;
  background: #fbfbfb;
  font-size: 12px;
  .top-warp {
    width: 1190px;
    margin: 0 auto;
  }
  .top {
    .el-col {
      cursor: pointer;
      margin-right: 10px;
      // border: 1px solid red;
    }
    width: 100%;
    margin: 0 auto;
    .home-index {
      width: 100px;
    }
    .login-info {
      margin-left: 670px;
      width: 50px;
    }
    .register-info {
      width: 60px;
      color: #ff6900;
    }
    .user-center {
      width: 100px;
    }
    .customer-center {
      width: 80px;
    }
    .el-col:hover {
      color: #ff6900;
    }
  }
}
.search-bar {
  display: flex;
  width: 1190px;
  box-sizing: border-box;
  padding-bottom: 10px;
  margin: 0 auto;
  .search-img{
    height: 100px;
    width: 100px;
  }
  .search-head {
    display: flex;
    width: 560px;
    line-height: 36px;
    justify-content: flex-end;
    align-items: center;
    margin-left: 420px;
    .search-input {
      width: 100%;
      line-height: 36px;
      border: 0;
      color: #444;
    }
  }
}
</style>
