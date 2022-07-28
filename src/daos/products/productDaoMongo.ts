import MongoContainer from '../../containers/mongo-container'

class ProductDaoMongo extends MongoContainer {
    constructor(){
        super()
    }
}

export default new ProductDaoMongo();