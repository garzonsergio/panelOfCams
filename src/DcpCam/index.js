import React from "react";
import "./DcpCam.css";
import { DcpContext } from "../DcpContext";
import { Modal } from "../Modal";
import Close from "../assets/img/close.svg";

function DcpCam(props) {
  const { reload, openModal, setOpenModal, modalData, setModalData } =
    React.useContext(DcpContext);

  return (
    <React.Fragment>
      <div
        className="cam-container"
        onClick={() => setOpenModal(true) & setModalData(props)}
      >
        <picture>
          <img src={`${props.route}?${reload}`} alt={props.route} />
        </picture>
        <h4 className="title-cam">{props.nameOfCam}</h4>
      </div>
      {/* Modal that shows images in front of the others */}
      {!!openModal && (
        <Modal>
          <section className="modal-container">
            <figure className="modal-picture-container">
              <img
                className="modal-picture"
                alt={modalData?.nameOfCam}
                src={modalData?.route}
              />
              <p>{modalData?.nameOfCam}</p>
            </figure>
            <img
              className="close-button"
              src={Close}
              alt="cerrar"
              onClick={() => setOpenModal(false)}
            />
          </section>
        </Modal>
      )}
    </React.Fragment>
  );
}

export { DcpCam };
