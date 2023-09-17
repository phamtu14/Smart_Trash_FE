import React, { useEffect, useState } from 'react';
import { Pagination, Select } from 'antd';
import PropTypes from 'prop-types';
import { TableEtn, ContainerPagination, TableContainer } from './style';
import { ASCENDING_TOOLTIP, CANCEL_TOOLTIP, DESCENDING_TOOLTIP } from './constants';

const Table = ({
  columns,
  data,
  pagination,
  rowSelection,
  onChangePagination,
  isLoading,
  onChangeSorter,
  totalRecord,
  onResetPagination,
  disableClickRowExpand,
  loadingIcon,
  headerBackgroundColor,
  hoverBackgroundColor,
  onClickRow,
  minWidth,
  isExpand,
  isTablePopup,
}) => {
  const [page, setPage] = useState(1);
  const [size, setPageSize] = useState(50);
  const [totalList, setTotalList] = useState([]);
  useEffect(() => {
    if (onResetPagination) {
      setPage(1);
      setPageSize(50);
    }
  }, [onResetPagination]);

  useEffect(() => {
    if (totalRecord <= 50) {
      setTotalList([50]);
    } else if (totalRecord <= 100) {
      setTotalList([50, 100]);
    } else if (totalRecord <= 200) {
      setTotalList([50, 100, 200]);
    } else if (totalRecord <= 300) {
      setTotalList([50, 100, 200, 300]);
    } else if (totalRecord <= 500) {
      setTotalList([50, 100, 200, 300, 500]);
    } else if (totalRecord > 500) {
      setTotalList([50, 100, 200, 300, 500, 1000]);
    }
  }, [totalRecord]);

  const expandRow = elementList => {
    // eslint-disable-next-line no-restricted-syntax
    for (const element of elementList) {
      const item = element.children;
      if (item.length !== 0)
        if (item[0].style.maxHeight === 'none') {
          item[0].style.maxHeight = '22px';
        } else {
          item[0].style.maxHeight = 'none';
        }
    }
  };

  const clickRow = (e, record, rowIndex) => {
    onClickRow(record, rowIndex);
    if (!disableClickRowExpand) {
      const elementList = e.target.parentElement.children;
      const spanList = e.target.parentElement.parentElement.children;
      if (elementList.length === 1) {
        expandRow(spanList);
      } else {
        expandRow(elementList);
      }
    }
  };

  return (
    <TableContainer isTablePopup={isTablePopup}>
      <TableEtn
        isTablePopup={isTablePopup}
        rowSelection={rowSelection}
        columns={columns}
        dataSource={data}
        enablePanigation={pagination}
        scroll={{ x: minWidth || 1200, y: -110 }}
        pagination={{
          current: page,
          pageSize: size,
        }}
        locale={{
          triggerDesc: DESCENDING_TOOLTIP,
          triggerAsc: ASCENDING_TOOLTIP,
          cancelSort: CANCEL_TOOLTIP,
        }}
        loading={{
          indicator: <img style={{ width: '70px', height: '70px' }} alt="" src={loadingIcon} />,
          spinning: isLoading,
        }}
        onChange={(paginations, filters, sorter) => {
          if (onChangeSorter) onChangeSorter(sorter);
        }}
        onRow={(record, rowIndex) => ({
          onClick: e => clickRow(e, record, rowIndex),
        })}
        headerBackgroundColor={headerBackgroundColor}
        hoverBackgroundColor={hoverBackgroundColor}
        isExpand={!isExpand}
      />
      {pagination && data && data.length !== 0 && (
        <ContainerPagination>
          <Select
            value={size}
            onChange={selected => {
              setPageSize(selected);
              setPage(1);
              if (onChangePagination) onChangePagination(selected, 1);
            }}
          >
            {totalList.map(value => (
              <Select value={value}>{value}</Select>
            ))}
          </Select>
          <Pagination
            simple
            defaultCurrent={1}
            total={totalRecord}
            showTotal={total => `Tổng số: ${total} `}
            current={page}
            pageSize={size}
            onChange={(current, pageSize) => {
              setPage(current);
              setPageSize(pageSize);
              if (onChangePagination) onChangePagination(pageSize, current);
            }}
          />
        </ContainerPagination>
      )}
    </TableContainer>
  );
};
Table.propTypes = {
  columns: PropTypes.array,
  data: PropTypes.array,
  pagination: PropTypes.bool,
  rowSelection: PropTypes.bool,
  onChangePagination: PropTypes.func,
  isLoading: PropTypes.bool,
  onChangeSorter: PropTypes.func,
  totalRecord: PropTypes.number,
  onResetPagination: PropTypes.bool,
  disableClickRowExpand: PropTypes.bool,
  loadingIcon: PropTypes.element,
  headerBackgroundColor: PropTypes.string,
  hoverBackgroundColor: PropTypes.string,
  onClickRow: PropTypes.func,
  minWidth: PropTypes.number,
  isExpand: PropTypes.bool,
  isTablePopup: PropTypes.bool,
};
export default Table;
