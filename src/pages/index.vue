<template>
    <div class="index_box">
      <div class="index_header">
        <i class="iconfont icon-VIVO"></i>
      </div>
      <ul class="index_explain flex_nowrap flex_center">
        <li>官方正品</li>
        <li>满68包邮</li>
        <li>30天退换货</li>
        <li>全国网点售后</li>
      </ul>
      <slide :slides="slides"></slide>
      <ul class="classify flex_nowrap flex_center">
        <router-link tag="li" to="phList">
          <img src="../assets/images/index/xuangou.jpg" alt="">
        </router-link>
        <router-link tag="li" to="parts">
          <img src="../assets/images/index/peijian.jpg" alt="">
        </router-link>
        <router-link tag="li" to="phList">
          <img src="../assets/images/index/pingbao.jpg" alt="">
        </router-link>
        <router-link tag="li" to="phList">
          <img src="../assets/images/index/dingzhi.jpg" alt="">
        </router-link>
      </ul>
      <div class="index_product_box">
        <h2>爆款产品</h2>
        <img src="https://shopstatic.vivo.com.cn/vivoshop/commodity/20180405/20180405101609299910_original.jpg">
        <product-list :todos="todos"></product-list>
      </div>
      <foot :active="active"></foot>
    </div>
</template>
<script>
import slide from "../components/common/slide";
import productList from "../components/common/productList";
import foot from "../components/common/foot";
export default {
  data() {
    return {
      slides: [
        {
          img:
            "https://shopstatic.vivo.com.cn/vivoshop/commodity/20180418/20180418104131830678_original.jpg",
          name: "slides_img"
        },
        {
          img:
            "https://shopstatic.vivo.com.cn/vivoshop/commodity/20180430/20180430232146894398_original.jpg",
          name: "slides_img"
        }
      ],
      todos: new Array(),
      active:"/",
    };
  },
  components: {
    slide,
    productList,
    foot
  },
  methods: {
    // 获取产品列表信息
    getData: function() {
      var _this = this;
      _this.$http.get("../../static/ceshi.json").then(function(res) {
        // console.log(res);
        _this.todos = res.data.data.home;
      });
    }
  },
  mounted: function() {
    this.getData();
  }
};
</script>
<style lang="less">
.index_box {
  padding: 0.8rem 0 1.2rem;
  .index_header {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 99;
    height: 0.8rem;
    background: #fff;
    border-bottom: 1px solid #333;
    box-sizing: border-box;
    i {
      line-height: 0.8rem;
      padding-left: 0.4rem;
    }
  }
  .index_explain {
    li {
      width: 25%;
      font-size: 0.24rem;
      line-height: 0.8rem;
      text-align: center;
    }
  }
  .classify {
    text-align: center;
    li {
      width: 25%;
      padding: 0.2rem 0;
      img {
        max-width: 70%;
        height: auto;
      }
    }
  }
  .index_product_box {
    h2 {
      height: 0.8rem;
      line-height: 0.8rem;
      background: #fff;
      font-size: 0.36rem;
      padding-left: 0.3rem;
    }
    img {
      width: 100%;
      height: auto;
      display: block;
    }
  }
}
</style>
