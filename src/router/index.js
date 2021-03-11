import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [{
    path: '/',
    name: 'Black',
    component: resolve => require(['@/layouts/BlackLayout.vue'], resolve),
    children: [{
            path: "/",
            redirect: "/Home"
        },
        {
            path: "/Home",
            name: "Home",
            meta: { title: "首页" },
            component: resolve => require(['@/views/Home'], resolve),
        },
    ]
}];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

export default router;