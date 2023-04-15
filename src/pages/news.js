import { useEffect, useState } from 'react';

let news;

function News() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    let currentYear = new Date().getFullYear();

    useEffect(() => {
        fetch('https://api.itsport.pro/news?take=10&skip=0')
            .then((response) => {
                if (!response.ok) {
                    throw new Error(
                        `This is an HTTP error: The status is ${response.status}`
                    );
                }
                return response.json();
            })
            .then((actualData) => { news = actualData })
            .catch((err) => {
                console.log(err.message);
            }).finally(() => {
                setData(true)
            })
    }, [setData]);

    if (typeof news != 'undefined') {

        return (<div class="news-page-wrapper animate__animated animate__fadeIn">
            <div class="title_lg dark">Новости</div>
            <div class="news_container">
                {news.news.map((article) => (<div class="article-block-wrapper">
                    <img class="news-img" src={article.imageUrl} alt={article.title}></img>
                    <div class="news-text-wrapper">
                        <div class="news-date">{article.createdDate}</div>
                        <div class="news-title">{article.title}</div>
                        <div class="news-description">{article.promo}</div>
                        <a href={'/article/' + article.id} class="news-show-more">Подробнее</a>
                    </div>
                </div>)
                )}
            </div>
        </div>);
    }
};

export default News;