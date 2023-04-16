import React from "react";

let month = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'];

export default class ArticlePage extends React.Component {
    constructor(props) {
        super(props)
        this.dateTime = new Date();
    }

    htmlDecode(input) {
        var e = document.createElement('div');
        e.innerHTML = input;
        return e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue;
    }

    render() {
        let self = this;
        return (<div class="article-page-wrapper">
            {self.getDate(this.props.article.createdDate)}
            <div class="img-wrapper"><img class="news-img" src={this.props.article.imageUrl} alt={this.props.article.title}></img></div>
            <div class="news-page-text-wrapper">
                <div class="news-item-wrapper">
                    <div class="news-date">{this.dateTime[1]} {this.dateTime[2]}</div>
                    <div class="news-top">
                        <div class="news-title">{this.props.article.title}</div>
                        <div class="news-description">{this.props.article.promo}</div>
                    </div>
                    <div dangerouslySetInnerHTML={{ __html: this.htmlDecode(this.props.article.content) }} class="news-content"></div>
                </div>
                <a href={'/news'} class="news-show-more">Назад в новости</a>
            </div>
        </div>)
    }

    getDate(date) {
        let object = new Date(date);
        this.dateTime = [object.getHours() + ":" + (object.getMinutes() < 10 ? '0' : '') + object.getMinutes(), object.getDate() + ' ' + month[object.getMonth()], object.getFullYear()];
    }
}