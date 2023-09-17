import React from 'react';
import PropTypes from 'prop-types';
import { Tooltip } from 'antd';
import {
  HeaderEtn,
  ContainerHeader,
  LeftHeader,
  IconMenu,
  Logo,
  RightHeader,
  PopoverCustom,
  LayoutSearch,
  IconUser,
} from './style';
import SearchField from '../InputField/SearchField';
import { logOut } from '../../commonFunction';
import defaultAvatar from '../../../images/avatarDefault.svg';

const Header = ({
  iconMenu,
  logo,
  onClickMenu,
  onClickLogo,
  content,
  visible,
  onVisibleChange,
  showSearch,
  placeholderSearch,
  onSelectSearch,
  onClickFilterBtn,
  searchSimple,
  handleSearch,
  onPressEnter,
  hideFilter,
  pathSuggestSearch,
}) => (
  <HeaderEtn>
    <ContainerHeader>
      <LeftHeader>
        <IconMenu alt="" onClick={onClickMenu || null} src={iconMenu} />
        <Logo alt="" onClick={onClickLogo || null} src={logo} />
        {showSearch && (
          <LayoutSearch>
            <SearchField
              placeholder={placeholderSearch}
              onSelect={onSelectSearch}
              onClick={onClickFilterBtn}
              searchSimple={searchSimple}
              handleSearch={handleSearch}
              onPressEnter={onPressEnter}
              hideFilter={hideFilter}
              pathSuggestSearch={pathSuggestSearch}
            />
          </LayoutSearch>
        )}
      </LeftHeader>
      <RightHeader>
        <PopoverCustom
          placement="bottomRight"
          content={content}
          visible={visible}
          onVisibleChange={onVisibleChange}
          trigger="click"
          overlayStyle={{ paddingRight: '15px' }}
        >
          {!visible ? (
            <Tooltip
              placement="bottomLeft"
              overlayStyle={{ maxWidth: '407px' }}
              title="Đăng xuất"
            >
              <IconUser
                src={defaultAvatar}
                alt=""
                onClick={() => {
                  logOut();
                }}
              />
            </Tooltip>
          ) : (
            <IconUser alt="" />
          )}
        </PopoverCustom>
      </RightHeader>
    </ContainerHeader>
  </HeaderEtn>
);
Header.propTypes = {
  iconMenu: PropTypes.element,
  logo: PropTypes.element,
  onClickMenu: PropTypes.func,
  onClickLogo: PropTypes.func,
  content: PropTypes.node,
  visible: PropTypes.bool,
  onVisibleChange: PropTypes.func,
  showSearch: PropTypes.bool,
  placeholderSearch: PropTypes.string,
  onSelectSearch: PropTypes.func,
  onClickFilterBtn: PropTypes.func,
  searchSimple: PropTypes.func,
  handleSearch: PropTypes.func,
  onPressEnter: PropTypes.func,
  hideFilter: PropTypes.bool,
  pathSuggestSearch: PropTypes.string,
};

export default Header;
