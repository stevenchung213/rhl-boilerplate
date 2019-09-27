import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Main from './Main';

describe('Main', () => {
  it('should render correctly', () => {
    const component = shallow(<Main />);
    expect(component).toMatchSnapshot();
  });

  it('should have one child node', () => {
    const component = shallow(<Main />);
    expect(component.children()).toHaveLength(1);
  });
});
