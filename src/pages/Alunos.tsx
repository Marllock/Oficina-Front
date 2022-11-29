import { Tabela } from '../Components/Table';
import '../Styles/alunos.css';
import { SideBar } from './../Components/Sidebar';
import { useEducational } from '../hooks/useEducational';



function Alunos(){

        return(

            <div className='pg-aluno'>
                <SideBar/>
                <div className='table-design'>
                <Tabela/>
                </div>
            </div>
    );
}



export default Alunos;