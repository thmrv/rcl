import { useEffect, useState } from 'react';
import fetchHelper from '../fetchHelper';
import { useParams } from 'react-router-dom';
import Stat from '../components/stat';
import MatchCard from '../components/matchCard';
import PlayerCard from '../components/playerCard';

let player, stats, matches;

function Player() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    let currentYear = new Date().getFullYear();

    const params = useParams();
    const playerId = params.playerId;

    useEffect(() => {
        setLoading(true)
        Promise.all([
            fetchHelper(window.apiHost + 'players/' + playerId).then((data) => player = data),
            fetchHelper(window.apiHost + 'players/stats/' + playerId).then((data) => stats = data),
            fetchHelper(window.apiHost + 'players/matches/' + playerId).then((data) => matches = data),
        ]).finally(() => {
            setData(true)
            setLoading(false)
        })
    }, [setData]);

    if (loading) return (<div class="loader"><div class="spinner"></div></div>)

    console.log(matches);
    if (typeof player != 'undefined' && typeof stats != 'undefined' && typeof matches != 'undefined') {
        return (<><div class="player-wrapper team-wrapper">
            <div class="team-upper-section player-upper-section">
                <div class="general">
                    <div class="image-wrapper player-pic-wrapper"><img class="team-logo player-pic" src={player.imageUrl}></img></div>
                    <div class="image-wrapper player-team-logo-absolute"><img class="team-logo" src={player.team.logo}></img></div>
                </div>
                <div class="detail">
                    <div class="info">
                        <div class="info-item">Никнейм: {player.nickName}</div>
                        <div class="info-item">Возраст: {player.age}</div>
                        <div class="info-item">Страна: {player.country} <img class="country-logo" src={player.countryLogo}></img></div>
                        <div class="info-item">Команда: {player.team.name}</div>
                    </div>
                    <div class="stats">
                        <Stat title={'Матчей'} values={[stats.games]} />
                        <Stat title={'Итого фрагов'} values={[stats.kills]} />
                        <Stat title={'Итого смертей'} values={[stats.deaths]} />
                        <Stat title={'Итого помощи'} values={[stats.assists]} />
                        <Stat title={'K/D'} values={[stats.kd]} />
                        <Stat title={'K/D разница'} values={[stats.kdDiff]} />
                    </div>
                </div>
            </div>
            <div class="team-lower-section player-lower-section">
                <div class="title_lg">История матчей</div>
                <div class="matches">
                    {matches.map((match) => (
                        <MatchCard match={match} pending={false} teamPage={true} />
                    ))}
                </div>
            </div>
        </div></>);
    } else {
        <div class="status-error">Нет данных</div>
    }
};

export default Player;