import { Router } from 'express'
import ProductController from './Product.controller'
import { validateFilters } from '@middlewares'

const ProductRouter = Router()

ProductRouter
  .get('/', validateFilters, ProductController.getAll)
  .post('/', ProductController.create)
  .put('/:productId', ProductController.update)
  .delete('/:productId', ProductController.delete)

export default ProductRouter
