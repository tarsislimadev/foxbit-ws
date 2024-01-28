import { InputTextGroupComponent } from '../components/input-text-group.js'
import { Tab } from './Tab.js'

export class GetOrderClientIDTab extends Tab {
  path = 'Get an order by client ID'

  children = {
    client_order_id: new InputTextGroupComponent('client_order_id'),
  }

  getClientOrderIdInputTextGroup() {
    return this.children.client_order_id
  }

  getForm() {
    return [
      this.getClientOrderIdInputTextGroup(),
    ]
  }

  getUrl() {
    return `/orders/by-client-order-id/${this.children.client_order_id.getValue()}`
  }

}
