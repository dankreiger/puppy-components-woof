import React from 'react';
import { shallow } from 'enzyme';

import Text from './Text';

describe('<Text />', () => {
  describe('rendering', () => {
    it('should render', () => {
      const wrapper = shallow(<Text />);
      expect(wrapper).toBeDefined();
    });
  });

  describe('defaults', () => {
    it('returns expected default props', () => {
      expect(Text.defaultProps).toEqual({
        tag: 'p',
        fontFamily: '"Prometo", Verdana, Arial, Helvetica, sans-serif',
        fontWeight: '500'
      });
    });
  });

  describe('custom', () => {
    it('allows custom html tag', () => {
      let props = {
        tag: 'div'
      };
      let wrapper = shallow(<Text {...props} />);
      expect(wrapper.name()).toBe('div');

      props = {
        tag: 'div'
      };
      wrapper = shallow(<Text {...props} />);
      expect(wrapper.name()).toBe('div');
    });

    it('allows custom text', () => {
      const props = {
        text: 'The quick brown fox'
      };
      const wrapper = shallow(<Text {...props} />);
      expect(wrapper.name()).toBe('p');
      expect(wrapper.text()).toBe(props.text);
    });

    it('allows custom color', () => {
      const props = {
        color: 'purple'
      };
      const wrapper = shallow(<Text {...props} />);
      expect(wrapper.props().style.color).toBe(props.color);
    });
  });
});