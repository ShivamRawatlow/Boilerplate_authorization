import { createContext } from 'react';
import { IUser } from '../interfaces/i_user';

interface IUserContext {
  user: IUser | null;
  setUser: React.Dispatch<React.SetStateAction<IUser | null>>;
}

const UserContext = createContext<IUserContext | null>(null);

export default UserContext;
