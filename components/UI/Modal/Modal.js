import React from 'react';

import classes from './Modal.module.css';

const Modal = ({ children, clicked }) => {
  return (
    <div className={classes.Modal}>
      <div className={classes.Background} onClick={clicked}></div>
      <div className={classes.ModalContent}>{children}</div>
    </div>
  );
};

export default Modal;
