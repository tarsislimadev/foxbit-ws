import { HTML } from '@brtmvdl/frontend'

export class VerticalSeparator extends HTML {
  onCreate() {
    super.onCreate()
    this.setStyle('height', '100%')
    this.setStyle('box-shadow', '0rem 0rem 0rem 1px #000000')
  }
}
