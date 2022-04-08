import { ActionTree } from 'vuex'
import { StateInterface } from '../index'
import { ChildrenStateInterface } from './state'
import * as Actions from './constants'

const actions: ActionTree<ChildrenStateInterface, StateInterface> = {
  [Actions.GET_CHILDREN]: ({ commit }, children) => {
    commit(Actions.GET_CHILDREN, children)
  },
  [Actions.SHOW_ADD_CHILDREN_DIALOG]: ({ commit }) => {
    commit(Actions.SHOW_ADD_CHILDREN_DIALOG)
  },
  [Actions.HIDE_ADD_CHILDREN_DIALOG]: ({ commit }) => {
    commit(Actions.HIDE_ADD_CHILDREN_DIALOG)
  },
  [Actions.ADD_CHILD]: ({ commit }, child) => {
    commit(Actions.ADD_CHILD, child)
  },
  [Actions.DELETE_CHILD]: ({ commit }, id) => {
    commit(Actions.DELETE_CHILD, id)
  }
}

export default actions
