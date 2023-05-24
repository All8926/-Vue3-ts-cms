import { defineStore } from 'pinia'
import {type IHomeState} from './types'
export const useLoginStore = defineStore('login', {
  state: ():IHomeState => {
    return {
      name:'',

    }
  },

  actions:{
    add(){
      // this.count++
    }
  },

  getters:{

  },
},

)
