import { Request, Response, NextFunction } from 'express'

export default function (req: Request, res: Response, next: NextFunction) {
  const params = {
    sortBy: String,
    search: String,
    limit: Number,
    offset: Number,
    descending: Boolean
  }

  Object.keys(params).forEach(param => {
    if (req.query[param]) {
      if (params[param] === Boolean) {
        req.query[param] = req.query[param] === 'true'
        return
      }
      req.query[param] = params[param](req.query[param])
    }
  })

  next()
}
