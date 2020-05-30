import Vue from 'vue';
import App from './App.vue';
import router from './router';
import {VueRouter} from 'vue-router/types/router';

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');


router.beforeEach((to,from,next)=>{
    if (to.meta.title) {
        document.title = to.meta.title;
    }
    next();
});
