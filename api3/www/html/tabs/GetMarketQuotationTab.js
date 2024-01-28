import { HTML } from '@brtmvdl/frontend'
import { InputTextGroupComponent, SelectGroupComponent } from '../components/index.js'
import { Tab } from './Tab.js'

import { getCurrenciesList } from '../utils/lists.js'

export class GetMarketQuotationTab extends Tab {
  path = 'Get a market quotation'

  children = {
    side: new SelectGroupComponent('side'),
    base_currency: new SelectGroupComponent('base_currency'),
    quote_currency: new SelectGroupComponent('quote_currency'),
    amount: new InputTextGroupComponent('amount'),
  }

  getSideInputTextGroup() {
    Array.from(['buy', 'sell']).map((side) => this.children.side.children.select.addOption(side, side))
    return this.children.side
  }

  getBaseCurrencyInputTextGroup() {
    getCurrenciesList()
      .filter((currency) => currency?.category?.code == 'cripto')
      .map(({ symbol, name }) => this.children.base_currency.children.select.addOption(symbol, `${name} (${symbol})`))
    return this.children.base_currency
  }

  getQuoteCurrencyInputTextGroup() {
    getCurrenciesList()
      .filter(({ type }) => type == 'FIAT')
      .map(({ symbol, name }) => this.children.quote_currency.children.select.addOption(symbol, `${name} (${symbol})`))
    return this.children.quote_currency
  }

  getAmountInputTextGroup() {
    return this.children.amount
  }

  getForm() {
    return [
      this.getSideInputTextGroup(),
      this.getBaseCurrencyInputTextGroup(),
      this.getQuoteCurrencyInputTextGroup(),
      this.getAmountInputTextGroup(),
    ]
  }

  getUrl() {
    return '/markets/quotes'
  }

  getQuery() {
    return {
      side: this.children.side.getValue(),
      base_currency: this.children.base_currency.getValue(),
      quote_currency: this.children.quote_currency.getValue(),
      amount: this.children.amount.getValue(),
    }
  }
}
