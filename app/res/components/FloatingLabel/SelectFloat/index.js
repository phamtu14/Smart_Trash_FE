import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Select } from 'antd';
import Floating from '../Floatting';
import { SelectFloatStyle } from './style';
import iconArrowDropdown from '../../../../images/icon_arrow_dropdown.svg';
import { RedStar } from '../styled';

const { Option } = Select;

const SelectFloat = ({
  allowClear,
  dataSelect,
  onChangeSelect,
  label,
  valueSelect,
  isRequired,
}) => {
  const [selectValue, setSelectValue] = useState(null);
  return (
    <Floating
      label={
        isRequired ? (
          <>
            {label}
            <RedStar>*</RedStar>
          </>
        ) : (
          <>{label}</>
        )
      }
      value={selectValue || valueSelect}
    >
      <SelectFloatStyle
        suffixIcon={<img alt="" src={iconArrowDropdown} />}
        onChange={value => {
          setSelectValue(value);
          onChangeSelect(value);
        }}
        value={valueSelect}
        allowClear={allowClear}
      >
        {dataSelect.map(item => (
          <Option value={item.value}>{item.label}</Option>
        ))}
      </SelectFloatStyle>
    </Floating>
  );
};

SelectFloat.propTypes = {
  allowClear: PropTypes.bool,
  dataSelect: PropTypes.array.isRequired,
  onChangeSelect: PropTypes.func.isRequired,
  label: PropTypes.string,
  valueSelect: PropTypes.string,
  isRequired: PropTypes.bool,
};

export default SelectFloat;
