import Store from './Store.model'
import { IStore } from './definitions/Store'

export const getAll = async ({
  sortBy = 'updatedAt',
  search = '',
  limit = 30,
  offset = 0,
  descending = false
}) => {
  return Store
    .find({
      $or: [
        {
          name: {
            $regex: search,
            $options: 'i'
          }
        }
      ]
    })
    .sort({
      [sortBy]: descending ? -1 : 1
    })
    .skip(Number(offset))
    .limit(Number(limit))
    .exec()
}

export const createOne = async (store: IStore) => {
  return Store.create(store)
}

export const updateById = async (storeId, newStoreProperties: IStore) => {
  return Store.findOneAndUpdate({ _id: storeId }, newStoreProperties, { new: true })
}

export const deleteById = async (storeId) => {
  return Store.findByIdAndDelete(storeId)
}
