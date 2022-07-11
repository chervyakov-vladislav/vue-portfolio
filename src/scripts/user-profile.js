import Vue from "vue";

new Vue({
  el: "#user-component",
  template: "#user-profile",
  data: () => ({
    user: {}
  }),
  created() {
    this.user = require('../data/userdata.json');
  }
});