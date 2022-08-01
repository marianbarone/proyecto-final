import MongoCartContainer from '../../containers/mongo-cart-container'

class CartDaoMongo extends MongoCartContainer {
    constructor(){
        super()
    }
}

export default new CartDaoMongo();