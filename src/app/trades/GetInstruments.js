import foxbit from '../foxbit.js'
import { GetAccountInfoMessage } from '../api/message/getAccountInfo.js'
import { GetInstrumentsMessage } from '../api/message/getInstruments.js'
import { GetInstrumentsReply } from '../api/reply/getInstrumentsReply.js'
import { GetInstrumentsError } from '../api/error/getInstruments.js'

foxbit.send(new GetAccountInfoMessage())

foxbit.on('GetAccountInfo', () => {
  foxbit.send(new GetInstrumentsMessage())

  foxbit.on('GetInstruments', (getInstruments) => foxbit.logger.log('GetInstruments', new GetInstrumentsReply(getInstruments)))

  foxbit.on('GetInstrumentsError', (getInstrumentsError) => foxbit.logger.log('GetInstrumentsError', new GetInstrumentsError(getInstrumentsError)))
})
