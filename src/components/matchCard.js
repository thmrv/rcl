import React from "react";

let month = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'];

export default class MatchCard extends React.Component {
    constructor(props) {
        super(props)
        this.dateTime = new Date();
    }

    render() {
        let self = this;
        return (<div class="match-block-wrapper">
        {self.getDate(this.props.match.startedAt)}
        <div class="left-wrapper">
            <div class="date">{this.dateTime[1]}</div>
            <div class="match-team-wrapper">
                <img class="match-team-logo" src={this.props.match.team1.logo}></img>
                <div class="match-team-title">{this.props.match.team1.name}<div class="match-team-score">{this.props.pending ? '' : this.props.match.team1Score}</div></div>
            </div>
            <div class="match-vs">
                <hr></hr>VS<hr></hr>
            </div>
            <div class="match-team-wrapper">
                <img class="match-team-logo" src={this.props.match.team2.logo}></img>
                <div class="match-team-title">{this.props.match.team2.name}<div class="match-team-score">{this.props.pending ? '' : this.props.match.team2Score}</div></div>
            </div>
        </div>
        <div class="right-wrapper time">
            <div class="match-time">{this.props.pending ? this.dateTime[0] : 'Результат матча'}</div>
            <div class="timezone">{this.props.pending ? window.timeZone.name : ''}</div>
        </div>
    </div>)
    }

    getDate(date) {
        let object = new Date(date);
        this.dateTime = [object.getHours() + ":" + (object.getMinutes() < 10 ? '0' : '') + object.getMinutes(), object.getDate() + ' ' + month[object.getMonth()]];
    }
}