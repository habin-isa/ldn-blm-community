import React from 'react';
import { shallow } from 'enzyme';
import Button from '.';

describe('Button component', () => {
  it('renders without crashing', () => {
    shallow(<Button />);
  });
  // it.skip('shoulder render correct text', () => {
  //   const page = shallow(<Button text={'Donate'} handleClick={() => {}} />).render();
  //   expect(page.find('span').text()).toEqual('Donate');
  // });
});
