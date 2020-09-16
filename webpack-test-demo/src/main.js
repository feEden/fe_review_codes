import Vue from 'vue';
import APP from './app';

console.log(process.env.NODE_ENV, '======xxx=x=x=x=x==xx=');

new Vue({
    el: '#app',
    render: (h) => h(APP),
});