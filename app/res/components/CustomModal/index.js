import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { Tooltip } from 'antd';
import {
  ButtonSave,
  DivFooter,
  ModalTitle,
  ModalWrapper,
  StyleButtonClose,
} from './styled';

export default function CustomModal({
  disableSaveMessage,
  disableSaveButton,
  children,
  width,
  onClickCancel,
  isCustomFooter,
  buttonCustom,
  title,
  nameSave,
  isSaveIsReset,
  isLoading,
  onSave,
  onSaveAndReset,
  isModalInformation,
  visible,
}) {
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
      destroyOnClose
      centered
      closable
      maskClosable={false}
      width={width || 1180}
      visible={visible}
      onCancel={onClickCancel}
      onOk={onSave}
      footer={[
        <DivFooter>
          {isModalInformation ? (
            <>
              <StyleButtonClose onClick={onClickCancel}>
                <div>Đóng</div>
              </StyleButtonClose>
            </>
          ) : (
            <>
              {isCustomFooter ? (
                <div>{buttonCustom}</div>
              ) : (
                <DivFooter>
                  <StyleButtonClose onClick={onClickCancel}>
                    <div>Đóng</div>
                  </StyleButtonClose>
                  {isSaveIsReset &&
                    (!disableSaveButton ? (
                      <ButtonSave loading={isLoading} onClick={onSaveAndReset}>
                        Lưu lại và Thêm tiếp
                      </ButtonSave>
                    ) : (
                      <Tooltip title={disableSaveMessage}>
                        <ButtonSave loading={isLoading} disable>
                          Lưu lại và Thêm tiếp
                        </ButtonSave>
                      </Tooltip>
                    ))}
                  {!disableSaveButton ? (
                    <ButtonSave loading={isLoading} onClick={onSave}>
                      {nameSave || t('Lưu lại')}
                    </ButtonSave>
                  ) : (
                    <Tooltip title={disableSaveMessage}>
                      <ButtonSave loading={isLoading} disable>
                        {nameSave || t('Lưu lại')}
                      </ButtonSave>
                    </Tooltip>
                  )}
                </DivFooter>
              )}
            </>
          )}
        </DivFooter>,
      ]}
    >
      <ModalTitle>{title}</ModalTitle>
      {children}
    </ModalWrapper>
  );
}

CustomModal.propTypes = {
  disableSaveButton: PropTypes.bool,
  children: PropTypes.any,
  width: PropTypes.number,
  onClickCancel: PropTypes.func,
  isCustomFooter: PropTypes.bool,
  buttonCustom: PropTypes.any,
  title: PropTypes.string,
  isLoading: PropTypes.bool,
  nameSave: PropTypes.string,
  isSaveIsReset: PropTypes.bool,
  onSave: PropTypes.func,
  onSaveAndReset: PropTypes.func,
  isModalInformation: PropTypes.bool,
  disableSaveMessage: PropTypes.string,
  visible: PropTypes.bool,
};
