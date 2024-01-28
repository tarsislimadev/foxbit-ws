// 

export const getEventsList = () => {
  return Array.from([
    'me',
    'banks',
    'currencies',
    // 'transactional_limits',
    'markets',
    // 'markets-quotes',
    // 'markets-market_symbol-orderbook',
    // 'markets-market_symbol-candles',
    // 'markets-market_symbol-candlesticks',
    'orders',
    // 'orders-order_sn',
    // 'orders-by-order-id-id',
    // 'orders-by-client-order-id-client_order_id',
    // 'orders-cancel',
    'trades',
    // 'system-time',
    'accounts',
    // 'accounts-pnl',
    'deposits',
    // 'deposits-deposit_sn',
    // 'deposits-address',
    'withdrawals',
    // 'withdrawals-withdrawal_sn',
  ])
}
