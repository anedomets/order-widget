import Vue from 'vue'
import Component from "vue-class-component";
import CreateAssigment from "@/components/createAssigment/CreateAssigment.vue";

@Component({
    components: {
        CreateAssigment
    }
})
export default class Tab extends Vue {

    private selectTab : String = new String('tab1')

}