import flet

import api as API

def main(page: flet.Page):
  page.title = "Foxbit WS"
  print("Initial route:", page.route)

  def get_title_app_bar(text):
    return flet.AppBar(title=flet.Text(text))

  def get_button(text, link):
    return flet.ElevatedButton(text, on_click=lambda _: page.go(link))

  def get_cancel_button():
    return get_button("Cancel", "/")

  def get_index_route():
    return flet.View(
      "/",
      [
        get_title_app_bar("Foxbit WS"),
        get_button("Get current time", "/system/time"),
        get_button("List currencies", "/currencies"),
        get_button("List markets", "/markets"),
        get_button("List banks", "/banks"),
      ],
    )

  def get_currencies_route():
    return flet.View("/currencies", [get_title_app_bar("List currencies"), get_cancel_button(),])

  def get_markets_route():
    return flet.View("/markets", [get_title_app_bar("List markets"), get_cancel_button(),])

  def get_banks_route():
    return flet.View("/banks", [get_title_app_bar("List banks"), get_cancel_button(),])

  def get_system_time_route():
    return flet.View("/system/time", [get_title_app_bar("Get current time"), get_cancel_button(),])

  def get_route(route):
    match route:
      case "/currencies":
        return get_currencies_route()
      case "/markets":
        return get_markets_route()
      case "/banks":
        return get_banks_route()
      case "/system/time":
        return get_system_time_route()

  def route_change(route):
    page.views.clear()
    page.views.append(get_index_route())

    if page.route != "/":
      page.views.append(get_route(page.route))
  page.update()

  def view_pop(view):
    page.views.pop()
    top_view = page.views[-1]
    page.go(top_view.route)

  page.on_route_change = route_change
  page.on_view_pop = view_pop
  page.go(page.route)

if __name__ == "__main__":
  flet.app(target=main)
