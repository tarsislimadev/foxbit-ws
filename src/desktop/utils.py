import math

import time

def getTimestamp() -> int:
  return math.floor(time.time() * 1000)

def ascii(text: str = "") -> str:
  return bytes(text, encoding = "ascii")
