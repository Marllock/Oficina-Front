import { Table } from 'antd';


export const Tabela = (data : any, columns: any | null, loading : boolean) =>{
    
    
    return(
        <div>
        <Table
        dataSource={data}
        
        loading={loading}
        />
        </div>
    );
};