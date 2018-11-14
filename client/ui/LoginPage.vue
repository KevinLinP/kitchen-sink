<template lang="pug">
  .row.mt-5
    .col-4
    .col-4
      div(v-if='currentUser')
        .col Logged in
      div(v-else)
        form(@submit.prevent='submit')
          .mb-2
            input.form-control(type='text' v-model='email' placeholder='email')
          .mb-2
            input.form-control(type='password' v-model='password' placeholder='password')
          input.form-control(type='submit' value='login')
</template>

<script>
  import { Meteor } from 'meteor/meteor';

  export default {
    data: function() {
      return {
        email: '',
        password: '',
      };
    },
    meteor: {
      currentUser() {
        return Meteor.user();
      }
    },
    methods: {
      submit: function(e) {
        Meteor.loginWithPassword(this.email, this.password);
      }
    }
  }
</script>
