import { Router } from 'express'
import ProductController from './Product.controller'

const ProductRouter = Router()

ProductRouter
  .get('/', ProductController.getAll)
  .post('/', ProductController.create)
  .put('/:productId', ProductController.update)
  .delete('/:productId', ProductController.delete)

export default ProductRouter
