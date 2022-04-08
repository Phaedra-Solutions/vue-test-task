import { ActionTree } from 'vuex'
import { StateInterface } from '../index'
import { UserStateInterface } from './state'
import * as Actions from './constants'

const actions: ActionTree<UserStateInterface, StateInterface> = {
  [Actions.LOGIN]: ({ commit }, user) => {
    // Saving the mock user in localstrage
    localStorage.setItem('user', JSON.stringify(user))
    commit(Actions.LOGIN, user)
  },
  [Actions.LOGOUT]: ({ commit }) => {
    // Removing the mock user in localstrage
    localStorage.removeItem('user')
    commit(Actions.LOGOUT)
  }
}

export default actions
