import { Class } from 'src/components/models'

export interface ClassStateInterface {
  classes: Array<Class>,
  addClassDialog: boolean,
  selectedClass: number | null,
}

function state(): ClassStateInterface {
  return {
    classes: [],
    addClassDialog: false,
    selectedClass: null
  }
}

export default state
