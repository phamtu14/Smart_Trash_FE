import React from 'react';
import PropTypes from 'prop-types';

const BoldItalyHeader = ({ name1, name2, isBold = false }) => (
  <>
    <div className="white-nowrap" isBold={isBold}>
      {name1}
    </div>
    <div className="white-nowrap font-italic font-weight-normal">{name2}</div>
  </>
);
BoldItalyHeader.propTypes = {
  name1: PropTypes.string,
  name2: PropTypes.string,
  isBold: PropTypes.bool,
};

export default BoldItalyHeader;
