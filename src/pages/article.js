import { useEffect, useState } from 'react';
import fetchHelper from '../fetchHelper';
import ArticlePage from '../components/articlePage';

let article;

function Article(articleId) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    let currentYear = new Date().getFullYear();

    useEffect(() => {
        setLoading(true)
        fetchHelper('https://api.itsport.pro/news/' + articleId).then((data) => article = data).finally(() => {
            setData(true)
            setLoading(false)
        })
    }, [setData]);

    if (loading) return (<div class="loader"><div class="spinner"></div></div>)

    if (typeof article != 'undefined') {

        return (<><ArticlePage article={article}/></>);
    }
};

export default Article;