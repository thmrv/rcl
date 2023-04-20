import { useEffect, useState } from 'react';
import fetchHelper from '../fetchHelper';
import { useParams } from 'react-router-dom';
import Stat from '../components/stat';
import MatchCard from '../components/matchCard';
import PlayerCard from '../components/playerCard';
import MastheadMatch from '../components/mastheadMatch';
import Masthead from '../components/masthead';

let match, stats, team1Id, team2Id, team1, team2, playersTeam1, playersTeam2;

function Match() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    let currentYear = new Date().getFullYear();

    const params = useParams();
    const matchId = params.matchId;

    useEffect(() => {
        setLoading(true)
        fetchHelper(window.apiHost + 'games/' + matchId).then((data) => match = data)
            .then(() => {
                Promise.all([
                    fetchHelper(window.apiHost + 'teams/' + match.team1Id).then((data) => team1 = data),
                    fetchHelper(window.apiHost + 'teams/' + match.team2Id).then((data) => team2 = data),
                    fetchHelper(window.apiHost + 'teams/lineup/' + match.team1Id).then((data) => playersTeam1 = data),
                    fetchHelper(window.apiHost + 'teams/lineup/' + match.team2Id).then((data) => playersTeam2 = data),
                ]).finally(() => {
                    setData(true)
                    setLoading(false)
                })
            })
    }, [setData]);

    if (loading) return (<div class="loader"><div class="spinner"></div></div>)

    if (window.location.pathname.includes('teams')) {
        document.querySelector('.header-bot-strip').style.display = 'none';
    }

    if (typeof match != 'undefined' && typeof team1 != 'undefined' && typeof team2 != 'undefined' && typeof playersTeam1 != 'undefined' && typeof playersTeam2 != 'undefined') {
        return (<><div class="match-wrapper">
            <MastheadMatch match={match} team1={team1} team2={team2} players1={playersTeam1} players2={playersTeam2} />
            <div class="details-wrapper">
                <div class="lineups">
                    <div class="title_md">Составы команд</div>
                    <div class="lineups-wrapper">
                        <div class="lineup-team-outer">
                            <div class="team-lineup-title"><div class="image-wrapper team-lineup-title-wrapper"><img class="team-logo-lineup" src={team1.logo}></img></div>{team1.name}</div>
                        <div class="lineup-team team1">
                            {playersTeam1.map((player) => (
                                <PlayerCard player={player} />
                            ))}
                        </div>
                        </div>
                        <div class="lineup-team-outer">
                        <div class="team-lineup-title"><div class="image-wrapper team-lineup-title-wrapper"><img class="team-logo-lineup" src={team2.logo}></img></div>{team2.name}</div>
                        <div class="lineup-team team2">
                            {playersTeam2.map((player) => (
                                <PlayerCard player={player} />
                            ))}
                        </div>
                        </div>
                    </div>
                </div>
                <div class="players-stats">
                    <div class="team1-players-stats">
                        <table class="stats-table">
                            <thead>
                                <tr>
                                    <td></td>
                                    <td>K</td>
                                    <td>D</td>
                                    <td>A</td>
                                </tr>
                            </thead>
                            {match.team1Stats.map((player, index) => (
                                <tr>
                                    <td class="player-info-stats"><img class="small-img" src={playersTeam1[index].countryLogo}></img>{player.nickName}</td>
                                    <td>{player.kills}</td>
                                    <td>{player.deaths}</td>
                                    <td>{player.assists}</td>
                                </tr>
                            ))}
                        </table>
                    </div>
                    <div class="stats-vs-pic"><img class="stats-vs-img" src="/img/match-vs.png"></img></div>
                    <div class="team2-players-stats">
                        <table class="stats-table">
                            <thead>
                                <tr>
                                    <td></td>
                                    <td>K</td>
                                    <td>D</td>
                                    <td>A</td>
                                </tr>
                            </thead>
                            {match.team2Stats.map((player, index) => (
                                <tr>
                                    <td class="player-info-stats"><img class="small-img" src={playersTeam2[index].countryLogo}></img>{player.nickName}</td>
                                    <td>{player.kills}</td>
                                    <td>{player.deaths}</td>
                                    <td>{player.assists}</td>
                                </tr>
                            ))}
                        </table>
                    </div>
                </div>
            </div>
        </div></>);
    } else {
        <div class="status-error">Нет данных</div>
    }
};

export default Match;