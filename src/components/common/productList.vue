<template>
    <ul class="product_list flex_wrap flex_center">
        <li class="product_item" v-for="(item,index) in todos" :key="index" @click="todetail(item.id)">
            <div class="image">
                <img v-lazy="item.homeImg" alt="图片">
            </div>
            <p class="name">{{item.homeName}}</p>
            <p class="nametwo">{{item.homeNametwo}}</p>
            <p class="Price">￥{{item.homePrice}}</p> 
        </li>
    </ul>
</template>
<script>
export default {
  data() {
    return {};
  },
  props: ["todos"],
  methods: {
    todetail: function(id) {
        this.$router.push({ path: "productDetail", query: { id: id } });
    }
  }
};
</script>
<style lang="less">
.product_list {
  .product_item {
    height: 4.7rem;
    width: 50%;
    background: white;
    float: left;
    width: 50%;
    box-sizing: border-box;
    border-right: 1px solid #f4f4f4;
    border-top: 1px solid #f4f4f4;
    .image {
      width: 100%;
      background: white;
      img {
        width: 2.5rem;
        height: 2.3rem;
        display: block;
        margin: auto;
        margin-top: 0.5rem;
      }
    }
    .Price {
      font-size: 0.33rem;
      color: red;
      margin: auto;
      text-align: center;
      font-size: 0.3rem;
    }
    .name {
      width: 80%;
      height: 0.5rem;
      line-height: 0.5rem;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      margin: auto;
      font-size: 0.29rem;
      font-weight: 800;
      text-align: center;
    }
    .nametwo {
      height: 0.48rem;
      font-size: 0.1rem;
      text-align: center;
    }
  }
}
</style>
