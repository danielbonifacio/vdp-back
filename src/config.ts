import dotenv from 'dotenv'
dotenv.config()

export default {
  app: {
    secret: process.env.SECRET,
    port: process.env.PORT || 3333,
    database: {
      connectionString: process.env.DB_CONN_STR
    }
  }
}
