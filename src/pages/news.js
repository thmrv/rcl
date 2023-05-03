import { useEffect, useState, useReducer } from 'react';
import ArticleCard from '../components/articleCard';
import Button from '../components/button';
import fetchHelper from '../fetchHelper';

let news;
let step = 10,
    skip = 0;

function News() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    let currentYear = new Date().getFullYear();

    const [ignored, forceUpdate] = useReducer(x => x + 1, 0);

    const loadMore = (e) => {
        step += 25;
        //skip += 25;
        setData(false)
        //setLoading(true)
        e.currentTarget.innerHTML = '<div class="spinner button"></div>';
        e.currentTarget.style.background = 'white';
        e.currentTarget.style.pointerEvents = 'none';
        fetchHelper(window.apiHost + 'news?take=' + step + '&skip=' + skip).then((data) => news = data).finally(() => {
            setData(true)
            document.querySelector('.load-more').innerHTML = 'ПОКАЗАТЬ ЕЩЕ';
            document.querySelector('.load-more').style.background = '#e5271d';
            document.querySelector('.load-more').style.pointerEvents = 'all';
            //setLoading(false)
            forceUpdate();
        })
    }

    useEffect(() => {
            setLoading(true)
            fetchHelper(window.apiHost + 'news?take=10&skip=0').then((data) => news = data).finally(() => {
                setData(true)
                setLoading(false)
            })
    }, [setData]);

    if (loading) return (<div class="loader"><div class="spinner"></div></div>)

    if (typeof news != 'undefined') {
        if (news.news.length === 0){
            return (<div class="animate__animated animate__fade no-results" onClick={window.location.reload()}>Результатов нет <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-clockwise" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"/>
            <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z"/>
          </svg></div>)
        }
        return (<div class="news-page-wrapper animate__animated animate__fadeIn">
            <div class="title_lg dark">Новости</div>
            <div class="news_container">
                <div class="news_container">
                    {news.news.map((article) => (
                        <ArticleCard article={article} />
                    )
                    )}
                </div>
                <div class={'load-more'} text={'Показать еще'} data-attr={'load-more'} onClick={loadMore} >Показать еще</div>
            </div>
        </div>);
    }
};

export default News;