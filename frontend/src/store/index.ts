import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import loginStore from './loginStore';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    loginStore,
  },
  plugins: [
    createPersistedState({
      paths: ['loginStore'],
    }),
  ],
  state: {
    selectedMenu: null,
  },
  mutations: {
    selectMenu(state, menu) {
      state.selectedMenu = menu;
    },
  },
  actions: {},
});
