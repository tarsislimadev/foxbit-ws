import { HTML, nButton } from '@brtmvdl/frontend'

export class ButtonComponent extends nButton {
  onCreate() {
    super.onCreate()
    this.setStyle('padding', 'calc(1rem / 2)')
    // this.setStyle('padding', 'calc(1rem / 2)')
  }
}
