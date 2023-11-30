import foxbit from '../foxbit.js'
import { InstrumentEnum, OrderTypeEnum, SideEnum } from '../utils/constants.js'
import { GetAccountInfoMessage } from '../api/message/getAccountInfo.js'
import { SendOrderMessage } from '../api/message/sendOrder.js'
import { SendOrderReply } from '../api/reply/sendOrderReply.js'
import { SendOrderError } from '../api/error/sendOrderError.js'

import * as config from '../config.js'

const [Instrument = 'USDTBRL', Quantity = 1] = process.argv.slice(2)

foxbit.send(new GetAccountInfoMessage())

foxbit.on('GetAccountInfo', () => {
  foxbit.send(new SendOrderMessage(SideEnum.Sell, OrderTypeEnum.Market, InstrumentEnum[Instrument], +Quantity, config.user))

  foxbit.on('SendOrder', (sendOrder) => foxbit.logger.log('SendOrder', new SendOrderReply(sendOrder)))
  foxbit.on('SendOrderError', (sendOrderError) => foxbit.logger.log('SendOrderError', new SendOrderError(sendOrderError)))
})
