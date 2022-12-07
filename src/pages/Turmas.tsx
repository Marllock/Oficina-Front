import { Table,Button,Input } from 'antd';
import '../Styles/professor.css';
import { SideBar } from './../Components/Sidebar';
import { useEducational } from '../hooks/useEducational';
import {PlusOutlined, EditOutlined, DeleteOutlined,SearchOutlined} from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';



function Turmas(){

        const navigate = useNavigate();
        const routeChange = () =>{
            const path = `/Turma/Create`;
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
                title:'Professor',
                dataIndex:'userName',
            },
            {
                key:"7",
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
    
        const { data: teacher, loading  } = useEducational('professor/v1/professor',"post",JSON.stringify({
                userId: 1,
                courseId: 3,
                page: 0,
                perPage: 10
        }));

    return(
        <div className='pg-professor'>
            <SideBar/>
            <div className='table-design'>
            <div className='action-container'>
            <Button className='btn-container' onClick={routeChange} icon={<PlusOutlined/>}>Nova Turma</Button>
            <Input prefix={<SearchOutlined/>} className='ipt-container' placeholder='Buscar por Nome de Professor'/>
            </div>
            <Table dataSource={teacher} columns={columns} loading={loading} size="small"></Table>
            </div>
        </div>
);
}




export default Turmas;