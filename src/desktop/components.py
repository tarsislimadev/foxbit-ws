import flet
import helpers
import config

class SendTextButton(flet.TextButton):
  def __init__(self, on_send):
    super().__init__()
    self.text = "Send"
    self.on_click = on_send

class SaveTextButton(flet.TextButton):
  def __init__(self, on_save):
    super().__init__()
    self.text = "Save"
    self.on_click = on_save

class Separator(flet.Divider):
  def __init__(self):
    super().__init__()
    self.color = config.color

class Responses(flet.Column):
  def __init__(self):
    super().__init__()

  def add(self, response: helpers.Response):
    self.controls.append(flet.Row([flet.Text(response.req), flet.Text(response)]))
