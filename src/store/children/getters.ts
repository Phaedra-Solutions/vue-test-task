import { GetterTree } from 'vuex'
import { StateInterface } from '../index'
import { ChildrenStateInterface } from './state'

const getters: GetterTree<ChildrenStateInterface, StateInterface> = {
  list: state => state.children,
  addDialog: state => state.addChildrenDialog
}

export default getters
