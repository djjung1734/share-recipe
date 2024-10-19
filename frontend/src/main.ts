import Vue from 'vue';
import axios from 'axios';
import router from '@/routers/index';
import VueCookies from 'vue-cookies';
import store from './store';
import App from './App.vue';

Vue.config.productionTip = false;
Vue.use(VueCookies);

declare global {
  interface Window {
    axios: typeof axios;
    $: any;
  }
}

// axios 세팅
window.axios = axios;
window.axios.defaults.baseURL = `http://${window.location.hostname}:3000/api`;

// axios 요청 interceptor
window.axios.interceptors.request.use(
  (config) => {
    const authorization = config.headers.Authorization;
    const accessToken = `Bearer ${Vue.$cookies.get('access_token')}`;
    config.headers.Authorization = authorization ?? accessToken;
    return config;
  },
  (error) => Promise.reject(error),
);

// axios 응답 interceptor
window.axios.interceptors.response.use(
  (response) => response,
  async (error) => {
    const {
      config,
      response: { status },
    } = error;
    const refreshToken = Vue.$cookies.get('refresh_token');
    if (status === 401 && config.url !== '/auth/refresh') {
      await store.dispatch('auth', {
        endpoint: 'refresh',
        options: {
          headers: {
            Authorization: `Bearer ${refreshToken}`,
          },
        },
      });
      config.headers.Authorization = `Bearer ${Vue.$cookies.get(
        'access_token',
      )}`;
      return window.axios(config);
    }
    return Promise.reject(error);
  },
);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
