import axios, { Method } from "axios";
import { IncomingHttpHeaders } from "http";
import { useState } from 'react';
// axios.defaults.headers.common['Content-Type'] = 'application/json'

const api = axios.create({
    baseURL: process.env.REACT_APP_API //"https://jsonplaceholder.typicode.com/"
})

const useEducational = <T = unknown> () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [data, setData] = useState<T | any>(null);
    const [error, setError] = useState<string | null>(null);
  

    function sendHtppRequest (
      url: string,
      method: Method,
      body?: any,
      headers?: IncomingHttpHeaders,
      params?: any) {
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
    }
  
    return {loading, error, data, sendHtppRequest };
  };
  
  export { useEducational };