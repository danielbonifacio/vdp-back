import { model, Schema, Document } from 'mongoose'
import { IProduct } from './definitions/Product'

const Product = new Schema({
  store: {
    type: Schema.Types.ObjectId,
    ref: 'Store',
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true,
    unique: true
  },
  percentage: {
    type: Number,
    default: 0
  }
}, {
  timestamps: true
})

declare interface ProductModel extends Document, IProduct {}

export default model<ProductModel>('Product', Product)
