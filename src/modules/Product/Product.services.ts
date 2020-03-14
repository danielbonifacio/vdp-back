import Product from './Product.model'
import { IProduct } from './definitions/Product'

export const getAll = async ({
  sortBy = 'updatedAt',
  search = '',
  limit = 30,
  offset = 0,
  descending = false
}) => {
  return Product
    .find({
      $or: [
        {
          title: {
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
    .populate('store')
    .exec()
}

export const createOne = async (product: IProduct) => {
  return Product.create(product)
}

export const updateById = async (productId, newProductProperties: IProduct) => {
  return Product.findOneAndUpdate({ _id: productId }, newProductProperties, { new: true })
}

export const deleteById = async (productId) => {
  return Product.findByIdAndDelete(productId)
}
