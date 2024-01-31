import { HTML, nButton } from '@brtmvdl/frontend'

export class SendButton extends nButton {
  onCreate() {
    super.onCreate()
    this.setStyles()
    this.setText('Send')
  }

  setStyles() {
    this.setContainerStyle('padding', '1rem')
    this.setStyle('padding', '1rem')
    this.setStyle('width', '100%')
  }
}
