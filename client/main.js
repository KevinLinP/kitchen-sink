import {Meteor} from 'meteor/meteor';
import Vue from 'vue';
import VueRouter from 'vue-router';
import VueMeteorTracker from 'vue-meteor-tracker';

import '/imports/startup/both';
import AppLayout from '/client/ui/AppLayout.vue';
import HomeScreen from '/client/ui/HomeScreen.vue';

const routes = [
  {path: '/', component: HomeScreen}
];
const router = new VueRouter({routes});

// App start
Meteor.startup(() => {

  Vue.use(VueMeteorTracker);
  Vue.use(VueRouter);

  new Vue({
    router,
    ...AppLayout,
  }).$mount('app');

  if (Meteor.isProduction) {
    navigator.serviceWorker.register('/sw.js').then().catch(error => console.log('ServiceWorker registration failed: ', err));
  }
});
