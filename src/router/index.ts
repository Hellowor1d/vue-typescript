import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld.vue';
import Login from '@/components/Login.vue';
import Schedule from '@/components/Schedule.vue';
import Classroom from '@/components/Classroom.vue';
import Reset from '@/components/Reset.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/schedule',
      name: 'schedule',
      component: Schedule,
    },
    {
      path: '/classroom',
      name: 'classroom',
      component: Classroom,
    },
    {
      path: '/reset',
      name: 'reset',
      component: Reset,
    },
  ],
});
