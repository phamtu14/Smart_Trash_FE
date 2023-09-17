import React from 'react';
import isEmpty from 'lodash/isEmpty';
import PropTypes from 'prop-types';
import {
  ButtonCircleCustom,
  ButtonCustom,
  ButtonCustomGray,
  ButtonCustomWhite,
  ButtonFilterCustom,
} from './styles';
import SvgIcon from '../../../images/SvgIcon';

const Button = props => {
  const dataProps = { ...props };
  const {
    iconName,
    children,
    btnType = '',
    size,
    disabled,
    onClick,
    allowDisabled,
    color,
  } = props;
  delete dataProps.className;
  delete dataProps.size;
  delete dataProps.disabled;
  delete dataProps.onClick;
  delete dataProps.allowDisabled;
  if (btnType === 'btn-circle')
    return (
      <ButtonCircleCustom
        color={color}
        size={size}
        onClick={!disabled && onClick}
        disabled={allowDisabled}
        {...dataProps}
      >
        {!isEmpty(iconName) && <SvgIcon name={iconName} />}
        {!isEmpty(children) && <span>{children}</span>}
      </ButtonCircleCustom>
    );

  if (btnType === 'filter')
    return (
      <ButtonFilterCustom
        color={color}
        size={size}
        onClick={!disabled && onClick}
        disabled={allowDisabled}
        {...dataProps}
      >
        {!isEmpty(iconName) && <SvgIcon name={iconName} />}
        {!isEmpty(children) && <span>{children}</span>}
      </ButtonFilterCustom>
    );
  if (btnType === 'bg-white')
    return (
      <ButtonCustomWhite
        color={color}
        size={size}
        onClick={!disabled && onClick}
        disabled={allowDisabled}
        {...dataProps}
      >
        {!isEmpty(iconName) && <SvgIcon name={iconName} />}
        {!isEmpty(children) && <span>{children}</span>}
      </ButtonCustomWhite>
    );
  if (btnType === 'gray')
    return (
      <ButtonCustomGray
        type="primary"
        color={color}
        size={size}
        onClick={!disabled && onClick}
        disabled={allowDisabled}
        {...dataProps}
      >
        {!isEmpty(iconName) && <SvgIcon name={iconName} />}
        {!isEmpty(children) && <span>{children}</span>}
      </ButtonCustomGray>
    );
  return (
    <ButtonCustom
      type="primary"
      color={color}
      size={size}
      onClick={!disabled && onClick}
      disabled={allowDisabled}
      {...dataProps}
    >
      {!isEmpty(iconName) && <SvgIcon name={iconName} />}
      {!isEmpty(children) && <span>{children}</span>}
    </ButtonCustom>
  );
};
Button.propTypes = {
  iconName: PropTypes.string,
  children: PropTypes.node,
  btnType: PropTypes.string,
  size: PropTypes.number,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  allowDisabled: PropTypes.bool,
  color: PropTypes.string,
};

export default Button;
