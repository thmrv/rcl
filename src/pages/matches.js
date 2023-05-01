import { useEffect, useState, useReducer } from 'react';
import MatchCard from '../components/matchCard';
import fetchHelper from '../fetchHelper';
import Button from '../components/button';

let matches;
let step = 24,
    skip = 0;

let month = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'];

function Matches() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    let currentYear = new Date().getFullYear();

    const [ignored, forceUpdate] = useReducer(x => x + 1, 0);


    const loadMore = (e) => {
        step += 24;
        //skip += 25;
        setData(false)
        e.currentTarget.innerHTML = '<div class="spinner button"></div>';
        e.currentTarget.style.background = 'white';
        e.currentTarget.style.pointerEvents = 'none';
        //setLoading(true)
        fetchHelper(window.apiHost + 'games?take=' + step + '&skip=' + skip).then((data, e) => matches = data).finally((e) => {
            document.querySelector('.load-more').innerHTML = 'ПОКАЗАТЬ ЕЩЕ';
            document.querySelector('.load-more').style.background = '#e5271d';
            document.querySelector('.load-more').style.pointerEvents = 'all';
            setData(true)
            //setLoading(false)
            forceUpdate();
        })
    }

    const reload = () => {
        return window.location.reload();
    }

    useEffect(() => {
        setLoading(true)
        fetchHelper(window.apiHost + 'games?take=' + step + '&skip=' + skip).then((data) => matches = data).finally(() => {
            setData(true)
            setLoading(false)
        })
    }, [setData]);

    if (loading) return (<div class="loader"><div class="spinner"></div></div>)

    if (typeof matches != 'undefined') {

        let weekData = prepareData(matches)
        if (typeof weekData != 'undefined') {
            
            return (<div class="matches-wrapper animate__animated animate__fadeIn">
                <div class="title_lg dark">Результаты матчей</div>
                <div class="matches-section-wrapper">
                    {weekData.map((week, index) => (<div class="week-wrapper">
                        <div class="week-title-wrapper"><div class="week-title">{week[0].week} неделя</div><div class="hr"></div></div>
                        <div class="week-section-wrapper">
                            {week.map((match) => (
                                <MatchCard match={match} pending={false} />
                            ))}
                        </div>
                    </div>
                    ))}
                </div>
                <div class={'load-more'} text={'Показать еще'} data-attr={'load-more'} onClick={loadMore} >Показать еще</div>
            </div>);
        }
    }
};

function getDate(date) {
    let object = new Date(date);
    this.dateTime = [object.getHours() + ":" + (object.getMinutes() < 10 ? '0' : '') + object.getMinutes(), object.getDate() + ' ' + month[object.getMonth()]];
}

Date.prototype.getWeek = function () {
    var onejan = new Date(this.getFullYear(), 0, 1);
    return Math.ceil((((this - onejan) / 86400000) + onejan.getDay() + 1) / 7);
}

function prepareData(matches) {
    let resultingData = [];
    matches.games.forEach((match, index) => {
        let week = match.week;
        if (typeof resultingData[week] == 'undefined') {
            resultingData[week] = [];
        }
        resultingData[week].push(match); 
    })
    let prevKey;
    resultingData = resultingData.slice().reverse();
    console.log(resultingData);
    return resultingData;
}

export default Matches;