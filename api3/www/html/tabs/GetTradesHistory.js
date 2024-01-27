import { Tab } from './Tab.js'
import { InputTextGroupComponent, SelectGroupComponent } from '../components/index.js'
import * as lists from '../utils/lists.js'

export class GetTradesHistoryHTML extends Tab {
  path = 'GetTradesHistory'
  children = {
    omsId: new InputTextGroupComponent('omsId'),
    accountId: new InputTextGroupComponent('accountId'),
    instrumentId: new SelectGroupComponent('instrumentId'),
    tradeId: new InputTextGroupComponent('tradeId'),
    orderId: new InputTextGroupComponent('orderId'),
    userId: new InputTextGroupComponent('userId'),
    startTimeStamp: new InputTextGroupComponent('startTimeStamp'),
    endTimeStamp: new InputTextGroupComponent('endTimeStamp'),
    depth: new InputTextGroupComponent('depth'),
    startIndex: new InputTextGroupComponent('startIndex'),
    executionId: new InputTextGroupComponent('executionId'),
  }

  getOmsIdInputTextGroup() {
    return this.children.omsId
  }

  getAccountIdInputTextGroup() {
    return this.children.accountId
  }

  getInstrumentIdInputTextGroup() {
    lists.getInstrumentsList().map(({ InstrumentId, Symbol }) => this.children.instrumentId.children.select.addOption(InstrumentId, Symbol))
    return this.children.instrumentId
  }

  getTradeIdInputTextGroup() {
    return this.children.tradeId
  }

  getOrderIdInputTextGroup() {
    return this.children.orderId
  }

  getUserIdInputTextGroup() {
    return this.children.userId
  }

  getStartTimeStampInputTextGroup() {
    return this.children.startIndex
  }

  getEndTimeStampInputTextGroup() {
    return this.children.endTimeStamp
  }

  getDepthInputTextGroup() {
    return this.children.depth
  }

  getStartIndexInputTextGroup() {
    return this.children.startIndex
  }

  getExecutionIdInputTextGroup() {
    return this.children.executionId
  }

  getForm() {
    return [
      // this.getOmsIdInputTextGroup(),
      // this.getAccountIdInputTextGroup(),
      this.getInstrumentIdInputTextGroup(),
      this.getTradeIdInputTextGroup(),
      this.getOrderIdInputTextGroup(),
      // this.getUserIdInputTextGroup(),
      this.getStartTimeStampInputTextGroup(),
      this.getEndTimeStampInputTextGroup(),
      this.getDepthInputTextGroup(),
      this.getStartIndexInputTextGroup(),
      this.getExecutionIdInputTextGroup(),
    ]
  }

  getBody() {
    return {
      omsId: 1, //this.children.omsId.getValue(),
      // accountId: this.children.accountId.getValue(),
      instrumentId: this.children.instrumentId.getValue(),
      tradeId: this.children.tradeId.getValue(),
      orderId: this.children.orderId.getValue(),
      // userId: this.children.userId.getValue(),
      startTimeStamp: this.children.startTimeStamp.getValue(),
      endTimeStamp: this.children.endTimeStamp.getValue(),
      depth: this.children.depth.getValue(),
      startIndex: this.children.startIndex.getValue(),
      executionId: this.children.executionId.getValue(),
    }
  }
}
