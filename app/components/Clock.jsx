import React, {Component} from 'react';

class Clock extends Component {
    formatSeconds(totalSeconds) {
        var second = totalSeconds % 60;
        var minute = Math.floor(totalSeconds / 60);

        if(second < 10) second = "0" + second;
        if(minute < 10) minute = "0" + minute;

        return minute + ":" + second;
    }
    render() {
        var {totalSeconds} = this.props;

        return (
            <div>
                <div className="clock">
                    <span className="clock-text">
                        {this.formatSeconds(totalSeconds)}
                    </span>
                </div>
            </div>
        );
    }
}

Clock.propTypes = {
    totalSeconds: React.PropTypes.number
}

Clock.defaultProps = {
    totalSeconds: 0
}

export default Clock;