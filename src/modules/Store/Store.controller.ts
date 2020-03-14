import express from 'express'
import { getAll, createOne, updateById, deleteById } from './Store.services'
import { IStore } from './definitions/Store'

class StoreController {
  async getAll (req: express.Request, res: express.Response) {
    try {
      const stores = await getAll({ ...req.query })
      res.send(stores)
    } catch (err) {
      res
        .status(500)
        .send({ message: 'We couldn\'t find stores', err: err.message })
    }
  }

  async create (req: express.Request, res: express.Response) {
    try {
      const store: IStore = req.body
      const newStore = await createOne(store)

      res.send(newStore)
    } catch (err) {
      res
        .status(500)
        .send({ message: 'We couldn\'t create the store', err: err.message })
    }
  }

  async update (req: express.Request, res: express.Response) {
    try {
      const { storeId } = req.params
      const store: IStore = req.body
      const newStore = await updateById(storeId, store)

      res.send(newStore)
    } catch (err) {
      res
        .status(500)
        .send({ message: 'We couldn\'t update the store', err: err.message })
    }
  }

  async delete (req: express.Request, res: express.Response) {
    try {
      const { storeId } = req.params
      await deleteById(storeId)

      res.send({ message: 'Store successfully deleted' })
    } catch (err) {
      res
        .status(500)
        .send({ message: 'We couldn\'t update the store', err: err.message })
    }
  }
}

export default new StoreController()
