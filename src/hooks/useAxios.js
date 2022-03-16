import React, {useEffect, useState} from 'react'

const useAxios = () => {
    const [response, setResponse] = useState(null);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(true);



    useEffect (() => {
        const fetchData = () => {
        try {
            axios
            .get(url)
            .then(res => setResponse(res.data))
            .then(() => setLoading(false))
        } catch (error) {
            
        }
        fetchData()
        }
    }, [url]);


    return ({

    })
}