import {BrowserRouter as Router, NavLink, Redirect, Route, Switch} from 'react-router-dom';
import { useState } from "react";
import './App.css';

import { memeDb } from './memeDb';
import Error from './components/error-component';
import Hot from './components/hot-component';
import Regular from './components/regular-component';


function App() {
    const [memes, setMemes] = useState(memeDb);

    const voteOnMeme = (memeId, vote) => {
        const newMemes = [...memes];
        const memeIndex = newMemes.findIndex(obj => obj.id === memeId)
        if (vote === 'up') {
            newMemes[memeIndex].upvotes += 1;
        } else if ( vote === 'down' ) {
            newMemes[memeIndex].downvotes += 1;
        }
        setMemes(memes => newMemes);
    }

    return (
    <div className="App">
        <Router>
                <ul className="nav">

                    <li className="nav-item">
                        <NavLink to='/hot'>Hot</NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink to='/regular'>Regular</NavLink>
                    </li>

                </ul>

                <Switch>

                    <Route exact path={['/', '/regular']}>
                        <Regular memes={memes} voteOnMeme={voteOnMeme}/>
                    </Route>

                    <Route exact path='/hot'>
                        <Hot memes={memes} voteOnMeme={voteOnMeme}/>
                    </Route>

                    <Route exact path='*'>
                        <Error/>
                    </Route>

                </Switch>

            </Router>
    </div>
  );
}

export default App;
