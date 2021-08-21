import Vue from "vue";
import Vuex from "vuex";

export const store = new Vuex.Store({
    state: {
        price : 100
    },
    getters: {
        orginalPrice(state){
            return state.price;
        },
        doublePrice(state){
            return state.price*2;
        },
        triplePrice(state){
            return state.price*3;
        }
    }
})