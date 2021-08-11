import Vue from 'vue';
import VueRouter from 'vue-router';
import VueAxios from 'vue-axios';
import axios from 'axios';

import App from './App.vue';
import MemberCreate from './components/MemberCreate.vue';
import MemberEdit from './components/MemberEdit.vue';
import Index from './components/Index.vue';



Vue.use(VueRouter);
Vue.use(VueAxios, axios);

Vue.config.productionTip = true;



const router = new VueRouter({ mode: history });


new Vue({
    render: h => h(App)
}).$mount('#app');
