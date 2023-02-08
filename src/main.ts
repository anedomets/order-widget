import appComponent from './app/App.vue'
import keycloakInstance from "@/plugins/keycloak";
import Vue from "vue";
import VueRouter from "vue-router";
import Currency from "@/components/modal/currency/Currency.vue";
import CurrencyCard from "@/components/modal/currencyCard/CurrencyCard.vue";
import Tab from "@/components/modal/tab/Tab.vue";

Vue.use(VueRouter);

const routes = [
    {
        path: "/currency",
        component: Currency,
    },
    {
        path: "/",
        component: Tab,
    },
    {
        path: "/currency-card",
        component: CurrencyCard,
    },
];

const router = new VueRouter({
    routes,
    mode: "history",
});

Vue.config.productionTip = false;



console.log("ENVIRONMENTS");
console.log(process.env);
console.log(keycloakInstance)
keycloakInstance.init({ onLoad: 'login-required' }).then((auth) => {
    if (!auth) {
        window.location.reload();
    } else {
        new Vue({
            router,
            render: h => h(appComponent)
        }).$mount('#mainDiv')
        window.onfocus = () => {
            keycloakInstance.updateToken(30)
        }
    }
})