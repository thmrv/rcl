import React from "react";
import MatchCard from "./matchCard";

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
                        this.props.pending.map((match) => (
                            <MatchCard match={match} pending={true}/>
                        )
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
