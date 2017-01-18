import React, {Component} from 'react';
import Clock from 'Clock';
import Controls from 'Controls';

class Timer extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            count: 0,
            countdownStatus: 'paused'
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
                case 'cleared':
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
            var newCount = this.state.count + 1;

            this.setState({
                count: newCount
            })

        }, 1000);
    }
    handleStatusChange(status) {
        this.setState({
            countdownStatus: status == 'stopped' ? 'cleared' : status
        })
    }
    render() {
        var {countdownStatus} = this.state;

        return (
            <div>
                <h1 className="page-title">Timer App</h1>
                <Clock totalSeconds={this.state.count} />
                <Controls countdownStatus={this.state.countdownStatus} onStatusChange={this.handleStatusChange.bind(this)}/>
            </div>
        );
    }
}

export default Timer;