import React from "react";
import Link from "./link";

export default class Hero extends React.Component {
    render() {
        return (<div class="hero-wrapper">
                <div class="hero-protector">
                <div class="hero-left">
                    <div class="title_lg dark">ТУРНИРНАЯ ТАБЛИЦА</div>
                    <div class="table-wrapper">
                        <div class="subwrapper">
                            <table class="ladder_container">
                                <thead><tr><td>МЕСТО</td><td>КОМАНДА</td><td>ОЧКИ</td><td>ИГР</td><td>ПОБ</td><td>НИЧ</td><td>ПОР</td></tr></thead>
                                {this.props.ladder.teams.map((team) => (<tr class="ladder-block-wrapper">
                                    <td>{team.place}</td><td><img class="img-sm" src={team.team.logo}></img></td><td>{team.points}</td><td>{team.wins + team.loses + team.draws}</td><td>{team.wins}</td><td>{team.draws}</td><td>{team.loses}</td>
                                </tr>)
                                )}
                            </table>
                        </div>
                    </div>
                </div>
                <div class="hero-right">
                    <img class="banner home" src="img/banner.png"></img>
                </div>
                </div>
                <Link class={'news-show-more home'} link={'/ladder'} text={'Смотреть всю таблицу'} data-attr={'show-more'} />
        </div>)
    }
}