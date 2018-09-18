import Vue from 'vue';
import Router from 'vue-router';
import Hymns from './components/Hymns.vue';
import HymnForm from './components/HymnForm.vue';
import ViewHymn from './components/ViewHymn.vue';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'hymns',
            component: Hymns
        },
        {
            path: '/add-hymn',
            name: 'hymnForm',
            component: HymnForm
        },
        {
            path: '/view',
            name: 'viewHymn',
            component: ViewHymn
        },
    ]
})