import React from "react";

export default class Hero extends React.Component {
    render() {
        return (<div class="hero-wrapper">
            <div class="hero-left">
                <div class="title_lg dark">ТУРНИРНАЯ ТАБЛИЦА</div>
                <div class="table-wrapper">
                    <div class="subwrapper">
                        <table class="ladder_container">
                            <thead><tr><td>МЕСТО</td><td>КОМАНДА</td><td>ОЧКИ</td><td>МАТЧЕЙ</td><td>Побед</td><td>НИЧЬИ</td><td>ПОРАЖЕНИЯ</td></tr></thead>
                            {this.props.ladder.teams.map((team) => (<tr class="ladder-block-wrapper">
                                <td>{team.place}</td><td><img class="img-sm" src={team.team.logo}></img></td><td>{team.points}</td><td>{team.wins + team.loses + team.draws}</td><td>{team.wins}</td><td>{team.draws}</td><td>{team.loses}</td>
                            </tr>)
                            )}
                        </table>
                    </div>
                </div>
                <a href='/ladder' class="news-show-more home">Смотреть все результаты</a>
            </div>
            <div class="hero-right">
                <img class="banner home" src="img/banner.png"></img>
            </div>
        </div>)
    }
}