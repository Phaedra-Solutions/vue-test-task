import { ActionTree } from 'vuex'
import { StateInterface } from '../index'
import { ClassStateInterface } from './state'
import * as Actions from './constants'

const actions: ActionTree<ClassStateInterface, StateInterface> = {
  [Actions.GET_CLASSES]: ({ commit }, classes) => {
    commit(Actions.GET_CLASSES, classes)
  },
  [Actions.REMOVE_FROM_CLASS]: ({ commit }, id) => {
    commit(Actions.REMOVE_FROM_CLASS, id)
  },
  [Actions.SHOW_ADD_CLASS_DIALOG]: ({ commit }) => {
    commit(Actions.SHOW_ADD_CLASS_DIALOG)
  },
  [Actions.HIDE_ADD_CLASS_DIALOG]: ({ commit }) => {
    commit(Actions.HIDE_ADD_CLASS_DIALOG)
  },
  [Actions.ADD_CLASS]: ({ commit }, child) => {
    commit(Actions.ADD_CLASS, child)
  },
  [Actions.SELECT_CLASS]: ({ commit }, id) => {
    commit(Actions.SELECT_CLASS, id)
  },
  [Actions.CLEAR_SELECTED_CLASS]: ({ commit }) => {
    commit(Actions.CLEAR_SELECTED_CLASS)
  },
  [Actions.ENROLL]: ({ commit }, { classId, childId }) => {
    commit(Actions.ENROLL, { classId, childId })
  },
  [Actions.UNROLL]: ({ commit }, { classId, childId }) => {
    commit(Actions.UNROLL, { classId, childId })
  }
}

export default actions
