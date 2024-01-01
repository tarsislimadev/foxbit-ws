import foxbit from './foxbit.js'
import * as config from './config.js'
import { Authenticate2FAMessage, AuthenticateUserMessage, CancelAllOrdersMessage, CancelOrderMessage, GetAccountInfoMessage, GetAccountPositionsMessage, GetAccountTradesMessage, GetDepositTicketsMessage, GetInstrumentMessage, GetInstrumentsMessage, GetL2SnapshotMessage, GetOpenOrdersMessage, GetOrderFeeMessage, GetOrderHistoryMessage, GetOrderStatusMessage, GetProductsMessage, GetTickerHistoryMessage, GetTradesHistoryMessage, GetUserInfoMessage, GetUserPermissionsMessage, GetWithdrawTicketsMessage, LogoutMessage, SendOrderMessage, SubscribeAccountEventsMessage, SubscribeLevel1MarketsMessage, SubscribeLevel1Message, SubscribeLevel2Message, SubscribeTickerMessage, SubscribeTradesMessage, UnsubscribeLevel1Message, UnsubscribeLevel2Message, UnsubscribeTickerMessage, UnsubscribeTradesMessage } from './api/message/index.js'
import { Authenticate2FAReply, AuthenticateUserReply, CancelAllOrdersReply, CancelOrderReply, GetAccountInfoReply, GetAccountPositionsReply, GetAccountTradesReply, GetDepositTicketsReply, GetInstrumentReply, GetInstrumentsReply, GetL2SnapshotReply, GetOpenOrdersReply, GetOrderFeeReply, GetOrderHistoryReply, GetOrderStatusReply, GetProductsReply, GetTickerHistoryReply, GetTradesHistoryReply, GetUserInfoReply, GetUserPermissionsReply, GetWithdrawTicketsReply, LogoutReply, SendOrderReply, SubscribeAccountEventsReply, SubscribeLevel1MarketsReply, SubscribeLevel1Reply, SubscribeLevel2Reply, SubscribeTickerReply, SubscribeTradesReply, UnsubscribeLevel1Reply, UnsubscribeLevel2Reply, UnsubscribeTickerReply, UnsubscribeTradesReply } from './api/reply/index.js'
import { Authenticate2FAError, AuthenticateUserError, CancelAllOrdersError, CancelOrderError, GetAccountInfoError, GetAccountPositionsError, GetAccountTradesError, GetDepositTicketsError, GetInstrumentError, GetInstrumentsError, GetL2SnapshotError, GetOpenOrdersError, GetOrderFeeError, GetOrderHistoryError, GetOrderStatusError, GetProductsError, GetTickerHistoryError, GetTradesHistoryError, GetUserInfoError, GetUserPermissionsError, GetWithdrawTicketsError, LogoutError, SendOrderError, SubscribeAccountEventsError, SubscribeLevel1MarketsError, SubscribeLevel1Error, SubscribeLevel2Error, SubscribeTickerError, SubscribeTradesError, UnsubscribeLevel1Error, UnsubscribeLevel2Error, UnsubscribeTickerError, UnsubscribeTradesError } from './api/error/index.js'

const operations = {
  AuthenticateUser: () => {
    foxbit.send(new AuthenticateUserMessage(config.user, config.key, config.secret))
    foxbit.addEventListener('AuthenticateUser', (reply) => foxbit.logger.log('AuthenticateUser', new AuthenticateUserReply(reply)))
    foxbit.addEventListener('AuthenticateUserError', (error) => foxbit.logger.log('AuthenticateUserError', new AuthenticateUserError(error)))
  },
  Authenticate2FA: () => {
    foxbit.send(new Authenticate2FAMessage())
    foxbit.addEventListener('Authenticate2FA', (reply) => foxbit.logger.log('Authenticate2FA', new Authenticate2FAReply(reply)))
    foxbit.addEventListener('Authenticate2FAError', (error) => foxbit.logger.log('Authenticate2FAError', new Authenticate2FAError(error)))
  },
  CancelAllOrders: () => {
    foxbit.send(new CancelAllOrdersMessage())
    foxbit.addEventListener('CancelAllOrders', (reply) => foxbit.logger.log('CancelAllOrders', new CancelAllOrdersReply(reply)))
    foxbit.addEventListener('CancelAllOrdersError', (error) => foxbit.logger.log('CancelAllOrdersError', new CancelAllOrdersError(error)))
  },
  CancelOrder: () => {
    foxbit.send(new CancelOrderMessage())
    foxbit.addEventListener('CancelOrder', (reply) => foxbit.logger.log('CancelOrder', new CancelOrderReply(reply)))
    foxbit.addEventListener('CancelOrderError', (error) => foxbit.logger.log('CancelOrderError', new CancelOrderError(error)))
  },
  GetAccountInfo: () => {
    foxbit.send(new GetAccountInfoMessage())
    foxbit.addEventListener('GetAccountInfo', (reply) => foxbit.logger.log('GetAccountInfo', new GetAccountInfoReply(reply)))
    foxbit.addEventListener('GetAccountInfoError', (error) => foxbit.logger.log('GetAccountInfoError', new GetAccountInfoError(error)))
  },
  GetAccountPositions: () => {
    foxbit.send(new GetAccountPositionsMessage())
    foxbit.addEventListener('GetAccountPositions', (reply) => foxbit.logger.log('GetAccountPositions', new GetAccountPositionsReply(reply)))
    foxbit.addEventListener('GetAccountPositionsError', (error) => foxbit.logger.log('GetAccountPositionsError', new GetAccountPositionsError(error)))
  },
  GetAccountTrades: () => {
    foxbit.send(new GetAccountTradesMessage())
    foxbit.addEventListener('GetAccountTrades', (reply) => foxbit.logger.log('GetAccountTrades', new GetAccountTradesReply(reply)))
    foxbit.addEventListener('GetAccountTradesError', (error) => foxbit.logger.log('GetAccountTradesError', new GetAccountTradesError(error)))
  },
  GetDepositTickets: () => {
    foxbit.send(new GetDepositTicketsMessage())
    foxbit.addEventListener('GetDepositTickets', (reply) => foxbit.logger.log('GetDepositTickets', new GetDepositTicketsReply(reply)))
    foxbit.addEventListener('GetDepositTicketsError', (error) => foxbit.logger.log('GetDepositTicketsError', new GetDepositTicketsError(error)))
  },
  GetInstrument: () => {
    foxbit.send(new GetInstrumentMessage())
    foxbit.addEventListener('GetInstrument', (reply) => foxbit.logger.log('GetInstrument', new GetInstrumentReply(reply)))
    foxbit.addEventListener('GetInstrumentError', (error) => foxbit.logger.log('GetInstrumentError', new GetInstrumentError(error)))
  },
  GetInstruments: () => {
    foxbit.send(new GetInstrumentsMessage())
    foxbit.addEventListener('GetInstruments', (reply) => foxbit.logger.log('GetInstruments', new GetInstrumentsReply(reply)))
    foxbit.addEventListener('GetInstrumentsError', (error) => foxbit.logger.log('GetInstrumentsError', new GetInstrumentsError(error)))
  },
  GetOpenOrders: () => {
    foxbit.send(new GetOpenOrdersMessage())
    foxbit.addEventListener('GetOpenOrders', (reply) => foxbit.logger.log('GetOpenOrders', new GetOpenOrdersReply(reply)))
    foxbit.addEventListener('GetOpenOrdersError', (error) => foxbit.logger.log('GetOpenOrdersError', new GetOpenOrdersError(error)))
  },
  GetOrderFee: () => {
    foxbit.send(new GetOrderFeeMessage())
    foxbit.addEventListener('GetOrderFee', (reply) => foxbit.logger.log('GetOrderFee', new GetOrderFeeReply(reply)))
    foxbit.addEventListener('GetOrderFeeError', (error) => foxbit.logger.log('GetOrderFeeError', new GetOrderFeeError(error)))
  },
  GetOrderHistory: () => {
    foxbit.send(new GetOrderHistoryMessage())
    foxbit.addEventListener('GetOrderHistory', (reply) => foxbit.logger.log('GetOrderHistory', new GetOrderHistoryReply(reply)))
    foxbit.addEventListener('GetOrderHistoryError', (error) => foxbit.logger.log('GetOrderHistoryError', new GetOrderHistoryError(error)))
  },
  GetOrderStatus: () => {
    foxbit.send(new GetOrderStatusMessage())
    foxbit.addEventListener('GetOrderStatus', (reply) => foxbit.logger.log('GetOrderStatus', new GetOrderStatusReply(reply)))
    foxbit.addEventListener('GetOrderStatusError', (error) => foxbit.logger.log('GetOrderStatusError', new GetOrderStatusError(error)))
  },
  GetProducts: () => {
    foxbit.send(new GetProductsMessage())
    foxbit.addEventListener('GetProducts', (reply) => foxbit.logger.log('GetProducts', new GetProductsReply(reply)))
    foxbit.addEventListener('GetProductsError', (error) => foxbit.logger.log('GetProductsError', new GetProductsError(error)))
  },
  GetL2Snapshot: () => {
    foxbit.send(new GetL2SnapshotMessage())
    foxbit.addEventListener('GetL2Snapshot', (reply) => foxbit.logger.log('GetL2Snapshot', new GetL2SnapshotReply(reply)))
    foxbit.addEventListener('GetL2SnapshotError', (error) => foxbit.logger.log('GetL2SnapshotError', new GetL2SnapshotError(error)))
  },
  GetTickerHistory: () => {
    foxbit.send(new GetTickerHistoryMessage())
    foxbit.addEventListener('GetTickerHistory', (reply) => foxbit.logger.log('GetTickerHistory', new GetTickerHistoryReply(reply)))
    foxbit.addEventListener('GetTickerHistoryError', (error) => foxbit.logger.log('GetTickerHistoryError', new GetTickerHistoryError(error)))
  },
  GetTradesHistory: () => {
    foxbit.send(new GetTradesHistoryMessage())
    foxbit.addEventListener('GetTradesHistory', (reply) => foxbit.logger.log('GetTradesHistory', new GetTradesHistoryReply(reply)))
    foxbit.addEventListener('GetTradesHistoryError', (error) => foxbit.logger.log('GetTradesHistoryError', new GetTradesHistoryError(error)))
  },
  GetUserInfo: () => {
    foxbit.send(new GetUserInfoMessage())
    foxbit.addEventListener('GetUserInfo', (reply) => foxbit.logger.log('GetUserInfo', new GetUserInfoReply(reply)))
    foxbit.addEventListener('GetUserInfoError', (error) => foxbit.logger.log('GetUserInfoError', new GetUserInfoError(error)))
  },
  GetUserPermissions: () => {
    foxbit.send(new GetUserPermissionsMessage())
    foxbit.addEventListener('GetUserPermissions', (reply) => foxbit.logger.log('GetUserPermissions', new GetUserPermissionsReply(reply)))
    foxbit.addEventListener('GetUserPermissionsError', (error) => foxbit.logger.log('GetUserPermissionsError', new GetUserPermissionsError(error)))
  },
  GetWithdrawTickets: () => {
    foxbit.send(new GetWithdrawTicketsMessage())
    foxbit.addEventListener('GetWithdrawTickets', (reply) => foxbit.logger.log('GetWithdrawTickets', new GetWithdrawTicketsReply(reply)))
    foxbit.addEventListener('GetWithdrawTicketsError', (error) => foxbit.logger.log('GetWithdrawTicketsError', new GetWithdrawTicketsError(error)))
  },
  Logout: () => {
    foxbit.send(new LogoutMessage())
    foxbit.addEventListener('Logout', (reply) => foxbit.logger.log('Logout', new LogoutReply(reply)))
    foxbit.addEventListener('LogoutError', (error) => foxbit.logger.log('LogoutError', new LogoutError(error)))
  },
  SendOrder: () => {
    foxbit.send(new SendOrderMessage())
    foxbit.addEventListener('SendOrder', (reply) => foxbit.logger.log('SendOrder', new SendOrderReply(reply)))
    foxbit.addEventListener('SendOrderError', (error) => foxbit.logger.log('SendOrderError', new SendOrderError(error)))
  },
  SubscribeAccountEvents: () => {
    foxbit.send(new SubscribeAccountEventsMessage())
    foxbit.addEventListener('SubscribeAccountEvents', (reply) => foxbit.logger.log('SubscribeAccountEvents', new SubscribeAccountEventsReply(reply)))
    foxbit.addEventListener('SubscribeAccountEventsError', (error) => foxbit.logger.log('SubscribeAccountEventsError', new SubscribeAccountEventsError(error)))
  },
  SubscribeLevel1: () => {
    foxbit.send(new SubscribeLevel1Message())
    foxbit.addEventListener('SubscribeLevel1', (reply) => foxbit.logger.log('SubscribeLevel1', new SubscribeLevel1Reply(reply)))
    foxbit.addEventListener('SubscribeLevel1Error', (error) => foxbit.logger.log('SubscribeLevel1Error', new SubscribeLevel1Error(error)))
  },
  SubscribeLevel1Markets: () => {
    foxbit.send(new SubscribeLevel1MarketsMessage())
    foxbit.addEventListener('SubscribeLevel1Markets', (reply) => foxbit.logger.log('SubscribeLevel1Markets', new SubscribeLevel1MarketsReply(reply)))
    foxbit.addEventListener('SubscribeLevel1MarketsError', (error) => foxbit.logger.log('SubscribeLevel1MarketsError', new SubscribeLevel1MarketsError(error)))
  },
  SubscribeLevel2: () => {
    foxbit.send(new SubscribeLevel2Message())
    foxbit.addEventListener('SubscribeLevel2', (reply) => foxbit.logger.log('SubscribeLevel2', new SubscribeLevel2Reply(reply)))
    foxbit.addEventListener('SubscribeLevel2Error', (error) => foxbit.logger.log('SubscribeLevel2Error', new SubscribeLevel2Error(error)))
  },
  SubscribeTicker: () => {
    foxbit.send(new SubscribeTickerMessage())
    foxbit.addEventListener('SubscribeTicker', (reply) => foxbit.logger.log('SubscribeTicker', new SubscribeTickerReply(reply)))
    foxbit.addEventListener('SubscribeTickerError', (error) => foxbit.logger.log('SubscribeTickerError', new SubscribeTickerError(error)))
  },
  SubscribeTrades: () => {
    foxbit.send(new SubscribeTradesMessage())
    foxbit.addEventListener('SubscribeTrades', (reply) => foxbit.logger.log('SubscribeTrades', new SubscribeTradesReply(reply)))
    foxbit.addEventListener('SubscribeTradesError', (error) => foxbit.logger.log('SubscribeTradesError', new SubscribeTradesError(error)))
  },
  UnsubscribeLevel1: () => {
    foxbit.send(new UnsubscribeLevel1Message())
    foxbit.addEventListener('UnsubscribeLevel1', (reply) => foxbit.logger.log('UnsubscribeLevel1', new UnsubscribeLevel1Reply(reply)))
    foxbit.addEventListener('UnsubscribeLevel1Error', (error) => foxbit.logger.log('UnsubscribeLevel1Error', new UnsubscribeLevel1Error(error)))
  },
  UnsubscribeLevel2: () => {
    foxbit.send(new UnsubscribeLevel2Message())
    foxbit.addEventListener('UnsubscribeLevel2', (reply) => foxbit.logger.log('UnsubscribeLevel2', new UnsubscribeLevel2Reply(reply)))
    foxbit.addEventListener('UnsubscribeLevel2Error', (error) => foxbit.logger.log('UnsubscribeLevel2Error', new UnsubscribeLevel2Error(error)))
  },
  UnsubscribeTicker: () => {
    foxbit.send(new UnsubscribeTickerMessage())
    foxbit.addEventListener('UnsubscribeTicker', (reply) => foxbit.logger.log('UnsubscribeTicker', new UnsubscribeTickerReply(reply)))
    foxbit.addEventListener('UnsubscribeTickerError', (error) => foxbit.logger.log('UnsubscribeTickerError', new UnsubscribeTickerError(error)))
  },
  UnsubscribeTrades: () => {
    foxbit.send(new UnsubscribeTradesMessage())
    foxbit.addEventListener('UnsubscribeTrades', (reply) => foxbit.logger.log('UnsubscribeTrades', new UnsubscribeTradesReply(reply)))
    foxbit.addEventListener('UnsubscribeTradesError', (error) => foxbit.logger.log('UnsubscribeTradesError', new UnsubscribeTradesError(error)))
  },
  Close: () => {
    foxbit.logger.log('Close', Date.now() - config.init)

    process.exit(0)
  }
}

process.stdin.on('data', (chunk) => {
  const [op, ...params] = chunk.toString().replace('\n', '').split(' ')
  operations[op]?.()
})
