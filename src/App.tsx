import { RequireAuth } from './contexts/Auth/RequireAuth';
import { Home } from './pages/home';
import { Route, Routes } from 'react-router-dom';
import Cadastropage from './pages/Cadastropage';



function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<RequireAuth><Home/></RequireAuth>} />
        <Route path='/Cadastro' element={<Cadastropage/>}/>
     </Routes>
    </div>
  );
}

export default App;
