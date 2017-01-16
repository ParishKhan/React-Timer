import React, {Component} from 'react';
import Nav from 'Nav';

var Main = (props) => {
    return (
        <div>
            <div className="row">
                <Nav />
                <div className="columns medium-6 large-4 small-centered">
                    Main Page
                    {props.children}
                </div>
            </div>
        </div>
    );
}

export default Main;