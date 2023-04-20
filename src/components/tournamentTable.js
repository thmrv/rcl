import React from "react";
import Button from "./button";

export default class TournamentTable extends React.Component {
    render() {
        return (<div class="ladder-page-wrapper animate__animated animate__fadeIn">
            <div class="title_lg dark">ТУРНИРНАЯ ТАБЛИЦА</div>
            <table class="ladder_container">
                <thead><tr><td>МЕСТО</td><td>КОМАНДА</td><td>ОЧКИ</td><td>МАТЧЕЙ</td><td>Побед</td><td>НИЧЬИ</td><td>ПОРАЖЕНИЯ</td></tr></thead>
                {this.props.ladder.teams.map((team) => (<tr class="ladder-block-wrapper">
                    <td>{team.place}</td><td><img class="img-sm" src={team.team.logo}></img></td><td>{team.points}</td><td>{team.wins + team.loses + team.draws}</td><td>{team.wins}</td><td>{team.draws}</td><td>{team.loses}</td>
                </tr>)
                )}
                {this.props.ladder === [] ? 'Результатов нет' : ''}
            </table>
        </div>)
    }
}