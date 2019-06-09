import React from 'react';
import { shallow } from 'enzyme';

import Button from './Button';

describe('<Button />', () => {
  describe('rendering', () => {
    it('should render', () => {
      const wrapper = shallow(<Button />);
      expect(wrapper).toBeDefined();
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('defaults', () => {
    it('has the correct defaults', () => {
      expect(JSON.parse(JSON.stringify(Button.defaultProps))).toEqual({
        disabled: false,
        href: '#',
        tag: 'button',
        target: '_self',
        text: 'Click Me',
        theme: 'dark'
      });
    });
  });

  describe('button anchor tag', () => {
    it('should become an anchor tag when given an "a" tag prop', () => {
      const props = {
        tag: 'a'
      };
      const wrapper = shallow(<Button {...props} />);
      expect(wrapper.props().href).toBe('#');
      expect(wrapper.props().target).toBe('_self');
    });
  });

  describe('custom', () => {
    it('should allow custom className', () => {
      const props = {
        className: 'Custom'
      };
      const wrapper = shallow(<Button {...props} />);
      expect(wrapper.hasClass(props.className)).toBe(true);
    });
  });

  describe('behavior', () => {
    it('should call onClick', () => {
      const props = {
        onClick: jest.fn()
      };
      const wrapper = shallow(<Button {...props} />);
      wrapper.simulate('click');

      expect(props.onClick).toHaveBeenCalled();
    });
  });
});
