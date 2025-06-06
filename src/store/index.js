import Vuex from 'vuex'
import user from './module/user'
import Vue from 'vue'
Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    user
  },
  state: {
    inited: false
  },
  getters: {
  },
  mutations: {
    setInited(state, val) {
      state.inited = val;
    } 
  },
  actions: {},
})

export default store;