import { Request, Response } from 'express'

export const signup = (req: Request, res: Response) => {
  console.log(req.body)
}

export const signin = (req: Request, res: Response) => {
  res.send('signIn')
  
}

export const profile = (req: Request, res: Response) => {
  res.send('profile')
  
}