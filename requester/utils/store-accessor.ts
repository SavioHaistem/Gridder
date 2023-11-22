import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'
import Login from '~/store/login'

let users: Login

function initialiseStores(store: Store<any>): void {
  users = getModule(Login, store)
}

export { initialiseStores, users }