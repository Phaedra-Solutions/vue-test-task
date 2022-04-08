import { MutationTree } from 'vuex'
import { UserStateInterface } from './state'
import * as Mutations from './constants'

const mutation: MutationTree<UserStateInterface> = {
  [Mutations.LOGIN]: (state, payload) => {
    state.user = payload
  },
  [Mutations.LOGOUT]: (state) => {
    state.user = null
  }
}

export default mutation
