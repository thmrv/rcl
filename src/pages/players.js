import { useEffect, useState, useReducer } from 'react';
import PlayersTable from '../components/playersTable';
import fetchHelper from '../fetchHelper';

let players;
let step = 50,
    skip = 0;

function Players() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    let currentYear = new Date().getFullYear();

    const [ignored, forceUpdate] = useReducer(x => x + 1, 0);

    const loadMore = () => {
        step += 25;
        skip += 25;
        setData(false)
        setLoading(true)
        fetchHelper(window.apiHost + 'players?take=' + step + '&skip=' + skip).then((data) => players = data).finally(() => {
            setData(true)
            setLoading(false)
            forceUpdate();
        })
    }

    const reload = () => {
        return window.location.reload();
    }

    useEffect(() => {
            setLoading(true)
            fetchHelper(window.apiHost + 'players?take=50&skip=0').then((data) => players = data).finally(() => {
                setData(true)
                setLoading(false)
            })
    }, [setData]);

    if (typeof players != 'undefined') {
        if (players.length === 0){
            return (<div class="animate__animated animate__fade no-results" onClick={reload}>Результатов нет <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-clockwise" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"/>
            <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z"/>
          </svg></div>)
        }
        return (<><PlayersTable players={players}/>
         <div class={'load-more'} text={'Показать еще'} data-attr={'load-more'} onClick={loadMore} >Показать еще</div></>);
    }
};

export default Players;