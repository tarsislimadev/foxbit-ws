import http.client
import math
import time
import hmac
import hashlib
import config

host = "api.foxbit.com.br"

def full_path(path):
  return "/rest/v3" + path

def get_timestamp():
  return math.floor(time.time()*1000)

def get_signature(timestamp, url, query):
  prehash = f"{timestamp}GET{url}{query}"
  return hmac.new(prehash, config.api_secret, hashlib.sha256).hexdigest() 

def get_headers(path, query, headers={}):
  timestamp = get_timestamp()
  return {"Host": host, "Content-Type": "application/json", "X-FB-ACCESS-KEY": config.api_key, "X-FB-ACCESS-TIMESTAMP": timestamp, "X-FB-ACCESS-SIGNATURE": get_signature(timestamp, full_path(path), query)}

def post_headers(headers={}):
  return {} # FIXME

def request(method = "GET", path = "/", headers = {}, data = {}):
  conn = http.client.HTTPSConnection(host)
  conn.request(method, full_path(path), headers)
  return conn.getresponse()

def get_request(path = "/", headers = {}):
  return request("GET", path, get_headers(headers))

def post_request(path = "/", headers = {}, data = {}):
  return request("POST", path, post_headers(headers), data)

def currencies():
  return get_request("/currencies")
