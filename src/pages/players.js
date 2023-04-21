import { useEffect, useState, useReducer } from 'react';
import PlayersTable from '../components/playersTable';
import fetchHelper from '../fetchHelper';

let players;
let step = 10,
    skip = 0;

function Players() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    let currentYear = new Date().getFullYear();

    const [ignored, forceUpdate] = useReducer(x => x + 1, 0);

    const loadMore = () => {
        step += 10;
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
            fetchHelper(window.apiHost + 'players?take=10&skip=0').then((data) => players = data).finally(() => {
                setData(true)
                setLoading(false)
            })
    }, [setData]);

    if (typeof players != 'undefined') {
        return (<><PlayersTable players={players}/>
         <div class={'load-more'} text={'Показать еще'} data-attr={'load-more'} onClick={loadMore} >Показать еще</div></>);
    }
};

export default Players;