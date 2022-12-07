import { Table,Button,Input } from 'antd';
import '../Styles/professor.css';
import { SideBar } from './../Components/Sidebar';
import { useEducational } from '../hooks/useEducational';
import {PlusOutlined, EditOutlined, DeleteOutlined,SearchOutlined} from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';



function Curso(){

        const navigate = useNavigate();
        const routeChange = () =>{
            const path = `/Curso/Create`;
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
                key:"3",
                title:'Email',
                dataIndex:'userEmail',
            },
            {
                key:"4",
                title:'Cidade',
                dataIndex:'userCity',
            },
            {
                key:"5",
                title:'Curso',
                dataIndex:'courseName',
            },
            {
                key:"6",
                title:'Curso',
                dataIndex:'courseCode',
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
            <Button className='btn-container' onClick={routeChange} icon={<PlusOutlined/>}>Novo Curso</Button>
            <Input prefix={<SearchOutlined/>} className='ipt-container' placeholder='Buscar por Nome de Professor'/>
            </div>
            <Table dataSource={teacher} columns={columns} loading={loading} size="small"></Table>
            </div>
        </div>
);
}




export default Curso;