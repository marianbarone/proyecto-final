import dotenv from 'dotenv'
dotenv.config()

let ProductDao:any
let CartDao:any

switch(process.env.DATABASE){
    case'firebase':
        import('./products/productDaoFirebase').then( 
            (dao) => (ProductDao = dao.default)
        )
        import('./carts/cartDaoFirebase').then( 
            (daoCart) => (CartDao = daoCart.default)
        )   

        break;
    
    case'mongodb':
        import('./products/productDaoMongo').then( 
            (dao) => (ProductDao = dao.default)
        )
        import('./carts/cartDaoMongo').then( 
            (daoCart) => (CartDao = daoCart.default)
        )   
    
    break;
    default:
        ProductDao = require('./products/productDaoMongo')
        CartDao = require('./carts/cartDaoMongo')
    break
}
export {ProductDao,CartDao}