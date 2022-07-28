  import { Request, Response } from 'express'
  import { ProductDao } from '../daos';

  //GetAll
  const getProducts = async (req: Request, res: Response) => {
    try {
      let productos = await ProductDao.getProducts();
      res.json(productos);
    } catch (err: any) {
      console.log("No existen productos", err);
    }
  };

  //add

  const addProductsController = async (req: any, res: any) => {
    try {
      console.log('entre al try del controller')
      let data = req.body;
      console.log('data',data)
      console.log(ProductDao)
      let newProduct = await ProductDao.addProduct(data)
      console.log('newProduct',newProduct)

      if (newProduct) {
        res.status(201).json({
            msg:'El producto se creo de manera exitosa',
            data:newProduct
        })
      } else {
        res.status(400).json("No se pudo agregar el producto");
      }
    } catch (e) {
      console.log('Ocurrio un error al agregar el producto')
    }
  }

  //GetByID

  const getById = async (req: any, res: any) => {
    const id = Number(req.params.id);

    let data = await ProductDao.getById(id);

    if (data) {
      res.send(data);
    } else {
      res.status(404).json({ error: "Producto no encontrado!" });
    }
  };

  //Update con id

  // const updateProduct = async (req: any, res: any) => {
  //   let data = await dbController.readFile();

  //   const id = Number(req.params.id);
  //   if (data.length > 0) {
  //     if (!isNaN(id)) {
  //       const product = data.find((prod: any) => prod.id == id);
  //       const updatedProducts = data.filter((prod: any) => prod.id !== id);
  //       const timestamp = new Date().toLocaleString("es-AR");

  //       if (product) {
  //         const { title, description, code, price, thumbnail, stock } = req.body;
  //         let productToUpdate = {
  //           id:id,
  //           title,
  //           description,
  //           code,
  //           price: Number(price),
  //           thumbnail,
  //           timestamp:timestamp,
  //           stock,
  //         };

  //         data = [...updatedProducts, productToUpdate];
  //         await dbController.writeFile(data);

  //         res.status(200).send("Producto actualizado!");
  //       } else {
  //         res.status(404).json({ error: "Producto no encontrado" });
  //       }
  //     } else {
  //       res.status(400).json({ error: "El ID debe ser un número" });
  //     }
  //   } else {
  //     res.status(404).json({ error: "No existen productos" });
  //   }
  // };

  //Delete por id

  const deleteById = async (req: any, res: any) => {
    const id = Number(req.params.id);
    let data = await ProductDao.deleteById(id);
    if (data) {
      res.json('Producto eliminado');
    } else {
      res.status(404).json({ error: "Producto no encontrado!" });
    }
  };

  export { getProducts, addProductsController, getById, deleteById };