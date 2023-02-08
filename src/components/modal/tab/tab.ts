import Vue from 'vue'
import {createStore} from '@/store/store.ts'
import Component from "vue-class-component";
import Form from "@/components/modal/form/Form.vue";

@Component({
    components: {
        Form
    },
    store: createStore()
})
export default class Tab extends Vue {

}