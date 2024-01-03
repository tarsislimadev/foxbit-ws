import flet

import api as API

def get_title(route, default = ""):
  match route:
    case "/currencies":
      return "List currencies"
    case "/markets":
      return "List markets"
    case "/banks":
      return "List banks"
    case "/system/time":
      return "Get current time"
    case _:
      return default

def main(page: flet.Page):
  page.title = "Foxbit WS"

  print("Initial route:", page.route)

  def get_title_app_bar(text):
    return flet.AppBar(title=flet.Text(text))

  def get_go_button(link, title = ""):
    def on_click(e):
      page.go(link)

    return flet.OutlinedButton(get_title(link, title), on_click=on_click)

  def get_cancel_button():
    return get_go_button("/", "Cancel")

  def get_index_view():
    return flet.View(
      "/",
      [
        get_title_app_bar("Foxbit WS"),
        get_go_button("/system/time"),
        get_go_button("/currencies"),
        get_go_button("/markets"),
        get_go_button("/banks"),
      ],
    )

  def get_send_button(method = "GET", endpoint = "/", fields = []):
    def on_click(e):
      response = API.request(method, endpoint)
      print(response.read())

    return flet.OutlinedButton('send', on_click=on_click)

  def get_view(endpoint = "/"):
    title_bar = get_title_app_bar(get_title(endpoint))
    send_button = get_send_button("GET", endpoint, [])
    cancel_button = get_cancel_button()

    return flet.View(endpoint, [title_bar, flet.Row([send_button, cancel_button])])

  def route_change(route):
    page.views.clear()
    page.views.append(get_index_view())

    if page.route != "/":
      page.views.append(get_view(page.route))
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
