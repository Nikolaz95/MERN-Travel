import { useState, useEffect } from 'react';


const BASE_URL = "http://localhost:9000";

const useFetch = (endpoint) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            setError(null);
            try {
                const response = await fetch(`${BASE_URL}${endpoint}`);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const result = await response.json();
                setData(result);
                console.log(result);

            } catch (error) {
                setError(error.message || "Error fetching data");
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [endpoint]);

    return { data, loading, error };
};

export default useFetch;