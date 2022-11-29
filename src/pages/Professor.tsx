import { Tabela } from '../Components/Table';
import '../Styles/professor.css';
import { SideBar } from './../Components/Sidebar';
import { useEducational } from '../hooks/useEducational';



function Professor(){

    const columns = [
        {
            key:"1",
            title:'ID',
            dataIndex:'id'
        },
        {
            key:"2",
            title:'USER',
            dataIndex:'user'
        },
        {
            key:"3",
            title:'PROFESSORCOURSE',
            dataIndex:'professorcourse'
        }
    ]
    const { data: prof, loading  } = useEducational('users',"get",JSON.stringify({
        id: 1,
        name:'Eduardo',
        email:'Sincere@april.biz'
    }));
        return(

            <div>
                <SideBar/>
                <div>
                <Tabela/>
                </div>
            </div>
    );
}



export default Professor;