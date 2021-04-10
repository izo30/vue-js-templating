import Vue from 'vue'
import App from './App.vue'

Vue.filter('toLowerCase', function(value) {
  return value.toLowerCase();
})

Vue.mixin({
  methods: {

  },
  created() {
    console.log('Created hook - Global Mixin');
  }
})

new Vue({
  el: '#app',
  render: h => h(App)
})
