import axios from "axios";
import { useEffect, useState } from 'react';

const api = axios.create({
    baseURL: process.env.REACT_APP_API
})

export function useEducational<T = unknown> (url: string){
    const [tableData, setTableData] = useState<T | null>(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<Error | null>(null)

    useEffect(() => {
        api.get(url)
        .then(response => {
            setTableData(response.data)
        })
        .catch(err => {
            setError(err);
        })
        .finally(() => {
            setLoading(false);
        })
    }, )



    return { tableData, error, loading }
}