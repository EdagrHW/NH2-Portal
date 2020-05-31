<template>
  <div style="padding-bottom: 20px;">
    <!--标题-->
    <div class="examples-head">网站开发</div>
    <!--样例展示-->
    <div class="examples">
      <div class="example-first">
        <div class="img">
          <img src="../../../static/images/web-program-first.png">
        </div>
        <div class="btn"
             @click="goWebProgram">
          立即查看
        </div>
      </div>
      <div class="example">
        <div class="img">
          <img src="../../../static/images/web-program-shop.png"
               alt="">
        </div>
        <div class="desc">
          电商购物行业官网
        </div>
        <div class="bottom">
          <div class="price">
            <span>￥</span>
            <span>7000</span>
            <span>起</span>
          </div>
          <div class="car"><i class="el-icon-shopping-cart-1"></i></div>
        </div>
      </div>
      <div class="example">
        <div class="img">
          <img src="../../../static/images/web-program-edu.png"
               alt="">
        </div>
        <div class="desc">
          教育行业官网
        </div>
        <div class="bottom">
          <div class="price">
            <span>￥</span>
            <span>4999</span>
            <span>起</span>
          </div>
          <div class="car"><i class="el-icon-shopping-cart-1"></i></div>
        </div>
      </div>
      <div class="example">
        <div class="img">
          <img src="../../../static/images/web-program-d.png"
               alt="">
        </div>
        <div class="desc">
          软件定制化开发服务
        </div>
        <div class="bottom">
          <div class="price">
            <span>￥</span>
            <span>可议价</span>
            <!-- <span>起</span> -->
          </div>
          <div class="car">
            <i class="el-icon-shopping-cart-1"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goWebProgram () {
      this.$router.push('/webprogram')
    }
  }
}
</script>

<style lang="scss" scoped>
.examples-head {
  font-size: 20px;
  font-weight: 700;
  color: #333;
}
.examples {
  margin-top: 20px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  .example-first {
    width: 230px;
    height: 300px;
    position: relative;
    img {
      width: 230px;
      height: 300px;
    }
    .btn {
      position: absolute;
      background: #ff9000;
      width: 130px;
      height: 40px;
      line-height: 40px;
      text-align: center;
      bottom: 40px;
      left: 50px;
      border-radius: 5px;
      box-shadow: 1px 1px 1px 0.5px rgba(0, 0, 0, 0.2);
      cursor: pointer;
    }
    .btn:hover {
      transition: all 0.1s;
      transform: /* translateY(-1px) */ scale(1.05);
    }
  }
  .example-first:hover {
    transform: translateY(-2px);
  }
  .example {
    width: 225px;
    height: 300px;
    img {
      width: 230px;
      height: 230px;
      //border: 1px solid red;
    }
    .desc {
      font-size: 16px;
      color: #000;
      font-weight: 700;
      line-height: 40px;
      max-width: 100%;
      overflow: hidden;
      padding-left: 10px;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .bottom {
      height: 50px;
      width: 100%;
      position: relative;
      .price {
        color: #ea1920;
        line-height: 14px;
        margin-top: 10px;
        font-size: 14px;
        position: absolute;
        left: 10px;
        :nth-child(2) {
          font-size: 16px;
        }
        :nth-child(3) {
          font-size: 12px;
          color: #999999;
        }
      }
      .car {
        position: absolute;
        right: 10px;
        margin-top: 10px;
        .el-icon-shopping-cart-1{
          font-size: 20px;
          font-weight: 700;
          color: #ea1920;
        }
      }
    }
  }
  .example:hover {
    transform: translateY(-1px);
    cursor: pointer;
  }
}
</style>
