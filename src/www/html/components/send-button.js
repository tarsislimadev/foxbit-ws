import { HTML, nButton } from '@brtmvdl/frontend'

export class SendButton extends nButton {
  onCreate() {
    super.onCreate()
    this.setStyles()
    this.setText('Send')
  }

  setStyles() {
    this.setStyle('border-radius', 'calc(1rem / 4)')
    this.setStyle('background-color', '#000000')
    this.setStyle('box-sizing', 'border-box')
    this.setStyle('color', '#ffffff')
    this.setStyle('padding', '1rem')
    this.setStyle('border', 'none')
    this.setStyle('width', '100%')
  }
}
