import { Table,Button,Input } from 'antd';
import '../Styles/alunos.css';
import { SideBar } from './../Components/Sidebar';
import { useEducational } from '../hooks/useEducational';
import {PlusOutlined, SearchOutlined} from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import type { ColumnsType } from 'antd/es/table';


function Alunos(){
    const navigate = useNavigate();
    const routeChange = () =>{
        const path = `/Aluno/Create`;
        navigate(path);
    }

    interface DataType {
        key: React.Key;
        content:[{
            StudentId: number;
            userName: string;
            userEmail: string;
            userTelephone: string;
            courseName: string;
        }]
       }

    const columns: ColumnsType<DataType> = [
        {
            title:'ID',
            dataIndex:'StudentId',
        },
        {
            title:'USER',
            dataIndex:'userName',
        },
        {
            title:'StudentEmail',
            dataIndex:'userEmail',
        },
        {
            title:'StudentTelephone',
            dataIndex:'userTelephone',
        },
        {
            title:'StudentCourse',
            dataIndex:'courseName',
        }
    ]

    const { data:student , loading  } = useEducational<DataType[]>();



        return(
            <div className='pg-aluno'>
                <SideBar/>
                <div className='table-design'>
                <div className='action-container'>
                <Button className='btn-container' onClick={routeChange} icon={<PlusOutlined/>}>Novo Aluno</Button>
                <Input prefix={<SearchOutlined/>} className='ipt-container' placeholder='Buscar por Nome do Aluno'/>
                </div>
                <Table rowKey={(record)=>record.key} dataSource={student} columns={columns} loading={loading} size="small"></Table>
                </div>
            </div>
    );
}



export default Alunos;