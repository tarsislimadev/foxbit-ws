import flet
import config
import api

class Separator(flet.Divider):
  def __init__(self):
    super().__init__()
    self.color = config.color

class Responses(flet.Column):
  def __init__(self):
    super().__init__()

  def add(self, response: api.Response):
    self.controls.append(flet.Row([flet.Text(str(response.status))]))

class IndexTab(flet.Tab):
  def __init__(self, page: flet.Page):
    super().__init__()
    self.text = "Index"
    self.userid = flet.TextField(label = "user id")
    self.secret = flet.TextField(label = "secret", password = True, can_reveal_password = True)
    self.key = flet.TextField(label = "key", password = True, can_reveal_password = True)

    def on_save(e):
      config.userid = self.userid.value
      config.api_secret = self.secret.value
      config.api_key = self.key.value
      page.session.set("config", [config.userid, config.api_secret, config.api_key])

    saveTextButton = flet.TextButton(text = "Save", on_click = on_save)
    self.content = flet.Column([Separator(), self.userid, self.secret, self.key, saveTextButton])

class CurrenciesTab(flet.Tab):
  def __init__(self, page: flet.Page):
    super().__init__()
    self.text = "Currencies"
    responses = Responses()

    def on_send(e):
      responses.add(api.Currencies())
      page.update()

    sendTextButton = flet.TextButton(text = "Send", on_click = on_send)
    self.content = flet.Column([Separator(), sendTextButton, responses])

class MarketsTab(flet.Tab):
  def __init__(self, page: flet.Page):
    super().__init__()
    self.text = "Markets"
    responses = Responses()

    def on_send(e):
      responses.add(api.Markets())
      page.update()

    sendTextButton = flet.TextButton(text = "Send", on_click = on_send)
    self.content = flet.Column([Separator(), sendTextButton, responses])

class MarketsQuotesTab(flet.Tab):
  def __init__(self, page: flet.Page):
    super().__init__()
    self.text = "MarketsQuotes"
    responses = Responses()

    def on_send(e):
      responses.add(api.MarketsQuotes())
      page.update()

    sendTextButton = flet.TextButton(text = "Send", on_click = on_send)
    self.content = flet.Column([Separator(), sendTextButton, responses])

class OrderBookTab(flet.Tab):
  def __init__(self, page: flet.Page):
    super().__init__()
    self.text = "OrderBook"
    responses = Responses()

    def on_send(e):
      responses.add(api.OrderBook())
      page.update()

    sendTextButton = flet.TextButton(text = "Send", on_click = on_send)
    self.content = flet.Column([Separator(), sendTextButton, responses])

class CandlesTab(flet.Tab):
  def __init__(self, page: flet.Page):
    super().__init__()
    self.text = "Candles"
    responses = Responses()

    def on_send(e):
      responses.add(api.Candles())
      page.update()

    sendTextButton = flet.TextButton(text = "Send", on_click = on_send)
    self.content = flet.Column([Separator(), sendTextButton, responses])

def main(page: flet.Page):
  page.title = config.app_name
  page.pubsub.subscribe(lambda e: print(e))
  page.add(flet.AppBar(flet.Text(config.app_name)))
  page_tabs = flet.Tabs(label_color = config.color)
  page_tabs.tabs.append(IndexTab(page))
  page_tabs.tabs.append(CurrenciesTab(page))
  page_tabs.tabs.append(MarketsTab(page))
  page_tabs.tabs.append(MarketsQuotesTab(page))
  page_tabs.tabs.append(OrderBookTab(page))
  page_tabs.tabs.append(CandlesTab(page))
  page.add(page_tabs)

if __name__ == "__main__":
  flet.app(target = main)
