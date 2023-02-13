import Vue from 'vue'
import Component from "vue-class-component";
import {Assignment} from "@/store/model";

@Component({
    components: {
    }
})
export default class CreateAssigment extends Vue {
    private assignment : Assignment | null = null

    get funcAssignment(){
        return this.assignment
    }

    set funcAssignment(data : Assignment | null){
        this.assignment = data
    }
}