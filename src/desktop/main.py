import flet
import config
import utils

class IndexTab(flet.Tab):
  def __init__(self):
    super().__init__()
    self.text = "Index"
    self.content = flet.Text("Index")

class CurrenciesTab(flet.Tab):
  def __init__(self):
    super().__init__()
    self.text = "Currencies"
    self.content = flet.Text("Currencies")

class MarketsTab(flet.Tab):
  def __init__(self):
    super().__init__()
    self.text = "Markets"
    self.content = flet.Text("Markets")

class MarketsQuotesTab(flet.Tab):
  def __init__(self):
    super().__init__()
    self.text = "MarketsQuotes"
    self.content = flet.Text("MarketsQuotes")

class OrderBookTab(flet.Tab):
  def __init__(self):
    super().__init__()
    self.text = "OrderBook"
    self.content = flet.Text("OrderBook")

class CandlesTab(flet.Tab):
  def __init__(self):
    super().__init__()
    self.text = "Candles"
    self.content = flet.Text("Candles")

def main(page: flet.Page):
  page.title = "Foxbit WS"
  page_tabs = flet.Tabs()
  page_tabs.tabs.append(IndexTab()),
  page_tabs.tabs.append(CurrenciesTab()),
  page_tabs.tabs.append(MarketsTab()),
  page_tabs.tabs.append(MarketsQuotesTab()),
  page_tabs.tabs.append(OrderBookTab()),
  page_tabs.tabs.append(CandlesTab()),
  page.add(page_tabs)

if __name__ == "__main__":
  flet.app(target = main)
