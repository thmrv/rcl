import { match } from "assert";
import React from "react";

let month = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'];

export default class MatchCardBG extends React.Component {
    constructor(props) {
        super(props)
        this.date = new Date(this.props.match.startedAt);
        this.dateTime = new Date();
    }

    render() {
        let self = this;
        return (<div class="match-block-wrapper-bg-vs" id={'match' + this.props.match.id}>
            {self.getDate(this.props.match.startedAt)}
            <a class="match-bg-link" href={'match/' + this.props.match.id}>
                <div class="match-bg-vs" style={{ backgroundImage: "url(" + "/img/spread.png" + ")" }}>
                    <img class="match-bg-vs-logo" src="/img/logo_white.svg"></img>
                    <div class="match-bg-vs-inner-wrapper">
                    <div class="match-bg-vs-team-wrapper animate__animated animate__fadeInLeft">
                        <div class="match-bg-vs-team-logo"><img class="match-team-logo-bg first" src={this.props.match.team1.logoDark}></img></div>
                        <div class="match-bg-vs-team-name">{this.props.match.team1.name}</div>
                    </div>
                    <div class="match-bg-vs-span animate__animated animate__fadeInDown">VS</div>
                    <div class="match-bg-vs-team-wrapper animate__animated animate__fadeInRight">
                        <div class="match-bg-vs-team-name">{this.props.match.team2.name}</div>
                        <div class="match-bg-vs-team-logo"><img class="match-team-logo-bg last" src={this.props.match.team2.logoDark}></img></div>
                    </div>
                </div>
                <div class="match-bg-vs-date">{this.date.getDate() + ' ' + month[this.date.getMonth()] + ' ' + this.date.getFullYear() + " - " + this.date.getHours() + ":" + (this.date.getMinutes() < 10 ? '0' : '') + this.date.getMinutes() + ' МСК'}</div>
                </div>
                <div class="match-bg-vs-watch-links"><div class="watch-now">Смотреть матчи:</div>
                    <div class="match-bg-now-icons-wrapper">
                        <a href="https://www.twitch.tv/ruscyberleague"><img src="img/twitch_white.svg" class="watch-now-icons"></img></a>
                        <a href="https://www.youtube.com/@ruscyberleaguecs"><img src="img/youtube_white.svg" class="watch-now-icons"></img></a>
                        <a href="https://vk.com/ruscyberleague"><img src="img/vk_white.svg" class="watch-now-icons"></img></a>
                    </div>
                </div>
            </a>
        </div>)
    }

    getDate(date) {
        let object = new Date(date);
        this.dateTime = [object.getHours() + ":" + (object.getMinutes() < 10 ? '0' : '') + object.getMinutes(), object.getDate() + ' ' + month[object.getMonth()]];
    }
}