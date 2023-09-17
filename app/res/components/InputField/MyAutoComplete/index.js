import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { AutoComplete } from 'antd';

import groupBy from 'lodash/groupBy';
import debounce from 'lodash/debounce';

import { isEmpty } from 'lodash';
import { getMsgClient } from '../../../commonFunction';
import arrow from '../../../../images/arrow.svg';
import { Item, ItemLabel } from './styles';
import { axiosGet } from '../../../../utils/request';

MyAutoComplete.propTypes = {
  defaultVal: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  pathSuggestSearch: PropTypes.string,
};

MyAutoComplete.defaultProps = {
  children: null,
  className: '',
};

export default function MyAutoComplete(props) {
  const { defaultVal, children, className, pathSuggestSearch, ...rest } = props;
  const [optionsSuggest, setOptionsSuggest] = useState([]);

  const [value, setValue] = useState('');

  const renderTitle = title => (
    <div className="d-flex">
      <img alt="" src={arrow} />
      <Item>{title}</Item>
    </div>
  );

  const replaceAllSet = (str, find, replace) => {
    if (!str.includes(find)) return str;
    return str.replace(find, replace);
  };

  const renderText = (data, text, item) => {
    if (data === '...') return text;
    return `${data}[!|${item.objectId}_${item.categoryId}|!]`;
  };

  const renderItem = (item, textSearch) => ({
    value: renderText(item.objectName, textSearch, item),
    key: `${item.objectName}_${item.objectId}_${item.categoryId}`,
    label: (
      <ItemLabel
        dangerouslySetInnerHTML={{
          __html: replaceAllSet(item.objectName, textSearch, `<b>${textSearch}</b>`),
        }}
        key={`${item.objectName}_${item.objectId}_${item.categoryId}`}
      />
    ),
    objectid: item.objectId,
    categoryid: item.categoryId,
    object_name: item.objectName,
    text_search: textSearch,
    ...item,
  });

  const searchResult = (textSearch, listSearch) => {
    const result = Object.keys(listSearch).map(item => ({
      label: renderTitle(listSearch[item][0].categoryName),
      options: listSearch[item].map(object => renderItem(object, textSearch)),
    }));
    return result;
  };

  const handleSuggestSearch = textSearch => {
    const text = textSearch.trim();
    if (isEmpty(text)) return setOptionsSuggest([]);
    let listSearch;
    axiosGet(`${pathSuggestSearch}?keySearch=${textSearch}`).then(res => {
      if (res.data.isError) return;
      listSearch = groupBy(res.data.object, 'categoryId');
      setOptionsSuggest(searchResult(text, listSearch));
    });
    return '';
  };

  return (
    <AutoComplete
      defaultValue={defaultVal}
      dropdownMatchSelectWidth={500}
      options={optionsSuggest}
      onSearch={debounce(handleSuggestSearch, 300)}
      className={className}
      value={getMsgClient(value || '')}
      onChange={setValue}
      {...rest}
    >
      {children}
    </AutoComplete>
  );
}
