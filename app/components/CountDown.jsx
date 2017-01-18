import React, {Component} from 'react';
import Clock from 'Clock';
import CountdownForm from 'CountdownForm';

class CountDown extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            count: 0,
            countdownStatus: 'stopped'
        }
    }
    componentDidUpdate(preProps, preState) {
        if(this.state.countdownStatus !== preState.countdownStatus) {
            debugger;
            switch(this.state.countdownStatus) {
                case 'started':
                    this.startTimer();
                    break;
            }
        }
    }
    startTimer() {
        this.timer = setInterval(() => {
            var newCount = this.state.count - 1;

            this.setState({
                count: newCount >= 0 ? newCount : 0
            })
        }, 1000);
    }
    handleSetCountdown(second) {
        this.setState({ 
            count: second,
            countdownStatus: 'started'
        })
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