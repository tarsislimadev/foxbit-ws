import { WebSocketError } from '../../websocket/error.js'

export class GetProductsError extends  WebSocketError  {
  Endpoint = 'GetProducts'
}
