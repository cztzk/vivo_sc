strict: true;
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    //是否登录
    islogin: false,
    user: {
      img: "https://cdn.it120.cc/apifactory/2018/06/22/be01e5ecfca894c3aa7154ffec60802c.jpg",
      nick: "k",
      name: "K",
      seoindex: "1",
      seo: "男",
      email: "1362482907@qq.com",
      introduction: "呵呵,我的爱好是：吃饭睡觉打豆豆。"
    },
    isactive: true
  },
  getters: {

  },
  mutations: {
    navactive(state) {
      state.isactive = !state.isactive;
    },
    submissionfun(state,obj){
      state.user=obj;
    }
  },

  actions: {

  },
  modules: {

  }
})
export default store
