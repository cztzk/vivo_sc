<template>
    <footer>
        <ul class="flex_wrap flex_center">
            <router-link  to="/" tag="li">
                <div class="index">
                    <i class="iconfont icon-shouye_xuanzhong" style="color:#179dfe" v-if="active ==='index'"></i>
                    <i class="iconfont icon-shouye2" v-else></i>
                </div>
                <span>首页</span>
            </router-link>

            <router-link to="/classify" tag="li">
                <div class="index">
                    <i class="iconfont icon-fenleixuanzhong" style="color:#179dfe" v-if="active ==='classify'"></i>
                    <i class="iconfont icon-fenlei-copy" v-else></i>
                </div>
                <span>分类</span>
            </router-link>

            <router-link to="/news" tag="li">
                <div class="index">
                    <i class="iconfont icon-dongtaixuanzhong" style="color:#179dfe" v-if="active ==='news'"></i>
                    <i class="iconfont icon-dongtai" v-else></i>
                </div>
                <span>新闻</span>
            </router-link>

            <router-link to="/my" tag="li">
                <div class="index">
                    <i class="iconfont icon-wode-" style="color:#179dfe" v-if="active ==='my'"></i>
                    <i class="iconfont icon-wode"  v-else></i>
                </div>
                <span>我的</span>
            </router-link>
        </ul>
    </footer>
</template>
<script>
export default {
  data() {
    return {};
  },
  props: ["active"],
};
</script>
<style lang="less">
footer {
  position: fixed;
  left: 0;
  bottom: 0;
  right: 0;
  background: #fff;
  border-top: 1px solid #ddd;
  box-sizing: border-box;
  ul {
    height: 1.2rem;
    li {
      width: 25%;
      text-align: center;
      .index {
        height: 0.5rem;
        line-height: 0.5rem;
        padding-top: 0.1rem;
      }
      span {
        font-size: 0.3rem;
      }
      i {
        font-size: 0.55rem !important;
      }
    }
  }

}
</style>
