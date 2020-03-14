import express from 'express'
import mongoose, { mongo } from 'mongoose'
import cors from 'cors'
import routes from './routes'
import config from '@config'
import middlewares from '@middlewares'

class App {
  public express: express.Application

  public constructor () {
    this.express = express()
    this.middlewares()
    this.database()
    this.routes()
  }

  public boot () {
    console.log(`App starting at http://localhost:${config.app.port}`)
    return this.express
  }

  private middlewares () {
    this.express.use(express.json())
    this.express.use(cors())
    this.express.use(...middlewares)
  }

  private database () {
    mongoose.set('useNewUrlParser', true)
    mongoose.set('useCreateIndex', true)
    mongoose.set('useFindAndModify', false)
    mongoose.set('useUnifiedTopology', true)

    mongoose
      .connect(config.app.database.connectionString)
      .then(() => {
        console.log('connected to db')
      })
      .catch((error) => {
        console.log('error during database connection')
        console.log(error.message)
      })
  }

  private routes () {
    this.express.use(routes)
  }
}

export default App
