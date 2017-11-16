import React from 'react';
import PropTypes from 'prop-types';

const SideBar = function(props) {
  const { children, columnWidth } = props;
  const classField = `container hidden-xs col-md-${columnWidth} side-bar`;
  if (!children || children.length === 0) {
    return null;
  } else {
    return (
      <div className={classField} aria-label="Side Bar">
        {children}
      </div>
    );
  }
};

SideBar.propTypes = {
  children: PropTypes.node.isRequired,
  columnWidth: PropTypes.number
};

SideBar.defaultProps = {
  columnWidth: 3,
};

export default SideBar;
