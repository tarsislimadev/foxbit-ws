import foxbit from '../index.js'

import { GetOrderHistoryMessage, GetAccountInfoMessage, } from '../api/message/index.js'

import { GetOrderHistoryReply, GetAccountInfoReply, } from '../api/reply/index.js'

foxbit.send(new GetAccountInfoMessage())

foxbit.addEventListener('GetAccountInfo', (getAccountInfo) => {
  // foxbit.logger.log('GetAccountInfo', new GetAccountInfoReply(getAccountInfo))

  foxbit.send(new GetOrderHistoryMessage())

  foxbit.addEventListener('GetOrderHistory', (getOrderHistory) =>
    foxbit.logger.log('GetOrderHistory', new GetOrderHistoryReply(getOrderHistory))
  )
})
