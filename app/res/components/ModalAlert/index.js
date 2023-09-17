import React from 'react';
import PropTypes from 'prop-types';
import { DivFooter, ModalWrapper } from './style';
import iconClose from '../../../images/icon/icon-close.svg';

export default function ModalAlert({ children, width, onClickCancel, isCustomFooter, buttonCustom, isModalLoading }) {
  return (
    <ModalWrapper
      centered
      closable
      maskClosable={false}
      width={width || 1180}
      visible
      onCancel={onClickCancel}
      footer={[<DivFooter>{isCustomFooter && <div>{buttonCustom}</div>}</DivFooter>]}
      closeIcon={<>{!isModalLoading && <img src={iconClose} width={10} height={10} alt="" />}</>}
    >
      {children}
    </ModalWrapper>
  );
}

ModalAlert.propTypes = {
  children: PropTypes.any,
  width: PropTypes.number,
  onClickCancel: PropTypes.func,
  isCustomFooter: PropTypes.bool,
  buttonCustom: PropTypes.any,
  isModalLoading: PropTypes.bool,
};
