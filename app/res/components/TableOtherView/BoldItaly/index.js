import React from 'react';
import PropTypes from 'prop-types';
import { Tooltip } from 'antd';

const BoldItaly = ({ name1, name2, showTooltip = false }) =>
  showTooltip ? (
    <>
      <div>
        <Tooltip overlayStyle={{ maxWidth: 450 }} title={name1} lineClamp={1}>
          {name1}
        </Tooltip>
      </div>
      <div className="font-italic font-weight-normal">
        <Tooltip
          overlayStyle={{ maxWidth: 450 }}
          title={name2}
          lineClamp={1}
          styleWrapper={{ width: '100%', position: 'relative' }}
        >
          {name2}
        </Tooltip>
      </div>
    </>
  ) : (
    <>
      <div>{name1}</div>
      <div className="font-italic font-weight-normal">{name2}</div>
    </>
  );
BoldItaly.propTypes = {
  name1: PropTypes.string,
  name2: PropTypes.string,
  showTooltip: PropTypes.bool,
};

export default BoldItaly;
