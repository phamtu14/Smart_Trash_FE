import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import CustomModal from '../CustomModal';
import { MAX_OF_RECORD } from '../../../utils/constants';
import { Container, SpanBold, StyleTextExport, TextExport, TextExportAlert } from './style';
import iconWaiting from '../../../images/iconWaiting.svg';

const ExportPopup = ({ onClose, onSave, totalRecord, textExport, textAlertExport, textNoteExport }) => {
  const { t } = useTranslation();
  return (
    <CustomModal
      title=""
      width={750}
      onClickCancel={onClose}
      onSave={onSave}
      nameSave={t('common.confirmExport')}
      nameCancel={t('common.closeModal')}
      isModalInformation={totalRecord > MAX_OF_RECORD}
    >
      <Container>
        <img src={iconWaiting} alt="" />
        <StyleTextExport>
          <TextExport>
            {totalRecord <= MAX_OF_RECORD ? (
              <>
                <SpanBold>{totalRecord}</SpanBold> {textExport}
                <SpanBold> {t('common.exportFileExcel')} </SpanBold>
              </>
            ) : (
              <>{textAlertExport}</>
            )}
          </TextExport>
          <TextExportAlert>{totalRecord <= MAX_OF_RECORD && <i>{textNoteExport}</i>}</TextExportAlert>
        </StyleTextExport>
      </Container>
    </CustomModal>
  );
};

ExportPopup.propTypes = {
  onClose: PropTypes.func,
  onSave: PropTypes.func,
  totalRecord: PropTypes.number,
  textExport: PropTypes.string,
  textAlertExport: PropTypes.string,
  textNoteExport: PropTypes.string,
};

export default ExportPopup;
