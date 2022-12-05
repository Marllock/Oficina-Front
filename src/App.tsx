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
        <Route path="/" element={<Home/>} />
        <Route path="/Aluno" element={<Alunos/>} />
        <Route path="/Professor" element={<Professor/>} />
        <Route path="/Curso" element={<Curso/>} />
        <Route path="/Turma" element={<Turmas/>} />
        <Route path="/Aluno/Create" element={<AddAlunos/>} />
        <Route path="/Professor/Create" element={<AddAlunos/>} />
        <Route path="/Curso/Create" element={<AddAlunos/>} />
        <Route path="/Turma/Create" element={<AddAlunos/>} />
        <Route path='/Cadastro' element={<Cadastropage/>}/>
     </Routes>
    </div>
  );
}

export default App;
