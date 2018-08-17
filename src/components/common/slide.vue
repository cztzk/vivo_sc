<template>
    <div class="slide_box">
        <wc-swiper :duration="1000" :interval="2000" v-if="slides.length">
            <wc-slide  v-for="(slide, key) in slides" :key="key">
                <img :src="slide.img" :alt="slide.name">
            </wc-slide>
        </wc-swiper>
    </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  props: ["slides"],
  methods: {}
};
</script>
<style lang="less">
.slide_box{
    width: 100%;
    img{
        max-width: 100%;
        width: 100%;
        height: auto;
    }
}
</style>
