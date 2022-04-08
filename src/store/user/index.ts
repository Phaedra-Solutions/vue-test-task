import { Module } from 'vuex'
import { StateInterface } from '../index'
import state, { UserStateInterface } from './state'
import actions from './actions'
import getters from './getters'
import mutations from './mutations'

const schoolModule: Module<UserStateInterface, StateInterface> = {
  namespaced: true,
  actions,
  getters,
  mutations,
  state
}

export default schoolModule
