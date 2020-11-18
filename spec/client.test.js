import React from 'react';
import { shallow } from 'enzyme';

import App from '../client/src/app.jsx';

describe('Testing Client', () => {
  const wrapper = shallow(<App />);

  test('should render', () => {
    expect(wrapper.exists()).toBeTruthy();
  });
});