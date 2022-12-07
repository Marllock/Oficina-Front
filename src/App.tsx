import { Route, Routes } from 'react-router-dom';
import Cadastropage from './pages/Cadastropage';
import Alunos from './pages/Alunos';
import Professor from './pages/Professor';
import Curso from './pages/Curso';
import Turmas from './pages/Turmas';
import AddAlunos from './pages/AddAlunos';
import Loginpage from './pages/Loginpage';
import AddProfessor from './pages/AddProfessor';
import AddCurso from './pages/AddCurso';
import AddTurmas from './pages/AddTurmas';


function App() {
  return (
    <div>
      <Routes>
        <Route path="/Aluno" element={<Alunos/>} />
        <Route path="/Professor" element={<Professor/>} />
        <Route path="/Curso" element={<Curso/>} />
        <Route path="/Turma" element={<Turmas/>} />
        <Route path="/Aluno/Create" element={<AddAlunos/>} />
        <Route path="/Professor/Create" element={<AddProfessor/>} />
        <Route path="/Curso/Create" element={<AddCurso/>} />
        <Route path="/Turma/Create" element={<AddTurmas/>} />
        <Route path='/Cadastro' element={<Cadastropage/>}/>
        <Route path='/' element={<Loginpage/>}/>
     </Routes>
    </div>
  )
}

export default App
