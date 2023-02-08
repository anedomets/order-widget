import Vue from 'vue'
import {createStore} from '@/store/store.ts'
import Vuex from "vuex";
import Component from "vue-class-component";
import VueCookies from "vue-cookies";
import keycloakInstance from "@/plugins/keycloak";
import {Currency, State} from "@/store/model";
import axios from "axios";

Vue.use(Vuex);
Vue.use(VueCookies);
@Component({
    components: {
    },
    store:createStore()
})
export default class CurrencyCar extends Vue {

    private currency : Array<Currency> = []

    mounted(){
        axios.interceptors.request.use(async config => {
            const token = keycloakInstance.token
            config.headers.common['Authorization'] = `Bearer ${token}`
            return config
        })
        const result = axios.get('http://localhost:8010/api/v1/currencies/by-filter')
            .then((response: any) => {
                    return response.data;
                }
            )
            .catch((error) => {
                console.log('Ошибка! Не могу связаться с API. ' + error);
            })
        result.then((data )=>{
            this.currency = data
        })
    }

    get funcCurrency(){
        return this.currency
    }

    set funcCurrency(data : Array<Currency>){
        this.currency = data
    }

    public getSymbol(code : string) {
        return "USD" === code ? '$' : '€'
    }

    public getImageFlag(code : string) {
        return require("USD" === code ? "../../../../images/flags/us.png" : "../../../../images/flags/eu.png")
    }

    // public getImageArrow(item : Currency) {
    //     return require((Number(item.value) - Number(item.previous) > 0) ? "&#128315;" : "🔺")
    // }

}