import { match } from "assert";
import React from "react";

let month = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'];

export default class MatchCard extends React.Component {
    constructor(props) {
        super(props)
        this.dateTime = new Date();
        this.teams = [];
        this.getDate(this.props.match.startedAt)
        switch (this.props.match.status) {
            case 'pending':
                this.status = this.dateTime[0]
                break;
            case 'started':
                this.status = 'Начат'
                break;
            case 'finished':
                this.status = 'Результат матча'
                break;
            default:
                this.status = this.dateTime[0]
                break;
        }
    }

    render() {
        let self = this;
        this.sortTeams();
        return (<div class="match-block-wrapper" id={'match' + this.props.match.id}>
            <a class="match-link" href={'/match/' + this.props.match.id}>
                <div class="left-wrapper">
                    <div class="date">{this.dateTime[1]}</div>
                    <div class="match-team-wrapper">
                        <img class="match-team-logo" src={this.teams[0].logo}></img>
                        <div class="match-team-title">{this.teams[0].name}<div class="match-team-score">{this.props.pending ? '' : this.props.match.team1Score}</div></div>
                    </div>
                    <div class="match-vs">
                        <hr></hr>VS<hr></hr>
                    </div>
                    <div class="match-team-wrapper">
                        <img class="match-team-logo" src={this.teams[1].logo}></img>
                        <div class="match-team-title">{this.teams[1].name}<div class="match-team-score">{this.props.pending ? '' : this.props.match.team2Score}</div></div>
                    </div>
                </div>
                <div class="right-wrapper time">
                    <div class="match-time">{this.status}</div>
                </div>
            </a>
        </div>)
    }

    sortTeams() {
        if (this.props.teamPage) {
            this.teams.push(this.props.match.teams[0].id === this.props.match.team1Id ? this.props.match.teams[0] : this.props.match.teams[1]);
            this.teams.push(this.props.match.teams[1].id === this.props.match.team2Id ? this.props.match.teams[1] : this.props.match.teams[0]);
        } else {
            this.teams.push(this.props.match.team1.id === this.props.match.team1Id ? this.props.match.team1 : this.props.match.team1);
            this.teams.push(this.props.match.team2.id === this.props.match.team2Id ? this.props.match.team2 : this.props.match.team2);
        }
    }

    getDate(date) {
        let object = new Date(date);
        this.dateTime = [object.getHours() + ":" + (object.getMinutes() < 10 ? '0' : '') + object.getMinutes(), object.getDate() + ' ' + month[object.getMonth()]];
    }
}