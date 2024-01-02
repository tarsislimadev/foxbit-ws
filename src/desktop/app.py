import flet as ft

def main(page: ft.Page):
  page.controls.append(ft.Text(value="Hello, world!"))
  page.update()

ft.app(target=main)
