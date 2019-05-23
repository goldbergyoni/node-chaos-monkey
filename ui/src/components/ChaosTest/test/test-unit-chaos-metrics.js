import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import ChaosMetrics from '../ChaosMetrics';

describe('<ChaosMetrics />', () => {
  test('Whenevr no data is passed, error metric shows zero', () => {
    const wrapper = shallow(<ChaosMetrics apiCalls="0" apiErrors="0" apiIsAlive="0" latency="0"/>);
    
    expect(wrapper.find("[data-error-container='true']").text()).toBe("0");
  });
});
