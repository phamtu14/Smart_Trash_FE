import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Container, CustomCopyModal, DividerCustom } from './styled';
import PageSignContainer from '../PageSignContainer';

const CopyModal = ({ title, onClose /* , dataCopy */ }) => {
  const [deadlineSignPageRadio, setDeadlineSignPageRadio] = useState(1);
  const [deadlineSignPageRadio1, setDeadlineSignPageRadio1] = useState(2);

  const changeDeadlinePageRadio = e => {
    setDeadlineSignPageRadio(e.target.value);
  };
  const changeDeadlinePageRadio1 = e => {
    setDeadlineSignPageRadio1(e.target.value);
  };
  return (
    <CustomCopyModal
      visible
      title={title}
      onCancel={onClose}
      width={800}
      centered
      disableConfirm
      footer={null}
    >
      <Container>
        <PageSignContainer
          onValue={deadlineSignPageRadio}
          onChangeValue={changeDeadlinePageRadio}
        />
        <DividerCustom />
        <PageSignContainer
          onValue={deadlineSignPageRadio1}
          onChangeValue={changeDeadlinePageRadio1}
        />
      </Container>
    </CustomCopyModal>
  );
};
CopyModal.propTypes = {
  onClose: PropTypes.func,
  title: PropTypes.string,
  // dataCopy: PropTypes.array,
};

export default CopyModal;
