<template>
    <header>
        <div class="header-left" @click="$router.go(-1)">
            <i class="iconfont icon-zuojiantou"></i>
        </div>
        <div class="header-in">{{title}}</div>
        <div class="header-rigth"></div>
    </header>
</template>
<script>
export default {
  data() {
    return {};
  },
  props: ["title"]
};
</script>
<style lang="less">
header {
  width: 100%;
  height: 1rem;
  background: #fff;
  position: fixed;
  box-sizing: border-box;
  border-bottom: 1px  solid #ddd;
  z-index: 100;
  .header-left {
    width: 10%;
    height: 100%;
    float: left;
    i {
      font-size: 0.3rem;
      line-height: 1rem;
      text-align: center;
      display: block;
    }
  }
  .header-in {
    width: 80%;
    float: left;
    text-align: center;
    font-size: 0.3rem;
    line-height: 1rem;
  }
  .header-rigth {
    width: 10%;
    height: 100%;
    float: left;
  }
}
</style>
