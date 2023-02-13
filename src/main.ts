import appComponent from './app/App.vue'
import keycloakInstance from "@/plugins/keycloak";
import Vue from "vue";
import VueRouter from "vue-router";
import Tab from "@/components/tab/Tab.vue";
import CreateAssigment from "@/components/createAssigment/CreateAssigment.vue";

Vue.use(VueRouter);

const routes = [
    {
        path: "/create",
        component: CreateAssigment,
    },
    {
        path: "/",
        component: Tab,
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
    console.log('a')
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