import foxbit from '../index.js'

import { GetOrderHistoryMessage, GetAccountInfoMessage, } from '../api/message/index.js'

import { GetOrderHistoryReply, GetAccountInfoReply, } from '../api/reply/index.js'

foxbit.send(new GetAccountInfoMessage())

foxbit.on('GetAccountInfo', (getAccountInfo) => {
  foxbit.send(new GetOrderHistoryMessage())

  foxbit.on('GetOrderHistory', (getOrderHistory) =>
    foxbit.logger.log('GetOrderHistory', new GetOrderHistoryReply(getOrderHistory))
  )
})
