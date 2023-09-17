import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { ContainerSider, MenuCustom, SiderCustom, IconSider } from './styles';

const DotSubItem = () => (
  <span>
    <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
      <circle cx="4" cy="4" r="4" fill="#868E96" />
    </svg>
  </span>
);

const Sidebar = ({
  isExpand,
  minWidth,
  maxWidth,
  permissionArray,
  dataMenu,
  onClickMenu,
  pathname,
}) => {
  const [collapsedWidth, setCollapsedWidth] = useState(minWidth);
  const [expand, setExpand] = useState(isExpand);
  useEffect(() => {
    setCollapsedWidth(isExpand ? maxWidth : minWidth);
    setExpand(isExpand);
  }, [isExpand]);

  const getSelectedKeys = () => {
    if (pathname !== undefined) {
      if (_.filter(dataMenu, i => i.path === pathname).length !== 0) {
        return _.filter(dataMenu, i => i.path === pathname)[0].key;
      }
      const menuHaveChilds = _.filter(dataMenu, i => i.child !== undefined);
      if (menuHaveChilds.length !== 0) {
        // eslint-disable-next-line no-plusplus
        for (let x = 0; x < menuHaveChilds.length; x++) {
          if (
            menuHaveChilds[x].child !== undefined &&
            _.filter(menuHaveChilds[x].child, i => i.path === pathname)
              .length !== 0
          ) {
            return _.filter(
              menuHaveChilds[x].child,
              i => i.path === pathname,
            )[0].key;
          }
        }
      }
    }
    return 1;
  };

  return (
    <ContainerSider clickMenu={isExpand}>
      <SiderCustom
        width={maxWidth}
        collapsedWidth={collapsedWidth}
        theme="light"
        trigger={null}
        collapsible
        collapsed={!expand}
        // onMouseEnter={() => setCollapsedWidth(maxWidth)}
        // onMouseLeave={() => setCollapsedWidth(isExpand ? maxWidth : minWidth)}
        onMouseEnter={() => setExpand(isExpand ? expand : !expand)}
        onMouseLeave={() => setExpand(isExpand ? expand : false)}
      >
        <MenuCustom mode="inline" selectedKeys={`${getSelectedKeys()}`}>
          {_.flatMap(dataMenu, itemMenu =>
            permissionArray !== undefined ? (
              itemMenu.child ? (
                permissionArray.includes(itemMenu.key) ? (
                  <MenuCustom.SubMenu
                    key={itemMenu.key}
                    icon={<IconSider src={itemMenu.icon} />}
                    title={itemMenu.label}
                  >
                    {_.flatMap(itemMenu.child, subItem =>
                      permissionArray.includes(subItem.key) ? (
                        <MenuCustom.Item
                          key={subItem.key}
                          onClick={
                            onClickMenu !== undefined
                              ? () => onClickMenu(subItem)
                              : null
                          }
                        >
                          <DotSubItem />
                          {subItem.label}
                        </MenuCustom.Item>
                      ) : null,
                    )}
                  </MenuCustom.SubMenu>
                ) : null
              ) : permissionArray.includes(itemMenu.key) ? (
                <MenuCustom.Item
                  key={itemMenu.key}
                  icon={<IconSider src={itemMenu.icon} />}
                  title={null}
                  onClick={
                    onClickMenu !== undefined
                      ? () => onClickMenu(itemMenu)
                      : null
                  }
                >
                  {itemMenu.label}
                </MenuCustom.Item>
              ) : null
            ) : (
              <MenuCustom.Item
                key={itemMenu.key}
                icon={<IconSider src={itemMenu.icon} />}
                title={null}
                onClick={
                  onClickMenu !== undefined ? () => onClickMenu(itemMenu) : null
                }
              >
                {itemMenu.label}
              </MenuCustom.Item>
            ),
          )}
        </MenuCustom>
      </SiderCustom>
    </ContainerSider>
  );
};
Sidebar.propTypes = {
  isExpand: PropTypes.bool,
  minWidth: PropTypes.string,
  maxWidth: PropTypes.string,
  permissionArray: PropTypes.array,
  dataMenu: PropTypes.object,
  onClickMenu: PropTypes.func,
  pathname: PropTypes.string,
};

export default Sidebar;
