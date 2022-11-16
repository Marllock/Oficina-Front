import  { useContext } from 'react';
import './App.css';
<<<<<<< Updated upstream
import { Route, Routes, Link, useNavigate } from 'react-router-dom';
import {Home} from './pages/Home';
import {Private} from './pages/Private';
import { RequireAuth } from './contexts/Auth/RequireAuth';
import { AuthContext } from './contexts/Auth/AuthContext';
=======
import { RequireAuth } from './contexts/Auth/RequireAuth';
import { Home } from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import Cadastropage from './pages/Cadastropage';

>>>>>>> Stashed changes

function App() {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    await auth.sigout();
    navigate('/');
  }

  return (
<<<<<<< Updated upstream
    <div className="App">
     <header>
      <h1>header do site</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/private">Pagina Privada</Link>
        {auth.user && <button onClick={handleLogout}>Sair</button>}
      </nav>
     </header>
     <hr />
     <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/private" element={<RequireAuth><Private/></RequireAuth>} />
=======
    <div>
      <Routes>
        <Route path="/" element={<RequireAuth><Home/></RequireAuth>} />
        <Route path='/Cadastro' element={<Cadastropage/>}/>
>>>>>>> Stashed changes
     </Routes>
    </div>
  );
}

export default App;
