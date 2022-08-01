import { Request, Response } from 'express'
import { CartDao } from '../daos'

// const saveCart = new cartContainer()

// let carts: Cart[] = []
// let products: Product[] = []


// const readProds = () => {
//     dbController.readFile().then(response => {
//         products = response
//     })
// }

// readProds()

const createCart = async (req: Request, resp: Response) => {
	try {
		console.log('entre al try del controller')
    	const cartData = req.body;
		console.log("cartData",cartData)
		const newCart = await CartDao.createCart(cartData)

		resp.status(201).send(`Carrito creado con éxito, id:${newCart.id}`)
		return newCart

	} catch (error) {
		console.log(`Lo sentimos hubo un error ${error}`)
	}
}

const deleteCart = async (req: Request, resp: Response) => {
	try {
		const idCart = Number(req.params.id)
		const cart = await CartDao.deleteCart(idCart)
		if (cart) {
			resp.status(200).send('Carrito eliminado')
		} else {
			resp.status(503).send('No se pudo encontrar el carrito')
		}
	} catch (error) {
		console.log(`Lo sentimos hubo un error ${error}`)
	}
}


const addProductToCart = async (req: Request, resp: Response) => {
	try {
		const cartId = (req.params.id) 
		const productId = (req.params.id_prod) 
		const cartAndProduct = await CartDao.addProduct(cartId, productId)
		console.log(cartId)
		console.log(productId)
		console.log(cartAndProduct)

		if (cartAndProduct) {
			resp.status(201).send('Producto agregado al carrito con éxito')
		} else {
			resp.status(400).send('No se pudo encontrar el producto')
		}
	} catch (error) {
		console.log(`Lo sentimos hubo un error ${error}`)
	}
}

const getCartProducts = async (req: Request, resp: Response) => {
	try {
		const cartId = req.params.id
		const cartProducts = await CartDao.getAllProducts(cartId)

		if ( cartProducts ) {
		resp.status(200).send(cartProducts)
			
		}else {
			resp.status(400).send(`Lo siento no pudimos encontrar el carrito con el id: ${cartId}`)
		}		
		

	} catch (error) {
		console.log(`Lo sentimos hubo un error ${error}`)
	}
}


const deleteProductFromCart = async (req: Request, resp: Response) => {
	try {
		const cartId = (req.params.id)
		const idProduct = (req.params.id_prod)
		const cart = await CartDao.deleteProductById(cartId,idProduct)
		if (cart) {
			resp.status(200).send('Producto del carrito eliminado con éxito')
		} else {
			resp.status(400).send('Lo sentimos no pudimos encontrar el producto')
		}
		
	} catch (error) {
		console.log(`Lo sentimos hubo un error ${error}`)
	}
}

export {
	createCart,
	deleteCart,
	getCartProducts,
	addProductToCart,
	deleteProductFromCart,
}
