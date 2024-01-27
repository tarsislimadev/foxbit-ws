import { HTML, nTable, nTr, nTd } from '@brtmvdl/frontend'
import { Tab } from './Tab.js'

export class GetInstrumentsHTML extends Tab {
  path = 'GetInstruments'

  children = {
    data: new HTML(),
  }

  getData() {
    return [this.children.data]
  }

  getCols() {
    return Array.from([
      'InstrumentId',
      'OMSId',
      'Symbol',
      'Product1',
      'Product1Symbol',
      'Product2',
      'Product2Symbol',
      'PriceIncrement',
      'QuantityIncrement',
      'MinimumPrice',
      'MinimumQuantity',
    ])
  }

  getTableHTML(data = []) {
    const table = new nTable()
    const tr = new nTr()
    this.getCols().map((col) => {
      const td = new nTd()
      td.setText(col)
      tr.append(td)
    })
    table.append(tr)

    Array.from(data).sort((a, b) => a.Product1 - b.Product1).map((line) => {
      const tr = new nTr()
      this.getCols().map((col) => {
        const td = new nTd()
        td.setText(line[col])
        tr.append(td)
      })
      table.append(tr)
    })
    return table
  }

  onEvent({ Endpoint, Payload } = {}) {
    if (Endpoint == this.path) {
      this.children.data.clear()
      this.children.data.append(this.getTableHTML(Payload))
    }
  }
}
