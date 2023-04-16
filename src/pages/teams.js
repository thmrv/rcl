import { useEffect, useState } from 'react';

let teams;

function Teams() {
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

    if (window.location.pathname.includes('teams')){
        document.querySelector('.header-bot-strip').style.display = 'none';
    }

    if (typeof teams != 'undefined') {

        return (<div class="teams-page-wrapper animate__animated animate__fadeIn">
            <div class="title_lg dark">Команды</div>
            <div class="title_md dark">СЕЗОН 2022/2023</div>
            <div class="teams_container">
                {teams.teams.map((team) => (<div class="team-block-wrapper">
                    <div class="team-block-logo"><img src={team.logo} class="img-team-logo"></img></div>
                    <div class="team-block-name">{team.name}</div>
                </div>)
                )}
            </div>
        </div>);
    }
};

export default Teams;