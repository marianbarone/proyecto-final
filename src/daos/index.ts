import dotenv from 'dotenv'
import ProductDaoMongo from './products/productDaoMongo'
dotenv.config()

let ProductDao:any
let CartDao:any

switch(process.env.DATABASE){
    case'firebase':
        // const { default:ProductDaoFirebase} = await import('./products/productDaoFirebase')
        // const { default:CartDaoFirebase } =  await import('./carts/cartDaoFirebase')


        break;

    case'mongo':
        const ProductDao = new ProductDaoMongo()//await import('./products/productDaoMongo')
        // const CartDao = new CartDaoMongo()

    
    break;
    default:
        break;
}
export {ProductDao,CartDao}