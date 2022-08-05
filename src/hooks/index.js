import { useState, useEffect } from "react"

export const useLibrary = (filters) => {
    const [languages, setLanguages] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                const resp = await fetch(`http://localhost:5000/languages?${filters}`, { method: 'GET' });
                const json = await resp.json();

                setLanguages(json);
            } catch (error) {
                setLanguages([]);
            }
        })();
    }, []);

    return languages;
}