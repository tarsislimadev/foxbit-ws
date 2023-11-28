import { Reply } from '../reply.js'

export class GetAccountPositionsReply extends Reply {
  getProduct(symbol) {
    return this.Payload.find(p => p.ProductSymbol == symbol)
  }

  getAmount(symbol) {
    const product = this.getProduct(symbol)
    if (!product) return 0
    return +product.Amount
  }
}
