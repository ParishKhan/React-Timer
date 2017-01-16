import React, {Component} from 'react';
import {Link, IndexLink} from 'react-router';

class Nav extends Component {
    render() {
        return (
            <div>
                <div className="top-bar">
                    <div className="top-bar-left">
                        <ul className="menu">
                        <li className="menu-text">React Timer App</li>
                        <li><IndexLink to="/Timer" activeClassName="active-link">Timer</IndexLink></li>
                        <li><Link to="/CountDown">Count Down</Link></li>
                        </ul>
                    </div>
                    <div className="top-bar-right">
                        <ul className="menu">
                            <li className="menu-text">Created by <a href="https://github.com/parishkhan" target="_blank">Parish Khan</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Nav;
