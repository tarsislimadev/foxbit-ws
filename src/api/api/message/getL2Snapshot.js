import { WebSocketMessage } from '../../websocket/message.js'

export class GetL2SnapshotMessage extends WebSocketMessage {
  Endpoint = 'GetL2Snapshot'
}
