import Vue from 'vue'
import VueRouter from 'vue-router';
import store from './store'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'

/* Import Component Pages */
import HomePage from './components/HomePage.vue';
import Cadastro from './components/Cadastro.vue';
import CafeEspecial from './components/CafeEspecial.vue';
import CafeEspecialSim from './components/CafeEspecialSim.vue';
import CafeEspecialNao from './components/CafeEspecialNao.vue';
import AcucarSim from './components/AcucarSim.vue';
import AcucarNao from './components/AcucarNao.vue';
import AcidezSim from './components/AcidezSim.vue';
import AcidezNao from './components/AcidezNao.vue';
import Floral from './components/Floral.vue';
import Frutado from './components/Frutado.vue';
import Finish from './components/Finish.vue';

Vue.config.productionTip = false

Vue.use(VueRouter)
const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: HomePage},
    { path: '/cadastro', component: Cadastro},
    { path: '/cafe-especial', component: CafeEspecial},
    { path: '/cafe-especial-sim', component: CafeEspecialSim},
    { path: '/cafe-especial-nao', component: CafeEspecialNao},
    { path: '/acucar-sim', component: AcucarSim},
    { path: '/acucar-nao', component: AcucarNao},
    { path: '/acidez-sim', component: AcidezSim},
    { path: '/acidez-nao', component: AcidezNao},
    { path: '/floral', component: Floral},
    { path: '/frutado', component: Frutado},
    { path: '/finish', component: Finish}
  ]
})

/*vuetify.component('nomeCliente', nomeCliente)*/ // Ativa o Componente
new Vue({
  store,
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
