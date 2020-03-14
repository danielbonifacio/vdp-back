import { Router } from 'express'
import StoreController from './Store.controller'
import { validateFilters } from '@middlewares'

const StoreRouter = Router()

StoreRouter
  .get('/', validateFilters, StoreController.getAll)
  .post('/', StoreController.create)
  .put('/:storeId', StoreController.update)
  .delete('/:storeId', StoreController.delete)

export default StoreRouter
