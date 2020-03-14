import { Request, Response, NextFunction } from 'express'

export default function (req: Request, res: Response, next: NextFunction) {
  const { limit } = req.query

  if (limit && limit > 30) {
    return res
      .status(400)
      .send({
        message: 'The "limit" filter must be less or equal than 30'
      })
  }

  next()
}
