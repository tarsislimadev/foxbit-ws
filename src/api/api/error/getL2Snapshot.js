import { WebSocketError } from '../../websocket/error.js'

export class GetL2SnapshotError extends  WebSocketError  {
  Endpoint = 'GetL2Snapshot'
}
