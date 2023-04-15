import React from "react";

export default class Masthead extends React.Component {
    render() {
        let date = new Date(this.props.featured.startedAt);
        return (<div class="masthead-wrapper header-wrapper animate__animated animate__fadeIn" style={{ backgroundImage: "url(" + "/img/masthead.png" + ")" }}>
            <div class="masthead-top">РОССИЙСКАЯ КИБЕРСПОРТИВНАЯ ЛИГА<img class="logo-vs-overexposed" src="/img/logo_white_opaque.png"></img></div>
            <div class="masthead-vs">
                <div class="vs-team-wrapper">
                    <div class="vs-team-logo"><img class="featured-team-logo first" src={this.props.featured.team1.logo}></img></div>
                    <div class="vs-team-name">{this.props.featured.team1.name}</div>
                </div>
                <div class="vs-span">VS</div>
                <div class="vs-team-wrapper">
                    <div class="vs-team-name">{this.props.featured.team2.name}</div>
                    <div class="vs-team-logo"><img class="featured-team-logo last" src={this.props.featured.team2.logo}></img></div>
                </div>
            </div>
            <div class="vs-date">{date.getDate() + "\\" + (date.getMonth() + 1) + "\\" + date.getFullYear() + "   " +  date.getHours() + ":" +  (date.getMinutes()<10?'0':'') + date.getMinutes() }</div>
            <div class="vs-timer-wrapper">Окончен</div>
            <div class="vs-watch-links"><div class="watch-now">смотреть матчи:</div>
                <div class="watch-now-icons-wrapper">
                    <a href="#"><img src="img/twitch_white.svg" class="watch-now-icons"></img></a>
                    <a href="#"><img src="img/youtube_white.svg" class="watch-now-icons"></img></a>
                    <a href="#"><img src="img/vk_white.svg" class="watch-now-icons"></img></a>
                </div>
            </div>
            <a href="/matches" class="vs-games-button"><img class="date-icon" src="img/date.svg"></img>БЛИЖАЙШИЕ МАТЧИ</a>
        </div>)
    }
}

export function timer() {

}