import { JwtPayload } from 'jsonwebtoken';
import { UserCreated } from '../../types/Model';

export default interface IJasonwebtoken {
  sign(userData: UserCreated): string;
  verify(token: string): string | JwtPayload;
}
