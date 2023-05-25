import { defineStore } from 'pinia'
import {type IHomeState} from './types'
export const useHomeStore = defineStore('home', {
  state: ():IHomeState => {
    return {
      name:'',
      count:0
    }
  },

  actions:{
    add(){
      this.count++
    }
  },

  getters:{

  },
  persist: true
},

)
