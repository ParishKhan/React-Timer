import React, {Component} from 'react';
import Clock from 'Clock';
import CountdownForm from 'CountdownForm';

class CountDown extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            count: 0
        }
    }
    handleSetCountdown(second) {
        this.setState({ count: second })
    }
    render() {
        return (
            <div>
                Count Down Page is here of
                <Clock totalSeconds={this.state.count} />
                <CountdownForm onSetCountdown={this.handleSetCountdown.bind(this)} />
            </div>
        );
    }
}

export default CountDown;