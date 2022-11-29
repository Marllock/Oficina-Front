import { Table } from 'antd';


export const Tabela = (data : any | null, columns : any | null, loading : any | null) =>{

    
    return(

        <Table
            dataSource={data}
            columns={columns}
            loading={loading}
        />
    );
};