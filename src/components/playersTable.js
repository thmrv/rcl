
import React from "react";
import Button from "./button";

let lastIndex = 0
export default class PlayersTable extends React.Component {
    render() {
        return (<div class="players-page-wrapper animate__animated animate__fadeIn">
        <table class="players_container">
            <thead><tr class="animate__animated animate__fadeInUp"><td>Игрок</td><td>Команда</td><td>Матчей</td><td>Фрагов</td><td>Помощи</td><td>Смертей</td><td>K/D</td><td>K/D diff</td></tr></thead>
            {this.props.players.players.map((player, index) => (<tr class="player-block-wrapper-table">
                <a href={'/player/' + player.player.id} class="linkless"><td class="playerinfo">{index + 1}<img class="img-sm" src={player.player.countryLogo}></img><img class="img-sm avatar" src={player.player.imageUrl}></img>{player.player.nickName}</td><td><img class="img-sm" src={player.team.logo}></img></td><td>{player.stats.games}</td><td>{player.stats.kills}</td><td>{player.stats.assists}</td><td>{player.stats.deaths}</td><td style={{color: player.stats.kd >= 1 ? '#159800' : '#BD0000' }}>{player.stats.kd.toFixed(2)}</td><td style={{color: player.stats.kdDiff >= 0 ? '#159800' : '#BD0000'}}>{player.stats.kdDiff.toFixed(0)}</td></a>
            </tr>)
            )}
        </table>
    </div>)
    }
}