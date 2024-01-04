import http.client
import hmac
import hashlib
import config
import utils

class Request():
  def __init__(self, method: str = "GET", path: str = "", body: any = None):
    self.method = method
    self.path = path
    self.body = body

  def getMethod(self) -> str:
    return self.method

  def getPath(self) -> str:
    return self.path

  def getFullPath(self) -> str:
    return config.path_prefix + self.getPath()

  def getSignature(self, timestamp: str, path: str, query: str) -> str:
    secret = f"{timestamp}GET{path}{query}"
    sig = config.api_secret
    return hmac.new(bytes(secret, encoding = 'ascii'), bytes(sig, encoding = 'ascii'), hashlib.sha256).hexdigest()

  def getHeaders(self, timestamp: str = str(utils.getTimestamp())) -> dict[str, str]:
    return {
      "Host": self.getHost(),
      "Content-Type": "application/json",
      "X-FB-ACCESS-KEY": config.api_key,
      "X-FB-ACCESS-TIMESTAMP": timestamp,
      "X-FB-ACCESS-SIGNATURE": self.getSignature(timestamp, self.getFullPath(), query = ""),
    }

  def getBody(self) -> any:
    return self.body

  def getBodyString(self) -> str:
    body = self.getBody()
    if (body is None):
      return ""
    return str(body)

  def getHost(self) -> str:
    return config.host

class Response():
  def __init__(self, res: http.client.HTTPResponse):
    self.status = res.status
    self.headers = res.headers
    self.body = res.read().decode()

def run(req: Request) -> Response:
  conn = http.client.HTTPSConnection(config.host)
  conn.request(req.getMethod(), req.getPath(), req.getBodyString(), req.getHeaders())
  return Response(conn.getresponse())

def Index() -> Response:
  return run(Request("GET", "Index"))

def Currencies() -> Response:
  return run(Request("GET", "Currencies"))

def Markets() -> Response:
  return run(Request("GET", "Markets"))

def MarketsQuotes() -> Response:
  return run(Request("GET", "MarketsQuotes"))

def OrderBook() -> Response:
  return run(Request("GET", "OrderBook"))

def Candles() -> Response:
  return run(Request("GET", "Candles"))
