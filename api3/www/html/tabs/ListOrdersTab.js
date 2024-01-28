import { Tab } from './Tab.js'

export class ListOrdersTab extends Tab {
  path = 'List orders'

  getUrl() {
    return '/orders'
  }
}
