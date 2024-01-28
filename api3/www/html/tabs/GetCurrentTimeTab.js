import { Tab } from './Tab.js'

export class GetCurrentTimeTab extends Tab {
  path = 'Get current time'

  getUrl() {
    return '/system/time'
  }
}
