<template lang="pug">
  .container.pt-5
    table.table
      tbody
        tr(v-for='poll in polls')
          td {{ poll._id }}
          td {{ poll.prompt }}
          td {{ poll.options }}
    .row
      .col-2
      .col-8
        .h3 New
        div
          form(@submit.prevent='submit')
            .mb-2
              textarea.form-control(v-model='prompt' placeholder='prompt')
            .mb-2
              textarea.form-control(v-model='options' placeholder='options separated by newlines')
            input.btn.btn-secondary(type='submit' value='Create')
</template>

<script>
  import _ from 'underscore';
  import { IrvPolls } from '/imports/api/irv-polls.js';

  export default {
    data() {
      return {
        prompt: '',
        options: ''
      };
    },
    meteor: {
      $subscribe: {
        'irvPolls': []
      },
      polls() {
        return IrvPolls.find({});
      },
    },
    methods: {
      submit() {
        let options = {};

        _.each(this.options.split("\n"), function(e, i) {
          options[i.toString()] = e;
        });

        IrvPolls.insert({
          prompt: this.prompt,
          options
        });
      }
    }
  }
</script>

<style lang="scss" scoped>
</style>
