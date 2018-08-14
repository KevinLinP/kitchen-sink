export default [
  {
    path: '/',
    name: 'homeScreen',
    component: '/client/ui/HomeScreen.vue'
  },
  {
    path: '/',
    name: 'trackingNumbersPage',
    component: '/client/ui/TrackingNumbersPage.vue'
  },
  {
    path: '/login',
    name: 'loginPage',
    component: '/client/ui/LoginPage.vue'
  },
  {
    path: '/logout',
    name: 'logoutPage',
    component: '/client/ui/LoginPage.vue'
  },
  {
    path: '*',
    component: '/client/ui/NotFound.vue'
  }
];
