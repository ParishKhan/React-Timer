import React, {Component} from 'react';

class CountdownForm extends Component {
    onSubmit(e) {
        e.preventDefault();

        var strSecond = this.refs.seconds.value;

        if(strSecond.match(/^[0-9]*$/)) {
            this.refs.seconds.value = "";
            this.props.onSetCountdown(parseInt(strSecond, 10))
        }
    }
    render() {
        return (
            <div>
                <form className="count-form" onSubmit={this.onSubmit.bind(this)}>
                    <input type="text" ref="seconds" placeholder="Enter time in seconds"/>
                    <button className="button expanded">Start</button>
                </form>
            </div>
        );
    }
}

export default CountdownForm;