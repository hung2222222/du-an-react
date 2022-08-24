import classes from "./Modal.module.css";
import ReactDOM from "react-dom";
import { Fragment } from "react";

function Backdrop(props) {
  return <div className={classes.backdrop} onClick={props.onClose}></div>;
}

function ModalOver(props) {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
}

const protalElenment = document.getElementById("overlays");
const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        protalElenment
      )}
      {ReactDOM.createPortal(
        <ModalOver>{props.children}</ModalOver>,
        protalElenment
      )}
    </Fragment>
  );
};

export default Modal;
