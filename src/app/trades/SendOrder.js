import foxbit from '../index.js'
import { InstrumentEnum, OrderTypeEnum, SideEnum } from '../utils/constants.js'
import { GetAccountInfoMessage } from '../api/message/getAccountInfo.js'
import { SendOrderMessage } from '../api/message/sendOrder.js'
import { SendOrderReply } from '../api/reply/sendOrderReply.js'

import * as config from '../config.js'

foxbit.send(new GetAccountInfoMessage())

foxbit.addEventListener('GetAccountInfo', (getAccountInfo) => {
  foxbit.send(new SendOrderMessage(SideEnum.Buy, OrderTypeEnum.Market, InstrumentEnum.USDTBRL, 2, config.user))

  foxbit.addEventListener('SendOrder', (sendOrder) => foxbit.logger.log('SendOrder', new SendOrderReply(sendOrder)))
})
