import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Switch, Route } from 'react-router';

import Home from './views/home';
import NotFound from './views/not_found';
import Docs from './views/docs';
import Scrimmaging from './views/scrimmaging';
import Tournaments from './views/tournaments';
import Updates from './views/updates';
import Search from './views/search';
import Team from './views/team';
import IDE from './views/ide';

import Footer from './footer';
import NavBar from './navbar';
import SideBar from './sidebar';


class App extends Component {
    render() {
        return (
            <div className="wrapper">
                <SideBar />
                <div className="main-panel">
                    <NavBar />
                    <Switch >
                        <Route exact path="/" component={ Home }/>
                        <Route path="/home" component={ Home }/>
                        <Route path="/docs" component={ Docs }/>
                        <Route path="/scrimmaging" component={ Scrimmaging }/>
                        <Route path="/updates" component={ Updates }/>
                        <Route path="/search" component={ Search }/>
                        <Route path="/team" component={ Team }/>
                        <Route path="/ide" component={ IDE }/>
                        <Route path="/tournaments" component={ Tournaments }/>
                        <Route path="*" component={ NotFound }/>
                    </Switch>
                    <Footer />
                </div>
            </div>
        );
    }
}


ReactDOM.render((
    <BrowserRouter>
        <App />
    </BrowserRouter>
    ), document.getElementById('root')
);