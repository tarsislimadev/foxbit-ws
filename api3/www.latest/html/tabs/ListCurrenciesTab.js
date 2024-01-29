import { Tab } from './Tab.js'

export class ListCurrenciesTab extends Tab {
  path = 'List Currencies'

  getUrl() {
    return '/currencies'
  }
}
