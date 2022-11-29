import { Table,Button } from 'antd';
import '../Styles/alunos.css';
import { SideBar } from './../Components/Sidebar';
import { useEducational } from '../hooks/useEducational';
import {PlusOutlined, EditOutlined, DeleteOutlined} from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';


function Alunos(){
    const navigate = useNavigate();
    const routeChange = () =>{
        const path = `/Aluno/Create`;
        navigate(path);
    }

    const onDeleteStudent=(record: any)=>{

    }

    const columns = [
        {
            key:"1",
            title:'ID',
            dataIndex:'id',
        },
        {
            key:"2",
            title:'USER',
            dataIndex:'name',
        },
        {
            key:"3",
            title:'STUDENTCOURSE',
            dataIndex:'email',
        },
        {
            key:"4",
            title:'Action',
            render: (record: any) => {
                return (
                    <>
                    <EditOutlined/>
                    <DeleteOutlined onClick={()=>{
                        onDeleteStudent(record)
                    }} style={{color: "red", marginLeft: 12}}/>
                    </>
                );
            }
        }
    ]

    const { data: student, loading  } = useEducational('users',"get",JSON.stringify({
        id: 1,
        name:'Eduardo',
        email:'Sincere@april.biz'
    }));

    


        return(
            <div className='pg-aluno'>
                <SideBar/>
                <div className='table-design'>
                    <Button onClick={routeChange} icon={<PlusOutlined/>}>Novo Aluno</Button>
                <Table dataSource={student} columns={columns} loading={loading}></Table>
                </div>
            </div>
    );
}



export default Alunos;