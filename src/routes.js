import Vue from 'vue';
import VueRouter from 'vue-router';
import Index from './components/Index.vue';
Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    linkActiveClass: 'active',
    routes: [{
            path: '/',
            name: 'index',
            component: Index
        },
        {
            path: "/assessment",
            name: 'assessment',
            component: Assessment
        },
        {
            path: "/Process/:id",
            name: 'Process',
            component: Process
        }
    ]
});

export default router;
