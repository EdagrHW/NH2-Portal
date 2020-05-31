<template>
  <div class="register-body">
    <div class="register-wrap">
      <div class="head">账号密码登录</div>
      <div class="content">
        <div>
          <el-input placeholder="请输入手机号"
                    v-model="phoneNumber">
            <template slot="prepend">
              <i class="el-icon-mobile-phone"></i>
            </template>
          </el-input>
        </div>
        <div>
          <el-input placeholder="请输入密码"
                    v-model="password">
            <template slot="prepend">
              <i class="el-icon-lock"></i>
            </template>
          </el-input>
        </div>
        <div class="middle-tip">
          <span class="forget-pwd">忘记密码</span>
          <el-checkbox v-model="checked">自动登录</el-checkbox>
        </div>
        <div class="register-btn">
          <el-button>登录</el-button>
        </div>
      </div>
      <div class="btn"></div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      phoneNumber: '',
      password: '',
      checked: false
    }
  },
  methods: {
    onSubmit () {
      console.log('submit!')
    }
  }
}
</script>
<style>
.el-checkbox__input.is-checked .el-checkbox__inner,
.el-checkbox__input.is-indeterminate .el-checkbox__inner {
  background-color: #666;
  border-color: #666;
}
.el-checkbox__input.is-checked + .el-checkbox__label {
  color: #666;
}
.el-checkbox.is-bordered.is-checked {
  border-color: #666;
}
.el-checkbox__input.is-focus .el-checkbox__inner {
  border-color: #666;
}
</style>
<style lang="scss" scoped>
.middle-tip{
  line-height: 40px;
  height: 40px;
  .forget-pwd {
    float: right;
    font-size: 12px;
  }
  .forget-pwd:hover {
    color: #ff9400;
    text-decoration: underline;
  }
  .el-checkbox{
    float: left;
  }
}

.register-body {
  position: relative;
  width: 100%;
  height: 690px;
  background: #ccc;
  .head {
    text-align: center;
    height: 60px;
    line-height: 60px;
    border-bottom: 2px solid #f60;
    margin: 0 25px 16px;
    color: #333;
  }
  .register-wrap {
    // border: 1px solid red;
    position: absolute;
    width: 420px;
    height: 400px;
    top: 40px;
    right: 40px;
    background: #fff;
  }
  .content {
    width: 370px;
    padding: 10px;
    margin: 0 auto;
    div {
      margin-top: 10px;
    }
    .register-btn {
      width: 100%;
      margin: 0 auto;
      margin-top: 20px;
      .el-button {
        color: #fff;
        font-size: 16px;
        font-weight: 700;
        width: 100%;
        text-align: center;
        background: linear-gradient(90deg, #ff9000, #f60);
      }
    }
  }
}
</style>
