import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    nome: "" 
  },
  
  getters: {
  },
  
  mutations: {
    setNome(state,nome) {
        state.nome = nome
    }
  },
  
  actions: {
  }
});