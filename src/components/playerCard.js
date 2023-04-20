

import React from "react";

let month = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'];

export default class PlayerCard extends React.Component {
    constructor(props) {
        super(props)
        this.dateTime = new Date();
    }

    render() {
        let self = this;
        return (<a href={'/player/' + this.props.player.id}><div class="player-block-outer-wrapper">
            <div class="image-wrapper player-img-wrapper"><img class="player-img" src={this.props.player.imageUrl}></img></div>
            <div class="player-info">
                <div class="image-wrapper"><img class="player-country-logo" src={this.props.player.countryLogo}></img></div>
                <div class="title_sm">{this.props.player.nickName}</div>
            </div>
        </div></a>)
    }

    getDate(date) {
        let object = new Date(date);
        this.dateTime = [object.getHours() + ":" + (object.getMinutes() < 10 ? '0' : '') + object.getMinutes(), object.getDate() + ' ' + month[object.getMonth()], object.getFullYear()];
    }
}