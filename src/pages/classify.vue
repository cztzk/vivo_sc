<template>
    <div class="classify_box">
        <headers :title="title"></headers>
        <div class="classify_cont flex_nowrap">
            <div class="classify_cont_left" ref="wrapper">
                <ul>
                    <li v-for="(item,index) in left" :key="index" :class="index==classifyIndex?'active':''" @click="toggleClassify(index)">
                        {{item.name}}
                    </li>
                </ul>
            </div>
            <div class="classify_cont_right" ref="wrapper2">
                <ul class="flex_wrap">
                    <li v-for="(item,index) in right" :key="index" 
                     @click="todetail(item.id)">
                        <img v-lazy="item.img">
                        <span>{{item.name}}</span>
                    </li>
                </ul>
            </div>
        </div>
        <foot :active="active"></foot>
    </div>
</template>
<script>
import headers from "../components/common/header";
import foot from "../components/common/foot";
import BScroll from "better-scroll";
export default {
  data() {
    return {
      title: "商品分类",
      left: new Array(),
      list: new Array(),
      right: new Array(),
      active: "classify",
      classifyIndex: 0
    };
  },
  components: {
    headers,
    foot
  },
  methods: {
    getData: function() {
      var _this = this;
      _this.$http.get("../../static/ceshi.json").then(function(res) {
        _this.left = res.data.data.classify.left;
        _this.list = res.data.data.classify.right;
        _this.right = res.data.data.classify.right[0].rigth_data;
      });
    },
    toggleClassify: function(index) {
      var classifyIndex = this.classifyIndex;
      if (classifyIndex != index) {
        this.classifyIndex = index;
        this.right = this.list[index].rigth_data;
      }
    },
    todetail: function(id) {
      this.$router.push({
        path: "productDetail",
        query: {
          id: id
        }
      });
    }
  },
  mounted: function() {
    this.getData();
    this.$nextTick(() => {
      this.scroll = new BScroll(this.$refs.wrapper, {
        click: true
      });
      this.scroll = new BScroll(this.$refs.wrapper2, {
        click: true
      });
    });
  }
};
</script>
<style lang="less">
.classify_cont {
  padding: 1rem 0 1.2rem;
  background: #f6f6f6;
  font-size: 0.36rem;
  box-sizing: border-box;
  position: absolute;
  top: 0;
  bottom: 0;
  overflow: hidden;
  > div {
    min-height: 100%;
    background: #fff;
  }
  .classify_cont_left {
    box-sizing: border-box;
    border-right: 1px solid #ddd;
    flex: 0 0 2rem;
    -webkit-box-flex: 0;
    ul li {
      text-align: center;
      height: 1rem;
      line-height: 1rem;
      border-bottom: 1px solid #ddd;
      border-left: 2px solid transparent;
      border-right: 2px solid transparent;
      &.active {
        border-left: 2px solid #199cfe;
        background: #fff;
        color: #199cfe;
      }
    }
  }
  .classify_cont_right {
    flex: 1;
    -webkit-box-flex: 1;
    width: 100%;
    ul {
      margin-bottom: 0.6rem;
      li {
        width: 33.3%;
        text-align: center;
        box-sizing: border-box;
        padding: 0.2rem 0.1rem;
        img {
          max-width: 100%;
          height: auto;
          display: block;
          margin: 0 auto;
          padding-bottom: 0.2rem;
        }
        span {
          font-size: 0.26rem;
        }
      }
    }
  }
}
</style>
