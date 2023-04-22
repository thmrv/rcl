import React from "react";
import Link from "./link";
import HTMLReactParser from "html-react-parser";

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
        let contentParsed = HTMLReactParser(this.props.article.content.replace(/([\d\w-.]+?\.(a[cdefgilmnoqrstuwz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvxyz]|d[ejkmnoz]|e[ceghrst]|f[ijkmnor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eouw]|s[abcdeghijklmnortuvyz]|t[cdfghjkmnoprtvwz]|u[augkmsyz]|v[aceginu]|w[fs]|y[etu]|z[amw]|aero|arpa|biz|com|coop|edu|info|int|gov|mil|museum|name|net|org|pro)(\b|\W(?<!&|=)(?!\.\s|\.{3}).*?))(\s|$)/, "<a href='$&'>$&</a>"))
        let self = this;
        return (<div class="article-page-wrapper">
            {self.getDate(this.props.article.createdDate)}
            <div class="img-wrapper"><img class="news-img" src={this.props.article.imageUrl} alt={this.props.article.title}></img></div>
            <div class="news-page-text-wrapper">
                <div class="news-item-wrapper">
                    <div class="news-date">{this.dateTime[1]} {this.dateTime[2]}</div>
                    <div class="news-top">
                        <div class="news-title">{this.props.article.title}</div>
                    </div>
                    <div class="news-content">{ contentParsed }
                    </div>
                </div>
                <Link class={'news-show-more'} link={'/news'} text={'Назад в новости'} data-attr={'show-more'} /> 
            </div>
        </div>)
    }

    getDate(date) {
        let object = new Date(date);
        this.dateTime = [object.getHours() + ":" + (object.getMinutes() < 10 ? '0' : '') + object.getMinutes(), object.getDate() + ' ' + month[object.getMonth()], object.getFullYear()];
    }
}