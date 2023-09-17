import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Select } from 'antd';
import Floating from '../Floatting';
import { SelectFloatStyle } from './style';

const { Option } = Select;

const MultiSelectFloat = ({ allowClear, dataSelect, onChangeSelect, label, valueSelect }) => {
  const [selectValue, setSelectValue] = useState(null);

  useEffect(() => {
    setSelectValue(valueSelect);
  }, [valueSelect]);

  return (
    <Floating label={label} value={selectValue || valueSelect}>
      <SelectFloatStyle
        mode="multiple"
        onChange={value => {
          if (value.includes('all')) {
            setSelectValue(['all']);
            onChangeSelect(['all']);
          } else {
            setSelectValue(value);
            onChangeSelect(value);
          }
        }}
        value={valueSelect}
        allowClear={allowClear}
      >
        {dataSelect.map(item => (
          <Option disabled={valueSelect.includes('all') && item.value !== 'all'} value={item.value}>
            {item.label}
          </Option>
        ))}
      </SelectFloatStyle>
    </Floating>
  );
};

MultiSelectFloat.propTypes = {
  allowClear: PropTypes.bool,
  dataSelect: PropTypes.array.isRequired,
  onChangeSelect: PropTypes.func.isRequired,
  label: PropTypes.string,
  valueSelect: PropTypes.array,
};

export default MultiSelectFloat;
