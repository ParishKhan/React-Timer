import React, {Component} from 'react';
import Clock from 'Clock';

class CountDown extends Component {
    render() {
        return (
            <div>
                Count Down Page is here of
                <Clock totalSeconds={129} />
            </div>
        );
    }
}

export default CountDown;