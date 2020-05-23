<template>
  <div>
    <!--标题-->
    <div class="examples-head">APP开发</div>
    <!--样例展示-->
    <div class="examples">
      <div class="example">
        <div class="img">
          图片
        </div>
        <div class="desc">
          描述
        </div>
        <div class="bottom">
          <div class="price">5000起</div>
          <div class="car">购物车</div>
        </div>
      </div>
      <div class="example">
        <div class="img">
          图片
        </div>
        <div class="desc">
          描述
        </div>
        <div class="bottom">
          <div class="price">5000起</div>
          <div class="car">购物车</div>
        </div>
      </div>
      <div class="example">
        <div class="img">
          图片
        </div>
        <div class="desc">
          描述
        </div>
        <div class="bottom">
          <div class="price">5000起</div>
          <div class="car">购物车</div>
        </div>
      </div>
      <div class="example">
        <div class="img">
          图片
        </div>
        <div class="desc">
          描述
        </div>
        <div class="bottom">
          <div class="price">5000起</div>
          <div class="car">购物车</div>
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
    .img{
      width: 230px;
      height: 230px;
      border: 1px solid red;
    }
    .desc {
      font-size: 16px;
      color: #000;
      font-weight: 700;
      line-height: 40px;
      max-width: 100%;
      overflow: hidden;
      padding-left: 10px; ;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .bottom {
      height: 50px;
      width: 100%;
      position: relative;
      .price{
        position: absolute;
        left: 10px;
      }
      .car{
        position: absolute;
        right: 10px;
      }

    }
  }
  .example:hover {
    transform: translateY(-1px);
    cursor: pointer;
  }
}
</style>
