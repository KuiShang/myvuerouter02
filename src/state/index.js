/**
 * Created by shangkuikui on 2017/6/19.
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const state = {
    loading: false
}
const mutations = {
    changestate(state,flag) {
        state.loading = flag
    }
}
const getters = {
    isLoading:  state => state.loading
}
export default new Vuex.Store({
    state,
   getters,
    mutations
})