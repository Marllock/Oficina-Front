import { Table,Button,Input } from 'antd';
import '../Styles/alunos.css';
import { SideBar } from './../Components/Sidebar';
import { useEducational } from '../hooks/useEducational';
import {PlusOutlined, EditOutlined, DeleteOutlined,SearchOutlined} from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';


function Alunos(){
    const navigate = useNavigate();
    const routeChange = () =>{
        const path = `/Aluno/Create`;
        navigate(path);
    }

    const onDeleteStudent=(record: any)=>{

    }

    const onChangeStudent=()=>{

    }

    const columns = [
        {
            key:"1",
            title:'ID',
            dataIndex:'userId',
        },
        {
            key:"2",
            title:'USER',
            dataIndex:'userName',
        },
        {
            key:"3",
            title:'StudentEmail',
            dataIndex:'userEmail',
        },
        {
            key:"4",
            title:'StudentTelephone',
            dataIndex:'userTelephone',
        },
        {
            key:"5",
            title:'StudentCourse',
            dataIndex:'courseName',
        },
        {
            key:"6",
            title:'Action',
            render: (record: any) => {
                return (
                    <>
                    <EditOutlined onClick={()=>{
                        onChangeStudent()
                    }}/>
                    <DeleteOutlined onClick={()=>{
                        onDeleteStudent(record)
                    }} style={{color: "red", marginLeft: 12}}/>
                    </>
                );
            }
        }
    ]

    const { data: student, loading  } = useEducational('student?page=1&perPage=10',"get");

        return(
            <div className='pg-aluno'>
                <SideBar/>
                <div className='table-design'>
                <div className='action-container'>
                <Button className='btn-container' onClick={routeChange} icon={<PlusOutlined/>}>Novo Aluno</Button>
                <Input prefix={<SearchOutlined/>} className='ipt-container' placeholder='Buscar por Nome do Aluno'/>
                </div>
                <Table dataSource={student} columns={columns} loading={loading} size="small"></Table>
                </div>
            </div>
    );
}



export default Alunos;