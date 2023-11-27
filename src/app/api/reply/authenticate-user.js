const { Reply } = require('../reply')

class AuthenticateUserReply extends Reply {
  getOMSId() {
    return this.Payload?.User?.OMSId
  }
}

module.exports = { AuthenticateUserReply }
