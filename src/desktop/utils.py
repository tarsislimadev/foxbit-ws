import math
import time
import config

def getTimestamp() -> int:
  return math.floor(time.time() * 1000)

def ascii(text: str = "") -> str:
  return bytes(text, encoding = "ascii")

def routes_names(route: str, default: str = "") -> str:

  match route:
    case "/":
      return config.app_name
    case "/currencies":
      return "List currencies"
    case "/markets":
      return "List markets"
    case "/banks":
      return "List banks"
    case "/system/time":
      return "Get current time"
    case "/me":
      return "Get current member details"
    case "/orders":
      return "List orders"
    case _:
      return default
