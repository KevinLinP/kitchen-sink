import {Meteor} from 'meteor/meteor';
import Vue from 'vue';
import VueRouter from 'vue-router';
import VueMeteorTracker from 'vue-meteor-tracker';

import '/imports/startup/both';
import AppLayout from '/client/ui/AppLayout.vue';
import HomeScreen from '/client/ui/HomeScreen.vue';
import LoginPage from '/client/ui/LoginPage.vue';
import NotFound from '/client/ui/NotFound.vue';

Vue.use(VueRouter);
Vue.use(VueMeteorTracker);

const router = new VueRouter({
  mode: 'history',
  routes: [
    {path: '/login', component: LoginPage},
    {path: '', component: HomeScreen},
    {path: '*', component: NotFound}
  ]
});

// App start
Meteor.startup(() => {
  new Vue({
    router,
    ...AppLayout,
  }).$mount('app');

  if (Meteor.isProduction) {
    navigator.serviceWorker.register('/sw.js').then().catch(error => console.log('ServiceWorker registration failed: ', err));
  }
});
