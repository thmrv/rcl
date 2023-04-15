import React from "react";

let month = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'];

export default class PendingMatches extends React.Component {
    constructor(props) {
        super(props)
        this.dateTime = new Date();
    }

    render() {
        let self = this;
        return (
            <div class="pendingMatches home">
                <div class="title_sm">Ближайшие матчи</div>
                <wrapper>
                    {
                        this.props.pending.map((match) => (<div class="match-block-wrapper">
                            {self.getDate(match.startedAt)}
                            <div class="left-wrapper">
                                <div class="date">{this.dateTime[1]}</div>
                                <div class="match-team-wrapper">
                                    <img class="match-team-logo" src={match.team1.logo}></img>
                                    <div class="match-team-title">{match.team1.name}</div>
                                </div>
                                <div class="match-vs">
                                    <hr></hr>VS<hr></hr>
                                </div>
                                <div class="match-team-wrapper">
                                    <img class="match-team-logo" src={match.team2.logo}></img>
                                    <div class="match-team-title">{match.team2.name}</div>
                                </div>
                            </div>
                            <div class="right-wrapper time">
                                <div class="match-time">{this.dateTime[0]}</div>
                                <div class="timezone">{window.timeZone.name}</div>
                            </div>
                        </div>)
                        )
                    }
                </wrapper>
            </div>)
    }

    getDate(date) {
        let object = new Date(date);
        this.dateTime = [object.getHours() + ":" + (object.getMinutes() < 10 ? '0' : '') + object.getMinutes(), object.getDate() + ' ' + month[object.getMonth()]];
    }
}
