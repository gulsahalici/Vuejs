import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

Vue.use(VueRouter);

import Home from './components/Home'
import UserProfile from "./components/UserProfile";
import UserPosts from "./components/UserPosts";

Vue.config.productionTip = false

const router=new VueRouter({
    routes:[
        {path: '/', component: Home, name:'home'},
        { path: '/user/:id',component: UserProfile },
        { path: '/user/:userId/posts', component:UserPosts }
        ],
    mode:'history'
})

new Vue({
    render: h => h(App),
    router
}).$mount('#app')
