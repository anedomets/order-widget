import Vue from 'vue'
import {createStore} from '@/store/store.ts'
import Component from "vue-class-component";
import {Assignment, CurrencyRate} from "@/store/model";

@Component({
    components: {
    },
    store: createStore()
})
export default class Form extends Vue {
    private assignment : Assignment | null = null

    get funcAssignment(){
        return this.assignment
    }

    set funcAssignment(data : Assignment | null){
        this.assignment = data
    }
}