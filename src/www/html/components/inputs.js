import { HTML } from '@brtmvdl/frontend'
import { InputTextGroupComponent } from './input-text-group.js'
import { SelectGroupComponent } from './select-group.js'

import * as lists from '../lists.js'

export class InputsHTML extends HTML {
  children = {
    APIKey: new InputTextGroupComponent('APIKey'),
    Nonce: new InputTextGroupComponent('Nonce'),
    UserId: new InputTextGroupComponent('UserId'),
    Signature: new InputTextGroupComponent('Signature'),
    Code: new InputTextGroupComponent('Code'),
    InstrumentId: new SelectGroupComponent('InstrumentId'),
    OMSId: new InputTextGroupComponent('OMSId'),
    AccountId: new InputTextGroupComponent('AccountId'),
    ClOrderId: new InputTextGroupComponent('ClOrderId'),
    OrderId: new InputTextGroupComponent('OrderId'),
    StartIndex: new InputTextGroupComponent('StartIndex'),
    Count: new InputTextGroupComponent('Count'),
    ProductId: new InputTextGroupComponent('ProductId'),
    Amount: new InputTextGroupComponent('Amount'),
    OrderType: new SelectGroupComponent('OrderType'),
    MakerTaker: new InputTextGroupComponent('MakerTaker'),
    Side: new SelectGroupComponent('Side'),
    Quantity: new InputTextGroupComponent('Quantity'),
    Depth: new InputTextGroupComponent('Depth'),
    Interval: new InputTextGroupComponent('Interval'),
    FromDate: new InputTextGroupComponent('FromDate'),
    ToDate: new InputTextGroupComponent('ToDate'),
    Limit: new InputTextGroupComponent('Limit'),
    TimeInForce: new SelectGroupComponent('TimeInForce'),
    ClientOrderId: new InputTextGroupComponent('ClientOrderId'),
    OrderIdOCO: new InputTextGroupComponent('OrderIdOCO'),
    UseDisplayQuantity: new InputTextGroupComponent('UseDisplayQuantity'),
    PegPriceType: new SelectGroupComponent('PegPriceType'),
    LimitPrice: new InputTextGroupComponent('LimitPrice'),
    MarketId: new InputTextGroupComponent('MarketId'),
    IncludeLastCount: new InputTextGroupComponent('IncludeLastCount'),
  }

  getAPIKeyComponent() {
    this.children.APIKey.children.input.setAttr('disabled', true)
    this.children.APIKey.children.input.setValue(0)
    return this.children.APIKey
  }

  getNonceComponent() {
    this.children.Nonce.children.input.setAttr('disabled', true)
    this.children.Nonce.children.input.setValue(0)
    return this.children.Nonce
  }

  getUserIdComponent() {
    this.children.UserId.children.input.setAttr('disabled', true)
    this.children.UserId.children.input.setValue(0)
    return this.children.UserId
  }

  getSignatureComponent() {
    this.children.Signature.children.input.setAttr('disabled', true)
    this.children.Signature.children.input.setValue(0)
    return this.children.Signature
  }

  getCodeComponent() {
    return this.children.Code
  }

  getInstrumentIdComponent() {
    lists.getInstrumentsList().map(({ InstrumentId, Symbol }) => this.children.InstrumentId.children.select.addOption(InstrumentId, Symbol))
    return this.children.InstrumentId
  }

  getOMSIdComponent() {
    this.children.OMSId.children.input.setAttr('disabled', true)
    this.children.OMSId.children.input.setValue(1)
    return this.children.OMSId
  }

  getAccountIdComponent() {
    this.children.AccountId.children.input.setAttr('disabled', true)
    this.children.AccountId.children.input.setValue(0)
    return this.children.AccountId
  }

  getClOrderIdComponent() {
    return this.children.ClOrderId
  }

  getOrderIdComponent() {
    return this.children.OrderId
  }

  getStartIndexComponent() {
    return this.children.StartIndex
  }

  getCountComponent() {
    return this.children.Count
  }

  getProductIdComponent() {
    return this.children.ProductId
  }

  getAmountComponent() {
    return this.children.Amount
  }

  getOrderTypeComponent() {
    Array.from(['Unknown', 'Market', 'Limit', 'StopMarket', 'StopLimit', 'TrailingStopMarket', 'TrailingStopLimit', 'BlockTrade']).map((orderType, index) => this.children.OrderType.children.select.addOption(index, orderType))
    return this.children.OrderType
  }

  getMakerTakerComponent() {
    return this.children.MakerTaker
  }

  getSideComponent() {
    Array.from(['Buy', 'Sell', 'Short', 'unknown']).map((side, index) => this.children.Side.children.select.addOption(index, side))
    return this.children.Side
  }

  getQuantityComponent() {
    return this.children.Quantity
  }

  getDepthComponent() {
    return this.children.Depth
  }

  getIntervalComponent() {
    return this.children.Interval
  }

  getFromDateComponent() {
    return this.children.FromDate
  }

  getToDateComponent() {
    return this.children.ToDate
  }

  getLimitComponent() {
    return this.children.Limit
  }

  getTimeInForceComponent() {
    Array.from(['Unknown', 'GTC', 'OPG', 'IOC', 'FOK', 'GTX', 'GTD']).map((timeInForce, index) => this.children.TimeInForce.children.select.addOption(index, timeInForce))
    return this.children.TimeInForce
  }

  getClientOrderIdComponent() {
    return this.children.ClientOrderId
  }

  getOrderIdOCOComponent() {
    return this.children.OrderIdOCO
  }

  getUseDisplayQuantityComponent() {
    return this.children.UseDisplayQuantity
  }

  getPegPriceTypeComponent() {
    Array.from(['Last', 'Bid', 'Ask', 'Midpoint']).map((type, index) => this.children.PegPriceType.children.select.addOption(index + 1, type))
    return this.children.PegPriceType
  }

  getLimitPriceComponent() {
    return this.children.LimitPrice
  }

  getMarketIdComponent() {
    this.children.MarketId.children.input.setValue('btcbrl')
    return this.children.MarketId
  }

  getIncludeLastCountComponent() {
    return this.children.IncludeLastCount
  }
}
