import { useEffect, useState } from 'react';
import fetchHelper from '../fetchHelper';
import { useParams } from 'react-router-dom';
import Stat from '../components/stat';
import MatchCard from '../components/matchCard';
import PlayerCard from '../components/playerCard';

let team, stats, lineup, matches;

function Team() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    let currentYear = new Date().getFullYear();

    const params = useParams();
    const teamId = params.teamId;

    useEffect(() => {
        setLoading(true)
        Promise.all([
            fetchHelper(window.apiHost + 'teams/' + teamId).then((data) => team = data),
            fetchHelper(window.apiHost + 'teams/stats/' + teamId).then((data) => stats = data),
            fetchHelper(window.apiHost + 'teams/lineup/' + teamId).then((data) => lineup = data),
            fetchHelper(window.apiHost + 'teams/matches/' + teamId).then((data) => matches = data),
        ]).finally(() => {
            setData(true)
            setLoading(false)
        })
    }, [setData]);

    if (loading) return (<div class="loader"><div class="spinner"></div></div>)

    if (window.location.pathname.includes('teams')) {
        document.querySelector('.header-bot-strip').style.display = 'none';
    }
    console.log(matches);
    if (typeof team != 'undefined' && typeof stats != 'undefined' && typeof lineup != 'undefined' && typeof matches != 'undefined') {
        return (<><div class="team-wrapper">
            <div class="team-upper-section">
                <div class="general">
                    <div class="image-wrapper team"><img class="team-logo-full" src={team.logo}></img></div>
                    <div class="info">
                        <div class="info-item">Название: {team.name}</div>
                        <div class="info-item">Страна: {team.country} <img class="country-logo" src={team.countryLogo}></img></div>
                    </div>
                </div>
                <div class="detail">
                    <div class="stats">
                        <Stat title={'Матчей'} values={[stats.games]} />
                        <Stat title={'Победы / ничьи / поражения'} values={[team.totalWins, team.totalDraws, team.totalLoses]} />
                        <Stat title={'Итого убийств'} values={[stats.kills]} />
                        <Stat title={'Итого смертей'} values={[stats.deaths]} />
                        <Stat title={'K/D'} values={[stats.kd]} />
                        <Stat title={'K/D разница'} values={[stats.kdDiff]} />
                    </div>
                    <div class="title_md">Актуальный состав</div>
                    <div class="lineup">
                        {lineup.map((player) => (
                            <PlayerCard player={player} />
                        ))}
                    </div>
                </div>
            </div>
            <div class="team-lower-section">
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

export default Team;