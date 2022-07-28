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
        )  // const CartDao = new CartDaoMongo()
    
    break;
    default:
        ProductDao = require('./product/productDaoMongo')
    break
}
export {ProductDao,CartDao}