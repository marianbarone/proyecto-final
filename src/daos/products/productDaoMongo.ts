import MongoContainer from '../../containers/mongo-product-container'

class ProductDaoMongo extends MongoContainer {
    constructor(){
        super()
    }
}

export default new ProductDaoMongo();