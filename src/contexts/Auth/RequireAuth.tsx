import { useContext } from 'react';
import Loginpage from '../../pages/Loginpage';
import { AuthContext } from './AuthContext';

export const RequireAuth = ({children}: { children: JSX.Element}) => {
    const auth = useContext(AuthContext);

    if(!auth.user) {
        return <Loginpage/>;
    }

    return children;
}