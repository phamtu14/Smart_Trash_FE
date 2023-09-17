import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { DivFooter, DivFooterLeft, DivFooterRight, ModalWrapper } from './styles';
import Button from '../Button';

const ModalFullScreen = ({
  title,
  children,
  isSaveAndReset,
  isContinue,
  isDisableSave,
  isButtonLeft,
  onClickCancel,
  onSave,
  onSaveAndReset,
  onContinue,
  onClickButtonLeft,
  nameSave,
  nameSaveAndReset,
  nameContinue,
  nameClose,
  nameButtonLeft,
}) => {
  const { t } = useTranslation();

  const onKeyDownListener = e => {
    if (e.key === 'Escape') {
      e.preventDefault();
      onClickCancel(false);
    }
    if (e.ctrlKey && e.key === 's') {
      e.preventDefault();
      onSave();
    }
    if (e.ctrlKey && e.key === 'd') {
      e.preventDefault();
      onSaveAndReset();
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', onKeyDownListener);
    return () => {
      document.removeEventListener('keydown', onKeyDownListener);
    };
  });

  return (
    <ModalWrapper
      title={title}
      visible
      onCancel={onClickCancel}
      footer={[
        <DivFooter>
          <DivFooterLeft>
            {isButtonLeft && (
              <Button btnType="gray" onClick={onClickButtonLeft}>
                {nameButtonLeft || t('common.retrieveProfile')}
              </Button>
            )}
          </DivFooterLeft>
          <DivFooterRight>
            <Button onClick={onClickCancel}>{nameClose || t('common.closeModal')}</Button>
            {isSaveAndReset && <Button onClick={onSaveAndReset}>{nameSaveAndReset || t('common.saveAndNext')}</Button>}
            {!isDisableSave && <Button onClick={onSave}>{nameSave || t('common.saveModal')}</Button>}
            {isContinue && <Button onClick={onContinue}>{nameContinue || t('common.continue')}</Button>}
          </DivFooterRight>
        </DivFooter>,
      ]}
    >
      {children}
    </ModalWrapper>
  );
};
ModalFullScreen.propTypes = {
  title: PropTypes.string,
  children: PropTypes.any,
  isSaveAndReset: PropTypes.bool,
  isContinue: PropTypes.bool,
  isDisableSave: PropTypes.bool,
  isButtonLeft: PropTypes.bool,
  onClickCancel: PropTypes.func,
  onSave: PropTypes.func,
  onSaveAndReset: PropTypes.func,
  onContinue: PropTypes.func,
  onClickButtonLeft: PropTypes.func,
  nameSave: PropTypes.string,
  nameSaveAndReset: PropTypes.string,
  nameContinue: PropTypes.string,
  nameClose: PropTypes.string,
  nameButtonLeft: PropTypes.string,
};

export default ModalFullScreen;
