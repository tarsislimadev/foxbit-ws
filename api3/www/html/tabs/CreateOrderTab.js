import { Tab } from './Tab.js'

export class CreateOrderTab extends Tab {
  path = 'Create an order'

  getMethod() {
    return 'POST'
  }

  getUrl() {
    return '/orders'
  }
}
