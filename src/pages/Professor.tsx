import { Table,Button,Input } from 'antd';
import '../Styles/professor.css';
import { SideBar } from './../Components/Sidebar';
import { useEducational } from '../hooks/useEducational';
import {PlusOutlined, EditOutlined, SearchOutlined} from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import type { ColumnsType } from 'antd/es/table';



function Professor(){

        const navigate = useNavigate();
        const routeChange = () =>{
            const path = `/Professor/Create`;
            navigate(path);
        }
    
       interface DataType {
        // id: number;
        // name: string;
        // username: string;
        key: React.Key;
        UserId: number;
        userName: string;
        userEmail: string;
        userCity: string;
        courseName: string;
        courseCode: string;

       }
    
        const onChangeStudent=()=>{
    
        }
    

        const columns: ColumnsType<DataType> = [
            // {
            //     title:'ID',
            //     dataIndex:'id'
            // },
            // {
            //     title:'name',
            //     dataIndex:'name'
            // },
            // {
            //     title:'username',
            //     dataIndex:'username'
            // },
            
            {
                title:'ID',
                dataIndex:'userId',
            },
            {
                title:'Professor',
                dataIndex:'userName',
            },
            {
                title:'Email',
                dataIndex:'userEmail',
            },
            {
                title:'Cidade',
                dataIndex:'userCity',
            },
            {
                title:'Curso',
                dataIndex:'courseName',
            },
            {
                title:'Curso',
                dataIndex:'courseCode',
            },
            {
                title:'Action',
                render: (record: any) => {
                    return (
                        <>
                        <EditOutlined onClick={()=>{
                            onChangeStudent()
                        }}/>
                        </>
                    );
                }
            }
        ]
    
        const { data: teacher, loading } = useEducational<DataType[]>('professor',"post",JSON.stringify({
            "userId": 1,
            "courseId": 1,
            "page": 0,
            "perPage": 10,
            "userName": "carlos",
            "userEmail": "carlosgomes@gmail.com",
            "userCity": "Marechal Deodoro",
            "userState": "Iguaçu",
            "userProfile": 0
        }),{
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Access-Control-Allow-Headers': 'Content-Type'
        });

        
    return(
        <div className='pg-professor'>
            <SideBar/>
            <div className='table-design'>
            <div className='action-container'>
            <Button className='btn-container' onClick={routeChange} icon={<PlusOutlined/>}>Novo Professor</Button>
            <Input prefix={<SearchOutlined/>} className='ipt-container' placeholder='Buscar por Nome de Professor'/>
            </div>
            <Table rowKey={(record)=>record.key} dataSource={teacher} columns={columns}  size="small"></Table>
            </div>
        </div>
);
}




export default Professor;