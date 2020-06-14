import React from 'react';
import {Alert, Modal, ModalBody, ModalFooter, ModalHeader} from 'reactstrap';

export const Alert3D = (props) => {
  const { textColor, text, visible, onDismiss } = props;
  const closeBtn = (
    <button className='close' onClick={onDismiss}>
      &times;
    </button>
  );
  return (
    <Modal centered autoFocus size='md' isOpen={visible} toggle={onDismiss}>
      <ModalHeader toggle={onDismiss} close={closeBtn}></ModalHeader>
      <ModalBody>
        <Alert className='text-center' color={textColor}>
          {text}
        </Alert>
      </ModalBody>
      <ModalFooter />
    </Modal>
  );
};
