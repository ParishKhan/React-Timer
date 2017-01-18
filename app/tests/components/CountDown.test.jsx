import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import TestUtils from 'react-addons-test-utils';
import $ from 'jQuery';

import CountDown from 'CountDown';

describe('CountDown', () => {
    it('Should exists', () => {
        expect(CountDown).toExist();
    });

    describe('handleSetCountdown', () => {
        it('Should set state to started and countdown', (done) => {
            var _countdown = TestUtils.renderIntoDocument(<CountDown />);
            _countdown.handleSetCountdown(9);

            expect(_countdown.state.count).toBe(9);
            expect(_countdown.state.countdownStatus).toBe('started');

            setTimeout(() => {
                expect(_countdown.state.count).toBe(8);
                done();
            }, 1001)
        });

        it('Should never set count less than zero', (done) => {
            var _countdown = TestUtils.renderIntoDocument(<CountDown />);
            _countdown.handleSetCountdown(1);

            setTimeout(() => {
                expect(_countdown.state.count).toBe(0);
                done();
            }, 3001)
        });

    })

});