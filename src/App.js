import {
  BrowserRouter as Router, Route, Switch,
} from 'react-router-dom';
import './App.css';

import Error from './components/ErrorComponent';
import Footer from './components/FooterComponent';
import MemeRouter from './components/MemeRouterComponent';
import { MEME_TYPE } from './ProjectEnums';
import Navigation from './components/NavigationComponent';
import UploadMeme from './components/UploadMemeComponent';

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch>

          <Route exact path={['/', '/home']}>
            <MemeRouter router={MEME_TYPE.ALL} />
          </Route>

          <Route exact path="/regular">
            <MemeRouter route={MEME_TYPE.REGULAR} />
          </Route>

          <Route exact path="/hot">
            <MemeRouter route={MEME_TYPE.HOT} />
          </Route>

          <Route exact path="/upload-meme">
            <UploadMeme />
          </Route>

          <Route exact path="*">
            <Error />
          </Route>

        </Switch>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
