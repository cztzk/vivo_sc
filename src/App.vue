<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "App",
  methods: {
    init() {
      (function(doc, win) {
        var docEl = doc.documentElement,
            resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
            recalc = function () {
                var clientWidth = docEl.clientWidth;
                if (!clientWidth) return;
                if(clientWidth>=750){
                    docEl.style.fontSize = '100px';
                }else{
                    docEl.style.fontSize = 100 * (clientWidth / 750) + 'px';
                }
            };
        if (!doc.addEventListener) return;
        win.addEventListener(resizeEvt, recalc, false);
        doc.addEventListener('DOMContentLoaded', recalc, false);
      })(document, window);
    }
  },
  created: function() {
    this.init();
  }
};
</script>
<style lang="less">
@import "assets/font/iconfont.css";
body,html{
  font-family: "Microsoft YaHei","Avenir", Helvetica, Arial, sans-serif;
  background:#fff;

}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #333;
}
// 浏览器css属性重置
body,html,h1,h2,h3,h4,h5,h6,p,ul,ol{
  margin: 0;
  padding: 0;
  font-weight: normal;
}
img{
  font-size: 0.24rem;
}
p{
  font-size: 0.28rem;
}
h6{
  font-size: 0.30rem;
}
h5{
  font-size: 0.32rem;
}
h4{
  font-size: 0.34rem;
}
h3{
  font-size: 0.36rem;
}
h2{
  font-size: 0.38rem;
}
h1{
  font-size: 0.40rem;
}
ul,ol{
  list-style: none;
  padding: 0;
}
div{
  font-size: 0.2rem;
}
a{
  text-decoration: none;
  color: #000;
  outline: none;
}
textarea,
input{
  outline: none;
}
// 常用class属性
.left{
  float: left;
}
.right{
  float: right;
}
.clearfix{
  display: block;
  content: "";
  clear: both;
}
.text-center{
  text-align: center
}
.text-left{
  text-align: left;
}
.text-right{
  text-align: right;
}

.hidden{
  display: none;
}
.ellipsis {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.ellipsis2{
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.ellipsis3{
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}
// flex布局
.flex_wrap{
  display:-webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
}
.flex_nowrap{
  display:-webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
}
.flex_center{
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
}
.align_items{
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
}
.justify_content{
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
}
//两端第一个元素不要多余空间，其他子元素平分多余空间
.first_box,
.justify_box{
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
}
.first_box>*,
.justify_box>* {
    width: 0;
    height: auto;
    -webkit-box-flex: 1;
    -webkit-flex-grow: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
    -webkit-flex-shrink: 1;
    -ms-flex-negative: 1;
    flex-shrink: 1;
}
.first_box>*:first-child,
.justify_box>*:first-child,
.justify_box>*:last-child {
    width: auto;
    -webkit-box-flex: 0;
    -webkit-flex-grow: 0;
    -ms-flex-positive: 0;
    flex-grow: 0;
    -webkit-flex-shrink: 0;
    -ms-flex-negative: 0;
    flex-shrink: 0;
}
// less相关属性
.backgroundSize(@size){
    -webkit-background-size: @size @size;  
    -moz-background-size: @size @size;  
    -ms-background-size: @size @size;  
    -o-background-size: @size @size;  
    background-size: @size @size;  
}

.transition (@prop, @time, @ease) {  
    -webkit-transition: @prop @time @ease;  
    -moz-transition: @prop @time @ease;  
    -o-transition: @prop @time @ease;  
    -ms-transition: @prop @time @ease;  
    transition: @prop @time @ease;  
}  
.translateY(@Y){
  transform: translateY(@Y);
  -webkit-transform: translateY(@Y);
  -ms-transform: translateY(@Y);
  -o-transform: translateY(@Y);
  -moz-transform: translateY(@Y);
}
.radius(@deg){
    border-radius: @deg;
    -moz-border-radius: @deg;
    -ms-border-radius: @deg;
    -o-border-radius: @deg;
    -webkit-border-radius: @deg;
}
.background_rgba(@r,@g,@b,@a){
  background: rgba(@r,@g,@b,@a);
}
// 定义字体颜色，方便后期修改
@newcolor1: #b34141;

.newcolor1{
  color: @newcolor1 !important;
}

</style>