<template>
  <div>
    <!--标题-->
    <div class="examples-head">APP开发</div>
    <!--样例展示-->
    <div class="examples">
      <div class="example">
        <div class="img">
          <img src="../../../static/images/app-program-1.png"
               alt="">
        </div>
        <div class="desc">
          在线问诊APP
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
      <div class="example">
        <div class="img">
          <img src="../../../static/images/app-program-2.png"
               alt="">
        </div>
        <div class="desc">
          知识付费直播系统
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
      <div class="example">
        <div class="img">
          <img src="../../../static/images/app-program-3.png"
               alt="">
        </div>
        <div class="desc">
          学习考试系统
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
      <div class="example">
        <div class="img">
          <img src="../../../static/images/app-program-4.png"
               alt="">
        </div>
        <div class="desc">
          食品安全溯源系统
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
    border: 1px solid red;
    .btn {
      position: absolute;
      background: #fecc11;
      width: 130px;
      height: 40px;
      line-height: 40px;
      text-align: center;
      bottom: 50px;
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
