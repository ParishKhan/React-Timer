import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import TestUtils from 'react-addons-test-utils';
import $ from 'jQuery';

import Timer from 'Timer';

describe('Timer', () => {
    it('Should Exist', () => {
        expect(Timer).toExist();
    });
});