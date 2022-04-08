import { GetterTree } from 'vuex'
import { StateInterface } from '../index'
import { ClassStateInterface } from './state'

const getters: GetterTree<ClassStateInterface, StateInterface> = {
  list: state => state.classes,
  addDialog: state => state.addClassDialog,
  selectedClass: state => state.selectedClass
}

export default getters
