import Vue from 'vue'
import {createStore} from '@/store/store.ts'
import Vuex from "vuex";
import Component from "vue-class-component";
import VueCookies from "vue-cookies";
import keycloakInstance from "@/plugins/keycloak";
import axios from "axios";
import Currency from "@/components/modal/currency/Currency.vue";
import Form from "@/components/modal/form/Form.vue";
import CurrencyCard from "@/components/modal/currencyCard/CurrencyCard.vue";
// @ts-ignore
import VueGoodTablePlugin from 'vue-good-table';
// import the styles
import 'vue-good-table/dist/vue-good-table.css'
import VueRouter from "vue-router";

Vue.use(VueGoodTablePlugin);
Vue.use(Vuex);
Vue.use(VueCookies);
Vue.use(VueRouter)
@Component({
    components: {
        Currency,
        CurrencyCard,
        Form
    },
    store: createStore()
})
export default class App extends Vue {

    private show: boolean = true
    private name = ''
    private buttonText: string = 'Показать'

    mounted() {
        // axios.interceptors.request.use(async config => {
        //     // Обновляем токен
        //     const token = keycloakInstance.token
        //     // Добавляем токен в каждый запрос
        //     config.headers.common['Authorization'] = `Bearer ${token}`
        //     // config.headers.common['Access-Control-Allow-Methods'] = 'GET,PUT,POST,DELETE,PATCH,OPTIONS'
        //     return config
        // })
        // const result = axios.get('http://localhost:8085/api/me')
        //     .then((response: any) => {
        //             //this.loadMask(false);
        //             return response.data;
        //         }
        //     )
        //     .catch((error) => {
        //         //this.loadMask(false);
        //         console.log('Ошибка! Не могу связаться с API. ' + error);
        //     })
        // result.then((data) => {
        //     this.name = data
        // })
    }

    get funcShow() {
        return this.show
    }

    set funcShow(data) {
        this.show = data
    }

    public isShow() {
        this.show = !this.show
    }

    public changeButtonText() {
        this.buttonText = this.show ? 'Показать' : 'Скрыть'
        return this.buttonText
    }

}