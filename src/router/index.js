/**
 * @file vue-router
 */
import Vue from 'vue';
import VueRouter from 'vue-router';

import VList from '../views/VList';
import VNotice from '../views/VNotice';
import VTree from '../views/VTree';
import VForm from '../views/VForm';
import VContainer from '../views/VContainer';

Vue.use(VueRouter);

const routes = [
    {
        path: '/mList',
        name: 'VList',
        component: VList
    },
    {
        path: '/notice',
        name: 'VNotice',
        component: VNotice
    },
    {
        path: '/mtree',
        name: 'VTree',
        component: VTree
    },
    {
        path: '/mform',
        name: 'VForm',
        component: VForm
    },
    {
        path: '/mcontainer',
        name: 'VContainer',
        component: VContainer
    }
];

const router = new VueRouter({
    routes
});

export default router;
