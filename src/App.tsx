import { RequireAuth } from './contexts/Auth/RequireAuth';
import { Home } from './pages/home';
import { Route, Routes } from 'react-router-dom';
import Cadastropage from './pages/Cadastropage';
import Alunos from './pages/Alunos';
import Professor from './pages/Professor';
import Curso from './pages/Curso';
import Turmas from './pages/Turmas';
import AddAlunos from './pages/AddAlunos';


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<RequireAuth><Home/></RequireAuth>} />
        <Route path="/Aluno" element={<RequireAuth><Alunos/></RequireAuth>} />
        <Route path="/Professor" element={<RequireAuth><Professor/></RequireAuth>} />
        <Route path="/Curso" element={<RequireAuth><Curso/></RequireAuth>} />
        <Route path="/Turma" element={<RequireAuth><Turmas/></RequireAuth>} />
        <Route path="/Aluno/Create" element={<RequireAuth><AddAlunos/></RequireAuth>} />
        <Route path='/Cadastro' element={<Cadastropage/>}/>
     </Routes>
    </div>
  );
}

export default App;
