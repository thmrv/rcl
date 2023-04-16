import { useEffect, useState } from 'react';

let teams;

function Team() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    let currentYear = new Date().getFullYear();

    useEffect(() => {
        setLoading(true)
        fetch('https://api.itsport.pro/teams/?take=25')
            .then((response) => {
                if (!response.ok) {
                    throw new Error(
                        `This is an HTTP error: The status is ${response.status}`
                    );
                }
                return response.json();
            })
            .then((actualData) => { teams = actualData })
            .catch((err) => {
                console.log(err.message);
            }).finally(() => {
                setData(true)
                setLoading(false)
            })
    }, [setData]);

    if (loading) return (<div class="loader"><div class="spinner"></div></div>)

    if (typeof teams != 'undefined') {

        return (<></>);
    }
};

export default Team;