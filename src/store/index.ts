import { store } from 'quasar/wrappers'
import { InjectionKey } from 'vue'
import {
  createStore,
  Store as VuexStore,
  useStore as vuexUseStore
} from 'vuex'

import user from './user'
import { UserStateInterface } from './user/state'
import classes from './classes'
import { ClassStateInterface } from './classes/state'
import children from './children'
import { ChildrenStateInterface } from './children/state'

export interface StateInterface {
  user: UserStateInterface;
  classes: ClassStateInterface,
  children: ChildrenStateInterface
}

// provide typings for `this.$store`
declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $store: VuexStore<StateInterface>
  }
}

// provide typings for `useStore` helper
export const storeKey: InjectionKey<VuexStore<StateInterface>> = Symbol('vuex-key')

export default store(function (/* { ssrContext } */) {
  const Store = createStore<StateInterface>({
    modules: {
      user,
      classes,
      children
    },

    // enable strict mode (adds overhead!)
    // for dev mode and --debug builds only
    strict: !!process.env.DEBUGGING
  })

  return Store
})

export function useStore() {
  return vuexUseStore(storeKey)
}
