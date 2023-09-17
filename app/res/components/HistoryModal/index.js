import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { CustomHistoryModal } from './HistoryModalStyle';
import { formatFullDateTime } from '../../commonFunction';
import Table from '../Table';
import { ButtonSave } from '../CustomModal/styled';

const HistoryModal = ({ title, onClose, dataHistory }) => {
  const { t } = useTranslation();

  const COLUMN_HISTORY = [
    {
      title: t('common.sttColumnTitle'),
      dataIndex: 'index',
      width: 5,
      align: 'center',
      render: (text, record, index) => <div>{index + 1}</div>,
    },
    {
      title: t('common.createDateColumnTitle'),
      dataIndex: 'createdDate',
      width: 20,
      render: text => <div>{formatFullDateTime(text, 'DD/MM/YYYY HH:MM')}</div>,
    },
    {
      title: t('common.accountColumnTitle'),
      dataIndex: 'account',
      width: 20,
      render: text => <div>{text}</div>,
    },
    {
      title: t('common.logContentColumnTitle'),
      dataIndex: 'logContent',
      width: 55,
      // eslint-disable-next-line react/no-danger
      render: text => <div dangerouslySetInnerHTML={{ __html: text }} />,
    },
  ];

  return (
    <CustomHistoryModal
      visible
      title={title}
      onCancel={onClose}
      width={1100}
      centered
      disableConfirm
      footer={[
        <div style={{ display: 'flex', justifyContent: 'flex-en' }}>
          <ButtonSave onClick={onClose}>{t('common.closeModal')}</ButtonSave>
        </div>,
      ]}
    >
      <Table
        columns={COLUMN_HISTORY}
        data={dataHistory === null ? [] : dataHistory}
        minWidth={1000}
        isLoading={false}
        pagination={false}
        isExpand
      />
    </CustomHistoryModal>
  );
};
HistoryModal.propTypes = {
  onClose: PropTypes.func,
  title: PropTypes.string,
  dataHistory: PropTypes.array,
};

export default HistoryModal;
