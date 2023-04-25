import { useEffect, useState, useRef } from 'react';
import fetchHelper from '../fetchHelper.js';

var stats = [];

function Modal(props) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    let currentYear = new Date().getFullYear();

    const hideModal = (e) => {
        e.currentTarget.classList.add('hidden');
        document.querySelector('body').style.overflowY = 'auto';
    }

    useEffect(() => {
        setLoading(true);
        Promise.all([
            fetchHelper(window.apiHost + 'maps/' + props.id).then((data) => stats[props.id] = data),
        ]).finally(() => {
            setData(true)
            setLoading(false)
        })
    }, [setData]);

    if (loading) return (<div class="loader"><div class="spinner over"></div></div>)
    
    appendTeamPlayersFlags(props);

    if (typeof stats != 'undefined') {
        return (<>
            <div class="modal hidden" onClick={hideModal} id={'modal-' + props.id}><div class="close-modal">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-x-lg" viewBox="0 0 16 16">
  <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
</svg>
                </div><div class="modal-inner">
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
                            {stats[props.id].team1Stats.map((player, index) => (
                                <tr>
                                    <td class="player-info-stats"><img class="small-img" src={player.countryLogo}></img>{player.nickName}</td>
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
                            {stats[props.id].team2Stats.map((player, index) => (
                                <tr>
                                    <td class="player-info-stats"><img class="small-img" src={player.countryLogo}></img>{player.nickName}</td>
                                    <td>{player.kills}</td>
                                    <td>{player.deaths}</td>
                                    <td>{player.assists}</td>
                                </tr>
                            ))}
                        </table>
                    </div>
                </div>
                </div></div>
        </>);
    }
};

function appendTeamPlayersFlags(props){
    stats[props.id].team1Stats.map((player, index) => {
        props.playersTeam1.map((playerIn, indexIn) => {
            if (playerIn.nickName === player.nickName){
                player['countryLogo'] = playerIn.countryLogo;
            }
        })
    })
    stats[props.id].team2Stats.map((player, index) => {
        props.playersTeam2.map((playerIn, indexIn) => {
            if (playerIn.nickName === player.nickName){
                player['countryLogo'] = playerIn.countryLogo;
            }
        })
    })
}

export default Modal;