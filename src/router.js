import Vue from 'vue';
import Router from 'vue-router';
import Hymns from './components/Hymns.vue';

Vue.use(Router);

export default new Router({ 
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'hymns',
            component: Hymns
        },
    ]
})