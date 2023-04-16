import { useEffect, useState } from 'react';
import fetchHelper from '../fetchHelper';
import Article from '../components/articlePage';
import Articles from '../components/articles';

let article;

function Article(articleId) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    let currentYear = new Date().getFullYear();

    useEffect(() => {
        setLoading(true)
        fetchHelper('https://api.itsport.pro/news/1').then((data) => article = data).finally(() => {
            setData(true)
            setLoading(false)
        })
    }, [setData]);

    if (loading) return (<div class="loader"><div class="spinner"></div></div>)

    if (typeof article != 'undefined') {

        return (<Article />);
    }
};

export default Article;