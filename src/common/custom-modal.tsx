import React, { useState } from "react";
import { Modal } from "react-bootstrap";

const CustomModal = (props: any) => {
  const [show, setShow] = useState(false);
  return (
    <>
      <Modal show={props.showModal} onHide={props.hideModal}>
        <Modal.Header closeButton>
          <Modal.Title>{props.modalHeader}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{props.render()}</Modal.Body>
      </Modal>
    </>
  );
};

export default CustomModal;
