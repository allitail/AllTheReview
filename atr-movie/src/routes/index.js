import Vue from 'vue';
import Router from 'vue-router';
import aBody from '@/components/aBody';
import aList from '@/components/atrBoard/aList';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: aBody,
            component: aBody
        },
        {
            path: '/atrBoard/aList',
            name: aList,
            component: aList
        }
    ]
})