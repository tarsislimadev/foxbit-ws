import { Tab } from './Tab.js'

export class MeTab extends Tab {
  path = 'Get current member details'

  getUrl() {
    return '/me'
  }

  getBody() {
    return {}
  }

  getForm() {
    return []
  }
}
