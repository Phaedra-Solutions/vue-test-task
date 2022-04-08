import { Module } from 'vuex'
import { StateInterface } from '../index'
import state, { ClassStateInterface } from './state'
import actions from './actions'
import getters from './getters'
import mutations from './mutations'

const user: Module<ClassStateInterface, StateInterface> = {
  namespaced: true,
  actions,
  getters,
  mutations,
  state
}

export default user
