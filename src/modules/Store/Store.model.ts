import { model, Schema, Document } from 'mongoose'
import { IStore } from './definitions/Store'

const Store = new Schema({
  name: {
    type: String,
    required: true
  },
  logo: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true,
    unique: true
  }
}, {
  timestamps: true
})

declare interface StoreModel extends Document, IStore {}

export default model<StoreModel>('Store', Store)
