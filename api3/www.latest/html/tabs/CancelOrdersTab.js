import { SelectGroupComponent } from '../components/select-group.js'
import { Tab } from './Tab.js'

export class CancelOrdersTab extends Tab {
  path = 'Cancel orders'

  children = {
    type: new SelectGroupComponent(),
  }

  getMethod() {
    return 'PUT'
  }

  getUrl() {
    return '/orders/cancel'
  }

  getTypeSelectGroup() {
    Array.from(['ALL', 'MARKET', 'MARKET_SIDE', 'SN', 'ID', 'CLIENT_ORDER_ID'])
      .map((type) => this.children.type.children.select.addOption(type, type))
    return this.children.type
  }

  getForm() {
    return [this.getTypeSelectGroup()]
  }

  getBody() {
    return { type: this.children.type.getValue() }
  }

}
