import Vue from 'vue';
import VueRouter from 'vue-router';

import HomeView from '@/views/HomeView';
import ExploreView from '@/views/ExploreView';
import ItemView from '@/views/ItemView';
import UserView from '@/views/UserView';
import CreateItemView from '@/views/CreateItemView';
import LoginView from '@/views/LoginView';
import RecentView from '@/views/RecentView';
import TransactionView from '@/views/TransactionView';

Vue.use(VueRouter);

export default new VueRouter({
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    { name: 'Home', path: '/', component: HomeView },
    { name: 'Explore', path: '/explore', component: ExploreView },
    { name: 'Item', path: '/item/:id(\\d+)', component: ItemView },
    {
      name: 'User',
      path: '/user/:address',
      component: UserView,
    },
    {
      name: 'CreateItem',
      path: '/item/create',
      component: CreateItemView,
    },
    {
      name: 'Login',
      path: '/Login',
      component: LoginView,
    },
    {
      name: 'Recent',
      path: '/Recent',
      component: RecentView,
    },
    {
      name: 'Transaction',
      path: '/transaction',
      component: TransactionView,
    },
  ],
});
