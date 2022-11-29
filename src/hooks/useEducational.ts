import axios, { Method } from "axios";
import { useEffect, useState } from 'react';

const api = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/'
})

const useEducational = (
    url: string,
    method: Method,
    body: any
  ) => {
    const [loading, setLoading] = useState<boolean>(false);
    const [data, setData] = useState<any>(null);
    const [error, setError] = useState<string | null>(null);
  
    useEffect(() => {
      setLoading(true);
      const fetchData = async () => {
        try {
          const response = await api({
            url: url,
            method: method,
            data: body,
          });
          const data = response?.data;
          setData(data);
        } catch (error: any) {
          setError(error);
        } finally {
          setLoading(false);
        }
      };
  
      fetchData().then((r) => r);
    }, [url,body,method]);
  
    return {loading, error, data};
  };
  
  export { useEducational };