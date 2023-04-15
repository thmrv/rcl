import React from "react";
import Timer from "./timer";

export default class Masthead extends React.Component {
    constructor(props){
        super(props)
        this.date = new Date(this.props.featured.startedAt);
        this.leagueTitle = 'РОССИЙСКАЯ КИБЕРСПОРТИВНАЯ ЛИГА';
    }
    render() {
        let isMobile = window.screen.width > 1100 ? false : true;
        let self = this;
        let month = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря']
        return (<div class="masthead-wrapper header-wrapper animate__animated animate__fadeIn" style={{ backgroundImage: isMobile ? "url(" + "/img/spread.png" + ")" : "url(" + "/img/masthead.png" + ")" }}>
            <div class="masthead-top">{this.leagueTitle}<img class="logo-vs-overexposed" src="/img/logo_white_opaque.png"></img></div>
            <div class="masthead-vs">
                <div class="vs-team-wrapper">
                    <div class="vs-team-logo"><img class="featured-team-logo first" src={this.props.featured.team1.logoDark}></img></div>
                    <div class="vs-team-name">{this.props.featured.team1.name}</div>
                </div>
                <div class="vs-span">VS</div>
                <div class="vs-team-wrapper">
                    <div class="vs-team-name">{this.props.featured.team2.name}</div>
                    <div class="vs-team-logo"><img class="featured-team-logo last" src={this.props.featured.team2.logoDark}></img></div>
                </div>
            </div>
            <div class="vs-date">{this.date.getDate() + ' ' + month[this.date.getMonth()] + ' ' + this.date.getFullYear() + " - " + this.date.getHours() + ":" + (this.date.getMinutes() < 10 ? '0' : '') + this.date.getMinutes() + ' МСК'}</div>
            <Timer date={this.date}/>
            <div class="vs-watch-links"><div class="watch-now">Смотреть матчи:</div>
                <div class="watch-now-icons-wrapper">
                    <a href="https://www.twitch.tv/ruscyberleague"><img src="img/twitch_white.svg" class="watch-now-icons"></img></a>
                    <a href="https://www.youtube.com/@ruscyberleaguecs"><img src="img/youtube_white.svg" class="watch-now-icons"></img></a>
                    <a href="https://vk.com/ruscyberleague"><img src="img/vk_white.svg" class="watch-now-icons"></img></a>
                </div>
            </div>
            <a href="/matches" class="vs-games-button"><img class="date-icon" src="img/date.svg"></img>БЛИЖАЙШИЕ МАТЧИ</a>
        </div>)
    }
}