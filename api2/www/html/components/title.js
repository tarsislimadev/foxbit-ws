import { HTML, nH2 } from '@brtmvdl/frontend'

export class TitleHTML extends nH2 {
  onCreate() {
    super.onCreate()
    this.setText('Foxbit websocket API 2.0')
  }
}
