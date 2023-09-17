import React from 'react';
import { Tooltip } from 'antd';
import PropTypes from 'prop-types';

import SvgIcon from '../../../../images/SvgIcon';
import Button from '../../Button';
import MyAutoComplete from '../MyAutoComplete';
import { InputCustom, InputFieldWrapper, SearchCustom } from './styled';

SearchField.propTypes = {
  searchSimple: PropTypes.shape({
    searchSimple: PropTypes.bool,
    onChange: PropTypes.func,
  }),
  hideFilter: PropTypes.bool,
  onSelect: PropTypes.func,
  onClick: PropTypes.func,
  placeholder: PropTypes.string,
  handleSearch: PropTypes.func,
  pathSuggestSearch: PropTypes.string,
  mode: PropTypes.string,
};

SearchField.defaultProps = {
  searchSimple: {
    isSearchSimple: false,
    onChange: () => {},
  },
  hideFilter: false,
};

export default function SearchField(props) {
  const { mode, onSelect, onClick, placeholder, searchSimple, hideFilter, handleSearch, pathSuggestSearch, ...rest } = props;

  return (
    <InputFieldWrapper>
      {searchSimple.isSearchSimple ? (
        <SearchCustom>
          <InputCustom
            placeholder={placeholder}
            size="large"
            value={searchSimple.value}
            suffix={searchSimple.value.length === 0 && <SvgIcon name="search" style={{ cursor: 'pointer' }} />}
            onChange={searchSimple.onChange}
            allowClear
          />
        </SearchCustom>
      ) : (
        <MyAutoComplete
          mode={mode}
          // className={styles.searchField}
          onSelect={onSelect}
          defaultVal={searchSimple.defaultValue}
          pathSuggestSearch={pathSuggestSearch}
        >
          <InputCustom
            placeholder={placeholder}
            size="large"
            value={searchSimple.value}
            allowClear
            onChange={searchSimple.onChange}
            suffix={<SvgIcon name="search" style={{ cursor: 'pointer' }} onClick={handleSearch} />}
            {...rest}
          />
        </MyAutoComplete>
      )}

      {!hideFilter && (
        <Tooltip placement="bottom" mouseLeaveDelay={0} title="Tìm kiếm nâng cao">
          <Button btnType="filter" shape="circle" iconName="filter-white" onClick={onClick} />
        </Tooltip>
      )}
    </InputFieldWrapper>
  );
}
