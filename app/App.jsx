import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, IndexRoute, browserHistory, hashHistory } from 'react-router';
import Main from 'Main';
import Timer from 'Timer';
import CountDown from 'CountDown';
import CSS from 'Css';

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={Main}>
            <IndexRoute component={Timer} />
            <Route path="/Timer" component={Timer} />
            <Route path="/CountDown" component={CountDown} />
        </Route>
    </Router>,
    document.getElementById('app')
)