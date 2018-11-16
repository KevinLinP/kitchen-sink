export default [
  {
    path: '/login',
    name: 'loginPage',
    component: '/client/ui/LoginPage.vue'
  },
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
    path: '/irv-polls',
    name: 'irvPollsPage',
    component: '/client/ui/IrvPollPage.vue'
  },
  {
    path: '*',
    component: '/client/ui/NotFound.vue'
  }
];
