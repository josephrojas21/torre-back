import { Request, Response } from 'express'
import User, { IUser} from '../models/user'

import jwt from 'jsonwebtoken'

export const signup = async (req: Request, res: Response) => {
  console.log(req.body);
  const user: IUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password
  })
  user.password = await user.encryptPassword(user.password);
  const savedUser = await user.save();

  const token: string = jwt.sign({_id: savedUser._id}, process.env.SECRET || 'tokenTest');

  res.header('authToken', token).json(savedUser);
}

export const signin = async (req: Request, res: Response) => {
  const user = await User.findOne({email: req.body.email});
  if (!user) return res.status(400).json('Email or password is wrong');
  const correctPassword: boolean = await user.validatePassword(req.body.password);
  if (!correctPassword) res.status(400).json('Invalid password');

  const token: string =  jwt.sign({_id: user._id}, process.env.SECRET || 'tokenTest',{
    expiresIn: 60 * 60
  });

  res.header('authToken', token).json(user);
  
}

export const profile = (req: Request, res: Response) => {
  res.send('profile')
  
}