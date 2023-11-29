import { AuthenticateUserMessage } from './api/message/authenticateUser.js'
// import { Authenticate2FAMessage } from './api/message/authenticate2FA.js'
import { GetAccountInfoMessage } from './api/message/getAccountInfo.js'
import { GetAccountPositionsMessage } from './api/message/getAccountPositions.js'
import { GetAccountTradesMessage } from './api/message/getAccountTrades.js'
import { GetDepositTicketsMessage } from './api/message/getDepositTickets.js'
import { GetInstrumentMessage } from './api/message/getInstrument.js'
import { GetInstrumentsMessage } from './api/message/getInstruments.js'
import { GetOpenOrdersMessage } from './api/message/getOpenOrders.js'
import { GetOrderFeeMessage } from './api/message/getOrderFee.js'
import { GetOrderHistoryMessage } from './api/message/getOrderHistory.js'
import { GetOrderStatusMessage } from './api/message/getOrderStatus.js'
import { GetProductsMessage } from './api/message/getProducts.js'
import { GetL2SnapshotMessage } from './api/message/getL2Snapshot.js'
import { GetTickerHistoryMessage } from './api/message/getTickerHistory.js'
import { GetTradesHistoryMessage } from './api/message/getTradesHistory.js'
import { GetUserInfoMessage } from './api/message/getUserInfo.js'
import { GetUserPermissionsMessage } from './api/message/getUserPermissions.js'
import { GetWithdrawTicketsMessage } from './api/message/getWithdrawTickets.js'
// import { SendOrderMessage } from './api/message/sendOrder.js'
// import { SubscribeAccountEventsMessage } from './api/message/subscribeAccountEvents.js'
// import { SubscribeLevel1Message } from './api/message/subscribeLevel1.js'
// import { SubscribeLevel1MarketsMessage } from './api/message/subscribeLevel1Markets.js'
// import { SubscribeLevel2Message } from './api/message/subscribeLevel2.js'
// import { SubscribeTickerMessage } from './api/message/subscribeTicker.js'
// import { SubscribeTradesMessage } from './api/message/subscribeTrades.js'
// import { UnsubscribeLevel1Message } from './api/message/unsubscribeLevel1.js'
// import { UnsubscribeLevel2Message } from './api/message/unsubscribeLevel2.js'
// import { UnsubscribeTickerMessage } from './api/message/unsubscribeTicker.js'
// import { UnsubscribeTradesMessage } from './api/message/unsubscribeTrades.js'
// import { LogoutMessage } from './api/message/logout.js'
// import { CancelAllOrdersMessage } from './api/message/cancelAllOrders.js'
// import { CancelOrderMessage } from './api/message/cancelOrder.js'
import { AuthenticateUserReply } from './api/reply/authenticateUserReply.js'
// import { Authenticate2FAReply } from './api/reply/authenticate2FAReply.js'
import { GetAccountInfoReply } from './api/reply/getAccountInfoReply.js'
import { GetAccountPositionsReply } from './api/reply/getAccountPositionsReply.js'
import { GetAccountTradesReply } from './api/reply/getAccountTradesReply.js'
import { GetDepositTicketsReply } from './api/reply/getDepositTicketsReply.js'
import { GetInstrumentReply } from './api/reply/getInstrumentReply.js'
import { GetInstrumentsReply } from './api/reply/getInstrumentsReply.js'
import { GetOpenOrdersReply } from './api/reply/getOpenOrdersReply.js'
import { GetOrderFeeReply } from './api/reply/getOrderFeeReply.js'
import { GetOrderHistoryReply } from './api/reply/getOrderHistoryReply.js'
import { GetOrderStatusReply } from './api/reply/getOrderStatusReply.js'
import { GetProductsReply } from './api/reply/getProductsReply.js'
import { GetL2SnapshotReply } from './api/reply/getL2SnapshotReply.js'
import { GetTickerHistoryReply } from './api/reply/getTickerHistoryReply.js'
import { GetTradesHistoryReply } from './api/reply/getTradesHistoryReply.js'
import { GetUserInfoReply } from './api/reply/getUserInfoReply.js'
import { GetUserPermissionsReply } from './api/reply/getUserPermissionsReply.js'
import { GetWithdrawTicketsReply } from './api/reply/getWithdrawTicketsReply.js'
// import { SendOrderReply } from './api/reply/sendOrderReply.js'
// import { SubscribeAccountEventsReply } from './api/reply/subscribeAccountEventsReply.js'
// import { SubscribeLevel1Reply } from './api/reply/subscribeLevel1Reply.js'
// import { SubscribeLevel1MarketsReply } from './api/reply/subscribeLevel1MarketsReply.js'
// import { SubscribeLevel2Reply } from './api/reply/subscribeLevel2Reply.js'
// import { SubscribeTickerReply } from './api/reply/subscribeTickerReply.js'
// import { SubscribeTradesReply } from './api/reply/subscribeTradesReply.js'
// import { UnsubscribeLevel1Reply } from './api/reply/unsubscribeLevel1Reply.js'
// import { UnsubscribeLevel2Reply } from './api/reply/unsubscribeLevel2Reply.js'
// import { UnsubscribeTickerReply } from './api/reply/unsubscribeTickerReply.js'
// import { UnsubscribeTradesReply } from './api/reply/unsubscribeTradesReply.js'
// import { LogoutReply } from './api/reply/logoutReply.js'
// import { CancelAllOrdersReply } from './api/reply/cancelAllOrdersReply.js'
// import { CancelOrderReply } from './api/reply/cancelOrderReply.js'

import { FoxbitWS } from './foxbit.js'
import * as config from './config.js'

const foxbit = new FoxbitWS(config)

foxbit.send(new AuthenticateUserMessage(config.user, config.key, config.secret))

foxbit.addEventListener('AuthenticateUser', (res) => console.log('AuthenticateUser', new AuthenticateUserReply(res)))

// foxbit.addEventListener('Authenticate2FA', (res) => console.log('Authenticate2FA', new Authenticate2FAReply(res)))

foxbit.send(new GetAccountInfoMessage())

foxbit.addEventListener('GetAccountInfo', (res) => console.log('GetAccountInfo', new GetAccountInfoReply(res)))

foxbit.send(new GetAccountPositionsMessage())

foxbit.addEventListener('GetAccountPositions', (res) => console.log('GetAccountPositions', new GetAccountPositionsReply(res)))

foxbit.send(new GetAccountTradesMessage())

foxbit.addEventListener('GetAccountTrades', (res) => console.log('GetAccountTrades', new GetAccountTradesReply(res)))

foxbit.send(new GetDepositTicketsMessage())

foxbit.addEventListener('GetDepositTickets', (res) => console.log('GetDepositTickets', new GetDepositTicketsReply(res)))

foxbit.send(new GetInstrumentMessage())

foxbit.addEventListener('GetInstrument', (res) => console.log('GetInstrument', new GetInstrumentReply(res)))

foxbit.send(new GetInstrumentsMessage())

foxbit.addEventListener('GetInstruments', (res) => console.log('GetInstruments', new GetInstrumentsReply(res)))

foxbit.send(new GetOpenOrdersMessage())

foxbit.addEventListener('GetOpenOrders', (res) => console.log('GetOpenOrders', new GetOpenOrdersReply(res)))

foxbit.send(new GetOrderFeeMessage())

foxbit.addEventListener('GetOrderFee', (res) => console.log('GetOrderFee', new GetOrderFeeReply(res)))

foxbit.send(new GetOrderHistoryMessage())

foxbit.addEventListener('GetOrderHistory', (res) => console.log('GetOrderHistory', new GetOrderHistoryReply(res)))

foxbit.send(new GetOrderStatusMessage())

foxbit.addEventListener('GetOrderStatus', (res) => console.log('GetOrderStatus', new GetOrderStatusReply(res)))

foxbit.send(new GetProductsMessage())

foxbit.addEventListener('GetProducts', (res) => console.log('GetProducts', new GetProductsReply(res)))

foxbit.send(new GetL2SnapshotMessage())

foxbit.addEventListener('GetL2Snapshot', (res) => console.log('GetL2Snapshot', new GetL2SnapshotReply(res)))

foxbit.send(new GetTickerHistoryMessage())

foxbit.addEventListener('GetTickerHistory', (res) => console.log('GetTickerHistory', new GetTickerHistoryReply(res)))

foxbit.send(new GetTradesHistoryMessage())

foxbit.addEventListener('GetTradesHistory', (res) => console.log('GetTradesHistory', new GetTradesHistoryReply(res)))

foxbit.send(new GetUserInfoMessage())

foxbit.addEventListener('GetUserInfo', (res) => console.log('GetUserInfo', new GetUserInfoReply(res)))

foxbit.send(new GetUserPermissionsMessage())

foxbit.addEventListener('GetUserPermissions', (res) => console.log('GetUserPermissions', new GetUserPermissionsReply(res)))

foxbit.send(new GetWithdrawTicketsMessage())

foxbit.addEventListener('GetWithdrawTickets', (res) => console.log('GetWithdrawTickets', new GetWithdrawTicketsReply(res)))

// foxbit.addEventListener('SendOrder', (res) => console.log('SendOrder', new SendOrderReply( res)))

// foxbit.addEventListener('SubscribeAccountEvents', (res) => console.log('SubscribeAccountEvents', new SubscribeAccountEventsReply( res)))

// foxbit.addEventListener('SubscribeLevel1', (res) => console.log('SubscribeLevel1', new SubscribeLevel1Reply( res)))

// foxbit.addEventListener('SubscribeLevel1Markets', (res) => console.log('SubscribeLevel1Markets', new SubscribeLevel1MarketsReply( res)))

// foxbit.addEventListener('SubscribeLevel2', (res) => console.log('SubscribeLevel2', new SubscribeLevel2Reply( res)))

// foxbit.addEventListener('SubscribeTicker', (res) => console.log('SubscribeTicker', new SubscribeTickerReply( res)))

// foxbit.addEventListener('SubscribeTrades', (res) => console.log('SubscribeTrades', new SubscribeTradesReply( res)))

// foxbit.addEventListener('UnsubscribeLevel1', (res) => console.log('UnsubscribeLevel1', new UnsubscribeLevel1Reply( res)))

// foxbit.addEventListener('UnsubscribeLevel2', (res) => console.log('UnsubscribeLevel2', new UnsubscribeLevel2Reply( res)))

// foxbit.addEventListener('UnsubscribeTicker', (res) => console.log('UnsubscribeTicker', new UnsubscribeTickerReply( res)))

// foxbit.addEventListener('UnsubscribeTrades', (res) => console.log('UnsubscribeTrades', new UnsubscribeTradesReply( res)))

// foxbit.addEventListener('Logout', (res) => console.log('Logout', new LogoutReply( res)))

// foxbit.addEventListener('CancelAllOrders', (res) => console.log('CancelAllOrders', new CancelAllOrdersReply( res)))

// foxbit.addEventListener('CancelOrder', (res) => console.log('CancelOrder', new CancelOrderReply( res)))
