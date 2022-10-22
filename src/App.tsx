import  { useContext } from 'react';
import './App.css';
import { Route, Routes, Link, useNavigate } from 'react-router-dom';
import {Private} from './pages/Private';
import { RequireAuth } from './contexts/Auth/RequireAuth';
import { AuthContext } from './contexts/Auth/AuthContext';
import { Button } from 'antd/lib/radio';

function App() {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    await auth.sigout();
    navigate('/');
  }

  return (
    <div className="App">
{/*        <Button><Link to="/">Home</Link></Button>  */}
        <Button><Link to="/">Pagina de Login</Link></Button>
        {auth.user && <button onClick={handleLogout}>Sair</button>}
     <Routes>
 {/*        <Route path="/" element={<Home />}/> */}
        <Route path="/" element={<RequireAuth><Private/></RequireAuth>} />
     </Routes>
    </div>
  );
}

export default App;
