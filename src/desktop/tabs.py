import flet
import config
import api
import components

class IndexTab(flet.Tab):
  def __init__(self, flet_page: flet.Page):
    super().__init__()
    self.text = "Index"
    self.userid = flet.TextField(label = "user id")
    self.secret = flet.TextField(label = "secret", password = True, can_reveal_password = True)
    self.key = flet.TextField(label = "key", password = True, can_reveal_password = True)

    def on_save(e):
      config.userid = self.userid.value
      config.secret = self.secret.value
      config.key = self.key.value
      flet_page.session.set("config", [config.userid, config.secret, config.key])

    self.content = flet.Column([
      components.Separator(),
      self.userid,
      self.secret,
      self.key,
      components.SaveTextButton(on_save),
    ])

class ListCurrenciesTab(flet.Tab):
  def __init__(self, flet_page: flet.Page):
    super().__init__()
    self.text = "ListCurrencies"
    responses = components.Responses()

    def on_send(e):
      responses.add(api.ListCurrencies())
      flet_page.update()

    self.content = flet.Column([
      components.Separator(),
      components.SendTextButton(on_send),
      responses,
    ])

class ListMarketsTab(flet.Tab):
  def __init__(self, flet_page: flet.Page):
    super().__init__()
    self.text = "ListMarkets"
    responses = components.Responses()

    def on_send(e):
      responses.add(api.ListMarkets())
      flet_page.update()

    self.content = flet.Column([
      components.Separator(),
      components.SendTextButton(on_send),
      responses,
    ])

class GetMarketQuotationTab(flet.Tab):
  def __init__(self, flet_page: flet.Page):
    super().__init__()
    self.text = "GetMarketQuotation"
    responses = components.Responses()

    self.side = flet.TextField(label="side")
    self.base_currency = flet.TextField(label="base currency")
    self.quote_currency = flet.TextField(label="quote currency")
    self.amount = flet.TextField(label="amount")

    def on_send(e):
      responses.add(api.GetMarketQuotation(self.side.value, self.base_currency.value, self.quote_currency.value, self.amount.value))
      flet_page.update()

    self.content = flet.Column([
      components.Separator(),
      self.side,
      self.base_currency,
      self.quote_currency,
      self.amount,
      components.SendTextButton(on_send),
      responses,
    ])

class GetOrderBookTab(flet.Tab):
  def __init__(self, flet_page: flet.Page):
    super().__init__()
    self.text = "GetOrderBook"
    responses = components.Responses()

    self.market_symbol = flet.TextField(label="market symbol")
    self.depth = flet.TextField(label="depth")

    def on_send(e):
      responses.add(api.GetOrderBook(self.market_symbol.value, self.depth.value))
      flet_page.update()

    self.content = flet.Column([
      components.Separator(),
      self.market_symbol,
      self.depth,
      components.SendTextButton(on_send),
      responses,
    ])

class GetCandlesticksTab(flet.Tab):
  def __init__(self, flet_page: flet.Page):
    super().__init__()
    self.text = "GetCandlesticks"
    responses = components.Responses()

    self.market_symbol = flet.TextField(label="market symbol")
    self.interval = flet.TextField(label="interval")
    self.start_time = flet.DatePicker()
    self.start_time_column = flet.Column([flet.TextField(label="start time"), self.start_time])
    self.end_time = flet.DatePicker()
    self.end_time_column = flet.Column([flet.TextField(label="end time"), self.end_time])
    self.limit = flet.TextField(label="limit")

    def on_send(e):
      responses.add(api.GetCandlesticks(self.market_symbol.value, self.interval.value, self.start_time.value, self.end_time.value, self.limit.value))
      flet_page.update()

    self.content = flet.Column([
      components.Separator(),
      self.market_symbol,
      self.interval,
      self.start_time_column,
      self.end_time_column,
      self.limit,
      components.SendTextButton(on_send),
      responses,
    ])

class ListBanksTab(flet.Tab):
  def __init__(self, flet_page: flet.Page):
    super().__init__()
    self.text = "ListBanks"
    responses = components.Responses()

    def on_send(e):
      responses.add(api.ListBanks())
      flet_page.update()

    self.content = flet.Column([
      components.Separator(),
      components.SendTextButton(on_send),
      responses,
    ])

class GetCurrentTimeTab(flet.Tab):
  def __init__(self, flet_page: flet.Page):
    super().__init__()
    self.text = "GetCurrentTime"
    responses = components.Responses()

    def on_send(e):
      responses.add(api.GetCurrentTime())
      flet_page.update()

    self.content = flet.Column([
      components.Separator(),
      components.SendTextButton(on_send),
      responses,
    ])

class GetCurrentMemberDetailsTab(flet.Tab):
  def __init__(self, flet_page: flet.Page):
    super().__init__()
    self.text = "GetCurrentMemberDetails"
    responses = components.Responses()

    def on_send(e):
      responses.add(api.GetCurrentMemberDetails())
      flet_page.update()

    self.content = flet.Column([
      components.Separator(),
      components.SendTextButton(on_send),
      responses,
    ])

class ListOrdersTab(flet.Tab):
  def __init__(self, flet_page: flet.Page):
    super().__init__()
    self.text = "ListOrders"
    responses = components.Responses()

    def on_send(e):
      responses.add(api.ListOrders())
      flet_page.update()

    self.content = flet.Column([
      components.Separator(),
      components.SendTextButton(on_send),
      responses,
    ])

class GetOrderByIDTab(flet.Tab):
  def __init__(self, flet_page: flet.Page):
    super().__init__()
    self.text = "GetOrderByID"
    responses = components.Responses()

    def on_send(e):
      responses.add(api.GetOrderByID())
      flet_page.update()

    self.content = flet.Column([
      components.Separator(),
      components.SendTextButton(on_send),
      responses,
    ])

class GetOrderByClientIDTab(flet.Tab):
  def __init__(self, flet_page: flet.Page):
    super().__init__()
    self.text = "GetOrderByClientID"
    responses = components.Responses()

    def on_send(e):
      responses.add(api.GetOrderByClientID())
      flet_page.update()

    self.content = flet.Column([
      components.Separator(),
      components.SendTextButton(on_send),
      responses,
    ])

class ListTradesTab(flet.Tab):
  def __init__(self, flet_page: flet.Page):
    super().__init__()
    self.text = "ListTrades"
    responses = components.Responses()

    def on_send(e):
      responses.add(api.ListTrades())
      flet_page.update()

    self.content = flet.Column([
      components.Separator(),
      components.SendTextButton(on_send),
      responses,
    ])

class GetMemberAccountsTab(flet.Tab):
  def __init__(self, flet_page: flet.Page):
    super().__init__()
    self.text = "GetMemberAccounts"
    responses = components.Responses()

    def on_send(e):
      responses.add(api.GetMemberAccounts())
      flet_page.update()

    self.content = flet.Column([
      components.Separator(),
      components.SendTextButton(on_send),
      responses,
    ])

class GetMemberPnLDataTab(flet.Tab):
  def __init__(self, flet_page: flet.Page):
    super().__init__()
    self.text = "GetMemberPnLData"
    responses = components.Responses()

    def on_send(e):
      responses.add(api.GetMemberPnLData())
      flet_page.update()

    self.content = flet.Column([
      components.Separator(),
      components.SendTextButton(on_send),
      responses,
    ])

class ListDepositsTab(flet.Tab):
  def __init__(self, flet_page: flet.Page):
    super().__init__()
    self.text = "ListDeposits"
    responses = components.Responses()

    def on_send(e):
      responses.add(api.ListDeposits())
      flet_page.update()

    self.content = flet.Column([
      components.Separator(),
      components.SendTextButton(on_send),
      responses,
    ])

class GetDepositTab(flet.Tab):
  def __init__(self, flet_page: flet.Page):
    super().__init__()
    self.text = "GetDeposit"
    responses = components.Responses()

    def on_send(e):
      responses.add(api.GetDeposit())
      flet_page.update()

    self.content = flet.Column([
      components.Separator(),
      components.SendTextButton(on_send),
      responses,
    ])

class GetDepositAddressTab(flet.Tab):
  def __init__(self, flet_page: flet.Page):
    super().__init__()
    self.text = "GetDepositAddress"
    responses = components.Responses()

    def on_send(e):
      responses.add(api.GetDepositAddress())
      flet_page.update()

    self.content = flet.Column([
      components.Separator(),
      components.SendTextButton(on_send),
      responses,
    ])

class ListWithdrawalsTab(flet.Tab):
  def __init__(self, flet_page: flet.Page):
    super().__init__()
    self.text = "ListWithdrawals"
    responses = components.Responses()

    def on_send(e):
      responses.add(api.ListWithdrawals())
      flet_page.update()

    self.content = flet.Column([
      components.Separator(),
      components.SendTextButton(on_send),
      responses,
    ])

class GetWithdrawalTab(flet.Tab):
  def __init__(self, flet_page: flet.Page):
    super().__init__()
    self.text = "GetWithdrawal"
    responses = components.Responses()

    def on_send(e):
      responses.add(api.GetWithdrawal())
      flet_page.update()

    self.content = flet.Column([
      components.Separator(),
      components.SendTextButton(on_send),
      responses,
    ])

class ListTransactionalLimitsTab(flet.Tab):
  def __init__(self, flet_page: flet.Page):
    super().__init__()
    self.text = "ListTransactionalLimits"
    responses = components.Responses()

    def on_send(e):
      responses.add(api.ListTransactionalLimits())
      flet_page.update()

    self.content = flet.Column([
      components.Separator(),
      components.SendTextButton(on_send),
      responses,
    ])
