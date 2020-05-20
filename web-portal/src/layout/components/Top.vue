<template>
  <div>
    <!--顶部导航栏-->
    <div class="nav-menu">
      <div class="top-warp">
        <el-row class="top">
          <el-col class="home-index">
            <i class="el-icon-s-home" /><span>叮当猫首页</span>
          </el-col>
          <el-col class="login-info">
            <span>请登录</span>
          </el-col>
          <el-col class="register-info">
            <span>免费注册</span>
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
      <el-row>
        <div class="search-head">
          <el-input class="search-input">
            <el-button style="background: #ee2a1a;border-radius:0px;color:#fff;" slot="append" icon="el-icon-search">搜索</el-button>
          </el-input>
        </div>
        <div class="shop-car">
          <el-badge :value="3" class="item">
          <el-button  icon="el-icon-shopping-cart-1">购物车</el-button>
        </el-badge>
        </div>

      </el-row>

    </div>
  </div>

</template>

<script>
export default {
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
  position: relative;
  padding-top: 30px;
  padding-bottom: 20px;
  box-sizing: border-box;
  .el-row{
    width: 100%;
    height: 40px;
  }
  .search-head {
    float: left;
    width: 440px;
    margin-left: 540px;
    position: relative;
    .search-input {
      width: 100%;
      line-height: 36px;
      border: 0;
      color: #444;
    }
  }
  .shop-car{
    float: left;
      position: relative;
      margin-left: 1000px;
      margin-top: -50px;
      height: 40px;
      line-height: 50px;
    }
}
</style>
