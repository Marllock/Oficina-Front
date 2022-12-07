import axios, { Method } from "axios";
import { IncomingHttpHeaders } from "http";
import { useEffect, useState } from 'react';

const api = axios.create({
    baseURL: process.env.REACT_APP_API //"https://jsonplaceholder.typicode.com/"
})

const useEducational = <T = unknown> (
  url: string,
  method: Method,
  body?: any,
  headers?: IncomingHttpHeaders,
  params?: any
) => {
    const [loading, setLoading] = useState<boolean>(false);
    const [data, setData] = useState<T | any>(null);
    const [error, setError] = useState<string | null>(null);
  
  useEffect(() => {
      setLoading(true);
      const fetchData = async () => {
        try {
          const response = await api({
            url: url,
            method: method,
            data: body,
            params,
            headers
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
    }, [url,body,method,params, headers]);
    
  
    return {loading, error, data};
    };
  export { useEducational };