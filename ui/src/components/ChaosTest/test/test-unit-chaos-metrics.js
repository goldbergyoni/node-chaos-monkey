import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import ChaosMetrics from '../ChaosMetrics';

describe('<ChaosMetrics />', () => {
  test('Whenever no data is passed, error metric shows zero', () => {
    const wrapper = shallow(<ChaosMetrics apiCalls="0" apiErrors="0" apiIsAlive="0" latency="0"/>);
    
    expect(wrapper.find("[data-test-id='errorsLabel']").text()).toBe("0");
  });
});

describe('{Unit under test}', () => {
  test('When {scenario, then it should {expectation}', () => {
    //arrange

    //act
    const receiveValue = {};

    //Assert
    expect(value).toBe({expectedValue});
  });
});

