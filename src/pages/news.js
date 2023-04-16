import { useEffect, useState } from 'react';
import ArticleCard from '../components/articleCard';

let news;

function News() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    let currentYear = new Date().getFullYear();

    useEffect(() => {
        setLoading(true)
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
                setLoading(false)
            })
    }, [setData]);

    if (loading) return (<div class="loader"><div class="spinner"></div></div>)

    if (typeof news != 'undefined') {

        return (<div class="news-page-wrapper animate__animated animate__fadeIn">
            <div class="title_lg dark">Новости</div>
            <div class="news_container">
                <div class="news_container home">
                    {news.news.map((article) => (
                        <ArticleCard article={article} />
                    )
                    )}
                    <a href='/news' class="news-show-more home">Смотреть все статьи</a>
                </div>
            </div>
        </div>);
    }
};

export default News;