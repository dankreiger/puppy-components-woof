import React from 'react';
import { PagerContainer, PagerItem } from './Pager.styles';
import PropTypes from 'prop-types';
import shortid from 'shortid';

const Pager = ({ activeColor, color, items, onClick }) => {
  return (
    <PagerContainer>
      {items.map(({ active }, index) => (
        <PagerItem
          key={shortid.generate()}
          onClick={onClick}
          color={color}
          activeColor={activeColor}
          active={active}
        />
      ))}
    </PagerContainer>
  );
};

Pager.propTypes = {
  color: PropTypes.string,
  activeColor: PropTypes.string,
  /** pager items */
  items: PropTypes.arrayOf(
    PropTypes.shape({
      active: PropTypes.boolean
    })
  ),
  onClick: PropTypes.func
};

Pager.defaultProps = {
  items: [{ active: true }, { active: false }]
};

export default Pager;
