import flet

def main(page: flet.Page):
  page.title = "Foxbit WS"
  print("Initial route:", page.route)

  def route_change(e):
    print("Route change:", e.route)
    page.views.clear()
    page.views.append(
      flet.View(
        "/",
        [
          flet.AppBar(title=flet.Text("Foxbit WS")),
          flet.ElevatedButton("Go to settings", on_click=open_settings),
        ],
      )
    )
    if page.route == "/settings" or page.route == "/settings/mail":
      page.views.append(
        flet.View(
          "/settings",
          [
            flet.AppBar(title=flet.Text("Settings")),
            flet.Text("Settings!"),
            flet.ElevatedButton("Go to mail settings", on_click=open_mail_settings),
          ],
        )
      )
    if page.route == "/settings/mail":
      page.views.append(
        flet.View(
          "/settings/mail",
          [
            flet.AppBar(title=flet.Text("Mail Settings")),
            flet.Text("Mail settings!"),
          ],
        )
      )
    page.update()

  def view_pop(e):
    print("View pop:", e.view)
    page.views.pop()
    top_view = page.views[-1]
    page.go(top_view.route)

  page.on_route_change = route_change
  page.on_view_pop = view_pop

  def open_mail_settings(e):
    page.go("/settings/mail")

  def open_settings(e):
    page.go("/settings")

  page.go(page.route)

flet.app(target=main)
