import express from 'express'
import { getAll, createOne, updateById, deleteById } from './Product.services'
import { IProduct } from './definitions/Product'

class ProductController {
  async getAll (req: express.Request, res: express.Response) {
    try {
      const products = await getAll({ ...req.query })
      res.send(products)
    } catch (err) {
      res
        .status(500)
        .send({ message: 'We couldn\'t find products', err: err.message })
    }
  }

  async create (req: express.Request, res: express.Response) {
    try {
      const product: IProduct = req.body
      const newProduct = await createOne(product)

      res.send(newProduct)
    } catch (err) {
      res
        .status(500)
        .send({ message: 'We couldn\'t create the product', err: err.message })
    }
  }

  async update (req: express.Request, res: express.Response) {
    try {
      const { productId } = req.params
      const product: IProduct = req.body
      const newProduct = await updateById(productId, product)

      res.send(newProduct)
    } catch (err) {
      res
        .status(500)
        .send({ message: 'We couldn\'t update the product', err: err.message })
    }
  }

  async delete (req: express.Request, res: express.Response) {
    try {
      const { productId } = req.params
      await deleteById(productId)

      res.send({ message: 'Product successfully deleted' })
    } catch (err) {
      res
        .status(500)
        .send({ message: 'We couldn\'t update the product', err: err.message })
    }
  }
}

export default new ProductController()
