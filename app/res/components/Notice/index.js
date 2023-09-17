import React from 'react';
import { notification } from 'antd';
import { words } from 'lodash';

import iconNoticeSuccess from '../../../images/noticeSuccess.svg';
import iconNoticeError from '../../../images/noticeError.svg';
import { getMsgClient } from '../../commonFunction';

export default function Notice(props) {
  const { msg, desc, place, isSuccess = true } = props;
  const IS_MOBILE = !!(window.innerWidth < 600);

  const style = {
    maxWidth: IS_MOBILE ? '350px' : '450px',
    minWidth: IS_MOBILE ? '300px' : '320px',
    maxHeight: '500px',
    minHeight: '112px',
    boxShadow: '0px 2px 16px rgba(0, 0, 0, 0.24)',
    borderRadius: '8px',
    background: isSuccess ? '#E5F5EB' : '#FCCED4',
    justifyContent: 'center',
    display: 'flex',
    width: 'max-content',
  };

  notification.open({
    className: `notification-custom ${isSuccess ? 'success' : 'error'}`,
    style,
    placement: place || 'bottomRight',
    message: (
      <div
        dangerouslySetInnerHTML={{
          __html: getMsgClient(msg || ''),
        }}
      />
    ),
    description: (
      <div
        dangerouslySetInnerHTML={{
          __html: getMsgClient(desc || ''),
        }}
      />
    ),
    icon: isSuccess ? (
      <img alt="" src={iconNoticeSuccess} />
    ) : (
      <img alt="" src={iconNoticeError} />
    ),
    duration: words(msg).length > 20 ? 2 : 3.5,
  });
}
