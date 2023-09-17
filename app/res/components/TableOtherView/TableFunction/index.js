import React from 'react';
import PropTypes from 'prop-types';
import { StatusContainer, StatusLabel } from './styles';
import ButtonFunctionList from '../ButtonFunctionList';
import {
  statusToColor,
  statusToText,
  statusToTextTruck,
} from '../../../commonFunction';

const TableFunction = ({
  text,
  record,
  type,
  titleEdit,
  titleCopy,
  titleDownload,
  titleHistory,
  titleDelete,
  onClickEdit,
  onClickCopy,
  onClickDownload,
  onClickHistory,
  onClickDelete,
}) => (
  <>
    <StatusContainer>
      {type === 'normal' && (
        <StatusLabel active={record.isActive}>{text}</StatusLabel>
      )}
      {type === 'recycle' && (
        <StatusLabel
          style={{ color: statusToColor(text) }}
          active={record.isActive}
        >
          {statusToText(text)}
        </StatusLabel>
      )}
      {type === 'truck' && (
        <StatusLabel
          style={{ color: statusToColor(text) }}
          active={record.isActive}
        >
          {statusToTextTruck(text)}
        </StatusLabel>
      )}
      {type === 'noti' && (
        <StatusLabel
          style={{ color: text === 0 ? '#FF0000' : '#00FF00' }}
          active={record.isActive}
        >
          {text === 0 ? 'Chưa xử lý' : 'Đã xử lý'}
        </StatusLabel>
      )}
      <div className="listButton">
        <ButtonFunctionList
          titleEdit={titleEdit}
          titleCopy={titleCopy}
          titleDownload={titleDownload}
          titleHistory={titleHistory}
          titleDelete={titleDelete}
          onClickEdit={onClickEdit}
          onClickCopy={onClickCopy}
          onClickDownload={onClickDownload}
          onClickHistory={onClickHistory}
          onClickDelete={onClickDelete}
        />
      </div>
    </StatusContainer>
  </>
);
TableFunction.propTypes = {
  text: PropTypes.string,
  record: PropTypes.object,
  type: PropTypes.string,
  titleEdit: PropTypes.string,
  titleCopy: PropTypes.string,
  titleDownload: PropTypes.string,
  titleHistory: PropTypes.string,
  titleDelete: PropTypes.string,
  onClickEdit: PropTypes.func,
  onClickCopy: PropTypes.func,
  onClickDownload: PropTypes.func,
  onClickHistory: PropTypes.func,
  onClickDelete: PropTypes.func,
};

export default TableFunction;
