import { MutationTree } from 'vuex'
import { ChildrenStateInterface } from './state'
import * as Mutations from './constants'
import { Child } from 'src/components/models'

const mutation: MutationTree<ChildrenStateInterface> = {
  [Mutations.GET_CHILDREN]: (state, payload) => {
    state.children = payload
  },
  [Mutations.SHOW_ADD_CHILDREN_DIALOG]: (state) => {
    state.addChildrenDialog = true
  },
  [Mutations.HIDE_ADD_CHILDREN_DIALOG]: (state) => {
    state.addChildrenDialog = false
  },
  [Mutations.ADD_CHILD]: (state, payload) => {
    state.children = [...state.children, { ...payload, id: new Date().getTime() }]
  },
  [Mutations.DELETE_CHILD]: (state, payload) => {
    state.children = state.children.filter((child: Child) => child.id !== payload)
  }
}

export default mutation
