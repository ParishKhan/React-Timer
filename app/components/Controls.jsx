import React, {Component} from 'react';

class Controls extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        var {countdownStatus} = this.props;
        var renderStartStopButton = () => {
            if(countdownStatus == "started") {
                return <button className="button secondary">Pause</button>
            } else if (countdownStatus == "paused") {
                return <button className="button secondary">Start</button>
            }
        }
        return (
            <div className="controls"> 
                {renderStartStopButton()}
                <button className="button alert hollow">clear</button>
            </div>
        );
    }
}

Controls.propTypes = {
    countdownStatus: React.PropTypes.string.isRequired
}

export default Controls;