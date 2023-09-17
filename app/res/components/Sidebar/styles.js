import styled from 'styled-components';
import { Layout, Menu } from 'antd';

const { Sider } = Layout;

const ContainerSider = styled.div`
  height: 100%;
  width: ${props => (props.clickMenu ? 'auto' : '64px')};

  div {
    height: 100%;
  }
`;

const SiderCustom = styled(Sider)`
  z-index: 1000;
  height: 100%;

  .ant-menu-vertical,
  .ant-menu-vertical-left {
    border-right: 1px solid #ccc;
  }

  .ant-menu-sub > .ant-menu-item.ant-menu-item-selected {
    background: #cdffe2 !important;
    color: #219653 !important;
    img {
      filter: brightness(0) invert(1);
    }

    circle {
      fill: #219653;
    }
  }
  div.ant-menu-submenu-title {
    width: auto;
    padding: 0 !important;
    margin: 10px 12px 0;
    border-radius: 8px;
  }
`;

const MenuCustom = styled(Menu)`
  height: 100%;
  li.ant-menu-submenu.ant-menu-submenu-selected > ant-menu-submenu-title {
    background: ${props => props.theme.primaryColor};
    color: #fff;

    img {
      //filter: brightness(0) invert(1);
      fill: white;
    }
  }

  li.ant-menu-item {
    padding: 0 !important;
    margin: 10px 12px;
    border-radius: 8px;
    width: auto;
    display: flex;
  }

  li.ant-menu-item::after {
    border: none !important;
  }

  li.ant-menu-item:hover {
    background: rgb(207, 216, 220);
  }

  li.ant-menu-root > .ant-menu-submenu-selected {
    color: white;
  }

  //div.ant-menu-submenu-title {
  //  width: auto;
  //  padding: 0 !important;
  //  margin: 10px 12px 0;
  //  border-radius: 8px;
  //}
  //
  //div.ant-menu-item:hover {
  //  width: auto;
  //  padding: 0 !important;
  //  margin: 10px 12px 0;
  //  border-radius: 8px;
  //}

  li.ant-menu-submenu-selected {
    width: auto;
    padding: 0 !important;
    border-radius: 8px;
    img {
      filter: brightness(0) invert(1);
    }
    .ant-menu-submenu-arrow {
      color: white;
    }
  }

  li.ant-menu-submenu-selected > div {
    color: white !important;
    background-color: #219653 !important;
  }

  .ant-menu-submenu:hover > .ant-menu-submenu-title > .ant-menu-submenu-expand-icon,
  .ant-menu-submenu:hover > .ant-menu-submenu-title > .ant-menu-submenu-arrow {
    color: white;
  }

  li.ant-menu-item.ant-menu-item-selected {
    background: ${props => props.theme.primaryColor};
    color: #fff;

    img {
      filter: brightness(0) invert(1);
    }
  }

  li.ant-menu-item.ant-menu-item-selected > span.ant-menu-title-content {
    font-weight: 600 !important;
  }

  span.ant-menu-title-content {
    opacity: 1 !important;
    font-size: 1rem;
    font-weight: 400;
    margin-left: 2px;
  }

  .ant-menu-sub.ant-menu-inline > .ant-menu-item,
  .ant-menu-sub.ant-menu-inline > .ant-menu-submenu > .ant-menu-submenu-title {
    padding: 0 24px !important;
  }

  .ant-menu-item,
  .ant-menu-submenu-title {
    width: auto;
    padding: 0 !important;
    margin: 10px 12px 0;
    border-radius: 8px;

    :hover {
      background: rgb(207, 216, 220);
    }
  }

  .ant-menu-submenu-title {
    display: flex;
  }

  .ant-menu-submenu-arrow {
    position: unset;
    margin-right: 8px;
  }

  .ant-menu-title-content {
    display: flex;
  }

  .ant-menu-title-content span {
    display: flex;
    margin-right: 8px;
    align-items: center;
  }

  li.ant-menu-submenu.ant-menu-submenu-vertical.ant-menu-submenu-selected .ant-menu-submenu-title {
    background: rgb(207, 216, 220);
  }

  li.ant-menu-submenu.ant-menu-submenu-inline.ant-menu-submenu-selected .ant-menu-submenu-title span {
    font-weight: bold;
  }
`;

const IconSider = styled.img`
  display: flex;
  align-items: center;
  width: 40px;
  height: 40px;
  padding: 8px;
  min-width: auto !important;
`;

export { ContainerSider, MenuCustom, SiderCustom, IconSider };
