<template>
  <div class="register-body">
    <div class="register-wrap">
      <div class="head">手机注册</div>
      <div class="content">
        <div>
          <el-input placeholder="请输入手机号"
                    v-model="input1">
            <template slot="prepend">
              <i class="el-icon-mobile-phone"></i>
            </template>
          </el-input>
        </div>
        <div class="verification-code">
          <el-input placeholder="请输入6位验证码"
                    v-model="input1">
            <template slot="prepend">
              <i class="el-icon-key"></i>
            </template>
          </el-input>
          <el-button>获取动态验证码</el-button>
        </div>
        <div>
          <el-input placeholder="请输入密码"
                    v-model="input1">
            <template slot="prepend">
              <i class="el-icon-lock"></i>
            </template>
          </el-input>
        </div>
        <div class="register-btn">
          <el-button>注册</el-button>
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
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      }
    }
  },
  methods: {
    onSubmit () {
      console.log('submit!')
    }
  }
}
</script>
<style lang="scss" scoped>
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
    .verification-code {
      .el-input {
        width: 225px;
      }
      .el-button {
        color: #fff;
        font-size: 14px;
        font-weight: 700;
        background-color: #ff9000;
        border: 1px solid #ff9000;
      }
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
