<template lang="pug">
div
  div(v-if='loggedIn')
    .h3 Currently logged in
    button.btn.btn-secondary.pull-right(@click='logout') logout

  div(v-else)
    .h3.mb-3 Login
    form.form-inline(@submit='login')
      input.form-control.mr-2(type='text' v-model='email' readonly=true)
      input.form-control.mr-2(type='password' v-model='password' placeholder='password')

      button(type="submit" class="btn btn-primary") Login
</template>

<script>
  const component = {
    data: function() {
      return {
        email: 'kevin.lin.p@gmail.com',
        password: ''
      };
    },
    meteor: {
      loggedIn: function() {
        return !!Meteor.userId();
      }
    },
    methods: {
      login: function(event) {
        event.preventDefault();

        Meteor.loginWithPassword(this.email, this.password, function(error) {
          console.log(error);
        })
      },
      logout: function() {
        Meteor.logout();
      }
    }
  };

  export default component;
</script>
