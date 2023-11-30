import { AuthenticateUserMessage } from './api/message/authenticateUser.js'

import { FoxbitWS } from './websocket/foxbit.js'

import * as config from './config.js'

const foxbit = new FoxbitWS(config)

foxbit.send(new AuthenticateUserMessage(config.user, config.key, config.secret))

foxbit.ws.addEventListener('close', () => process.exit(0))

export default foxbit
