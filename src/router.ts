import Vue from 'vue';
import Router from 'vue-router';
import funEliminate from './views/funEliminate/index.vue';
import tankBattle from './views/tankBattle/index.vue';
import Home from './views/home/index.vue';
import game2048 from './views/2048/index.vue';

Vue.use(Router);



export default new Router({
  routes: [
    {
      path: '/funEliminate',
      name: 'funEliminate',
      component: funEliminate,
      meta: {
        title: '开心消消乐',
      },
    },
    {
      path: '/tankBattle',
      name: 'tankBattle',
      component: tankBattle,
      meta: {
        title: '坦克大战',
      },
    },
    {
      path: '/game2048',
      name: 'game2048',
      component: game2048,
      meta: {
        title: '2048',
      },
    },
    {
      path: '/game-paradise',
      name: 'home',
      component: Home,
      meta: {
        title: 'game-paradise',
      },
    },
  ],

});
