<template>
  <div class="home-warp">
    <div class=home-ad>
      我们的态度介绍
      比如：不满意退款,无Bug交付,终生维护
    </div>
    <!--服务流程-->
    <div class="service-process">
      <div class="head">
        服务流程
      </div>
      <div class="process">
        <div>
          1、收集建设资料沟通需求
        </div>
        <img src="../../static/images/right-turn_flat.png" alt="">
        <div>
          2、搭建网站
        </div>
        <img src="../../static/images/right-turn_flat.png" alt="">
        <div>
          3、验收付款
        </div>
        <img src="../../static/images/right-turn_flat.png" alt="">
         <div>
          4、提供域名与协助备案
        </div>
        <img src="../../static/images/right-turn_flat.png" alt="">
        <div>
          5、网站上线
        </div>
      </div>
      <div class="foot">
        <el-button style="background: #ee2a1a;color: #fff;">免费咨询产品报价</el-button>
      </div>
    </div>
    <!--案例欣赏-->
    <div class="case-info">
      <div class="head">
        案例欣赏
      </div>
      <div class="case">
        <div class="card">
          <div class="img">
          </div>
          <div class="btn">
            <el-button style="background: #ee2a1a;color: #fff;">我想要类似的服务</el-button>
          </div>
        </div>
        <div class="card">
          <div class="img">
          </div>
          <div class="btn">
            <el-button style="background: #ee2a1a;color: #fff;">我想要类似的服务</el-button>
          </div>
        </div>
      </div>
      <div class="case">
        <div class="card">
          <div class="img">
          </div>
          <div class="btn">
            <el-button style="background: #ee2a1a;color: #fff;">我想要类似的服务</el-button>
          </div>
        </div>
        <div class="card">
          <div class="img">
          </div>
          <div class="btn">
            <el-button style="background: #ee2a1a;color: #fff;">我想要类似的服务</el-button>
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
.home-ad{
  width: 100%;
  height: 460px;
  text-align: center;
  background: #ccc;
}
.service-process{
  position: relative;
  height: 430px;
  width: 100%;
  text-align: center;
  padding-bottom: 150px;
  border: 1px solid goldenrod;
  .head{
    line-height: 240px;
    font-size: 30px;
    border: 1px solid green;
  }
  .process{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 250px;
    img{
      width: 50px;
      height: 50px;
    }
    :nth-child(2n-1){
      height: 250px;
      width: 210px;
      border: 1px solid red;
    }
  }
  .foot{
    position: absolute;
    width: 150px;
    bottom: 30px;
    left: 45%;
  }
}
.case-info{
    position: relative;
    height: 830px;
    width: 100%;
    background: #f6f6f6;
    text-align: center;
    padding-bottom: 250px;
    border: 1px solid red;
    .head{
      line-height: 240px;
      font-size: 30px;
      border: 1px solid green;
    }
    .case{
      display: flex;
      align-items: center;
      justify-content: center;
      .card{
        height: 370px;
        width: 600px;
        border: 1px solid blue;
        position: relative;
        margin-left: 20px;
        margin-top: 20px;
        .btn{
          position: absolute;
          width: 150px;
          bottom: 30px;
          left: 30%;
        }
      }
    }
  }

  .industry-customization{
    position: relative;
    height: 700px;
    width: 100%;
    background: #f6f6f6;
    text-align: center;
    padding-bottom: 250px;
    border: 1px solid red;
    .head{
      line-height: 240px;
      font-size: 30px;
      border: 1px solid green;
    }
    .industry{
      display: flex;
      align-items: center;
      justify-content: center;
      .card{
        position: relative;
        padding-bottom: 60px;
        .img{
          height: 240px;
          width: 240px;
          border-radius: 50%;
          border: 1px solid blue;
          margin-left: 20px;
          margin-top: 20px;
        }
        .btn{
            position: absolute;
            width: 150px;
            bottom: 0px;
            left: 65px;
        }
      }

    }
  }
</style>
