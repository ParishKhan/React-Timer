import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import TestUtils from 'react-addons-test-utils';
import $ from 'jQuery';

import Controls from 'Controls';

describe('Controls', () => {
    it('Should exist', () => {
        expect(Controls).toExist();
    });

    describe('render', () => {
        it('Should render Pause when started', () => {
            var _controls = TestUtils.renderIntoDocument(<Controls countdownStatus="started" />);
            var $el = $(ReactDOM.findDOMNode(_controls));

            var $pauseButton = $el.find('button:contains(Pause)');

            expect($pauseButton.length).toBe(1);
        });

        it('Should render Start when paused', () => {
            var _controls = TestUtils.renderIntoDocument(<Controls countdownStatus="paused" />);
            var $el = $(ReactDOM.findDOMNode(_controls));

            var $startButton = $el.find('button:contains(Start)');

            expect($startButton.length).toBe(1);
        });
    });
});