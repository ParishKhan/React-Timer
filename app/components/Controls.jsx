import React, {Component} from 'react';

class Controls extends Component {

    onStatusChange(status) {
        return () => {
            this.props.onStatusChange(status);
        }
    }
    render() {
        var {countdownStatus} = this.props;
        var renderStartStopButton = () => {
            if(countdownStatus == "started") {
                return <button className="button secondary" onClick={this.onStatusChange('paused').bind(this)}>Pause</button>
            } else if (countdownStatus == "paused" || "cleared") {
                return <button className="button secondary" onClick={this.onStatusChange('started').bind(this)}>Start</button>
            }
        }
        return (
            <div className="controls"> 
                {renderStartStopButton()}
                <button className="button alert hollow" onClick={this.onStatusChange('stopped').bind(this)}>clear</button>
            </div>
        );
    }
}

Controls.propTypes = {
    countdownStatus: React.PropTypes.string.isRequired,
    onStatusChange: React.PropTypes.func.isRequired
}

export default Controls;