
window.Vue = require('vue');

import App from './views/App.vue';

const root = new Vue({
    el: '#root',
    render: h => h(App)
});