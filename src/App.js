import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Switch, Route, Redirect, Link} from 'react-router-dom';


function App() {
  return (
    <div className="App">
        <Router>
            <ul class="nav">

                <li class="nav-item">
                    <Link to='/hot'>Hot</Link>
                </li>

                <li class="nav-item">
                    <Link to='/regular'>Regular</Link>
                </li>

            </ul>

            <Switch>

                <Route exact path={['/', '/regular']}>
                    <Regular/>
                </Route>

                <Route exact path='/hot'>
                    <Hot/>
                </Route>

                <Route exact path='*'>
                    <Error/>
                </Route>

            </Switch>

        </Router>
    </div>
  );
}

let memeDb = [
    {
        title: "meme 1",
        upvotes: 1,
        downvotes: 0,
        img: "meme1.png",
    },
    {
        title: "meme 2",
        upvotes: 6,
        downvotes: 0,
        img: "meme2.jpeg",
    },
    {
        title: "meme 3",
        upvotes: 1,
        downvotes: 6,
        img: "meme3.jpg",
    },
    {
        title: "meme 4",
        upvotes: 10,
        downvotes: 3,
        img: "meme4.jpg",
    },
]
function Regular() {


    return  <div>
            <h1>REGULAR</h1>
            {memeDb
                    .filter(m => Number(m.upvotes - m.downvotes)<5)
                    .map((m, i) => (
                <MemeCard key={i} meme={m}/>
            ))
            }
            </div>
}

function Hot() {
    return  <div>
            <h1>HOT</h1>
            {memeDb
                    .filter(m => Number(m.upvotes - m.downvotes)>=5)
                    .map((m, i) => (
                <MemeCard key={i} meme={m}/>
            ))
            }
            </div>
}

function Error() {
    return <h1>ERROR!</h1>
}

function MemeCard(props) {

    return <section>   
                 <h4>{props.meme.title}</h4>
                 <img src={props.meme.img} alt="thug virus"/>
                 <p>Votes {Number(props.meme.upvotes - props.meme.downvotes)}</p>
             </section>   
}


export default App;
