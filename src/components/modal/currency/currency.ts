import Vue from 'vue'
import {createStore} from '@/store/store.ts'
import Vuex from "vuex";
import Component from "vue-class-component";
import VueCookies from "vue-cookies";
import keycloakInstance from "@/plugins/keycloak";
import {CurrencyRate, State} from "@/store/model";
import axios from "axios";

Vue.use(Vuex);
Vue.use(VueCookies);
@Component({
    components: {
    },
    store:createStore()
})
export default class Currency extends Vue {

    private currencyRate : CurrencyRate | null = null
    private columns = [
        {
            label: 'currencyId',
            field: 'currencyId',
        },
        {
            label: 'numCode',
            field: 'numCode',
        },
        {
            label: 'charCode',
            field: 'charCode',
        },
        {
            label: 'nominal',
            field: 'nominal',
        },
        {
            label: 'name',
            field: 'name',
        },
        {
            label: 'value',
            field: 'value',
        },
        {
            label: 'previous',
            field: 'previous',
        },
    ]

    mounted(){
        axios.interceptors.request.use(async config => {
           const token = keycloakInstance.token
           config.headers.common['Authorization'] = `Bearer ${token}`
            return config
        })
        const result = axios.get('http://localhost:8010/api/v1/currency-rates/last')
            .then((response: any) => {
                   return response.data;
                }
            )
            .catch((error) => {
                console.log('Ошибка! Не могу связаться с API. ' + error);
            })
        result.then((data )=>{
            this.currencyRate = data
        })
    }

    get funcCurrencyRate(){
        return this.currencyRate
    }

    set funcCurrencyRate(data : CurrencyRate | null){
        this.currencyRate = data
    }

    get funcCurrencies(){
        return this.currencyRate?.currencies
    }

    get funcDate(){
        const date : Date = new Date(<string>this.currencyRate?.createDate);
        return date.toLocaleString()
    }

    public onCellClick() {
        // alert("Hi")
        // params.row - row object
        // params.column - column object
        // params.rowIndex - index of this row on the current page.
        // params.event - click event
    }

}