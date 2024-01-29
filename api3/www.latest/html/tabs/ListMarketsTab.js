import { Tab } from './Tab.js'

export class ListMarketsTab extends Tab {
  path = 'List markets'

  getUrl() {
    return '/markets'
  }
}
