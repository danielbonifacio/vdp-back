import { Router } from 'express'
import Product from '@modules/Product'
import Store from '@modules/Store'

const routes = Router()

routes.use('/products', Product)
routes.use('/stores', Store)

export default routes
