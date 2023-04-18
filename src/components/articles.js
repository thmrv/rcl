import React from "react";
import ArticleCard from "./articleCard";

let month = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'];

export default class Articles extends React.Component {
    constructor(props) {
        super(props)
        this.dateTime = new Date();
    }

    render() {
        return (<div class="news_container home">
        {this.props.news.news.map((article) => (
            <ArticleCard article={article} />
        )
        )}
        <a href='/news' class="news-show-more home">Смотреть все статьи</a>
        </div>)
    }

    getDate(date) {
        let object = new Date(date);
        this.dateTime = [object.getHours() + ":" + (object.getMinutes() < 10 ? '0' : '') + object.getMinutes(), object.getDate() + ' ' + month[object.getMonth()]];
    }
}