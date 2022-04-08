import { MutationTree } from 'vuex'
import { ClassStateInterface } from './state'
import * as Mutations from './constants'
import { Class } from 'src/components/models'

const mutation: MutationTree<ClassStateInterface> = {
  [Mutations.GET_CLASSES]: (state, payload) => {
    state.classes = payload
  },
  [Mutations.REMOVE_FROM_CLASS]: (state, payload) => {
    state.classes = state.classes.map((_class: Class) => {
      return {
        ..._class,
        children: _class.children.filter((x: number) => x !== payload)
      }
    })
  },
  [Mutations.SHOW_ADD_CLASS_DIALOG]: (state) => {
    state.addClassDialog = true
  },
  [Mutations.HIDE_ADD_CLASS_DIALOG]: (state) => {
    state.addClassDialog = false
  },
  [Mutations.ADD_CLASS]: (state, payload) => {
    state.classes = [...state.classes, { ...payload, id: new Date().getTime(), children: [] }]
  },
  [Mutations.SELECT_CLASS]: (state, paylaod) => {
    state.selectedClass = paylaod
  },
  [Mutations.CLEAR_SELECTED_CLASS]: (state) => {
    state.selectedClass = null
  },
  [Mutations.ENROLL]: (state, { classId, childId }) => {
    state.classes = state.classes.map((_class: Class) => {
      if (_class.id === classId) {
        return {
          ..._class,
          children: [..._class.children, childId]
        }
      }
      return _class
    })
  },
  [Mutations.UNROLL]: (state, { classId, childId }) => {
    state.classes = state.classes.map((_class: Class) => {
      if (_class.id === classId) {
        return {
          ..._class,
          children: _class.children.filter((x: number) => x !== childId)
        }
      }
      return _class
    })
  }
}

export default mutation
