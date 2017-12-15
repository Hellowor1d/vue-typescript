import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld.vue';
import Login from '@/pages/Login.vue';
import Schedule from '@/components/Schedule.vue';
import Classroom from '@/components/Classroom.vue';
import Reset from '@/components/Reset.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login,
    },
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld,
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
