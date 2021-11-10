import { useState, useEffect } from "react";

const useFetch = (url: string) => {
    const [shipmentData, setShipmentData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setError] = useState(null);

    useEffect(() => {
        const abortCont = new AbortController(); // Aborts a DOM request before its completed

        fetch(url, {signal: abortCont.signal})
        .then(res => {
            return res.json()
        })
        .then(data => {
            setShipmentData(data);
            setIsLoading(false);
            setError(null);
        })
        .catch(err => {
            if(err.name === 'AbortError'){
                console.log('fetch aborted')
            } else {
                setIsLoading(false);
                setError(err.message)
            }
        })
        return () => abortCont.abort();
    }, []);

    return {shipmentData, isLoading, isError}

}

export default useFetch;