import { Request, Response } from 'express';
import { User } from '../models/user';

export class UserController {
  public static async getAllUsers(req: Request, res: Response): Promise<void> {
    const users = await User.findAll();
    res.json(users);
  }
}


