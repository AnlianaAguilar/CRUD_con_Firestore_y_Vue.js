import Vue from 'vue'
import Vuex from 'vuex'
import {db} from '@/firebase/firebase.js'
import {collection, getDocs} from 'firebase/firestore'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    Usuarios:[]
  },
  getters: {
  },
  mutations: {
    ADD_USER(state, user){
      state.Usuarios.push({
        id:user.id,
        Nombre: user.data().Nombre,
        email:user.data().email,
      })
    },
    RESET_USER(state){
      state.Usuarios=[]
    }
  },
  actions: {
    async fetchUsers({commit}){
      let querySnapShop = await getDocs(collection(db,'Usuarios'))

      //se llama a la segunda mutacion
      commit('RESET_USER')
      querySnapShop.forEach((doc)=>{
        console.log('Identificador',doc.id, ', Data:',doc.data())
        commit('ADD_USER', doc)
      })
    }
  },
  modules: {
  }
})
