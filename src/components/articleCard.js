

import React from "react";

let month = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'];

export default class ArticleCard extends React.Component {
    constructor(props) {
        super(props)
        this.dateTime = new Date();
    }

    render() {
        let self = this;
        return (<div class="article-block-wrapper">
            {self.getDate(this.props.article.createdDate)}
            <div class="img-wrapper"><img class="news-img" src={this.props.article.imageUrl} alt={this.props.article.title}></img></div>
            <div class="news-text-wrapper">
                <div class="news-date">{this.dateTime[1]}</div>
                <div class="news-title">{this.props.article.title}</div>
                <div class="news-description">{this.props.article.promo}</div>
                <a href={'/article/' + this.props.article.id} class="news-show-more">Подробнее</a>
            </div>
        </div>)
    }

    getDate(date) {
        let object = new Date(date);
        this.dateTime = [object.getHours() + ":" + (object.getMinutes() < 10 ? '0' : '') + object.getMinutes(), object.getDate() + ' ' + month[object.getMonth()]];
    }
}