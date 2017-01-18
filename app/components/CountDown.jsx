import React, {Component} from 'react';
import Clock from 'Clock';
import CountdownForm from 'CountdownForm';
import Controls from 'Controls';

class CountDown extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            count: 0,
            countdownStatus: 'stopped'
        }
    }
    componentWillUnmount() {
        clearInterval(this.timer);
        this.timer = undefined;
    }
    componentDidUpdate(preProps, preState) {
        if(this.state.countdownStatus !== preState.countdownStatus) {
            switch(this.state.countdownStatus) {
                case 'started':
                    this.startTimer();
                    break;
                case 'stopped':
                    this.setState({ count: 0 });
                case 'paused':
                    clearInterval(this.timer);
                    this.timer = undefined;
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

            if(newCount == 0) this.setState({ countdownStatus: 'stopped' });

        }, 1000);
    }
    handleSetCountdown(second) {
        this.setState({ 
            count: second,
            countdownStatus: 'started'
        })
    }
    handleStatusChange(status) {
        this.setState({
            countdownStatus: status
        })
    }
    render() {
        var {countdownStatus} = this.state
        var renderControls = () => {
            if(countdownStatus!== "stopped") {
                return <Controls countdownStatus={this.state.countdownStatus} onStatusChange={this.handleStatusChange.bind(this)}/>
            } else {
                return <CountdownForm onSetCountdown={this.handleSetCountdown.bind(this)} />
            }
        }
        return (
            <div>
                <Clock totalSeconds={this.state.count} />
                {renderControls()}
            </div>
        );
    }
}

export default CountDown;