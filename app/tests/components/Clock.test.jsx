import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import TestUtils from 'react-addons-test-utils';
import $ from 'jQuery';

import Clock from 'Clock';

describe('Clock', () => {
    it('should exist', () => {
        expect(Clock).toExist();
    });
});

describe('formatSeconds', () => {
    it('Should format seconds', () => {
        var clock = TestUtils.renderIntoDocument(<Clock />)
        var second = 615;
        var expected = "10:15";
        var actual = clock.formatSeconds(second);

        expect(actual).toBe(expected);
    });

    it('Should format seconds when min/sec less than 10', () => {
        var clock = TestUtils.renderIntoDocument(<Clock />)
        var second = 61;
        var expected = "01:01";
        var actual = clock.formatSeconds(second);

        expect(actual).toBe(expected);
    });
});

describe('render', () => {
    it('Should render clock to output', () => {
        var clock = TestUtils.renderIntoDocument(<Clock totalSeconds={61} />);
        var $el = $(ReactDOM.findDOMNode(clock));
        var actualText = $el.find('.clock-text').text();

        expect(actualText).toBe('01:01')
    })
})