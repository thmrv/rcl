import { useEffect, useState } from 'react';
import fetchHelper from '../fetchHelper';
import ArticlePage from '../components/articlePage';
import { useParams } from 'react-router-dom';

let article;

function Article() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    let currentYear = new Date().getFullYear();

    const params = useParams();
    const articleId = params.articleId;

    useEffect(() => {
        setLoading(true)
        fetchHelper('https://api.itsport.pro/news/' + articleId).then((data) => article = data).finally(() => {
            setData(true)
            setLoading(false)
        })
    }, [setData]);

    if (loading) return (<div class="loader"><div class="spinner"></div></div>)

    console.log(article)

    if (typeof article != 'undefined') {

        return (<><ArticlePage article={article}/></>);
    }
};

export default Article;