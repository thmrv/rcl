import { useEffect, useState } from 'react';
import TeamsTable from '../components/teamsTable';
import fetchHelper from '../fetchHelper';

let teams;

function Teams() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    let currentYear = new Date().getFullYear();

    useEffect(() => {
            setLoading(true)
            fetchHelper('https://api.itsport.pro/teams/?take=25').then((data) => teams = data).finally(() => {
                setData(true)
                setLoading(false)
            })
    }, [setData]);

    if (loading) return (<div class="loader"><div class="spinner"></div></div>)

    if (window.location.pathname.includes('teams')){
        document.querySelector('.header-bot-strip').style.display = 'none';
    }

    if (typeof teams != 'undefined') {

        return (<><TeamsTable teams={teams} /></>);
    }else{
        <div class="status-error">Нет данных</div>
    }
};

export default Teams;