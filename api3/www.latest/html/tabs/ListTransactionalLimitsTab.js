import { Tab } from './Tab.js'

export class ListTransactionalLimitsTab extends Tab {
  path = 'List Transactional Limits'

  getUrl() {
    return '/transactional_limits'
  }
}
