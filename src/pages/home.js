import Masthead from '../components/masthead.js';
import { useEffect, useState } from 'react';

let featured, news, pending, ladder;

function Home() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    let currentYear = new Date().getFullYear();

    useEffect(() => {
        Promise.all([
            fetch('https://api.itsport.pro/pending')
                .then((response) => {
                    if (!response.ok) {
                        throw new Error(
                            `This is an HTTP error: The status is ${response.status}`
                        );
                    }
                    return response.json();
                })
                .then((actualData) => { featured = actualData.at(-1) })
                .catch((err) => {
                    console.log(err.message);
                }),
            fetch('https://api.itsport.pro/news?take=6&skip=0')
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
                }),
            fetch('https://api.itsport.pro/pending')
                .then((response) => {
                    if (!response.ok) {
                        throw new Error(
                            `This is an HTTP error: The status is ${response.status}`
                        );
                    }
                    return response.json();
                })
                .then((actualData) => { pending = actualData })
                .catch((err) => {
                    console.log(err.message);
                }),
            fetch('https://api.itsport.pro/shortresults?skip=0&take=5')
                .then((response) => {
                    if (!response.ok) {
                        throw new Error(
                            `This is an HTTP error: The status is ${response.status}`
                        );
                    }
                    return response.json();
                })
                .then((actualData) => { ladder = actualData })
                .catch((err) => {
                    console.log(err.message);
                })
        ]).finally(() => {
            setData(true)
        })
    }, [setData]);

    if (typeof featured != 'undefined' && typeof news != 'undefined' && typeof pending != 'undefined' && typeof ladder != 'undefined') {
        console.log(featured);
        return (<>
            <Masthead featured={featured} />
            <div class="pendingMatches home">
                {pending.map((match) => (<div class="match-block-wrapper">
                    <div class="left-wrapper">
                        <div class="date">12 марта</div>
                        <div class="match-team-wrapper">
                            <img class="match-team-logo" src={match.team1.logo}></img>
                            <div class="match-team-title">{match.team1.name}</div>
                        </div>
                        <div class="match-vs">
                            <hr></hr>VS<hr></hr>
                        </div>
                        <div class="match-team-wrapper">
                            <img class="match-team-logo" src={match.team2.logo}></img>
                            <div class="match-team-title">{match.team2.name}</div>
                        </div>
                    </div>
                    <div class="right-wrapper time">
                        <div class="match-time">14:32</div>
                        <div class="timezone">МСК</div>
                    </div>
                </div>)
                )}
            </div>
            <div class="hero-wrapper">
                <div class="hero-left">
                    <div class="title_lg dark">ТУРНИРНАЯ ТАБЛИЦА</div>
                    <table class="ladder_container">
                        <thead><tr><td>МЕСТО</td><td>КОМАНДА</td><td>ОЧКИ</td><td>МАТЧЕЙ</td><td>Побед</td><td>НИЧЬИ</td><td>ПОРАЖЕНИЯ</td></tr></thead>
                        {ladder.teams.map((team) => (<tr class="ladder-block-wrapper">
                            <td>{team.place}</td><td><img class="img-sm" src={team.team.logo}></img></td><td>{team.points}</td><td>{team.wins + team.loses + team.draws}</td><td>{team.wins}</td><td>{team.draws}</td><td>{team.loses}</td>
                        </tr>)
                        )}
                    </table>
                    <a href='/ladder' class="news-show-more home">Смотреть все результаты</a>
                </div>
                <div class="hero-right">
                    <img class="banner home" src="img/banner.png"></img>
                </div>
            </div>
            <div class="news_container home">
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
                <a href='/news' class="news-show-more home">Смотреть все статьи</a>
            </div>
        </>);
    }
};

export default Home;