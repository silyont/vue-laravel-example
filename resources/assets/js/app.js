require('./bootstrap');

// Start Here

Vue.component('example', require('./components/Example.vue'));

const app = new Vue({
    el: '#app'
});