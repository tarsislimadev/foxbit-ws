import { HTML } from '@brtmvdl/frontend'

export class Page extends HTML {
  onCreate() {
    this.setStyles()
  }

  setStyles() {
    console.log('setStyles')
  }
}
