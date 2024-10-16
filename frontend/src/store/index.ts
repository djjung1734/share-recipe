/* eslint-disable @typescript-eslint/no-unused-vars */
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: null,
  },
  mutations: {
    loadUser(state) {
      state.user = Vue.$cookies.get("user");
    },
    saveToken(state, data) {
      Vue.$cookies.set("access_token", data.access_token, "60s");
      Vue.$cookies.set("refresh_token", data.refresh_token, "7d");
      Vue.$cookies.set("user", JSON.stringify(data.user), "7d");
    },
    removeToken(state, data) {
      Vue.$cookies.remove("access_token");
      Vue.$cookies.remove("refresh_token");
    },
  },
  actions: {
    auth({ commit, dispatch }, params) {
      return new Promise<void>((resolve, reject) => {
        window.axios
          .post(`/auth/${params.endpoint}`, params.data, params.options)
          .then((response) => {
            if (response.status === 201) {
              commit("saveToken", response.data);
              commit("loadUser");
              resolve();
            } else {
              commit("removeToken");
              reject();
            }
          })
          .catch(() => {
            commit("removeToken");
            reject();
          });
      });
    },
  },
});
