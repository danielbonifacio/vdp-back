import { Router } from 'express'
import StoreController from './Store.controller'

const StoreRouter = Router()

StoreRouter
  .get('/', StoreController.getAll)
  .post('/', StoreController.create)
  .put('/:storeId', StoreController.update)
  .delete('/:storeId', StoreController.delete)

export default StoreRouter
