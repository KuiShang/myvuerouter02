/**
 * Created by shangkuikui on 2017/6/19.
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import pageA from '../page/pageA.vue';
import pageB from '../page/pageB.vue';
import pageC from '../page/pageC.vue';

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'pageA',
            component: pageA
        },
        {
            path: '/pageb',
            name: 'pageB',
            component: pageB
        },
        {
            path: '/pagec',
            name: 'pageC',
            component: pageC,
            meta: { requiresAuth: true }
        }
    ]
})
router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
       console.log('这个页面需要验证',to)
    }else{
        console.log('这个页面bububu需要验证',to)
    }
    next()
})

export default router