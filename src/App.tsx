import './App.css';
import {Private} from './pages/home';
import { RequireAuth } from './contexts/Auth/RequireAuth';

function App() {


  return (
    <div><RequireAuth><Private/></RequireAuth></div>
  );
}

export default App;
