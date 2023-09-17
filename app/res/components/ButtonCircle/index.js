import React from 'react';
import { Tooltip } from 'antd';
import PropTypes from 'prop-types';

import Button from '../Button';

ButtonCircle.propTypes = {
  title: PropTypes.string,
  iconName: PropTypes.element,
  enable: PropTypes.bool,
  onClick: PropTypes.func,
  className: PropTypes.string,
  clsName: PropTypes.string,
  placement: PropTypes.string,
  btnType: PropTypes.string,
};

ButtonCircle.defaultProps = {
  placement: 'bottomRight',
  btnType: 'btn-circle',
};

export default function ButtonCircle(props) {
  const {
    title,
    iconName,
    enable,
    onClick,
    className,
    clsName,
    placement,
    btnType,
  } = props;

  return (
    <Tooltip
      placement={placement}
      mouseLeaveDelay={0}
      title={title}
      overlayStyle={{ maxWidth: 500 }}
    >
      <Button
        btnType={btnType}
        shape="circle"
        iconName={iconName}
        className={className}
        clsName={clsName}
        disabled={!enable}
        onClick={e => {
          e.stopPropagation();
          // eslint-disable-next-line no-unused-expressions
          !!onClick && onClick();
        }}
      />
    </Tooltip>
  );
}
