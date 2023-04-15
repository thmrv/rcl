import { useEffect, useState } from 'react';

let players;

function Players() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    let currentYear = new Date().getFullYear();

    useEffect(() => {
        fetch('https://api.itsport.pro/players?take=50&skip=0')
            .then((response) => {
                if (!response.ok) {
                    throw new Error(
                        `This is an HTTP error: The status is ${response.status}`
                    );
                }
                return response.json();
            })
            .then((actualData) => { players = actualData })
            .catch((err) => {
                console.log(err.message);
            }).finally(() => {
                setData(true)
            })
    }, [setData]);

    if (typeof players != 'undefined') {

        return (<div class="players-page-wrapper animate__animated animate__fadeIn">
            <table class="players_container">
                <thead><tr><td>Игрок</td><td>Команда</td><td>Матчей</td><td>Убийств</td><td>Помощи</td><td>Смертей</td><td>K/D</td><td>K/D diff</td></tr></thead>
                {players.players.map((player) => (<tr class="player-block-wrapper">
                    <td class="playerinfo"><img class="img-sm" src={player.player.countryLogo}></img><img class="img-sm avatar" src={player.player.imageUrl}></img>{player.player.nickName}</td><td><img class="img-sm" src={player.team.logo}></img></td><td>{player.stats.games}</td><td>{player.stats.kills}</td><td>{player.stats.assists}</td><td>{player.stats.deaths}</td><td style={{color: player.stats.kd >= 0 ? '#159800' : '#BD0000' }}>{player.stats.kd}</td><td style={{color: player.stats.kdDiff >= 0 ? '#159800' : '#BD0000'}}>{player.stats.kdDiff}</td>
                </tr>)
                )}
            </table>
        </div>);
    }
};

export default Players;