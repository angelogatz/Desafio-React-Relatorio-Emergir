import { useState, useEffect } from "react";


export const useFetch = (url) => { //passando a url que será enviada pela requisição

    const [data, setData] = useState(null); //capturando e tratando os dados vindos da url
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        
        const fetchData = async () => {

            setLoading(true)

            const res = await fetch(url);
            const data = await res.json();

            setData(data);

            setLoading(false)
        }

        fetchData();

    }, [url]);

  return { data, loading };
};

export default useFetch