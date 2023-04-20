import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { useParams } from 'react-router-dom';
import Layout from "./pages/layout";
import Article from "./pages/article";
import Match from "./pages/match";
import Ladder from "./pages/ladder";
import Teams from "./pages/teams";
import News from "./pages/news";
import Players from "./pages/players";
import Player from "./pages/player";
import FourOhFour from "./pages/404";
import Team from './pages/team';
import Home from "./pages/home";
import Matches from './pages/matches';

import 'animate.css';
import './App.css';

import { useEffect, useState } from 'react';
import Docs from './pages/docs';

window.timeZone = {'name': 'MSK', 'alias': 'UTC +3'};
window.locale = {"ru":{'default': 1, 'name': 'russian', 'alias': 'русский'}, "en":{'default': 0, 'name': 'english', 'alias': 'английский'}};
window.apiHost = 'https://api.itsport.pro/';

function App() {

  let { playerId, matchId, articleId, teamId} = useParams();

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  let currentYear = new Date().getFullYear();

  if (window.document.readyState === 'loading') return (<div class="loader page"><div class="spinner"></div></div>)

    return (
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="teams" element={<Teams />} />
              <Route path="matches" element={<Matches />} />
              <Route path="docs" element={<Docs />} />
              <Route path="players" element={<Players />} />
              <Route path="player">
                <Route path=":playerId" element={<Player />} />
              </Route>
              <Route path="team">
                <Route path=":teamId" element={<Team />} />
              </Route>
              <Route path="news" element={<News />} />
              <Route path="ladder" element={<Ladder />} />
              <Route path="match">
                <Route path=":matchId" element={<Match />} />
              </Route>
              <Route path="article">
                <Route path=":articleId" element={<Article />} />
              </Route>
              <Route path="*" element={<FourOhFour />} />
            </Route>
          </Routes>
        </Router>
      </div>
    );
}

export default App;
