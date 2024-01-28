import { HTML } from '@brtmvdl/frontend'
import { InputTextGroupComponent } from '../components/index.js'
import { Tab } from './Tab.js'

export class GetMarketQuotationTab extends Tab {
  path = 'Get a market quotation'

  children = {
    side: new InputTextGroupComponent('side'),
    base_currency: new InputTextGroupComponent('base_currency'),
    quote_currency: new InputTextGroupComponent('quote_currency'),
    amount: new InputTextGroupComponent('amount'),
  }

  getForm() {
    return [this.children.side, this.children.base_currency, this.children.quote_currency, this.children.amount,]
  }

  getUrl() {
    return '/markets/quotes'
  }

  getQuery() {
    return {
      side: this.children.side.children.input.getValue(),
      base_currency: this.children.base_currency.children.input.getValue(),
      quote_currency: this.children.quote_currency.children.input.getValue(),
      amount: this.children.amount.children.input.getValue(),
    }
  }
}
