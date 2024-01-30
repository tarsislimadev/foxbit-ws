import { HTML, nSelect } from '@brtmvdl/frontend'
import { getOperationsList } from '../lists.js'

export class OperationsSelect extends nSelect {
  onCreate() {
    super.onCreate()
    this.setStyles()
    this.setOptions()
  }

  setStyles() {
    this.setStyle('background-color', 'transparent')
    this.setStyle('appearance', 'none')
    this.setStyle('padding', '1rem')
    this.setStyle('outline', 'none')
    this.setStyle('border', 'none')
  }

  setOptions() {
    getOperationsList().map((op) => this.addOption(op, op))
  }
}
