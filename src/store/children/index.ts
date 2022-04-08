import { Module } from 'vuex'
import { StateInterface } from '../index'
import state, { ChildrenStateInterface } from './state'
import actions from './actions'
import getters from './getters'
import mutations from './mutations'

const children: Module<ChildrenStateInterface, StateInterface> = {
  namespaced: true,
  actions,
  getters,
  mutations,
  state
}

export default children
