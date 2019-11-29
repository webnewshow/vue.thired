import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export default new Vuex.Store({
    // vue中储存的数据
    state:{
        count:0
    },
    mutations:{
        changestate (state){
            state.count++
        }
    },
    actions:{

    },
    getters:{

    }

})