/* eslint-disable react/prop-types */
import ReactDOM from 'react-dom';
import classes from './Modal.module.css';
import { forwardRef } from "react-dom"

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose}/>;
};


const ModalOverlay = forwardRef((props, ref) => {
  return (
    <div ref={ref} className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
});

const portalElement = document.getElementById('overlays');

const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop onClose={props.onClose}/>, portalElement)}
      {ReactDOM.createPortal(<ModalOverlay ref={props.forwardedRef}>{props.children}</ModalOverlay>, portalElement)}
    </>
  );
};

export default Modal;

