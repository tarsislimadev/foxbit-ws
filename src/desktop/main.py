import flet
import config
import tabs

def main(page: flet.Page):
  page.title = config.app_name

  page.pubsub.subscribe(lambda e: print(e))

  page.add(flet.AppBar(flet.Text(config.app_name)))

  page_tabs = flet.Tabs(label_color = config.color)
  page_tabs.tabs.append(tabs.IndexTab(page))
  page_tabs.tabs.append(tabs.ListCurrenciesTab(page))
  page_tabs.tabs.append(tabs.ListMarketsTab(page))
  page_tabs.tabs.append(tabs.GetMarketQuotationTab(page))
  page_tabs.tabs.append(tabs.GetOrderBookTab(page))
  page_tabs.tabs.append(tabs.GetCandlesticksTab(page))
  page_tabs.tabs.append(tabs.ListBanksTab(page))
  page_tabs.tabs.append(tabs.GetCurrentTimeTab(page))
  page_tabs.tabs.append(tabs.GetCurrentMemberDetailsTab(page))
  page_tabs.tabs.append(tabs.ListOrdersTab(page))
  page_tabs.tabs.append(tabs.GetOrderByIDTab(page))
  page_tabs.tabs.append(tabs.GetOrderByClientIDTab(page))
  page_tabs.tabs.append(tabs.ListTradesTab(page))
  page_tabs.tabs.append(tabs.GetMemberAccountsTab(page))
  page_tabs.tabs.append(tabs.GetMemberPnLDataTab(page))
  page_tabs.tabs.append(tabs.ListDepositsTab(page))
  page_tabs.tabs.append(tabs.GetDepositTab(page))
  page_tabs.tabs.append(tabs.GetDepositAddressTab(page))
  page_tabs.tabs.append(tabs.ListWithdrawalsTab(page))
  page_tabs.tabs.append(tabs.GetWithdrawalTab(page))
  page_tabs.tabs.append(tabs.ListTransactionalLimitsTab(page))
  page.add(page_tabs)

if __name__ == "__main__":
  flet.app(target = main)
