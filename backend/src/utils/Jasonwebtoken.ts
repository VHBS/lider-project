import * as jwt from 'jsonwebtoken';
import IJasonwebtoken from './interfaces/IJasonwebtoken';
import 'dotenv/config';
import { UserTypeModel } from '../types/Model';

export default class Jasonwebtoken implements IJasonwebtoken {
  private _secret: string;

  constructor() {
    this._secret = process.env.JWT_SECRET || 'lider_project';
  }

  public sign(userData: UserTypeModel): string {
    return jwt.sign({ data: userData }, this._secret, { expiresIn: '7d', algorithm: 'HS256' });
  }

  public verify(token: string): jwt.JwtPayload {
    const jwtPayload = jwt.verify(token, this._secret) as jwt.JwtPayload;
    return jwtPayload;
  }
}
