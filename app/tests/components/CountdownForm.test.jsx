import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import TestUtils from 'react-addons-test-utils';
import $ from 'jQuery';

import CountdownForm from 'CountdownForm';

describe('CountdownForm', () => {
    it('should exists', () => {
        expect(CountdownForm).toExist();
    });

    it('Should call onSetCountdown if valid seconds entered', () => {
        var spy = expect.createSpy();
        var Form = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy} />)
        var $el = $(ReactDOM.findDOMNode(Form));

        Form.refs.seconds.value = '109';
        TestUtils.Simulate.submit($el.find('form')[0]);
        expect(spy).toHaveBeenCalledWith(109);
    });

    it('Shouldn not call onSetCountdown if no valid seconds entered', () => {
        var spy = expect.createSpy();
        var Form = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy} />)
        var $el = $(ReactDOM.findDOMNode(Form));

        Form.refs.seconds.value = 'abc';
        TestUtils.Simulate.submit($el.find('form')[0]);
        expect(spy).toNotHaveBeenCalled();
    });
});