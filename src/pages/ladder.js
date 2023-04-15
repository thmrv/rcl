import { useEffect, useState } from 'react';

let ladder;

function Ladder() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    let currentYear = new Date().getFullYear();

    useEffect(() => {
        fetch('https://api.itsport.pro/shortresults?skip=0&take=25')
            .then((response) => {
                if (!response.ok) {
                    throw new Error(
                        `This is an HTTP error: The status is ${response.status}`
                    );
                }
                return response.json();
            })
            .then((actualData) => { ladder = actualData })
            .catch((err) => {
                console.log(err.message);
            }).finally(() => {
                setData(true)
            })
    }, [setData]);

    if (typeof ladder != 'undefined') {

        return (<div class="ladder-page-wrapper animate__animated animate__fadeIn">
            <div class="title_lg dark">ТУРНИРНАЯ ТАБЛИЦА</div>
            <table class="ladder_container">
                <thead><tr><td>МЕСТО</td><td>КОМАНДА</td><td>ОЧКИ</td><td>МАТЧЕЙ</td><td>Побед</td><td>НИЧЬИ</td><td>ПОРАЖЕНИЯ</td></tr></thead>
                {ladder.teams.map((team) => (<tr class="ladder-block-wrapper">
                <td>{team.place}</td><td><img class="img-sm" src={team.team.logo}></img></td><td>{team.points}</td><td>{team.wins + team.loses + team.draws}</td><td>{team.wins}</td><td>{team.draws}</td><td>{team.loses}</td>
                </tr>)
                )}
            </table>
        </div>);
    }
};

export default Ladder;