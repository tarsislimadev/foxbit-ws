import helpers

def ListCurrencies() -> helpers.Response:
  return helpers.run(helpers.Request("GET", "/currencies"))

def ListMarkets() -> helpers.Response:
  return helpers.run(helpers.Request("GET", "/markets"))

def GetMarketQuotation(side: str, base_currency: str, quote_currency: str, amount: str) -> helpers.Response:
  return helpers.run(helpers.Request("GET", f"/markets/quotes?side={side}&base_currency={base_currency}&quote_currency={quote_currency}&amount={amount}"))

def GetOrderBook(market_symbol: str, depth: str) -> helpers.Response:
  return helpers.run(helpers.Request("GET", f"/markets/{market_symbol}/orderbook?depth={depth}"))

def GetCandlesticks(market_symbol: str, interval: str, start_time: str = "", end_time: str = "", limit: str = "") -> helpers.Response:
  return helpers.run(helpers.Request("GET", f"/markets/{market_symbol}/candlesticks?interval={interval}&start_time={start_time}&end_time={end_time}&limit={limit}"))

def ListBanks() -> helpers.Response:
  return helpers.run(helpers.Request("GET", "/banks"))

def GetCurrentTime() -> helpers.Response:
  return helpers.run(helpers.Request("GET", "/system/time"))

def GetCurrentMemberDetails() -> helpers.Response:
  return helpers.run(helpers.Request("GET", "/me"))

def ListOrders(market_symbol: str, start_time: str = "", end_time: str = "", page_size: int = 100, page: int = 1, state: str = "", side: str = "") -> helpers.Response:
  return helpers.run(helpers.Request("GET", f"/orders?start_time={start_time}&end_time={end_time}&page_size={page_size}&page={page}&market_symbol={market_symbol}&state={state}&side={side}"))

def GetOrderByID(id: str) -> helpers.Response:
  return helpers.run(helpers.Request("GET", f"/orders/by-order-id/{id}"))

def GetOrderByClientID(client_order_id: str) -> helpers.Response:
  return helpers.run(helpers.Request("GET", f"/orders/by-client-order-id/{client_order_id}"))

def ListTrades(market_symbol: str, start_time: str = "", end_time: str = "", page_size: int = 100, page: int = 1, order_sn: str = "", order_id: str = "") -> helpers.Response:
  return helpers.run(helpers.Request("GET", f"/trades?market_symbol={market_symbol}&start_time={start_time}&end_time={end_time}&page_size={page_size}&page={page}&order_sn={order_sn}&order_id={order_id}"))

def GetMemberAccounts() -> helpers.Response:
  return helpers.run(helpers.Request("GET", "/accounts"))

def GetMemberPnLData(currency_symbol: str) -> helpers.Response:
  return helpers.run(helpers.Request("GET", f"/accounts/pnl?currency_symbol={currency_symbol}"))

def ListDeposits(start_time: str = "", end_time: str = "", page_size: int = 100, page: int = 1) -> helpers.Response:
  return helpers.run(helpers.Request("GET", f"/deposits?start_time={start_time}&end_time={end_time}&page_size={page_size}&page={page}"))

def GetDeposit(deposit_sn: str) -> helpers.Response:
  return helpers.run(helpers.Request("GET", f"/deposits/{deposit_sn}"))

def GetDepositAddress(currency_symbol: str) -> helpers.Response:
  return helpers.run(helpers.Request("GET", f"/deposits/address?currency_symbol={currency_symbol}"))

def ListWithdrawals(start_time: str = "", end_time: str = "", page_size: int = 100, page: int = 1) -> helpers.Response:
  return helpers.run(helpers.Request("GET", f"/withdrawals?start_time={start_time}&end_time={end_time}&page_size={page_size}&page={page}"))

def GetWithdrawal(withdrawal_sn: str) -> helpers.Response:
  return helpers.run(helpers.Request("GET", f"/withdrawals/{withdrawal_sn}"))

def ListTransactionalLimits() -> helpers.Response:
  return helpers.run(helpers.Request("GET", "/transactional_limits"))
