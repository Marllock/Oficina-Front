import {createContext} from 'react'
import { User } from '../../Types/User';

export type AuthContextType = {
    user: User | null;
    sigin: (email: string, password: string) => Promise<boolean>;
    sigout: () => void;
}

export const AuthContext = createContext<AuthContextType>(null!);