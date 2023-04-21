import { match } from "assert";
import React from "react";

let month = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'];

export default class MatchCard extends React.Component {
    constructor(props) {
        super(props)
        this.dateTime = new Date();
    }

    render() {
        let self = this;
        return (<div class="match-block-wrapper" id={'match' + this.props.match.id}>
        {self.getDate(this.props.match.startedAt)}
        <a class="match-link" href={'match/' + this.props.match.id}>
        <div class="left-wrapper">
            <div class="date">{this.dateTime[1]}</div>
            <div class="match-team-wrapper">
                <img class="match-team-logo" src={this.props.teamPage ? this.props.match.teams[0].logo : this.props.match.team1.logo}></img>
                <div class="match-team-title">{this.props.teamPage ? this.props.match.teams[0].name : this.props.match.team1.name}<div class="match-team-score">{this.props.pending ? '' : this.props.match.team1Score}</div></div>
            </div>
            <div class="match-vs">
                <hr></hr>VS<hr></hr>
            </div>
            <div class="match-team-wrapper">
                <img class="match-team-logo" src={this.props.teamPage ? this.props.match.teams[1].logo : this.props.match.team2.logo}></img>
                <div class="match-team-title">{this.props.teamPage ? this.props.match.teams[1].name : this.props.match.team2.name}<div class="match-team-score">{this.props.pending ? '' : this.props.match.team2Score}</div></div>
            </div>
        </div>
        <div class="right-wrapper time">
            <div class="match-time">{this.props.pending ? this.dateTime[0] : 'Результат матча'}</div>
        </div>
        </a>
    </div>)
    }

    getDate(date) {
        let object = new Date(date);
        this.dateTime = [object.getHours() + ":" + (object.getMinutes() < 10 ? '0' : '') + object.getMinutes(), object.getDate() + ' ' + month[object.getMonth()]];
    }
}