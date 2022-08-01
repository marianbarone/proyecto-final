import dotenv from 'dotenv'
dotenv.config()

let ProductDao:any
let CartDao:any

switch(process.env.DATABASE){
    case'firebase':
        // const { default:ProductDaoFirebase} = await import('./products/productDaoFirebase')
        // const { default:CartDaoFirebase } =  await import('./carts/cartDaoFirebase')


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