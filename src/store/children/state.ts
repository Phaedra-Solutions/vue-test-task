import { Child } from 'src/components/models'

export interface ChildrenStateInterface {
  children: Array<Child>,
  addChildrenDialog: boolean
}

function state(): ChildrenStateInterface {
  return {
    children: [],
    addChildrenDialog: false
  }
}

export default state
