import React from "react";
import ArticleCard from "./articleCard";

export default class Articles extends React.Component {
    render() {
        return (<div class="news_container home">
        {this.props.news.news.map((article) => (
            <ArticleCard article={article} />
        )
        )}
        <a href='/news' class="news-show-more home">Смотреть все статьи</a>
        </div>)
    }
}