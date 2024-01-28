import { InputTextGroupComponent } from '../components/input-text-group.js'
import { Tab } from './Tab.js'

export class GetOrderIDTab extends Tab {
  path = 'Get an order by ID'

  children = {
    id: new InputTextGroupComponent('id'),
  }

  getIdInputTextGroup() {
    return this.children.id
  }

  getForm() {
    return [
      this.getIdInputTextGroup(),
    ]
  }

  getUrl() {
    return `/orders/by-order-id/${this.children.id.getValue()}`
  }

}
