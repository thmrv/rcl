import React from "react";
import MatchCardBG from "./matchCardBG";

let month = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'];

export default class PendingMatchesFooter extends React.Component {
    constructor(props) {
        super(props)
        this.dateTime = new Date();
    }

    render() {
        let self = this;
        return (
            <div class="footerMatches-vs">
                <div class="title-skewed footer"><img src="/img/cut_rect.svg"></img>БУДУЩИЕ МАТЧИ</div>
                <wrapper>
                    {
                        this.props.pending.map((match, index) => (
                            index < 3 ? <MatchCardBG match={match} pending={true}/> : ''
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
