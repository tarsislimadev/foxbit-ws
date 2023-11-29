import { AuthenticateUserMessage } from './api/message/authenticateUser.js'
import { AuthenticateUserReply } from './api/reply/authenticateUserReply.js'

import { FoxbitWS } from './foxbit.js'
import * as config from './config.js'

const foxbit = new FoxbitWS(config)

foxbit.send(new AuthenticateUserMessage(config.user, config.key, config.secret))

// foxbit.addEventListener('AuthenticateUser', (res) => foxbit.logger.log('AuthenticateUser', new AuthenticateUserReply(res)))

foxbit.ws.addEventListener('close', () => process.exit(0))

export default foxbit
